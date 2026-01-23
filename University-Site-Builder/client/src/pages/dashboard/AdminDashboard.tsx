import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, CartesianGrid } from "recharts";
import { Activity, Users, DollarSign, AlertCircle, TrendingUp, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function AdminDashboard() {
  const { user } = useAuth();
  
  const userActivityData = [
    { name: 'Jan', students: 1200, faculty: 180, active: 800 },
    { name: 'Feb', students: 1400, faculty: 190, active: 1000 },
    { name: 'Mar', students: 1600, faculty: 200, active: 1200 },
    { name: 'Apr', students: 1800, faculty: 210, active: 1400 },
    { name: 'May', students: 2000, faculty: 220, active: 1600 },
    { name: 'Jun', students: 2200, faculty: 230, active: 1800 },
  ];

  const departmentData = [
    { name: "Computer Science", value: 45, color: "#3b82f6" },
    { name: "Electronics", value: 25, color: "#10b981" },
    { name: "Mechanical", value: 20, color: "#f59e0b" },
    { name: "Civil", value: 10, color: "#ef4444" },
  ];

  const stats = [
    { label: "Total Students", value: "2,450", icon: Users, color: "text-blue-600", bgColor: "bg-blue-50" },
    { label: "Total Faculty", value: "230", icon: Users, color: "text-green-600", bgColor: "bg-green-50" },
    { label: "System Health", value: "98%", icon: Activity, color: "text-purple-600", bgColor: "bg-purple-50" },
    { label: "Fee Collection", value: "₹24.5L", icon: DollarSign, color: "text-orange-600", bgColor: "bg-orange-50" },
  ];

  const recentUsers = [
    { name: "Rahul Kumar", email: "rahul@srit.ac.in", role: "Student", status: "Active" },
    { name: "Dr. Sharma", email: "sharma@srit.ac.in", role: "Faculty", status: "Active" },
    { name: "Priya Singh", email: "priya@srit.ac.in", role: "Student", status: "Active" },
    { name: "Prof. Patel", email: "patel@srit.ac.in", role: "Faculty", status: "Inactive" },
  ];

  const pendingApprovals = [
    { id: 1, type: "Student Registration", name: "Arjun Dev", date: "Jan 23", priority: "High" },
    { id: 2, type: "Fee Waiver Request", name: "Zara Khan", date: "Jan 23", priority: "Medium" },
    { id: 3, type: "Course Add/Drop", name: "Neha Sharma", date: "Jan 22", priority: "Low" },
    { id: 4, type: "Placement Apply", name: "Vikas Gupta", date: "Jan 22", priority: "High" },
  ];

  return (
    <DashboardLayout role="admin">
      <div className="space-y-8 pb-8">
        {/* Welcome Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-8 rounded-lg"
        >
          <h1 className="text-3xl font-bold mb-2">Welcome, {user?.name}!</h1>
          <p className="text-purple-100">You have 4 pending approvals and 2 critical alerts. System health is excellent.</p>
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
                  <CardContent className={`p-6 ${stat.bgColor}`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-slate-600 text-sm font-medium">{stat.label}</p>
                        <p className="text-2xl font-bold mt-2 text-slate-900">{stat.value}</p>
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
            {/* User Activity Chart */}
            <Card>
              <CardHeader>
                <CardTitle>User Activity Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={userActivityData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="students" stroke="#3b82f6" strokeWidth={2} name="Students" />
                    <Line type="monotone" dataKey="faculty" stroke="#10b981" strokeWidth={2} name="Faculty" />
                    <Line type="monotone" dataKey="active" stroke="#f59e0b" strokeWidth={2} name="Active Users" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Enrollment Statistics */}
            <Card>
              <CardHeader>
                <CardTitle>Enrollment Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={userActivityData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="students" fill="#3b82f6" radius={[8, 8, 0, 0]} name="Students" />
                    <Bar dataKey="faculty" fill="#10b981" radius={[8, 8, 0, 0]} name="Faculty" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Department Distribution */}
            <Card>
              <CardHeader>
                <CardTitle>Student Distribution by Department</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex justify-center">
                    <ResponsiveContainer width="100%" height={200}>
                      <PieChart>
                        <Pie data={departmentData} cx="50%" cy="50%" innerRadius={40} outerRadius={80} paddingAngle={2} dataKey="value">
                          {departmentData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="flex flex-col justify-center space-y-2">
                    {departmentData.map((dept, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: dept.color }}></div>
                        <span className="text-sm text-slate-700">{dept.name}: {dept.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Pending Approvals */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-orange-600" />
                  Pending Approvals
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {pendingApprovals.map((item) => (
                  <div key={item.id} className="border border-slate-200 rounded p-3 hover:bg-slate-50 transition">
                    <div className="flex items-start justify-between mb-1">
                      <h4 className="font-medium text-sm text-slate-900">{item.type}</h4>
                      <span className={`text-xs px-2 py-1 rounded ${
                        item.priority === "High" ? "bg-red-100 text-red-700" :
                        item.priority === "Medium" ? "bg-yellow-100 text-yellow-700" :
                        "bg-green-100 text-green-700"
                      }`}>
                        {item.priority}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600">{item.name}</p>
                    <p className="text-xs text-slate-400">{item.date}</p>
                  </div>
                ))}
                <Button variant="outline" className="w-full mt-2">View All</Button>
              </CardContent>
            </Card>

            {/* Recent Users */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Users</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentUsers.map((user, idx) => (
                  <div key={idx} className="flex items-center justify-between pb-2 border-b border-slate-100 last:border-0">
                    <div className="flex-1">
                      <p className="font-medium text-sm text-slate-900">{user.name}</p>
                      <p className="text-xs text-slate-500">{user.email}</p>
                      <span className="inline-block mt-1 text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">{user.role}</span>
                    </div>
                    <span className={`text-xs font-medium ${user.status === "Active" ? "text-green-600" : "text-slate-400"}`}>
                      {user.status}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* System Alerts */}
            <Card>
              <CardHeader>
                <CardTitle>System Alerts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="bg-green-50 border border-green-200 rounded p-3">
                  <p className="text-xs font-medium text-green-900">✓ All systems operational</p>
                  <p className="text-xs text-green-700">No issues detected</p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded p-3">
                  <p className="text-xs font-medium text-blue-900">ℹ Database Backup</p>
                  <p className="text-xs text-blue-700">Scheduled at 2:00 AM</p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Admin Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start">Create New User</Button>
                <Button variant="outline" className="w-full justify-start">Generate Reports</Button>
                <Button variant="outline" className="w-full justify-start">System Settings</Button>
                <Button variant="outline" className="w-full justify-start">View Audit Logs</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
