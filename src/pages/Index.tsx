
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PageTransition from '@/components/ui-custom/PageTransition';
import { ArrowRight, Plane, Building, Car, CalendarCheck, TrendingUp, Users, CreditCard } from 'lucide-react';

const Index = () => {
  return (
    <PageTransition className="page-container">
      <section className="mb-10">
        <div className="flex flex-col space-y-3 md:space-y-5 max-w-3xl">
          <span className="inline-block px-3 py-1 bg-secondary rounded-full text-sm font-medium animate-fade-in">
            Travel Management Platform
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Simplified business travel management
          </h1>
          <p className="text-lg text-muted-foreground">
            Book travel, manage expenses, and enforce policies in one seamless platform.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild size="lg" className="rounded-full transition-all">
              <Link to="/book-trip">
                Book a Trip <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link to="/company/policy">View Travel Policies</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="section-title">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <QuickActionCard 
            icon={<Plane className="h-5 w-5" />}
            title="Book Flight"
            description="Search and book flights"
            link="/book-trip/flights"
          />
          <QuickActionCard 
            icon={<Building className="h-5 w-5" />}
            title="Book Hotel"
            description="Find and reserve accommodations"
            link="/book-trip/hotels"
          />
          <QuickActionCard 
            icon={<Car className="h-5 w-5" />}
            title="Rent Car"
            description="Book vehicle rentals"
            link="/book-trip/cars"
          />
          <QuickActionCard 
            icon={<CreditCard className="h-5 w-5" />}
            title="Expenses"
            description="Submit or view expenses"
            link="/trips-expenses"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="section-title">Overview</h2>
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="upcoming">Upcoming Trips</TabsTrigger>
            <TabsTrigger value="recent">Recent Expenses</TabsTrigger>
            <TabsTrigger value="pending">Pending Approvals</TabsTrigger>
          </TabsList>
          <TabsContent value="upcoming" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Your Upcoming Trips</CardTitle>
                <CardDescription>All your scheduled business travel in one place</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-muted-foreground">
                  <CalendarCheck className="mx-auto h-12 w-12 mb-3 text-muted-foreground" />
                  <p className="mb-1">No upcoming trips</p>
                  <p className="text-sm">Plan your next business trip today</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button variant="outline" asChild>
                  <Link to="/book-trip">Book a Trip</Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="recent" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Recent Expenses</CardTitle>
                <CardDescription>Track your latest business travel expenses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-muted-foreground">
                  <CreditCard className="mx-auto h-12 w-12 mb-3 text-muted-foreground" />
                  <p className="mb-1">No recent expenses</p>
                  <p className="text-sm">Expenses from your trips will appear here</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button variant="outline" asChild>
                  <Link to="/trips-expenses">View All Expenses</Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="pending" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Pending Approvals</CardTitle>
                <CardDescription>Travel requests requiring your approval</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-muted-foreground">
                  <Users className="mx-auto h-12 w-12 mb-3 text-muted-foreground" />
                  <p className="mb-1">No pending approvals</p>
                  <p className="text-sm">Approval requests will appear here</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button variant="outline" asChild>
                  <Link to="/company/approval">Approval Settings</Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      <section>
        <h2 className="section-title">Travel Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle className="text-xl">Monthly Spend</CardTitle>
              <CardDescription>View your travel spending trends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center h-48">
                <div className="text-center">
                  <TrendingUp className="mx-auto h-12 w-12 mb-3 text-muted-foreground" />
                  <p className="text-muted-foreground">No data available yet</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button variant="outline" asChild>
                <Link to="/analytics">View Analytics</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle className="text-xl">Policy Compliance</CardTitle>
              <CardDescription>Monitor travel policy adherence</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center h-48">
                <div className="text-center">
                  <Users className="mx-auto h-12 w-12 mb-3 text-muted-foreground" />
                  <p className="text-muted-foreground">No data available yet</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button variant="outline" asChild>
                <Link to="/company/policy">View Policies</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </PageTransition>
  );
};

const QuickActionCard = ({ icon, title, description, link }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  link: string; 
}) => {
  return (
    <Link to={link}>
      <Card className="h-full hover:shadow-md transition-all duration-300 hover:-translate-y-1">
        <CardHeader className="pb-2">
          <div className="bg-secondary p-2 rounded-full w-fit">
            {icon}
          </div>
        </CardHeader>
        <CardContent>
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default Index;
