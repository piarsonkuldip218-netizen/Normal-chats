// Centralized clinic data — update from one place
export const clinic = {
  name: "TAMS Dental",
  fullName: "TAMS DENTAL CLINIC",
  tagline: "Healthy Smiles, Happy Lives",
  doctor: {
    name: "Dr. Tabarak Hussain",
    qualification: "B.D.S",
    title: "Founder & Chief Dental Surgeon",
    bio: "Dr. Tabarak Hussain is a passionate dental surgeon with years of clinical experience, dedicated to providing painless, modern, and affordable dental care to families across Rangapara and Sonitpur.",
  },
  rating: {
    score: 4.8,
    reviews: 68,
    source: "Google",
  },
  contact: {
    phone: "+919678470718",
    phoneDisplay: "+91 96784 70718",
    whatsapp: "919678470718",
    email: "tamsdental@gmail.com",
  },
  address: {
    line1: "Ground Floor, Naman Bhawan",
    line2: "Opposite Joydev Cinema Hall",
    line3: "Rangapara, No.1 Thakurbari T.E.",
    city: "Sonitpur",
    state: "Assam",
    pincode: "784505",
    full: "Ground Floor, Naman Bhawan, Opposite Joydev Cinema Hall, Rangapara, No.1 Thakurbari T.E., Sonitpur, Assam 784505",
    mapsQuery:
      "TAMS Dental Dr T Hussain Rangapara Sonitpur Assam 784505",
  },
  hours: [
    { day: "Monday", time: "10:00 AM – 8:00 PM" },
    { day: "Tuesday", time: "10:00 AM – 8:00 PM" },
    { day: "Wednesday", time: "10:00 AM – 8:00 PM" },
    { day: "Thursday", time: "10:00 AM – 8:00 PM" },
    { day: "Friday", time: "10:00 AM – 8:00 PM" },
    { day: "Saturday", time: "10:00 AM – 8:00 PM" },
    { day: "Sunday", time: "10:00 AM – 8:00 PM" },
  ],
  social: {
    facebook: "#",
    instagram: "#",
    youtube: "#",
  },
};

export const services = [
  {
    slug: "general-checkup",
    title: "General Checkup & Cleaning",
    icon: "Stethoscope",
    image: "/services/checkup.jpg",
    description:
      "Comprehensive oral examination, scaling, polishing and preventive care to keep your smile healthy.",
  },
  {
    slug: "root-canal",
    title: "Root Canal Treatment",
    icon: "Activity",
    image: "/services/rct.jpg",
    description:
      "Painless single-sitting RCT with modern rotary endodontics to save your natural tooth.",
  },
  {
    slug: "extraction",
    title: "Tooth Extraction",
    icon: "Minus",
    image: "/services/extraction.jpg",
    description:
      "Safe, gentle extractions including wisdom tooth removal under sterile conditions.",
  },
  {
    slug: "implants",
    title: "Dental Implants",
    icon: "Anchor",
    image: "/services/implants.jpg",
    description:
      "Permanent tooth replacement with high-grade titanium implants that look and feel natural.",
  },
  {
    slug: "braces",
    title: "Braces & Orthodontics",
    icon: "AlignCenter",
    image: "/services/braces.jpg",
    description:
      "Metal, ceramic and clear aligners to straighten teeth and correct bite issues for all ages.",
  },
  {
    slug: "whitening",
    title: "Teeth Whitening",
    icon: "Sparkles",
    image: "/services/whitening.jpg",
    description:
      "Professional in-clinic and take-home whitening for a brighter, more confident smile.",
  },
  {
    slug: "crowns",
    title: "Crowns & Bridges",
    icon: "Crown",
    image: "/services/crowns.jpg",
    description:
      "Durable zirconia and PFM crowns and bridges to restore broken or missing teeth.",
  },
  {
    slug: "kids",
    title: "Kids Dentistry",
    icon: "Baby",
    image: "/services/kids.jpg",
    description:
      "Friendly, fear-free pediatric dental care including fluoride, sealants and cavity treatment.",
  },
  {
    slug: "cosmetic",
    title: "Cosmetic Dentistry",
    icon: "Smile",
    image: "/services/cosmetic.jpg",
    description:
      "Veneers, smile makeovers and aesthetic procedures designed around your face and personality.",
  },
];

export const features = [
  {
    title: "4.8★ Google Rated",
    description: "68+ verified happy patients across Sonitpur and Rangapara.",
    icon: "Star",
  },
  {
    title: "Modern Equipment",
    description: "Digital X-rays, RVG, rotary endo and fully sterilized chairs.",
    icon: "Cpu",
  },
  {
    title: "Painless Treatment",
    description: "Latest anaesthesia and techniques for an anxiety-free visit.",
    icon: "HeartPulse",
  },
  {
    title: "Affordable Pricing",
    description: "Transparent fees with EMI options on major treatments.",
    icon: "Wallet",
  },
  {
    title: "Open All 7 Days",
    description: "10 AM – 8 PM, including Sundays for your convenience.",
    icon: "Clock",
  },
  {
    title: "Family Friendly",
    description: "Special care for kids, seniors and nervous patients.",
    icon: "Users",
  },
];

// AI / advanced technology used at the clinic.
// `image` is optional — falls back to gradient + icon design when absent.
export const aiTechnology = [
  {
    slug: "ai-diagnosis",
    title: "AI-Powered Diagnostics",
    icon: "Brain",
    image: "/tech/scanner.jpg",
    description:
      "Smart imaging that highlights cavities, gum issues and bone loss in seconds — never miss what the human eye might.",
    badge: "AI",
  },
  {
    slug: "digital-3d",
    title: "Digital 3D Smile Scan",
    icon: "ScanLine",
    image: "/tech/3d.jpg",
    description:
      "Goodbye messy moulds. Our intra-oral 3D scanner captures your smile in vivid detail in under 5 minutes.",
    badge: "3D",
  },
  {
    slug: "rvg-xray",
    title: "Low-Radiation Digital X-Rays",
    icon: "Radio",
    image: "/tech/xray.jpg",
    description:
      "Up to 90% less radiation than traditional X-rays, with instant results on screen for accurate planning.",
    badge: "RVG",
  },
  {
    slug: "laser",
    title: "Laser-Assisted Treatments",
    icon: "Zap",
    image: "/tech/laser.jpg",
    description:
      "Precision laser technology for gum contouring, cavity treatment and minor surgeries — minimal pain, faster healing.",
    badge: "Laser",
  },
  {
    slug: "smart-planning",
    title: "Computer-Guided Planning",
    icon: "Cpu",
    description:
      "Implants and braces planned virtually on a 3D model first — exact placement, predictable results, no surprises.",
    badge: "CAD",
  },
  {
    slug: "smile-design",
    title: "AI Smile Design Preview",
    icon: "Sparkles",
    description:
      "See your future smile before treatment begins. Our software simulates results so you can decide with confidence.",
    badge: "Preview",
  },
];

// Photo gallery — placeholders ready for clinic, equipment & treatment photos.
// Add as many entries as needed and drop matching files into /public/gallery/.
export const galleryPhotos = [
  {
    src: "/gallery/clinic-1.jpg",
    caption: "Treatment room with modern equipment",
    category: "Clinic",
  },
  {
    src: "/gallery/clinic-2.jpg",
    caption: "Sterilized dental chair",
    category: "Clinic",
  },
  {
    src: "/gallery/clinic-3.jpg",
    caption: "Diagnostic equipment in use",
    category: "Equipment",
  },
  {
    src: "/gallery/clinic-4.jpg",
    caption: "Comfortable waiting area",
    category: "Clinic",
  },
  {
    src: "/gallery/clinic-5.jpg",
    caption: "Orthodontic treatment in progress",
    category: "Treatments",
  },
  {
    src: "/gallery/clinic-6.jpg",
    caption: "Modern reception area",
    category: "Clinic",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Technology", href: "#technology" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];
