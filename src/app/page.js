import Navbar from "./components/navbar/Navbar.jsx";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import QuoteForm from "./components/QuoteForm";
import HowItWorks from "./components/HowItWorks"; // New
import Testimonials from "./components/Testimonials"; // New
import Faq from "./components/Faq"; // New

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      
      {/* 1. Navbar & Hero (Blue Gradient Background) */}
      <div className="bg-gradient-to-b from-blue-50 via-white to-white">
        <Navbar />
        <Hero />
      </div>
      
      {/* 2. Features (Overlapping Effect) */}
      <div className="-mt-10 relative z-20 mb-10">
        <Features />
      </div>

      {/* 3. Process Section (New) */}
      <HowItWorks />

      {/* 4. Pricing Section */}
      <div className="bg-blue-50/50 py-10 rounded-[50px] my-10">
         <Pricing />
      </div>

      {/* 5. Testimonials (New) */}
      <Testimonials />

      {/* 6. FAQ Section (New) */}
      <Faq />

      {/* 7. Quote Form (Booking) - Isko end mein rakha hai taki doubts clear hone ke baad banda book kare */}
      <div className="pb-20 pt-10" id="book-now">
         <QuoteForm />
      </div>
      
      {/* Footer Layout.js mein already hai, to yahan zarurat nahi */}
    </main>
  );
}