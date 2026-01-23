import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trash2, Edit, Plus } from "lucide-react";

export default function AdminCourses() {
  const courses = [
    { id: 1, code: "CS-201", name: "Data Structures", department: "CSE", credits: 3, semester: 3, students: 120, faculty: "Dr. Rajesh Sharma" },
    { id: 2, code: "CS-301", name: "Algorithms", department: "CSE", credits: 3, semester: 4, students: 95, faculty: "Prof. Anjali Verma" },
    { id: 3, code: "CS-401", name: "Database Systems", department: "CSE", credits: 4, semester: 5, students: 60, faculty: "Dr. Rajesh Sharma" },
    { id: 4, code: "EC-201", name: "Digital Electronics", department: "ECE", credits: 3, semester: 3, students: 80, faculty: "Prof. Pooja Desai" },
    { id: 5, code: "ME-301", name: "Thermodynamics", department: "ME", credits: 4, semester: 4, students: 70, faculty: "Dr. Arun Kumar" },
    { id: 6, code: "CE-201", name: "Structural Analysis", department: "CE", credits: 3, semester: 3, students: 55, faculty: "Dr. Sanjay Gupta" },
  ];

  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Course Management</h1>
          <Button className="bg-purple-600"><Plus className="w-4 h-4 mr-2" />Add Course</Button>
        </div>

        <Card>
          <CardContent className="p-4">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-slate-900">Code</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-slate-900">Course Name</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-slate-900">Department</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-slate-900">Semester</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-slate-900">Credits</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-slate-900">Students</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-slate-900">Faculty</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-slate-900">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((course) => (
                    <tr key={course.id} className="border-t border-slate-200">
                      <td className="px-4 py-3 text-slate-900 font-semibold">{course.code}</td>
                      <td className="px-4 py-3 text-slate-900">{course.name}</td>
                      <td className="px-4 py-3 text-slate-900">{course.department}</td>
                      <td className="px-4 py-3 text-slate-900">{course.semester}</td>
                      <td className="px-4 py-3 text-slate-900">{course.credits}</td>
                      <td className="px-4 py-3">
                        <Badge className="bg-blue-100 text-blue-800">{course.students}</Badge>
                      </td>
                      <td className="px-4 py-3 text-slate-600 text-sm">{course.faculty}</td>
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
