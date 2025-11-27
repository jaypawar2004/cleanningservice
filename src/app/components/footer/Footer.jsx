import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white mt-20 rounded-t-[50px]">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        
        {/* Top Section: Grid Layout */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
                     <img className="w-[110px] rounded-lg flex items-center justify-center text-white font-bold" src="/photos/CleanningLogo.png" alt="Clino Logo"></img>

            </div>
            <p className="text-blue-100 text-sm leading-relaxed">
              Experience the epitome of cleanliness. We provide top-notch cleaning services tailored to your needs.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Instagram size={18} />} />
              <SocialIcon icon={<Linkedin size={18} />} />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-blue-100 text-sm">
              <li><Link href="/" className="hover:text-white hover:pl-2 transition-all">Home</Link></li>
              <li><Link href="/about" className="hover:text-white hover:pl-2 transition-all">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white hover:pl-2 transition-all">Services</Link></li>
              <li><Link href="/blog" className="hover:text-white hover:pl-2 transition-all">Our Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white hover:pl-2 transition-all">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3 text-blue-100 text-sm">
              <li className="hover:text-white cursor-pointer transition">House Cleaning</li>
              <li className="hover:text-white cursor-pointer transition">Office Cleaning</li>
              <li className="hover:text-white cursor-pointer transition">Kitchen Deep Clean</li>
              <li className="hover:text-white cursor-pointer transition">Window Cleaning</li>
              <li className="hover:text-white cursor-pointer transition">Plumbing Service</li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6">Get Updates</h3>
            <p className="text-blue-100 text-sm mb-4">Subscribe to our newsletter for latest tips.</p>
            
            <div className="bg-blue-700/50 p-1.5 rounded-full flex items-center mb-8 border border-blue-500">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-transparent flex-1 px-4 text-sm text-white placeholder-blue-300 outline-none"
              />
              <button className="bg-white text-blue-600 w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-50 transition">
                <Send size={18} />
              </button>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-blue-100">
                <Phone size={16} /> <span>+91 987 654 3210</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-blue-100">
                <Mail size={16} /> <span>contact@clino.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="border-t border-blue-500/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-200">
          <p>© 2025 ByteWings - Technology  All rights reserved.</p>
          <div className="flex gap-6">
            <span className="cursor-pointer hover:text-white">Privacy Policy</span>
            <span className="cursor-pointer hover:text-white">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Small helper component for icons
function SocialIcon({ icon }) {
  return (
    <div className="w-9 h-9 border border-blue-400 rounded-full flex items-center justify-center text-blue-100 hover:bg-white hover:text-blue-600 hover:border-white transition-all cursor-pointer">
      {icon}
    </div>
  );
}