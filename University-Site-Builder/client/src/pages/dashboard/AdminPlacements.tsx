import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function AdminPlacements() {
  const salaryBuckets = [
    { range: "8.9 LPA", count: 49 },
    { range: "3.36 - 7 LPA", count: 119 },
    { range: "4 - 6.75 LPA", count: 181 },
    { range: "3.6 - 6.5 LPA", count: 43 },
    { range: "3.5 LPA", count: 239 },
  ];

  const departmentRates = [
    { department: "CIV", rate: 74.1 },
    { department: "CSE", rate: 93.8 },
    { department: "ECE", rate: 95.5 },
    { department: "EEE", rate: 92.1 },
    { department: "MEC", rate: 85.1 },
  ];

  const highlightStats = [
    { label: "Total Offers (2024-25)", value: "400+" },
    { label: "Core Companies Connected", value: "24+" },
    { label: "Highest Package", value: "9.08 LPA" },
    { label: "Average Package", value: "3.95 LPA" },
    { label: "Dream Offers > 6 LPA", value: "34+" },
    { label: "Wipro Recruitment", value: "Highest numbers" },
  ];

  const keyNotes = [
    "Highest package offered to 49 students by DBS Asia Hub 2 Pvt. Ltd.",
    "Wipro recorded the highest number of recruits this year.",
    "Historical growth noted since AY 2019-20 through AY 2021-22 (baseline 59.2% and rising).",
  ];

  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Placement Management</h1>
          <Badge className="bg-purple-100 text-purple-800 border border-purple-200">Updated with AY 2024-25 data</Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {highlightStats.map((item, idx) => (
            <Card key={idx}>
              <CardContent className="p-4">
                <p className="text-slate-600 text-sm mb-1">{item.label}</p>
                <p className="text-3xl font-bold text-slate-900">{item.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Salary Bracket Distribution</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
            {salaryBuckets.map((bucket, idx) => (
              <div key={idx} className="p-3 bg-slate-50 rounded border border-slate-200 text-center">
                <p className="text-sm text-slate-600">{bucket.range}</p>
                <p className="text-2xl font-bold text-slate-900">{bucket.count}</p>
                <p className="text-xs text-slate-500">students</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Department-wise Placement Rates</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={320}>
              <BarChart data={departmentRates}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="department" />
                <YAxis domain={[60, 100]} tickFormatter={(v) => `${v}%`} />
                <Tooltip formatter={(v: number) => `${v}%`} />
                <Legend />
                <Bar dataKey="rate" fill="#7c3aed" name="Placement %" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Key Highlights</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {keyNotes.map((note, idx) => (
              <div key={idx} className="p-3 bg-purple-50 border border-purple-100 rounded">
                <p className="text-slate-800 text-sm font-medium">{note}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
