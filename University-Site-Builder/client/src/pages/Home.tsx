import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";
import { CountUp } from "@/components/CountUp";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  ArrowRight, Trophy, Users, Building2, BookOpen, Linkedin, Instagram, Youtube,
  CheckCircle2, Calendar, Star, Laptop, FlaskConical, Microscope, Library,
  Dumbbell, Music, Camera, TrendingUp
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export default function Home() {
  const achievementsRef = useRef(null);
  const isAchievementsInView = useInView(achievementsRef, { once: true });

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Chatbot />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image - SRIT */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/srit.png')` }}
        >
        </div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 z-1 bg-black/40"></div>
        
        {/* Welcome Text */}
        <motion.div 
          className="relative z-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-[0_10px_35px_rgba(251,146,60,0.6)]">
            <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent animate-pulse">Welcome to SRIT</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 drop-shadow-md max-w-2xl mx-auto">
            Where Excellence Meets Innovation
          </p>
        </motion.div>
      </section>

      {/* Welcome Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-100 rounded-full blur-3xl opacity-50" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50" />
              
              <div className="relative grid grid-cols-2 gap-4">
                {/* Unsplash: students collaborating in library */}
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80" 
                  alt="Students" 
                  className="rounded-2xl shadow-xl w-full h-64 object-cover transform translate-y-8" 
                />
                {/* Unsplash: modern university building */}
                <img 
                  src="https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=800&q=80" 
                  alt="Campus" 
                  className="rounded-2xl shadow-xl w-full h-64 object-cover" 
                />
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-primary font-semibold tracking-wide uppercase mb-3">Welcome to SRIT</h2>
              <h3 className="text-4xl md:text-5xl font-bold font-display text-slate-900 mb-6 leading-tight">
                Empowering Minds, <br />Transforming Lives
              </h3>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                SRIT is more than just an institution; it's a launchpad for your dreams. With a legacy of 25+ years in educational excellence, we foster an environment where innovation meets tradition.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Industry-aligned Curriculum designed by experts",
                  "100% Placement Assistance with top MNCs",
                  "State-of-the-art Labs & Research Centers",
                  "Vibrant Campus Life with 50+ Student Clubs"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-primary">
                      <ArrowRight size={14} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Button variant="ghost" className="text-primary p-0 h-auto font-semibold text-lg">
                Read Dean's Message <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section with Counting Animation */}
      <section ref={achievementsRef} id="achievements" className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isAchievementsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold font-display text-slate-900 mb-4">Our Achievements</h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">Building excellence through dedication and innovation</p>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Trophy, value: 25, suffix: "+", title: "Years of Excellence" },
              { icon: Users, value: 15000, suffix: "+", title: "Alumni Network" },
              { icon: Building2, value: 250, suffix: "+", title: "Partner Companies" },
              { icon: BookOpen, value: 500, suffix: "+", title: "Research Papers" },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isAchievementsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-slate-100 text-center group cursor-pointer"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 mx-auto bg-orange-50 rounded-2xl flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon size={28} />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                  <CountUp end={item.value} suffix={item.suffix} duration={2.5} />
                </h3>
                <p className="text-slate-600 font-medium text-sm">{item.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Placements Section */}
      <section id="placements" className="py-24 bg-gradient-to-b from-white via-orange-50/30 to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-300/5 rounded-full blur-3xl -z-10" />

        <div className="container mx-auto px-4 md:px-6">
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-start gap-6 mb-16"
          >
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Placement Excellence</Badge>
              <h2 className="text-4xl md:text-5xl font-bold font-display text-slate-900 mb-4">
                Placements at SRIT
              </h2>
              <p className="text-slate-600 max-w-2xl text-lg">
                Exceptional placement track record with premium company connections & competitive packages. Updated figures for AY 2024-25.
              </p>
            </div>

            {/* Highest Package Card - Enhanced */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gradient-to-br from-primary via-orange-500 to-orange-600 text-white px-8 py-6 rounded-2xl shadow-2xl w-full md:w-auto relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <p className="text-orange-100 text-xs font-semibold tracking-widest uppercase mb-2">Highest Package</p>
                <p className="text-5xl font-black text-white mb-1">9.08 LPA</p>
                <p className="text-xs text-orange-50">DBS Asia Hub 2 Pvt. Ltd. • 49 Students</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Stats Grid - Animated */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-12">
            {[ 
              { label: "Total Offers", value: "400+", icon: Trophy, color: "from-blue-500 to-blue-600" },
              { label: "Companies", value: "24+", icon: Building2, color: "from-purple-500 to-purple-600" },
              { label: "Avg Package", value: "3.95 LPA", icon: TrendingUp, color: "from-green-500 to-green-600" },
              { label: "Dream Offers", value: "34+", icon: Star, color: "from-yellow-500 to-yellow-600" },
              { label: "Top Recruiter", value: "Wipro", icon: Users, color: "from-pink-500 to-pink-600" },
              { label: "Special Offer", value: "9.08 LPA", icon: Trophy, color: "from-orange-500 to-red-600" },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className={`bg-gradient-to-br ${card.color} p-6 rounded-2xl shadow-lg text-white relative overflow-hidden group cursor-pointer h-full`}>
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <card.icon className="w-5 h-5 opacity-80" />
                      <div className="w-2 h-2 bg-white/40 rounded-full" />
                    </div>
                    <p className="text-white/80 text-xs font-semibold tracking-widest uppercase mb-2">{card.label}</p>
                    <p className="text-3xl font-black">{card.value}</p>
                  </div>
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mb-10 group-hover:scale-150 transition-transform duration-500" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Salary Bracket Distribution - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-3xl shadow-xl p-8 mb-8 border border-slate-100"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
              <div className="w-1 h-8 bg-primary rounded-full" />
              Salary Bracket Distribution
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[ 
                { range: "8.9 LPA", count: 49, color: "from-red-500 to-red-600", bgColor: "bg-red-50" },
                { range: "3.36 - 7 LPA", count: 119, color: "from-orange-500 to-orange-600", bgColor: "bg-orange-50" },
                { range: "4 - 6.75 LPA", count: 181, color: "from-yellow-500 to-yellow-600", bgColor: "bg-yellow-50" },
                { range: "3.6 - 6.5 LPA", count: 43, color: "from-green-500 to-green-600", bgColor: "bg-green-50" },
                { range: "3.5 LPA", count: 239, color: "from-blue-500 to-blue-600", bgColor: "bg-blue-50" },
              ].map((bucket, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.05 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className={`${bucket.bgColor} p-6 rounded-2xl border-2 border-slate-200 text-center relative overflow-hidden group cursor-pointer`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${bucket.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300` } />
                  <div className="relative z-10">
                    <p className="text-sm font-semibold text-slate-700 mb-2">{bucket.range}</p>
                    <p className={`text-4xl font-black bg-gradient-to-r ${bucket.color} bg-clip-text text-transparent`}>
                      {bucket.count}
                    </p>
                    <p className="text-xs text-slate-500 font-medium mt-2">Students Placed</p>
                    <div className="mt-3 h-1 bg-slate-200 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + idx * 0.1, duration: 0.8 }}
                        className={`h-full bg-gradient-to-r ${bucket.color} rounded-full`}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Department-wise Placement Rates - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-3xl shadow-xl p-8 border border-slate-100"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
              <div className="w-1 h-8 bg-orange-500 rounded-full" />
              Department-wise Placement Excellence
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {[ 
                { dept: "CIV", rate: 74.1, students: 187, color: "from-blue-500 to-blue-600" },
                { dept: "CSE", rate: 93.8, students: 235, color: "from-purple-500 to-purple-600" },
                { dept: "ECE", rate: 95.5, students: 229, color: "from-pink-500 to-pink-600" },
                { dept: "EEE", rate: 92.1, students: 205, color: "from-green-500 to-green-600" },
                { dept: "MEC", rate: 85.1, students: 186, color: "from-orange-500 to-orange-600" },
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + idx * 0.05 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="relative group cursor-pointer"
                >
                  <div className={`bg-gradient-to-br ${item.color} rounded-2xl p-6 text-white shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <p className="text-2xl font-black">{item.dept}</p>
                          <p className="text-white/70 text-xs font-semibold mt-1">Department</p>
                        </div>
                        <div className="text-right">
                          <motion.p 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 + idx * 0.1, duration: 0.5 }}
                            className="text-3xl font-black"
                          >
                            {item.rate}%
                          </motion.p>
                        </div>
                      </div>
                      
                      <div className="mb-3">
                        <div className="flex justify-between text-xs text-white/80 mb-2">
                          <span>Placement Rate</span>
                          <span className="font-semibold">{item.students} placed</span>
                        </div>
                        <div className="w-full bg-white/30 rounded-full h-2.5 overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.rate}%` }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.7 + idx * 0.1, duration: 1 }}
                            className="h-full bg-white rounded-full shadow-lg"
                          />
                        </div>
                      </div>

                      <div className="text-xs text-white/70">
                        <p>Excellence in placement outcomes</p>
                      </div>
                    </div>
                    <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mb-12 group-hover:scale-150 transition-transform duration-500" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      {/* Latest News Section */}
      <section id="news" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Latest Updates</Badge>
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">Campus News & Events</h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">Stay updated with the latest happenings at SRIT</p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "SRIT Wins National Hackathon 2026", date: "Jan 15, 2026", category: "Achievement", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80", excerpt: "Team SRIT secures first place in the prestigious national-level coding competition." },
              { title: "New AI Research Lab Inaugurated", date: "Jan 10, 2026", category: "Infrastructure", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80", excerpt: "State-of-the-art AI & ML research facility launched with industry partnerships." },
              { title: "Placements Statistics 2024-25", date: "Jan 5, 2026", category: "Placements", image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=600&q=80", excerpt: "400+ offers, highest package 9.08 LPA (DBS Asia Hub 2), average package 3.95 LPA, 34+ dream offers above 6 LPA." },
              { title: "International Collaboration Announced", date: "Dec 28, 2025", category: "Partnership", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80", excerpt: "SRIT partners with top universities in USA and Europe for student exchange programs." },
            ].map((news, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img src={news.image} alt={news.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <Badge className="absolute top-4 left-4 bg-primary text-white">{news.category}</Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{news.date}</span>
                    </div>
                    <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">{news.title}</h3>
                    <p className="text-slate-600 mb-4">{news.excerpt}</p>
                    <Button variant="ghost" className="p-0 text-primary font-semibold">
                      Read More <ArrowRight className="ml-1 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Academics Section */}
      <section id="academics" className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">Academic Excellence</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">World-class education with industry-aligned curriculum</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Laptop, title: "Computer Science", courses: "8 Programs", color: "blue" },
              { icon: FlaskConical, title: "Engineering", courses: "12 Programs", color: "green" },
              { icon: Microscope, title: "Research Labs", courses: "15+ Labs", color: "purple" },
              { icon: Library, title: "Digital Library", courses: "50k+ Books", color: "orange" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className={`bg-gradient-to-br from-${item.color}-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-${item.color}-100`}
              >
                <div className={`w-16 h-16 bg-${item.color}-100 text-${item.color}-600 rounded-2xl flex items-center justify-center mb-4`}>
                  <item.icon size={32} />
                </div>
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.courses}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Life Section */}
      <section id="campus" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">Vibrant Campus Life</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">Experience a dynamic campus filled with opportunities and memorable moments</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80", title: "Annual Tech Fest", desc: "Innovation & Technology" },
              { url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80", title: "Sports Events", desc: "Fitness & Athletics" },
              { url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80", title: "Cultural Night", desc: "Arts & Performance" },
              { url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80", title: "Graduation Day", desc: "Celebrations" },
              { url: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80", title: "Hackathon 2025", desc: "Coding Marathon" },
              { url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80", title: "Library Sessions", desc: "Study & Research" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="relative group overflow-hidden rounded-2xl shadow-xl cursor-pointer"
              >
                <div className="h-64 overflow-hidden">
                  <img src={item.url} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white font-bold text-lg">{item.title}</h3>
                  <p className="text-slate-200 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { icon: Dumbbell, title: "Sports Complex", desc: "Olympic-size facilities" },
              { icon: Music, title: "Music & Arts", desc: "Creative expression" },
              { icon: Camera, title: "Photography Club", desc: "Capture moments" },
              { icon: BookOpen, title: "50+ Clubs", desc: "Join your passion" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <item.icon size={28} />
                </div>
                <h4 className="font-bold">{item.title}</h4>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials Scrolling */}
      <section id="testimonials" className="py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">Student Voices</h2>
            <p className="text-slate-600 text-lg">Hear from our successful alumni and current students</p>
          </motion.div>
        </div>

        <div className="relative">
          <div className="flex gap-6 animate-scroll-left">
            {[
              { name: "Arjun Mehta", course: "B.Tech CSE 2023", rating: 5, text: "SRIT provided me the perfect platform to launch my career. The faculty support and industry exposure are unmatched!", image: "https://i.pravatar.cc/150?img=33" },
              { name: "Divya Krishnan", course: "M.Tech AI 2024", rating: 5, text: "The research opportunities and cutting-edge labs at SRIT helped me publish 3 papers during my course.", image: "https://i.pravatar.cc/150?img=20" },
              { name: "Karthik Raman", course: "B.Tech ECE 2022", rating: 5, text: "Got placed in my dream company! The placement cell's guidance was phenomenal throughout.", image: "https://i.pravatar.cc/150?img=68" },
              { name: "Meera Nair", course: "MBA 2023", rating: 5, text: "Best decision of my life! The campus culture and networking opportunities are incredible.", image: "https://i.pravatar.cc/150?img=27" },
              { name: "Sanjay Gupta", course: "B.Tech Mech 2023", rating: 5, text: "From classrooms to workshops, every facility at SRIT is world-class. Highly recommended!", image: "https://i.pravatar.cc/150?img=51" },
              { name: "Pooja Agarwal", course: "B.Tech IT 2024", rating: 5, text: "The vibrant campus life and clubs helped me develop beyond academics. Thank you SRIT!", image: "https://i.pravatar.cc/150?img=23" },
              { name: "Rahul Desai", course: "B.Tech CSE 2022", rating: 5, text: "Amazing faculty who truly care about your growth. Got multiple offers during placements!", image: "https://i.pravatar.cc/150?img=60" },
              { name: "Lakshmi Prasad", course: "M.Tech DS 2023", rating: 5, text: "The research culture and international collaborations opened doors I never imagined!", image: "https://i.pravatar.cc/150?img=26" },
              { name: "Arjun Mehta", course: "B.Tech CSE 2023", rating: 5, text: "SRIT provided me the perfect platform to launch my career. The faculty support and industry exposure are unmatched!", image: "https://i.pravatar.cc/150?img=33" },
              { name: "Divya Krishnan", course: "M.Tech AI 2024", rating: 5, text: "The research opportunities and cutting-edge labs at SRIT helped me publish 3 papers during my course.", image: "https://i.pravatar.cc/150?img=20" },
            ].map((testimonial, i) => (
              <Card key={i} className="min-w-[400px] bg-white shadow-lg hover:shadow-2xl transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14 rounded-full" />
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-xs text-slate-500">{testimonial.course}</p>
                      <div className="flex gap-1 mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />)}
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Open Section */}
      <section id="admissions" className="py-24 bg-gradient-to-r from-primary to-orange-600 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">Admissions 2026</Badge>
              <h2 className="text-5xl md:text-6xl font-bold font-display mb-6">Admissions Open!</h2>
              <p className="text-xl text-orange-100 mb-8">
                Join the next generation of leaders. Applications are now open for the 2026-27 academic year.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Early bird discount available",
                  "Scholarship opportunities up to 100%",
                  "Easy online application process",
                  "Flexible payment options"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-orange-50 shadow-xl">
                  Apply Now <ArrowRight className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Download Brochure
                </Button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80"
                  alt="Admissions"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 p-6 rounded-xl shadow-xl">
                  <p className="text-sm font-semibold text-slate-600">Application Deadline</p>
                  <p className="text-3xl font-bold text-primary">Mar 31, 2026</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Examination Section */}
      <section id="examination" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">Examination System</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">Fair, transparent, and comprehensive evaluation process</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Continuous Assessment", desc: "Regular evaluation through assignments and projects", icon: BookOpen },
              { title: "Online Exams", desc: "Secure digital examination system", icon: Laptop },
              { title: "Semester System", desc: "Well-structured academic calendar", icon: Calendar },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-slate-100"
              >
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-4">
                  <item.icon size={32} />
                </div>
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-24 bg-gradient-to-b from-white to-orange-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold font-display mb-12">Follow @SRITCampus</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 hover:border-primary/50 group cursor-pointer">
              <CardContent className="p-8 flex flex-col items-center">
                <div className="bg-pink-100 p-4 rounded-full text-pink-600 mb-6 group-hover:scale-110 transition-transform">
                  <Instagram size={32} />
                </div>
                <h3 className="font-bold text-xl mb-2">Instagram</h3>
                <p className="text-slate-500 mb-6">Catch the latest campus vibes and stories.</p>
                <Button variant="outline" className="group-hover:bg-pink-600 group-hover:text-white group-hover:border-pink-600">Follow Us</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:border-primary/50 group cursor-pointer">
              <CardContent className="p-8 flex flex-col items-center">
                <div className="bg-blue-100 p-4 rounded-full text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                  <Linkedin size={32} />
                </div>
                <h3 className="font-bold text-xl mb-2">LinkedIn</h3>
                <p className="text-slate-500 mb-6">Connect with alumni and industry partners.</p>
                <Button variant="outline" className="group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600">Connect</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:border-primary/50 group cursor-pointer">
              <CardContent className="p-8 flex flex-col items-center">
                <div className="bg-red-100 p-4 rounded-full text-red-600 mb-6 group-hover:scale-110 transition-transform">
                  <Youtube size={32} />
                </div>
                <h3 className="font-bold text-xl mb-2">YouTube</h3>
                <p className="text-slate-500 mb-6">Watch event highlights and lectures.</p>
                <Button variant="outline" className="group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600">Subscribe</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
