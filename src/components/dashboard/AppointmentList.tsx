
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, User, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Appointment = {
  id: string;
  title: string;
  doctor: string;
  date: string;
  time: string;
  type: 'in-person' | 'video';
};

const appointments: Appointment[] = [
  {
    id: '1',
    title: 'General Checkup',
    doctor: 'Dr. Patel',
    date: '15 April, 2025',
    time: '10:00 AM',
    type: 'in-person',
  },
  {
    id: '2',
    title: 'Cardiology Review',
    doctor: 'Dr. Sharma',
    date: '22 April, 2025',
    time: '2:30 PM',
    type: 'video',
  },
  {
    id: '3',
    title: 'Physical Therapy',
    doctor: 'Dr. Gupta',
    date: '28 April, 2025',
    time: '11:15 AM',
    type: 'in-person',
  },
];

const AppointmentList = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Upcoming Appointments</CardTitle>
          <CardDescription>Your scheduled doctor visits</CardDescription>
        </div>
        <Button size="sm" variant="outline">View All</Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {appointments.map((appointment) => (
            <div 
              key={appointment.id} 
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border rounded-lg bg-white hover:bg-gray-50 transition-colors gap-3"
            >
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-full ${appointment.type === 'video' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'}`}>
                  {appointment.type === 'video' ? <Video size={20} /> : <User size={20} />}
                </div>
                <div>
                  <h4 className="font-medium">{appointment.title}</h4>
                  <p className="text-gray-500 text-sm">{appointment.doctor}</p>
                  <div className="flex items-center gap-4 mt-1">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar size={14} className="mr-1" />
                      {appointment.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock size={14} className="mr-1" />
                      {appointment.time}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 w-full sm:w-auto">
                <Button variant="outline" size="sm" className="flex-1">Reschedule</Button>
                {appointment.type === 'video' && (
                  <Button size="sm" className="flex-1 bg-oasis-blue hover:bg-oasis-blue/90">Join</Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AppointmentList;
