import { Link, useLocation } from "wouter";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Menu, 
  X, 
  ChevronRight,
  LayoutDashboard
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/#about" },
    { name: "Admissions", href: "/#admissions" },
    { name: "Academics", href: "/#academics" },
    { name: "Campus Life", href: "/#campus" },
    { name: "Examination", href: "/#examination" },
    { name: "Placements", href: "/#placements" },
  ];

  const isHome = location === "/";

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled || !isHome ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
    }`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="bg-primary p-2 rounded-lg text-white group-hover:scale-105 transition-transform">
            <GraduationCap size={28} />
          </div>
          <span className={`text-2xl font-bold font-display tracking-tight ${
            scrolled || !isHome ? "text-slate-900" : "text-slate-900 md:text-white"
          }`}>
            SRIT<span className="text-primary">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <span className={`text-sm font-medium hover:text-primary transition-colors cursor-pointer ${
                scrolled || !isHome ? "text-slate-600" : "text-slate-200 hover:text-white"
              }`}>
                {link.name}
              </span>
            </Link>
          ))}
          
          {user ? (
            <Link href={`/${user.role}/dashboard`}>
              <Button className="bg-primary hover:bg-orange-600 text-white gap-2 font-semibold shadow-lg shadow-orange-500/20">
                <LayoutDashboard className="w-4 h-4" />
                Dashboard
              </Button>
            </Link>
          ) : (
            <Link href="/login">
              <Button className="bg-primary hover:bg-orange-600 text-white font-semibold shadow-lg shadow-orange-500/20">
                Login Portal
              </Button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href}>
                  <span 
                    className="block text-slate-600 font-medium py-2 hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </span>
                </Link>
              ))}
              <hr className="border-slate-100" />
              {user ? (
                <Link href={`/${user.role}/dashboard`}>
                  <Button className="w-full justify-between" onClick={() => setIsOpen(false)}>
                    Dashboard <ChevronRight className="w-4 h-4" />
                  </Button>
                </Link>
              ) : (
                <Link href="/login">
                  <Button className="w-full justify-between" onClick={() => setIsOpen(false)}>
                    Login Portal <ChevronRight className="w-4 h-4" />
                  </Button>
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
