import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { useNotices } from "@/hooks/use-data";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from "recharts";
import { Calendar, Bell, Clock, BookOpen, AlertCircle, TrendingUp, Award, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function StudentDashboard() {
  const { user } = useAuth();
  const { data: notices } = useNotices();

  const attendanceData = [
    { subject: "Mathematics", attendance: 85 },
    { subject: "Physics", attendance: 78 },
    { subject: "Chemistry", attendance: 92 },
    { subject: "English", attendance: 88 },
    { subject: "Comp Sci", attendance: 95 },
  ];

  const marksData = [
    { month: "Jan", marks: 75 },
    { month: "Feb", marks: 82 },
    { month: "Mar", marks: 78 },
    { month: "Apr", marks: 88 },
    { month: "May", marks: 92 },
  ];

  const performanceData = [
    { name: "Excellent", value: 25, color: "#10b981" },
    { name: "Good", value: 45, color: "#3b82f6" },
    { name: "Average", value: 25, color: "#f59e0b" },
    { name: "Need Improvement", value: 5, color: "#ef4444" },
  ];

  const upcomingClasses = [
    { id: 1, subject: "Mathematics", instructor: "Dr. Sharma", time: "09:00 AM", room: "A-101" },
    { id: 2, subject: "Physics", instructor: "Prof. Kumar", time: "10:30 AM", room: "B-205" },
    { id: 3, subject: "Chemistry", instructor: "Dr. Patel", time: "02:00 PM", room: "C-310" },
  ];

  const stats = [
    { label: "Current CGPA", value: "8.5", icon: TrendingUp, color: "text-green-600" },
    { label: "Attendance", value: "88%", icon: Clock, color: "text-blue-600" },
    { label: "Completed Assignments", value: "24/30", icon: BookOpen, color: "text-purple-600" },
    { label: "Pending Fees", value: "₹5,000", icon: Award, color: "text-orange-600" },
  ];

  return (
    <DashboardLayout role="student">
      <div className="space-y-8 pb-8">
        {/* Welcome Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-primary to-orange-600 text-white p-8 rounded-lg"
        >
          <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.name}!</h1>
          <p className="text-orange-100">Let's make today productive. You have 3 upcoming classes and 2 pending assignments.</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-slate-600 text-sm font-medium">{stat.label}</p>
                        <p className="text-2xl font-bold mt-2">{stat.value}</p>
                      </div>
                      <Icon className={`h-8 w-8 ${stat.color}`} />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Upcoming Classes */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Today's Classes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingClasses.map((cls, idx) => (
                    <div key={idx} className="border border-slate-200 rounded-lg p-4 hover:bg-slate-50 transition">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-slate-900">{cls.subject}</h4>
                          <p className="text-sm text-slate-600">with {cls.instructor}</p>
                        </div>
                        <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">{cls.time}</span>
                      </div>
                      <p className="text-sm text-slate-500 mt-2">📍 Room {cls.room}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Attendance Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Attendance by Subject</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={attendanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="subject" angle={-45} textAnchor="end" height={80} />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="attendance" fill="#FF6A00" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Marks Progress */}
            <Card>
              <CardHeader>
                <CardTitle>Your Performance Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={marksData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="marks" stroke="#FF6A00" strokeWidth={2} dot={{ fill: "#FF6A00", r: 4 }} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Notices */}
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Recent Notices
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { title: "Exam Schedule Released", date: "Today" },
                    { title: "Holiday Notice", date: "Jan 23" },
                    { title: "Library Extended Hours", date: "Jan 22" },
                    { title: "Placement Drive Update", date: "Jan 20" },
                  ].map((notice, idx) => (
                    <div key={idx} className="border-l-4 border-primary pl-3 py-2">
                      <p className="font-medium text-sm text-slate-900">{notice.title}</p>
                      <p className="text-xs text-slate-500">{notice.date}</p>
                    </div>
                  ))}
                </div>
                <Button variant="ghost" className="w-full text-primary hover:text-orange-600 hover:bg-orange-50 mt-4">
                  View All Notices
                </Button>
              </CardContent>
            </Card>

            {/* Performance Overview */}
            <Card>
              <CardHeader>
                <CardTitle>Performance Distribution</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center">
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie data={performanceData} cx="50%" cy="50%" innerRadius={40} outerRadius={80} paddingAngle={2} dataKey="value">
                      {performanceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
              <div className="px-6 pb-6 space-y-2">
                {performanceData.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span>{item.name}: {item.value}%</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start">Download Syllabus</Button>
                <Button variant="outline" className="w-full justify-start">View Exam Fees</Button>
                <Button variant="outline" className="w-full justify-start">Request Certificate</Button>
                <Button variant="outline" className="w-full justify-start">Academic Calendar</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
