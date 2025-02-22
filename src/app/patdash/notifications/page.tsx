"use client";

import { useState } from "react";
import "@/app/globals.css";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Bell, CalendarCheck, FileText, MessageSquare, AlertTriangle } from "lucide-react";

const notifications = [
  {
    id: 1,
    type: "appointment",
    icon: <CalendarCheck className="text-blue-600 w-5 h-5" />,
    title: "Upcoming Appointment",
    message: "You have a check-up with Dr. Smith on March 5th at 10:00 AM.",
    date: "March 5, 2025",
  },
  {
    id: 2,
    type: "lab",
    icon: <FileText className="text-green-600 w-5 h-5" />,
    title: "Lab Report Ready",
    message: "Your latest blood test results are now available. View them in your records.",
    date: "March 2, 2025",
  },
  {
    id: 3,
    type: "message",
    icon: <MessageSquare className="text-purple-600 w-5 h-5" />,
    title: "New Message from Dr. Patel",
    message: "Please review the treatment plan and follow up if needed.",
    date: "March 1, 2025",
  },
  {
    id: 4,
    type: "alert",
    icon: <AlertTriangle className="text-red-600 w-5 h-5" />,
    title: "Health Alert: High BP Detected",
    message: "Your recent readings indicate high blood pressure. Consider consulting your doctor.",
    date: "February 28, 2025",
  },
];

const NotificationsPage = () => {
  const [notifList, setNotifList] = useState(notifications);

  const clearNotifications = () => setNotifList([]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <Card className="w-full max-w-lg shadow-lg rounded-xl overflow-hidden bg-white">
        <CardHeader className="bg-blue-600 text-white py-5 flex items-center gap-3">
          <Bell className="w-6 h-6" />
          <CardTitle className="text-xl font-bold">Notifications</CardTitle>
        </CardHeader>
        <CardContent className="p-5 space-y-4">
          {notifList.length > 0 ? (
            notifList.map((notif) => (
              <div key={notif.id} className="flex items-start gap-4 p-3 border rounded-lg bg-gray-50">
                {notif.icon}
                <div className="flex-1">
                  <p className="font-semibold">{notif.title}</p>
                  <p className="text-sm text-gray-600">{notif.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{notif.date}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No new notifications 🎉</p>
          )}

          <Separator className="my-4" />

          {notifList.length > 0 && (
            <Button onClick={clearNotifications} className="w-full bg-red-500 hover:bg-red-600 text-white">
              Clear All Notifications
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default NotificationsPage;
