import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, File, Download } from "lucide-react";

export default function FacultyMaterials() {
  const materials = [
    { id: 1, subject: "Data Structures", title: "Lecture 1: Arrays & Linked Lists", date: "Jan 15", size: "2.4 MB", type: "PDF" },
    { id: 2, subject: "Data Structures", title: "Lecture 2: Stacks & Queues", date: "Jan 18", size: "1.8 MB", type: "PDF" },
    { id: 3, subject: "Data Structures", title: "Practice Problems Set 1", date: "Jan 20", size: "0.5 MB", type: "PDF" },
    { id: 4, subject: "Advanced Algorithms", title: "Sorting Algorithms Comparison", date: "Jan 17", size: "3.2 MB", type: "PPT" },
    { id: 5, subject: "Database Design", title: "ER Diagrams & Normalization", date: "Jan 19", size: "2.1 MB", type: "PDF" },
  ];

  return (
    <DashboardLayout role="faculty">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Course Materials</h1>
          <Button className="bg-blue-600"><Upload className="w-4 h-4 mr-2" />Upload New</Button>
        </div>

        <div className="space-y-3">
          {materials.map((material) => (
            <Card key={material.id}>
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3 flex-1">
                    <File className="text-blue-600 mt-1" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900">{material.title}</h3>
                      <p className="text-sm text-slate-600">{material.subject}</p>
                      <p className="text-xs text-slate-500 mt-1">Uploaded on {material.date} • {material.size}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline"><Download className="w-4 h-4" /></Button>
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
