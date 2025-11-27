"use client";

import { useState } from "react";
import { User, Mail, Phone, MapPin, Calendar as CalendarIcon, Home, Building2 } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils"; // Shadcn utility function
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function QuoteForm() {
  // --- Form State ---
  const [date, setDate] = useState(); // Calendar date state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    postalCode: "",
    propertyType: "house", // Default 'house'
    floors: "",
    bedrooms: "",
    bathrooms: "",
    steamCleaning: "no", // Default 'no'
  });

  // Handle Text/Number Inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Radio Buttons (Property Type & Steam Cleaning)
  const handleRadioChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation: Check if date is selected
    if (!date) {
      alert("Please select a deadline date.");
      return;
    }
    
    const finalData = { ...formData, deadline: format(date, "yyyy-MM-dd") };
    console.log("Form Submitted:", finalData);
    alert("Quote Request Sent! (Check console for data)");
    // Yahan tum API call karoge data bhejne ke liye
  };


  // --- Reusable Input Field Component (Internal) ---
  const InputField = ({ label, name, type = "text", icon, placeholder, required = false, min }) => (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-gray-700 flex items-center gap-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600">
          {icon}
        </div>
        <input
          type={type}
          name={name}
          required={required}
          placeholder={placeholder}
          value={formData[name]}
          onChange={handleChange}
          min={min}
          className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-gray-700 placeholder-gray-400"
        />
      </div>
    </div>
  );


  return (
    <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-blue-50 max-w-3xl mx-auto">
      <div className="text-center mb-10">
        <span className="bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase">
          Get a Free Price
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
          Request a <span className="text-blue-600">Quote</span>
        </h2>
        <p className="text-gray-500 mt-2">Tell us about your space, and we'll give you the best price.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        
        {/* Section 1: Personal Details */}
        <div className="grid md:grid-cols-2 gap-6">
          <InputField label="Full Name" name="name" icon={<User size={20}/>} placeholder="John Doe" required />
          <InputField label="Email Address" name="email" type="email" icon={<Mail size={20}/>} placeholder="john@example.com" required />
          <InputField label="Phone Number" name="phone" type="tel" icon={<Phone size={20}/>} placeholder="+91 98765 43210" required />
          <InputField label="Postal Code" name="postalCode" icon={<MapPin size={20}/>} placeholder="110001" required />
        </div>

        <hr className="border-gray-100" />

        {/* Section 2: Property Details */}
        <div>
           <label className="text-sm font-semibold text-gray-700 mb-3 block">
             House or Flat? <span className="text-red-500">*</span>
           </label>
           {/* Custom Radio Buttons designed as cards */}
           <div className="grid grid-cols-2 gap-4">
             {['house', 'flat'].map((type) => (
               <div
                 key={type}
                 onClick={() => handleRadioChange('propertyType', type)}
                 className={`cursor-pointer p-4 rounded-2xl border-2 flex items-center gap-3 transition-all ${
                   formData.propertyType === type
                     ? "border-blue-600 bg-blue-50 text-blue-800"
                     : "border-gray-100 bg-gray-50 text-gray-500 hover:border-blue-300"
                 }`}
               >
                 {type === 'house' ? <Home size={24} className={formData.propertyType === 'house' ? "text-blue-600" : "text-gray-400"} /> : <Building2 size={24} className={formData.propertyType === 'flat' ? "text-blue-600" : "text-gray-400"} />}
                 <span className="font-bold capitalize">{type}</span>
               </div>
             ))}
           </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <InputField label="Floor(s)" name="floors" type="number" icon={<Building2 size={20}/>} placeholder="e.g., 2" required min="0" />
          <InputField label="Bedroom(s)" name="bedrooms" type="number" icon={<Home size={20}/>} placeholder="e.g., 3" required min="0" />
          <InputField label="Bathroom(s)" name="bathrooms" type="number" icon={<SparklesIcon size={20}/>} placeholder="e.g., 2" required min="0" />
        </div>

        {/* Section 3: Extras & Deadline */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
           {/* Steam Cleaning Radio */}
           <div>
            <label className="text-sm font-semibold text-gray-700 mb-3 block">
              Need steam cleaning for carpets?
            </label>
            <div className="flex gap-4">
              {['yes', 'no'].map((option) => (
                <label key={option} className="flex-1">
                  <input
                    type="radio"
                    name="steamCleaning"
                    value={option}
                    checked={formData.steamCleaning === option}
                    onChange={(e) => handleRadioChange('steamCleaning', e.target.value)}
                    className="sr-only peer" // Hide default radio
                  />
                  <div className="text-center py-3 rounded-2xl border-2 border-gray-100 bg-gray-50 text-gray-500 font-semibold cursor-pointer transition-all peer-checked:border-blue-600 peer-checked:bg-blue-600 peer-checked:text-white peer-hover:border-blue-300 capitalize">
                    {option}
                  </div>
                </label>
              ))}
            </div>
          </div>

           {/* THE PREMIUM CALENDAR UI (Shadcn) */}
           <div className="flex flex-col space-y-2">
            <label className="text-sm font-semibold text-gray-700">
              Deadline for the Job <span className="text-red-500">*</span>
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full pl-4 pr-4 py-3.5 h-auto bg-gray-50 border-gray-100 rounded-2xl outline-none hover:bg-gray-100 hover:text-blue-600 text-left font-normal justify-start text-base",
                    !date && "text-gray-400"
                  )}
                >
                  <CalendarIcon className="mr-4 h-5 w-5 text-blue-600" />
                  {date ? <span className="text-gray-700 font-medium">{format(date, "PPP")}</span> : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-white rounded-2xl shadow-xl border-gray-100" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  className="p-3 rounded-2xl"
                  classNames={{
                    day_selected: "bg-blue-600 text-white hover:bg-blue-700 focus:bg-blue-700",
                    day_today: "bg-gray-100 text-gray-900",
                  }}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-blue-200 hover:bg-blue-700 hover:scale-[1.01] transition-all active:scale-95"
        >
          Submit Quote Request
        </button>

      </form>
    </div>
  );
}

// A small internal component just for an extra icon
const SparklesIcon = ({size, className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M9 3v4"/><path d="M3 5h4"/><path d="M3 9h4"/></svg>
)