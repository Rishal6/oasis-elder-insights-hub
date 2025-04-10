
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle, CheckCircle2, PhoneCall, Calendar, FileText, Heart } from 'lucide-react';
import { DialogFooter } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';

type PatientActionPanelProps = {
  patient: {
    id: number;
    name: string;
    age: number;
    healthScore: number;
    bloodPressure: string;
    heartRate: number;
    abnormality: string | null;
    lastCheckup: string;
  } | null;
  onMarkResolved: () => void;
};

const PatientActionPanel = ({ patient, onMarkResolved }: PatientActionPanelProps) => {
  const { toast } = useToast();
  const [actionTaken, setActionTaken] = useState('');

  if (!patient) return null;

  const handleTakeAction = (action: string) => {
    setActionTaken(action);
    toast({
      title: "Action Taken",
      description: `${action} for ${patient.name}`,
    });

    // In a real application, you would send this action to your backend
    console.log(`Action taken for patient ${patient.id}: ${action}`);
  };

  const handleResolveIssue = () => {
    toast({
      title: "Issue Resolved",
      description: `The abnormality for ${patient.name} has been marked as resolved.`,
      variant: "default",
    });
    onMarkResolved();
  };

  return (
    <div className="space-y-4 py-2">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <p className="text-sm font-medium text-gray-500">Name</p>
          <p className="font-medium">{patient.name}</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium text-gray-500">Age</p>
          <p>{patient.age}</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium text-gray-500">Blood Pressure</p>
          <p>{patient.bloodPressure}</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium text-gray-500">Heart Rate</p>
          <p>{patient.heartRate} bpm</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium text-gray-500">Health Score</p>
          <div className="flex items-center">
            <Heart className="h-4 w-4 mr-1 text-purple-500" />
            <span className={
              patient.healthScore >= 80 ? 'text-green-600' :
              patient.healthScore >= 60 ? 'text-yellow-600' :
              'text-red-600'
            }>
              {patient.healthScore}/100
            </span>
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-sm font-medium text-gray-500">Last Check-up</p>
          <p>{patient.lastCheckup}</p>
        </div>
      </div>

      {patient.abnormality && (
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-4">
            <div className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
              <div>
                <h4 className="font-medium text-red-700">Abnormality Detected</h4>
                <p className="text-red-600">{patient.abnormality}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="pt-2">
        <h4 className="font-medium mb-2">Take Action</h4>
        <div className="grid grid-cols-2 gap-2">
          <button
            className="flex items-center justify-center py-2 px-4 border rounded-md bg-blue-50 text-blue-700 hover:bg-blue-100"
            onClick={() => handleTakeAction('Scheduled appointment')}
          >
            <Calendar className="h-4 w-4 mr-2" />
            Schedule Appointment
          </button>
          <button
            className="flex items-center justify-center py-2 px-4 border rounded-md bg-green-50 text-green-700 hover:bg-green-100"
            onClick={() => handleTakeAction('Made phone call')}
          >
            <PhoneCall className="h-4 w-4 mr-2" />
            Call Patient
          </button>
          <button
            className="flex items-center justify-center py-2 px-4 border rounded-md bg-purple-50 text-purple-700 hover:bg-purple-100"
            onClick={() => handleTakeAction('Updated medical record')}
          >
            <FileText className="h-4 w-4 mr-2" />
            Update Records
          </button>
          {patient.abnormality && (
            <button
              className="flex items-center justify-center py-2 px-4 border rounded-md bg-amber-50 text-amber-700 hover:bg-amber-100"
              onClick={handleResolveIssue}
            >
              <CheckCircle2 className="h-4 w-4 mr-2" />
              Mark as Resolved
            </button>
          )}
        </div>
      </div>

      {actionTaken && (
        <Card className="mt-4 border-green-200 bg-green-50">
          <CardContent className="p-4">
            <div className="flex items-center">
              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
              <p className="text-green-700">Action taken: {actionTaken}</p>
            </div>
          </CardContent>
        </Card>
      )}

      <DialogFooter className="mt-6">
        <button 
          className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-700"
          onClick={() => setActionTaken('')}
        >
          Close
        </button>
      </DialogFooter>
    </div>
  );
};

export default PatientActionPanel;
