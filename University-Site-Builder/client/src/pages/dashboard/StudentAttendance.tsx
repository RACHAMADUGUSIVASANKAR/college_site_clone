import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2 } from "lucide-react";

export default function StudentAttendance() {
  const attendanceData = [
    { subject: "Data Structures", attended: 24, total: 28, percentage: 85 },
    { subject: "Database Management", attended: 26, total: 28, percentage: 92 },
    { subject: "Web Development", attended: 25, total: 28, percentage: 89 },
    { subject: "Algorithms", attended: 27, total: 28, percentage: 96 },
    { subject: "Operating Systems", attended: 22, total: 28, percentage: 78 },
    { subject: "Computer Networks", attended: 23, total: 28, percentage: 82 },
  ];

  return (
    <DashboardLayout role="student">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Attendance</h1>

        <Card>
          <CardHeader>
            <CardTitle>Overall Attendance: 87%</CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={87} className="mb-4" />
            <p className="text-sm text-slate-600">Keep up your attendance! 75% is required to sit in exams.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Attendance by Subject</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {attendanceData.map((item, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{item.subject}</span>
                  <span className="text-sm font-semibold">{item.attended}/{item.total}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Progress value={item.percentage} />
                  <span className="text-sm font-bold w-12">{item.percentage}%</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
