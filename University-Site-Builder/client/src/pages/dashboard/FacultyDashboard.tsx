import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { Users, FileText, Calendar, Plus, TrendingUp, BarChart3, Clock } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { motion } from "framer-motion";

export default function FacultyDashboard() {
  const { user } = useAuth();

  const studentPerformanceData = [
    { name: "A (90-100)", students: 25 },
    { name: "B (80-89)", students: 45 },
    { name: "C (70-79)", students: 35 },
    { name: "D (60-69)", students: 20 },
    { name: "F (<60)", students: 5 },
  ];

  const attendanceData = [
    { week: "Week 1", attendance: 85 },
    { week: "Week 2", attendance: 88 },
    { week: "Week 3", attendance: 82 },
    { week: "Week 4", attendance: 90 },
    { week: "Week 5", attendance: 87 },
  ];

  const classes = [
    { id: 1, name: "Data Structures", time: "09:00 AM", room: "A-405", students: 60 },
    { id: 2, name: "Database Management", time: "11:00 AM", room: "B-301", students: 55 },
    { id: 3, name: "Web Development", time: "02:00 PM", room: "C-210", students: 50 },
  ];

  const stats = [
    { label: "Total Students", value: "165", icon: Users, color: "text-blue-600" },
    { label: "Assignments Graded", value: "78/100", icon: FileText, color: "text-green-600" },
    { label: "Classes Today", value: "3", icon: Clock, color: "text-purple-600" },
    { label: "Average Performance", value: "78%", icon: TrendingUp, color: "text-orange-600" },
  ];

  return (
    <DashboardLayout role="faculty">
      <div className="space-y-8 pb-8">
        {/* Welcome Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-lg"
        >
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome back, Prof. {user?.name}!</h1>
              <p className="text-blue-100">You have 3 classes today and 15 assignments pending review.</p>
            </div>
            <Button className="bg-white text-blue-600 hover:bg-blue-50 gap-2">
              <Plus size={18} /> Create Assignment
            </Button>
          </div>
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

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Today's Classes */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Today's Classes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {classes.map((cls) => (
                    <div key={cls.id} className="border border-slate-200 rounded-lg p-4 hover:bg-slate-50 transition">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-slate-900">{cls.name}</h4>
                          <p className="text-sm text-slate-600">📍 Room {cls.room}</p>
                        </div>
                        <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">{cls.time}</span>
                      </div>
                      <div className="flex items-center gap-4 mt-3 pt-3 border-t border-slate-100">
                        <span className="text-sm text-slate-600">{cls.students} Students</span>
                        <Button variant="outline" size="sm">Mark Attendance</Button>
                        <Button variant="outline" size="sm">View Roster</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Student Performance Distribution */}
            <Card>
              <CardHeader>
                <CardTitle>Student Grade Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={studentPerformanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="students" fill="#3b82f6" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Attendance Trend */}
            <Card>
              <CardHeader>
                <CardTitle>Class Attendance Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={attendanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="week" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="attendance" stroke="#3b82f6" strokeWidth={2} dot={{ fill: "#3b82f6", r: 4 }} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Pending Tasks */}
            <Card>
              <CardHeader>
                <CardTitle>Pending Tasks</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { title: "Grade 15 Assignments", priority: "High", dueDate: "Today" },
                  { title: "Prepare Lecture Slides", priority: "Medium", dueDate: "Tomorrow" },
                  { title: "Review Student Projects", priority: "High", dueDate: "Jan 28" },
                  { title: "Update Course Materials", priority: "Low", dueDate: "Feb 1" },
                ].map((task, idx) => (
                  <div key={idx} className="border border-slate-200 rounded p-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-medium text-sm text-slate-900">{task.title}</p>
                        <p className="text-xs text-slate-500">Due: {task.dueDate}</p>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded ${
                        task.priority === "High" ? "bg-red-100 text-red-700" :
                        task.priority === "Medium" ? "bg-yellow-100 text-yellow-700" :
                        "bg-green-100 text-green-700"
                      }`}>
                        {task.priority}
                      </span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Submissions */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Submissions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { student: "Rahul Kumar", assignment: "Assignment 5", date: "Today" },
                  { student: "Priya Singh", assignment: "Project Report", date: "Jan 23" },
                  { student: "Arjun Patel", assignment: "Assignment 4", date: "Jan 23" },
                  { student: "Zara Khan", assignment: "Assignment 5", date: "Jan 22" },
                ].map((item, idx) => (
                  <div key={idx} className="border-l-4 border-blue-500 pl-3 py-2">
                    <p className="font-medium text-sm text-slate-900">{item.student}</p>
                    <p className="text-xs text-slate-600">{item.assignment}</p>
                    <p className="text-xs text-slate-400">{item.date}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start">Upload Course Materials</Button>
                <Button variant="outline" className="w-full justify-start">Create Announcement</Button>
                <Button variant="outline" className="w-full justify-start">Schedule Office Hours</Button>
                <Button variant="outline" className="w-full justify-start">Download Attendance Sheet</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
