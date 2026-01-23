import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trash2, Edit, UserPlus } from "lucide-react";

export default function AdminFaculty() {
  const faculty = [
    { id: 1, name: "Dr. Rajesh Sharma", email: "rajesh.s@srit.ac.in", department: "CSE", qualification: "PhD", experience: "12 years", status: "Active" },
    { id: 2, name: "Prof. Anjali Verma", email: "anjali.v@srit.ac.in", department: "ECE", qualification: "M.Tech", experience: "8 years", status: "Active" },
    { id: 3, name: "Dr. Arun Kumar", email: "arun.k@srit.ac.in", department: "ME", qualification: "PhD", experience: "15 years", status: "Active" },
    { id: 4, name: "Prof. Pooja Desai", email: "pooja.d@srit.ac.in", department: "CSE", qualification: "M.Tech", experience: "6 years", status: "Active" },
    { id: 5, name: "Dr. Sanjay Gupta", email: "sanjay.g@srit.ac.in", department: "CE", qualification: "PhD", experience: "10 years", status: "Inactive" },
  ];

  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Faculty Management</h1>
          <Button className="bg-purple-600"><UserPlus className="w-4 h-4 mr-2" />Add Faculty</Button>
        </div>

        <Card>
          <CardContent className="p-4">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-slate-900">Name</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-slate-900">Email</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-slate-900">Department</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-slate-900">Qualification</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-slate-900">Experience</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-slate-900">Status</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-slate-900">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {faculty.map((f) => (
                    <tr key={f.id} className="border-t border-slate-200">
                      <td className="px-4 py-3 text-slate-900 font-medium">{f.name}</td>
                      <td className="px-4 py-3 text-slate-600 text-sm">{f.email}</td>
                      <td className="px-4 py-3 text-slate-900">{f.department}</td>
                      <td className="px-4 py-3 text-slate-900">{f.qualification}</td>
                      <td className="px-4 py-3 text-slate-900">{f.experience}</td>
                      <td className="px-4 py-3">
                        <Badge className={f.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}>
                          {f.status}
                        </Badge>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex gap-1">
                          <Button size="sm" variant="outline"><Edit className="w-4 h-4" /></Button>
                          <Button size="sm" variant="outline" className="text-red-600"><Trash2 className="w-4 h-4" /></Button>
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
