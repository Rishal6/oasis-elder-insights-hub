
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { CheckCircle2, TrendingUp, TrendingDown, Calendar, Users, Heart, Activity } from 'lucide-react';

// Dummy data for analytics
const monthlyHealthData = [
  { month: 'Jan', avgHealthScore: 72, abnormalities: 8, checkups: 45 },
  { month: 'Feb', avgHealthScore: 74, abnormalities: 7, checkups: 48 },
  { month: 'Mar', avgHealthScore: 71, abnormalities: 9, checkups: 42 },
  { month: 'Apr', avgHealthScore: 75, abnormalities: 5, checkups: 50 },
  { month: 'May', avgHealthScore: 78, abnormalities: 4, checkups: 52 },
  { month: 'Jun', avgHealthScore: 80, abnormalities: 3, checkups: 55 },
  { month: 'Jul', avgHealthScore: 79, abnormalities: 4, checkups: 53 },
  { month: 'Aug', avgHealthScore: 82, abnormalities: 2, checkups: 58 },
  { month: 'Sep', avgHealthScore: 80, abnormalities: 3, checkups: 54 },
  { month: 'Oct', avgHealthScore: 81, abnormalities: 3, checkups: 56 },
  { month: 'Nov', avgHealthScore: 83, abnormalities: 2, checkups: 59 },
  { month: 'Dec', avgHealthScore: 85, abnormalities: 1, checkups: 62 },
];

const ageDistributionData = [
  { name: '60-65', value: 25 },
  { name: '65-70', value: 30 },
  { name: '70-75', value: 22 },
  { name: '75-80', value: 15 },
  { name: '80+', value: 8 },
];

const abnormalitiesData = [
  { name: 'High Blood Pressure', count: 28 },
  { name: 'Elevated Heart Rate', count: 15 },
  { name: 'Irregular Sleep', count: 12 },
  { name: 'Low Activity', count: 20 },
  { name: 'Medication Issues', count: 10 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A569BD'];

const Analytics = () => {
  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
        <p className="text-gray-600 mt-1">Monitor health metrics and identify trends</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-500">Average Health Score</p>
                <h3 className="text-2xl font-bold">78.3</h3>
              </div>
              <Heart className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-500">Total Patients</p>
                <h3 className="text-2xl font-bold">247</h3>
              </div>
              <Users className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-500">Monthly Checkups</p>
                <h3 className="text-2xl font-bold">54</h3>
              </div>
              <Calendar className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-gray-500">Health Trend</p>
                <h3 className="text-2xl font-bold text-green-600 flex items-center">
                  <TrendingUp className="h-5 w-5 mr-1" />
                  +7.2%
                </h3>
              </div>
              <Activity className="h-8 w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="trends" className="mb-6">
        <TabsList className="mb-4">
          <TabsTrigger value="trends">Health Trends</TabsTrigger>
          <TabsTrigger value="age">Age Distribution</TabsTrigger>
          <TabsTrigger value="abnormalities">Abnormalities</TabsTrigger>
        </TabsList>
        
        <TabsContent value="trends" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Health Metrics Trends</CardTitle>
              <CardDescription>Monthly average health scores and abnormalities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ChartContainer config={{
                  healthScore: { color: "#8884d8" },
                  abnormalities: { color: "#ff5252" },
                  checkups: { color: "#4caf50" }
                }}>
                  <LineChart data={monthlyHealthData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis yAxisId="left" orientation="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Line 
                      yAxisId="left" 
                      type="monotone" 
                      dataKey="avgHealthScore" 
                      name="Health Score" 
                      stroke="#8884d8" 
                      activeDot={{ r: 8 }} 
                    />
                    <Line 
                      yAxisId="right" 
                      type="monotone" 
                      dataKey="abnormalities" 
                      name="Abnormalities" 
                      stroke="#ff5252" 
                    />
                    <Line 
                      yAxisId="right" 
                      type="monotone" 
                      dataKey="checkups" 
                      name="Checkups" 
                      stroke="#4caf50" 
                    />
                  </LineChart>
                </ChartContainer>
              </div>
              <div className="mt-4 flex flex-col sm:flex-row justify-between gap-4">
                <div className="bg-purple-50 p-4 rounded-lg flex items-start flex-1">
                  <div className="mr-3 mt-1">
                    <TrendingUp className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-purple-800">Health Score Trend</h4>
                    <p className="text-purple-600 text-sm">Average health scores have improved by 18% over the past year, showing the effectiveness of our monitoring program.</p>
                  </div>
                </div>
                <div className="bg-red-50 p-4 rounded-lg flex items-start flex-1">
                  <div className="mr-3 mt-1">
                    <TrendingDown className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-red-800">Abnormalities Trend</h4>
                    <p className="text-red-600 text-sm">Health abnormalities have decreased by 87.5% from January to December, indicating successful interventions.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="age" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Patient Age Distribution</CardTitle>
              <CardDescription>Breakdown of patients by age groups</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ChartContainer config={{}}>
                  <PieChart>
                    <Pie
                      data={ageDistributionData}
                      cx="50%"
                      cy="50%"
                      labelLine={true}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={150}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {ageDistributionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend />
                  </PieChart>
                </ChartContainer>
              </div>
              <div className="mt-4 bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-800">Age Distribution Insights</h4>
                <p className="text-blue-600 text-sm">The largest age group is 65-70 years, making up 30% of our patients. This helps us tailor our care programs to the specific needs of this demographic.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="abnormalities" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Common Health Abnormalities</CardTitle>
              <CardDescription>Frequency of different health issues detected</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ChartContainer config={{}}>
                  <BarChart data={abnormalitiesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Bar dataKey="count" name="Occurrence Count" fill="#8884d8">
                      {abnormalitiesData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ChartContainer>
              </div>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg flex items-start">
                  <div className="mr-3 mt-1">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-green-800">Intervention Focus</h4>
                    <p className="text-green-600 text-sm">Hypertension management should be our primary focus, as high blood pressure is the most common abnormality detected.</p>
                  </div>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg flex items-start">
                  <div className="mr-3 mt-1">
                    <Activity className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-amber-800">Activity Monitoring</h4>
                    <p className="text-amber-600 text-sm">Low activity levels are a significant concern, suggesting we should enhance our physical activity programs.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </Layout>
  );
};

export default Analytics;
