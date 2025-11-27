import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah Jenkins",
    role: "Homeowner",
    text: "The best cleaning service I have ever used! They didn't miss a single spot. Highly recommended!",
  },
  {
    name: "Mike Ross",
    role: "Office Manager",
    text: "Super professional team. They clean our office every week and the difference is night and day.",
  },
  {
    name: "Emily Blunt",
    role: "Busy Mom",
    text: "TopSparkly gave me my weekends back. I love coming home to a clean house on Fridays!",
  }
];

export default function Testimonials() {
  return (
    <section className="bg-white py-20 my-10 rounded-[50px] mx-4 md:mx-10 shadow-sm border border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">Loved by Locals</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-[#F8FAFC] p-8 rounded-[30px] hover:bg-blue-50 transition-colors duration-300">
              <div className="flex gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={18} />)}
              </div>
              <p className="text-gray-600 italic mb-6 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center font-bold text-blue-600">
                  {review.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{review.name}</h4>
                  <span className="text-gray-400 text-xs">{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}