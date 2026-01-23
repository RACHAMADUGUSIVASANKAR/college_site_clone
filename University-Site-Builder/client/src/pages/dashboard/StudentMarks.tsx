import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function StudentMarks() {
  const marksList = [
    { subject: "Data Structures", midsem: 38, endsem: 42, assignment: 8, total: 88, grade: "A" },
    { subject: "Database Management", midsem: 36, endsem: 41, assignment: 9, total: 86, grade: "A-" },
    { subject: "Web Development", midsem: 35, endsem: 38, assignment: 8, total: 81, grade: "B+" },
    { subject: "Algorithms", midsem: 39, endsem: 43, assignment: 9, total: 91, grade: "A" },
    { subject: "Operating Systems", midsem: 34, endsem: 39, assignment: 8, total: 81, grade: "B+" },
  ];

  return (
    <DashboardLayout role="student">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Marks & Results</h1>

        <Card>
          <CardHeader>
            <CardTitle>Semester 3 Marks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-50 border-b">
                  <tr>
                    <th className="text-left p-3">Subject</th>
                    <th className="text-center p-3">Mid-Sem</th>
                    <th className="text-center p-3">End-Sem</th>
                    <th className="text-center p-3">Assignment</th>
                    <th className="text-center p-3">Total</th>
                    <th className="text-center p-3">Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {marksList.map((item, idx) => (
                    <tr key={idx} className="border-b hover:bg-slate-50">
                      <td className="p-3">{item.subject}</td>
                      <td className="text-center p-3">{item.midsem}</td>
                      <td className="text-center p-3">{item.endsem}</td>
                      <td className="text-center p-3">{item.assignment}</td>
                      <td className="text-center p-3 font-bold">{item.total}</td>
                      <td className="text-center p-3">
                        <Badge className="bg-green-100 text-green-800">{item.grade}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>GPA Summary</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg text-center">
              <p className="text-slate-600 text-sm">Current CGPA</p>
              <p className="text-3xl font-bold text-blue-600 mt-2">8.5</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg text-center">
              <p className="text-slate-600 text-sm">Semester GPA</p>
              <p className="text-3xl font-bold text-green-600 mt-2">8.6</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg text-center">
              <p className="text-slate-600 text-sm">Highest Mark</p>
              <p className="text-3xl font-bold text-purple-600 mt-2">91</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
