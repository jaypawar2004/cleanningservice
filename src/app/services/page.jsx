import Link from "next/link";
import Navbar from "../components/navbar/Navbar"; // Agar layout mein hai to hata dena
import { services } from "../lib/serviceData"; // ✅ Dynamic Data Import

export default function Services() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar /> 
      
      {/* Page Header */}
      <div className="bg-blue-600 text-white py-20 px-6 text-center rounded-b-[50px]">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
        <p className="text-blue-100 max-w-2xl mx-auto">
          We provide a wide range of cleaning services tailored to your specific needs.
        </p>
      </div>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            // ✅ Card ko Link bana diya taaki click karne par detail page khule
            <Link href={`/services/${service.id}`} key={service.id} className="group">
              <div className="bg-white p-8 rounded-[30px] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 h-full flex flex-col">
                
                {/* Icon Section */}
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {/* Icon ab data file se aa raha hai */}
                  <div className="scale-125">{service.icon}</div>
                </div>
                
                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-6 flex-1">
                    {service.shortDesc} {/* ✅ Short Description use kiya */}
                </p>
                
                {/* Price & Action Button */}
                <div className="flex items-center justify-between mt-auto border-t border-gray-100 pt-6">
                   <span className="font-bold text-blue-600">{service.price}</span>
                   
                   <button className="text-gray-400 font-semibold text-sm flex items-center gap-2 group-hover:text-blue-600 group-hover:gap-3 transition-all">
                     View Details <span>→</span>
                   </button>
                </div>

              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}