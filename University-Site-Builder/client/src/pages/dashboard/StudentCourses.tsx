import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function StudentCourses() {
  const courses = [
    { id: 1, code: "CS-201", name: "Data Structures", instructor: "Dr. Sharma", credits: 4, status: "Active", grade: "A" },
    { id: 2, code: "CS-202", name: "Database Management", instructor: "Prof. Kumar", credits: 4, status: "Active", grade: "A-" },
    { id: 3, code: "CS-203", name: "Web Development", instructor: "Dr. Patel", credits: 3, status: "Active", grade: "B+" },
    { id: 4, code: "CS-204", name: "Algorithms", instructor: "Prof. Singh", credits: 4, status: "Active", grade: "A" },
    { id: 5, code: "CS-205", name: "Operating Systems", instructor: "Dr. Gupta", credits: 4, status: "Active", grade: "A-" },
    { id: 6, code: "CS-206", name: "Computer Networks", instructor: "Prof. Verma", credits: 3, status: "Active", grade: "B+" },
  ];

  return (
    <DashboardLayout role="student">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">My Courses</h1>

        <Card>
          <CardHeader>
            <CardTitle>Enrolled Courses (Semester 3)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {courses.map((course) => (
                <Card key={course.id} className="border-l-4 border-l-primary">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline">{course.code}</Badge>
                      <Badge className="bg-green-100 text-green-800">{course.grade}</Badge>
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-1">{course.name}</h3>
                    <p className="text-sm text-slate-600 mb-2">by {course.instructor}</p>
                    <p className="text-xs text-slate-500">{course.credits} Credits</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
