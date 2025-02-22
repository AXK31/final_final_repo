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
  BriefcaseMedical,
  Calendar,
  Stethoscope,
  GraduationCap,
  Clock,
  MapPin,
} from "lucide-react";

const DoctorProfile = () => {
  const doctor = {
    name: "Dr. John Smith",
    role: "Doctor",
    email: "dr.johnsmith@example.com",
    phone: "+1 234 567 890",
    specialization: "Cardiologist",
    experience: "15 years",
    availability: "Monday - Friday, 9 AM - 5 PM",
    degrees: ["MBBS", "MD Cardiology"],
    clinicAddress: "123 Health St, Medical City, USA",
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-blue-300 to-blue-500 p-12">
      <Card className="w-full max-w-4xl shadow-lg border border-gray-200 rounded-xl bg-white">
        <CardHeader className="bg-blue-600 text-white p-6 rounded-t-xl flex flex-col items-center">
          <BriefcaseMedical size={60} className="mb-3" />
          <CardTitle className="text-xl font-semibold">Doctor Profile</CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          <div className="flex flex-col space-y-4">
            {/* Name */}
            <div className="flex items-center space-x-3">
              <User size={22} className="text-blue-600" />
              <p className="text-lg font-semibold">{doctor.name}</p>
            </div>

            {/* Role */}
            <Badge className="bg-blue-100 text-blue-600 w-full text-center py-1">{doctor.role}</Badge>

            {/* Email */}
            <div className="flex items-center space-x-3">
              <Mail size={22} className="text-green-600" />
              <p className="text-gray-700">{doctor.email}</p>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-3">
              <Phone size={22} className="text-purple-600" />
              <p className="text-gray-700">{doctor.phone}</p>
            </div>

            {/* Specialization */}
            <div className="flex items-center space-x-3">
              <Stethoscope size={22} className="text-red-600" />
              <p className="text-gray-700">Specialization:</p>
            </div>
            <Badge className="bg-red-100 text-red-600 w-max-md text-center">{doctor.specialization}</Badge>

            {/* Degrees */}
            <div className="flex items-center space-x-3">
              <GraduationCap size={22} className="text-blue-600" />
              <p className="text-gray-700">Degrees:</p>
            </div>
            <div className="flex flex-col space-y-2">
              {doctor.degrees.map((degree, index) => (
                <Badge key={index} className="bg-yellow-100 text-yellow-700 w-full text-center">{degree}</Badge>
              ))}
            </div>

            {/* Experience */}
            <div className="flex items-center space-x-3">
              <Calendar size={22} className="text-orange-600" />
              <p className="text-gray-700">Experience:</p>
            </div>
            <Badge className="bg-green-100 text-green-600 w-full text-center">{doctor.experience}</Badge>

            {/* Availability */}
            <div className="flex items-center space-x-3">
              <Clock size={22} className="text-gray-600" />
              <p className="text-gray-700">Availability:</p>
            </div>
            <Badge className="bg-blue-100 text-blue-600 w-full text-center">{doctor.availability}</Badge>

            {/* Clinic Address */}
            <div className="flex items-center space-x-3">
              <MapPin size={22} className="text-gray-600" />
              <p className="text-gray-700">Clinic Address:</p>
            </div>
            <Badge className="bg-gray-100 text-gray-700 w-full text-center">{doctor.clinicAddress}</Badge>
          </div>

          {/* Update Button */}
          <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 mt-4">
            Update Information
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default DoctorProfile;
