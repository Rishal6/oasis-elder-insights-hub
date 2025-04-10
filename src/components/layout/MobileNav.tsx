
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  BarChart3, 
  FileText, 
  Settings, 
  HelpCircle, 
  Heart,
  BookOpen,
  Menu,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

type NavItemProps = {
  to: string;
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
};

const NavItem = ({ to, icon, label, onClick }: NavItemProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={cn(
        "nav-link",
        isActive && "active"
      )}
      onClick={onClick}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  
  const handleClose = () => setOpen(false);
  
  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-72">
          <div className="p-6 border-b">
            <div className="flex items-center justify-between mb-4">
              <Link to="/" className="flex items-center gap-2" onClick={handleClose}>
                <span className="text-xl font-bold bg-gradient-to-r from-oasis-blue to-oasis-teal text-transparent bg-clip-text">Oasis</span>
                <span className="text-oasis-dark font-medium">Elder Insights</span>
              </Link>
              <Button variant="ghost" size="icon" onClick={handleClose}>
                <X size={20} />
              </Button>
            </div>
          </div>
          
          <div className="p-4">
            <div className="space-y-6">
              <div className="space-y-1">
                <h2 className="text-xs uppercase text-gray-500 font-semibold tracking-wider px-2">Main</h2>
                <nav className="space-y-1">
                  <NavItem to="/" icon={<LayoutDashboard size={20} />} label="Dashboard" onClick={handleClose} />
                  <NavItem to="/profile" icon={<Users size={20} />} label="Profile" onClick={handleClose} />
                  <NavItem to="/appointments" icon={<Calendar size={20} />} label="Appointments" onClick={handleClose} />
                  <NavItem to="/health" icon={<Heart size={20} />} label="Health Tracking" onClick={handleClose} />
                </nav>
              </div>
              
              <div className="space-y-1">
                <h2 className="text-xs uppercase text-gray-500 font-semibold tracking-wider px-2">Insights</h2>
                <nav className="space-y-1">
                  <NavItem to="/analytics" icon={<BarChart3 size={20} />} label="Analytics" onClick={handleClose} />
                  <NavItem to="/resources" icon={<BookOpen size={20} />} label="Resources" onClick={handleClose} />
                  <NavItem to="/reports" icon={<FileText size={20} />} label="Reports" onClick={handleClose} />
                </nav>
              </div>
              
              <div className="space-y-1">
                <h2 className="text-xs uppercase text-gray-500 font-semibold tracking-wider px-2">Support</h2>
                <nav className="space-y-1">
                  <NavItem to="/settings" icon={<Settings size={20} />} label="Settings" onClick={handleClose} />
                  <NavItem to="/help" icon={<HelpCircle size={20} />} label="Help & Support" onClick={handleClose} />
                </nav>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
