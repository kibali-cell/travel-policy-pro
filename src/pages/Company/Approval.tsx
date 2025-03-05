
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import PageTransition from '@/components/ui-custom/PageTransition';
import { Save, Plus, X } from 'lucide-react';

const Approval = () => {
  return (
    <PageTransition className="page-container">
      <div className="flex flex-col space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Travel Approval Workflow</h1>
          <p className="text-muted-foreground">Configure your company's travel approval process and rules</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Approval Requirements</CardTitle>
            <CardDescription>Configure when travel requests require approval</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base">Enable Approval Workflow</Label>
                  <p className="text-sm text-muted-foreground">Turn on the approval process for travel bookings</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base">Require Approval for All Trips</Label>
                  <p className="text-sm text-muted-foreground">All trips require manager approval regardless of cost</p>
                </div>
                <Switch />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base">Require Approval for Out-of-Policy Bookings</Label>
                  <p className="text-sm text-muted-foreground">Only trips that violate policy require approval</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Cost Thresholds</CardTitle>
            <CardDescription>Set cost thresholds that trigger approval requirements</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base">Enable Cost Thresholds</Label>
                  <p className="text-sm text-muted-foreground">Require approval for bookings above certain costs</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="flight-threshold">Flight Cost Threshold (USD)</Label>
                <Input id="flight-threshold" type="number" placeholder="e.g. 1000" defaultValue="1000" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="hotel-threshold">Hotel Total Cost Threshold (USD)</Label>
                <Input id="hotel-threshold" type="number" placeholder="e.g. 500" defaultValue="500" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="car-threshold">Car Rental Cost Threshold (USD)</Label>
                <Input id="car-threshold" type="number" placeholder="e.g. 300" defaultValue="300" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="total-threshold">Total Trip Cost Threshold (USD)</Label>
                <Input id="total-threshold" type="number" placeholder="e.g. 2000" defaultValue="2000" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Approval Chain</CardTitle>
              <CardDescription>Define who needs to approve travel requests</CardDescription>
            </div>
            <Button size="sm" variant="outline" className="gap-2">
              <Plus className="h-4 w-4" /> Add Approver
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="font-medium">Level 1 Approval</div>
                  <Button variant="ghost" size="icon">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="approver-type">Approver Type</Label>
                    <Select defaultValue="manager">
                      <SelectTrigger id="approver-type">
                        <SelectValue placeholder="Select approver type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="manager">Direct Manager</SelectItem>
                        <SelectItem value="department">Department Head</SelectItem>
                        <SelectItem value="finance">Finance Team</SelectItem>
                        <SelectItem value="travel">Travel Admin</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="approval-threshold">Approval Threshold (USD)</Label>
                    <Input id="approval-threshold" type="number" placeholder="Any amount" defaultValue="1000" />
                  </div>
                </div>
              </div>

              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="font-medium">Level 2 Approval</div>
                  <Button variant="ghost" size="icon">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="approver-type-2">Approver Type</Label>
                    <Select defaultValue="department">
                      <SelectTrigger id="approver-type-2">
                        <SelectValue placeholder="Select approver type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="manager">Direct Manager</SelectItem>
                        <SelectItem value="department">Department Head</SelectItem>
                        <SelectItem value="finance">Finance Team</SelectItem>
                        <SelectItem value="travel">Travel Admin</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="approval-threshold-2">Approval Threshold (USD)</Label>
                    <Input id="approval-threshold-2" type="number" placeholder="Any amount" defaultValue="3000" />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notification Settings</CardTitle>
            <CardDescription>Configure how approvers are notified of pending requests</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base">Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">Send email notifications for pending approvals</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base">In-App Notifications</Label>
                  <p className="text-sm text-muted-foreground">Show notifications within the application</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base">Daily Digest</Label>
                  <p className="text-sm text-muted-foreground">Send a daily summary of pending approvals</p>
                </div>
                <Switch />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base">Reminder Notifications</Label>
                  <p className="text-sm text-muted-foreground">Send reminders for pending approvals after 24 hours</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end">
          <Button className="gap-2">
            <Save className="h-4 w-4" />
            Save Approval Settings
          </Button>
        </div>
      </div>
    </PageTransition>
  );
};

export default Approval;
