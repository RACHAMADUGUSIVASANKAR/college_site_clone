# 🚀 Supabase Setup Guide

This project now supports **Supabase** as the database backend instead of local PostgreSQL!

## Why Supabase?

- ✅ **Free tier available** - No need to install PostgreSQL locally
- ✅ **Cloud-hosted** - Access your data from anywhere
- ✅ **Automatic backups** - Your data is safe
- ✅ **Built-in dashboard** - View and manage data easily
- ✅ **SSL secured** - Production-ready security

## Quick Setup (5 minutes)

### Step 1: Create Supabase Account

1. Go to [https://supabase.com](https://supabase.com)
2. Click **"Start your project"**
3. Sign up with GitHub, Google, or Email

### Step 2: Create New Project

1. Click **"New Project"**
2. Choose your organization (or create one)
3. Fill in project details:
   - **Name**: `university-site-builder` (or any name)
   - **Database Password**: Create a strong password (SAVE THIS!)
   - **Region**: Choose closest to you
   - **Pricing Plan**: Free (perfect for development)
4. Click **"Create new project"**
5. Wait 2-3 minutes for setup to complete

### Step 3: Get Connection String

1. In your Supabase project dashboard, click **"Settings"** (gear icon in sidebar)
2. Click **"Database"** in the settings menu
3. Scroll down to **"Connection pooling"** section
4. Copy the **"Connection string"** (it looks like this):
   ```
   postgres://postgres.[project-ref]:[YOUR-PASSWORD]@aws-0-[region].pooler.supabase.com:6543/postgres
   ```
5. Replace `[YOUR-PASSWORD]` with the database password you created in Step 2

### Step 4: Configure Your Project

**Option A: Using PowerShell (Quick Start)**

Edit `run.ps1` and replace the line:
```powershell
$env:DATABASE_URL = ""
```

With your connection string:
```powershell
$env:DATABASE_URL = "postgres://postgres.xxxxx:your-password@aws-0-region.pooler.supabase.com:6543/postgres"
```

**Option B: Using .env file**

1. Copy `.env.example` to `.env`:
   ```powershell
   Copy-Item .env.example .env
   ```

2. Edit `.env` and set:
   ```
   DATABASE_URL=postgres://postgres.xxxxx:your-password@aws-0-region.pooler.supabase.com:6543/postgres
   ```

### Step 5: Push Database Schema

Run this command to create tables in Supabase:
```powershell
npm run db:push
```

You should see:
```
✓ Pushing schema changes to database
✓ Done!
```

### Step 6: Seed Initial Data

The app will automatically create demo users when you first try to login. Use these credentials:

**Student Login:**
- Username: `student@srit.ac.in`
- Password: `student123`

**Faculty Login:**
- Username: `faculty@srit.ac.in`
- Password: `faculty123`

**Admin Login:**
- Username: `admin@srit.ac.in`
- Password: `admin123`

### Step 7: Run the Application

```powershell
.\run.ps1
```

Or manually:
```powershell
cd c:\Users\sivasankar\Downloads\University-Site-Builder\University-Site-Builder
$env:DATABASE_URL = "your-supabase-connection-string"
npx tsx server/index.ts
```

## Viewing Your Data in Supabase

1. Go to your Supabase project dashboard
2. Click **"Table Editor"** in the sidebar
3. You'll see all your tables: `users`, `notices`, `achievements`, `placements`, etc.
4. Click any table to view and edit data directly!

## Troubleshooting

### Connection Error
- **Problem**: `connection refused` or `timeout`
- **Solution**: Check your connection string is correct and includes your actual password

### SSL Error
- **Problem**: `SSL connection error`
- **Solution**: Already handled! The code automatically configures SSL for Supabase

### Schema Push Failed
- **Problem**: `db:push` fails
- **Solution**: Make sure DATABASE_URL is set before running the command

### Want to Switch Back to In-Memory?
Just set `DATABASE_URL` to empty:
```powershell
$env:DATABASE_URL = ""
```

## In-Memory Mode (No Database)

If you don't want to set up Supabase right now:
- Just run the app without setting `DATABASE_URL`
- The app will use in-memory storage automatically
- Perfect for quick testing and development
- ⚠️ Data resets when server restarts

## Production Deployment

For production, consider:
1. Using Supabase **Pro** tier for better performance
2. Setting strong `SESSION_SECRET` in environment variables
3. Enabling Row Level Security (RLS) in Supabase
4. Regular database backups (automatic in Supabase)

## Need Help?

- Supabase Docs: [https://supabase.com/docs](https://supabase.com/docs)
- Supabase Discord: [https://discord.supabase.com](https://discord.supabase.com)
- Drizzle ORM Docs: [https://orm.drizzle.team/docs](https://orm.drizzle.team/docs)
