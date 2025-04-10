
import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, Settings, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 py-3 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
      <div className="flex items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-oasis-blue to-oasis-teal text-transparent bg-clip-text">Oasis</span>
          <span className="text-oasis-dark font-medium">Elder Insights</span>
        </Link>
      </div>
      
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-oasis-orange rounded-full"></span>
        </Button>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-oasis-blue flex items-center justify-center text-white">
                <User className="h-4 w-4" />
              </div>
              <span className="hidden md:inline-block font-medium">Rajiv Sharma</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
