import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic Plan",
    price: "30",
    features: ["Cleaning bathrooms", "Mapping floors", "Vacuuming carpets", "Dusting surfaces"],
    active: false,
  },
  {
    name: "Standard Plan",
    price: "70",
    features: ["All services from basic", "Washing baseboards", "Cleaning inside cabinets", "Cleaning inside drawers"],
    active: true, // Ye blue wala card hoga
  },
  {
    name: "Premium Plan",
    price: "120",
    features: ["All services from standard", "Cleaning inside closets", "Emptying trash bins", "High-touch surfaces"],
    active: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-800">Choose Your Perfect Clean</h2>
        <p className="text-gray-500 mt-2">Explore our range of meticulously curated cleaning packages.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`p-8 rounded-[40px] transition-all duration-300 ${
              plan.active
                ? "bg-blue-500 text-white shadow-2xl shadow-blue-200 scale-105"
                : "bg-white text-gray-800 shadow-lg hover:shadow-xl"
            }`}
          >
            <h3 className={`text-lg font-semibold ${plan.active ? "text-blue-100" : "text-gray-500"}`}>
              {plan.name}
            </h3>
            <div className="flex items-baseline gap-1 my-4">
              <span className="text-4xl font-bold">${plan.price}</span>
              <span className={`text-sm ${plan.active ? "text-blue-100" : "text-gray-400"}`}>/monthly</span>
            </div>

            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <div className={`p-1 rounded-full ${plan.active ? "bg-blue-400" : "bg-blue-100 text-blue-600"}`}>
                    <Check size={14} />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-3 rounded-2xl font-semibold transition ${
                plan.active
                  ? "bg-white text-blue-600 hover:bg-gray-100"
                  : "bg-blue-50 text-blue-600 hover:bg-blue-100"
              }`}
            >
              Buy Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}