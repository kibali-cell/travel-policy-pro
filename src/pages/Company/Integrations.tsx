
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import PageTransition from '@/components/ui-custom/PageTransition';
import { RefreshCw, Link as LinkIcon, CheckCircle2, AlertCircle } from 'lucide-react';

const Integrations = () => {
  return (
    <PageTransition className="page-container">
      <div className="flex flex-col space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Integrations</h1>
          <p className="text-muted-foreground">Connect your travel management system with other business tools</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <IntegrationCard 
            title="QuickBooks"
            description="Sync expense data with QuickBooks accounting software"
            icon="/placeholder.svg"
            status="connected"
            lastSync="Today at 9:30 AM"
          />
          
          <IntegrationCard 
            title="Xero"
            description="Sync expense data with Xero accounting software"
            icon="/placeholder.svg"
            status="disconnected"
          />
          
          <IntegrationCard 
            title="SAP Concur"
            description="Integrate with SAP Concur expense management"
            icon="/placeholder.svg"
            status="disconnected"
          />
          
          <IntegrationCard 
            title="Expensify"
            description="Connect with Expensify for expense reporting"
            icon="/placeholder.svg"
            status="connected"
            lastSync="Yesterday at 5:15 PM"
          />
          
          <IntegrationCard 
            title="NetSuite"
            description="Integrate with NetSuite ERP system"
            icon="/placeholder.svg"
            status="disconnected"
          />
          
          <IntegrationCard 
            title="Microsoft 365"
            description="Connect calendar and email notifications"
            icon="/placeholder.svg"
            status="connected"
            lastSync="Today at 10:45 AM"
          />
          
          <IntegrationCard 
            title="Slack"
            description="Send notifications and alerts to Slack channels"
            icon="/placeholder.svg"
            status="connected"
            lastSync="Today at 8:00 AM"
          />
          
          <IntegrationCard 
            title="Google Workspace"
            description="Integrate with Google Calendar and Gmail"
            icon="/placeholder.svg"
            status="disconnected"
          />
        </div>

        <Card>
          <CardHeader>
            <CardTitle>API Access</CardTitle>
            <CardDescription>Manage API keys and access for custom integrations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base">Enable API Access</Label>
                  <p className="text-sm text-muted-foreground">Allow external systems to access your travel data via API</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>

            <div className="space-y-3">
              <Label htmlFor="api-key">API Key</Label>
              <div className="flex gap-2">
                <Input id="api-key" value="sk_live_51NwUa8SGgH•••••••••••••••" readOnly className="font-mono text-sm" />
                <Button variant="outline">Regenerate</Button>
              </div>
              <p className="text-sm text-muted-foreground">Your API key grants access to your travel data. Keep it secure and never share it publicly.</p>
            </div>

            <div className="space-y-3">
              <Label htmlFor="webhook-url">Webhook URL</Label>
              <Input id="webhook-url" placeholder="https://your-server.com/webhook" />
              <p className="text-sm text-muted-foreground">Receive real-time notifications about travel bookings and expense changes.</p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button>Save API Settings</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Custom Integration</CardTitle>
            <CardDescription>Set up a connection to an unsupported system</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="integration-name">Integration Name</Label>
                <Input id="integration-name" placeholder="e.g. Internal ERP System" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="integration-url">Service URL</Label>
                <Input id="integration-url" placeholder="https://api.example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="auth-token">Authentication Token</Label>
                <Input id="auth-token" type="password" placeholder="Enter authentication token" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sync-frequency">Sync Frequency</Label>
                <select className="w-full rounded-md border border-input bg-background px-3 py-2" id="sync-frequency" defaultValue="hourly">
                  <option value="realtime">Real-time</option>
                  <option value="hourly">Hourly</option>
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                </select>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button variant="outline" className="mr-2">Test Connection</Button>
            <Button>Add Integration</Button>
          </CardFooter>
        </Card>
      </div>
    </PageTransition>
  );
};

interface IntegrationCardProps {
  title: string;
  description: string;
  icon: string;
  status: 'connected' | 'disconnected';
  lastSync?: string;
}

const IntegrationCard = ({ title, description, icon, status, lastSync }: IntegrationCardProps) => {
  const isConnected = status === 'connected';
  
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary">
              <img src={icon} alt={title} className="w-6 h-6" />
            </div>
            <CardTitle className="text-xl">{title}</CardTitle>
          </div>
          {isConnected ? (
            <div className="flex items-center text-sm text-green-600 font-medium">
              <CheckCircle2 className="mr-1 h-4 w-4" />
              Connected
            </div>
          ) : (
            <div className="flex items-center text-sm text-muted-foreground font-medium">
              <AlertCircle className="mr-1 h-4 w-4" />
              Disconnected
            </div>
          )}
        </div>
        <CardDescription className="mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {isConnected && lastSync && (
          <div className="text-sm text-muted-foreground flex items-center mt-1">
            <RefreshCw className="mr-1 h-3 w-3" />
            Last synced: {lastSync}
          </div>
        )}
      </CardContent>
      <CardFooter>
        {isConnected ? (
          <div className="flex gap-2 w-full">
            <Button variant="outline" className="flex-1 gap-2">
              <RefreshCw className="h-4 w-4" />
              Sync Now
            </Button>
            <Button variant="outline" className="flex-1" color="destructive">Disconnect</Button>
          </div>
        ) : (
          <Button className="w-full gap-2">
            <LinkIcon className="h-4 w-4" />
            Connect
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default Integrations;
