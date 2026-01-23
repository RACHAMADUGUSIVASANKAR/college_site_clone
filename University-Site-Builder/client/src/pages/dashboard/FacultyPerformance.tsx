import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from "recharts";

export default function FacultyPerformance() {
  const gradeData = [
    { grade: "A+", students: 12, percentage: 20 },
    { grade: "A", students: 18, percentage: 30 },
    { grade: "B+", students: 15, percentage: 25 },
    { grade: "B", students: 10, percentage: 17 },
    { grade: "C", students: 5, percentage: 8 },
  ];

  const performanceTrend = [
    { semester: "Sem 1", avg: 75, passed: 94, failed: 6 },
    { semester: "Sem 2", avg: 76, passed: 95, failed: 5 },
    { semester: "Sem 3", avg: 77, passed: 96, failed: 4 },
    { semester: "Sem 4", avg: 78, passed: 97, failed: 3 },
    { semester: "Sem 5", avg: 79, passed: 97, failed: 3 },
  ];

  const studentPerformance = [
    { name: "Data Structures", avgScore: 82, submissions: 58, attendance: 92 },
    { name: "Advanced Algorithms", avgScore: 78, submissions: 41, attendance: 88 },
    { name: "Database Design", avgScore: 85, submissions: 28, attendance: 94 },
    { name: "Software Engineering", avgScore: 80, submissions: 52, attendance: 90 },
  ];

  return (
    <DashboardLayout role="faculty">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Student Performance Analytics</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-4">
              <p className="text-slate-600 text-sm mb-2">Average Score</p>
              <p className="text-3xl font-bold text-slate-900">78.5%</p>
              <p className="text-xs text-green-600 mt-2">↑ 2.5% from last semester</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-slate-600 text-sm mb-2">Pass Rate</p>
              <p className="text-3xl font-bold text-slate-900">96%</p>
              <p className="text-xs text-green-600 mt-2">↑ 1% from last semester</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-slate-600 text-sm mb-2">Avg Attendance</p>
              <p className="text-3xl font-bold text-slate-900">91%</p>
              <p className="text-xs text-slate-600 mt-2">Across all courses</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Grade Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={gradeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="grade" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="students" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Performance Trend (5 Semesters)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={performanceTrend}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="semester" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="avg" stroke="#3b82f6" name="Average Score" />
                <Line type="monotone" dataKey="passed" stroke="#10b981" name="Passed %" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Course-wise Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {studentPerformance.map((course, idx) => (
                <div key={idx} className="p-3 border rounded-lg">
                  <div className="flex justify-between mb-2">
                    <h4 className="font-semibold text-slate-900">{course.name}</h4>
                    <span className="text-slate-900 font-bold">{course.avgScore}%</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-slate-600">Submissions: {course.submissions}</p>
                    </div>
                    <div>
                      <p className="text-slate-600">Attendance: {course.attendance}%</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
