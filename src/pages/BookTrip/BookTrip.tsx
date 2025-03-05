
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import PageTransition from '@/components/ui-custom/PageTransition';
import { Plane, Building, Car } from 'lucide-react';

const BookTrip = () => {
  const navigate = useNavigate();
  
  // Automatically navigate to flights page as it's the primary booking option
  React.useEffect(() => {
    navigate('/book-trip/flights');
  }, [navigate]);
  
  return (
    <PageTransition className="page-container">
      <h1 className="section-title text-3xl">Book a Trip</h1>
      <p className="text-muted-foreground mb-8">Select what you would like to book for your business trip</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to="/book-trip/flights">
          <Card className="h-full hover:shadow-md transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plane className="h-5 w-5" />
                Flights
              </CardTitle>
              <CardDescription>Book air travel for your trip</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Search, compare and book flights that comply with your company's travel policy.
              </p>
              <Button className="mt-4 w-full">Book Flights</Button>
            </CardContent>
          </Card>
        </Link>
        
        <Link to="/book-trip/hotels">
          <Card className="h-full hover:shadow-md transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-5 w-5" />
                Hotels
              </CardTitle>
              <CardDescription>Book accommodations for your stay</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Find and book hotels that meet your company's standards and budget requirements.
              </p>
              <Button className="mt-4 w-full">Book Hotels</Button>
            </CardContent>
          </Card>
        </Link>
        
        <Link to="/book-trip/cars">
          <Card className="h-full hover:shadow-md transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Car className="h-5 w-5" />
                Cars
              </CardTitle>
              <CardDescription>Rent a vehicle for your journey</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Reserve rental cars that align with your company's car rental policies.
              </p>
              <Button className="mt-4 w-full">Rent a Car</Button>
            </CardContent>
          </Card>
        </Link>
      </div>
    </PageTransition>
  );
};

export default BookTrip;
