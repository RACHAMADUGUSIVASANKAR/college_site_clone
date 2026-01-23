import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { Mail, Phone, MapPin, Calendar, IdCard, BookOpen } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function StudentProfile() {
  const { user } = useAuth();

  return (
    <DashboardLayout role="student">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">My Profile</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <Card className="lg:col-span-1">
            <CardContent className="p-6 text-center">
              <Avatar className="w-24 h-24 mx-auto mb-4">
                <AvatarFallback className="bg-primary text-white text-2xl">RK</AvatarFallback>
              </Avatar>
              <h2 className="text-2xl font-bold">{user?.name}</h2>
              <p className="text-slate-600">B.Tech - Computer Science</p>
              <p className="text-sm text-slate-500 mt-2">3rd Semester</p>
              <Button className="w-full mt-4 bg-primary">Edit Profile</Button>
            </CardContent>
          </Card>

          {/* Personal Information */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <IdCard className="text-primary" />
                  <div>
                    <p className="text-sm text-slate-600">Student ID</p>
                    <p className="font-semibold">SRIT2024001</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-primary" />
                  <div>
                    <p className="text-sm text-slate-600">Email</p>
                    <p className="font-semibold">{user?.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-primary" />
                  <div>
                    <p className="text-sm text-slate-600">Phone</p>
                    <p className="font-semibold">+91 98765-43210</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-primary" />
                  <div>
                    <p className="text-sm text-slate-600">Location</p>
                    <p className="font-semibold">Delhi, India</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Academic Information */}
        <Card>
          <CardHeader>
            <CardTitle>Academic Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-slate-50 rounded-lg">
                <p className="text-slate-600 text-sm">Current CGPA</p>
                <p className="text-2xl font-bold mt-2">8.5</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg">
                <p className="text-slate-600 text-sm">Total Credits</p>
                <p className="text-2xl font-bold mt-2">45/120</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg">
                <p className="text-slate-600 text-sm">Attendance</p>
                <p className="text-2xl font-bold mt-2">88%</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg">
                <p className="text-slate-600 text-sm">Status</p>
                <p className="text-2xl font-bold mt-2 text-green-600">Active</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Guardian Information */}
        <Card>
          <CardHeader>
            <CardTitle>Guardian Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Father</h3>
                <p className="text-slate-700">Name: Rajesh Kumar</p>
                <p className="text-slate-700">Phone: +91 98765-00001</p>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Mother</h3>
                <p className="text-slate-700">Name: Kavita Kumar</p>
                <p className="text-slate-700">Phone: +91 98765-00002</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
