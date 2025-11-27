import { CalendarCheck, Sparkles, Star } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Simple Process</span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">How It Works</h2>
        <p className="text-gray-500 mt-4">Get a spotless home in just 3 simple steps.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 relative">
        {/* Step 1 */}
        <div className="text-center bg-white p-8 rounded-[30px] border border-gray-100 shadow-sm relative z-10">
          <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
            <CalendarCheck size={32} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">1. Book Online</h3>
          <p className="text-gray-500 text-sm">Select your service, choose a date & time, and get a quote in seconds.</p>
        </div>

        {/* Step 2 */}
        <div className="text-center bg-white p-8 rounded-[30px] border border-blue-100 shadow-lg relative z-10 transform md:-translate-y-4">
          <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-blue-200 shadow-xl">
            <Sparkles size={32} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">2. We Clean</h3>
          <p className="text-gray-500 text-sm">Our expert team arrives fully equipped and makes your home shine.</p>
        </div>

        {/* Step 3 */}
        <div className="text-center bg-white p-8 rounded-[30px] border border-gray-100 shadow-sm relative z-10">
          <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
            <Star size={32} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">3. You Relax</h3>
          <p className="text-gray-500 text-sm">Come home to a spotless space and enjoy your free time.</p>
        </div>

        {/* Desktop Connector Line */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-100 to-transparent -z-0"></div>
      </div>
    </section>
  );
}