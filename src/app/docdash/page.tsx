"use client";
import React, { useState } from "react";
import "@/app/globals.css";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { UploadCloud, FileText, Home, ClipboardList, User, Stethoscope, Files, Settings, MessageCircle, LogOut } from "lucide-react";

const NavbarDemo = () => {
  return (
    <div className="absolute flex items-center bg-gradient-to-br from-blue-500 to-white-100 min-h-screen w-full">
      <Navbar className="top-10 justify-center" />
      <div className="w-full mt-2 p-4 items-center justify-center">
        <h2 className="flex justify-center items-center W-full text-4xl text-blue-900 p-4"><b>Hello Doctor!</b></h2>
        <p className="text-lg flex justify-center items-center text-center ">
          This dashboard will show you the list of patients, their Healthscores and their condition.<br/>
          For more details, click on "More Details" in the table. 
        </p>
        <div className="mt-20 p-12 w-full">
          <DataTable />
        </div>
      </div>
    </div>
  );
};



const DataTable = () => {
  const data = [
    { name: "Hart Hagerty", healthScore: 10 },
    { name: "Brice Swyre", healthScore: 80 },
    { name: "Marjy Ferencz", healthScore: 30 },
    { name: "Yancy Tear", healthScore: 2 },
    { name: "William M", healthScore: 70 },
  ];

  const getCondition = (score: number) => {
    if (score >= 80) return "Healthy";
    if (score >= 50 && score < 80) return "Moderate";
    if (score <= 50 && score > 20) return "Unhealthy";
    return "Critical";
  };

  const getConditionColor = (condition: string) => {
    switch (condition) {
      case "Healthy": return "text-green-600";
      case "Moderate": return "text-yellow-600";
      case "Unhealthy": return "text-orange-600";
      case "Critical": return "text-red-600";
      default: return "text-gray-600";
    }
  };

  return (
    <div className="w-full">
      <table className="table-auto border-collapse bg-white w-full border border-gray-300">
        <thead>
          <tr className="bg-blue-900 text-white">
            <th className="px-4 py-2 border-b justify-start">
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td className="px-4 py-2 border-b"><b>Name</b></td>
            <td className="px-4 py-2 border-b"><b>Condition</b></td>
            <td className="px-4 py-2 border-b"><b>Health Score</b></td>
            <td className="px-4 py-2 border-b"><b>Details</b></td>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => {
            const condition = getCondition(row.healthScore);
            return (
              <tr key={index} className="hover:bg-gray-50">
                <th className="px-4 py-2 border-b">
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td className="px-4 py-2 border-b">
                  <div>
                    <div className="font-bold">{row.name}</div>
                  </div>
                </td>
                <td className={`px-4 py-2 border-b ${getConditionColor(condition)}`}>
                  <span className="badge badge-ghost badge-sm">{condition}</span>
                </td>
                <td className="px-4 py-2 border-b">{row.healthScore}</td>
                <td className="px-4 py-2 border-b">
                  <button className="btn btn-ghost btn-xs">
                    <u>
                      <Link href="/docpatpage">More details</Link>
                    </u>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};



function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
      <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/docdash"> 
            <Home className="mr-2 inline" /> Return to Dashboard</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Notification">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/docdash/notifications">
            <Stethoscope className="mr-2 inline" />View Appointments
            </HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Profile">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/docdash/profile">
            <User className="mr-2 inline" /> View Profile </HoveredLink>
            <HoveredLink href="/doctor/doclogin">
            <LogOut className="mr-2 inline" /> Logout</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default NavbarDemo;