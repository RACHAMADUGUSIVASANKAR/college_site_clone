import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, CheckCircle } from "lucide-react";

export default function StudentCertificates() {
  const certificates = [
    { id: 1, name: "Semester 1 Completion Certificate", date: "Jun 2024", status: "Issued", downloadUrl: "#" },
    { id: 2, name: "Semester 2 Completion Certificate", date: "Dec 2024", status: "Issued", downloadUrl: "#" },
    { id: 3, name: "Python Programming Certification", date: "Oct 2024", status: "Issued", downloadUrl: "#" },
    { id: 4, name: "Web Development Workshop Certificate", date: "Nov 2024", status: "Issued", downloadUrl: "#" },
    { id: 5, name: "Semester 3 Completion Certificate", date: "Expected Jun 2025", status: "Pending", downloadUrl: null },
    { id: 6, name: "Data Science Course Certificate", date: "Expected Feb 2025", status: "In Progress", downloadUrl: null },
  ];

  return (
    <DashboardLayout role="student">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Certificates & Achievements</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certificates.map((cert) => (
            <Card key={cert.id} className="hover:shadow-md transition">
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900">{cert.name}</h3>
                    <p className="text-sm text-slate-600 mt-1">{cert.date}</p>
                  </div>
                  <Badge className={
                    cert.status === "Issued" ? "bg-green-100 text-green-800" :
                    cert.status === "Pending" ? "bg-yellow-100 text-yellow-800" :
                    "bg-blue-100 text-blue-800"
                  }>
                    {cert.status === "Issued" && <CheckCircle size={14} className="mr-1" />}
                    {cert.status}
                  </Badge>
                </div>
                {cert.downloadUrl ? (
                  <Button size="sm" className="w-full">
                    <Download size={16} className="mr-2" /> Download
                  </Button>
                ) : (
                  <Button size="sm" variant="outline" className="w-full" disabled>
                    Not Available Yet
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Certificate Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 mb-4">Request official certificates for various purposes like higher studies, placements, etc.</p>
            <Button variant="outline">Request Certificate</Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
