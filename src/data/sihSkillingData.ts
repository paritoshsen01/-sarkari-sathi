export interface NsqfPathway {
  id: string;
  name: string;
  icon: string;
  nsqfLevel: number;
  sector: string;
  duration: string;
  minEducation: string;
  whyRecommended: string;
  description: string;
  currentSkillsMatch: string[];
  interestsMatch: string[];
  skillGaps: string[];
  livelihoodOutcomes: {
    title: string;
    description: string;
    type: 'Wage Employment' | 'Self-Employment' | 'Micro-Enterprise';
  }[];
  localOpportunities: {
    title: string;
    location: string;
    avgIncome: string;
  }[];
  eligibility: string[];
  benefits: string[];
  requiredDocuments: string[];
  baseScore: number;
}

export interface BeneficiaryProfile {
  education: string;
  currentOccupation: string;
  traditionalOccupation: string;
  existingSkills: string;
  interest: string;
  employmentPreference: 'Job' | 'Self Employment' | 'Either';
  mobility: string;
  state: string;
  district: string;
  village: string;
}

export const samplePresets: { label: string; profile: BeneficiaryProfile }[] = [
  {
    label: "⚡ Ramesh (Electrical & Wiring Experience)",
    profile: {
      education: "Class 12th Pass",
      currentOccupation: "Agricultural Labourer",
      traditionalOccupation: "Farming",
      existingSkills: "Basic Electrical Wiring & Household Repair",
      interest: "Solar Power / Electrical Engineering",
      employmentPreference: "Self Employment",
      mobility: "Within 25 km",
      state: "Madhya Pradesh",
      district: "Bhopal",
      village: "Kothri"
    }
  },
  {
    label: "☀️ Sunita (Tailoring & Computer Literacy)",
    profile: {
      education: "Class 10th Pass",
      currentOccupation: "Homemaker",
      traditionalOccupation: "Handicrafts & Agriculture",
      existingSkills: "Tailoring, Basic Computer Literacy",
      interest: "Garment Manufacturing / Digital Work",
      employmentPreference: "Self Employment",
      mobility: "Local Village / Within 10 km",
      state: "Madhya Pradesh",
      district: "Sehore",
      village: "Ashta"
    }
  },
  {
    label: "🔧 Vikram (Mechanical & Workshop Experience)",
    profile: {
      education: "Class 8th Pass",
      currentOccupation: "Helper at Auto Workshop",
      traditionalOccupation: "Carpentry",
      existingSkills: "Vehicle Repair, Tool Handling",
      interest: "Automotive & Electric Vehicle Technician",
      employmentPreference: "Job",
      mobility: "Anywhere in District",
      state: "Madhya Pradesh",
      district: "Indore",
      village: "Sanwer"
    }
  }
];

export const nsqfPathways: NsqfPathway[] = [
  {
    id: "electrician-nsqf4",
    name: "Assistant Electrician / General Wiring Specialist",
    icon: "⚡",
    nsqfLevel: 4,
    sector: "Power & Construction",
    duration: "3 Months (350 Hours)",
    minEducation: "Class 8th Pass or relevant experience",
    whyRecommended: "Matches your existing electrical wiring skills, interest in technical work, and self-employment preference.",
    description: "Hands-on training in domestic electrical wiring, safety compliance, earthing, distribution board assembly, and circuit testing under PM-AJAY GIA skilling grants.",
    currentSkillsMatch: ["Household Repair", "Basic Wiring", "Tool Usage"],
    interestsMatch: ["Electrical Work", "Technical Servicing"],
    skillGaps: ["Industrial Electrical Safety Standards", "3-Phase Circuit Design", "Fault Finding & Meter Reading", "Formal Safety Certification"],
    livelihoodOutcomes: [
      { title: "Independent Electrical Contractor", description: "Start local electrical installation service in nearby villages and towns.", type: "Self-Employment" },
      { title: "Maintenance Technician", description: "Join local real estate, commercial hubs, or government infrastructure projects.", type: "Wage Employment" }
    ],
    localOpportunities: [
      { title: "Rural Electrification Drive Contractor", location: "Bhopal & Sehore District", avgIncome: "₹18,000 - ₹24,000 / month" },
      { title: "Building Service Assistant", location: "Local MP State Construction Projects", avgIncome: "₹15,000 - ₹20,000 / month" }
    ],
    eligibility: [
      "Member of Scheduled Caste (SC) community under PM-AJAY guidelines",
      "Age between 18 and 45 years",
      "Basic literacy (Class 8th preferred)"
    ],
    benefits: [
      "100% Free Training & Certification funded under PM-AJAY GIA Component",
      "Daily Stipend of ₹150 during training period",
      "Free Safety Toolkit & Digital Certificate upon completion",
      "Post-training placement assistance & Micro-enterprise loan linkage (Mudra/Stand-up India)"
    ],
    requiredDocuments: [
      "Aadhaar Card (Aadhaar-linked Mobile)",
      "SC Caste Certificate issued by competent authority",
      "Income Certificate (Family income < ₹2.5 Lakh/year)",
      "Bank Account Passbook (DBT Enabled)",
      "Educational Certificate / Marksheet (Class 8th / 10th / 12th)"
    ],
    baseScore: 92
  },
  {
    id: "solar-pv-technician",
    name: "Solar PV Rooftop Technician & Installer",
    icon: "☀️",
    nsqfLevel: 4,
    sector: "Green Jobs & Renewable Energy",
    duration: "4 Months (400 Hours)",
    minEducation: "Class 10th Pass",
    whyRecommended: "High alignment with solar energy interests, PM Surya Ghar initiative, and high local demand for green technicians.",
    description: "Specialized training covering solar panel mounting, inverter setup, battery storage maintenance, and rooftop solar grid integration.",
    currentSkillsMatch: ["Basic Electrical Knowledge", "Outdoor Technical Work"],
    interestsMatch: ["Solar Energy", "Renewable Power", "Modern Technology"],
    skillGaps: ["Solar Cell Performance Testing", "Inverter Calibration", "Grid Tie Safety Rules", "Solar Net Metering Documentation"],
    livelihoodOutcomes: [
      { title: "Solar Rooftop Installer", description: "Deploy solar panels under PM Surya Ghar & rural solar pump initiatives.", type: "Wage Employment" },
      { title: "Solar Maintenance Service Entrepreneur", description: "Establish a solar panel cleaning and repair service center.", type: "Micro-Enterprise" }
    ],
    localOpportunities: [
      { title: "PM Surya Ghar Installation Partner", location: "Bhopal District", avgIncome: "₹20,000 - ₹28,000 / month" },
      { title: "KUSUM Solar Pump Technician", location: "Rural Madhya Pradesh", avgIncome: "₹18,000 - ₹25,000 / month" }
    ],
    eligibility: [
      "SC Community Beneficiary under PM-AJAY",
      "Age 18 - 35 years",
      "Class 10th Pass"
    ],
    benefits: [
      "Govt-Recognized Skill India & Sector Skill Council Certificate",
      "Hands-on practical training on live solar rooftop installations",
      "Toolkit sponsorship worth ₹8,000",
      "Direct linkage with solar EPC vendors"
    ],
    requiredDocuments: [
      "Aadhaar Card",
      "SC Caste Certificate",
      "Income Certificate",
      "Class 10th Marksheet",
      "Bank Account Details"
    ],
    baseScore: 87
  },
  {
    id: "automotive-ev-service",
    name: "Automotive Service Technician & EV Maintenance",
    icon: "🔧",
    nsqfLevel: 3,
    sector: "Automotive & Electric Mobility",
    duration: "3.5 Months (380 Hours)",
    minEducation: "Class 8th Pass",
    whyRecommended: "Ideal match for mechanical repair experience, vehicle handling skills, and growing EV market demand.",
    description: "Training in 2-wheeler/3-wheeler servicing, engine diagnostics, brake and suspension repair, and basic EV battery handling.",
    currentSkillsMatch: ["Vehicle Servicing", "Hand Tool Handling", "Workshop Basics"],
    interestsMatch: ["Automobiles", "Mechanical Repair", "EV Technology"],
    skillGaps: ["Digital Diagnostics Tool Usage", "EV Battery BMS Safety", "Hydraulic Brake Servicing"],
    livelihoodOutcomes: [
      { title: "Auto Workshop Technician", description: "Work at authorized 2-wheeler or EV service centers.", type: "Wage Employment" },
      { title: "Local Multi-Brand Garage Owner", description: "Set up a two-wheeler and e-rickshaw repair shop.", type: "Self-Employment" }
    ],
    localOpportunities: [
      { title: "E-Rickshaw Service Station Specialist", location: "Bhopal & Indore Metro", avgIncome: "₹16,000 - ₹22,000 / month" },
      { title: "Automotive Dealership Technician", location: "Sehore District Center", avgIncome: "₹14,000 - ₹19,000 / month" }
    ],
    eligibility: [
      "SC Beneficiary",
      "Age 18 - 40 years",
      "Physical fitness for workshop duties"
    ],
    benefits: [
      "Practical apprenticeship in recognized workshops",
      "Free uniform and personal protective equipment (PPE)",
      "Financial assistance for garage equipment under PM-AJAY GIA"
    ],
    requiredDocuments: [
      "Aadhaar Card",
      "SC Caste Certificate",
      "Income Certificate",
      "Bank Details"
    ],
    baseScore: 84
  },
  {
    id: "digital-computer-assistant",
    name: "Digital Data Entry & E-Governance Kiosk Operator",
    icon: "💻",
    nsqfLevel: 4,
    sector: "IT-ITeS & E-Commerce Services",
    duration: "3 Months (300 Hours)",
    minEducation: "Class 10th Pass",
    whyRecommended: "Suitable for candidates interested in office jobs, computer operations, and digital citizen services.",
    description: "Training in computer fundamentals, typing accuracy, internet browsing, MS Office, e-district portals, and online application processing.",
    currentSkillsMatch: ["Basic Computer Literacy", "Mobile Operation"],
    interestsMatch: ["Computer Work", "Office Jobs", "Digital Services"],
    skillGaps: ["Advanced Excel & Tally Data Entry", "E-Governance Portal Processing", "Cybersecurity Basics"],
    livelihoodOutcomes: [
      { title: "CSC / MpOnline Kiosk Owner", description: "Operate a digital citizen services hub in your Gram Panchayat.", type: "Self-Employment" },
      { title: "Data Entry Operator", description: "Work in government offices, schools, hospitals, or private firms.", type: "Wage Employment" }
    ],
    localOpportunities: [
      { title: "Gram Panchayat Digital Sahayak", location: "Rural Madhya Pradesh", avgIncome: "₹12,000 - ₹18,000 / month" },
      { title: "Private Office Data Associate", location: "District Headquarters", avgIncome: "₹14,000 - ₹20,000 / month" }
    ],
    eligibility: [
      "SC Community Candidate",
      "Class 10th Pass with basic English reading skill",
      "Age 18 - 35 years"
    ],
    benefits: [
      "National Skill Qualification Framework (NSQF) Certificate",
      "Free computer practice sessions",
      "Kiosk setup guidance & Mudra Loan assistance"
    ],
    requiredDocuments: [
      "Aadhaar Card",
      "SC Caste Certificate",
      "Income Certificate",
      "Class 10th Marksheet",
      "Bank Account"
    ],
    baseScore: 76
  }
];

export const skillingQuestions = [
  {
    id: "education",
    num: 1,
    title: "Education Background",
    promptEn: "What is your highest educational qualification?",
    promptHi: "आपकी पढ़ाई कितनी हुई है?",
    subtextHi: "(जैसे: 8वीं पास, 10वीं पास, 12वीं पास, या कोई अन्य)",
    optionsHi: ["8वीं पास या कम", "10वीं पास", "12वीं पास", "डिप्लोमा / स्नातक"]
  },
  {
    id: "currentOccupation",
    num: 2,
    title: "Current Occupation",
    promptEn: "What work do you currently do?",
    promptHi: "आप अभी क्या काम करते हैं?",
    subtextHi: "(जैसे: खेती-मजदूरी, दुकान पर काम, वर्कशॉप हेल्पर, या गृहिणी)",
    optionsHi: ["खेती / कृषि मजदूर", "दुकान / वर्कशॉप हेल्पर", "गृहिणी", "विद्यार्थी / बेरोजगार"]
  },
  {
    id: "traditionalOccupation",
    num: 3,
    title: "Family / Traditional Occupation",
    promptEn: "What has been your family's traditional work?",
    promptHi: "आपके परिवार का ट्रेडिशनल काम क्या रहा है?",
    subtextHi: "(जैसे: खेती, बढ़ईगीरी, सिलाई, दस्तकारी, या अन्य)",
    optionsHi: ["खेती / किसानी", "बढ़ईगीरी / मिस्त्री", "सिलाई / कपड़ा बुनाई", "हस्तशिल्प / पशुपालन"]
  },
  {
    id: "existingSkills",
    num: 4,
    title: "Existing Skills & Knowledge",
    promptEn: "What skills or tasks do you already know?",
    promptHi: "आपको अभी कौन-कौन से काम या स्किल्स आते हैं?",
    subtextHi: "(जैसे: घर की वायरिंग, सिलाई, कंप्यूटर चलाना, वाहन सुधार)",
    optionsHi: ["बेसिक वायरिंग / बिजली मरम्मत", "सिलाई व कटाई", "गाड़ी सुधार / टूल्स", "कंप्यूटर चलाना"]
  },
  {
    id: "interest",
    num: 5,
    title: "Future Career Interest",
    promptEn: "What type of work would you like to learn for the future?",
    promptHi: "आप फ्यूचर में किस टाइप का काम सीखना चाहेंगे?",
    subtextHi: "(जैसे: सोलर पावर, इलेक्ट्रिशियन, गारमेंट मेकिंग, आईटी/कंप्यूटर)",
    optionsHi: ["इलेक्ट्रिशियन / बिजली काम", "सोलर पीवी / सोलर पंप", "ऑटोमोटिव / ईवी टेक्निशियन", "कंप्यूटर / डिजिटल सेवाएं"]
  },
  {
    id: "employmentPreference",
    num: 6,
    title: "Employment Preference",
    promptEn: "Do you want to get a job or start your own work?",
    promptHi: "आप जॉब करना चाहते हैं या अपना काम शुरू करना चाहते हैं?",
    subtextHi: "(जैसे: अपना खुद का बिजनेस / दुकान या वेतन वाली नौकरी)",
    optionsHi: ["अपना खुद का काम (स्वरोजगार)", "वेतन वाली नौकरी (Job)", "दोनों में से जो भी बेहतर हो"]
  },
  {
    id: "mobility",
    num: 7,
    title: "Geographic Mobility",
    promptEn: "How far can you travel for training or employment?",
    promptHi: "आप ट्रेनिंग या काम के लिए कितनी दूर जा सकते हैं?",
    subtextHi: "(जैसे: अपने गांव के पास, 25 किमी के भीतर, या पूरे जिले में)",
    optionsHi: ["गांव / 10 किमी के भीतर", "20-25 किमी तक", "पूरे जिले में", "राज्य के किसी भी शहर में"]
  },
  {
    id: "location",
    num: 8,
    title: "Location Details",
    promptEn: "Where do you live? (State, District, Village)",
    promptHi: "आप कहाँ रहते हैं? (राज्य, जिला, ब्लॉक/गाँव)",
    subtextHi: "(उदाहरण: मध्य प्रदेश, भोपाल, कोठरी)",
    optionsHi: ["भोपाल, मध्य प्रदेश", "सीहोर, मध्य प्रदेश", "इंदौर, मध्य प्रदेश", "रायसेन, मध्य प्रदेश"]
  }
];

export function calculateDynamicScores(profile: BeneficiaryProfile): (NsqfPathway & { matchScore: number })[] {
  return nsqfPathways.map(pathway => {
    let score = pathway.baseScore;
    const skillsLower = (profile.existingSkills || "").toLowerCase();
    const interestLower = (profile.interest || "").toLowerCase();
    const prefLower = (profile.employmentPreference || "").toLowerCase();

    // Skill match (+5)
    if (pathway.currentSkillsMatch.some(s => skillsLower.includes(s.toLowerCase()))) {
      score += 5;
    }
    // Interest match (+5)
    if (pathway.interestsMatch.some(i => interestLower.includes(i.toLowerCase()))) {
      score += 5;
    }
    // Preference match (+3)
    if (prefLower.includes("self") && pathway.livelihoodOutcomes.some(l => l.type === 'Self-Employment' || l.type === 'Micro-Enterprise')) {
      score += 3;
    }

    const finalScore = Math.min(98, Math.max(68, score));

    return {
      ...pathway,
      matchScore: finalScore
    };
  }).sort((a, b) => b.matchScore - a.matchScore);
}
