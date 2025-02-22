"use client";
import "@/app/globals.css";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Upload, CheckCircle, XCircle, Eye } from "lucide-react";

interface LabReport {
  id: number;
  fileName: string;
  status: string;
  assignedDoctor: string;
}

export default function LabAssistant() {
  const [reports, setReports] = useState<LabReport[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [doctor, setDoctor] = useState("");
  const [filter, setFilter] = useState("All");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const uploadReport = () => {
    if (file) {
      const newReport: LabReport = {
        id: reports.length + 1,
        fileName: file.name,
        status: "Processing",
        assignedDoctor: doctor || "Unassigned",
      };
      setReports([...reports, newReport]);
      setFile(null);
      setDoctor("");
    }
  };

  const updateStatus = (id: number, status: string) => {
    setReports((prevReports) =>
      prevReports.map((report) =>
        report.id === id ? { ...report, status } : report
      )
    );
  };

  const filteredReports = reports.filter(report => filter === "All" || report.status === filter);

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      <Card className="p-4 mb-6 shadow-lg w-full max-w-md">
        <CardContent className="space-y-4">
          <h2 className="text-lg font-semibold">Upload Lab Report</h2>
          <Input type="file" onChange={handleFileChange} />
          <Input type="text" placeholder="Assign to Doctor (optional)" value={doctor} onChange={(e) => setDoctor(e.target.value)} />
          <Button onClick={uploadReport} className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white w-full">
            <Upload size={16} /> Upload Report
          </Button>
        </CardContent>
      </Card>
      
      <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-4xl">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold">Lab Reports</h2>
          <select className="border p-1 rounded" value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">All</option>
            <option value="Processing">Processing</option>
            <option value="Completed">Completed</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
        <Table className="w-full">
          <TableHeader className="bg-gray-200">
            <TableRow>
              <TableHead className="px-4 py-2 text-left">ID</TableHead>
              <TableHead className="px-4 py-2 text-left">File Name</TableHead>
              <TableHead className="px-4 py-2 text-left">Status</TableHead>
              <TableHead className="px-4 py-2 text-left">Assigned Doctor</TableHead>
              <TableHead className="px-4 py-2 text-left">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredReports.length > 0 ? filteredReports.map((report) => (
              <TableRow key={report.id} className="border-b hover:bg-gray-100 transition-all">
                <TableCell className="px-4 py-2">{report.id}</TableCell>
                <TableCell className="px-4 py-2 font-medium">{report.fileName}</TableCell>
                <TableCell className={`px-4 py-2 font-semibold ${report.status === 'Processing' ? 'text-yellow-600' : report.status === 'Completed' ? 'text-green-600' : 'text-red-600'}`}>{report.status}</TableCell>
                <TableCell className="px-4 py-2 italic">{report.assignedDoctor}</TableCell>
                <TableCell className="px-4 py-2 flex gap-2">
                  <Button onClick={() => updateStatus(report.id, "Completed")} size="sm" className="bg-green-500 hover:bg-green-600 text-white">
                    <CheckCircle size={16} /> Complete
                  </Button>
                  <Button onClick={() => updateStatus(report.id, "Rejected")} size="sm" className="bg-red-500 hover:bg-red-600 text-white">
                    <XCircle size={16} /> Reject
                  </Button>
                </TableCell>
              </TableRow>
            )) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-4 text-gray-500">No reports available.</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
