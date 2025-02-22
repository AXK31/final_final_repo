"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import "@/app/globals.css";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { UploadCloud, FileText, Home, ClipboardList, User, Stethoscope, Files, Settings, MessageCircle } from "lucide-react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { FileUpload } from "@/components/ui/fileupload";

const PatientDashboard = () => {
  const router = useRouter();
  const [files, setFiles] = useState<File[]>([]);

const handleFileUpload = (files: File[]) => {
    setFiles(files);
    console.log(files);
  };



  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-300 to-white flex flex-col items-center">
      {/* Navbar */}
      <Navbar className="top-1" />
      
      {/* Welcome Section */}
      <div className="text-center mt-20 p-20">
        <h1 className="text-3xl font-bold text-blue-900">Welcome to Your Health Dashboard</h1>
        <p className="text-gray-700 mt-2 max-w-xl">
          Here you can upload your medical reports and fill out health assessment forms to get AI-driven insights.
        </p>
      </div>

      {/* Actions Section */}
      <div className="mt-100 flex flex-row md:flex-row space-y-1 md:space-y-0 md:space-x-10">
        {/* Upload Report */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center w-80 text-center">
          <UploadCloud size={40} className="text-blue-500" />
          <h2 className="text-lg font-semibold mt-4">Upload Medical Report</h2>
          <FileUpload onChange={handleFileUpload} />
        </div>

        {/* Fill Form */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center w-80 text-center">
          <FileText size={40} className="text-blue-500" />
          <h2 className="text-lg font-semibold mt-4">Fill Health Assessment Form</h2>
          <p className="text-sm text-gray-600 mt-10">
            Provide your health details to receive personalized insights.
          </p>
          <Button 
            className="mt-20 w-full bg-blue-600 hover:bg-blue-700 text-white"
            onClick={() => router.push("/patdash/form")}
          >
            Fill Form
          </Button>
        </div>
      </div>
    </div>
  );
};
function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
      <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
        <Menu setActive={setActive}>
          <MenuItem 
            setActive={setActive} 
            active={active} 
            item="Home"
          >
            <HoveredLink href="/patdash/details">
              <Home className="mr-2 inline" /> Dashboard
            </HoveredLink>
          </MenuItem>
  
          
  
          <MenuItem 
            setActive={setActive} 
            active={active} 
            item="Notifications"
          >
            <div className="flex flex-col space-y-2 p-2">
              <HoveredLink href="/patient/appointments">
                <MessageCircle className="mr-2 inline" /> Messages received
              </HoveredLink>
              <HoveredLink href="/patient/upcoming">
                <Stethoscope className="mr-2 inline" /> Upcoming Appointments
              </HoveredLink>
            </div>
          </MenuItem>
  
          <MenuItem 
            setActive={setActive} 
            active={active} 
            item="Profile"
          >
            <div className="flex flex-col space-y-2 p-2">
              <HoveredLink href="/patdash/profile">
                <User className="mr-2 inline" /> View Profile
              </HoveredLink>
              <HoveredLink href="/patient/settings">
                <Settings className="mr-2 inline" /> Settings
              </HoveredLink>
            </div>
          </MenuItem>
        </Menu>
      </div>
    );
  }
  

export default PatientDashboard;
