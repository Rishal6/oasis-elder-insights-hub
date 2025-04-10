
import React from 'react';
import Layout from '@/components/layout/Layout';
import StatsCard from '@/components/dashboard/StatsCard';
import HealthChart from '@/components/dashboard/HealthChart';
import AppointmentList from '@/components/dashboard/AppointmentList';
import ResourcesList from '@/components/dashboard/ResourcesList';
import { Activity, Calendar, Heart, Users } from 'lucide-react';

const Dashboard = () => {
  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Welcome, Rajiv</h1>
        <p className="text-gray-600 mt-1">Here's your health overview and upcoming activities</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatsCard 
          title="Appointments" 
          value={3} 
          icon={<Calendar size={20} />}
          change={{ value: 12, type: 'increase' }}
        />
        <StatsCard 
          title="Health Score" 
          value="85/100" 
          icon={<Heart size={20} />}
          change={{ value: 5, type: 'increase' }}
        />
        <StatsCard 
          title="Daily Steps" 
          value="3,542" 
          icon={<Activity size={20} />}
          change={{ value: 8, type: 'decrease' }}
        />
        <StatsCard 
          title="Care Network" 
          value={6} 
          icon={<Users size={20} />}
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <HealthChart />
        <AppointmentList />
      </div>
      
      <div className="mb-6">
        <ResourcesList />
      </div>
    </Layout>
  );
};

export default Dashboard;
