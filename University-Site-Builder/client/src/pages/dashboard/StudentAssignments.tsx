import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Clock, AlertCircle } from "lucide-react";

export default function StudentAssignments() {
  const assignments = [
    { id: 1, subject: "Data Structures", title: "Implement Binary Search Tree", dueDate: "Jan 28", status: "Submitted", score: 9, submitted: "Jan 25" },
    { id: 2, subject: "Database Management", title: "SQL Query Optimization", dueDate: "Jan 30", status: "Submitted", score: 8, submitted: "Jan 28" },
    { id: 3, subject: "Web Development", title: "Responsive Portfolio", dueDate: "Feb 2", status: "Pending", score: null, submitted: null },
    { id: 4, subject: "Algorithms", title: "Graph Algorithms Analysis", dueDate: "Jan 29", status: "Submitted", score: 9, submitted: "Jan 27" },
    { id: 5, subject: "Operating Systems", title: "Process Scheduling Simulation", dueDate: "Feb 5", status: "Not Started", score: null, submitted: null },
    { id: 6, subject: "Computer Networks", title: "Network Protocols Report", dueDate: "Feb 1", status: "Pending", score: null, submitted: null },
  ];

  const getStatusColor = (status: string) => {
    if (status === "Submitted") return "bg-green-100 text-green-800";
    if (status === "Pending") return "bg-yellow-100 text-yellow-800";
    return "bg-slate-100 text-slate-800";
  };

  const getStatusIcon = (status: string) => {
    if (status === "Submitted") return <CheckCircle2 className="w-4 h-4" />;
    return <Clock className="w-4 h-4" />;
  };

  return (
    <DashboardLayout role="student">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Assignments</h1>

        <Card>
          <CardHeader>
            <CardTitle>Assignment Status: {assignments.filter(a => a.status === "Submitted").length}/{assignments.length} Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {assignments.map((assignment) => (
                <div key={assignment.id} className="border border-slate-200 rounded-lg p-4 hover:shadow-md transition">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-slate-900">{assignment.title}</h4>
                      <p className="text-sm text-slate-600">{assignment.subject}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getStatusColor(assignment.status)}>
                        {getStatusIcon(assignment.status)}
                        <span className="ml-1">{assignment.status}</span>
                      </Badge>
                      {assignment.score && <Badge variant="outline" className="bg-green-50">Score: {assignment.score}/10</Badge>}
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-sm text-slate-600">
                    <span>Due: {assignment.dueDate}</span>
                    {assignment.status === "Submitted" && <span className="text-green-600">Submitted: {assignment.submitted}</span>}
                  </div>
                  {assignment.status === "Pending" && <Button size="sm" className="mt-2">Upload Assignment</Button>}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
