import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Edit, Plus, Trash2 } from "lucide-react";

export default function AdminDepartments() {
  const departments = [
    { id: 1, name: "Computer Science & Engineering", code: "CSE", hod: "Dr. Rajesh Sharma", students: 450, faculty: 25, budget: "₹50L" },
    { id: 2, name: "Electronics & Communication", code: "ECE", hod: "Prof. Anjali Verma", students: 380, faculty: 18, budget: "₹45L" },
    { id: 3, name: "Mechanical Engineering", code: "ME", hod: "Dr. Arun Kumar", students: 320, faculty: 16, budget: "₹40L" },
    { id: 4, name: "Civil Engineering", code: "CE", hod: "Dr. Sanjay Gupta", students: 280, faculty: 14, budget: "₹35L" },
  ];

  const departmentStats = [
    { name: "CSE", value: 450 },
    { name: "ECE", value: 380 },
    { name: "ME", value: 320 },
    { name: "CE", value: 280 },
  ];

  const colors = ["#3b82f6", "#ef4444", "#10b981", "#f59e0b"];

  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Department Management</h1>
          <Button className="bg-purple-600"><Plus className="w-4 h-4 mr-2" />Add Department</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Student Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie data={departmentStats} cx="50%" cy="50%" labelLine={false} label={({ name, value }) => `${name}: ${value}`} outerRadius={80} fill="#8884d8" dataKey="value">
                    {departmentStats.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Summary Statistics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded">
                <span className="text-slate-600">Total Students</span>
                <span className="text-2xl font-bold text-slate-900">1,430</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded">
                <span className="text-slate-600">Total Faculty</span>
                <span className="text-2xl font-bold text-slate-900">73</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded">
                <span className="text-slate-600">Total Budget</span>
                <span className="text-2xl font-bold text-slate-900">₹1.7Cr</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="p-4">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-slate-900">Department Name</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-slate-900">Code</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-slate-900">HOD</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-slate-900">Students</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-slate-900">Faculty</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-slate-900">Budget</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-slate-900">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {departments.map((dept) => (
                    <tr key={dept.id} className="border-t border-slate-200">
                      <td className="px-4 py-3 text-slate-900 font-medium">{dept.name}</td>
                      <td className="px-4 py-3 text-slate-900 font-semibold">{dept.code}</td>
                      <td className="px-4 py-3 text-slate-600">{dept.hod}</td>
                      <td className="px-4 py-3 text-slate-900">{dept.students}</td>
                      <td className="px-4 py-3 text-slate-900">{dept.faculty}</td>
                      <td className="px-4 py-3 text-slate-900 font-semibold">{dept.budget}</td>
                      <td className="px-4 py-3">
                        <div className="flex gap-1">
                          <Button size="sm" variant="outline"><Edit className="w-4 h-4" /></Button>
                          <Button size="sm" variant="outline" className="text-red-600"><Trash2 className="w-4 h-4" /></Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
