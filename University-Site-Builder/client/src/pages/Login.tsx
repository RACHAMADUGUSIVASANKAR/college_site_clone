import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "@/hooks/use-auth";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { GraduationCap, User, Shield, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function Login() {
  const { login, isLoggingIn } = useAuth();
  const [, setLocation] = useLocation();
  const [activeRole, setActiveRole] = useState<"student" | "faculty" | "admin">("student");

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      username: "",
      password: ""
    }
  });

  const onSubmit = async (data: any) => {
    try {
      const result = await login({ ...data, role: activeRole });
      // Only redirect if login was successful
      if (result) {
        setTimeout(() => {
          setLocation(`/${activeRole}/dashboard`);
        }, 100);
      }
    } catch (error) {
      // Toast handled by hook
      console.error('Login error:', error);
    }
  };

  const roleConfig = {
    student: { icon: GraduationCap, color: "text-primary", bg: "bg-orange-50", label: "Student Portal" },
    faculty: { icon: User, color: "text-blue-600", bg: "bg-blue-50", label: "Faculty Portal" },
    admin: { icon: Shield, color: "text-purple-600", bg: "bg-purple-50", label: "Admin Portal" },
  };

  const CurrentIcon = roleConfig[activeRole].icon;

  return (
    <div className="min-h-screen bg-[#FFF1E6] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-30" />
      <div className="absolute top-40 -left-20 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30" />

      <Button 
        variant="ghost" 
        className="absolute top-8 left-8 gap-2 hover:bg-white/50"
        onClick={() => setLocation("/")}
      >
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </Button>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-xl overflow-hidden">
          <CardHeader className="text-center pb-2">
            <div className={`w-16 h-16 rounded-2xl mx-auto flex items-center justify-center mb-4 ${roleConfig[activeRole].bg}`}>
              <CurrentIcon className={`w-8 h-8 ${roleConfig[activeRole].color}`} />
            </div>
            <CardTitle className="text-2xl font-bold font-display text-slate-800">
              Welcome Back
            </CardTitle>
            <CardDescription>
              Login to access your {activeRole} dashboard
            </CardDescription>
          </CardHeader>

          <CardContent className="pt-6">
            <Tabs 
              defaultValue="student" 
              className="mb-8" 
              onValueChange={(val) => setActiveRole(val as any)}
            >
              <TabsList className="grid grid-cols-3 w-full bg-slate-100 p-1">
                <TabsTrigger value="student" className="data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm">Student</TabsTrigger>
                <TabsTrigger value="faculty" className="data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm">Faculty</TabsTrigger>
                <TabsTrigger value="admin" className="data-[state=active]:bg-white data-[state=active]:text-purple-600 data-[state=active]:shadow-sm">Admin</TabsTrigger>
              </TabsList>
            </Tabs>

            {/* Demo Credentials Card */}
            <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
              <p className="text-xs font-semibold text-blue-900 mb-2 flex items-center gap-2">
                <Shield className="w-4 h-4" /> Demo Credentials:
              </p>
              <div className="space-y-1 text-xs">
                {activeRole === "student" && (
                  <div className="bg-white/70 p-2 rounded">
                    <p className="text-slate-700"><span className="font-semibold">Username:</span> student@srit.ac.in</p>
                    <p className="text-slate-700"><span className="font-semibold">Password:</span> student123</p>
                  </div>
                )}
                {activeRole === "faculty" && (
                  <div className="bg-white/70 p-2 rounded">
                    <p className="text-slate-700"><span className="font-semibold">Username:</span> faculty@srit.ac.in</p>
                    <p className="text-slate-700"><span className="font-semibold">Password:</span> faculty123</p>
                  </div>
                )}
                {activeRole === "admin" && (
                  <div className="bg-white/70 p-2 rounded">
                    <p className="text-slate-700"><span className="font-semibold">Username:</span> admin@srit.ac.in</p>
                    <p className="text-slate-700"><span className="font-semibold">Password:</span> admin123</p>
                  </div>
                )}
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Username / ID</label>
                <Input 
                  {...register("username", { required: true })}
                  className="bg-white border-slate-200 focus:border-primary focus:ring-primary/20 h-11" 
                  placeholder={activeRole === "student" ? "e.g. SRIT2024001" : "e.g. FAC001"}
                />
                {errors.username && <span className="text-xs text-red-500">Required</span>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Password</label>
                <Input 
                  type="password"
                  {...register("password", { required: true })}
                  className="bg-white border-slate-200 focus:border-primary focus:ring-primary/20 h-11" 
                  placeholder="••••••••"
                />
                {errors.password && <span className="text-xs text-red-500">Required</span>}
              </div>

              <Button 
                type="submit" 
                className={`w-full h-11 font-semibold text-lg transition-all ${
                  activeRole === "faculty" ? "bg-blue-600 hover:bg-blue-700" :
                  activeRole === "admin" ? "bg-purple-600 hover:bg-purple-700" :
                  "bg-primary hover:bg-orange-600"
                }`}
                disabled={isLoggingIn}
              >
                {isLoggingIn ? "Authenticating..." : `Login as ${activeRole.charAt(0).toUpperCase() + activeRole.slice(1)}`}
              </Button>
            </form>

            <div className="mt-6 text-center text-sm text-slate-500">
              <p>Forgot credentials? <a href="#" className="text-primary font-medium hover:underline">Contact Admin</a></p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
