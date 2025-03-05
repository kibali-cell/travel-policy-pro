
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PageTransition from '@/components/ui-custom/PageTransition';
import { Briefcase, Users, FileText, Settings, GitBranch, Network } from 'lucide-react';

const Company = () => {
  return (
    <PageTransition className="page-container">
      <div className="mb-8">
        <h1 className="section-title text-3xl mb-1">Company Settings</h1>
        <p className="text-muted-foreground">Manage your company's travel policies and settings</p>
      </div>
      
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="mb-6 grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="departments">Departments</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
        </TabsList>
        
        {/* Overview Tab */}
        <TabsContent value="overview" className="mt-0 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="col-span-1 md:col-span-3">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Briefcase className="h-5 w-5" />
                  Company Profile
                </CardTitle>
                <CardDescription>Your company details and settings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-medium text-base mb-2">Company Information</h3>
                    <div className="space-y-1 text-sm">
                      <p><span className="text-muted-foreground">Name:</span> Your Company Name</p>
                      <p><span className="text-muted-foreground">Industry:</span> Not specified</p>
                      <p><span className="text-muted-foreground">Size:</span> Not specified</p>
                      <p><span className="text-muted-foreground">Address:</span> Not specified</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-base mb-2">Account Details</h3>
                    <div className="space-y-1 text-sm">
                      <p><span className="text-muted-foreground">Account Type:</span> Business</p>
                      <p><span className="text-muted-foreground">Billing Cycle:</span> Monthly</p>
                      <p><span className="text-muted-foreground">Account Manager:</span> Not assigned</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <h2 className="text-xl font-semibold mb-4">Quick Access</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SettingsCard 
              icon={<FileText className="h-5 w-5" />}
              title="Travel Policies"
              description="Configure company travel policies"
              link="/company/policy"
            />
            <SettingsCard 
              icon={<GitBranch className="h-5 w-5" />}
              title="Approval Workflow"
              description="Set up approval processes for travel requests"
              link="/company/approval"
            />
            <SettingsCard 
              icon={<Network className="h-5 w-5" />}
              title="Integrations"
              description="Connect accounting and other systems"
              link="/company/integrations"
            />
          </div>
        </TabsContent>
        
        {/* Departments Tab */}
        <TabsContent value="departments" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                Departments
              </CardTitle>
              <CardDescription>Manage your company's departments and their travel budgets</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                <Briefcase className="mx-auto h-12 w-12 mb-3 text-muted-foreground" />
                <p className="text-lg mb-1">No departments configured</p>
                <p className="text-sm">Configure departments to better manage travel budgets and policies</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Users Tab */}
        <TabsContent value="users" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Users className="h-5 w-5" />
                Users
              </CardTitle>
              <CardDescription>Manage user accounts and permissions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                <Users className="mx-auto h-12 w-12 mb-3 text-muted-foreground" />
                <p className="text-lg mb-1">No users added yet</p>
                <p className="text-sm">Add users to enable them to book travel according to your policies</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </PageTransition>
  );
};

const SettingsCard = ({ icon, title, description, link }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  link: string; 
}) => {
  return (
    <Link to={link}>
      <Card className="h-full hover:shadow-md transition-all duration-300 hover:-translate-y-1">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            {icon}
            {title}
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
};

export default Company;
