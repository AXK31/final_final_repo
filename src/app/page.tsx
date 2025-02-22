"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import "@/app/globals.css"; 
import { Button } from "@/components/ui/button";

import { UserIcon, DocumentTextIcon, ClipboardDocumentListIcon, HeartIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { SparklesCore } from "@/components/ui/sparkles";
import { Carousel , Card} from "@/components/ui/apple-cards-carousel";
import Image from "next/image";

// Footer Component
const Footer = () => {
  return (
    <footer className="footer bg-base-200 text-base-content p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo and Info */}
        <aside className="flex flex-col items-center sm:items-start">
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current mb-4"
          >
            <path
              d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"
            ></path>
          </svg>
          <p className="text-center sm:text-left">
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>

        {/* Services Section */}
        <nav className="flex flex-col">
          <h1 className="footer-title font-bold mb-4">Services</h1>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>

        {/* Company Section */}
        <nav className="flex flex-col">
          <h6 className="footer-title font-bold mb-4">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>

        {/* Legal Section */}
        <nav className="flex flex-col">
          <h6 className="footer-title font-bold mb-4">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
    </footer>
  );
};


const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center relative">
      <h1 className="text-xl font-bold text-blue-400">MedAI</h1>
      <div className="flex space-x-6 items-center">
        <Link href="/"><span className="hover:text-blue-400 cursor-pointer">Home</span></Link>
        <div 
          className="relative cursor-pointer hover:text-blue-400"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <span className="flex items-center">
            Features <ChevronDownIcon className="w-4 h-4 ml-1" />
          </span>
          {isDropdownOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-gray-900 border border-gray-700 shadow-lg rounded-md">
              <Link href="/health-score">
                <div className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Health Score Analysis</div>
              </Link>
              <Link href="/patients">
                <div className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Patient Records</div>
              </Link>
              <Link href="/dashboard">
                <div className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Doctor Dashboard</div>
              </Link>
              <Link href="/monitoring">
                <div className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Real-time Monitoring</div>
              </Link>
            </div>
          )}
        </div>
        <Link href="/about"><span className="hover:text-blue-400 cursor-pointer">About</span></Link>
        <Link href="/login">
          <Button variant="outline" className="text-black border-blue-400 bg-white hover:bg-blue-100 hover:text-blue-600">
            Login
          </Button>
        </Link>
        <Link href="/register">
          <Button variant="outline" className="text-black border-blue-400 bg-white hover:bg-blue-100 hover:text-blue-600">
            Register
          </Button>
        </Link>
      </div>
    </nav>
  );
};

const SparklesPreview = () => {
  return (
    <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
        MedAi
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
 
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
};


const FeaturesCarousel = () => {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-white font-sans text-center">
        Explore Our AI-Driven Features
      </h2>
      <Carousel items={cards} />
    </div>
  );
};

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => (
        <div key={"dummy-content" + index} className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">AI-powered patient insights</span>
            Track and monitor patient records effortlessly.
          </p>
          <Image
            src="https://assets.aceternity.com/macbook.png"
            alt="Macbook mockup from Aceternity UI"
            height="500"
            width="500"
            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
          />
        </div>
      ))}
    </>
  );
};

const data = [
  { category: "Artificial Intelligence", title: "AI-powered Health Analysis", src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop", content: <DummyContent /> },
  { category: "Productivity", title: "Efficient Patient Monitoring", src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop", content: <DummyContent /> },
  { category: "Security", title: "Secure Patient Records", src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop", content: <DummyContent /> },
  { category: "Doctor Dashboard", title: "Monitor and Track Patients", src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop", content: <DummyContent /> },
  { category: "Real-time Monitoring", title: "Instant Health Updates", src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop", content: <DummyContent /> },
];

const WelcomePage = () => {
  const nextSectionRef = useRef<HTMLDivElement>(null);

  const scrollToNextSection = () => {
    nextSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <SparklesPreview />
      <header className="text-center py-12 bg-gray-900">
        <h2 className="text-3xl font-semibold text-blue-400">Welcome to MedAI</h2>
        <p className="text-gray-400 mt-2">AI-driven medical insights for faster, smarter healthcare.</p>
        <div className="mt-6">
          <button 
            onClick={scrollToNextSection}
            className="bg-blue-500 text-black px-6 py-2 hover:bg-blue-400 rounded-lg"
          >
            Get Started
          </button>
        </div>
      </header>

      {/* Choose Role Section */}
      <section ref={nextSectionRef} className="text-center py-12 bg-black">
        <h3 className="text-xl font-semibold text-blue-400">Select Your Role</h3>
        <div className="flex justify-center space-x-6 mt-4">
          <Link href="/doctor/doclogin">
            <Button variant="outline" className="text-black border-blue-400 bg-white hover:bg-blue-100 hover:text-blue-600">
              Doctor
            </Button>
          </Link>
          <Link href="/patient/patlogin">
            <Button variant="outline" className="text-black border-blue-400 bg-white hover:bg-blue-100 hover:text-blue-600">
              Patient
            </Button>
          </Link>
          <Link href="/pharm/pharmlogin">
            <Button variant="outline" className="text-black border-blue-400 bg-white hover:bg-blue-100 hover:text-blue-600">
              Pharmacy
            </Button>
          </Link>
          <Link href="/lab/lablogin">
            <Button variant="outline" className="text-black border-blue-400 bg-white hover:bg-blue-100 hover:text-blue-600">
              Lab assistant
            </Button>
          </Link>
        </div>
      </section>

      <FeaturesCarousel />

      {/* Add Footer here */}
      <Footer />
    </div>
  );
};

export default WelcomePage;
