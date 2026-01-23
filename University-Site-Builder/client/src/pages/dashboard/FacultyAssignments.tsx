import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, AlertCircle } from "lucide-react";

export default function FacultyAssignments() {
  const assignments = [
    { id: 1, title: "Array Problems Set 1", subject: "Data Structures", dueDate: "Jan 29", submissions: 52, total: 60, submitted: 52, status: "Active" },
    { id: 2, title: "Sorting Algorithm Analysis", subject: "Advanced Algorithms", dueDate: "Jan 31", submissions: 38, total: 45, submitted: 38, status: "Active" },
    { id: 3, title: "Stack Implementation Project", subject: "Data Structures", dueDate: "Jan 26", submissions: 56, total: 60, submitted: 56, status: "Closed" },
    { id: 4, title: "Linked List Problems", subject: "Data Structures", dueDate: "Jan 22", submissions: 58, total: 60, submitted: 58, status: "Graded" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-blue-100 text-blue-800";
      case "Closed": return "bg-yellow-100 text-yellow-800";
      case "Graded": return "bg-green-100 text-green-800";
      default: return "bg-slate-100 text-slate-800";
    }
  };

  return (
    <DashboardLayout role="faculty">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Assignments</h1>
          <Button className="bg-blue-600">Create New Assignment</Button>
        </div>

        <div className="space-y-3">
          {assignments.map((assign) => (
            <Card key={assign.id}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-slate-900">{assign.title}</h3>
                      <Badge className={getStatusColor(assign.status)}>{assign.status}</Badge>
                    </div>
                    <p className="text-sm text-slate-600">{assign.subject}</p>
                  </div>
                  <p className="text-sm text-slate-600">Due: {assign.dueDate}</p>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-3">
                  <div>
                    <p className="text-xs text-slate-600">Submitted</p>
                    <p className="text-xl font-bold text-slate-900">{assign.submitted}/{assign.total}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-600">Graded</p>
                    <p className="text-xl font-bold text-slate-900">{Math.floor(assign.submitted * 0.8)}/{assign.total}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-600">Pending</p>
                    <p className="text-xl font-bold text-orange-600">{assign.total - assign.submitted}</p>
                  </div>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2 mb-3">
                  <div 
                    className="bg-green-600 h-2 rounded-full" 
                    style={{ width: `${(assign.submitted / assign.total) * 100}%` }}
                  ></div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">View Submissions</Button>
                  <Button size="sm" className="flex-1 bg-blue-600">Grade</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
