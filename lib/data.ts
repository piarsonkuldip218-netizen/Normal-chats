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
  description: string;
  longDescription?: string;
  benefits?: string[];
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

// Verified Google reviews — copied verbatim from Google Business Profile.
// Most are 5★; one is 4★ (clearly marked). Some long reviews were
// truncated by Google's "...More" preview on mobile — the visible text
// is preserved exactly as written and ends with "..." where truncated.
export type Testimonial = {
  name: string;
  rating: number; // 5 or 4
  date: string;
  text: string;
  treatment?: string; // short tag for filter / display
  isLocalGuide?: boolean;
};

export const testimonials: Testimonial[] = [
  {
    name: "Jayanta Kalita",
    rating: 5,
    date: "1 year ago",
    text: "Though the resident of Tezpur, I used to travel 20-25km to TAMS Dental clinic situated at Rangapara to treat all dental issues of my family only because this clinic has all the treatment options under one roof unlike in tezpur where even...",
    treatment: "Family",
  },
  {
    name: "Manoj",
    rating: 5,
    date: "2 years ago",
    text: "Hi, This is Manoj and I am really very thankful to Dr Tabarak Hussain and TAMS DENTAL located in Rangapara. I had this issue since almost a decade. I had under gone RCT in 2004 when I was in Gujarat and since then I had been regularly facing...",
    treatment: "RCT",
    isLocalGuide: true,
  },
  {
    name: "Niranjan Das",
    rating: 5,
    date: "1 year ago",
    text: "I so happy.. my dental treatment Dr. Tabarak Hussain since 5 years. His treatment and found him best doctor for us. His behaviour is very nice. He has a well equipped hygienic chamber... Again thnx Dr Tabarak.. Hussain sir",
    treatment: "Long-term patient",
  },
  {
    name: "Jayanta Deb Roy",
    rating: 5,
    date: "4 years ago",
    text: "Undoubtedly, it is the best Dental Clinic of Rangapara and probably of the entire surrounding. I want to thank Dr. Tabarak Hussain Ji for his selfless service. My entire family, right from my 8 year old daughter to 79 year old mother has...",
    treatment: "Family",
  },
  {
    name: "Paul Mahanta",
    rating: 5,
    date: "1 year ago",
    text: "I know Dr. Tabarak Hussain since 4 years. In every kind of dental problems we have suffered, I with my family members have taken his treatment and found him best doctor for us. His behaviour is very nice. He has a well equipped hygienic chamber.",
    treatment: "Family",
  },
  {
    name: "Mamta Ram",
    rating: 5,
    date: "2 years ago",
    text: "I did my RCT in one day, it's done very well, fully satisfied and his behaviour to patients just awesome. Thank you sir 🙏",
    treatment: "RCT",
  },
  {
    name: "Dibyajyoti Das",
    rating: 5,
    date: "2 years ago",
    text: "I did my mother's RCT, it's done very well, fully satisfied. And his behaviour to patients just awesome...",
    treatment: "RCT",
  },
  {
    name: "Ashim Deka",
    rating: 5,
    date: "1 year ago",
    text: "RCT done by Dr. Tabarak Hussain sir at TAMS Dental about three years ago. The same is in a very tremendous condition till now without any difficulties. Thanks a lot to Dr. Hussain sir for his brilliant effort in this regard.",
    treatment: "RCT",
  },
  {
    name: "Imran Ahmed",
    rating: 5,
    date: "2 years ago",
    text: "I did RCT treatment 3 years ago. The tooth is still in proper condition. I have got good relief for this treatment. Thank you Tam's Dental",
    treatment: "RCT",
  },
  {
    name: "Mukul A. Maharaj",
    rating: 5,
    date: "6 years ago",
    text: "I went to Dr. Tabarak Hussain's clinic on Jan 27th of this year. He extracted one of my teeth which was absolutely painless and for which I am very grateful. I had a very pleasant experience with Dr. Hussain and his staff. I was very...",
    treatment: "Extraction",
  },
  {
    name: "Sazida Ahmed",
    rating: 5,
    date: "4 years ago",
    text: "Thank you sir for being so kind n being friendly to me. I am very happy and satisfied with your work. You are the best dentist I have ever visit...",
  },
  {
    name: "Lakhyajyoti Deka",
    rating: 5,
    date: "5 years ago",
    text: "Favourite n Marvellous Service. Because my Wife was suffering dental problem long time. Ghy. n Tezpur BDS cannot solve my wife but Dr. Tabarak Hussain solved the problem. Now my Wife completely clear.",
    treatment: "Wife's case",
  },
  {
    name: "Ronal Moniya",
    rating: 5,
    date: "6 years ago",
    text: "Thanks to Dr. Tabarak Hussain for resolving my teeth issue.... iam glad that i completed my 3 RCT in your clinic... thnk u sir.... your response towards patient is very well behaved...... and your work is very clean and transparent....... i hope my teeth last longer period of time.... 🤞🤞",
    treatment: "3 RCTs",
  },
  {
    name: "Brahmananda Jha",
    rating: 5,
    date: "6 years ago",
    text: "The Best and polite Dental Dr I have ever seen in my life. And what to say about Sitara Medical it is a one stop solution for any medicine related requirements...",
  },
  {
    name: "Sahin Ahmed",
    rating: 5,
    date: "5 years ago",
    text: "I have done my RCT 5 months ago... till now its very good and healthy satisfied. I prefer him bcoz of sound behaviour and descent nature....",
    treatment: "RCT",
  },
  {
    name: "Simanta Savapondit",
    rating: 5,
    date: "3 years ago",
    text: "Very Good Dentist... Dr. Hussain is very much Skilled, Caring and Helpful to his patients.... Thank you Hussain Sir for your treatment.",
  },
  {
    name: "Moloy Dutta",
    rating: 5,
    date: "1 year ago",
    text: "My father's tooth has been extracted very carefully. Satisfied. Again after 3 years I went for RCT which is really successful.",
    treatment: "Extraction + RCT",
  },
  {
    name: "Angel Halder",
    rating: 5,
    date: "4 years ago",
    text: "I extracted my tooth and it was wonderful. And I would definitely like to visit Dr Tabarak Hussain in future if I had any dental problem.",
    treatment: "Extraction",
  },
  {
    name: "Bhargab Haloi",
    rating: 5,
    date: "3 years ago",
    text: "The doctor in this clinic is very friendly, all the equipments and machine are latest and I found a very friendly environment there. They have performed a tooth cap in my teeth which I found very comfortable.",
    treatment: "Tooth cap",
  },
  {
    name: "Durga Das",
    rating: 5,
    date: "2 years ago",
    text: "I have done my RCT and zirconia capping 6 months ago which is really fine now.",
    treatment: "RCT + Zirconia cap",
  },
  {
    name: "Johar Adivasi",
    rating: 5,
    date: "2 years ago",
    text: "I have done my front teeth filling two years ago, it's good now. Today I came with my cousin for his front teeth filling. Everything is good in this clinic.",
    treatment: "Filling",
  },
  {
    name: "Sumit Gupta",
    rating: 5,
    date: "5 years ago",
    text: "I feel very comfortable in Dr Hussain's Dental Clinic.",
  },
  {
    name: "Dharam Nahak",
    rating: 5,
    date: "4 years ago",
    text: "Satisfied with Doctor Hussain's job. Good behavior, neat and clean environment.",
  },
  {
    name: "Santosh Kondho",
    rating: 5,
    date: "3 years ago",
    text: "Nice service provided by Dr Tabarak Hussain, thank you so much. You are very humble and polite...",
  },
  {
    name: "Rajesh Sarkar",
    rating: 5,
    date: "6 years ago",
    text: "The service is quick and responsive in this clinic. And also Dr Hussain is very active and good at his work..",
    isLocalGuide: true,
  },
  {
    name: "Yamdo Yapa",
    rating: 5,
    date: "6 years ago",
    text: "I have done my RCT and my daughter's RCT which is really very good. Behavior is very good and decent..",
    treatment: "RCT (self + daughter)",
  },
  {
    name: "Rishabh Chakravarty",
    rating: 5,
    date: "6 years ago",
    text: "Thanks to Dr. Tabarak Hussain for precisely extracting my infected tooth... and ofcourse with utmost care.",
    treatment: "Extraction",
  },
  {
    name: "Saurash Jyoti",
    rating: 5,
    date: "5 years ago",
    text: "The experience is best. For my RCT I highly recommend 👍",
    treatment: "RCT",
  },
  {
    name: "Raayushi Biswas",
    rating: 5,
    date: "1 year ago",
    text: "Best RCT.. This is 2nd time.",
    treatment: "RCT",
  },
  {
    name: "Binod Chetry",
    rating: 4,
    date: "1 year ago",
    text: "In my opinion their treatment is good 👍",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Technology", href: "#technology" },
  { label: "Reviews", href: "#reviews" },
  { label: "Visit", href: "#visit" },
  { label: "Contact", href: "#contact" },
];
