
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import PageTransition from '@/components/ui-custom/PageTransition';
import { Car, ArrowRight, Info, AlertCircle } from 'lucide-react';

const Cars = () => {
  return (
    <PageTransition className="page-container">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <h1 className="section-title text-3xl mb-0">Rent a Car</h1>
          <Badge variant="outline" className="text-xs">Policy Enforced</Badge>
        </div>
        <div className="flex flex-wrap gap-2 text-sm">
          <Link to="/book-trip" className="text-muted-foreground hover:text-foreground">
            Book Trip
          </Link>
          <span className="text-muted-foreground">/</span>
          <span>Cars</span>
        </div>
      </div>
      
      <div className="sub-nav">
        <Link to="/book-trip/flights" className="sub-nav-link">
          Flights
        </Link>
        <Link to="/book-trip/hotels" className="sub-nav-link">
          Hotels
        </Link>
        <Link to="/book-trip/cars" className="sub-nav-link sub-nav-active">
          Cars
        </Link>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-2 mb-6">
                <Label htmlFor="location">Pickup Location</Label>
                <Input id="location" placeholder="City, airport, or address" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="pickup-date">Pickup Date</Label>
                  <Input id="pickup-date" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pickup-time">Pickup Time</Label>
                  <Input id="pickup-time" type="time" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="return-date">Return Date</Label>
                  <Input id="return-date" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="return-time">Return Time</Label>
                  <Input id="return-time" type="time" />
                </div>
              </div>
              
              <div className="space-y-2 mb-6">
                <Label htmlFor="car-type">Car Type</Label>
                <Select defaultValue="standard">
                  <SelectTrigger id="car-type">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="economy">Economy</SelectItem>
                    <SelectItem value="compact">Compact</SelectItem>
                    <SelectItem value="standard">Standard</SelectItem>
                    <SelectItem value="suv">SUV</SelectItem>
                    <SelectItem value="luxury">Luxury</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button className="w-full">Search Cars</Button>
            </CardContent>
          </Card>
          
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Available Cars</h2>
            <div className="text-center py-8 text-muted-foreground bg-secondary/50 rounded-lg">
              <Car className="mx-auto h-12 w-12 mb-3 text-muted-foreground" />
              <p className="mb-1">No cars searched yet</p>
              <p className="text-sm">Fill in the search form and click "Search Cars"</p>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                <Info className="h-5 w-5" /> 
                Car Rental Policy Information
              </h3>
              <div className="space-y-4 text-sm">
                <div className="p-3 bg-secondary/50 rounded-md flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Vehicle Class Restrictions</p>
                    <p className="text-muted-foreground">Standard or lower class for individual travel. SUVs allowed for group travel of 3+ people.</p>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <div>
                  <p className="font-medium mb-2">Preferred Rental Companies</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Hertz</Badge>
                    <Badge variant="outline">Enterprise</Badge>
                    <Badge variant="outline">Avis</Badge>
                    <Badge variant="outline">Budget</Badge>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <div>
                  <p className="font-medium mb-2">Insurance Requirements</p>
                  <ul className="list-disc pl-5 text-muted-foreground">
                    <li>Collision Damage Waiver (CDW)</li>
                    <li>Liability Insurance</li>
                    <li>Personal Accident Insurance</li>
                  </ul>
                </div>
                
                <Separator className="my-4" />
                
                <Link to="/company/policy" className="text-sm text-primary flex items-center hover:underline">
                  View full car rental policy <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageTransition>
  );
};

export default Cars;
