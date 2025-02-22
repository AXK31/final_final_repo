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
            
          </svg>
          <p className="text-center sm:text-left">
          <h1 className="footer-title font-bold mb-4">MedicAI</h1>
            Medically Enhanced Diagnostics & Intelligent Care Assisted by AI
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
      </div>
    </nav>
  );
};

const SparklesPreview = () => {
  return (
    <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
        MedicAI
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
      {[...new Array(1).fill(1)].map((_, index) => (
        <div key={"dummy-content" + index} className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200"></span>
            An advanced health analysis system leveraging Large Language Models (LLMs) to process medical data, analyze symptoms, and generate intelligent insights. It provides multilingual summaries, enabling seamless communication across different languages and assisting healthcare professionals and patients with accurate diagnostics and personalized treatment recommendations. 
          </p>
        </div>
      ))}
    </>
  );
};

const DummyContent1 = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => (
        <div key={"dummy-content" + index} className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200"></span>
            Efficient Patient Monitoring with Health Score & Lab Report Analysis  
A smart healthcare solution that evaluates lab reports and generates a health score to track patient well-being. By integrating medical data, trends, and risk assessments, it enables proactive healthcare management, early anomaly detection, and personalized treatment insights for improved patient outcomes. 
          </p>
        </div>
      ))}
    </>
  );
};

const DummyContent2 = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => (
        <div key={"dummy-content" + index} className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200"></span>
            Secure Patient Records with Advanced Data Protection  
Patient records are safeguarded through segregation of private and medical data, ensuring confidentiality and compliance. Data ownership is shared between the patient and doctor, allowing controlled access. Security is further enhanced with encryption and a timed access window, where the patient defines the duration of data availability for added privacy and control. 
          </p>
        </div>
      ))}
    </>
  );
};

const DummyContent3 = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => (
        <div key={"dummy-content" + index} className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200"></span>
            Real-Time Patient Monitoring with Secure Data Access  
Patient health is continuously tracked using real-time monitoring, ensuring timely interventions. Data access is secured through segregation of private and medical information, with shared ownership between the patient and doctor. Enhanced security measures include encryption and a timed access window, allowing the patient to define how long data remains available for viewing.
          </p>
        </div>
      ))}
    </>
  );
};



const data = [
  { category: "Artificial Intelligence", title: "AI-powered Health Analysis", src: "https://media.istockphoto.com/id/1468430468/photo/medical-technology-doctor-use-ai-robots-for-diagnosis-care-and-increasing-accuracy-patient.jpg?s=1024x1024&w=is&k=20&c=mpNkEpJuIAc019d0Sh8ZfaVT5vOV1wNUP7H-OqhNDeg=", content:<DummyContent /> },
  { category: "Productivity", title: "Efficient Patient Monitoring", src: "https://media.istockphoto.com/id/931906832/photo/physician-consulting-senior-patients.webp?s=2048x2048&w=is&k=20&c=mhTkxD5jm1QnwLWAPX1dwLrsrgs2UZw923NWBmLfOFQ=", content: <DummyContent1 /> },
  { category: "Security", title: "Secure Patient Records", src: "https://media.istockphoto.com/id/1901480712/photo/woman-using-mobile-phone-and-laptop-computer-at-home-cyber-security-concept.jpg?s=1024x1024&w=is&k=20&c=fi3koHydZkYv8DAzuBCNifQFNgArnk2SP30q3aWbAgQ=", content: <DummyContent2 /> },

  { category: "Real-time Monitoring", title: "Instant Health Updates", src: "https://media.istockphoto.com/id/1446891396/photo/hand-holding-magnifier-glass-with-red-triangle-caution-warning-sign-for-notification-error.jpg?s=1024x1024&w=is&k=20&c=Uin10k6rFMdKt9APlhSGuAloC7_GEgfiruMUCcsYUVs=", content: <DummyContent3 /> },
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
        <h2 className="text-3xl font-semibold text-blue-400">Welcome to MedicAI</h2>
        <p className="text-gray-400 mt-2">Medically Enhanced Diagnostics & Intelligent Care Assisted by AI</p>
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
