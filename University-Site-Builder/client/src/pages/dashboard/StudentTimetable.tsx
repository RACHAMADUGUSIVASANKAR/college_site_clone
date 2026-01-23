import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Clock } from "lucide-react";

export default function StudentTimetable() {
  const timetable = {
    Monday: [
      { time: "09:00-10:30", subject: "Data Structures", instructor: "Dr. Sharma", room: "A-101" },
      { time: "10:45-12:15", subject: "Database Management", instructor: "Prof. Kumar", room: "B-205" },
      { time: "02:00-03:30", subject: "Web Development", instructor: "Dr. Patel", room: "C-310" },
    ],
    Tuesday: [
      { time: "09:00-10:30", subject: "Algorithms", instructor: "Prof. Singh", room: "A-205" },
      { time: "11:00-12:30", subject: "Operating Systems", instructor: "Dr. Gupta", room: "B-301" },
    ],
    Wednesday: [
      { time: "09:00-10:30", subject: "Computer Networks", instructor: "Prof. Verma", room: "C-102" },
      { time: "02:00-04:00", subject: "Lab: Data Structures", instructor: "Dr. Sharma", room: "Lab-A" },
    ],
    Thursday: [
      { time: "09:00-10:30", subject: "Database Management", instructor: "Prof. Kumar", room: "B-205" },
      { time: "11:00-12:30", subject: "Web Development", instructor: "Dr. Patel", room: "C-310" },
    ],
    Friday: [
      { time: "09:00-10:30", subject: "Data Structures", instructor: "Dr. Sharma", room: "A-101" },
      { time: "10:45-12:15", subject: "Algorithms", instructor: "Prof. Singh", room: "A-205" },
    ],
  };

  return (
    <DashboardLayout role="student">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Timetable</h1>

        {Object.entries(timetable).map(([day, classes]) => (
          <Card key={day}>
            <CardHeader>
              <CardTitle>{day}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {classes.map((cls, idx) => (
                  <div key={idx} className="flex gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-primary transition">
                    <div className="flex items-center gap-2">
                      <Clock className="text-primary" size={20} />
                      <span className="font-bold text-slate-900 min-w-[100px]">{cls.time}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-900">{cls.subject}</h4>
                      <p className="text-sm text-slate-600">{cls.instructor}</p>
                      <p className="text-sm text-slate-500">Room: {cls.room}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  );
}
