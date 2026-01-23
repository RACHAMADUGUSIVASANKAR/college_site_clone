import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Settings as SettingsIcon, Save } from "lucide-react";

export default function AdminSettings() {
  return (
    <DashboardLayout role="admin">
      <div className="space-y-6 max-w-4xl">
        <h1 className="text-3xl font-bold">System Settings</h1>

        <div className="space-y-4">
          {/* Academic Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <SettingsIcon className="w-5 h-5" />
                Academic Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded">
                <div>
                  <p className="font-semibold text-slate-900">Current Semester</p>
                  <p className="text-sm text-slate-600">Semester 5</p>
                </div>
                <select className="border border-slate-300 rounded px-3 py-2">
                  <option>Semester 1</option>
                  <option>Semester 2</option>
                  <option>Semester 3</option>
                  <option selected>Semester 5</option>
                </select>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded">
                <div>
                  <p className="font-semibold text-slate-900">Academic Year</p>
                  <p className="text-sm text-slate-600">2023-2024</p>
                </div>
                <input type="text" className="border border-slate-300 rounded px-3 py-2" value="2023-2024" />
              </div>
            </CardContent>
          </Card>

          {/* User Management */}
          <Card>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center p-3 border-b">
                <div>
                  <p className="font-semibold text-slate-900">Allow Student Registration</p>
                  <p className="text-sm text-slate-600">Enable/disable new student signups</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex justify-between items-center p-3 border-b">
                <div>
                  <p className="font-semibold text-slate-900">Email Verification Required</p>
                  <p className="text-sm text-slate-600">Verify email before account activation</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex justify-between items-center p-3">
                <div>
                  <p className="font-semibold text-slate-900">Two-Factor Authentication</p>
                  <p className="text-sm text-slate-600">Enable 2FA for admin accounts</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center p-3 border-b">
                <div>
                  <p className="font-semibold text-slate-900">Email Notifications</p>
                  <p className="text-sm text-slate-600">Send email alerts for important events</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex justify-between items-center p-3 border-b">
                <div>
                  <p className="font-semibold text-slate-900">SMS Alerts</p>
                  <p className="text-sm text-slate-600">Send SMS for critical notifications</p>
                </div>
                <Switch />
              </div>
              <div className="flex justify-between items-center p-3">
                <div>
                  <p className="font-semibold text-slate-900">Push Notifications</p>
                  <p className="text-sm text-slate-600">Browser push notifications</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          {/* Security Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center p-3 border-b">
                <div>
                  <p className="font-semibold text-slate-900">Session Timeout</p>
                  <p className="text-sm text-slate-600">Auto-logout after inactivity</p>
                </div>
                <select className="border border-slate-300 rounded px-3 py-2">
                  <option>15 minutes</option>
                  <option selected>30 minutes</option>
                  <option>1 hour</option>
                  <option>2 hours</option>
                </select>
              </div>
              <div className="flex justify-between items-center p-3 border-b">
                <div>
                  <p className="font-semibold text-slate-900">Password Policy</p>
                  <p className="text-sm text-slate-600">Enforce strong password requirements</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex justify-between items-center p-3">
                <div>
                  <p className="font-semibold text-slate-900">Account Lockout</p>
                  <p className="text-sm text-slate-600">Lock account after 5 failed attempts</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          {/* System Maintenance */}
          <Card>
            <CardHeader>
              <CardTitle>System Maintenance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full">Backup Database</Button>
              <Button variant="outline" className="w-full">Clear Cache</Button>
              <Button variant="outline" className="w-full">View System Logs</Button>
              <Button variant="outline" className="w-full">Database Maintenance</Button>
            </CardContent>
          </Card>

          {/* Save Settings */}
          <div className="flex gap-2">
            <Button className="bg-purple-600 flex-1"><Save className="w-4 h-4 mr-2" />Save Settings</Button>
            <Button variant="outline" className="flex-1">Reset to Default</Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
