
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Phone, Mail, Home, Heart, AlertCircle, Pencil, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Profile = () => {
  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Your Profile</h1>
        <p className="text-gray-600 mt-1">Manage your personal information and preferences</p>
      </div>
      
      <Tabs defaultValue="personal" className="mb-6">
        <TabsList className="mb-4">
          <TabsTrigger value="personal">Personal Info</TabsTrigger>
          <TabsTrigger value="medical">Medical Profile</TabsTrigger>
          <TabsTrigger value="emergency">Emergency Contacts</TabsTrigger>
        </TabsList>
        
        <TabsContent value="personal">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Your basic information and contact details</CardDescription>
              </div>
              <Button size="sm" variant="outline" className="flex items-center gap-1">
                <Pencil size={14} />
                Edit
              </Button>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-40 h-40 rounded-full bg-oasis-light border-2 border-oasis-blue flex items-center justify-center relative">
                    <User size={60} className="text-oasis-blue" />
                    <div className="absolute bottom-0 right-0 bg-oasis-blue text-white rounded-full p-2">
                      <Pencil size={14} />
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Full Name</h3>
                      <p className="text-lg font-medium">Rajiv Sharma</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Date of Birth</h3>
                      <p className="text-lg font-medium">15 June, 1955 (70 years)</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Gender</h3>
                      <p className="text-lg font-medium">Male</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Language</h3>
                      <p className="text-lg font-medium">English, Hindi, Tamil</p>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Contact Information</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Phone size={16} className="text-oasis-blue" />
                        <p>+91 98765 43210</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail size={16} className="text-oasis-blue" />
                        <p>rajiv.sharma@example.com</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Home size={16} className="text-oasis-blue" />
                        <p>204, Lotus Apartments, Chennai - 600001, Tamil Nadu</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="medical">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Medical Profile</CardTitle>
                <CardDescription>Your health information and medical history</CardDescription>
              </div>
              <Button size="sm" variant="outline" className="flex items-center gap-1">
                <Pencil size={14} />
                Edit
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Medical Conditions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 p-3 border rounded-md bg-oasis-light/50">
                      <Heart size={18} className="text-red-500" />
                      <span>Hypertension (controlled)</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 border rounded-md bg-oasis-light/50">
                      <AlertCircle size={18} className="text-orange-500" />
                      <span>Type 2 Diabetes</span>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Medications</h3>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-md">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">Amlodipine 5mg</h4>
                          <p className="text-sm text-gray-500">For blood pressure management</p>
                        </div>
                        <div className="text-sm text-gray-500">Once daily</div>
                      </div>
                    </div>
                    <div className="p-3 border rounded-md">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">Metformin 500mg</h4>
                          <p className="text-sm text-gray-500">For diabetes management</p>
                        </div>
                        <div className="text-sm text-gray-500">Twice daily</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Allergies</h3>
                  <div className="p-3 border rounded-md">
                    <div className="flex items-center gap-2">
                      <AlertCircle size={18} className="text-red-500" />
                      <span>Penicillin</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="emergency">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Emergency Contacts</CardTitle>
                <CardDescription>People to contact in case of emergency</CardDescription>
              </div>
              <Button size="sm" variant="outline" className="flex items-center gap-1">
                <Pencil size={14} />
                Edit
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-md bg-white hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h4 className="font-medium">Amit Sharma</h4>
                      <p className="text-sm text-gray-500">Son</p>
                      <div className="flex items-center gap-4 mt-1">
                        <div className="flex items-center text-sm text-gray-500">
                          <Phone size={14} className="mr-1" />
                          +91 98765 12345
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Mail size={14} className="mr-1" />
                          amit.s@example.com
                        </div>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="whitespace-nowrap">Contact</Button>
                  </div>
                </div>
                
                <div className="p-4 border rounded-md bg-white hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h4 className="font-medium">Priya Sharma</h4>
                      <p className="text-sm text-gray-500">Daughter</p>
                      <div className="flex items-center gap-4 mt-1">
                        <div className="flex items-center text-sm text-gray-500">
                          <Phone size={14} className="mr-1" />
                          +91 98765 67890
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Mail size={14} className="mr-1" />
                          priya.s@example.com
                        </div>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="whitespace-nowrap">Contact</Button>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 border rounded-md bg-oasis-light flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-2">
                  <Shield className="text-oasis-blue mt-1" />
                  <div>
                    <h4 className="font-medium">Medical Power of Attorney</h4>
                    <p className="text-sm text-gray-600">Amit Sharma has been designated as your medical decision maker.</p>
                  </div>
                </div>
                <Button size="sm" variant="outline" className="whitespace-nowrap">View Document</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </Layout>
  );
};

export default Profile;
