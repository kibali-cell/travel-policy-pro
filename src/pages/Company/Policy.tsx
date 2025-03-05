
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import PageTransition from '@/components/ui-custom/PageTransition';
import { Save, Plus } from 'lucide-react';

const Policy = () => {
  return (
    <PageTransition className="page-container">
      <div className="flex flex-col space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Travel Policy Settings</h1>
          <p className="text-muted-foreground">Configure your company's travel policy guidelines and restrictions</p>
        </div>

        <Tabs defaultValue="flights" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="flights">Flights</TabsTrigger>
            <TabsTrigger value="hotels">Hotels</TabsTrigger>
            <TabsTrigger value="cars">Car Rentals</TabsTrigger>
            <TabsTrigger value="general">General</TabsTrigger>
          </TabsList>

          <TabsContent value="flights" className="mt-0 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Booking Class Policy</CardTitle>
                <CardDescription>Define allowed booking classes for employee travel</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base">Allow Economy Class</Label>
                      <p className="text-sm text-muted-foreground">Permit bookings for economy class flights</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base">Allow Premium Economy</Label>
                      <p className="text-sm text-muted-foreground">Permit bookings for premium economy flights</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base">Allow Business Class</Label>
                      <p className="text-sm text-muted-foreground">Permit bookings for business class flights</p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base">Allow First Class</Label>
                      <p className="text-sm text-muted-foreground">Permit bookings for first class flights</p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Flight Cost Limits</CardTitle>
                <CardDescription>Set maximum spending limits for flight bookings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="domestic-limit">Domestic Flight Limit (USD)</Label>
                    <Input id="domestic-limit" type="number" placeholder="e.g. 500" defaultValue="500" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="international-limit">International Flight Limit (USD)</Label>
                    <Input id="international-limit" type="number" placeholder="e.g. 1500" defaultValue="1500" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="hotels" className="mt-0 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Hotel Star Rating Policy</CardTitle>
                <CardDescription>Define allowed hotel ratings for employee stays</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base">Allow 3-Star Hotels</Label>
                      <p className="text-sm text-muted-foreground">Permit bookings for 3-star rated hotels</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base">Allow 4-Star Hotels</Label>
                      <p className="text-sm text-muted-foreground">Permit bookings for 4-star rated hotels</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base">Allow 5-Star Hotels</Label>
                      <p className="text-sm text-muted-foreground">Permit bookings for 5-star rated hotels</p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Hotel Cost Limits</CardTitle>
                <CardDescription>Set maximum nightly rates for hotel stays</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="domestic-hotel-limit">Domestic Hotel Limit (USD/night)</Label>
                    <Input id="domestic-hotel-limit" type="number" placeholder="e.g. 200" defaultValue="200" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="international-hotel-limit">International Hotel Limit (USD/night)</Label>
                    <Input id="international-hotel-limit" type="number" placeholder="e.g. 300" defaultValue="300" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cars" className="mt-0 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Car Rental Policy</CardTitle>
                <CardDescription>Define allowed car categories for rentals</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base">Allow Economy Cars</Label>
                      <p className="text-sm text-muted-foreground">Permit rentals for economy class cars</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base">Allow Mid-size Cars</Label>
                      <p className="text-sm text-muted-foreground">Permit rentals for mid-size class cars</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base">Allow Full-size Cars</Label>
                      <p className="text-sm text-muted-foreground">Permit rentals for full-size class cars</p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base">Allow Premium/Luxury Cars</Label>
                      <p className="text-sm text-muted-foreground">Permit rentals for premium/luxury class cars</p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Car Rental Cost Limits</CardTitle>
                <CardDescription>Set maximum daily rates for car rentals</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="domestic-car-limit">Domestic Car Rental Limit (USD/day)</Label>
                    <Input id="domestic-car-limit" type="number" placeholder="e.g. 75" defaultValue="75" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="international-car-limit">International Car Rental Limit (USD/day)</Label>
                    <Input id="international-car-limit" type="number" placeholder="e.g. 100" defaultValue="100" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="general" className="mt-0 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Advance Booking Requirements</CardTitle>
                <CardDescription>Set minimum days in advance for travel bookings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="flight-advance">Flight Bookings (days)</Label>
                    <Input id="flight-advance" type="number" placeholder="e.g. 14" defaultValue="14" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="hotel-advance">Hotel Bookings (days)</Label>
                    <Input id="hotel-advance" type="number" placeholder="e.g. 7" defaultValue="7" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="car-advance">Car Rentals (days)</Label>
                    <Input id="car-advance" type="number" placeholder="e.g. 3" defaultValue="3" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Preferred Vendors</CardTitle>
                <CardDescription>Configure preferred travel vendors and suppliers</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base">Enforce Preferred Airlines</Label>
                      <p className="text-sm text-muted-foreground">Require bookings with preferred airline partners</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base">Enforce Preferred Hotels</Label>
                      <p className="text-sm text-muted-foreground">Require bookings with preferred hotel chains</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base">Enforce Preferred Car Rentals</Label>
                      <p className="text-sm text-muted-foreground">Require bookings with preferred car rental companies</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
                
                <Button size="sm" variant="outline" className="mt-4">
                  <Plus className="mr-2 h-4 w-4" /> Add Preferred Vendor
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="flex justify-end">
          <Button className="gap-2">
            <Save className="h-4 w-4" />
            Save Policy Changes
          </Button>
        </div>
      </div>
    </PageTransition>
  );
};

export default Policy;
