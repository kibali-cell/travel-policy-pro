
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import PageTransition from '@/components/ui-custom/PageTransition';
import { Download, Search, Plus, Filter, Plane, Hotel, Car, CreditCard, Receipt, FileText } from 'lucide-react';

const TripsExpenses = () => {
  return (
    <PageTransition className="page-container">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="section-title text-3xl mb-1">Trips & Expenses</h1>
          <p className="text-muted-foreground">Manage your business travel and expenses</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button variant="outline" className="flex items-center gap-1">
            <Download className="h-4 w-4" /> Export
          </Button>
          <Button className="flex items-center gap-1">
            <Plus className="h-4 w-4" /> Add Expense
          </Button>
        </div>
      </div>
      
      <Tabs defaultValue="trips" className="w-full">
        <TabsList className="mb-6 grid w-full grid-cols-2">
          <TabsTrigger value="trips">Trips</TabsTrigger>
          <TabsTrigger value="expenses">Expenses</TabsTrigger>
        </TabsList>
        
        {/* Trips Tab */}
        <TabsContent value="trips" className="mt-0">
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search trips" className="pl-9" />
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[150px]">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Statuses</SelectItem>
                      <SelectItem value="upcoming">Upcoming</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="canceled">Canceled</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="text-center py-12 bg-secondary/30 rounded-lg">
            <FileText className="mx-auto h-12 w-12 mb-3 text-muted-foreground" />
            <p className="text-lg mb-1">No trips found</p>
            <p className="text-muted-foreground mb-6">Once you book trips, they will appear here</p>
            <Button asChild>
              <a href="/book-trip">Book a Trip</a>
            </Button>
          </div>
        </TabsContent>
        
        {/* Expenses Tab */}
        <TabsContent value="expenses" className="mt-0">
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search expenses" className="pl-9" />
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Select defaultValue="all-types">
                    <SelectTrigger className="w-[150px]">
                      <SelectValue placeholder="Expense Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all-types">All Types</SelectItem>
                      <SelectItem value="flights">Flights</SelectItem>
                      <SelectItem value="hotels">Hotels</SelectItem>
                      <SelectItem value="cars">Car Rentals</SelectItem>
                      <SelectItem value="meals">Meals & Entertainment</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select defaultValue="all-statuses">
                    <SelectTrigger className="w-[150px]">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all-statuses">All Statuses</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="approved">Approved</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-medium flex items-center gap-2">
                  <CreditCard className="h-4 w-4" /> Total Expenses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$0.00</div>
                <p className="text-sm text-muted-foreground">Year to date</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-medium flex items-center gap-2">
                  <Receipt className="h-4 w-4" /> Pending Reimbursement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$0.00</div>
                <p className="text-sm text-muted-foreground">0 receipts pending</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-medium flex items-center gap-2">
                  <FileText className="h-4 w-4" /> Reports Submitted
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0</div>
                <p className="text-sm text-muted-foreground">Year to date</p>
              </CardContent>
            </Card>
          </div>
          
          <h2 className="text-xl font-semibold mb-4">Recent Expenses</h2>
          <div className="text-center py-12 bg-secondary/30 rounded-lg">
            <Receipt className="mx-auto h-12 w-12 mb-3 text-muted-foreground" />
            <p className="text-lg mb-1">No expenses found</p>
            <p className="text-muted-foreground mb-6">Add expenses to track your business spending</p>
            <Button>
              Add an Expense
            </Button>
          </div>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">Expense Reports</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="hover:shadow-md transition-all duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <FileText className="h-5 w-5" /> New Report
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Create a new expense report to submit for reimbursement</p>
                <Button className="w-full">Create Report</Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-all duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Download className="h-5 w-5" /> Download Templates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Download expense report templates for offline use</p>
                <Button variant="outline" className="w-full">Download</Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-all duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <FileText className="h-5 w-5" /> Report History
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">View all your submitted expense reports</p>
                <Button variant="outline" className="w-full">View History</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </PageTransition>
  );
};

export default TripsExpenses;
