"use client";

import { useEffect, useState } from "react";
import "@/app/globals.css";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Bell, AlertTriangle, FileText, CheckCircle } from "lucide-react";

const DoctorNotificationsPage = () => {
  const router = useRouter();
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "urgent",
      message: "Patient John Doe has a critically low health score (42). Immediate attention required!",
      time: "2 mins ago",
    },
    {
      id: 2,
      type: "lab-report",
      message: "New lab report available for Jane Smith. Click to review.",
      time: "10 mins ago",
    },
    {
      id: 3,
      type: "general",
      message: "Appointment confirmed with Dr. Alex for Mark Lee on March 10.",
      time: "30 mins ago",
    },
    {
      id: 4,
      type: "resolved",
      message: "Patient Emma Wilson’s case has been reviewed. No further action required.",
      time: "1 hour ago",
    },
  ]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-white p-6">
      <Card className="w-full max-w-2xl shadow-xl rounded-2xl overflow-hidden bg-white">
        <CardHeader className="bg-blue-600 text-white py-6 flex items-center justify-between">
          <CardTitle className="text-2xl font-bold flex items-center gap-2">
            <Bell className="w-6 h-6" /> Doctor Notifications
          </CardTitle>
        </CardHeader>

        <CardContent className="p-6">
          {notifications.length > 0 ? (
            <div className="space-y-4">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 rounded-lg flex items-center justify-between ${
                    notification.type === "urgent"
                      ? "bg-red-100 border-l-4 border-red-600"
                      : notification.type === "lab-report"
                      ? "bg-yellow-100 border-l-4 border-yellow-600"
                      : notification.type === "resolved"
                      ? "bg-green-100 border-l-4 border-green-600"
                      : "bg-gray-100 border-l-4 border-gray-600"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {notification.type === "urgent" && <AlertTriangle className="text-red-600 w-6 h-6" />}
                    {notification.type === "lab-report" && <FileText className="text-yellow-600 w-6 h-6" />}
                    {notification.type === "resolved" && <CheckCircle className="text-green-600 w-6 h-6" />}
                    <div>
                      <p className="text-gray-800 font-semibold">{notification.message}</p>
                      <p className="text-gray-500 text-sm">{notification.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No new notifications.</p>
          )}

          <Separator className="my-6" />

          <Button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            onClick={() => router.push("/docdash")}
          >
            🔙 Back to Dashboard
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default DoctorNotificationsPage;
