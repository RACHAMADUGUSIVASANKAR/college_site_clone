import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";
import { Download, Filter } from "lucide-react";

export default function AdminReports() {
  const studentGrowth = [
    { year: "2021", enrollment: 900 },
    { year: "2022", enrollment: 1050 },
    { year: "2023", enrollment: 1250 },
    { year: "2024", enrollment: 1430 },
  ];

  const departmentWise = [
    { department: "CSE", students: 450 },
    { department: "ECE", students: 380 },
    { department: "ME", students: 320 },
    { department: "CE", students: 280 },
  ];

  const performanceMetrics = [
    { name: "CSE", value: 82 },
    { name: "ECE", value: 78 },
    { name: "ME", value: 75 },
    { name: "CE", value: 76 },
  ];

  const colors = ["#3b82f6", "#ef4444", "#10b981", "#f59e0b"];

  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">System Reports & Analytics</h1>
          <div className="flex gap-2">
            <Button variant="outline"><Filter className="w-4 h-4 mr-2" />Filters</Button>
            <Button className="bg-purple-600"><Download className="w-4 h-4 mr-2" />Export</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <p className="text-slate-600 text-sm mb-2">Total Students</p>
              <p className="text-3xl font-bold text-slate-900">1,430</p>
              <p className="text-xs text-green-600 mt-1">↑ 14% from 2023</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-slate-600 text-sm mb-2">Total Faculty</p>
              <p className="text-3xl font-bold text-slate-900">73</p>
              <p className="text-xs text-slate-600 mt-1">Across 4 departments</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-slate-600 text-sm mb-2">Average GPA</p>
              <p className="text-3xl font-bold text-slate-900">7.8</p>
              <p className="text-xs text-green-600 mt-1">↑ 0.3 from 2023</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-slate-600 text-sm mb-2">Placement Rate</p>
              <p className="text-3xl font-bold text-slate-900">89%</p>
              <p className="text-xs text-green-600 mt-1">↑ 2% from 2023</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Enrollment Trend (4 Years)</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={studentGrowth}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="enrollment" stroke="#3b82f6" name="Enrollment" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Department-wise Enrollment</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={departmentWise}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="department" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="students" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Performance Metrics by Department</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={performanceMetrics} cx="50%" cy="50%" labelLine={false} label={({ name, value }) => `${name}: ${value}%`} outerRadius={80} fill="#8884d8" dataKey="value">
                  {performanceMetrics.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-4">
              {performanceMetrics.map((dept, idx) => (
                <div key={idx} className="p-3 bg-slate-50 rounded">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-slate-900">{dept.name}</span>
                    <span className="text-lg font-bold text-slate-900">{dept.value}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full" style={{ width: `${dept.value}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
