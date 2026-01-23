import { ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { useAuth } from "@/hooks/use-auth";
import { 
  LayoutDashboard, 
  BookOpen, 
  Users, 
  Calendar, 
  FileText, 
  LogOut, 
  Bell,
  Settings,
  GraduationCap,
  User,
  CheckSquare,
  BarChart3,
  Clock,
  ClipboardList,
  Award,
  Wallet,
  AlertCircle,
  Briefcase,
  Megaphone,
  Upload,
  TrendingUp,
  Building2,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface DashboardLayoutProps {
  children: ReactNode;
  role: "student" | "faculty" | "admin";
}

export function DashboardLayout({ children, role }: DashboardLayoutProps) {
  const { user, logout } = useAuth();
  const [location] = useLocation();

  const links = {
    student: [
      { icon: LayoutDashboard, label: "Dashboard", href: "/student/dashboard" },
      { icon: User, label: "Profile", href: "/student/profile" },
      { icon: BookOpen, label: "Courses", href: "/student/courses" },
      { icon: CheckSquare, label: "Attendance", href: "/student/attendance" },
      { icon: BarChart3, label: "Marks", href: "/student/marks" },
      { icon: Clock, label: "Timetable", href: "/student/timetable" },
      { icon: ClipboardList, label: "Assignments", href: "/student/assignments" },
      { icon: Calendar, label: "Exams", href: "/student/exams" },
      { icon: AlertCircle, label: "Notices", href: "/student/notices" },
      { icon: Wallet, label: "Fees", href: "/student/fees" },
      { icon: Award, label: "Certificates", href: "/student/certificates" },
    ],
    faculty: [
      { icon: LayoutDashboard, label: "Dashboard", href: "/faculty/dashboard" },
      { icon: User, label: "Profile", href: "/faculty/profile" },
      { icon: BookOpen, label: "Subjects", href: "/faculty/subjects" },
      { icon: CheckSquare, label: "Mark Attendance", href: "/faculty/attendance" },
      { icon: Upload, label: "Upload Materials", href: "/faculty/materials" },
      { icon: ClipboardList, label: "Assignments", href: "/faculty/assignments" },
      { icon: TrendingUp, label: "Student Performance", href: "/faculty/performance" },
      { icon: Megaphone, label: "Announcements", href: "/faculty/announcements" },
    ],
    admin: [
      { icon: LayoutDashboard, label: "Dashboard", href: "/admin/dashboard" },
      { icon: Users, label: "Student Management", href: "/admin/students" },
      { icon: Users, label: "Faculty Management", href: "/admin/faculty" },
      { icon: BookOpen, label: "Courses", href: "/admin/courses" },
      { icon: Building2, label: "Departments", href: "/admin/departments" },
      { icon: Clock, label: "Timetable", href: "/admin/timetable" },
      { icon: Briefcase, label: "Placements", href: "/admin/placements" },
      { icon: Zap, label: "Events", href: "/admin/events" },
      { icon: AlertCircle, label: "Notices", href: "/admin/notices" },
      { icon: FileText, label: "Website Content", href: "/admin/content" },
      { icon: BarChart3, label: "Reports", href: "/admin/reports" },
      { icon: Settings, label: "Settings", href: "/admin/settings" },
    ]
  };

  const currentLinks = links[role] || [];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 fixed h-full z-10 hidden md:flex flex-col">
        <div className="p-6 border-b border-slate-100 flex items-center gap-3">
          <div className="bg-primary p-1.5 rounded-lg text-white">
            <GraduationCap size={20} />
          </div>
          <span className="font-bold font-display text-xl tracking-tight">SRIT Portal</span>
        </div>

        <div className="flex-1 py-6 px-4 space-y-1">
          {currentLinks.map((link) => {
            const isActive = location === link.href;
            return (
              <Link key={link.href} href={link.href}>
                <div className={`flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-colors ${
                  isActive 
                    ? "bg-orange-50 text-primary font-medium" 
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}>
                  <link.icon size={18} />
                  <span>{link.label}</span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="p-4 border-t border-slate-100">
          <Button 
            variant="ghost" 
            className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50"
            onClick={() => logout()}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64">
        <header className="bg-white border-b border-slate-200 h-16 px-6 flex items-center justify-between sticky top-0 z-10">
          <h1 className="text-lg font-semibold text-slate-800 capitalize">{role} Dashboard</h1>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5 text-slate-500" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
            </Button>
            
            <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium text-slate-900">{user?.name}</p>
                <p className="text-xs text-slate-500 capitalize">{role}</p>
              </div>
              <Avatar>
                <AvatarImage src={user?.avatarUrl || undefined} />
                <AvatarFallback className="bg-orange-100 text-primary font-bold">
                  {user?.name?.charAt(0) || "U"}
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
