import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";

export default function StudentExams() {
  const exams = [
    { id: 1, subject: "Data Structures", date: "Feb 15", time: "09:00 AM", duration: "3 hours", room: "A-101", type: "End Semester" },
    { id: 2, subject: "Database Management", date: "Feb 16", time: "02:00 PM", duration: "3 hours", room: "B-205", type: "End Semester" },
    { id: 3, subject: "Web Development", date: "Feb 17", time: "09:00 AM", duration: "3 hours", room: "C-310", type: "End Semester" },
    { id: 4, subject: "Algorithms", date: "Feb 18", time: "11:00 AM", duration: "3 hours", room: "A-205", type: "End Semester" },
    { id: 5, subject: "Operating Systems", date: "Feb 19", time: "02:00 PM", duration: "3 hours", room: "B-301", type: "End Semester" },
  ];

  return (
    <DashboardLayout role="student">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Exams</h1>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Exams (Semester 3)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {exams.map((exam) => (
                <div key={exam.id} className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold text-slate-900">{exam.subject}</h4>
                      <Badge variant="outline" className="mt-1">{exam.type}</Badge>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="text-primary" size={18} />
                      <div>
                        <p className="text-slate-600">Date</p>
                        <p className="font-semibold">{exam.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="text-primary" size={18} />
                      <div>
                        <p className="text-slate-600">Time</p>
                        <p className="font-semibold">{exam.time}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-slate-600">Duration</p>
                      <p className="font-semibold">{exam.duration}</p>
                    </div>
                    <div>
                      <p className="text-slate-600">Room</p>
                      <p className="font-semibold">{exam.room}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-6">
            <p className="text-blue-900"><strong>Important:</strong> Arrive 15 minutes before exam time. Bring your student ID and admit card.</p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
