import Navbar from "../../components/navbar/Navbar";
import { services } from "../../lib/serviceData";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Check, Sparkles, RefreshCcw } from "lucide-react";

export default async function ServiceDetail({ params }) {
  const { id } = await params;
  const service = services.find((s) => s.id === id);

  if (!service) return notFound();

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Back Button */}
        <Link href="/services" className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 mb-6 transition">
          <ArrowLeft size={20} /> Back to Services
        </Link>

        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-10 mb-16 items-center">
          <div className="rounded-[40px] overflow-hidden shadow-lg h-[400px]">
            <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{service.title}</h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-6">{service.fullDesc}</p>
            <div className="bg-blue-50 border border-blue-100 p-6 rounded-2xl inline-block">
              <span className="block text-gray-500 text-sm mb-1">Starting Price</span>
              <span className="text-3xl font-bold text-blue-600">{service.price}</span>
            </div>
          </div>
        </div>

        {/* Detailed Checklists (Dynamic Section) */}
        {service.checklists && service.checklists.length > 0 && (
          <div className="space-y-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              What We Clean (Detailed Breakdown)
            </h2>

            {service.checklists.map((room, index) => (
              <div key={index} className="bg-white p-8 rounded-[30px] shadow-sm border border-gray-100">
                
                {/* Room Header */}
                <div className="flex items-center gap-4 mb-8 border-b pb-4">
                  <div className="p-3 bg-blue-100 rounded-xl">{room.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-800">{room.area}</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                  
                  {/* Every Time Section */}
                  <div>
                    <div className="flex items-center gap-2 mb-4 text-blue-600 font-bold uppercase tracking-wide text-sm">
                      <Check size={18} /> Every Time Services
                    </div>
                    <ul className="space-y-3">
                      {room.everyTime.map((task, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 shrink-0"></span>
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Rotating Section */}
                  <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
                    <div className="flex items-center gap-2 mb-4 text-purple-600 font-bold uppercase tracking-wide text-sm">
                      <RefreshCcw size={18} /> On Rotating Basis
                    </div>
                    <ul className="space-y-3">
                      {room.rotating.map((task, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                          <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5 shrink-0"></span>
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}