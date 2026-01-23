import { db } from "./db";
import { users, notices, achievements, placements, studentProfiles } from "@shared/schema";
import type { User, InsertUser, Notice, Achievement, Placement } from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getNotices(): Promise<Notice[]>;
  getAchievements(): Promise<Achievement[]>;
  getPlacements(): Promise<Placement[]>;
}

export class InMemoryStorage implements IStorage {
  private users: User[] = [];
  private notices: Notice[] = [];
  private achievements: Achievement[] = [];
  private placements: Placement[] = [];
  private nextUserId = 1;
  private nextNoticeId = 1;

  constructor() {
    // Seed with default users
    this.seedDefaultData();
  }

  private seedDefaultData() {
    this.users = [
      {
        id: this.nextUserId++,
        username: "student@srit.ac.in",
        password: "student123",
        role: "student",
        name: "Rahul Kumar",
        email: "student@srit.ac.in",
        avatarUrl: null
      },
      {
        id: this.nextUserId++,
        username: "faculty@srit.ac.in",
        password: "faculty123",
        role: "faculty",
        name: "Dr. Sharma",
        email: "faculty@srit.ac.in",
        avatarUrl: null
      },
      {
        id: this.nextUserId++,
        username: "admin@srit.ac.in",
        password: "admin123",
        role: "admin",
        name: "Admin User",
        email: "admin@srit.ac.in",
        avatarUrl: null
      }
    ];

    this.notices = [
      {
        id: this.nextNoticeId++,
        title: "Welcome to University Portal",
        content: "The new university management system is now live!",
        date: new Date(),
        category: "general"
      }
    ];

    this.achievements = [
      { id: 1, title: "Students Placed", value: "150+", description: "Students placed in top companies", icon: "Users" },
      { id: 2, title: "Research Papers", value: "50+", description: "Published in renowned journals", icon: "BookOpen" },
      { id: 3, title: "Industry Partners", value: "30+", description: "Collaborations with leading companies", icon: "Building" }
    ];

    this.placements = [
      { id: 1, company: "Google", package: "25 LPA", year: 2024 },
      { id: 2, company: "Microsoft", package: "22 LPA", year: 2024 },
      { id: 3, company: "Amazon", package: "20 LPA", year: 2024 }
    ];
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.find(u => u.id === id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return this.users.find(u => u.username === username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const user: User = {
      id: this.nextUserId++,
      ...insertUser
    };
    this.users.push(user);
    return user;
  }

  async getNotices(): Promise<Notice[]> {
    return this.notices;
  }

  async getAchievements(): Promise<Achievement[]> {
    return this.achievements;
  }

  async getPlacements(): Promise<Placement[]> {
    return this.placements;
  }
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async getNotices(): Promise<Notice[]> {
    return await db.select().from(notices).orderBy(notices.date);
  }

  async getAchievements(): Promise<Achievement[]> {
    return await db.select().from(achievements);
  }

  async getPlacements(): Promise<Placement[]> {
    return await db.select().from(placements);
  }
}

// Try to use database, fallback to in-memory if not available
import { db as dbInstance } from "./db";

let storage: IStorage;
if (dbInstance) {
  console.log("Using database storage (PostgreSQL/Supabase)");
  storage = new DatabaseStorage();
} else {
  console.log("No database connection, using in-memory storage");
  storage = new InMemoryStorage();
}

export { storage };
