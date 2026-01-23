import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trash2, Edit, UserPlus } from "lucide-react";

export default function AdminStudents() {
  const students = [
    { id: 1, name: "Rajesh Kumar", email: "rajesh@srit.ac.in", semester: 5, cumulativeGPA: 8.5, status: "Active", department: "CSE" },
    { id: 2, name: "Priya Singh", email: "priya@srit.ac.in", semester: 4, cumulativeGPA: 8.8, status: "Active", department: "ECE" },
    { id: 3, name: "Arjun Patel", email: "arjun@srit.ac.in", semester: 6, cumulativeGPA: 7.9, status: "Active", department: "ME" },
    { id: 4, name: "Neha Gupta", email: "neha@srit.ac.in", semester: 3, cumulativeGPA: 8.2, status: "Active", department: "CSE" },
    { id: 5, name: "Vikram Reddy", email: "vikram@srit.ac.in", semester: 5, cumulativeGPA: 7.6, status: "Inactive", department: "CE" },
    { id: 6, name: "Anjali Sharma", email: "anjali@srit.ac.in", semester: 4, cumulativeGPA: 8.7, status: "Active", department: "CSE" },
  ];

  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Student Management</h1>
          <Button className="bg-purple-600"><UserPlus className="w-4 h-4 mr-2" />Add Student</Button>
        </div>

        <Card>
          <CardContent className="p-4">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-slate-900">Name</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-slate-900">Email</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-slate-900">Department</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-slate-900">Semester</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-slate-900">GPA</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-slate-900">Status</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-slate-900">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student) => (
                    <tr key={student.id} className="border-t border-slate-200">
                      <td className="px-4 py-3 text-slate-900">{student.name}</td>
                      <td className="px-4 py-3 text-slate-600 text-sm">{student.email}</td>
                      <td className="px-4 py-3 text-slate-900">{student.department}</td>
                      <td className="px-4 py-3 text-slate-900">{student.semester}</td>
                      <td className="px-4 py-3 text-slate-900 font-semibold">{student.cumulativeGPA}</td>
                      <td className="px-4 py-3">
                        <Badge className={student.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}>
                          {student.status}
                        </Badge>
                      </td>
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
