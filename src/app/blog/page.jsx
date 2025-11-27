// app/blog/page.js
import Link from "next/link";
import Navbar from "../components/navbar/Navbar";
import { blogs } from "../lib/blogData"; // Sahi data import karo

export default function BlogList() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />
      
      <div className="bg-blue-600 text-white py-20 px-6 text-center rounded-b-[50px]">
        <h1 className="text-4xl font-bold">Our Blog</h1>
        <p className="text-blue-100 mt-2">Latest cleaning tips & news</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-8">
        {blogs.map((post) => (
          // YAHAN LINK IMPORTANT HAI
          <Link href={`/blog/${post.id}`} key={post.id} className="group">
            <div className="bg-white rounded-[30px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
              <div className="h-56 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-blue-600 text-xs font-bold uppercase tracking-wider mb-2 block">
                    {post.category}
                </span>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm line-clamp-2">
                  {post.content}
                </p>
                <div className="mt-4 text-blue-600 font-semibold text-sm">Read Article →</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}