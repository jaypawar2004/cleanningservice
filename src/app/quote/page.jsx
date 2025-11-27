// app/quote/page.js
import Navbar from "../components/navbar/Navbar";
import QuoteForm from "../components/QuoteForm"; // Import the form

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />
      
      {/* Header Background */}
      <div className="bg-blue-600 h-64 rounded-b-[50px] absolute top-0 left-0 w-full z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
         {/* The form itself */}
        <QuoteForm />
      </div>
      
    </div>
  );
}