
import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

type StatsCardProps = {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  change?: {
    value: number;
    type: 'increase' | 'decrease';
  };
  className?: string;
};

const StatsCard = ({ title, value, icon, change, className }: StatsCardProps) => {
  return (
    <div className={cn("stats-card", className)}>
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-gray-500 font-medium text-sm">{title}</h3>
        <div className="p-2 rounded-full bg-oasis-light text-oasis-blue">
          {icon}
        </div>
      </div>
      <div className="mt-1">
        <div className="text-2xl font-bold">{value}</div>
        {change && (
          <div className="flex items-center mt-1 text-sm">
            {change.type === 'increase' ? (
              <ArrowUp className="h-4 w-4 text-green-500 mr-1" />
            ) : (
              <ArrowDown className="h-4 w-4 text-red-500 mr-1" />
            )}
            <span className={change.type === 'increase' ? 'text-green-500' : 'text-red-500'}>
              {change.value}% from last month
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsCard;
