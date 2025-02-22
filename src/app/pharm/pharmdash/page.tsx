"use client";
import React, { useState } from "react";
import "@/app/globals.css";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

const NavbarDemo = () => {
  return (
    <div className="absolute flex items-center bg-gradient-to-br from-blue-200 to-white-100 min-h-screen w-full">
      <div className="w-full mt-10 p-4 items-center justify-center">
        <h1 className="flex justify-center items-center w-full text-6xl text-blue-900 p-12"><b>MedicAI</b></h1>
        <h2 className="flex justify-center items-center w-full text-4xl text-blue-700"><b>Welcome to pharmacy dashboard!</b></h2>
        <p className="text-lg flex justify-center items-center text-center">
          This dashboard will show you the list of patient IDs, their medicine requirements along with a checkbox.<br />
          As soon as the checkbox is checked, we will notify the patient to collect the medicines. 
        </p>
        <div className="mt-20 p-12 w-full">
          <DataTable />
        </div>
      </div>
    </div>
  );
};

const DataTable = () => {
  const [availability, setAvailability] = useState<{ [key: number]: string }>({
    1234: "Yes",
    5678: "No",
    9012: "Yes",
    3456: "No",
    67890: "Yes",
  });

  const handleChange = (id: number, value: string) => {
    setAvailability((prev) => ({ ...prev, [id]: value }));
  };

  const data = [
    { id: 1234, name: "Crocin" },
    { id: 5678, name: "Paracetamol" },
    { id: 9012, name: "PanD" },
    { id: 3456, name: "Dolo 650" },
    { id: 67890, name: "Gelusil" },
  ];

  return (
    <div className="w-full">
      <table className="table-auto border-collapse bg-white w-full border border-black-900">
        <thead>
          <tr className="bg-blue-900 text-white">
            <th className="px-4 py-2 border-b text-left">
              <input type="checkbox" className="checkbox" />
            </th>
            <th className="px-4 py-2 border-b"><b>Patient ID</b></th>
            <th className="px-4 py-2 border-b"><b>Medicines</b></th>
            <th className="px-4 py-2 border-b"><b>Availability</b></th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="hover:bg-gray-50">
              <td className="px-4 py-2 border-b">
                <input type="checkbox" className="checkbox" />
              </td>
              <td className="px-4 py-2 border-b font-bold">{row.id}</td>
              <td className="px-4 py-2 border-b">{row.name}</td>
              <td className="px-4 py-2 border-b">
                <select
                  className={`border border-gray-300 rounded px-2 py-1 ${
                    availability[row.id] === "Yes" ? "bg-green-500 text-white" : "bg-red-500 text-white"
                  }`}
                  value={availability[row.id]}
                  onChange={(e) => handleChange(row.id, e.target.value)}
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NavbarDemo;
