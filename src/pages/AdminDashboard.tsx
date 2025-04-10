
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { 
  Table, 
  TableHeader, 
  TableBody, 
  TableHead, 
  TableRow, 
  TableCell 
} from '@/components/ui/table';
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent 
} from '@/components/ui/card';
import { 
  AlertTriangle, 
  Heart, 
  Activity, 
  Users, 
  Search, 
  Filter 
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import PatientActionPanel from '@/components/admin/PatientActionPanel';

// This would come from your actual API in production
const MOCK_PATIENTS = [
  { 
    id: 1, 
    name: 'Arun Sharma', 
    age: 68, 
    healthScore: 85, 
    bloodPressure: '130/85', 
    heartRate: 72, 
    abnormality: null,
    lastCheckup: '2025-03-28',
  },
  { 
    id: 2, 
    name: 'Meena Patel', 
    age: 74, 
    healthScore: 65, 
    bloodPressure: '150/95', 
    heartRate: 88, 
    abnormality: 'High blood pressure',
    lastCheckup: '2025-04-02',
  },
  { 
    id: 3, 
    name: 'Rajiv Kumar', 
    age: 70, 
    healthScore: 75, 
    bloodPressure: '125/80', 
    heartRate: 75, 
    abnormality: null,
    lastCheckup: '2025-03-15',
  },
  { 
    id: 4, 
    name: 'Lakshmi Narayan', 
    age: 82, 
    healthScore: 55, 
    bloodPressure: '145/90', 
    heartRate: 92, 
    abnormality: 'Elevated heart rate',
    lastCheckup: '2025-04-05',
  },
  { 
    id: 5, 
    name: 'Vijay Malhotra', 
    age: 65, 
    healthScore: 90, 
    bloodPressure: '120/80', 
    heartRate: 68, 
    abnormality: null,
    lastCheckup: '2025-03-20',
  },
  { 
    id: 6, 
    name: 'Sunita Reddy', 
    age: 78, 
    healthScore: 60, 
    bloodPressure: '160/100', 
    heartRate: 85, 
    abnormality: 'Hypertension, medication review needed',
    lastCheckup: '2025-04-01',
  },
  { 
    id: 7, 
    name: 'Harish Verma', 
    age: 72, 
    healthScore: 70, 
    bloodPressure: '135/85', 
    heartRate: 76, 
    abnormality: null,
    lastCheckup: '2025-03-25',
  },
];

const AdminDashboard = () => {
  const [patients, setPatients] = useState(MOCK_PATIENTS);
  const [selectedPatient, setSelectedPatient] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterAbnormal, setFilterAbnormal] = useState(false);

  // Filter patients based on search and abnormality filter
  const filteredPatients = patients.filter(patient => {
    const matchesSearch = patient.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterAbnormal ? patient.abnormality !== null : true;
    return matchesSearch && matchesFilter;
  });

  const handleMarkResolved = (patientId: number) => {
    setPatients(
      patients.map(p => 
        p.id === patientId 
          ? { ...p, abnormality: null } 
          : p
      )
    );
    setSelectedPatient(null);
  };

  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Patient Monitoring Dashboard</h1>
        <p className="text-gray-600 mt-1">Monitor all patients and address health abnormalities</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Patients</p>
                <h3 className="text-2xl font-bold">{patients.length}</h3>
              </div>
              <Users className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-500">Abnormalities</p>
                <h3 className="text-2xl font-bold">{patients.filter(p => p.abnormality !== null).length}</h3>
              </div>
              <AlertTriangle className="h-8 w-8 text-red-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-500">Average Health Score</p>
                <h3 className="text-2xl font-bold">
                  {Math.round(patients.reduce((acc, patient) => acc + patient.healthScore, 0) / patients.length)}
                </h3>
              </div>
              <Heart className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-500">Check-ups This Week</p>
                <h3 className="text-2xl font-bold">12</h3>
              </div>
              <Activity className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Patient Management</CardTitle>
          <CardDescription>View and manage all patient data from one place</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row justify-between mb-4 space-y-2 md:space-y-0">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search patients..."
                className="pl-8 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center space-x-2">
              <button
                className={`flex items-center space-x-1 px-3 py-2 border rounded-md ${filterAbnormal ? 'bg-red-50 border-red-200 text-red-700' : 'bg-gray-50'}`}
                onClick={() => setFilterAbnormal(!filterAbnormal)}
              >
                <Filter className="h-4 w-4" />
                <span>Show Abnormalities Only</span>
              </button>
            </div>
          </div>

          <div className="border rounded-md overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Age</TableHead>
                  <TableHead>Health Score</TableHead>
                  <TableHead>Blood Pressure</TableHead>
                  <TableHead>Heart Rate</TableHead>
                  <TableHead>Last Check-up</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPatients.map((patient) => (
                  <TableRow key={patient.id} className={patient.abnormality ? 'bg-red-50' : ''}>
                    <TableCell className="font-medium">{patient.name}</TableCell>
                    <TableCell>{patient.age}</TableCell>
                    <TableCell>
                      <span className={`font-medium ${
                        patient.healthScore >= 80 ? 'text-green-600' :
                        patient.healthScore >= 60 ? 'text-yellow-600' :
                        'text-red-600'
                      }`}>
                        {patient.healthScore}/100
                      </span>
                    </TableCell>
                    <TableCell>{patient.bloodPressure}</TableCell>
                    <TableCell>{patient.heartRate} bpm</TableCell>
                    <TableCell>{patient.lastCheckup}</TableCell>
                    <TableCell>
                      {patient.abnormality ? (
                        <Badge variant="destructive" className="whitespace-nowrap">
                          <AlertTriangle className="h-3 w-3 mr-1" />
                          Abnormality
                        </Badge>
                      ) : (
                        <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">Normal</Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      <Dialog>
                        <DialogTrigger asChild>
                          <button
                            className={`px-3 py-1 rounded-md text-sm ${
                              patient.abnormality
                                ? 'bg-red-100 text-red-700 hover:bg-red-200'
                                : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                            }`}
                            onClick={() => setSelectedPatient(patient)}
                          >
                            {patient.abnormality ? 'Urgent Action' : 'View Details'}
                          </button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>{patient.abnormality ? 'Patient Requires Attention' : 'Patient Details'}</DialogTitle>
                            <DialogDescription>
                              {patient.abnormality 
                                ? 'This patient has a health abnormality that needs attention.' 
                                : 'Viewing detailed information for this patient.'}
                            </DialogDescription>
                          </DialogHeader>
                          <PatientActionPanel 
                            patient={selectedPatient} 
                            onMarkResolved={() => handleMarkResolved(selectedPatient?.id)} 
                          />
                        </DialogContent>
                      </Dialog>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </Layout>
  );
};

export default AdminDashboard;
