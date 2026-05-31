"use client";

/**
 * Lightweight client-side i18n for TAMS Dental.
 *
 * - Three locales: English (en), Hindi (hi), Assamese (as)
 * - Choice persists via localStorage
 * - Updates <html lang> attribute for screen readers + SEO
 * - Falls back to English when a key is not translated yet, so we can
 *   ship partial translations and iterate over time without breaking
 *   the UI.
 *
 * Usage in any client component:
 *   const { t, locale, setLocale } = useT();
 *   <h2>{t("hero.headline")}</h2>
 */

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Locale = "en" | "hi" | "as";

export const LOCALES: Array<{
  code: Locale;
  short: string;
  native: string;
}> = [
  { code: "en", short: "EN", native: "English" },
  { code: "hi", short: "हिं", native: "हिन्दी" },
  { code: "as", short: "অস", native: "অসমীয়া" },
];

// All translatable strings live here. Add new keys to `en` first
// (always required), then translate to `hi` and `as`. Untranslated
// keys gracefully fall back to English at runtime.
const dict = {
  en: {
    // Language switcher
    "lang.label": "Language",

    // Navbar
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.technology": "Technology",
    "nav.whyUs": "Why Us",
    "nav.gallery": "Gallery",
    "nav.reviews": "Reviews",
    "nav.visit": "Visit",
    "nav.contact": "Contact",
    "nav.callNow": "Call Now",

    // Hero
    "hero.reviewsBadge": "{score}/5 from {reviews}+ Google Reviews",
    "hero.headlinePart1": "Your",
    "hero.headlineEmphasis": "Healthy Smile",
    "hero.headlinePart2": "Starts at TAMS Dental",
    "hero.subhead":
      "Modern, painless and affordable dental care in Rangapara, Sonitpur — led by {doctor}. From routine checkups to advanced implants, we bring expert care to your family.",
    "hero.bookAppointment": "Book Appointment",
    "hero.whatsappUs": "WhatsApp Us",
    "hero.openDaily": "Open Daily",
    "hero.hoursValue": "10 AM – 8 PM",
    "hero.visitUs": "Visit Us",
    "hero.locationValue": "Rangapara, Sonitpur",
    "hero.rated": "Rated",
    "hero.ratedValue": "4.8★ on Google",
    "hero.painlessCare": "Painless Care",
    "hero.latestAnaesthesia": "Latest anaesthesia",
    "hero.teamBadge": "TAMS Dental Team",
    "hero.teamBadgeSub": "Caring for your smile",
    "hero.reviewsCount": "68+ Reviews",
    "hero.trustedBy": "Trusted by Sonitpur",

    // Floating buttons
    "float.chatWhatsapp": "Chat on WhatsApp",
    "float.callClinic": "Call {phone}",

    // About
    "about.eyebrow": "About Us",
    "about.title": "Compassionate Care, Modern Dentistry",
    "about.statHappyPatients": "Happy Patients",
    "about.statServices": "Services Offered",
    "about.statRating": "Google Rating",
    "about.statQualified": "Surgeon & Implantologist",
    "about.subParagraph":
      "At {clinic}, we combine the latest dental technology with a warm, family-friendly environment. Whether it's your child's first visit or a complex implant procedure, you can expect honest advice, transparent pricing and gentle hands.",

    // Services
    "services.eyebrow": "Our Services",
    "services.title": "Complete Dental Care Under One Roof",
    "services.subhead":
      "From routine cleanings to advanced cosmetic procedures — we offer the full spectrum of modern dentistry with the latest equipment and techniques.",

    // Technology
    "tech.eyebrow": "Advanced Technology",
    "tech.title": "Modern Equipment for Better Care",
    "tech.subhead":
      "Every machine you see here is what makes our treatments faster, safer and more comfortable than a typical clinic. Tap any card to learn how it benefits you.",

    // Why Us
    "why.eyebrow": "Why Choose Us",
    "why.titleLine1": "Trusted by Families Across",
    "why.titleLine2": "Rangapara & Sonitpur",
    "why.subhead":
      "We focus on three things: comfort, clinical excellence and clear communication. Here's what makes patients keep coming back.",

    // Testimonials
    "reviews.eyebrow": "Patient Stories",
    "reviews.title": "Trusted by Families Across Sonitpur",
    "reviews.subhead":
      "Real, verified reviews from {reviews}+ patients on Google. Every word below is exactly what they wrote — nothing edited, nothing added.",
    "reviews.statAvg": "Average Google rating",
    "reviews.stat5Star": "5-star reviews",
    "reviews.statVerified": "Verified reviews",
    "reviews.showMore": "Show more reviews",
    "reviews.showFewer": "Show fewer reviews",
    "reviews.readOnGoogle": "Read all reviews on Google",
    "reviews.originalLangNote":
      "Reviews are shown in the original language as posted on Google.",

    // Visit
    "visit.eyebrow": "Visit Our Clinic",
    "visit.title": "You'll Find Us in the Heart of Rangapara",
    "visit.subhead":
      "Located near Swasti Medical, Ward No. 8, Rangapara — easy to find and comfortable to walk into.",

    // Gallery
    "gallery.eyebrow": "Gallery",
    "gallery.title": "A Look Inside TAMS Dental",
    "gallery.subhead":
      "Take a peek at our modern clinic, advanced equipment and the comfortable environment we've built for our patients.",

    // Contact
    "contact.eyebrow": "Contact & Appointment",
    "contact.title": "Book Your Visit Today",
    "contact.subhead":
      "Walk in, call, or send us a quick WhatsApp message — we're happy to answer your questions and schedule a convenient time.",

    // Visit section labels
    "visit.address": "Address",
    "visit.hours": "Hours",
    "visit.openAllDays": "Open all 7 days",
    "visit.hoursValue": "10:00 AM – 8:00 PM",
    "visit.getDirections": "Get Directions",
    "visit.callClinic": "Call Clinic",
    "visit.photoSoon": "Clinic photo coming soon",
    "visit.reviewsSuffix": "/ 5 · {reviews}+ reviews",

    // Contact section labels
    "contact.callUs": "Call Us",
    "contact.tapToDial": "Tap to dial directly",
    "contact.whatsapp": "WhatsApp",
    "contact.chatInstantly": "Chat with us instantly",
    "contact.quickReplies": "Quick replies during clinic hours",
    "contact.address": "Address",
    "contact.workingHours": "Working Hours",
    // Form
    "contact.formName": "Your Name",
    "contact.formNamePlaceholder": "Full name",
    "contact.formPhone": "Phone Number",
    "contact.formPhonePlaceholder": "+91 ...",
    "contact.formService": "Service",
    "contact.formMessage": "Message (optional)",
    "contact.formMessagePlaceholder": "Tell us briefly about your concern…",
    "contact.formNote": "Submitting will open WhatsApp with your details pre-filled.",
    "contact.submit": "Send via WhatsApp",
    "contact.submitSuccess": "✓ Opening WhatsApp… we'll get back to you shortly.",
    // Service dropdown options
    "contact.serviceGeneral": "General Consultation",
    "contact.serviceCleaning": "Cleaning & Polishing",
    "contact.serviceRct": "Root Canal Treatment",
    "contact.serviceExtraction": "Tooth Extraction",
    "contact.serviceImplants": "Dental Implants",
    "contact.serviceBraces": "Braces / Orthodontics",
    "contact.serviceWhitening": "Teeth Whitening",
    "contact.serviceCrowns": "Crowns & Bridges",
    "contact.serviceKids": "Kids Dentistry",
    "contact.serviceCosmetic": "Cosmetic Dentistry",

    // Services section
    "services.askWhatsapp": "Ask on WhatsApp",

    // Technology section + modal
    "tech.learnMore": "Learn more",
    "tech.howItBenefits": "How it benefits you",
    "tech.usedFor": "What it's used for",
    "tech.bookOnWhatsapp": "Book on WhatsApp",
    "tech.callButton": "Call {phone}",

    // Gallery
    "gallery.openPhoto": "Open photo",

    // Doctor / About
    "about.qualifications": "Qualifications",
    "about.doctorTitle": "Dental Surgeon & Implantologist",

    // Footer
    "footer.brandDesc":
      "Modern, painless and affordable dental care in Rangapara, Sonitpur — led by Dr. Tabarak Hussain (BDS, Implantologist).",
    "footer.quickLinks": "Quick Links",
    "footer.services": "Services",
    "footer.reachUs": "Reach Us",
    "footer.rights": "All rights reserved.",
    "footer.designed": "Designed with care for healthy smiles.",
  },

  hi: {
    "lang.label": "भाषा",

    "nav.home": "होम",
    "nav.about": "परिचय",
    "nav.services": "सेवाएँ",
    "nav.technology": "तकनीक",
    "nav.whyUs": "हम क्यों",
    "nav.gallery": "गैलरी",
    "nav.reviews": "समीक्षाएँ",
    "nav.visit": "पहुँचें",
    "nav.contact": "संपर्क",
    "nav.callNow": "अभी कॉल करें",

    "hero.reviewsBadge": "{reviews}+ गूगल समीक्षाओं से {score}/5",
    "hero.headlinePart1": "आपकी",
    "hero.headlineEmphasis": "स्वस्थ मुस्कान",
    "hero.headlinePart2": "TAMS Dental से शुरू",
    "hero.subhead":
      "रंगापारा, सोनितपुर में आधुनिक, दर्द-रहित और किफायती दंत चिकित्सा — {doctor} के नेतृत्व में। नियमित जाँच से लेकर आधुनिक इम्प्लांट तक, हम आपके परिवार को विशेषज्ञ देखभाल देते हैं।",
    "hero.bookAppointment": "अपॉइंटमेंट बुक करें",
    "hero.whatsappUs": "WhatsApp पर मैसेज करें",
    "hero.openDaily": "रोज़ खुला",
    "hero.hoursValue": "10 AM – 8 PM",
    "hero.visitUs": "हमसे मिलें",
    "hero.locationValue": "रंगापारा, सोनितपुर",
    "hero.rated": "रेटिंग",
    "hero.ratedValue": "गूगल पर 4.8★",
    "hero.painlessCare": "दर्द-रहित देखभाल",
    "hero.latestAnaesthesia": "आधुनिक एनेस्थीसिया",
    "hero.teamBadge": "TAMS Dental टीम",
    "hero.teamBadgeSub": "आपकी मुस्कान की देखभाल",
    "hero.reviewsCount": "68+ समीक्षाएँ",
    "hero.trustedBy": "सोनितपुर का भरोसा",

    "float.chatWhatsapp": "WhatsApp पर चैट करें",
    "float.callClinic": "कॉल करें {phone}",

    "about.eyebrow": "हमारे बारे में",
    "about.title": "सहानुभूति भरी देखभाल, आधुनिक दंत चिकित्सा",
    "about.statHappyPatients": "खुश मरीज़",
    "about.statServices": "उपलब्ध सेवाएँ",
    "about.statRating": "गूगल रेटिंग",
    "about.statQualified": "सर्जन व इम्प्लांटोलॉजिस्ट",
    "about.subParagraph":
      "{clinic} में हम नवीनतम दंत तकनीक को एक गर्मजोश, परिवार-अनुकूल माहौल के साथ जोड़ते हैं। चाहे आपके बच्चे की पहली विज़िट हो या जटिल इम्प्लांट प्रक्रिया, आपको ईमानदार सलाह, पारदर्शी कीमतें और कोमल हाथ मिलेंगे।",

    "services.eyebrow": "हमारी सेवाएँ",
    "services.title": "एक ही छत के नीचे संपूर्ण दंत चिकित्सा",
    "services.subhead":
      "नियमित सफाई से लेकर आधुनिक कॉस्मेटिक प्रक्रियाओं तक — हम नवीनतम उपकरणों और तकनीकों के साथ आधुनिक दंत चिकित्सा का पूरा दायरा प्रदान करते हैं।",

    "tech.eyebrow": "उन्नत तकनीक",
    "tech.title": "बेहतर देखभाल के लिए आधुनिक उपकरण",
    "tech.subhead":
      "यहाँ दिखाई गई हर मशीन हमारे इलाज को सामान्य क्लिनिक से तेज़, सुरक्षित और अधिक आरामदायक बनाती है। कार्ड पर टैप करें और जानें यह आपको कैसे फायदा देती है।",

    "why.eyebrow": "हमें क्यों चुनें",
    "why.titleLine1": "रंगापारा व सोनितपुर के परिवारों का",
    "why.titleLine2": "भरोसा हम पर",
    "why.subhead":
      "हम तीन चीज़ों पर ध्यान देते हैं: आराम, क्लिनिकल उत्कृष्टता और स्पष्ट संवाद। यही वजह है कि मरीज़ बार-बार लौटते हैं।",

    "reviews.eyebrow": "मरीज़ों की कहानियाँ",
    "reviews.title": "सोनितपुर के परिवारों का भरोसा",
    "reviews.subhead":
      "गूगल पर {reviews}+ मरीज़ों की असली, सत्यापित समीक्षाएँ। नीचे जो लिखा है वही जैसा मरीज़ों ने लिखा था — कुछ भी बदला नहीं गया।",
    "reviews.statAvg": "औसत गूगल रेटिंग",
    "reviews.stat5Star": "5-स्टार समीक्षाएँ",
    "reviews.statVerified": "सत्यापित समीक्षाएँ",
    "reviews.showMore": "और समीक्षाएँ देखें",
    "reviews.showFewer": "कम समीक्षाएँ दिखाएँ",
    "reviews.readOnGoogle": "गूगल पर सभी समीक्षाएँ पढ़ें",
    "reviews.originalLangNote":
      "समीक्षाएँ उसी भाषा में दिखाई गई हैं जिसमें वे गूगल पर पोस्ट की गई थीं।",

    "visit.eyebrow": "हमारे क्लिनिक पधारें",
    "visit.title": "आप हमें रंगापारा के बीच में ही पाएँगे",
    "visit.subhead":
      "स्वस्ति मेडिकल के पास, वार्ड नं. 8, रंगापारा में स्थित — आसानी से मिल जाता है, अंदर आना आरामदायक है।",

    "gallery.eyebrow": "गैलरी",
    "gallery.title": "TAMS Dental की एक झलक",
    "gallery.subhead":
      "हमारे आधुनिक क्लिनिक, उन्नत उपकरणों और मरीज़ों के लिए बनाए गए आरामदायक माहौल की एक झलक देखें।",

    "contact.eyebrow": "संपर्क व अपॉइंटमेंट",
    "contact.title": "आज ही अपनी विज़िट बुक करें",
    "contact.subhead":
      "वॉक-इन करें, कॉल करें, या तुरंत WhatsApp मैसेज भेजें — हमें आपके सवालों के जवाब देने और सुविधाजनक समय तय करने में खुशी होगी।",

    "visit.address": "पता",
    "visit.hours": "समय",
    "visit.openAllDays": "सातों दिन खुला",
    "visit.hoursValue": "10:00 AM – 8:00 PM",
    "visit.getDirections": "दिशा-निर्देश पाएँ",
    "visit.callClinic": "क्लिनिक को कॉल करें",
    "visit.photoSoon": "क्लिनिक की तस्वीर जल्द ही आएगी",
    "visit.reviewsSuffix": "/ 5 · {reviews}+ समीक्षाएँ",

    "contact.callUs": "हमें कॉल करें",
    "contact.tapToDial": "सीधे डायल करने के लिए टैप करें",
    "contact.whatsapp": "WhatsApp",
    "contact.chatInstantly": "हमसे तुरंत चैट करें",
    "contact.quickReplies": "क्लिनिक समय में त्वरित जवाब",
    "contact.address": "पता",
    "contact.workingHours": "कार्य समय",
    "contact.formName": "आपका नाम",
    "contact.formNamePlaceholder": "पूरा नाम",
    "contact.formPhone": "फ़ोन नंबर",
    "contact.formPhonePlaceholder": "+91 ...",
    "contact.formService": "सेवा",
    "contact.formMessage": "संदेश (वैकल्पिक)",
    "contact.formMessagePlaceholder": "अपनी समस्या के बारे में संक्षेप में बताएँ…",
    "contact.formNote": "सबमिट करने पर WhatsApp आपके विवरण के साथ खुल जाएगा।",
    "contact.submit": "WhatsApp पर भेजें",
    "contact.submitSuccess": "✓ WhatsApp खोला जा रहा है… हम जल्द ही आपसे संपर्क करेंगे।",
    "contact.serviceGeneral": "सामान्य परामर्श",
    "contact.serviceCleaning": "सफाई व पॉलिशिंग",
    "contact.serviceRct": "रूट कैनाल उपचार",
    "contact.serviceExtraction": "दाँत निकालना",
    "contact.serviceImplants": "डेंटल इम्प्लांट",
    "contact.serviceBraces": "ब्रेसेस / ऑर्थोडोंटिक्स",
    "contact.serviceWhitening": "दाँत सफेद करना",
    "contact.serviceCrowns": "क्राउन व ब्रिज",
    "contact.serviceKids": "बच्चों की दंत चिकित्सा",
    "contact.serviceCosmetic": "कॉस्मेटिक दंत चिकित्सा",

    "services.askWhatsapp": "WhatsApp पर पूछें",

    "tech.learnMore": "और जानें",
    "tech.howItBenefits": "यह आपको कैसे लाभ देता है",
    "tech.usedFor": "किन कामों में उपयोग होता है",
    "tech.bookOnWhatsapp": "WhatsApp पर बुक करें",
    "tech.callButton": "कॉल करें {phone}",

    "gallery.openPhoto": "तस्वीर खोलें",

    "about.qualifications": "योग्यताएँ",
    "about.doctorTitle": "दंत शल्य चिकित्सक व इम्प्लांटोलॉजिस्ट",

    "footer.brandDesc":
      "रंगापारा, सोनितपुर में आधुनिक, दर्द-रहित और किफायती दंत चिकित्सा — डॉ. तबारक हुसैन (BDS, इम्प्लांटोलॉजिस्ट) के नेतृत्व में।",
    "footer.quickLinks": "त्वरित लिंक",
    "footer.services": "सेवाएँ",
    "footer.reachUs": "हमें कॉल करें",
    "footer.rights": "सर्वाधिकार सुरक्षित।",
    "footer.designed": "स्वस्थ मुस्कानों के लिए सावधानी से बनाया गया।",
  },

  as: {
    "lang.label": "ভাষা",

    "nav.home": "হোম",
    "nav.about": "পৰিচয়",
    "nav.services": "সেৱা",
    "nav.technology": "প্ৰযুক্তি",
    "nav.whyUs": "আমি কিয়",
    "nav.gallery": "গেলেৰী",
    "nav.reviews": "পৰ্যালোচনা",
    "nav.visit": "ক্লিনিকলৈ আহক",
    "nav.contact": "যোগাযোগ",
    "nav.callNow": "এতিয়াই ফোন কৰক",

    "hero.reviewsBadge": "{reviews}+ গুগল পৰ্যালোচনাৰ পৰা {score}/৫",
    "hero.headlinePart1": "আপোনাৰ",
    "hero.headlineEmphasis": "সুস্থ হাঁহি",
    "hero.headlinePart2": "TAMS Dental ৰ পৰা আৰম্ভ",
    "hero.subhead":
      "ৰঙাপাৰা, শোণিতপুৰত আধুনিক, বিষহীন আৰু সুলভ দাঁতৰ চিকিৎসা — {doctor}ৰ নেতৃত্বত। সাধাৰণ পৰীক্ষাৰ পৰা উন্নত ইম্প্ল্যাণ্টলৈকে, আমি আপোনাৰ পৰিয়াললৈ বিশেষজ্ঞ যত্ন আনিছোঁ।",
    "hero.bookAppointment": "এপইণ্টমেণ্ট বুক কৰক",
    "hero.whatsappUs": "হোৱাটছএপত মেছেজ কৰক",
    "hero.openDaily": "দৈনিক খোলা",
    "hero.hoursValue": "10 AM – 8 PM",
    "hero.visitUs": "আমাৰ ক্লিনিকলৈ আহক",
    "hero.locationValue": "ৰঙাপাৰা, শোণিতপুৰ",
    "hero.rated": "ৰেটিং",
    "hero.ratedValue": "গুগলত ৪.৮★",
    "hero.painlessCare": "বিষহীন চিকিৎসা",
    "hero.latestAnaesthesia": "আধুনিক এনেস্থেছিয়া",
    "hero.teamBadge": "TAMS Dental দল",
    "hero.teamBadgeSub": "আপোনাৰ হাঁহিৰ যত্ন",
    "hero.reviewsCount": "৬৮+ পৰ্যালোচনা",
    "hero.trustedBy": "শোণিতপুৰৰ ভৰসা",

    "float.chatWhatsapp": "হোৱাটছএপত চেট কৰক",
    "float.callClinic": "ফোন কৰক {phone}",

    "about.eyebrow": "আমাৰ বিষয়ে",
    "about.title": "সহানুভূতিশীল যত্ন, আধুনিক দন্তচিকিৎসা",
    "about.statHappyPatients": "সুখী ৰোগী",
    "about.statServices": "প্ৰদান কৰা সেৱা",
    "about.statRating": "গুগল ৰেটিং",
    "about.statQualified": "শল্যচিকিৎসক আৰু ইম্প্ল্যাণ্টোলজিষ্ট",
    "about.subParagraph":
      "{clinic}ত আমি আধুনিক দাঁতৰ প্ৰযুক্তিক এক উষ্ণ, পৰিয়াল-বন্ধুত্বপূৰ্ণ পৰিৱেশৰ সৈতে একত্ৰিত কৰিছোঁ। আপোনাৰ সন্তানৰ প্ৰথম ভ্ৰমণ হওক বা জটিল ইম্প্ল্যাণ্ট প্ৰক্ৰিয়া, আপুনি সৎ পৰামৰ্শ, স্বচ্ছ মূল্য আৰু কোমল হাত পাব।",

    "services.eyebrow": "আমাৰ সেৱা",
    "services.title": "এটাই ঠাইতেই সম্পূৰ্ণ দাঁতৰ চিকিৎসা",
    "services.subhead":
      "সাধাৰণ পৰিষ্কাৰৰ পৰা উন্নত প্ৰসাধনী প্ৰক্ৰিয়ালৈকে — আমি আধুনিক সঁজুলি আৰু কৌশলৰ সৈতে আধুনিক দন্তচিকিৎসাৰ সম্পূৰ্ণ পৰিসৰ আগবঢ়াওঁ।",

    "tech.eyebrow": "উন্নত প্ৰযুক্তি",
    "tech.title": "উন্নত যত্নৰ বাবে আধুনিক সঁজুলি",
    "tech.subhead":
      "ইয়াত দেখুওৱা প্ৰতিটো যন্ত্ৰই আমাৰ চিকিৎসাক সাধাৰণ ক্লিনিকতকৈ দ্ৰুত, সুৰক্ষিত আৰু আৰামদায়ক কৰি তোলে। যিকোনো কাৰ্ড টেপ কৰি জানি লওক ই আপোনাক কেনেদৰে সহায় কৰে।",

    "why.eyebrow": "আমাক কিয় বাছনি কৰিব",
    "why.titleLine1": "ৰঙাপাৰা আৰু শোণিতপুৰৰ",
    "why.titleLine2": "পৰিয়ালসকলৰ ভৰসা",
    "why.subhead":
      "আমি তিনিটা কথাত মনোযোগ দিওঁ: আৰাম, ক্লিনিকেল উৎকৃষ্টতা আৰু স্পষ্ট যোগাযোগ। ইয়াৰ বাবেই ৰোগীসকল বাৰে বাৰে উভতি আহে।",

    "reviews.eyebrow": "ৰোগীৰ কাহিনী",
    "reviews.title": "শোণিতপুৰৰ পৰিয়ালসকলৰ ভৰসা",
    "reviews.subhead":
      "গুগলত {reviews}+ ৰোগীৰ পৰা সঁচা, সত্যাপিত পৰ্যালোচনা। তলত যি লিখা আছে সেইটো ৰোগীসকলে যেনেকৈ লিখিছিল — একো সলোৱা হোৱা নাই।",
    "reviews.statAvg": "গড় গুগল ৰেটিং",
    "reviews.stat5Star": "৫-ষ্টাৰ পৰ্যালোচনা",
    "reviews.statVerified": "সত্যাপিত পৰ্যালোচনা",
    "reviews.showMore": "অধিক পৰ্যালোচনা চাওক",
    "reviews.showFewer": "কম পৰ্যালোচনা দেখুৱাওক",
    "reviews.readOnGoogle": "গুগলত সকলো পৰ্যালোচনা পঢ়ক",
    "reviews.originalLangNote":
      "পৰ্যালোচনাসমূহ গুগলত পোষ্ট কৰা মূল ভাষাত দেখুওৱা হৈছে।",

    "visit.eyebrow": "আমাৰ ক্লিনিক ভ্ৰমণ কৰক",
    "visit.title": "ৰঙাপাৰাৰ মাজতেই আপুনি আমাক পাব",
    "visit.subhead":
      "স্বস্তি মেডিকেলৰ ওচৰত, ৱাৰ্ড নং ৮, ৰঙাপাৰাত অৱস্থিত — সহজে বিচাৰি পোৱা যায়, ভিতৰলৈ আহিবলৈ আৰামদায়ক।",

    "gallery.eyebrow": "গেলেৰী",
    "gallery.title": "TAMS Dental ৰ এটি ঝলক",
    "gallery.subhead":
      "আমাৰ আধুনিক ক্লিনিক, উন্নত সঁজুলি আৰু ৰোগীসকলৰ বাবে গঢ়া আৰামদায়ক পৰিৱেশৰ এটি ঝলক চাওক।",

    "contact.eyebrow": "যোগাযোগ আৰু এপইণ্টমেণ্ট",
    "contact.title": "আজিয়েই আপোনাৰ ভ্ৰমণ বুক কৰক",
    "contact.subhead":
      "ৱাক-ইন কৰক, কল কৰক, বা এটা দ্ৰুত হোৱাটছএপ মেছেজ পঠাওক — আপোনাৰ প্ৰশ্নৰ উত্তৰ দিবলৈ আৰু সুবিধাজনক সময় ঠিক কৰিবলৈ আমি আনন্দিত।",

    "visit.address": "ঠিকনা",
    "visit.hours": "সময়",
    "visit.openAllDays": "সাত দিনেই খোলা",
    "visit.hoursValue": "১০:০০ AM – ৮:০০ PM",
    "visit.getDirections": "ৰাস্তা চাওক",
    "visit.callClinic": "ক্লিনিকলৈ ফোন কৰক",
    "visit.photoSoon": "ক্লিনিকৰ ফটো অতি সোনকালে আহিব",
    "visit.reviewsSuffix": "/ ৫ · {reviews}+ পৰ্যালোচনা",

    "contact.callUs": "আমাক ফোন কৰক",
    "contact.tapToDial": "পোনপটীয়াকৈ ডায়েল কৰিবলৈ টেপ কৰক",
    "contact.whatsapp": "হোৱাটছএপ",
    "contact.chatInstantly": "আমাৰ লগত তৎক্ষণাত চেট কৰক",
    "contact.quickReplies": "ক্লিনিকৰ সময়ত দ্ৰুত উত্তৰ",
    "contact.address": "ঠিকনা",
    "contact.workingHours": "কাৰ্য সময়",
    "contact.formName": "আপোনাৰ নাম",
    "contact.formNamePlaceholder": "সম্পূৰ্ণ নাম",
    "contact.formPhone": "ফোন নম্বৰ",
    "contact.formPhonePlaceholder": "+৯১ ...",
    "contact.formService": "সেৱা",
    "contact.formMessage": "বাৰ্তা (ঐচ্ছিক)",
    "contact.formMessagePlaceholder": "আপোনাৰ সমস্যাৰ বিষয়ে চমুকৈ লিখক…",
    "contact.formNote": "ছাবমিট কৰিলে আপোনাৰ বিৱৰণৰ সৈতে হোৱাটছএপ খুলিব।",
    "contact.submit": "হোৱাটছএপত পঠাওক",
    "contact.submitSuccess": "✓ হোৱাটছএপ খুলি আছে… আমি আপোনাৰ লগত সোনকালে যোগাযোগ কৰিম।",
    "contact.serviceGeneral": "সাধাৰণ পৰামৰ্শ",
    "contact.serviceCleaning": "পৰিষ্কাৰ আৰু পলিচিং",
    "contact.serviceRct": "ৰূট কেনেল চিকিৎসা",
    "contact.serviceExtraction": "দাঁত উলিওৱা",
    "contact.serviceImplants": "ডেণ্টেল ইম্প্ল্যাণ্ট",
    "contact.serviceBraces": "ব্ৰেচেছ / অৰ্থডণ্টিক্স",
    "contact.serviceWhitening": "দাঁত বগা কৰা",
    "contact.serviceCrowns": "ক্ৰাউন আৰু ব্ৰিজ",
    "contact.serviceKids": "ল'ৰা-ছোৱালীৰ দাঁতৰ চিকিৎসা",
    "contact.serviceCosmetic": "প্ৰসাধনী দাঁতৰ চিকিৎসা",

    "services.askWhatsapp": "হোৱাটছএপত সুধক",

    "tech.learnMore": "অধিক জানক",
    "tech.howItBenefits": "ই আপোনাক কেনেদৰে সহায় কৰে",
    "tech.usedFor": "কি কি কামত ব্যৱহাৰ হয়",
    "tech.bookOnWhatsapp": "হোৱাটছএপত বুক কৰক",
    "tech.callButton": "ফোন কৰক {phone}",

    "gallery.openPhoto": "ফটো খোলক",

    "about.qualifications": "যোগ্যতা",
    "about.doctorTitle": "দাঁতৰ শল্যচিকিৎসক আৰু ইম্প্ল্যাণ্টোলজিষ্ট",

    "footer.brandDesc":
      "ৰঙাপাৰা, শোণিতপুৰত আধুনিক, বিষহীন আৰু সুলভ দাঁতৰ চিকিৎসা — ডাঃ তবাৰক হুছেইন (BDS, ইম্প্ল্যাণ্টোলজিষ্ট)ৰ নেতৃত্বত।",
    "footer.quickLinks": "দ্ৰুত লিংক",
    "footer.services": "সেৱা",
    "footer.reachUs": "আমাৰ লগত যোগাযোগ",
    "footer.rights": "সকলো অধিকাৰ সংৰক্ষিত।",
    "footer.designed": "সুস্থ হাঁহিৰ বাবে যত্নেৰে গঢ়া।",
  },
} as const;

export type TKey = keyof (typeof dict)["en"];

type Vars = Record<string, string | number>;

function format(template: string, vars?: Vars): string {
  if (!vars) return template;
  return template.replace(/\{(\w+)\}/g, (m, key) =>
    Object.prototype.hasOwnProperty.call(vars, key) ? String(vars[key]) : m
  );
}

interface LanguageContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: TKey, vars?: Vars) => string;
}

const LanguageContext = createContext<LanguageContextValue>({
  locale: "en",
  setLocale: () => undefined,
  t: (key) => key,
});

const STORAGE_KEY = "tams-locale";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  // Hydrate from localStorage on mount (client-only).
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (saved === "en" || saved === "hi" || saved === "as") {
        setLocaleState(saved);
        document.documentElement.lang = saved;
      }
    } catch {
      // localStorage may be blocked (private mode); ignore.
    }
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
      document.documentElement.lang = l;
    } catch {
      // ignore
    }
  };

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      setLocale,
      t: (key, vars) => {
        const localeDict = dict[locale] as Record<string, string>;
        const enDict = dict.en as Record<string, string>;
        const template = localeDict[key] ?? enDict[key] ?? key;
        return format(template, vars);
      },
    }),
    [locale]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useT(): LanguageContextValue {
  return useContext(LanguageContext);
}
