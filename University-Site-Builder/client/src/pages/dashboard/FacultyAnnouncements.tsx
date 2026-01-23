import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Send, MessageSquare } from "lucide-react";

export default function FacultyAnnouncements() {
  const announcements = [
    { id: 1, subject: "Data Structures", title: "Midterm Exam Postponed", content: "The midterm exam scheduled for Jan 29 has been postponed to Feb 5 due to infrastructure maintenance.", date: "Jan 24", status: "Published" },
    { id: 2, subject: "Data Structures", title: "Assignment 3 Extended", content: "Assignment 3 submission deadline extended to Jan 31. Please ensure all corrections are made before resubmission.", date: "Jan 23", status: "Published" },
    { id: 3, subject: "Advanced Algorithms", title: "Guest Lecture Scheduled", content: "Prof. Rajesh Kumar from IIT Delhi will deliver a guest lecture on Advanced Graph Algorithms on Feb 1st at 10:00 AM.", date: "Jan 22", status: "Published" },
    { id: 4, subject: "Database Design Lab", title: "Lab System Maintenance", content: "The database lab systems will be down on Jan 26 for maintenance. Plan your lab work accordingly.", date: "Jan 20", status: "Published" },
  ];

  return (
    <DashboardLayout role="faculty">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Announcements</h1>
          <Button className="bg-blue-600"><Send className="w-4 h-4 mr-2" />Create Announcement</Button>
        </div>

        <div className="space-y-3">
          {announcements.map((announce) => (
            <Card key={announce.id}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-slate-900">{announce.title}</h3>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">{announce.status}</span>
                    </div>
                    <p className="text-sm text-slate-600">{announce.subject}</p>
                  </div>
                  <span className="text-xs text-slate-500">{announce.date}</span>
                </div>
                <p className="text-slate-700 text-sm mb-3 mt-2">{announce.content}</p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1"><MessageSquare className="w-4 h-4 mr-1" />Comments</Button>
                  <Button size="sm" variant="outline" className="flex-1">Edit</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
