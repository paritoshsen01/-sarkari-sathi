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
    label: "⚡ Demo 1: Basic Electrical Skill (Ramesh, Rural Youth)",
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
    label: "☀️ Demo 2: Technical Aspirant (Sunita, Rural Homemaker)",
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
    label: "🔧 Demo 3: Mechanical Aspirant (Vikram, Semi-Rural)",
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
    optionsHi: ["8वीं पास या कम", "10वीं पास", "12वीं पास", "डिप्लोमा / स्नातक"],
    demoAnswersHi: ["12वीं पास (विज्ञान/कला)", "10वीं पास", "8वीं पास"]
  },
  {
    id: "currentOccupation",
    num: 2,
    title: "Current Occupation",
    promptEn: "What work do you currently do?",
    promptHi: "आप अभी क्या काम करते हैं?",
    subtextHi: "(जैसे: खेती-मजदूरी, दुकान पर काम, वर्कशॉप हेल्पर, या गृहिणी)",
    optionsHi: ["खेती / कृषि मजदूर", "दुकान / वर्कशॉप हेल्पर", "गृहिणी", "विद्यार्थी / बेरोजगार"],
    demoAnswersHi: ["कृषि मजदूरी और कभी-कभी बिजली का काम", "वर्कशॉप में हेल्पर", "घर का काम (गृहिणी)"]
  },
  {
    id: "traditionalOccupation",
    num: 3,
    title: "Family / Traditional Occupation",
    promptEn: "What has been your family's traditional work?",
    promptHi: "आपके परिवार का ट्रेडिशनल काम क्या रहा है?",
    subtextHi: "(जैसे: खेती, बढ़ईगीरी, सिलाई, दस्तकारी, या अन्य)",
    optionsHi: ["खेती / किसानी", "बढ़ईगीरी / मिस्त्री", "सिलाई / कपड़ा बुनाई", "हस्तशिल्प / पशुपालन"],
    demoAnswersHi: ["खेती और मजदूरी", "बढ़ईगीरी और निर्माण कार्य", "सिलाई और हस्तशिल्प"]
  },
  {
    id: "existingSkills",
    num: 4,
    title: "Existing Skills & Knowledge",
    promptEn: "What skills or tasks do you already know?",
    promptHi: "आपको अभी कौन-कौन से काम या स्किल्स आते हैं?",
    subtextHi: "(जैसे: घर की वायरिंग, सिलाई, कंप्यूटर चलाना, वाहन सुधार)",
    optionsHi: ["बेसिक वायरिंग / बिजली मरम्मत", "सिलाई व कटाई", "गाड़ी सुधार / टूल्स", "कंप्यूटर चलाना"],
    demoAnswersHi: ["घर की बेसिक वायरिंग और पंखा/बोर्ड सुधारना", "सिलाई और बेसिक कंप्यूटर", "टू-व्हीलर सर्विसिंग"]
  },
  {
    id: "interest",
    num: 5,
    title: "Future Career Interest",
    promptEn: "What type of work would you like to learn for the future?",
    promptHi: "आप फ्यूचर में किस टाइप का काम सीखना चाहेंगे?",
    subtextHi: "(जैसे: सोलर पावर, इलेक्ट्रिशियन, गारमेंट मेकिंग, आईटी/कंप्यूटर)",
    optionsHi: ["इलेक्ट्रिशियन / बिजली काम", "सोलर पीवी / सोलर पंप", "ऑटोमोटिव / ईवी टेक्निशियन", "कंप्यूटर / डिजिटल सेवाएं"],
    demoAnswersHi: ["सोलर पावर और इलेक्ट्रिशियन काम", "कपड़ा निर्माण और सिलाई business", "ई-रिक्शा और ऑटो मरम्मत"]
  },
  {
    id: "employmentPreference",
    num: 6,
    title: "Employment Preference",
    promptEn: "Do you want to get a job or start your own work?",
    promptHi: "आप जॉब करना चाहते हैं या अपना काम शुरू करना चाहते हैं?",
    subtextHi: "(जैसे: अपना खुद का बिजनेस / दुकान या वेतन वाली नौकरी)",
    optionsHi: ["अपना खुद का काम (स्वरोजगार)", "वेतन वाली नौकरी (Job)", "दोनों में से जो भी बेहतर हो"],
    demoAnswersHi: ["अपना खुद का काम शुरू करना चाहता हूँ", "नौकरी करना चाहता हूँ"]
  },
  {
    id: "mobility",
    num: 7,
    title: "Geographic Mobility",
    promptEn: "How far can you travel for training or employment?",
    promptHi: "आप ट्रेनिंग या काम के लिए कितनी दूर जा सकते हैं?",
    subtextHi: "(जैसे: अपने गांव के पास, 25 किमी के भीतर, या पूरे जिले में)",
    optionsHi: ["गांव / 10 किमी के भीतर", "20-25 किमी तक", "पूरे जिले में", "राज्य के किसी भी शहर में"],
    demoAnswersHi: ["20-25 किमी तक जा सकता हूँ", "अपने गांव/ब्लॉक के पास"]
  },
  {
    id: "location",
    num: 8,
    title: "Location Details",
    promptEn: "Where do you live? (State, District, Village)",
    promptHi: "आप कहाँ रहते हैं? (राज्य, जिला, ब्लॉक/गाँव)",
    subtextHi: "(उदाहरण: मध्य प्रदेश, भोपाल, कोठरी)",
    optionsHi: ["भोपाल, मध्य प्रदेश", "सीहोर, मध्य प्रदेश", "इंदौर, मध्य प्रदेश", "रायसेन, मध्य प्रदेश"],
    demoAnswersHi: ["मध्य प्रदेश, भोपाल, गाँव-कोठरी", "मध्य प्रदेश, सीहोर, आष्टा"]
  }
];

export const giaProblemSolutions = [
  {
    problemTitle: "Lack of Proper Livelihood Planning",
    problemDesc: "Beneficiaries are often assigned generic training without assessing local market demand or personal aptitude.",
    solutionTitle: "Personalized AI Livelihood Mapping",
    solutionDesc: "Sarkari Sathi maps individual education, traditional skills, and local district economic demand into a tailored roadmap."
  },
  {
    problemTitle: "Participant Skill Identification Gap",
    problemDesc: "Rural SC youth struggle with written forms and digital literacy, hiding their practical talents.",
    solutionTitle: "Voice-Based Natural Language Profiling",
    solutionDesc: "Multi-lingual voice interface in regional dialects allowing hands-free, spoken diagnostic interviews."
  },
  {
    problemTitle: "Job Placement & Sustained Income Issues",
    problemDesc: "Training programs end without linking trainees to actual wage jobs or micro-enterprise setup.",
    solutionTitle: "Training-to-Livelihood Opportunity Mapping",
    solutionDesc: "Directly connects NSQF course output to specific local opportunities (e.g. PM Surya Ghar, Mudra Loan, CSC)."
  },
  {
    problemTitle: "Inter-Agency Coordination Gaps",
    problemDesc: "Fragmented data across Sector Skill Councils, District Industry Centers, and PM-AJAY Implementing Agencies.",
    solutionTitle: "Centralized Beneficiary Livelihood Data",
    solutionDesc: "Unified dashboard providing real-time tracking from voice profiling to certification and enterprise setup."
  },
  {
    problemTitle: "Inadequate Ground-Level Reach",
    problemDesc: "High dropouts due to lack of local access points in remote tribal and rural Gram Panchayats.",
    solutionTitle: "Multi-Channel Access (IVR, WhatsApp, Kiosk)",
    solutionDesc: "Accessible via IVR feature phone calls, WhatsApp voice notes, and CSC Gram Panchayat kiosks."
  }
];

export function calculateDynamicScores(profile: BeneficiaryProfile): (NsqfPathway & { matchScore: number })[] {
  return nsqfPathways.map(pathway => {
    let score = pathway.baseScore;
    const skillsLower = (profile.existingSkills || "").toLowerCase();
    const interestLower = (profile.interest || "").toLowerCase();
    const prefLower = (profile.employmentPreference || "").toLowerCase();

    // Skill match (+15)
    if (pathway.currentSkillsMatch.some(s => skillsLower.includes(s.toLowerCase()))) {
      score += 5;
    }
    // Interest match (+10)
    if (pathway.interestsMatch.some(i => interestLower.includes(i.toLowerCase()))) {
      score += 5;
    }
    // Preference match (+5)
    if (prefLower.includes("self") && pathway.livelihoodOutcomes.some(l => l.type === 'Self-Employment' || l.type === 'Micro-Enterprise')) {
      score += 3;
    }

    // Clamp score between 65% and 98%
    const finalScore = Math.min(98, Math.max(68, score));

    return {
      ...pathway,
      matchScore: finalScore
    };
  }).sort((a, b) => b.matchScore - a.matchScore);
}
