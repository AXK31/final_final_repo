"use client";
import React, { useState } from "react";
import "@/app/globals.css";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

const NavbarDemo = () => {
  return (
    <div className="absolute flex items-center bg-gradient-to-br from-blue-500 to-white-100 min-h-screen w-full">
      <Navbar className="top-10 justify-center" />
      <div className="w-full mt-2 p-4 items-center justify-center">
        <h2 className="flex justify-center items-center W-full text-4xl text-blue-900"><b>Hello Doctor!</b></h2>
        <p className="text-lg flex justify-center items-center text-center">
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
  return (
    <div className="w-full">
      <table className="table-auto border-collapse bg-white w-full border border-gray-300">
        {/* head */}
        <thead>
          <tr className="bg-blue-900 text-white">
            <th className="px-4 py-2 border-b justify-start"> {/* Adding padding and border for head */}
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td className="px-4 py-2 border-b"><b>Name</b></td>
            <td className="px-4 py-2 border-b"><b>Condition</b></td>
            <td className="px-4 py-2 border-b"><b>Health score</b></td>
            <td className="px-4 py-2 border-b"><b>Details</b></td>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr className="hover:bg-gray-50">
            <th className="px-4 py-2 border-b">
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td className="px-4 py-2 border-b">
              <div>
                <div className="font-bold">Hart Hagerty</div>
              </div>
            </td>
            <td className="px-4 py-2 border-b">
              <span className="badge badge-ghost badge-sm">Critical</span>
            </td>
            <td className="px-4 py-2 border-b">10</td>
            <td className="px-4 py-2 border-b">
              <button className="btn btn-ghost btn-xs"><u><Link href="/patdash/details">More details</Link></u></button>
            </td>
          </tr>

          {/* row 2 */}
          <tr className="hover:bg-gray-50">
            <th className="px-4 py-2 border-b">
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td className="px-4 py-2 border-b">
              <div>
                <div className="font-bold">Brice Swyre</div>
              </div>
            </td>
            <td className="px-4 py-2 border-b">
              <span className="badge badge-ghost badge-sm">Healthy</span>
            </td>
            <td className="px-4 py-2 border-b">80</td>
            <td className="px-4 py-2 border-b">
            <button className="btn btn-ghost btn-xs"><u><a href="docpatpage/">More details</a></u></button>
            </td>
          </tr>

          {/* row 3 */}
          <tr className="hover:bg-gray-50">
            <th className="px-4 py-2 border-b">
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td className="px-4 py-2 border-b">
              <div>
                <div className="font-bold">Marjy Ferencz</div>
              </div>
            </td>
            <td className="px-4 py-2 border-b">
              <span className="badge badge-ghost badge-sm">unhealthy</span>
            </td>
            <td className="px-4 py-2 border-b">30</td>
            <td className="px-4 py-2 border-b">
            <button className="btn btn-ghost btn-xs"><u><a href="docpatpage/">More details</a></u></button>
            </td>
          </tr>

          {/* row 4 */}
          <tr className="hover:bg-gray-50">
            <th className="px-4 py-2 border-b">
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td className="px-4 py-2 border-b">
              <div>
                <div className="font-bold">Yancy Tear</div>
              </div>
            </td>
            <td className="px-4 py-2 border-b">
              <span className="badge badge-ghost badge-sm">Critical</span>
            </td>
            <td className="px-4 py-2 border-b">2</td>
            <td className="px-4 py-2 border-b">
            <button className="btn btn-ghost btn-xs"><u><a href="docpatpage/">More details</a></u></button>
            </td>
          </tr>
          <tr className="hover:bg-gray-50">
            <th className="px-4 py-2 border-b">
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td className="px-4 py-2 border-b">
              <div>
                <div className="font-bold">William M </div>
              </div>
            </td>
            <td className="px-4 py-2 border-b">
              <span className="badge badge-ghost badge-sm">Healthy</span>
            </td>
            <td className="px-4 py-2 border-b">70</td>
            <td className="px-4 py-2 border-b">
            <button className="btn btn-ghost btn-xs"><u><a href="docpatpage/">More details</a></u></button>
            </td>
          </tr>
        </tbody>

        {/* foot */}
        <tfoot>
          
        </tfoot>
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
        <MenuItem setActive={setActive} active={active} item="Profile">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/docdash/profile">View Profile </HoveredLink>
            <HoveredLink href="/interface-design">Logout</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default NavbarDemo;