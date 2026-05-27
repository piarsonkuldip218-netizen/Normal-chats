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

// Clinic photos (front-of-shop, exterior). Set `front` to the file path
// once the image is uploaded into /public/clinic/. The Visit section
// renders a polished icon placeholder while this is null.
export const clinicPhoto: { front: string | null } = {
  front: "/clinic/front.jpg",
};

// Each service has a verified, treatment-specific photo provided by the
// clinic. Photos live in /public/services/ and are referenced via the
// optional `image` field; the Services component renders the photo as a
// header above the icon + title + description block.
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

// Advanced equipment used at the clinic. Each entry shows on the
// Technology section as a card with photo + 3-4 line short description.
// Clicking a card opens a modal with the long description, benefits,
// and a CTA button. Photos in /public/tech/.
export type TechEquipment = {
  slug: string;
  title: string;
  icon: string;
  badge?: string;
  image?: string;
  description: string; // short, 3-4 lines, shown on card
  longDescription?: string; // full paragraph for modal
  benefits?: string[]; // bullet list shown in modal
};

export const aiTechnology: TechEquipment[] = [
  {
    slug: "intraoral-scanner",
    title: "Intraoral Scanner",
    icon: "ScanLine",
    badge: "3D",
    image: "/tech/intraoral-scanner.jpg",
    description:
      "Builds a high-precision 3D map of your teeth in minutes — no more uncomfortable putty impressions or messy moulds.",
    longDescription:
      "Our intraoral scanner uses a small wand with structured-light cameras to capture a digital 3D model of your full arch in under five minutes. The scan is exact to a fraction of a millimetre, so any crown, bridge, aligner or surgical guide we order from the lab fits perfectly the first time. You can preview the scan on screen with us, see exactly what your bite looks like, and even watch simulations of how your future smile will turn out.",
    benefits: [
      "No goopy impression material — totally comfortable",
      "Accurate to 0.01 mm for perfect-fit restorations",
      "Real-time on-screen visualisation, you see what we see",
      "Faster turnaround on lab work — fewer chair visits",
    ],
  },
  {
    slug: "intraoral-camera",
    title: "Intraoral Camera",
    icon: "Camera",
    badge: "HD",
    image: "/tech/intraoral-camera.jpg",
    description:
      "A pen-sized HD camera that lets you see exactly what we see — every cavity, crack and detail magnified on screen.",
    longDescription:
      "The intraoral camera is a small, sterilised wand the size of a pen that captures crystal-clear high-definition images of every tooth surface, including the hard-to-see back ones. Photos are displayed on a chairside monitor in real time and saved to your file, so we can document treatment progress and you always understand the diagnosis we're giving you.",
    benefits: [
      "Crystal-clear HD images of every tooth surface",
      "You see and understand the diagnosis with us",
      "Photos saved to your file for progress tracking",
      "Helps catch problems early before they grow",
    ],
  },
  {
    slug: "opg-xray",
    title: "OPG Full-Mouth X-Ray",
    icon: "Radio",
    badge: "Panoramic",
    image: "/tech/opg-xray.jpg",
    description:
      "A single panoramic image of all your teeth, jaw bones and sinuses — essential for implants, wisdom tooth and bite planning.",
    longDescription:
      "OPG (Orthopantomogram) is a wide rotating X-ray that captures your entire upper and lower jaw — including all teeth, the temporomandibular joints, and surrounding bone — in one panoramic image. It's the gold standard for planning implants, evaluating impacted wisdom teeth, detecting jaw pathology, and orthodontic treatment planning. The whole scan takes under a minute and uses far less radiation than older techniques.",
    benefits: [
      "Full-mouth, full-jaw view in one image",
      "Essential for implant and wisdom-tooth planning",
      "Low-radiation digital sensor, instant results",
      "Detects bone loss, cysts and infections you can't see",
    ],
  },
  {
    slug: "rvg-xray",
    title: "RVG X-Ray (Digital)",
    icon: "Zap",
    badge: "Low-dose",
    image: "/tech/rvg-xray.jpg",
    description:
      "Targeted digital X-ray for individual teeth — up to 90% less radiation than traditional film, with results on-screen instantly.",
    longDescription:
      "Radio-Visiography (RVG) is a small intraoral digital sensor that captures sharp X-ray images of one or two teeth at a time. Unlike old film X-rays, results appear on the chairside monitor in seconds and use up to 90% less radiation. We use it during root canals to confirm the canal is fully cleaned, to spot hidden cavities between teeth, and to verify the fit of crowns and fillings.",
    benefits: [
      "Up to 90% less radiation than traditional X-ray film",
      "Results on screen in seconds — no waiting",
      "Sharp digital images, easy to zoom and annotate",
      "Critical for accurate root canal and cavity diagnosis",
    ],
  },
  {
    slug: "piezo-surgery",
    title: "Piezo Surgery Unit",
    icon: "Activity",
    badge: "Latest",
    image: "/tech/piezo-surgery.jpg",
    description:
      "Ultrasonic vibration cuts bone with surgical precision while protecting soft tissue — the latest standard for intraoral surgery.",
    longDescription:
      "Piezo surgery uses high-frequency ultrasonic vibration instead of a traditional rotary drill to cut bone with extreme precision. Because it only acts on hard tissue, the surrounding gums, nerves and blood vessels stay completely safe. We use it for advanced procedures like sinus lifts before implants, complex extractions, gum surgery and bone grafting — with less bleeding, less swelling and a noticeably faster recovery for you.",
    benefits: [
      "Cuts bone with surgical precision, soft tissue stays safe",
      "Far less bleeding and post-op swelling",
      "Faster healing and recovery time",
      "Used for sinus lifts, complex extractions and bone grafts",
    ],
  },
  {
    slug: "electric-cautery",
    title: "Electric Cautery",
    icon: "Flame",
    badge: "Bloodless",
    image: "/tech/electric-cautery.jpg",
    description:
      "Performs bloodless surgery of oral lesions, gum reshaping and minor soft-tissue procedures with minimal pain.",
    longDescription:
      "Electric cautery uses controlled heat to cut and seal soft tissue at the same time. We use it to remove benign oral lesions, reshape gum lines for cosmetic procedures, and perform minor surgery — all with virtually no bleeding because vessels are sealed as the cut is made. This means a much cleaner field, faster healing, and far less discomfort than a scalpel-based procedure.",
    benefits: [
      "Bloodless surgery — vessels sealed instantly",
      "Minimal post-op swelling and discomfort",
      "Ideal for benign lesion removal and gum contouring",
      "Faster, cleaner healing of soft tissue",
    ],
  },
  {
    slug: "uv-chamber",
    title: "UV Sterilization Chamber",
    icon: "Lightbulb",
    badge: "Sterile",
    image: "/tech/uv-chamber.jpg",
    description:
      "Stores fully sterilized instruments under continuous UV light to keep them sterile and ready until the moment of use.",
    longDescription:
      "After our autoclave-sterilized instruments come out of pouches, they're stored in a UV-C sterilization chamber. The continuous ultraviolet light prevents any airborne contamination, so every instrument that enters your mouth is sterile right up to the moment it's used. This is a hospital-grade infection-control standard that goes well beyond what most clinics offer.",
    benefits: [
      "Continuous UV-C light keeps instruments sterile until use",
      "Prevents recontamination during storage",
      "Hospital-grade infection control, well beyond the norm",
      "Patient safety verified before every procedure",
    ],
  },
  {
    slug: "sterilizer",
    title: "Class B Autoclave Sterilizer",
    icon: "ShieldCheck",
    badge: "Class B",
    image: "/tech/sterilizer.jpg",
    description:
      "The highest grade of clinical sterilization — kills all viruses, bacteria and spores on every instrument before it's used on you.",
    longDescription:
      "A Class B autoclave is the gold standard for medical and dental sterilization, using high-pressure saturated steam to destroy 100% of viruses, bacteria, fungi and even bacterial spores on every instrument. Each cycle is monitored and logged. Combined with our UV chamber, this means every instrument that touches your mouth meets the same sterilization standard as a hospital operation theatre.",
    benefits: [
      "Highest grade (Class B) of dental sterilization",
      "Kills all viruses, bacteria, fungi and spores",
      "Validated cycles — every batch monitored and logged",
      "Hospital operation-theatre level of patient safety",
    ],
  },
];

// Photo gallery — clinic interior/exterior. Each entry references a
// file in /public/gallery/.
export const galleryPhotos: Array<{
  src: string;
  caption: string;
  category: string;
}> = [
  {
    src: "/gallery/outside.jpg",
    caption: "Clinic exterior — easy to spot at Naman Bhawan, Rangapara",
    category: "Exterior",
  },
  {
    src: "/gallery/inside-1.jpg",
    caption: "Modern, well-lit treatment room",
    category: "Interior",
  },
  {
    src: "/gallery/inside-2.jpg",
    caption: "Comfortable, family-friendly clinic interior",
    category: "Interior",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Technology", href: "#technology" },
  { label: "Visit", href: "#visit" },
  { label: "Contact", href: "#contact" },
];
