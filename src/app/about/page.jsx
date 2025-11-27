import Navbar from "../components/navbar/Navbar";

export default function About() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full bg-blue-100 rounded-[40px] -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop" 
              alt="Team Meeting" 
              className="w-full rounded-[40px] shadow-lg object-cover h-[500px]"
            />
          </div>

          {/* Text Side */}
          <div>
            <span className="text-blue-600 font-bold tracking-wide uppercase text-sm">Who We Are</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">
              Making Your World <span className="text-blue-600">Spotless</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              Founded in 2023, Clino started with a simple mission: to provide reliable, high-quality cleaning services that give people their time back. 
            </p>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              We define ourselves not by the dirt we remove, but by the happiness we create. Our team is background-checked, trained, and insured.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h4 className="text-3xl font-bold text-blue-600">500+</h4>
                <p className="text-gray-500 text-sm">Clean Homes</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h4 className="text-3xl font-bold text-blue-600">50+</h4>
                <p className="text-gray-500 text-sm">Team Members</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}