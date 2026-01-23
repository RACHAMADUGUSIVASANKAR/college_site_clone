import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import session from "express-session";
import MemoryStore from "memorystore";

const SessionStore = MemoryStore(session);

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Session setup
  app.use(session({
    secret: process.env.SESSION_SECRET || "srit_secret_key",
    resave: false,
    saveUninitialized: false,
    store: new SessionStore({
      checkPeriod: 86400000 // prune expired entries every 24h
    }),
    cookie: { secure: process.env.NODE_ENV === "production" }
  }));

  // Auth Routes
  app.post(api.auth.login.path, async (req, res) => {
    try {
      const { username, password, role } = api.auth.login.input.parse(req.body);
      
      const user = await storage.getUserByUsername(username);
      
      if (!user || user.password !== password || user.role !== role) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      (req.session as any).userId = user.id;
      res.json({ id: user.id, username: user.username, role: user.role, name: user.name });
    } catch (err) {
      res.status(400).json({ message: "Invalid request" });
    }
  });

  app.post(api.auth.logout.path, (req, res) => {
    req.session.destroy(() => {
      res.json({ message: "Logged out" });
    });
  });

  app.get(api.auth.me.path, async (req, res) => {
    const userId = (req.session as any).userId;
    if (!userId) {
      return res.json(null);
    }
    const user = await storage.getUser(userId);
    res.json(user || null);
  });

  // Public Data Routes
  app.get(api.notices.list.path, async (_req, res) => {
    const notices = await storage.getNotices();
    res.json(notices);
  });

  app.get(api.achievements.list.path, async (_req, res) => {
    const achievements = await storage.getAchievements();
    res.json(achievements);
  });

  app.get(api.placements.list.path, async (_req, res) => {
    const placements = await storage.getPlacements();
    res.json(placements);
  });

  // Seed Data Endpoint (for demo purposes)
  app.post("/api/seed", async (_req, res) => {
    const existing = await storage.getUserByUsername("student@srit.ac.in");
    if (!existing) {
      await storage.createUser({
        username: "student@srit.ac.in",
        password: "student123",
        role: "student",
        name: "Rahul Kumar",
        email: "student@srit.ac.in",
        avatarUrl: null
      });
      await storage.createUser({
        username: "faculty@srit.ac.in",
        password: "faculty123",
        role: "faculty",
        name: "Dr. Sharma",
        email: "faculty@srit.ac.in",
        avatarUrl: null
      });
       await storage.createUser({
        username: "admin@srit.ac.in",
        password: "admin123",
        role: "admin",
        name: "Admin User",
        email: "admin@srit.ac.in",
        avatarUrl: null
      });
    }
    res.json({ message: "Database seeded" });
  });

  return httpServer;
}
