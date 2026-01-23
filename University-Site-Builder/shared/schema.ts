import { pgTable, text, serial, integer, boolean, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  role: text("role", { enum: ["student", "faculty", "admin"] }).notNull(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  avatarUrl: text("avatar_url"),
});

export const notices = pgTable("notices", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  date: timestamp("date").defaultNow().notNull(),
  category: text("category", { enum: ["general", "student", "faculty", "exam"] }).notNull(),
});

export const achievements = pgTable("achievements", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  value: text("value").notNull(), // e.g., "150+"
  description: text("description"),
  icon: text("icon").notNull(), // Lucide icon name
});

export const placements = pgTable("placements", {
  id: serial("id").primaryKey(),
  company: text("company").notNull(),
  package: text("package"), // e.g., "12 LPA"
  year: integer("year").notNull(),
});

// Student specific data
export const studentProfiles = pgTable("student_profiles", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(), // FK to users
  studentId: text("student_id").notNull(), // e.g., SRIT123
  department: text("department").notNull(),
  semester: integer("semester").notNull(),
  attendance: integer("attendance").default(0), // Percentage
  cgpa: text("cgpa").default("0.0"),
});

export const insertUserSchema = createInsertSchema(users).omit({ id: true });
export const insertNoticeSchema = createInsertSchema(notices).omit({ id: true, date: true });
export const insertAchievementSchema = createInsertSchema(achievements).omit({ id: true });
export const insertPlacementSchema = createInsertSchema(placements).omit({ id: true });
export const insertStudentProfileSchema = createInsertSchema(studentProfiles).omit({ id: true });

export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;
export type Notice = typeof notices.$inferSelect;
export type Achievement = typeof achievements.$inferSelect;
export type Placement = typeof placements.$inferSelect;
export type StudentProfile = typeof studentProfiles.$inferSelect;
