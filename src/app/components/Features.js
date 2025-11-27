import { Users, Sparkles, Wallet } from "lucide-react";

const features = [
  {
    icon: <Users size={28} className="text-blue-600" />,
    title: "Expert Team",
    desc: "Our highly trained professionals bring a wealth of experience.",
  },
  {
    icon: <Sparkles size={28} className="text-blue-600" />,
    title: "Quality Service",
    desc: "We guarantee a spotless finish that exceeds your expectations.",
  },
  {
    icon: <Wallet size={28} className="text-blue-600" />,
    title: "Affordable Price",
    desc: "We offer exceptional services at prices that are affordable for everyone.",
  },
];

export default function Features() {
  return (
    <section className="px-6 py-10 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-3 gap-6">
        {features.map((item, index) => (
          <div key={index} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition flex flex-col items-start gap-4 border border-gray-100">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-2">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}