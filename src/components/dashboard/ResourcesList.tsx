
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, FileText, Video } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

type Resource = {
  id: string;
  title: string;
  description: string;
  type: 'article' | 'video' | 'document';
  tags: string[];
};

const resources: Resource[] = [
  {
    id: '1',
    title: 'Managing Diabetes in Older Adults',
    description: 'A comprehensive guide to diabetes management for seniors',
    type: 'article',
    tags: ['Diabetes', 'Health'],
  },
  {
    id: '2',
    title: 'Yoga for Seniors - Gentle Movements',
    description: 'Easy yoga exercises to improve mobility and reduce pain',
    type: 'video',
    tags: ['Exercise', 'Wellness'],
  },
  {
    id: '3',
    title: 'Government Benefits for Elderly',
    description: 'Overview of available government schemes for seniors',
    type: 'document',
    tags: ['Benefits', 'Financial'],
  },
];

const getIconByType = (type: string) => {
  switch (type) {
    case 'article':
      return <BookOpen size={18} />;
    case 'video':
      return <Video size={18} />;
    case 'document':
      return <FileText size={18} />;
    default:
      return <FileText size={18} />;
  }
};

const ResourcesList = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recommended Resources</CardTitle>
        <CardDescription>Curated content for your health needs</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {resources.map((resource) => (
            <div key={resource.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-full bg-oasis-light text-oasis-teal mt-1">
                  {getIconByType(resource.type)}
                </div>
                <div>
                  <h4 className="font-medium">{resource.title}</h4>
                  <p className="text-gray-500 text-sm mt-1">{resource.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {resource.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="bg-oasis-light text-oasis-dark border-oasis-blue/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ResourcesList;
