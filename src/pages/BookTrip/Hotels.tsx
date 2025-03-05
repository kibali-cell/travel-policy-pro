
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
import { Building, ArrowRight, Info, DollarSign } from 'lucide-react';

const Hotels = () => {
  return (
    <PageTransition className="page-container">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <h1 className="section-title text-3xl mb-0">Book Hotels</h1>
          <Badge variant="outline" className="text-xs">Policy Enforced</Badge>
        </div>
        <div className="flex flex-wrap gap-2 text-sm">
          <Link to="/book-trip" className="text-muted-foreground hover:text-foreground">
            Book Trip
          </Link>
          <span className="text-muted-foreground">/</span>
          <span>Hotels</span>
        </div>
      </div>
      
      <div className="sub-nav">
        <Link to="/book-trip/flights" className="sub-nav-link">
          Flights
        </Link>
        <Link to="/book-trip/hotels" className="sub-nav-link sub-nav-active">
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
              <div className="space-y-2 mb-6">
                <Label htmlFor="location">Destination</Label>
                <Input id="location" placeholder="City, address, or landmark" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="check-in">Check-in</Label>
                  <Input id="check-in" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="check-out">Check-out</Label>
                  <Input id="check-out" type="date" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="rooms">Rooms</Label>
                  <Select defaultValue="1">
                    <SelectTrigger id="rooms">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Room</SelectItem>
                      <SelectItem value="2">2 Rooms</SelectItem>
                      <SelectItem value="3">3 Rooms</SelectItem>
                      <SelectItem value="4">4 Rooms</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="guests">Guests per Room</Label>
                  <Select defaultValue="1">
                    <SelectTrigger id="guests">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Guest</SelectItem>
                      <SelectItem value="2">2 Guests</SelectItem>
                      <SelectItem value="3">3 Guests</SelectItem>
                      <SelectItem value="4">4 Guests</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <Button className="w-full">Search Hotels</Button>
            </CardContent>
          </Card>
          
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Available Hotels</h2>
            <div className="text-center py-8 text-muted-foreground bg-secondary/50 rounded-lg">
              <Building className="mx-auto h-12 w-12 mb-3 text-muted-foreground" />
              <p className="mb-1">No hotels searched yet</p>
              <p className="text-sm">Fill in the search form and click "Search Hotels"</p>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                <Info className="h-5 w-5" /> 
                Hotel Policy Information
              </h3>
              <div className="space-y-4 text-sm">
                <div className="p-3 bg-secondary/50 rounded-md flex items-start gap-2">
                  <DollarSign className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Price Limits</p>
                    <p className="text-muted-foreground">Maximum $250/night for standard locations. Higher limits may apply for high-cost cities.</p>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <div>
                  <p className="font-medium mb-2">Preferred Hotel Chains</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Marriott</Badge>
                    <Badge variant="outline">Hilton</Badge>
                    <Badge variant="outline">Hyatt</Badge>
                    <Badge variant="outline">IHG</Badge>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <div>
                  <p className="font-medium mb-2">Required Amenities</p>
                  <ul className="list-disc pl-5 text-muted-foreground">
                    <li>Free Wi-Fi</li>
                    <li>24-hour front desk</li>
                    <li>Business center or workspace</li>
                  </ul>
                </div>
                
                <Separator className="my-4" />
                
                <Link to="/company/policy" className="text-sm text-primary flex items-center hover:underline">
                  View full hotel policy <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageTransition>
  );
};

export default Hotels;
