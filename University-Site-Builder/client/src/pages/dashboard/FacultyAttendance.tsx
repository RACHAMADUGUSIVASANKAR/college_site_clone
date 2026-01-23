import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function FacultyAttendance() {
  const classes = [
    { id: 1, subject: "Data Structures", date: "Jan 24", time: "09:00 AM", enrolledStudents: 60, presentStudents: 54 },
    { id: 2, subject: "Data Structures", date: "Jan 22", time: "09:00 AM", enrolledStudents: 60, presentStudents: 58 },
    { id: 3, subject: "Advanced Algorithms", date: "Jan 24", time: "11:00 AM", enrolledStudents: 45, presentStudents: 42 },
    { id: 4, subject: "Database Design Lab", date: "Jan 23", time: "02:00 PM", enrolledStudents: 30, presentStudents: 28 },
  ];

  return (
    <DashboardLayout role="faculty">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Mark Attendance</h1>

        <div className="space-y-4">
          {classes.map((cls) => (
            <Card key={cls.id}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-slate-900">{cls.subject}</h3>
                    <p className="text-sm text-slate-600">{cls.date} at {cls.time}</p>
                  </div>
                  <CheckCircle className="text-green-600" />
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-slate-600">Total Enrolled</p>
                    <p className="text-2xl font-bold text-slate-900">{cls.enrolledStudents}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600">Present Today</p>
                    <p className="text-2xl font-bold text-green-600">{cls.presentStudents}</p>
                  </div>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2 mb-3">
                  <div 
                    className="bg-green-600 h-2 rounded-full" 
                    style={{ width: `${(cls.presentStudents / cls.enrolledStudents) * 100}%` }}
                  ></div>
                </div>
                <p className="text-sm text-slate-600 mb-3">
                  Attendance: {((cls.presentStudents / cls.enrolledStudents) * 100).toFixed(1)}%
                </p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">View List</Button>
                  <Button size="sm" className="flex-1 bg-blue-600">Edit Attendance</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
