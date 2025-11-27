// app/blog/[id]/page.js
import Navbar from "../../components/navbar/Navbar";
import { blogs } from "../../lib/blogData";
import { notFound } from "next/navigation";
import { User, Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function BlogDetail({ params }) {
  // 1. URL se ID nikalo (Next.js 15 style)
  const { id } = await params;

  // 2. Data mein se wo blog dhundo jiski ID match kare
  const post = blogs.find((b) => b.id === id);

  // 3. Agar blog nahi mila to 404 page dikhao
  if (!post) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />

      <article className="max-w-4xl mx-auto px-6 py-10">
        
        {/* Back Button */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 mb-6 transition">
          <ArrowLeft size={20} /> Back to Blogs
        </Link>

        {/* Blog Image */}
        <div className="rounded-[40px] overflow-hidden shadow-lg mb-8 h-[400px]">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Category & Date */}
        <div className="flex items-center gap-4 mb-6">
          <span className="bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-sm font-semibold">
            {post.category}
          </span>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Calendar size={16} />
            {post.date}
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Author */}
        <div className="flex items-center gap-3 mb-8 border-b border-gray-200 pb-8">
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
             <User size={20} className="text-gray-500" />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-900">{post.author}</p>
            <p className="text-xs text-gray-500">Author</p>
          </div>
        </div>

        {/* Content (Prose Styling) */}
        <div className="text-gray-600 text-lg leading-loose space-y-6">
          <p>{post.content}</p>
          
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. 
            Cras venenatis euismod malesuada. Nulla facilisi. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
          </p>
          
          <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-800 bg-blue-50 p-4 rounded-r-lg">
            "Cleaning is not just about removing dirt, it's about creating a healthy environment."
          </blockquote>

          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident.
          </p>
        </div>

      </article>
    </div>
  );
}