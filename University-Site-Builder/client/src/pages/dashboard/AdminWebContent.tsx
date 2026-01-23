import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Edit, Trash2, Plus, Globe } from "lucide-react";

export default function AdminWebContent() {
  const pages = [
    { id: 1, name: "Homepage", path: "/", lastUpdated: "Jan 20", status: "Published", views: 5420 },
    { id: 2, name: "About Us", path: "/about", lastUpdated: "Jan 15", status: "Published", views: 2100 },
    { id: 3, name: "Academics", path: "/academics", lastUpdated: "Jan 18", status: "Published", views: 3850 },
    { id: 4, name: "Admissions", path: "/admissions", lastUpdated: "Jan 22", status: "Published", views: 4200 },
    { id: 5, name: "Campus Life", path: "/campus-life", lastUpdated: "Jan 19", status: "Published", views: 1950 },
    { id: 6, name: "Contact Us", path: "/contact", lastUpdated: "Jan 21", status: "Published", views: 890 },
  ];

  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Website Content Management</h1>
          <Button className="bg-purple-600"><Plus className="w-4 h-4 mr-2" />Create Page</Button>
        </div>

        <Card>
          <CardContent className="p-4">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-slate-900">Page Name</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-slate-900">URL</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-slate-900">Status</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-slate-900">Views</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-slate-900">Last Updated</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-slate-900">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {pages.map((page) => (
                    <tr key={page.id} className="border-t border-slate-200">
                      <td className="px-4 py-3 text-slate-900 font-semibold">{page.name}</td>
                      <td className="px-4 py-3 text-slate-600 flex items-center gap-1">
                        <Globe className="w-4 h-4" />{page.path}
                      </td>
                      <td className="px-4 py-3">
                        <Badge className="bg-green-100 text-green-800">{page.status}</Badge>
                      </td>
                      <td className="px-4 py-3 text-slate-900">{page.views.toLocaleString()}</td>
                      <td className="px-4 py-3 text-slate-600 text-sm">{page.lastUpdated}</td>
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-4">
              <p className="text-slate-600 text-sm mb-2">Total Pages</p>
              <p className="text-3xl font-bold text-slate-900">6</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-slate-600 text-sm mb-2">Total Views</p>
              <p className="text-3xl font-bold text-slate-900">18,410</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-slate-600 text-sm mb-2">Published</p>
              <p className="text-3xl font-bold text-slate-900">6</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
