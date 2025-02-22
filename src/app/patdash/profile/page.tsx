"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import "@/app/globals.css";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  User,
  HeartPulse,
  Edit,
  Calendar,
  Droplet,
  FileText,
  Cigarette,
  Wine,
  PhoneCall,
  AlertTriangle,
} from "lucide-react";

const PatientProfile = () => {
  const patient = {
    name: "John Doe",
    role: "Patient",
    email: "johndoe@example.com",
    phone: "+1 234 567 890",
    healthStatus: "Stable",
    lastCheckup: "2024-02-15",
    age: 32,
    bloodType: "O+",
    symptoms: ["Fatigue", "Headache"],
    allergies: ["Peanuts", "Penicillin"],
    smoking: "No",
    alcohol: "Occasionally",
    emergencyContact: {
      name: "Jane Doe",
      relation: "Wife",
      phone: "+1 987 654 321",
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-300 to-blue-500 p-12 flex flex-col items-center">
      <Card className="w-full max-w-4xl shadow-lg border border-gray-200 rounded-xl bg-white">
        <CardHeader className="bg-blue-600 text-white p-6 rounded-t-xl flex flex-col items-center">
          <User size={60} className="mb-3" />
          <CardTitle className="text-xl font-semibold">Patient Profile</CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-5">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-3">
              <User size={22} className="text-blue-600" />
              <p className="text-lg font-semibold">{patient.name}</p>
              <Badge className="bg-blue-100 text-blue-600 px-2 py-1 text-sm">{patient.role}</Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <Mail size={22} className="text-green-600" />
                <p className="text-gray-700">{patient.email}</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={22} className="text-purple-600" />
                <p className="text-gray-700">{patient.phone}</p>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar size={22} className="text-orange-600" />
                <p className="text-gray-700">Age: {patient.age} years</p>
              </div>
              <div className="flex items-center space-x-3">
                <Droplet size={22} className="text-red-600" />
                <p className="text-gray-700">Blood Type:</p>
                <Badge className="bg-red-100 text-red-600">{patient.bloodType}</Badge>
              </div>
              <div className="flex items-center space-x-3">
                <HeartPulse size={22} className="text-red-600" />
                <p className="text-gray-700 font-medium">Health Status:</p>
                <Badge className={patient.healthStatus === "Stable" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}>{patient.healthStatus}</Badge>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <FileText size={22} className="text-blue-600" />
              <p className="text-gray-700">Symptoms:</p>
              <div className="flex space-x-2">
                {patient.symptoms.map((symptom, index) => (
                  <Badge key={index} className="bg-yellow-100 text-yellow-700">{symptom}</Badge>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <AlertTriangle size={22} className="text-red-600" />
              <p className="text-gray-700">Allergies:</p>
            </div>
            <div className="flex space-x-2">
              {patient.allergies.map((allergy, index) => (
                <Badge key={index} className="bg-red-100 text-red-700">{allergy}</Badge>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <Cigarette size={22} className="text-gray-500" />
                <p className="text-gray-700">Smoking:</p>
                <Badge className="bg-green-100 text-green-600">{patient.smoking}</Badge>
              </div>
              <div className="flex items-center space-x-3">
                <Wine size={22} className="text-red-500" />
                <p className="text-gray-700">Alcohol:</p>
                <Badge className="bg-yellow-100 text-yellow-700">{patient.alcohol}</Badge>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <PhoneCall size={22} className="text-blue-600" />
              <p className="text-gray-700">Emergency Contact: {patient.emergencyContact.name} ({patient.emergencyContact.relation})</p>
            </div>
            <p className="text-gray-600">{patient.emergencyContact.phone}</p>
          </div>
          
          <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 mt-4">Update Information</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default PatientProfile;