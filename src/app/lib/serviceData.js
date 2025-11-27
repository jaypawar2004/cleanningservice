import { Home, Briefcase, Truck, Bath, Utensils, BedDouble, Armchair } from "lucide-react";

export const services = [
  {
    id: "residential-cleaning",
    title: "Residential Cleaning",
    shortDesc: "Complete home cleaning with rotating deep clean features.",
    fullDesc: "Our residential cleaning service is designed to keep your home sparkling clean consistently. We follow a detailed checklist for every room, ensuring no corner is left untouched. We also include rotating deep-cleaning tasks to maintain hygiene standards.",
    price: "$150 / visit",
    icon: <Home size={40} />,
    image: "https://images.unsplash.com/photo-1581578731117-10ddf6bc5d02?auto=format&fit=crop&q=80&w=1000",
    
    // Yahan wo sara data hai jo tumne diya
    checklists: [
      {
        area: "Bathrooms",
        icon: <Bath className="w-6 h-6 text-blue-600" />,
        everyTime: [
          "Tile walls, bathtubs and showers cleaned",
          "Shower doors cleaned",
          "Vanity and sink cleaned",
          "Mirrors and chrome fixtures cleaned & shined",
          "Floors cleaned / carpets vacuumed",
          "Toilets thoroughly cleaned",
          "Window sills, ledges, and blinds dusted",
          "Cobwebs removed",
          "Doors and door frames spot cleaned",
          "General dusting"
        ],
        rotating: [
          "Tile grouting scrubbed",
          "Shower door given extra attention",
          "Doors and door frames hand wiped",
          "Knickknacks individually cleaned",
          "Fronts of cabinets hand wiped",
          "Baseboards and window sills hand wiped",
          "Floors given extra attention",
          "Faucets, sinks, and drains cleaned with toothbrush"
        ]
      },
      {
        area: "Kitchens",
        icon: <Utensils className="w-6 h-6 text-blue-600" />,
        everyTime: [
          "Countertops cleaned",
          "Outside of range hood cleaned",
          "Top and front of range cleaned",
          "Drip pans or glass-top surfaces wiped",
          "Sinks cleaned and chrome shined",
          "Fronts of all appliances cleaned",
          "Floors vacuumed and damp mopped",
          "Window sills, ledges, and blinds dusted",
          "Cobwebs removed",
          "Microwave wiped out",
          "Doors and door frames spot cleaned",
          "General dusting"
        ],
        rotating: [
          "Inside of range hood cleaned",
          "Drip pans or glass-top surfaces cleaned",
          "Doors and door frames hand wiped",
          "Appliances cleaned and shined",
          "Knickknack areas cleaned",
          "Fronts of cabinets hand wiped",
          "Baseboards and window sills hand wiped",
          "Floors given extra attention",
          "All kitchen furniture hand wiped"
        ]
      },
      {
        area: "Sleeping Areas",
        icon: <BedDouble className="w-6 h-6 text-blue-600" />,
        everyTime: [
          "Flat areas hand wiped",
          "Doors and door frames spot cleaned",
          "Cobwebs removed",
          "Picture frames dusted",
          "Ceiling fans & Lamp shades dusted",
          "Intricate items & Knickknacks dusted",
          "Window sills, ledges, and blinds dusted",
          "Hardwood floors: vacuumed and damp mopped",
          "Stairs & Empty closet floors vacuumed",
          "All readily accessible floors vacuumed"
        ],
        rotating: [
          "Doors and door frames hand wiped",
          "Window sills and ledges hand wiped",
          "Knickknacks individually cleaned",
          "Furniture surfaces hand wiped",
          "Baseboards hand wiped",
          "Furniture and upholstery vacuumed",
          "Carpet edges vacuumed",
          "Accessible areas under furniture vacuumed"
        ]
      },
      {
        area: "Living Areas",
        icon: <Armchair className="w-6 h-6 text-blue-600" />,
        everyTime: [
          "Flat areas hand wiped",
          "Doors and door frames spot cleaned",
          "Cobwebs removed",
          "Picture frames dusted",
          "Ceiling fans & Lamp shades dusted",
          "Intricate items & Knickknacks dusted",
          "Window sills, ledges, and blinds dusted",
          "Hardwood floors: vacuumed and damp mopped",
          "Stairs & Empty closet floors vacuumed",
          "All readily accessible floors vacuumed"
        ],
        rotating: [
          "Doors and door frames hand wiped",
          "Window sills and ledges hand wiped",
          "Knickknacks individually cleaned",
          "Furniture surfaces hand wiped",
          "Baseboards hand wiped",
          "Furniture and upholstery vacuumed",
          "Carpet edges vacuumed",
          "Accessible areas under furniture vacuumed"
        ]
      }
    ]
  },
  {
    id: "office-cleaning",
    title: "Office Cleaning",
    shortDesc: "Professional cleaning for a productive workspace.",
    fullDesc: "Complete office cleaning including desks, restrooms, and pantry areas.",
    price: "$200 / month",
    icon: <Briefcase size={40} />,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000",
    checklists: [] // Agar detail nahi hai to empty rakho
  },
  {
    id: "move-in-out",
    title: "Move-In / Move-Out",
    shortDesc: "Deep cleaning for empty homes.",
    fullDesc: "Specialized cleaning for tenants and landlords to ensure property is ready.",
    price: "$300 one-time",
    icon: <Truck size={40} />,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000",
    checklists: []
  }
];