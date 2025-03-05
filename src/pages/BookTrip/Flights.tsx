
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import PageTransition from '@/components/ui-custom/PageTransition';
import { Plane, ArrowRight, Clock, Info, AlertCircle } from 'lucide-react';

const Flights = () => {
  return (
    <PageTransition className="page-container">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <h1 className="section-title text-3xl mb-0">Book Flights</h1>
          <Badge variant="outline" className="text-xs">Policy Enforced</Badge>
        </div>
        <div className="flex flex-wrap gap-2 text-sm">
          <Link to="/book-trip" className="text-muted-foreground hover:text-foreground">
            Book Trip
          </Link>
          <span className="text-muted-foreground">/</span>
          <span>Flights</span>
        </div>
      </div>
      
      <div className="sub-nav">
        <Link to="/book-trip/flights" className="sub-nav-link sub-nav-active">
          Flights
        </Link>
        <Link to="/book-trip/hotels" className="sub-nav-link">
          Hotels
        </Link>
        <Link to="/book-trip/cars" className="sub-nav-link">
          Cars
        </Link>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="pt-6">
              <div className="mb-6">
                <RadioGroup defaultValue="round-trip" className="flex space-x-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="round-trip" id="round-trip" />
                    <Label htmlFor="round-trip">Round Trip</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="one-way" id="one-way" />
                    <Label htmlFor="one-way">One Way</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="multi-city" id="multi-city" />
                    <Label htmlFor="multi-city">Multi-City</Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="origin">From</Label>
                  <Input id="origin" placeholder="City or airport" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="destination">To</Label>
                  <Input id="destination" placeholder="City or airport" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="depart-date">Depart</Label>
                  <Input id="depart-date" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="return-date">Return</Label>
                  <Input id="return-date" type="date" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="passenger-count">Passengers</Label>
                  <Select defaultValue="1">
                    <SelectTrigger id="passenger-count">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Passenger</SelectItem>
                      <SelectItem value="2">2 Passengers</SelectItem>
                      <SelectItem value="3">3 Passengers</SelectItem>
                      <SelectItem value="4">4 Passengers</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cabin-class">Cabin Class</Label>
                  <Select defaultValue="economy">
                    <SelectTrigger id="cabin-class">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="economy">Economy</SelectItem>
                      <SelectItem value="premium-economy">Premium Economy</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="first">First</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <Button className="w-full">Search Flights</Button>
            </CardContent>
          </Card>
          
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Available Flights</h2>
            <div className="text-center py-8 text-muted-foreground bg-secondary/50 rounded-lg">
              <Plane className="mx-auto h-12 w-12 mb-3 text-muted-foreground" />
              <p className="mb-1">No flights searched yet</p>
              <p className="text-sm">Fill in the search form and click "Search Flights"</p>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                <Info className="h-5 w-5" /> 
                Travel Policy Information
              </h3>
              <div className="space-y-4 text-sm">
                <div className="p-3 bg-secondary/50 rounded-md flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Class Restrictions</p>
                    <p className="text-muted-foreground">Economy class for flights under 6 hours. Business class allowed for flights over 6 hours.</p>
                  </div>
                </div>
                
                <div className="p-3 bg-secondary/50 rounded-md flex items-start gap-2">
                  <Clock className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Booking Window</p>
                    <p className="text-muted-foreground">All flights must be booked at least 14 days in advance when possible.</p>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <div>
                  <p className="font-medium mb-2">Preferred Airlines</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Delta Airlines</Badge>
                    <Badge variant="outline">United Airlines</Badge>
                    <Badge variant="outline">American Airlines</Badge>
                    <Badge variant="outline">Lufthansa</Badge>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <Link to="/company/policy" className="text-sm text-primary flex items-center hover:underline">
                  View full travel policy <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageTransition>
  );
};

export default Flights;
