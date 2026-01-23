import { Switch, Route, Redirect } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { useAuth } from "@/hooks/use-auth";

import Home from "@/pages/Home";
import Login from "@/pages/Login";
import StudentDashboard from "@/pages/dashboard/StudentDashboard";
import FacultyDashboard from "@/pages/dashboard/FacultyDashboard";
import AdminDashboard from "@/pages/dashboard/AdminDashboard";
import NotFound from "@/pages/not-found";

// Student Pages
import StudentProfile from "@/pages/dashboard/StudentProfile";
import StudentCourses from "@/pages/dashboard/StudentCourses";
import StudentAttendance from "@/pages/dashboard/StudentAttendance";
import StudentMarks from "@/pages/dashboard/StudentMarks";
import StudentTimetable from "@/pages/dashboard/StudentTimetable";
import StudentAssignments from "@/pages/dashboard/StudentAssignments";
import StudentExams from "@/pages/dashboard/StudentExams";
import StudentNotices from "@/pages/dashboard/StudentNotices";
import StudentFees from "@/pages/dashboard/StudentFees";
import StudentCertificates from "@/pages/dashboard/StudentCertificates";

// Faculty Pages
import FacultyProfile from "@/pages/dashboard/FacultyProfile";
import FacultySubjects from "@/pages/dashboard/FacultySubjects";
import FacultyAttendance from "@/pages/dashboard/FacultyAttendance";
import FacultyMaterials from "@/pages/dashboard/FacultyMaterials";
import FacultyAssignments from "@/pages/dashboard/FacultyAssignments";
import FacultyPerformance from "@/pages/dashboard/FacultyPerformance";
import FacultyAnnouncements from "@/pages/dashboard/FacultyAnnouncements";

// Admin Pages
import AdminStudents from "@/pages/dashboard/AdminStudents";
import AdminFaculty from "@/pages/dashboard/AdminFaculty";
import AdminCourses from "@/pages/dashboard/AdminCourses";
import AdminDepartments from "@/pages/dashboard/AdminDepartments";
import AdminTimetable from "@/pages/dashboard/AdminTimetable";
import AdminPlacements from "@/pages/dashboard/AdminPlacements";
import AdminEvents from "@/pages/dashboard/AdminEvents";
import AdminNotices from "@/pages/dashboard/AdminNotices";
import AdminWebContent from "@/pages/dashboard/AdminWebContent";
import AdminReports from "@/pages/dashboard/AdminReports";
import AdminSettings from "@/pages/dashboard/AdminSettings";

// Higher Order Component for Protected Routes
function ProtectedRoute({ 
  component: Component, 
  allowedRole 
}: { 
  component: React.ComponentType<any>, 
  allowedRole: "student" | "faculty" | "admin" 
}) {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user) {
    return <Redirect to="/login" />;
  }

  if (user.role !== allowedRole) {
    // Redirect to their correct dashboard if they try to access another role's route
    return <Redirect to={`/${user.role}/dashboard`} />;
  }

  return <Component />;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
      
      {/* Protected Dashboard Routes */}
      <Route path="/student/dashboard">
        <ProtectedRoute component={StudentDashboard} allowedRole="student" />
      </Route>
      <Route path="/student/profile">
        <ProtectedRoute component={StudentProfile} allowedRole="student" />
      </Route>
      <Route path="/student/courses">
        <ProtectedRoute component={StudentCourses} allowedRole="student" />
      </Route>
      <Route path="/student/attendance">
        <ProtectedRoute component={StudentAttendance} allowedRole="student" />
      </Route>
      <Route path="/student/marks">
        <ProtectedRoute component={StudentMarks} allowedRole="student" />
      </Route>
      <Route path="/student/timetable">
        <ProtectedRoute component={StudentTimetable} allowedRole="student" />
      </Route>
      <Route path="/student/assignments">
        <ProtectedRoute component={StudentAssignments} allowedRole="student" />
      </Route>
      <Route path="/student/exams">
        <ProtectedRoute component={StudentExams} allowedRole="student" />
      </Route>
      <Route path="/student/notices">
        <ProtectedRoute component={StudentNotices} allowedRole="student" />
      </Route>
      <Route path="/student/fees">
        <ProtectedRoute component={StudentFees} allowedRole="student" />
      </Route>
      <Route path="/student/certificates">
        <ProtectedRoute component={StudentCertificates} allowedRole="student" />
      </Route>

      {/* Faculty Dashboard Routes */}
      <Route path="/faculty/dashboard">
        <ProtectedRoute component={FacultyDashboard} allowedRole="faculty" />
      </Route>
      <Route path="/faculty/profile">
        <ProtectedRoute component={FacultyProfile} allowedRole="faculty" />
      </Route>
      <Route path="/faculty/subjects">
        <ProtectedRoute component={FacultySubjects} allowedRole="faculty" />
      </Route>
      <Route path="/faculty/attendance">
        <ProtectedRoute component={FacultyAttendance} allowedRole="faculty" />
      </Route>
      <Route path="/faculty/materials">
        <ProtectedRoute component={FacultyMaterials} allowedRole="faculty" />
      </Route>
      <Route path="/faculty/assignments">
        <ProtectedRoute component={FacultyAssignments} allowedRole="faculty" />
      </Route>
      <Route path="/faculty/performance">
        <ProtectedRoute component={FacultyPerformance} allowedRole="faculty" />
      </Route>
      <Route path="/faculty/announcements">
        <ProtectedRoute component={FacultyAnnouncements} allowedRole="faculty" />
      </Route>

      {/* Admin Dashboard Routes */}
      <Route path="/admin/dashboard">
        <ProtectedRoute component={AdminDashboard} allowedRole="admin" />
      </Route>
      <Route path="/admin/students">
        <ProtectedRoute component={AdminStudents} allowedRole="admin" />
      </Route>
      <Route path="/admin/faculty">
        <ProtectedRoute component={AdminFaculty} allowedRole="admin" />
      </Route>
      <Route path="/admin/courses">
        <ProtectedRoute component={AdminCourses} allowedRole="admin" />
      </Route>
      <Route path="/admin/departments">
        <ProtectedRoute component={AdminDepartments} allowedRole="admin" />
      </Route>
      <Route path="/admin/timetable">
        <ProtectedRoute component={AdminTimetable} allowedRole="admin" />
      </Route>
      <Route path="/admin/placements">
        <ProtectedRoute component={AdminPlacements} allowedRole="admin" />
      </Route>
      <Route path="/admin/events">
        <ProtectedRoute component={AdminEvents} allowedRole="admin" />
      </Route>
      <Route path="/admin/notices">
        <ProtectedRoute component={AdminNotices} allowedRole="admin" />
      </Route>
      <Route path="/admin/website-content">
        <ProtectedRoute component={AdminWebContent} allowedRole="admin" />
      </Route>
      <Route path="/admin/reports">
        <ProtectedRoute component={AdminReports} allowedRole="admin" />
      </Route>
      <Route path="/admin/settings">
        <ProtectedRoute component={AdminSettings} allowedRole="admin" />
      </Route>

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Router />
    </QueryClientProvider>
  );
}

export default App;
