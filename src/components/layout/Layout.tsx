
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MobileNav from './MobileNav';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="flex md:hidden items-center mb-4">
            <MobileNav />
          </div>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
