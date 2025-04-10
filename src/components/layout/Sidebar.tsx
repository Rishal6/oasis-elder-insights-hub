
import React from 'react';
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
  BookOpen
} from 'lucide-react';
import { cn } from '@/lib/utils';

type NavItemProps = {
  to: string;
  icon: React.ReactNode;
  label: string;
};

const NavItem = ({ to, icon, label }: NavItemProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={cn(
        "nav-link",
        isActive && "active"
      )}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};

const Sidebar = () => {
  return (
    <aside className="bg-white w-64 h-screen border-r border-gray-200 p-4 hidden md:block">
      <div className="space-y-8 h-full flex flex-col">
        <div className="space-y-1">
          <h2 className="text-xs uppercase text-gray-500 font-semibold tracking-wider px-2">Main</h2>
          <nav className="space-y-1">
            <NavItem to="/" icon={<LayoutDashboard size={20} />} label="Dashboard" />
            <NavItem to="/profile" icon={<Users size={20} />} label="Profile" />
            <NavItem to="/appointments" icon={<Calendar size={20} />} label="Appointments" />
            <NavItem to="/health" icon={<Heart size={20} />} label="Health Tracking" />
          </nav>
        </div>
        
        <div className="space-y-1">
          <h2 className="text-xs uppercase text-gray-500 font-semibold tracking-wider px-2">Insights</h2>
          <nav className="space-y-1">
            <NavItem to="/analytics" icon={<BarChart3 size={20} />} label="Analytics" />
            <NavItem to="/resources" icon={<BookOpen size={20} />} label="Resources" />
            <NavItem to="/reports" icon={<FileText size={20} />} label="Reports" />
          </nav>
        </div>
        
        <div className="mt-auto space-y-1">
          <h2 className="text-xs uppercase text-gray-500 font-semibold tracking-wider px-2">Support</h2>
          <nav className="space-y-1">
            <NavItem to="/settings" icon={<Settings size={20} />} label="Settings" />
            <NavItem to="/help" icon={<HelpCircle size={20} />} label="Help & Support" />
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
