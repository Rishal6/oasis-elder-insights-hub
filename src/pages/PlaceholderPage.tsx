
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { useLocation } from 'react-router-dom';

const PlaceholderPage = () => {
  const location = useLocation();
  const pageName = location.pathname.substring(1);
  const formattedPageName = pageName.charAt(0).toUpperCase() + pageName.slice(1);
  
  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">{formattedPageName}</h1>
        <p className="text-gray-600 mt-1">This page is under development</p>
      </div>
      
      <Card>
        <CardContent className="flex flex-col items-center justify-center py-12">
          <div className="w-24 h-24 rounded-full bg-oasis-light flex items-center justify-center mb-4 animate-float">
            <span className="text-4xl">🚧</span>
          </div>
          <h2 className="text-2xl font-bold text-center mb-2">Coming Soon!</h2>
          <p className="text-gray-500 text-center max-w-md">
            We're working hard to bring you the {formattedPageName.toLowerCase()} features. Check back soon for updates!
          </p>
        </CardContent>
      </Card>
    </Layout>
  );
};

export default PlaceholderPage;
