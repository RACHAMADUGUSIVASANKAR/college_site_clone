import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users } from "lucide-react";

export default function FacultySubjects() {
  const subjects = [
    { code: "CS-201", name: "Data Structures", semester: "3", students: 60, credits: 4, status: "Active" },
    { code: "CS-301", name: "Advanced Algorithms", semester: "5", students: 45, credits: 4, status: "Active" },
    { code: "CS-202", name: "Database Design Lab", semester: "3", students: 30, credits: 2, status: "Active" },
    { code: "CS-401", name: "Software Engineering", semester: "7", students: 55, credits: 4, status: "Active" },
  ];

  return (
    <DashboardLayout role="faculty">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">My Subjects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {subjects.map((subject) => (
            <Card key={subject.code} className="border-l-4 border-l-blue-600 hover:shadow-md transition">
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline">{subject.code}</Badge>
                  <Badge className="bg-green-100 text-green-800">{subject.status}</Badge>
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">{subject.name}</h3>
                <p className="text-sm text-slate-600 mb-3">Semester {subject.semester} • {subject.credits} Credits</p>
                <div className="flex items-center gap-2 mb-3 text-sm text-slate-700">
                  <Users size={16} />
                  <span>{subject.students} Students Enrolled</span>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">View Class</Button>
                  <Button size="sm" variant="outline" className="flex-1">Materials</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
