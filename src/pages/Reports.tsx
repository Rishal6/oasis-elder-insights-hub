
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { 
  Table, 
  TableHeader, 
  TableBody, 
  TableHead, 
  TableRow, 
  TableCell 
} from '@/components/ui/table';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { FileText, Download, Calendar, Filter, Search, ArrowUpDown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// Dummy data for reports
const weeklyReports = [
  { id: 1, name: 'Weekly Health Summary', date: '2025-04-03', status: 'completed', downloads: 24 },
  { id: 2, name: 'Abnormality Interventions', date: '2025-04-03', status: 'completed', downloads: 18 },
  { id: 3, name: 'Medication Adherence', date: '2025-04-03', status: 'completed', downloads: 15 },
];

const monthlyReports = [
  { id: 4, name: 'Monthly Health Trends', date: '2025-03-31', status: 'completed', downloads: 42 },
  { id: 5, name: 'Intervention Effectiveness', date: '2025-03-31', status: 'completed', downloads: 31 },
  { id: 6, name: 'Patient Satisfaction', date: '2025-03-31', status: 'completed', downloads: 27 },
];

const quarterlyReports = [
  { id: 7, name: 'Q1 2025 Health Analytics', date: '2025-03-31', status: 'completed', downloads: 56 },
  { id: 8, name: 'Q1 2025 Program Effectiveness', date: '2025-03-31', status: 'completed', downloads: 48 },
  { id: 9, name: 'Q1 2025 Resource Utilization', date: '2025-03-31', status: 'completed', downloads: 39 },
];

const scheduledReports = [
  { id: 10, name: 'Weekly Health Summary', date: '2025-04-10', status: 'scheduled', downloads: null },
  { id: 11, name: 'Abnormality Interventions', date: '2025-04-10', status: 'scheduled', downloads: null },
  { id: 12, name: 'Medication Adherence', date: '2025-04-10', status: 'scheduled', downloads: null },
];

const Reports = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortAscending, setSortAscending] = useState(true);
  
  // Filter and sort reports
  const filterReports = (reports) => {
    return reports
      .filter(report => report.name.toLowerCase().includes(searchTerm.toLowerCase()))
      .sort((a, b) => {
        return sortAscending 
          ? new Date(a.date) - new Date(b.date) 
          : new Date(b.date) - new Date(a.date);
      });
  };

  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Reports</h1>
        <p className="text-gray-600 mt-1">Access and manage all health reports</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-500">Generated Reports</p>
                <h3 className="text-2xl font-bold">42</h3>
              </div>
              <FileText className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-500">Scheduled Reports</p>
                <h3 className="text-2xl font-bold">12</h3>
              </div>
              <Calendar className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Downloads</p>
                <h3 className="text-2xl font-bold">300</h3>
              </div>
              <Download className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-500">Recent Updates</p>
                <h3 className="text-2xl font-bold">7</h3>
              </div>
              <Calendar className="h-8 w-8 text-amber-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Reports Management</CardTitle>
          <CardDescription>Access, download, and schedule health reports</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row justify-between mb-4 space-y-2 md:space-y-0">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search reports..."
                className="pl-8 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center space-x-2">
              <button
                className="flex items-center space-x-1 px-3 py-2 border rounded-md bg-gray-50"
                onClick={() => setSortAscending(!sortAscending)}
              >
                <ArrowUpDown className="h-4 w-4" />
                <span>Sort by Date {sortAscending ? '(Oldest First)' : '(Newest First)'}</span>
              </button>
            </div>
          </div>

          <Tabs defaultValue="archived">
            <TabsList className="mb-4">
              <TabsTrigger value="archived">Archived Reports</TabsTrigger>
              <TabsTrigger value="scheduled">Scheduled Reports</TabsTrigger>
            </TabsList>
            
            <TabsContent value="archived" className="mt-0">
              <div className="border rounded-md overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Report Name</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Downloads</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filterReports([...weeklyReports, ...monthlyReports, ...quarterlyReports]).map((report) => (
                      <TableRow key={report.id}>
                        <TableCell className="font-medium">{report.name}</TableCell>
                        <TableCell>{report.date}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                            {report.status.charAt(0).toUpperCase() + report.status.slice(1)}
                          </Badge>
                        </TableCell>
                        <TableCell>{report.downloads}</TableCell>
                        <TableCell>
                          <button className="flex items-center space-x-1 px-3 py-1 rounded-md bg-blue-100 text-blue-700 hover:bg-blue-200">
                            <Download className="h-4 w-4" />
                            <span>Download</span>
                          </button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            
            <TabsContent value="scheduled" className="mt-0">
              <div className="border rounded-md overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Report Name</TableHead>
                      <TableHead>Scheduled Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filterReports(scheduledReports).map((report) => (
                      <TableRow key={report.id}>
                        <TableCell className="font-medium">{report.name}</TableCell>
                        <TableCell>{report.date}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">
                            {report.status.charAt(0).toUpperCase() + report.status.slice(1)}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <button className="flex items-center space-x-1 px-3 py-1 rounded-md bg-purple-100 text-purple-700 hover:bg-purple-200">
                            <Calendar className="h-4 w-4" />
                            <span>Reschedule</span>
                          </button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="bg-gray-50 border-t">
          <div className="w-full flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 mb-2 sm:mb-0">
              Showing {searchTerm ? filterReports([...weeklyReports, ...monthlyReports, ...quarterlyReports, ...scheduledReports]).length : 12} reports
            </p>
            <button className="flex items-center space-x-1 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">
              <FileText className="h-4 w-4" />
              <span>Generate New Report</span>
            </button>
          </div>
        </CardFooter>
      </Card>
    </Layout>
  );
};

export default Reports;
