"use client";
import "@/app/globals.css";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Upload, CheckCircle, XCircle } from "lucide-react";

interface LabReport {
  id: number;
  fileName: string;
  status: string;
  assignedDoctor: string;
}

export default function LabAssistant() {
  const [reports, setReports] = useState<LabReport[]>([
    { id: 1, fileName: "Blood_Test_Report.pdf", status: "Processing", assignedDoctor: "Dr. Smith" },
    { id: 2, fileName: "MRI_Scan_Report.pdf", status: "Completed", assignedDoctor: "Dr. Johnson" },
    { id: 3, fileName: "X-Ray_Report.pdf", status: "Rejected", assignedDoctor: "Dr. Brown" },
    { id: 4, fileName: "Urine_Test_Report.pdf", status: "Processing", assignedDoctor: "Dr. Lee" }
  ]);
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
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-100 p-20 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-white mb-4">MedicAI Lab Assistant</h1>
      <p className="text-white text-lg mb-8">Effortlessly manage and track lab reports.</p>
      
      <div className="w-full max-w-4xl flex flex-col md:flex-row gap-6">
        <Card className="p-4 shadow-lg flex-1">
          <CardContent className="space-y-10">
            <h2 className="text-lg font-semibold">Upload Lab Report</h2>
            <Input type="file" onChange={handleFileChange} />
            <Input type="text" placeholder="Assign to Doctor (optional)" value={doctor} onChange={(e) => setDoctor(e.target.value)} />
            <Button onClick={uploadReport} className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white w-full">
              <Upload size={16} /> Upload Report
            </Button>
          </CardContent>
        </Card>

        <div className="bg-white p-6 rounded-lg shadow-md flex-1">
          <div className="flex justify-between items-center mb-4">
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
    </div>
  );
}
