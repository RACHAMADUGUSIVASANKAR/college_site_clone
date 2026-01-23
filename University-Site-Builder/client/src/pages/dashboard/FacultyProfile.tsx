import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { Mail, Phone, MapPin, Calendar, Award, BookOpen, Users, Edit2 } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";

export default function FacultyProfile() {
  const { user } = useAuth();

  const profileData = {
    name: "Dr. Ramesh Kumar",
    email: "ramesh.kumar@srit.ac.in",
    phone: "+91-9876543210",
    department: "Computer Science and Engineering",
    designation: "Associate Professor",
    qualifications: [
      { degree: "PhD", field: "Computer Science", institution: "IIT Delhi", year: 2015 },
      { degree: "M.Tech", field: "Computer Science", institution: "JNTU Hyderabad", year: 2011 },
      { degree: "B.Tech", field: "Computer Science", institution: "SRIT", year: 2009 },
    ],
    experience: "8+ years",
    officeLocation: "Room 405, CSE Building",
    officeHours: "Mon, Wed, Fri: 3:00 PM - 5:00 PM",
    specialization: "Database Management, Web Technologies",
    publications: 12,
    researchInterests: ["Database Systems", "Cloud Computing", "Machine Learning"],
  };

  const subjects = [
    { code: "CS-201", name: "Data Structures", semester: "3rd", credits: 3, students: 60 },
    { code: "CS-301", name: "Algorithms", semester: "5th", credits: 3, students: 55 },
    { code: "CS-401", name: "Software Engineering", semester: "7th", credits: 3, students: 50 },
  ];

  const recentActivities = [
    { date: "Jan 22, 2026", activity: "Graded 25 assignments for CS-201", type: "Grading" },
    { date: "Jan 21, 2026", activity: "Updated course materials for CS-301", type: "Materials" },
    { date: "Jan 20, 2026", activity: "Conducted online class session", type: "Teaching" },
    { date: "Jan 19, 2026", activity: "Reviewed student projects", type: "Review" },
    { date: "Jan 18, 2026", activity: "Published assignment CS-201", type: "Assignment" },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Profile Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-6">
                <Avatar className="h-32 w-32">
                  <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Dr.Ramesh" />
                  <AvatarFallback>RK</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h1 className="text-3xl font-bold">{profileData.name}</h1>
                      <p className="text-lg text-slate-600">{profileData.designation}</p>
                      <p className="text-sm text-slate-500">{profileData.department}</p>
                    </div>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Edit2 className="h-4 w-4" />
                      Edit Profile
                    </Button>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-slate-700">{profileData.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-slate-700">{profileData.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-slate-700">{profileData.officeLocation}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Quick Stats */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-600">Experience</p>
                    <p className="text-2xl font-bold">{profileData.experience}</p>
                  </div>
                  <Calendar className="h-8 w-8 text-orange-500 opacity-20" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-600">Publications</p>
                    <p className="text-2xl font-bold">{profileData.publications}</p>
                  </div>
                  <BookOpen className="h-8 w-8 text-purple-500 opacity-20" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-600">Subjects</p>
                    <p className="text-2xl font-bold">{subjects.length}</p>
                  </div>
                  <Award className="h-8 w-8 text-green-500 opacity-20" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-600">Total Students</p>
                    <p className="text-2xl font-bold">{subjects.reduce((sum, s) => sum + s.students, 0)}</p>
                  </div>
                  <Users className="h-8 w-8 text-blue-500 opacity-20" />
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Professional Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Professional Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-sm text-slate-700 mb-2">Office Hours</h3>
                  <p className="text-sm text-slate-600">{profileData.officeHours}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-slate-700 mb-2">Specialization</h3>
                  <p className="text-sm text-slate-600">{profileData.specialization}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-slate-700 mb-2">Research Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    {profileData.researchInterests.map((interest, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Qualifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {profileData.qualifications.map((qual, idx) => (
                  <div key={idx} className="pb-4 border-b last:border-b-0">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-semibold text-sm">{qual.degree} in {qual.field}</h3>
                      <span className="text-xs text-slate-500">{qual.year}</span>
                    </div>
                    <p className="text-sm text-slate-600">{qual.institution}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Current Subjects */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Current Subjects</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-semibold text-sm text-slate-700">Code</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm text-slate-700">Subject Name</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm text-slate-700">Semester</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm text-slate-700">Credits</th>
                      <th className="text-left py-3 px-4 font-semibold text-sm text-slate-700">Students</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subjects.map((subject) => (
                      <tr key={subject.code} className="border-b hover:bg-slate-50">
                        <td className="py-3 px-4 text-sm font-medium text-blue-600">{subject.code}</td>
                        <td className="py-3 px-4 text-sm text-slate-700">{subject.name}</td>
                        <td className="py-3 px-4 text-sm text-slate-600">{subject.semester}</td>
                        <td className="py-3 px-4 text-sm text-slate-600">{subject.credits}</td>
                        <td className="py-3 px-4 text-sm font-semibold text-slate-700">{subject.students}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Recent Activities */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Recent Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentActivities.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 pb-3 border-b last:border-b-0">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-700">{item.activity}</p>
                      <p className="text-xs text-slate-500 mt-1">{item.date}</p>
                    </div>
                    <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded">
                      {item.type}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
