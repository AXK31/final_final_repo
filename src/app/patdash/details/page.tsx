"use client";

import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import '@/app/globals.css';

interface HealthData {
  healthScore: { date: string; score: number }[];
  summary: {
    bmi: number;
    bloodPressure: string;
    cholesterol: string;
  };
  recentReports: { id: number; name: string; date: string; status: string }[];
}

const PatientDashboard = () => {
  const [healthData, setHealthData] = useState<HealthData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setHealthData({
        healthScore: [
          { date: "Jan", score: 85 },
          { date: "Feb", score: 87 },
          { date: "Mar", score: 90 },
          { date: "Apr", score: 88 },
        ],
        summary: {
          bmi: 24.5,
          bloodPressure: "120/80",
          cholesterol: "190 mg/dL",
        },
        recentReports: [
          { id: 1, name: "Blood Test", date: "2024-02-15", status: "Normal" },
          { id: 2, name: "X-ray", date: "2024-01-28", status: "Requires Review" },
        ],
      });
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">Patient Dashboard</h1>

      {/* Health Summary */}
      <Card className="w-full max-w-4xl mb-6">
        <CardHeader>
          <CardTitle>Health Summary</CardTitle>
        </CardHeader>
        <CardContent>
          {loading || !healthData ? (
            <Skeleton className="h-24 w-full" />
          ) : (
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-xl font-semibold">{healthData.summary.bmi}</p>
                <p className="text-gray-600">BMI</p>
              </div>
              <div>
                <p className="text-xl font-semibold">{healthData.summary.bloodPressure}</p>
                <p className="text-gray-600">Blood Pressure</p>
              </div>
              <div>
                <p className="text-xl font-semibold">{healthData.summary.cholesterol}</p>
                <p className="text-gray-600">Cholesterol</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Health Score Graph */}
      <Card className="w-full max-w-4xl mb-6">
        <CardHeader>
          <CardTitle>Health Score Trend</CardTitle>
        </CardHeader>
        <CardContent>
          {loading || !healthData ? (
            <Skeleton className="h-48 w-full" />
          ) : (
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={healthData.healthScore}>
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="score" stroke="#3B82F6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          )}
        </CardContent>
      </Card>

      {/* Recent Lab Reports */}
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle>Recent Lab Reports</CardTitle>
        </CardHeader>
        <CardContent>
          {loading || !healthData ? (
            <Skeleton className="h-24 w-full" />
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Report Name</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {healthData.recentReports.map((report) => (
                  <TableRow key={report.id}>
                    <TableCell>{report.name}</TableCell>
                    <TableCell>{report.date}</TableCell>
                    <TableCell>{report.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PatientDashboard;
