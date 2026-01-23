import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertCircle } from "lucide-react";

export default function StudentFees() {
  const feeBreakdown = [
    { item: "Tuition Fee", amount: 150000, status: "Paid" },
    { item: "Hostel Fee", amount: 50000, status: "Paid" },
    { item: "Library Fee", amount: 5000, status: "Paid" },
    { item: "Lab Fee", amount: 10000, status: "Pending" },
    { item: "Sports Fee", amount: 3000, status: "Pending" },
    { item: "Student Development", amount: 2000, status: "Pending" },
  ];

  const totalPaid = feeBreakdown.filter(f => f.status === "Paid").reduce((sum, f) => sum + f.amount, 0);
  const totalPending = feeBreakdown.filter(f => f.status === "Pending").reduce((sum, f) => sum + f.amount, 0);

  return (
    <DashboardLayout role="student">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Fees Management</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6 text-center">
              <p className="text-slate-600 text-sm">Total Paid</p>
              <p className="text-3xl font-bold text-green-600 mt-2">₹{(totalPaid / 1000).toFixed(0)}K</p>
            </CardContent>
          </Card>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="p-6 text-center">
              <p className="text-slate-600 text-sm">Pending</p>
              <p className="text-3xl font-bold text-red-600 mt-2">₹{totalPending.toLocaleString()}</p>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6 text-center">
              <p className="text-slate-600 text-sm">Due Date</p>
              <p className="text-3xl font-bold text-blue-600 mt-2">Feb 10</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Fee Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {feeBreakdown.map((fee, idx) => (
                <div key={idx} className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                  <div className="flex justify-between items-center flex-1">
                    <span className="font-medium text-slate-900">{fee.item}</span>
                    <span className="text-slate-600">₹{fee.amount.toLocaleString()}</span>
                  </div>
                  <Badge className={fee.status === "Paid" ? "bg-green-100 text-green-800 ml-4" : "bg-red-100 text-red-800 ml-4"}>
                    {fee.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-yellow-50 border-yellow-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle size={20} /> Important Notice
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-yellow-900">Please pay the pending fees before the deadline to avoid late charges. Late fee of ₹500 will be applicable after February 10.</p>
            <Button className="mt-4 bg-yellow-600 hover:bg-yellow-700">Pay Now</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payment History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <p><strong>Last Payment:</strong> January 20, 2026 - ₹100,000 (Tuition)</p>
              <p><strong>Previous:</strong> December 15, 2025 - ₹55,000 (Tuition + Hostel)</p>
              <p><strong>Method:</strong> Online Transfer</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
