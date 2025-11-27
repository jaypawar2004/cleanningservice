import { Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative px-6 pt-10 pb-20 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      
      {/* Left Content */}
      <div className="space-y-8 z-10">
        <span className="bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide">
          We Are Clino
        </span>
        
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
          Feel Your Way <br /> For <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Freshness</span>
        </h1>
        
        <p className="text-gray-500 text-lg max-w-md leading-relaxed">
          Experience the epitome of cleanliness with Clino. We provide top-notch cleaning services tailored to your needs.
        </p>

        <div className="flex flex-wrap items-center gap-6">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold shadow-xl shadow-blue-200 hover:bg-blue-700 transition">
            Our Services
          </button>
          
          <button className="flex items-center gap-3 text-gray-700 font-medium hover:text-blue-600 transition">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md text-orange-500">
              <Play fill="currentColor" size={20} />
            </div>
            See How It Works
          </button>
        </div>

        {/* Stats */}
        <div className="flex gap-8 pt-8">
          <div>
            <h3 className="text-3xl font-bold text-blue-600">800+</h3>
            <p className="text-gray-500 text-sm">Happy Clients</p>
          </div>
          <div className="w-px bg-gray-300 h-10"></div>
          <div>
            <h3 className="text-3xl font-bold text-blue-600">180+</h3>
            <p className="text-gray-500 text-sm">Awards Received</p>
          </div>
        </div>
      </div>

      {/* Right Image Placeholder */}
      <div className="relative">
        {/* Background Blob */}
        <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-blue-200 rounded-full blur-3xl opacity-50 -z-10"></div>
        
        {/* Main Image Container */}
        <div className="relative z-10">
            {/* Yahan wo Bucket wali image aayegi. Abhi ke liye placeholder hai */}
            <img 
              src="https://startertemplatecloud.com/g59/wp-content/uploads/sites/91/2022/06/pexels-karolina-grabowska-422321139035.jpg" 
              alt="Cleaning Bucket" 
              className="w-full max-w-lg mx-auto drop-shadow-2xl rounded-3xl object-cover"
            />
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce">
                <div className="flex -space-x-2">
                    <div className="w-8 h-8 overflow-hidden object-center rounded-full bg-gray-200 border-2 border-white">
                      <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWxzfGVufDB8fDB8fHww" alt="" />
                    </div>
                    <div className="w-8 h-8 overflow-hidden rounded-full bg-gray-300 border-2 border-white">
                      <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWxzfGVufDB8fDB8fHww" alt="" />
                    </div>
                    <div className="w-8 h-8 overflow-hidden rounded-full bg-gray-400 border-2 border-white">
                      <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    </div>
                </div>
                <div className="text-xs font-bold text-gray-700">
                    Our VIP Clients
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}