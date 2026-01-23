import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Edit, Trash2, Plus } from "lucide-react";

export default function AdminEvents() {
  const events = [
    { id: 1, name: "Annual Tech Fest", date: "Feb 15-17", location: "Campus Ground", registrations: 450, category: "Fest", status: "Upcoming" },
    { id: 2, name: "Sports Day 2024", date: "Feb 10", location: "Sports Complex", registrations: 280, category: "Sports", status: "Upcoming" },
    { id: 3, name: "Alumni Meet", date: "Jan 28", location: "Auditorium", registrations: 150, category: "Meet", status: "Upcoming" },
    { id: 4, name: "Industry Talk - AI/ML", date: "Feb 5", location: "LH-201", registrations: 320, category: "Workshop", status: "Upcoming" },
    { id: 5, name: "Hackathon 2024", date: "Feb 22-23", location: "Lab Complex", registrations: 200, category: "Competition", status: "Planning" },
    { id: 6, name: "Cultural Night", date: "Mar 1", location: "Auditorium", registrations: 0, category: "Cultural", status: "Planning" },
  ];

  const getStatusBadge = (status: string) => {
    return status === "Upcoming" ? "bg-blue-100 text-blue-800" : "bg-yellow-100 text-yellow-800";
  };

  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Event Management</h1>
          <Button className="bg-purple-600"><Plus className="w-4 h-4 mr-2" />Create Event</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {events.map((event) => (
            <Card key={event.id}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-slate-900">{event.name}</h3>
                    <Badge className="mt-1 text-xs">{event.category}</Badge>
                  </div>
                  <Badge className={getStatusBadge(event.status)}>{event.status}</Badge>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Calendar className="w-4 h-4" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <MapPin className="w-4 h-4" />
                    {event.location}
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Users className="w-4 h-4" />
                    {event.registrations} registrations
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <Button size="sm" variant="outline" className="flex-1"><Edit className="w-4 h-4 mr-1" />Edit</Button>
                  <Button size="sm" variant="outline" className="flex-1 text-red-600"><Trash2 className="w-4 h-4 mr-1" />Delete</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
