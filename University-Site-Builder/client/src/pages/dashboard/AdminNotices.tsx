import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, Edit, Trash2, Plus } from "lucide-react";

export default function AdminNotices() {
  const notices = [
    { id: 1, title: "Mid-Semester Exam Schedule Released", date: "Jan 24", priority: "High", category: "Academic", author: "Admin" },
    { id: 2, title: "Hostel Maintenance Work", date: "Jan 23", priority: "Medium", category: "Hostel", author: "Admin" },
    { id: 3, title: "Placement Drive - TCS", date: "Jan 22", priority: "High", category: "Placement", author: "Admin" },
    { id: 4, title: "Library Extension Timings", date: "Jan 21", priority: "Low", category: "General", author: "Admin" },
    { id: 5, title: "Fee Payment Deadline Extended", date: "Jan 20", priority: "High", category: "Finance", author: "Admin" },
    { id: 6, title: "Campus Wi-Fi Upgrade Notice", date: "Jan 19", priority: "Medium", category: "Technical", author: "Admin" },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "bg-red-100 text-red-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Low": return "bg-green-100 text-green-800";
      default: return "bg-slate-100 text-slate-800";
    }
  };

  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Notice Board</h1>
          <Button className="bg-purple-600"><Plus className="w-4 h-4 mr-2" />Create Notice</Button>
        </div>

        <div className="space-y-3">
          {notices.map((notice) => (
            <Card key={notice.id}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-slate-900">{notice.title}</h3>
                      <Badge className={getPriorityColor(notice.priority)}>{notice.priority}</Badge>
                      <Badge variant="outline">{notice.category}</Badge>
                    </div>
                    <p className="text-xs text-slate-600">Posted on {notice.date}</p>
                  </div>
                </div>
                <div className="flex gap-2 mt-3">
                  <Button size="sm" variant="outline" className="flex-1"><Edit className="w-4 h-4 mr-1" />Edit</Button>
                  <Button size="sm" variant="outline" className="flex-1 text-red-600"><Trash2 className="w-4 h-4 mr-1" />Delete</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
