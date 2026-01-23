import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit, Plus, Trash2 } from "lucide-react";

export default function AdminTimetable() {
  const weekSchedule = [
    { id: 1, day: "Monday", time: "09:00-10:30", course: "CS-201 (Data Structures)", room: "Lab-101", faculty: "Dr. Rajesh Sharma" },
    { id: 2, day: "Monday", time: "11:00-12:30", course: "CS-301 (Algorithms)", room: "LH-201", faculty: "Prof. Anjali Verma" },
    { id: 3, day: "Tuesday", time: "09:00-10:30", course: "EC-201 (Digital Electronics)", room: "Lab-102", faculty: "Prof. Pooja Desai" },
    { id: 4, day: "Tuesday", time: "11:00-12:30", course: "ME-301 (Thermodynamics)", room: "LH-301", faculty: "Dr. Arun Kumar" },
    { id: 5, day: "Wednesday", time: "09:00-10:30", course: "CS-401 (Database Systems)", room: "Lab-201", faculty: "Dr. Rajesh Sharma" },
    { id: 6, day: "Wednesday", time: "11:00-12:30", course: "CE-201 (Structural Analysis)", room: "LH-102", faculty: "Dr. Sanjay Gupta" },
    { id: 7, day: "Thursday", time: "09:00-10:30", course: "CS-201 (Data Structures)", room: "LH-201", faculty: "Dr. Rajesh Sharma" },
    { id: 8, day: "Thursday", time: "02:00-03:30", course: "CS-301 (Algorithms)", room: "Lab-103", faculty: "Prof. Anjali Verma" },
    { id: 9, day: "Friday", time: "10:00-11:30", course: "EC-201 (Digital Electronics)", room: "LH-301", faculty: "Prof. Pooja Desai" },
  ];

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Timetable Management</h1>
          <Button className="bg-purple-600"><Plus className="w-4 h-4 mr-2" />Add Class</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
          {days.map((day) => (
            <Card key={day} className="border-l-4 border-l-purple-600">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-purple-600">{day}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {weekSchedule
                  .filter((item) => item.day === day)
                  .map((item) => (
                    <div key={item.id} className="p-2 bg-slate-50 rounded text-xs">
                      <p className="font-semibold text-slate-900">{item.time}</p>
                      <p className="text-slate-700 mt-1">{item.course}</p>
                      <p className="text-slate-600 text-xs">{item.room}</p>
                    </div>
                  ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Scheduled Classes</CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-3 py-2 text-left font-semibold text-slate-900">Day</th>
                    <th className="px-3 py-2 text-left font-semibold text-slate-900">Time</th>
                    <th className="px-3 py-2 text-left font-semibold text-slate-900">Course</th>
                    <th className="px-3 py-2 text-left font-semibold text-slate-900">Room</th>
                    <th className="px-3 py-2 text-left font-semibold text-slate-900">Faculty</th>
                    <th className="px-3 py-2 text-left font-semibold text-slate-900">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {weekSchedule.map((item) => (
                    <tr key={item.id} className="border-t border-slate-200">
                      <td className="px-3 py-2 text-slate-900">{item.day}</td>
                      <td className="px-3 py-2 text-slate-900 font-semibold">{item.time}</td>
                      <td className="px-3 py-2 text-slate-900">{item.course}</td>
                      <td className="px-3 py-2 text-slate-900">{item.room}</td>
                      <td className="px-3 py-2 text-slate-600 text-xs">{item.faculty}</td>
                      <td className="px-3 py-2">
                        <div className="flex gap-1">
                          <Button size="sm" variant="outline"><Edit className="w-3 h-3" /></Button>
                          <Button size="sm" variant="outline" className="text-red-600"><Trash2 className="w-3 h-3" /></Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
