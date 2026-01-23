import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function StudentNotices() {
  const notices = [
    { id: 1, title: "Exam Schedule Released", date: "Jan 24", category: "Exam", content: "End semester exam schedule for Semester 3 has been released. Check your exam timetable in the Exams section." },
    { id: 2, title: "Holiday Notice", date: "Jan 23", category: "General", content: "Classes will be suspended on 26th January (Republic Day). Regular classes resume on 27th January." },
    { id: 3, title: "Library Extended Hours", date: "Jan 22", category: "General", content: "Library will remain open from 8 AM to 10 PM during exam season to help students prepare." },
    { id: 4, title: "Placement Drive Update", date: "Jan 20", category: "Placement", content: "TCS and Infosys placement drives scheduled for February. Interested students should register by Jan 30." },
    { id: 5, title: "Fee Submission Deadline", date: "Jan 18", category: "Fee", content: "Last date to submit semester fees is February 10. Late fee of ₹500 will be applicable after the deadline." },
    { id: 6, title: "Assignment Submission Extension", date: "Jan 15", category: "Academic", content: "Due to technical issues, assignment submission deadline has been extended by 3 days." },
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Exam: "bg-red-100 text-red-800",
      General: "bg-blue-100 text-blue-800",
      Placement: "bg-green-100 text-green-800",
      Fee: "bg-yellow-100 text-yellow-800",
      Academic: "bg-purple-100 text-purple-800",
    };
    return colors[category] || "bg-slate-100 text-slate-800";
  };

  return (
    <DashboardLayout role="student">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Notices & Announcements</h1>

        <div className="space-y-3">
          {notices.map((notice) => (
            <Card key={notice.id} className="hover:shadow-md transition">
              <CardContent className="p-4">
                <div className="flex gap-4">
                  <AlertCircle className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-slate-900">{notice.title}</h3>
                      <span className={`text-xs font-semibold px-2 py-1 rounded ${getCategoryColor(notice.category)}`}>
                        {notice.category}
                      </span>
                    </div>
                    <p className="text-slate-700 mb-2">{notice.content}</p>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-slate-500">{notice.date}</p>
                      <Button variant="ghost" size="sm">Read More</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
