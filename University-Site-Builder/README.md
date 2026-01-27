# 🎓 SRIT University Site Builder

A comprehensive, modern university website built with React, TypeScript, Express, and PostgreSQL. Features a full-stack application with role-based authentication, dynamic content management, and an engaging user interface.


## 🌟 Features

### Public Features
- **🏠 Dynamic Homepage**
  - Hero section with stunning visuals
  - About Us section with institutional highlights
  - Animated achievements counter (25+ years, 15k+ alumni, 250+ partners, 500+ research papers)
  - Latest news and events section with categorized updates
  - Interactive chatbot for instant assistance (bottom-left corner)

- **🎯 Placements Section**
  - Auto-scrolling company logos (Google, Microsoft, Amazon, TCS, Infosys, etc.)
  - Showcase of placed students with details (6 featured students)
  - Highest package: ₹45 LPA | Average: ₹8.5 LPA
  - Success stories with photos and company details

- **📚 Academics Section**
  - Computer Science programs
  - Engineering courses
  - Research labs showcase
  - Digital library access

- **🏛️ Campus Life**
  - Photo gallery with 6 vibrant campus images
  - Tech Fest, Sports Events, Cultural Night highlights
  - 50+ student clubs and organizations
  - Facilities: Sports Complex, Music & Arts, Photography

- **💬 Student Testimonials**
  - Auto-scrolling testimonials from 8+ students
  - Real student experiences and success stories
  - 5-star ratings and detailed feedback

- **📢 Admissions Section**
  - Prominent call-to-action for applications
  - Early bird discounts and scholarship information
  - Application deadline display
  - Download brochure option

- **📝 Examination**
  - Continuous assessment information
  - Online examination system
  - Semester structure details

### Authentication & Dashboards
- **🔐 Role-Based Login System**
  - Student Portal
  - Faculty Portal
  - Admin Portal
  - Session-based authentication with httpOnly cookies

- **👨‍🎓 Student Dashboard**
  - Personal profile and course information
  - Attendance tracking
  - Grade viewing
  - Assignment submissions

- **👨‍🏫 Faculty Dashboard**
  - Course management
  - Student records
  - Attendance management
  - Grade assignment

- **👨‍💼 Admin Dashboard**
  - User management
  - Content management system
  - Analytics and reports
  - System configuration

## 🚀 Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **TanStack Query** - Server state management
- **Wouter** - Routing
- **Framer Motion** - Animations
- **Tailwind CSS** - Styling
- **Shadcn/ui** - Component library
- **Radix UI** - Headless components

### Backend
- **Node.js** - Runtime
- **Express 5** - Web framework
- **TypeScript** - Type safety
- **PostgreSQL** - Database
- **Drizzle ORM** - Database ORM
- **Passport.js** - Authentication
- **Express Session** - Session management

### Development Tools
- **TSX** - TypeScript execution
- **ESBuild** - Fast bundling
- **Drizzle Kit** - Database migrations

## 📋 Prerequisites

- **Node.js** >= 18.x
- **npm** or **yarn**
- **Database** (Optional):
  - **Supabase** (Recommended - Free cloud PostgreSQL) OR
  - **PostgreSQL** >= 14.x (Local installation)
  - **No database?** The app works with in-memory storage!

## ⚙️ Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd University-Site-Builder
```

2. **Install dependencies**
```bash
npm install
```

3. **Choose Your Database Option**

### Option A: Supabase (Recommended - Cloud Database)
**Free, cloud-hosted, no installation required!**

Follow the [**Supabase Setup Guide (SUPABASE_SETUP.md)**](./SUPABASE_SETUP.md) for detailed instructions.

Quick steps:
1. Create free account at [supabase.com](https://supabase.com)
2. Create new project
3. Get connection string from Settings > Database
4. Set it in `run.ps1` or `.env` file
5. Run `npm run db:push` to create tables

### Option B: Local PostgreSQL
```bash
# Install PostgreSQL, then:
createdb university_db

# Set DATABASE_URL in .env
DATABASE_URL=postgres://username:password@localhost:5432/university_db

# Push schema
npm run db:push
```

### Option C: In-Memory Storage (No Database)
**Perfect for quick testing!**
- No setup required
- Just run the app (see below)
- Data resets on server restart

4. **Environment Variables**

Copy the example file:
```bash
cp .env.example .env
```

Edit `.env`:
```env
# Leave empty for in-memory storage
# Or add your Supabase/PostgreSQL connection string
DATABASE_URL=

PORT=3000
NODE_ENV=development
SESSION_SECRET=srit_secret_key
```

## 🏃‍♂️ Running the Application

### ⚡ Quick Start (Recommended - No Setup Required!)
```powershell
# Navigate to project directory
cd University-Site-Builder\University-Site-Builder

# Run with in-memory storage (no database needed)
$env:DATABASE_URL = ""
$env:PORT = "3000"
$env:NODE_ENV = "development"
npx tsx server/index.ts
```

✅ **Server starts on http://localhost:3000**

### With PowerShell Script
```powershell
# Simply run the PowerShell script
.\run.ps1
```

The app will automatically:
- ✅ Use in-memory storage (no database required)
- ✅ Start on http://localhost:3000
- ✅ Create demo login accounts
- ✅ Hot reload enabled for development

### With Supabase Database
1. Set your Supabase connection string in `.env` or `run.ps1`
2. Run `npm run db:push` (first time only)
3. Run `npx tsx server/index.ts`

### Manual Start (Windows PowerShell)
```powershell
# Without database (in-memory - recommended for quick test)
cd University-Site-Builder\University-Site-Builder
$env:DATABASE_URL = ""
$env:PORT = "3000"
$env:NODE_ENV = "development"
npx tsx server/index.ts

# With Supabase
$env:DATABASE_URL = "your_supabase_connection_string_here"
$env:PORT = "3000"
$env:NODE_ENV = "development"
npx tsx server/index.ts

# With Supabase/PostgreSQL
$env:DATABASE_URL = "your-connection-string"
$env:PORT = "3000"
$env:NODE_ENV = "development"
npx tsx server/index.ts
```

### Production Build
```bash
# Build the application
npm run build

# Start production server
npm start
```

The application will be available at: **http://localhost:3000**

**🎉 You'll see:**
- `No database connection, using in-memory storage` - OR
- `Using database storage (PostgreSQL/Supabase)`

## 🔑 Demo Credentials

### Student Portal
- **Username:** `student@srit.ac.in`
- **Password:** `student123`

### Faculty Portal
- **Username:** `faculty@srit.ac.in`
- **Password:** `faculty123`

### Admin Portal
- **Username:** `admin@srit.ac.in`
- **Password:** `admin123`

## 📁 Project Structure

```
University-Site-Builder/
├── client/                      # Frontend application
│   ├── public/                 # Static assets
│   ├── src/
│   │   ├── components/         # React components
│   │   │   ├── ui/            # Shadcn/ui components
│   │   │   ├── Navigation.tsx # Main navigation
│   │   │   ├── Footer.tsx     # Footer component
│   │   │   ├── Chatbot.tsx    # Interactive chatbot
│   │   │   ├── CountUp.tsx    # Counter animation
│   │   │   └── DashboardLayout.tsx
│   │   ├── pages/             # Page components
│   │   │   ├── Home.tsx       # Landing page
│   │   │   ├── Login.tsx      # Authentication
│   │   │   └── dashboard/     # Dashboard pages
│   │   ├── hooks/             # Custom React hooks
│   │   ├── lib/               # Utilities
│   │   └── index.css          # Global styles
│   └── index.html             # HTML entry point
├── server/                     # Backend application
│   ├── db.ts                  # Database connection
│   ├── index.ts               # Server entry point
│   ├── routes.ts              # API routes
│   ├── storage.ts             # Database queries
│   ├── vite.ts                # Vite dev server
│   └── static.ts              # Static file serving
├── shared/                     # Shared code
│   ├── schema.ts              # Database schema
│   └── routes.ts              # Route definitions
├── script/
│   └── build.ts               # Build script
├── drizzle.config.ts          # Drizzle ORM config
├── package.json               # Dependencies
├── tsconfig.json              # TypeScript config
├── tailwind.config.ts         # Tailwind config
└── vite.config.ts             # Vite config
```

## 🎨 Key Components

### CountUp Component
Animated number counter that triggers when scrolled into view. Used in the achievements section.

```tsx
<CountUp end={25} suffix="+" duration={2.5} />
```

### Chatbot Component
Interactive chatbot positioned on the bottom-left corner. Provides instant assistance to visitors.

### Navigation Component
Responsive navigation bar with smooth scroll links:
- Home
- About Us
- Admissions
- Academics
- Campus Life
- Examination
- Placements

### Dashboard Layouts
Role-specific dashboards with sidebar navigation and protected routes.

## 🎯 Features Breakdown

### Animations & Effects
- **Scroll-triggered animations** using Framer Motion
- **Counting animations** for statistics
- **Auto-scrolling** testimonials and company logos
- **Hover effects** with scale and shadow transitions
- **Gradient backgrounds** for visual appeal

### Responsive Design
- Mobile-first approach
- Breakpoints: sm, md, lg, xl
- Hamburger menu for mobile
- Touch-friendly interactions

### Performance Optimizations
- Code splitting
- Lazy loading
- Image optimization with Unsplash
- Efficient database queries
- Session management

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server (Unix/Linux)

# Build
npm run build        # Build for production

# Database
npm run db:push      # Push schema to database

# Type checking
npm run check        # Run TypeScript type checking
```

## 🌐 API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user

### Public Data
- `GET /api/achievements` - Get achievements data
- `GET /api/placements` - Get placement statistics

### Protected Routes (Dashboard)
- Student: `/student/dashboard`
- Faculty: `/faculty/dashboard`
- Admin: `/admin/dashboard`

## 🎨 Design System

### Colors
- **Primary:** #FF6A00 (Orange)
- **Background:** #FFFFFF (White)
- **Text:** Slate-900
- **Accent:** Orange-600

### Typography
- **Display Font:** Poppins (headings)
- **Body Font:** Inter (body text)

### Components
All UI components are built with Shadcn/ui and Radix UI for accessibility.

## 🐛 Troubleshooting

### Common Issues

**Database Connection Error**
```
Error: DATABASE_URL must be set
```
**Solution:** Ensure `.env` file exists with valid `DATABASE_URL`

**Port Already in Use**
```
Error: EADDRINUSE
```
**Solution:** Change PORT in `.env` or kill process using the port

**Windows Socket Error (ENOTSUP)**
```
Error: listen ENOTSUP: operation not supported on socket 0.0.0.0
```
**Solution:** Use `HOST=127.0.0.1` instead of `0.0.0.0` in Windows environment

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Development Team

Built with ❤️ for modern education

## 🙏 Acknowledgments

- **Unsplash** - High-quality images
- **Shadcn/ui** - Component library
- **Framer Motion** - Animation library
- **Radix UI** - Accessible components

## 📞 Support

For support, email support@srit.ac.in or visit our website.

---

**Version:** 1.0.0  
**Last Updated:** January 24, 2026

---

## ⚡ Getting Started in 30 Seconds

```bash
# 1. Navigate to project
cd University-Site-Builder\University-Site-Builder

# 2. Start the server (in-memory mode - no database needed!)
$env:DATABASE_URL = ""
$env:PORT = "3000"
$env:NODE_ENV = "development"
npx tsx server/index.ts

# 3. Open browser → http://localhost:3000
# 4. Login with demo credentials (see above)
```

✅ **Server Running** - No errors, no blanks!

### What You'll See

1. **Homepage** - Beautiful landing page with:
   - Hero section with campus visuals
   - Placement statistics (400+ offers, 9.08 LPA highest)
   - About SRIT section
   - Testimonials and campus highlights
   - News & events

2. **Student Dashboard** - Access after login with `student@srit.ac.in`:
   - Personal profile
   - Courses & marks
   - Attendance tracking
   - Assignments & exams
   - Fee details
   - Certificates

3. **Faculty Dashboard** - Login with `faculty@srit.ac.in`:
   - Course management
   - Attendance marking
   - Materials upload
   - Student performance
   - Announcements

4. **Admin Dashboard** - Login with `admin@srit.ac.in`:
   - Student management
   - Faculty management
   - Placement statistics
   - System reports
   - Settings

---

**🎉 Project is fully functional and ready to use!**
# 1. Clone and install
git clone <repo>
cd University-Site-Builder
npm install

# 2. Setup database
createdb university_db

# 3. Configure environment
echo "DATABASE_URL=postgres://localhost/university_db" > .env
echo "PORT=3000" >> .env
echo "NODE_ENV=development" >> .env

# 4. Run application (Windows)
powershell -File run.ps1

# 5. Open browser
# http://localhost:3000
```

🎉 **Your university website is now live!**
