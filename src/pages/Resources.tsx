
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { 
  Card,
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription,
  CardFooter
} from '@/components/ui/card';
import { 
  FileText, 
  BookOpen, 
  Video, 
  PhoneCall, 
  Calendar, 
  Search, 
  Globe,
  Clock,
  Link,
  Star
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

// Dummy data for resources
const guidesData = [
  { 
    id: 1, 
    title: 'Managing Hypertension at Home', 
    type: 'guide', 
    category: 'Health', 
    rating: 4.8, 
    lastUpdated: '2025-03-15',
    description: 'A comprehensive guide to monitoring and managing high blood pressure from the comfort of your home.'
  },
  { 
    id: 2, 
    title: 'Medication Management for Seniors', 
    type: 'guide', 
    category: 'Medication', 
    rating: 4.7, 
    lastUpdated: '2025-03-22',
    description: 'Essential tips for keeping track of medications, avoiding interactions, and managing prescriptions effectively.'
  },
  { 
    id: 3, 
    title: 'Nutrition Guide for Heart Health', 
    type: 'guide', 
    category: 'Nutrition', 
    rating: 4.9, 
    lastUpdated: '2025-03-28',
    description: 'Dietary recommendations and meal planning for maintaining optimal heart health and preventing cardiovascular issues.'
  },
];

const videosData = [
  { 
    id: 4, 
    title: 'Chair Exercises for Limited Mobility', 
    type: 'video', 
    category: 'Exercise', 
    rating: 4.6, 
    duration: '18 min',
    description: 'A gentle workout routine that can be performed while seated, perfect for those with mobility challenges.'
  },
  { 
    id: 5, 
    title: 'Understanding Your Health Metrics', 
    type: 'video', 
    category: 'Health', 
    rating: 4.5, 
    duration: '22 min',
    description: 'An educational video explaining what different health metrics mean and how to interpret your health data.'
  },
  { 
    id: 6, 
    title: 'Mindfulness Meditation for Seniors', 
    type: 'video', 
    category: 'Mental Health', 
    rating: 4.8, 
    duration: '15 min',
    description: 'A guided meditation session specifically designed to reduce stress and improve mental wellbeing for seniors.'
  },
];

const contactsData = [
  { 
    id: 7, 
    title: 'Elder Health Helpline', 
    type: 'contact', 
    category: 'Support', 
    phone: '1-800-ELDER-HELP',
    hours: '24/7',
    description: 'A dedicated helpline for elderly patients needing immediate assistance or health advice.'
  },
  { 
    id: 8, 
    title: 'Medication Consultation', 
    type: 'contact', 
    category: 'Medication', 
    phone: '1-866-MED-HELP',
    hours: '9am-5pm, Mon-Fri',
    description: 'Speak with a pharmacist about medication questions, side effects, or interactions.'
  },
  { 
    id: 9, 
    title: 'Mental Health Support', 
    type: 'contact', 
    category: 'Mental Health', 
    phone: '1-877-MIND-WELL',
    hours: '8am-8pm, Daily',
    description: 'Counseling and support for mental health concerns, anxiety, depression, or loneliness.'
  },
];

const externalResourcesData = [
  { 
    id: 10, 
    title: 'National Institute on Aging', 
    type: 'external', 
    category: 'Government', 
    url: 'https://www.nia.nih.gov/',
    description: 'Official resource for aging research, health information, and elder care guidelines.'
  },
  { 
    id: 11, 
    title: 'Medicare Resources', 
    type: 'external', 
    category: 'Healthcare', 
    url: 'https://www.medicare.gov/',
    description: 'Information about Medicare coverage, benefits, and finding healthcare providers.'
  },
  { 
    id: 12, 
    title: 'American Heart Association', 
    type: 'external', 
    category: 'Health', 
    url: 'https://www.heart.org/',
    description: 'Resources for heart health, including diet recommendations and exercise guidelines.'
  },
];

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter resources based on search term
  const filterResources = (resources) => {
    return resources.filter(resource => 
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (resource.description && resource.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  };

  // Render star rating
  const renderRating = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        ))}
        {hasHalfStar && (
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        )}
        {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
          <Star key={i + fullStars + (hasHalfStar ? 1 : 0)} className="h-4 w-4 text-gray-300" />
        ))}
        <span className="ml-1 text-sm text-gray-600">{rating}</span>
      </div>
    );
  };

  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Resources</h1>
        <p className="text-gray-600 mt-1">Educational materials and support resources for patients</p>
      </div>

      <div className="mb-6">
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search all resources..."
            className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <Tabs defaultValue="guides" className="mb-6">
        <TabsList className="mb-4">
          <TabsTrigger value="guides">Guides</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
          <TabsTrigger value="contacts">Help Contacts</TabsTrigger>
          <TabsTrigger value="external">External Resources</TabsTrigger>
        </TabsList>
        
        <TabsContent value="guides" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterResources(guidesData).map((resource) => (
              <Card key={resource.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                      {resource.category}
                    </Badge>
                    {renderRating(resource.rating)}
                  </div>
                  <CardTitle className="mt-2">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{resource.description}</p>
                </CardContent>
                <CardFooter className="border-t pt-4 flex justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>Updated: {resource.lastUpdated}</span>
                  </div>
                  <button className="flex items-center text-blue-600 hover:text-blue-800">
                    <FileText className="h-4 w-4 mr-1" />
                    <span>Read</span>
                  </button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="videos" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterResources(videosData).map((resource) => (
              <Card key={resource.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <Badge className="bg-red-100 text-red-800 border-red-200">
                      {resource.category}
                    </Badge>
                    {renderRating(resource.rating)}
                  </div>
                  <CardTitle className="mt-2">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{resource.description}</p>
                </CardContent>
                <CardFooter className="border-t pt-4 flex justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>Duration: {resource.duration}</span>
                  </div>
                  <button className="flex items-center text-red-600 hover:text-red-800">
                    <Video className="h-4 w-4 mr-1" />
                    <span>Watch</span>
                  </button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="contacts" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterResources(contactsData).map((resource) => (
              <Card key={resource.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <Badge className="bg-green-100 text-green-800 border-green-200">
                    {resource.category}
                  </Badge>
                  <CardTitle className="mt-2">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <PhoneCall className="h-4 w-4 mr-2 text-green-600" />
                      <span className="font-medium">{resource.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-green-600" />
                      <span className="text-sm">{resource.hours}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4">
                  <button className="w-full flex items-center justify-center text-green-600 hover:text-green-800 py-2 border border-green-200 rounded-md">
                    <PhoneCall className="h-4 w-4 mr-1" />
                    <span>Call Now</span>
                  </button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="external" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterResources(externalResourcesData).map((resource) => (
              <Card key={resource.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <Badge className="bg-purple-100 text-purple-800 border-purple-200">
                    {resource.category}
                  </Badge>
                  <CardTitle className="mt-2">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{resource.description}</p>
                </CardContent>
                <CardFooter className="border-t pt-4">
                  <a 
                    href={resource.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center text-purple-600 hover:text-purple-800 py-2 border border-purple-200 rounded-md"
                  >
                    <Globe className="h-4 w-4 mr-1" />
                    <span>Visit Website</span>
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Need More Resources?</CardTitle>
          <CardDescription>Contact our resource team to request specific materials</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <BookOpen className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h4 className="font-medium">Resource Request</h4>
              <p className="text-sm text-gray-600">Our team can create custom resources tailored to your patients' needs.</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="bg-gray-50 border-t">
          <div className="w-full flex justify-end">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Request Resources
            </button>
          </div>
        </CardFooter>
      </Card>
    </Layout>
  );
};

export default Resources;
