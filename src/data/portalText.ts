import type { LanguageCode } from './languages';

export const portalText: Record<LanguageCode, any> = {
  en: {
    navVoice: "🎙️ Voice Interview",
    navProfile: "📊 Profile & Recommendations",
    navBack: "Back to Main Site",
    bannerTitle: "“Your Voice. Your Skills. Your Opportunity.”",
    bannerSub: "AI-powered livelihood mapping and skilling guidance for SC beneficiaries under PM-AJAY.",
    bannerDesc: "Talk to AJAY Sathi in your preferred language. The AI assistant understands your background, existing skills, and interests to help you discover suitable NSQF-aligned training and local livelihood opportunities.",
    journeyTitle: "End-to-End Livelihood Journey:",
    journeyCitizen: "👤 Citizen",
    journeyVoice: "🎙️ Voice AI",
    journeyGap: "⚡ Skill Gap",
    journeyTraining: "🎓 NSQF Training",
    journeyLivelihood: "💼 Livelihood",
    talkCTA: "🎙️ Talk to AJAY Sathi",
    sampleHeader: "Sample Citizen Profiles (Quick Assessment)",
    sampleDesc: "Select a sample profile to instantly evaluate the recommendation engine:",
    qProgress: "Question",
    of: "of",
    voiceGuide: "AJAY Sathi Voice Guide",
    speaking: "Speaking...",
    noTyping: "No typing required. Just speak naturally.",
    repeatVoice: "🔊 Repeat Voice",
    micListening: "🔴 Listening... Speak clearly into your mic",
    micTapToSpeak: "Click Microphone to Speak Answer",
    speechRecognized: "Recognized Speech:",
    confirmNext: "Confirm Answer & Next →",
    orClick: "Or click an answer:",
    micIssue: "Microphone issue?",
    hideTyping: "Hide Typing Box",
    typeAnswer: "⌨️ Type your answer instead",
    typePlaceholder: "Type your answer here...",
    next: "Next",
    profileTitle: "Your Livelihood Profile",
    profileSub: "Generated from your AI voice assessment & background",
    editProfile: "Edit Profile",
    saveProfile: "Save Profile",
    retakeInterview: "🔄 Re-take Interview",
    education: "Education",
    currentWork: "Current Work",
    traditionalWork: "Traditional Work",
    existingSkills: "Existing Skills",
    careerInterest: "Career Interest",
    workPref: "Work Preference",
    mobilityLimit: "Mobility Limit",
    location: "Location",
    skillGapTitle: "Understanding Your Livelihood & Skill Gaps",
    skillGapSub: "Diagnostic analysis of existing practical abilities vs required skill standards",
    currentSit: "1. Current Situation",
    keyStrengths: "2. Key Strengths",
    identifiedGaps: "3. Identified Skill Gaps",
    recTitle: "Recommended Skill Pathways",
    recSub: "Matched to your profile & local PM-AJAY GIA training centers",
    potentialMatch: "Potential Match — Final eligibility verified per official PM-AJAY guidelines",
    matchScore: "Match Score",
    whyRecommended: "Why Recommended?",
    outcomes: "Livelihood Outcomes:",
    viewDetailsDoc: "View Livelihood Details & Documents →",
    roadmapTag: "Strategic Career Timeline",
    roadmapTitle: "Your Suggested Livelihood Roadmap",
    roadmapSub: "A step-by-step pathway from your existing skills to sustained enterprise & employment",
    roadmapSteps: [
      { step: "1", title: "Current Skills", desc: "Recognize existing experience" },
      { step: "2", title: "Skill Gap", desc: "Identify safety & technical gaps" },
      { step: "3", title: "NSQF Training", desc: "Free 3-month PM-AJAY GIA course" },
      { step: "4", title: "Certification", desc: "Sector Skill Council Certificate" },
      { step: "5", title: "Local Job", desc: "Apprenticeship or employment" },
      { step: "6", title: "Self Enterprise", desc: "Mudra loan & business setup" }
    ],
    ruralTitle: "Built for Rural & Low-Connectivity Environments",
    ruralSub: "Access channels ensuring zero-barrier entry across Gram Panchayats",
    modalDuration: "Duration:",
    modalEdu: "Education:",
    modalBenefits: "PM-AJAY GIA Component Benefits",
    modalDocs: "Required Documents Checklist",
    modalOpp: "Opportunities Near You",
    getGuidance: "Get Application Guidance →",
    guidanceAlert: "Application Guidance Generated! Your document checklist and nearby training center contact details have been prepared.",
    applicationGuideSteps: ["Step 1: Visit your nearest Gram Panchayat office or CSC center and inquire about PM-AJAY Skilling Training.", "Step 2: Remember to carry your Aadhaar Card, SC Caste Certificate, and Bank Passbook.", "Step 3: The officer will fill out your form and register you in a batch for your selected course (e.g., Solar, Wiring).", "Step 4: You will receive 3 months of free training along with a daily stipend of ₹150.", "Step 5: Upon completion, you will receive a certification and toolkit to start your own business or job."],
    questions: [
        {
            "prompt": "What is your highest educational qualification?",
            "subtext": "(e.g., 8th Pass, 10th Pass, 12th Pass, Diploma, Graduate)",
            "options": [
                "8th Pass or less",
                "10th Pass",
                "12th Pass",
                "Diploma / Graduate"
            ]
        },
        {
            "prompt": "What work do you currently do?",
            "subtext": "(e.g., Agricultural Labourer, Shop Helper, Housewife, Student)",
            "options": [
                "Farm / Agri Labourer",
                "Shop / Workshop Helper",
                "Housewife",
                "Student / Unemployed"
            ]
        },
        {
            "prompt": "What has been your family's traditional work?",
            "subtext": "(e.g., Farming, Carpentry, Tailoring, Handicrafts)",
            "options": [
                "Farming",
                "Carpentry / Masonry",
                "Tailoring / Weaving",
                "Handicrafts / Animal Husbandry"
            ]
        },
        {
            "prompt": "What skills or tasks do you already know?",
            "subtext": "(e.g., Basic Electrical Wiring, Tailoring, Computer Use)",
            "options": [
                "Basic Wiring / Repair",
                "Tailoring / Cutting",
                "Vehicle Repair / Tools",
                "Computer Operation"
            ]
        },
        {
            "prompt": "What type of work would you like to learn for the future?",
            "subtext": "(e.g., Solar Power, Electrician, IT/Computer, Garments)",
            "options": [
                "Electrician / Electrical Work",
                "Solar PV / Solar Pump",
                "Automotive / EV Technician",
                "Computer / Digital Services"
            ]
        },
        {
            "prompt": "Do you want to get a job or start your own work?",
            "subtext": "(e.g., Self-employment / Business or Salaried Job)",
            "options": [
                "Own Business (Self-employed)",
                "Salaried Job",
                "Whichever is better"
            ]
        },
        {
            "prompt": "How far can you travel for training or employment?",
            "subtext": "(e.g., Near village, within 25km, or anywhere in the district)",
            "options": [
                "Within Village / 10 km",
                "Up to 20-25 km",
                "Anywhere in District",
                "Any City in State"
            ]
        },
        {
            "prompt": "Where do you live? (State, District, Village)",
            "subtext": "(e.g., Madhya Pradesh, Bhopal, Kothari)",
            "options": [
                "Bhopal, MP",
                "Sehore, MP",
                "Indore, MP",
                "Raisen, MP"
            ]
        }
    ]
  },
  hi: {
    navVoice: "🎙️ वॉयस इंटरव्यू",
    navProfile: "📊 प्रोफाइल एवं सिफारिशें",
    navBack: "मुख्य साइट पर वापस",
    bannerTitle: "“आपकी आवाज़। आपके कौशल। आपका अवसर।”",
    bannerSub: "PM-AJAY के तहत SC लाभार्थियों के लिए AI-संचालित वॉयस आजीविका एवं कौशल मार्गदर्शन।",
    bannerDesc: "सरकारी साथी से अपनी पसंद की भाषा में बात करें। AI सहायक आपकी पृष्ठभूमि, मौजूदा कौशल और रुचियों को समझकर आपके लिए उपयुक्त NSQF-अनुशंसित प्रशिक्षण और स्थानीय रोजगार खोजने में मदद करता है।",
    journeyTitle: "संपूर्ण आजीविका प्रक्रिया:",
    journeyCitizen: "👤 नागरिक",
    journeyVoice: "🎙️ वॉयस AI",
    journeyGap: "⚡ कौशल अंतर",
    journeyTraining: "🎓 NSQF प्रशिक्षण",
    journeyLivelihood: "💼 आजीविका",
    talkCTA: "🎙️ सरकारी साथी से बात करें",
    sampleHeader: "नमूना नागरिक प्रोफाइल (त्वरित मूल्यांकन)",
    sampleDesc: "अनुशंसा इंजन का तुरंत परीक्षण करने के लिए किसी एक प्रोफाइल को चुनें:",
    qProgress: "प्रश्न",
    of: "का",
    voiceGuide: "सरकारी साथी वॉयस गाइड",
    speaking: "बोल रहा हूँ...",
    noTyping: "टाइप करने की आवश्यकता नहीं है। बस स्वाभाविक रूप से बोलें।",
    repeatVoice: "🔊 आवाज दोहराएं",
    micListening: "🔴 सुन रहा हूँ... अपने माइक में स्पष्ट बोलें",
    micTapToSpeak: "उत्तर बोलने के लिए माइक पर क्लिक करें",
    speechRecognized: "पहचाना गया उत्तर:",
    confirmNext: "उत्तर की पुष्टि करें और आगे बढ़ें →",
    orClick: "या उत्तर चुनें:",
    micIssue: "माइक में समस्या है?",
    hideTyping: "टाइपिंग बॉक्स छिपाएं",
    typeAnswer: "⌨️ इसके बजाय अपना उत्तर टाइप करें",
    typePlaceholder: "अपना उत्तर टाइप करें...",
    next: "आगे बढ़ें",
    profileTitle: "आपकी आजीविका प्रोफाइल",
    profileSub: "आपके AI वॉयस मूल्यांकन और पृष्ठभूमि से निर्मित",
    editProfile: "प्रोफाइल संपादित करें",
    saveProfile: "प्रोफाइल सहेजें",
    retakeInterview: "🔄 वॉयस इंटरव्यू दोबारा दें",
    education: "शिक्षा",
    currentWork: "वर्तमान कार्य",
    traditionalWork: "पारंपरिक कार्य",
    existingSkills: "मौजूदा कौशल",
    careerInterest: "करियर रुचि",
    workPref: "रोजगार प्राथमिकता",
    mobilityLimit: "आवागमन सीमा",
    location: "स्थान",
    skillGapTitle: "आपकी आजीविका और कौशल अंतर (Skill Gap) को समझें",
    skillGapSub: "प्रायोगिक क्षमताओं बनाम कौशल मानकों का विश्लेषणात्मक मूल्यांकन",
    currentSit: "1. वर्तमान स्थिति",
    keyStrengths: "2. मुख्य क्षमताएं",
    identifiedGaps: "3. पहचाने गए कौशल अंतर",
    recTitle: "अनुशंसित कौशल मार्ग (NSQF Pathways)",
    recSub: "आपकी प्रोफाइल और स्थानीय PM-AJAY GIA केंद्रों के अनुसार",
    potentialMatch: "संभावित मैच — अंतिम पात्रता आधिकारिक PM-AJAY दिशानिर्देशों के अनुसार सत्यापित होगी",
    matchScore: "मैच स्कोर",
    whyRecommended: "क्यों अनुशंसित?",
    outcomes: "आजीविका परिणाम:",
    viewDetailsDoc: "आजीविका विवरण और दस्तावेज़ देखें →",
    roadmapTag: "रणनीतिक करियर समयरेखा",
    roadmapTitle: "आपकी अनुशंसित आजीविका रोडमैप",
    roadmapSub: "मौजूदा कौशल से स्थाई व्यवसाय तक चरणबद्ध मार्ग",
    roadmapSteps: [
      { step: "1", title: "मौजूदा कौशल", desc: "प्रायोगिक अनुभव की पहचान" },
      { step: "2", title: "कौशल अंतर", desc: "सुरक्षा और तकनीकी अंतर की पहचान" },
      { step: "3", title: "NSQF प्रशिक्षण", desc: "मुफ़्त 3-महीने का PM-AJAY GIA कोर्स" },
      { step: "4", title: "प्रमाणन", desc: "सेक्टर स्किल काउंसिल सर्टिफिकेट" },
      { step: "5", title: "स्थानीय रोजगार", desc: "अप्रेंटिसशिप या नौकरी" },
      { step: "6", title: "स्वरोजगार", desc: "मुद्रा ऋण और व्यापार स्थापना" }
    ],
    ruralTitle: "ग्रामीण और कम-कनेक्टिविटी क्षेत्रों के लिए निर्मित",
    ruralSub: "ग्राम पंचायतों में बिना किसी रुकावट के पहुंच",
    modalDuration: "अवधि:",
    modalEdu: "शिक्षा:",
    modalBenefits: "PM-AJAY GIA घटक के लाभ",
    modalDocs: "आवश्यक दस्तावेज़ों की सूची",
    modalOpp: "आपके निकटतम अवसर",
    getGuidance: "आवेदन मार्गदर्शन प्राप्त करें →",
    guidanceAlert: "आवेदन मार्गदर्शन तैयार! आपकी दस्तावेज़ सूची और नजदीकी प्रशिक्षण केंद्र के संपर्क विवरण तैयार कर लिए गए हैं।",
    applicationGuideSteps: ["चरण 1: अपने नजदीकी ग्राम पंचायत कार्यालय या सीएससी (CSC) केंद्र पर जाएं और PM-AJAY कौशल प्रशिक्षण के बारे में पूछें।", "चरण 2: अपना आधार कार्ड, जाति प्रमाण पत्र और बैंक पासबुक साथ ले जाना न भूलें।", "चरण 3: अधिकारी आपका फॉर्म भरेंगे और आपको अपने चुने हुए कोर्स (जैसे: सोलर, वायरिंग) के बैच में रजिस्टर करेंगे।", "चरण 4: आपको 3 महीने की फ्री ट्रेनिंग मिलेगी, और साथ ही रोज़ाना 150 रुपये का स्टाइपेंड भी दिया जाएगा।", "चरण 5: ट्रेनिंग पूरी होने पर आपको सर्टिफिकेट और टूलकिट मिलेगा, जिससे आप अपना काम या नौकरी शुरू कर सकते हैं।"],
    questions: [
        {
            "prompt": "आपकी पढ़ाई कितनी हुई है?",
            "subtext": "(जैसे: 8वीं पास, 10वीं पास, 12वीं पास, या कोई अन्य)",
            "options": [
                "8वीं पास या कम",
                "10वीं पास",
                "12वीं पास",
                "डिप्लोमा / स्नातक"
            ]
        },
        {
            "prompt": "आप अभी क्या काम करते हैं?",
            "subtext": "(जैसे: खेती-मजदूरी, दुकान पर काम, वर्कशॉप हेल्पर, या गृहिणी)",
            "options": [
                "खेती / कृषि मजदूर",
                "दुकान / वर्कशॉप हेल्पर",
                "गृहिणी",
                "विद्यार्थी / बेरोजगार"
            ]
        },
        {
            "prompt": "आपके परिवार का ट्रेडिशनल काम क्या रहा है?",
            "subtext": "(जैसे: खेती, बढ़ईगीरी, सिलाई, दस्तकारी, या अन्य)",
            "options": [
                "खेती / किसानी",
                "बढ़ईगीरी / मिस्त्री",
                "सिलाई / कपड़ा बुनाई",
                "हस्तशिल्प / पशुपालन"
            ]
        },
        {
            "prompt": "आपको अभी कौन-कौन से काम या स्किल्स आते हैं?",
            "subtext": "(जैसे: घर की वायरिंग, सिलाई, कंप्यूटर चलाना, वाहन सुधार)",
            "options": [
                "बेसिक वायरिंग / बिजली मरम्मत",
                "सिलाई व कटाई",
                "गाड़ी सुधार / टूल्स",
                "कंप्यूटर चलाना"
            ]
        },
        {
            "prompt": "आप फ्यूचर में किस टाइप का काम सीखना चाहेंगे?",
            "subtext": "(जैसे: सोलर पावर, इलेक्ट्रिशियन, गारमेंट मेकिंग, आईटी/कंप्यूटर)",
            "options": [
                "इलेक्ट्रिशियन / बिजली काम",
                "सोलर पीवी / सोलर पंप",
                "ऑटोमोटिव / ईवी टेक्निशियन",
                "कंप्यूटर / डिजिटल सेवाएं"
            ]
        },
        {
            "prompt": "आप जॉब करना चाहते हैं या अपना काम शुरू करना चाहते हैं?",
            "subtext": "(जैसे: अपना खुद का बिजनेस / दुकान या वेतन वाली नौकरी)",
            "options": [
                "अपना खुद का काम (स्वरोजगार)",
                "वेतन वाली नौकरी (Job)",
                "दोनों में से जो भी बेहतर हो"
            ]
        },
        {
            "prompt": "आप ट्रेनिंग या काम के लिए कितनी दूर जा सकते हैं?",
            "subtext": "(जैसे: अपने गांव के पास, 25 किमी के भीतर, या पूरे जिले में)",
            "options": [
                "गांव / 10 किमी के भीतर",
                "20-25 किमी तक",
                "पूरे जिले में",
                "राज्य के किसी भी शहर में"
            ]
        },
        {
            "prompt": "आप कहाँ रहते हैं? (राज्य, जिला, ब्लॉक/गाँव)",
            "subtext": "(उदाहरण: मध्य प्रदेश, भोपाल, कोठरी)",
            "options": [
                "भोपाल, मध्य प्रदेश",
                "सीहोर, मध्य प्रदेश",
                "इंदौर, मध्य प्रदेश",
                "रायसेन, मध्य प्रदेश"
            ]
        }
    ]
  },
  bun: {
    navVoice: "🎙️ आवाज इंटरव्यू",
    navProfile: "📊 प्रोफाइल और सिफारिशें",
    navBack: "मुख्य साइट पे वापस",
    bannerTitle: "“तुमारी आवाज। तुमारे कौशल। तुमाओ मौका।”",
    bannerSub: "PM-AJAY के तहत SC लाभार्थिन के लाने AI-संचालित आवाज आजीविका और कौशल मार्गदर्शन।",
    bannerDesc: "सरकारी साथी से अपनी भाषा में बात करो। AI सहायक तुमारी पृष्ठभूमि, मौजूदा कौशल और रुचियन खों समझ के तुमारे लाने सही NSQF-अनुशंसित ट्रेनिंग और स्थानीय रोजगार खोजबे में मदद करत है।",
    journeyTitle: "पूरी आजीविका प्रक्रिया:",
    journeyCitizen: "👤 नागरिक",
    journeyVoice: "🎙️ आवाज AI",
    journeyGap: "⚡ कौशल अंतर",
    journeyTraining: "🎓 NSQF ट्रेनिंग",
    journeyLivelihood: "💼 आजीविका",
    talkCTA: "🎙️ सरकारी साथी से बात करो",
    sampleHeader: "नमूना नागरिक प्रोफाइल (जल्दी मूल्यांकन)",
    sampleDesc: "सिफारिश इंजन खों तुरतई परखबे के लाने कोऊ एक प्रोफाइल चुनो:",
    qProgress: "सवाल",
    of: "में से",
    voiceGuide: "सरकारी साथी आवाज गाइड",
    speaking: "बोल रये आंय...",
    noTyping: "टाइप करबे की जरूरत नइयां। बस सीधे बोलो।",
    repeatVoice: "🔊 आवाज दोहराओ",
    micListening: "🔴 सुन रये आंय... अपने माइक में साफ बोलो",
    micTapToSpeak: "जवाब बोलबे के लाने माइक पे क्लिक करो",
    speechRecognized: "पहचानो गओ जवाब:",
    confirmNext: "जवाब पक्को करो और आगे बढ़ो →",
    orClick: "या जवाब चुनो:",
    micIssue: "माइक में कोऊ दिक्कत है?",
    hideTyping: "टाइपिंग बॉक्स छुपाओ",
    typeAnswer: "⌨️ ईखे बजाय अपनो जवाब टाइप करो",
    typePlaceholder: "अपनो जवाब टाइप करो...",
    next: "आगे बढ़ो",
    profileTitle: "तुमारी आजीविका प्रोफाइल",
    profileSub: "तुमारे AI आवाज मूल्यांकन और पृष्ठभूमि से बनी",
    editProfile: "प्रोफाइल बदलो",
    saveProfile: "प्रोफाइल सुरक्षित करो",
    retakeInterview: "🔄 आवाज इंटरव्यू फिर से दओ",
    education: "पढ़ाई",
    currentWork: "अभी को काम",
    traditionalWork: "खानदानी काम",
    existingSkills: "मौजूदा कौशल",
    careerInterest: "करियर में रुचि",
    workPref: "रोजगार की पसंद",
    mobilityLimit: "आवागमन सीमा",
    location: "जगा",
    skillGapTitle: "तुमारी आजीविका और कौशल अंतर (Skill Gap) खों समझो",
    skillGapSub: "तुमारी प्रायोगिक क्षमतन और कौशल मानकन को विश्लेषणात्मक मूल्यांकन",
    currentSit: "1. अभी की स्थिति",
    keyStrengths: "2. मुख्य क्षमताएं",
    identifiedGaps: "3. पहचाने गए कौशल अंतर",
    recTitle: "अनुशंसित कौशल रस्ता (NSQF Pathways)",
    recSub: "तुमारी प्रोफाइल और पास के PM-AJAY GIA ट्रेनिंग केंद्रन के अनुसार",
    potentialMatch: "संभावित मैच — पक्की पात्रता आधिकारिक PM-AJAY दिशानिर्देशन के अनुसार तय होयै",
    matchScore: "मैच स्कोर",
    whyRecommended: "काय अनुशंसित?",
    outcomes: "आजीविका परिणाम:",
    viewDetailsDoc: "आजीविका जानकारी और कागज देखो →",
    roadmapTag: "रणनीतिक करियर समयरेखा",
    roadmapTitle: "तुमाओ अनुशंसित आजीविका रोडमैप",
    roadmapSub: "मौजूदा कौशल से स्थाई धंधा तक चरणबद्ध रस्ता",
    roadmapSteps: [
      { step: "1", title: "मौजूदा कौशल", desc: "प्रायोगिक अनुभव की पहचान" },
      { step: "2", title: "कौशल अंतर", desc: "सुरक्षा और तकनीकी अंतर की पहचान" },
      { step: "3", title: "NSQF ट्रेनिंग", desc: "फ्री 3-महीने को PM-AJAY GIA कोर्स" },
      { step: "4", title: "प्रमाणन", desc: "सेक्टर स्किल काउंसिल सर्टिफिकेट" },
      { step: "5", title: "स्थानीय रोजगार", desc: "अप्रेंटिसशिप या नौकरी" },
      { step: "6", title: "स्वरोजगार", desc: "मुद्रा लोन और व्यापार स्थापना" }
    ],
    ruralTitle: "ग्रामीण और कम-कनेक्टिविटी वारे क्षेत्रन के लाने बनो",
    ruralSub: "ग्राम पंचायतन में बिना कोऊ रुकावट के पहुंच",
    modalDuration: "अवधि:",
    modalEdu: "पढ़ाई:",
    modalBenefits: "PM-AJAY GIA घटक के फायदा",
    modalDocs: "जरूरी कागज की सूची",
    modalOpp: "तुमारे पास के मौका",
    getGuidance: "आवेदन मार्गदर्शन पाओ →",
    guidanceAlert: "आवेदन मार्गदर्शन तैयार! तुमारी कागज सूची और पास के ट्रेनिंग केंद्र के संपर्क विवरण तैयार कर लये गए हैं।",
    applicationGuideSteps: ["कदम 1: अपने पास के ग्राम पंचायत या सीएससी (CSC) केंद्र पे जाओ और PM-AJAY कौशल ट्रेनिंग के बारे में पूछो।", "कदम 2: अपनो आधार कार्ड, जाति प्रमान पत्र और बैंक पासबुक संगे ले जाबो न भूलियो।", "कदम 3: अधिकारी तुमाओ फॉर्म भर दई और तुमखा चुनी भई ट्रेनिंग (जैसे: सोलर, वायरिंग) में लिख लेई।", "कदम 4: तुमखा 3 महीना की फ्री ट्रेनिंग मिलहे, और संगे रोज के 150 रुपया को स्टाइपेंड भी मिलहे।", "कदम 5: ट्रेनिंग पूरी भये के बाद तुमखा सर्टिफिकेट और टूलकिट मिलहे, जासे तुम अपनो काम या नौकरी शुरू कर सकत हो।"],
    questions: [
        {
            "prompt": "तुमारी पढ़ाई कितई भई है?",
            "subtext": "(जैसे: 8वीं पास, 10वीं पास, 12वीं पास)",
            "options": [
                "8वीं पास या कम",
                "10वीं पास",
                "12वीं पास",
                "डिप्लोमा / स्नातक"
            ]
        },
        {
            "prompt": "तुम ई बखत का काम करत हो?",
            "subtext": "(जैसे: खेती-मजदूरी, दुकान पे काम, या कछू और)",
            "options": [
                "खेती / कृषि मजदूर",
                "दुकान / वर्कशॉप हेल्पर",
                "गृहिणी",
                "विद्यार्थी / बेरोजगार"
            ]
        },
        {
            "prompt": "तुमाए घरियन को पुरानो काम का आय?",
            "subtext": "(जैसे: किसानी, बढ़ईगीरी, सिलाई)",
            "options": [
                "खेती / किसानी",
                "बढ़ईगीरी / मिस्त्री",
                "सिलाई / कपड़ा बुनाई",
                "हस्तशिल्प / पशुपालन"
            ]
        },
        {
            "prompt": "तुमखा अभी का-का काम आउत है?",
            "subtext": "(जैसे: बिजली सुधराबो, कंप्यूटर चलाबो)",
            "options": [
                "बेसिक वायरिंग / बिजली मरम्मत",
                "सिलाई व कटाई",
                "गाड़ी सुधार / टूल्स",
                "कंप्यूटर चलाना"
            ]
        },
        {
            "prompt": "तुम आगे चलके का काम सीखबो चाहत हो?",
            "subtext": "(जैसे: सोलर, बिजली काम, कंप्यूटर)",
            "options": [
                "इलेक्ट्रिशियन / बिजली काम",
                "सोलर पीवी / सोलर पंप",
                "ऑटोमोटिव / ईवी टेक्निशियन",
                "कंप्यूटर / डिजिटल सेवाएं"
            ]
        },
        {
            "prompt": "तुम नौकरी करबो चाहत हो कि अपनो काम?",
            "subtext": "(जैसे: खुद को बिजनेस या नौकरी)",
            "options": [
                "अपनो काम (स्वरोजगार)",
                "नौकरी (Job)",
                "जौन भी अच्छो होय"
            ]
        },
        {
            "prompt": "तुम ट्रेनिंग खातिर कितई दूर जा सकत हो?",
            "subtext": "(जैसे: गांव के पास, 25 किमी, या जिला भर में)",
            "options": [
                "गांव / 10 किमी के भीतर",
                "20-25 किमी तक",
                "पूरे जिले में",
                "राज के कोनो शहर में"
            ]
        },
        {
            "prompt": "तुम किते रत हो? (राज, जिला, गांव)",
            "subtext": "(जैसे: मध्य प्रदेश, सागर, खुरई)",
            "options": [
                "सागर, एमपी",
                "छतरपुर, एमपी",
                "दमोह, एमपी",
                "पन्ना, एमपी"
            ]
        }
    ]
  },
  cg: {
    navVoice: "🎙️ आवाज इंटरव्यू",
    navProfile: "📊 प्रोफाइल अउ सिफारिश मन",
    navBack: "मुख्य साइट म वापस",
    bannerTitle: "“आप के अवाज। आप के कौशल। आप के मौका।”",
    bannerSub: "PM-AJAY के तहत SC हितग्राही मन बर AI-संचालित अवाज आजीविका अउ कौशल मार्गदर्शन।",
    bannerDesc: "सरकारी साथी ले अपन भाखा म बात करव। AI सहायक आप के पृष्ठभूमि, मौजूदा कौशल अउ रुचि ला समझ के आप बर सही NSQF-अनुशंसित ट्रेनिंग अउ स्थानीय रोजगार खोजे म मदद करथे।",
    journeyTitle: "पूरा आजीविका प्रक्रिया:",
    journeyCitizen: "👤 नागरिक",
    journeyVoice: "🎙️ अवाज AI",
    journeyGap: "⚡ कौशल अंतर",
    journeyTraining: "🎓 NSQF ट्रेनिंग",
    journeyLivelihood: "💼 आजीविका",
    talkCTA: "🎙️ सरकारी साथी ले बात करव",
    sampleHeader: "नमूना नागरिक प्रोफाइल (जल्दी मूल्यांकन)",
    sampleDesc: "सिफारिश इंजन ला तुरंत परखे बर कोनो एक प्रोफाइल चुनव:",
    qProgress: "सवाल",
    of: "ले",
    voiceGuide: "सरकारी साथी अवाज गाइड",
    speaking: "बोलत हंव...",
    noTyping: "टाइप करे के जरूरत नइ हे। बस सीधा बोलव।",
    repeatVoice: "🔊 अवाज दोहराव",
    micListening: "🔴 सुनत हंव... अपन माइक म साफ बोलव",
    micTapToSpeak: "जवाब बोले बर माइक म क्लिक करव",
    speechRecognized: "पहचाने गए जवाब:",
    confirmNext: "जवाब पक्का करव अउ आघू बढ़व →",
    orClick: "या जवाब चुनव:",
    micIssue: "माइक म कोनो दिक्कत हे?",
    hideTyping: "टाइपिंग बॉक्स छुपाव",
    typeAnswer: "⌨️ एकर बजाय अपन जवाब टाइप करव",
    typePlaceholder: "अपन जवाब टाइप करव...",
    next: "आघू बढ़व",
    profileTitle: "आप के आजीविका प्रोफाइल",
    profileSub: "आप के AI अवाज मूल्यांकन अउ पृष्ठभूमि ले बने",
    editProfile: "प्रोफाइल बदलाव",
    saveProfile: "प्रोफाइल सुरक्षित करव",
    retakeInterview: "🔄 अवाज इंटरव्यू फिर ले देव",
    education: "पढ़ाई",
    currentWork: "अभी के काम",
    traditionalWork: "खानदानी काम",
    existingSkills: "मौजूदा कौशल",
    careerInterest: "करियर म रुचि",
    workPref: "रोजगार के पसंद",
    mobilityLimit: "आवागमन सीमा",
    location: "जगह",
    skillGapTitle: "आप के आजीविका अउ कौशल अंतर (Skill Gap) ला समझव",
    skillGapSub: "आप के प्रायोगिक क्षमता अउ कौशल मानक के विश्लेषणात्मक मूल्यांकन",
    currentSit: "1. अभी के स्थिति",
    keyStrengths: "2. मुख्य क्षमता",
    identifiedGaps: "3. पहचाने गए कौशल अंतर",
    recTitle: "अनुशंसित कौशल रस्ता (NSQF Pathways)",
    recSub: "आप के प्रोफाइल अउ पास के PM-AJAY GIA ट्रेनिंग केंद्र के अनुसार",
    potentialMatch: "संभावित मैच — पक्का पात्रता आधिकारिक PM-AJAY दिशानिर्देश के अनुसार तय होही",
    matchScore: "मैच स्कोर",
    whyRecommended: "काबर अनुशंसित?",
    outcomes: "आजीविका परिणाम:",
    viewDetailsDoc: "आजीविका जानकारी अउ कागज देखव →",
    roadmapTag: "रणनीतिक करियर समयरेखा",
    roadmapTitle: "आप के अनुशंसित आजीविका रोडमैप",
    roadmapSub: "मौजूदा कौशल ले स्थाई धंधा तक चरणबद्ध रस्ता",
    roadmapSteps: [
      { step: "1", title: "मौजूदा कौशल", desc: "प्रायोगिक अनुभव के पहचान" },
      { step: "2", title: "कौशल अंतर", desc: "सुरक्षा अउ तकनीकी अंतर के पहचान" },
      { step: "3", title: "NSQF ट्रेनिंग", desc: "फ्री 3-महिना के PM-AJAY GIA कोर्स" },
      { step: "4", title: "प्रमाणन", desc: "सेक्टर स्किल काउंसिल सर्टिफिकेट" },
      { step: "5", title: "स्थानीय रोजगार", desc: "अप्रेंटिसशिप या नौकरी" },
      { step: "6", title: "स्वरोजगार", desc: "मुद्रा लोन अउ व्यापार स्थापना" }
    ],
    ruralTitle: "ग्रामीण अउ कम-कनेक्टिविटी वाले क्षेत्र बर बने",
    ruralSub: "ग्राम पंचायत म बिना कोनो रुकावट के पहुंच",
    modalDuration: "अवधि:",
    modalEdu: "पढ़ाई:",
    modalBenefits: "PM-AJAY GIA घटक के फायदा",
    modalDocs: "जरूरी कागज के सूची",
    modalOpp: "आप के पास के मौका",
    getGuidance: "आवेदन मार्गदर्शन पाव →",
    guidanceAlert: "आवेदन मार्गदर्शन तइयार! आप के कागज सूची अउ पास के ट्रेनिंग केंद्र के संपर्क विवरण तइयार कर ले गे हे।",
    applicationGuideSteps: ["कदम 1: अपन तीर के ग्राम पंचायत या सीएससी (CSC) केंद्र मा जाव अउ PM-AJAY कौशल ट्रेनिंग के बारे मा पुछव।", "कदम 2: अपन आधार कार्ड, जाति परमान पत्र अउ बैंक पासबुक संगे ले जाय बर झन भुलव।", "कदम 3: अधिकारी ह तुहर फॉर्म भर दिही अउ तुहर चुने गय कोर्स (जइसे: सोलर, वायरिंग) मा नांव लिख लेही।", "कदम 4: तुहला 3 महिना के फ्री ट्रेनिंग मिलही, अउ संगे-संग रोज के 150 रूपिया घलो मिलही।", "कदम 5: ट्रेनिंग पूरा होय के बाद तुहला सर्टिफिकेट अउ टूलकिट मिलही, जेकर से अपन काम या नौकरी शुरू कर सकथव।"],
    questions: [
        {
            "prompt": "तुहर पढ़ाई कतका होय हे?",
            "subtext": "(जइसे: 8वीं पास, 10वीं पास, 12वीं पास)",
            "options": [
                "8वीं पास या कम",
                "10वीं पास",
                "12वीं पास",
                "डिप्लोमा / स्नातक"
            ]
        },
        {
            "prompt": "तइहा अभी का बुता करत हस?",
            "subtext": "(जइसे: खेती-मजदूरी, दुकान मा काम)",
            "options": [
                "खेती / कृषि मजदूर",
                "दुकान / वर्कशॉप हेल्पर",
                "गृहिणी",
                "विद्यार्थी / बेरोजगार"
            ]
        },
        {
            "prompt": "तुहर परिवार के पुराना बुता का आय?",
            "subtext": "(जइसे: खेती, बढ़ई काम, सिलाई)",
            "options": [
                "खेती / किसानी",
                "बढ़ई काम / मिस्त्री",
                "सिलाई / कपड़ा बुनाई",
                "हस्तशिल्प / पशुपालन"
            ]
        },
        {
            "prompt": "तइहा अभी का-का बुता या हुनर जानथस?",
            "subtext": "(जइसे: बिजली काम, कंप्यूटर)",
            "options": [
                "बिजली काम / वायरिंग",
                "सिलाई अउ कटाई",
                "गाड़ी सुधार / टूल्स",
                "कंप्यूटर चलाना"
            ]
        },
        {
            "prompt": "तइहा आघू का बुता सीखे बर चाहथस?",
            "subtext": "(जइसे: सोलर, बिजली, कंप्यूटर)",
            "options": [
                "इलेक्ट्रिशियन / बिजली काम",
                "सोलर पीवी / सोलर पंप",
                "ऑटोमोटिव / ईवी टेक्निशियन",
                "कंप्यूटर / डिजिटल सेवाएं"
            ]
        },
        {
            "prompt": "तइहा नौकरी करे बर चाहथस या अपन बुता?",
            "subtext": "(जइसे: खुद के काम या नौकरी)",
            "options": [
                "अपन खुद के काम",
                "वेतन वाली नौकरी",
                "दोनो मा जौन बने हो"
            ]
        },
        {
            "prompt": "तइहा ट्रेनिंग बर कतका दूर जा सकथस?",
            "subtext": "(जइसे: गांव के तीर, 25 किमी)",
            "options": [
                "गांव / 10 किमी के भीतर",
                "20-25 किमी तक",
                "पूरा जिला मा",
                "राज के कोनो सहर मा"
            ]
        },
        {
            "prompt": "तइहा कहां रहिथस? (राज, जिला, गांव)",
            "subtext": "(जइसे: छत्तीसगढ़, रायपुर, अभनपुर)",
            "options": [
                "रायपुर, छ.ग.",
                "दुर्ग, छ.ग.",
                "बिलासपुर, छ.ग.",
                "बस्तर, छ.ग."
            ]
        }
    ]
  },
  sat: {
    navVoice: "🎙️ ᱟᱲᱟᱝ ᱤᱱᱴᱟᱨᱵᱷᱤᱭᱩ (Voice Interview)",
    navProfile: "📊 ᱯᱨᱚᱯᱷᱟᱭᱤᱞ ᱟᱨ ᱥᱩᱯᱟᱨᱤᱥ (Profile & Recommendations)",
    navBack: "ᱢᱩᱬᱩᱛ ᱥᱟᱭᱤᱴ ᱛᱮ ᱨᱩᱣᱟᱹᱲ (Back to Main Site)",
    bannerTitle: "“ᱟᱢᱟᱜ ᱟᱲᱟᱝ᱾ ᱟᱢᱟᱜ ᱦᱩᱱᱟᱹᱨ᱾ ᱟᱢᱟᱜ ᱫᱟᱣ᱾”",
    bannerSub: "PM-AJAY ᱟᱹᱨᱤ ᱞᱮᱠᱟᱛᱮ SC ᱦᱚᱲ ᱠᱚ ᱞᱟᱹᱜᱤᱫ AI ᱟᱲᱟᱝ ᱛᱮ ᱠᱟᱹᱢᱤ ᱟᱨ ᱦᱩᱱᱟᱹᱨ ᱫᱤᱥᱟᱹ-ᱩᱫᱩᱜ᱾",
    bannerDesc: "ᱥᱚᱨᱠᱟᱨᱤ ᱥᱟᱛᱷᱤ ᱥᱟᱞᱟᱜ ᱟᱢᱟᱜ ᱯᱟᱹᱨᱥᱤ ᱛᱮ ᱨᱚᱲ ᱢᱮ᱾ AI ᱜᱚᱲᱚᱣᱤᱡ ᱟᱢᱟᱜ ᱦᱩᱱᱟᱹᱨ ᱟᱨ ᱠᱩᱥᱤ ᱵᱩᱡᱷᱟᱹᱣ ᱠᱟᱛᱮ NSQF ᱴᱨᱮᱱᱤᱝ ᱟᱨ ᱠᱟᱹᱢᱤ ᱧᱟᱢ ᱨᱮ ᱜᱚᱲᱚᱭᱟ᱾",
    journeyTitle: "ᱜᱚᱴᱟ ᱠᱟᱹᱢᱤ ᱯᱨᱚᱠᱨᱤᱭᱟ (End-to-End Livelihood Journey):",
    journeyCitizen: "👤 ᱱᱟᱜᱟᱨᱤᱭᱟᱹ",
    journeyVoice: "🎙️ ᱟᱲᱟᱝ AI",
    journeyGap: "⚡ ᱦᱩᱱᱟᱹᱨ ᱯᱷᱟᱨᱟᱠ",
    journeyTraining: "🎓 NSQF ᱴᱨᱮᱱᱤᱝ",
    journeyLivelihood: "💼 ᱠᱟᱹᱢᱤ (Livelihood)",
    talkCTA: "🎙️ ᱥᱚᱨᱠᱟᱨᱤ ᱥᱟᱛᱷᱤ ᱥᱟᱞᱟᱜ ᱨᱚᱲ ᱢᱮ",
    sampleHeader: "ᱱᱟᱢᱩᱱᱟ ᱯᱨᱚᱯᱷᱟᱭᱤᱞ (Sample Profiles)",
    sampleDesc: "ᱢᱤᱫᱴᱟᱹᱝ ᱯᱨᱚᱯᱷᱟᱭᱤᱞ ᱵᱟᱪᱷᱟᱣ ᱢᱮ ᱟᱨ ᱪᱮᱠ ᱢᱮ:",
    qProgress: "ᱠᱩᱠᱞᱤ",
    of: "ᱨᱮᱭᱟᱜ",
    voiceGuide: "ᱥᱚᱨᱠᱟᱨᱤ ᱥᱟᱛᱷᱤ ᱟᱲᱟᱝ ᱜᱟᱭᱤᱰ",
    speaking: "ᱨᱚᱲ ᱮᱫᱟᱭ...",
    noTyping: "ᱴᱟᱭᱤᱯ ᱨᱮᱭᱟᱜ ᱫᱚᱨᱠᱟᱨ ᱵᱟᱹᱱᱩᱜᱼᱟ᱾ ᱥᱚᱡᱷᱮ ᱨᱚᱲ ᱢᱮ᱾",
    repeatVoice: "🔊 ᱟᱲᱟᱝ ᱫᱚᱦᱲᱟᱭ ᱢᱮ",
    micListening: "🔴 ᱟᱸᱡᱚᱢ ᱮᱫᱟᱹᱧ... ᱢᱟᱭᱤᱠ ᱨᱮ ᱥᱟᱯᱷᱟ ᱨᱚᱲ ᱢᱮ",
    micTapToSpeak: "ᱨᱚᱲ ᱞᱟᱹᱜᱤᱫ ᱢᱟᱭᱤᱠ ᱨᱮ ᱚᱛᱟᱭ ᱢᱮ",
    speechRecognized: "ᱟᱸᱡᱚᱢ ᱟᱠᱟᱱ ᱨᱚᱲ:",
    confirmNext: "ᱨᱚᱲ ᱯᱟᱠᱠᱟᱭ ᱢᱮ ᱟᱨ ᱢᱟᱲᱟᱝ ᱥᱮᱫ ᱪᱟᱞᱟᱜ ᱢᱮ →",
    orClick: "ᱟᱨᱵᱟᱝ ᱛᱮᱞᱟ ᱵᱟᱪᱷᱟᱣ ᱢᱮ:",
    micIssue: "ᱢᱟᱭᱤᱠ ᱨᱮ ᱮᱴᱠᱮᱴᱚᱬᱮ ᱢᱮᱱᱟᱜᱼᱟ?",
    hideTyping: "ᱴᱟᱭᱤᱯ ᱵᱚᱠᱥ ᱩᱠᱩᱭ ᱢᱮ",
    typeAnswer: "⌨️ ᱱᱚᱣᱟ ᱵᱚᱫᱚᱞ ᱛᱮ ᱛᱮᱞᱟ ᱴᱟᱭᱤᱯ ᱢᱮ",
    typePlaceholder: "ᱛᱮᱞᱟ ᱴᱟᱭᱤᱯ ᱢᱮ...",
    next: "ᱢᱟᱲᱟᱝ ᱥᱮᱫ",
    profileTitle: "ᱟᱢᱟᱜ ᱠᱟᱹᱢᱤ ᱯᱨᱚᱯᱷᱟᱭᱤᱞ",
    profileSub: "ᱟᱢᱟᱜ AI ᱟᱲᱟᱝ ᱟᱨ ᱛᱮᱞᱟ ᱠᱷᱚᱱ ᱵᱮᱱᱟᱣ ᱟᱠᱟᱱ",
    editProfile: "ᱯᱨᱚᱯᱷᱟᱭᱤᱞ ᱵᱚᱫᱚᱞ ᱢᱮ",
    saveProfile: "ᱯᱨᱚᱯᱷᱟᱭᱤᱞ ᱥᱮᱵᱽ ᱢᱮ",
    retakeInterview: "🔄 ᱟᱲᱟᱝ ᱤᱱᱴᱟᱨᱵᱷᱤᱭᱩ ᱫᱚᱦᱲᱟ ᱮᱢ ᱢᱮ",
    education: "ᱯᱟᱲᱦᱟᱣ",
    currentWork: "ᱱᱤᱛᱚᱜᱟᱜ ᱠᱟᱹᱢᱤ",
    traditionalWork: "ᱟᱹᱨᱤᱪᱟᱹᱞᱤ ᱠᱟᱹᱢᱤ",
    existingSkills: "ᱢᱮᱱᱟᱜ ᱦᱩᱱᱟᱹᱨ",
    careerInterest: "ᱠᱟᱹᱢᱤ ᱨᱮ ᱠᱩᱥᱤ",
    workPref: "ᱠᱟᱹᱢᱤ ᱨᱮᱭᱟᱜ ᱯᱚᱥᱚᱱᱫᱽ",
    mobilityLimit: "ᱥᱮᱱᱚᱜ ᱨᱮᱭᱟᱜ ᱥᱤᱢᱟᱹ",
    location: "ᱡᱟᱭᱜᱟ",
    skillGapTitle: "ᱟᱢᱟᱜ ᱦᱩᱱᱟᱹᱨ ᱯᱷᱟᱨᱟᱠ ᱵᱩᱡᱷᱟᱹᱣ ᱢᱮ (Understanding Skill Gap)",
    skillGapSub: "ᱟᱢᱟᱜ ᱦᱩᱱᱟᱹᱨ ᱟᱨ ᱫᱚᱨᱠᱟᱨᱟᱜ ᱦᱩᱱᱟᱹᱨ ᱨᱮᱭᱟᱜ ᱯᱷᱟᱨᱟᱠ",
    currentSit: "1. ᱱᱤᱛᱚᱜᱟᱜ ᱚᱵᱚᱥᱛᱟ",
    keyStrengths: "2. ᱢᱩᱬᱩᱛ ᱫᱟᱲᱮ",
    identifiedGaps: "3. ᱧᱟᱢ ᱟᱠᱟᱱ ᱦᱩᱱᱟᱹᱨ ᱯᱷᱟᱨᱟᱠ",
    recTitle: "ᱥᱩᱯᱟᱨᱤᱥ ᱟᱠᱟᱱ ᱦᱩᱱᱟᱹᱨ ᱦᱚᱨ (NSQF Pathways)",
    recSub: "ᱟᱢᱟᱜ ᱯᱨᱚᱯᱷᱟᱭᱤᱞ ᱟᱨ ᱥᱩᱨ ᱨᱮᱭᱟᱜ PM-AJAY GIA ᱴᱨᱮᱱᱤᱝ ᱥᱮᱱᱴᱟᱨ ᱞᱮᱠᱟᱛᱮ",
    potentialMatch: "ᱥᱚᱢᱵᱷᱟᱵᱤᱛ ᱢᱮᱪ — PM-AJAY ᱟᱹᱨᱤ ᱞᱮᱠᱟᱛᱮ ᱯᱟᱠᱠᱟ ᱦᱩᱭᱩᱜᱼᱟ",
    matchScore: "ᱢᱮᱪ ᱥᱠᱳᱨ",
    whyRecommended: "ᱪᱮᱫᱟᱜ ᱥᱩᱯᱟᱨᱤᱥ ᱟᱠᱟᱱᱟ?",
    outcomes: "ᱠᱟᱹᱢᱤ ᱨᱮᱭᱟᱜ ᱚᱨᱡᱚ:",
    viewDetailsDoc: "ᱠᱟᱹᱢᱤ ᱨᱮᱭᱟᱜ ᱵᱤᱵᱚᱨᱚᱱ ᱟᱨ ᱠᱟᱜᱚᱡᱽ ᱧᱮᱞ ᱢᱮ →",
    roadmapTag: "ᱠᱟᱹᱢᱤ ᱨᱮᱭᱟᱜ ᱴᱟᱭᱤᱢᱞᱟᱭᱤᱱ",
    roadmapTitle: "ᱟᱢᱟᱜ ᱠᱟᱹᱢᱤ ᱨᱮᱭᱟᱜ ᱨᱳᱰᱢᱮᱯ",
    roadmapSub: "ᱢᱮᱱᱟᱜ ᱦᱩᱱᱟᱹᱨ ᱠᱷᱚᱱ ᱯᱟᱠᱠᱟ ᱠᱟᱹᱢᱤ ᱫᱷᱟᱹᱵᱤᱡ ᱦᱚᱨ",
    roadmapSteps: [
      { step: "1", title: "ᱢᱮᱱᱟᱜ ᱦᱩᱱᱟᱹᱨ", desc: "ᱟᱢᱟᱜ ᱦᱩᱱᱟᱹᱨ ᱨᱮᱭᱟᱜ ᱩᱯᱨᱩᱢ" },
      { step: "2", title: "ᱦᱩᱱᱟᱹᱨ ᱯᱷᱟᱨᱟᱠ", desc: "ᱴᱮᱠᱱᱤᱠᱟᱞ ᱯᱷᱟᱨᱟᱠ ᱨᱮᱭᱟᱜ ᱩᱯᱨᱩᱢ" },
      { step: "3", title: "NSQF ᱴᱨᱮᱱᱤᱝ", desc: "ᱯᱷᱨᱤ ᱓-ᱪᱟᱸᱫᱚ ᱨᱮᱭᱟᱜ PM-AJAY GIA ᱠᱳᱨᱥ" },
      { step: "4", title: "ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ", desc: "ᱥᱮᱠᱴᱚᱨ ᱥᱠᱤᱞ ᱠᱟᱣᱩᱱᱥᱤᱞ ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ" },
      { step: "5", title: "ᱥᱩᱨ ᱨᱮ ᱠᱟᱹᱢᱤ", desc: "ᱮᱯᱨᱮᱱᱴᱤᱥᱥᱤᱯ ᱟᱨᱵᱟᱝ ᱪᱟᱹᱠᱨᱤ" },
      { step: "6", title: "ᱟᱡᱟᱜ ᱵᱮᱯᱟᱨ", desc: "ᱢᱩᱫᱽᱨᱟ ᱞᱳᱱ ᱟᱨ ᱵᱮᱯᱟᱨ ᱮᱦᱚᱵ" }
    ],
    ruralTitle: "ᱟᱹᱛᱩ ᱟᱨ ᱠᱚᱢ-ᱠᱚᱱᱮᱠᱴᱤᱵᱷᱤᱴᱤ ᱡᱟᱭᱜᱟ ᱞᱟᱹᱜᱤᱫ ᱵᱮᱱᱟᱣ ᱟᱠᱟᱱᱟ",
    ruralSub: "ᱜᱨᱟᱢ ᱯᱚᱧᱪᱟᱭᱚᱛ ᱨᱮ ᱵᱤᱱᱟᱹ ᱮᱴᱠᱮᱴᱚᱬᱮ ᱛᱮ ᱧᱟᱢᱚᱜᱼᱟ",
    modalDuration: "ᱚᱠᱛᱚ:",
    modalEdu: "ᱯᱟᱲᱦᱟᱣ:",
    modalBenefits: "PM-AJAY GIA ᱨᱮᱭᱟᱜ ᱯᱷᱟᱭᱫᱟ",
    modalDocs: "ᱫᱚᱨᱠᱟᱨᱟᱜ ᱠᱟᱜᱚᱡᱽ ᱨᱮᱭᱟᱜ ᱞᱤᱥᱴ",
    modalOpp: "ᱟᱢ ᱥᱩᱨ ᱨᱮ ᱫᱟᱣ",
    getGuidance: "ᱮᱯᱞᱤᱠᱮᱥᱚᱱ ᱜᱟᱭᱤᱰᱟᱱᱥ ᱧᱟᱢ ᱢᱮ →",
    guidanceAlert: "ᱮᱯᱞᱤᱠᱮᱥᱚᱱ ᱜᱟᱭᱤᱰᱟᱱᱥ ᱨᱮᱰᱤ ᱜᱮᱭᱟ! ᱟᱢᱟᱜ ᱠᱟᱜᱚᱡᱽ ᱞᱤᱥᱴ ᱟᱨ ᱥᱩᱨ ᱴᱨᱮᱱᱤᱝ ᱥᱮᱱᱴᱟᱨ ᱨᱮᱭᱟᱜ ᱰᱤᱴᱮᱞᱥ ᱨᱮᱰᱤ ᱟᱠᱟᱱᱟ᱾",
    applicationGuideSteps: ["ᱯᱚᱫᱚᱠ ᱑: ᱟᱯᱮᱭᱟᱜ ᱥᱩᱨ ᱨᱮᱱᱟᱜ ᱜᱨᱟᱢ ᱯᱚᱸᱪᱟᱭᱚᱛ ᱥᱮ CSC ᱥᱮᱱᱴᱟᱨ ᱪᱟᱞᱟᱣ ᱠᱟᱛᱮ PM-AJAY ᱥᱠᱤᱞ ᱴᱨᱮᱱᱤᱝ ᱵᱟᱵᱚᱛ ᱠᱩᱞᱤ ᱯᱮ᱾", "ᱯᱚᱫᱚᱠ ᱒: ᱟᱯᱮᱭᱟᱜ ᱟᱫᱷᱟᱨ ᱠᱟᱨᱰ, ᱡᱟᱹᱛᱤ ᱯᱨᱚᱢᱟᱱ ᱯᱚᱛᱨᱚ ᱟᱨ ᱵᱮᱸᱠ ᱯᱟᱥᱵᱩᱠ ᱤᱫᱤ ᱟᱞᱚᱯᱮ ᱦᱤᱲᱤᱧᱟ᱾", "ᱯᱚᱫᱚᱠ ᱓: ᱚᱯᱷᱤᱥᱟᱨ ᱟᱯᱮᱭᱟᱜ ᱯᱷᱚᱨᱢᱮ ᱯᱮᱨᱮᱡᱟ ᱟᱨ ᱟᱯᱮᱭᱟᱜ ᱠᱩᱥᱤ ᱠᱳᱨᱥ (ᱡᱮᱞᱮᱠᱟ: ᱥᱳᱞᱟᱨ, ᱣᱟᱭᱨᱤᱝ) ᱨᱮ ᱧᱩᱛᱩᱢᱮ ᱚᱞᱟ᱾", "ᱯᱚᱫᱚᱠ ᱔: ᱟᱯᱮ ᱓ ᱪᱟᱸᱫᱚ ᱨᱮᱱᱟᱜ ᱯᱷᱨᱤ ᱴᱨᱮᱱᱤᱝ ᱯᱮ ᱧᱟᱢᱟ ᱟᱨ ᱫᱤᱱᱟᱹᱢ ᱑᱕᱐ ᱴᱟᱠᱟ ᱵᱷᱟᱛᱛᱟ ᱦᱚᱸ ᱯᱮ ᱧᱟᱢᱟ᱾", "ᱯᱚᱫᱚᱠ ᱕: ᱴᱨᱮᱱᱤᱝ ᱯᱩᱨᱟᱹᱣ ᱞᱮᱱᱠᱷᱟᱱ ᱥᱟᱨᱴᱤᱯᱷᱤᱠᱮᱴ ᱟᱨ ᱴᱩᱞᱠᱤᱴ ᱯᱮ ᱧᱟᱢᱟ, ᱡᱟᱦᱟᱸ ᱛᱮ ᱟᱯᱱᱟᱨᱟᱜ ᱠᱟᱹᱢᱤ ᱯᱮ ᱮᱛᱚᱦᱚᱵ ᱫᱟᱲᱮᱭᱟᱜᱼᱟ᱾"],
    questions: [
        {
            "prompt": "ᱟᱢᱟᱜ ᱚᱞ ᱯᱟᱲᱦᱟᱣ ᱫᱚ ᱛᱤᱱᱟᱹᱜ ᱦᱩᱭ ᱟᱠᱟᱱᱟ?",
            "subtext": "(ᱡᱮᱞᱮᱠᱟ: ᱘ ᱯᱟᱥ, ᱑᱐ ᱯᱟᱥ, ᱑᱒ ᱯᱟᱥ)",
            "options": [
                "᱘ ᱯᱟᱥ ᱥᱮ ᱠᱚᱢ",
                "᱑᱐ ᱯᱟᱥ",
                "᱑᱒ ᱯᱟᱥ",
                "ᱰᱤᱯᱞᱚᱢᱟ / ᱜᱨᱮᱡᱩᱭᱮᱴ"
            ]
        },
        {
            "prompt": "ᱟᱢ ᱱᱤᱛᱚᱜ ᱪᱮᱫ ᱠᱟᱹᱢᱤᱭᱮᱫᱟ?",
            "subtext": "(ᱡᱮᱞᱮᱠᱟ: ᱠᱷᱮᱛ ᱠᱟᱹᱢᱤ, ᱫᱚᱠᱟᱱ ᱠᱟᱹᱢᱤ)",
            "options": [
                "ᱪᱟᱥ / ᱠᱷᱮᱛ ᱠᱟᱹᱢᱤ",
                "ᱫᱚᱠᱟᱱ / ᱣᱚᱨᱠᱥᱚᱯ ᱦᱮᱞᱯᱟᱨ",
                "ᱚᱲᱟᱜ ᱦᱚᱲ",
                "ᱯᱟᱹᱴᱷᱩᱣᱟᱹ / ᱵᱮᱨᱚᱡᱽᱜᱟᱨ"
            ]
        },
        {
            "prompt": "ᱟᱯᱮ ᱚᱲᱟᱜ ᱨᱮᱱᱟᱜ ᱢᱟᱨᱮ ᱠᱟᱹᱢᱤ ᱫᱚ ᱪᱮᱫ ᱠᱟᱱᱟ?",
            "subtext": "(ᱡᱮᱞᱮᱠᱟ: ᱪᱟᱥ, ᱥᱤᱞᱟᱹᱭ, ᱠᱟᱴ ᱠᱟᱹᱢᱤ)",
            "options": [
                "ᱪᱟᱥ ᱠᱟᱹᱢᱤ",
                "ᱠᱟᱴ ᱠᱟᱹᱢᱤ / ᱢᱤᱥᱛᱨᱤ",
                "ᱥᱤᱞᱟᱹᱭ ᱠᱟᱹᱢᱤ",
                "ᱦᱟᱥᱛᱥᱤᱞᱯ / ᱯᱚᱥᱩᱯᱟᱞᱚᱱ"
            ]
        },
        {
            "prompt": "ᱟᱢ ᱱᱤᱛᱚᱜ ᱪᱮᱫ ᱠᱚ ᱠᱟᱹᱢᱤ ᱵᱟᱰᱟᱭᱟ?",
            "subtext": "(ᱡᱮᱞᱮᱠᱟ: ᱵᱤᱡᱽᱞᱤ ᱠᱟᱹᱢᱤ, ᱠᱚᱢᱯᱭᱩᱴᱟᱨ)",
            "options": [
                "ᱵᱤᱡᱽᱞᱤ ᱠᱟᱹᱢᱤ",
                "ᱥᱤᱞᱟᱹᱭ ᱠᱟᱹᱢᱤ",
                "ᱜᱟᱹᱰᱤ ᱵᱮᱱᱟᱣ",
                "ᱠᱚᱢᱯᱭᱩᱴᱟᱨ ᱪᱟᱞᱟᱣ"
            ]
        },
        {
            "prompt": "ᱟᱢ ᱟᱜᱟᱢ ᱨᱮ ᱪᱮᱫ ᱠᱟᱹᱢᱤ ᱪᱮᱫᱚᱜ ᱥᱟᱱᱟᱢ ᱠᱟᱱᱟ?",
            "subtext": "(ᱡᱮᱞᱮᱠᱟ: ᱥᱳᱞᱟᱨ, ᱵᱤᱡᱽᱞᱤ, ᱠᱚᱢᱯᱭᱩᱴᱟᱨ)",
            "options": [
                "ᱵᱤᱡᱽᱞᱤ ᱠᱟᱹᱢᱤ",
                "ᱥᱳᱞᱟᱨ ᱯᱤᱵᱷᱤ",
                "ᱚᱴᱚᱢᱚᱴᱤᱵᱷ ᱠᱟᱹᱢᱤ",
                "ᱠᱚᱢᱯᱭᱩᱴᱟᱨ ᱠᱟᱹᱢᱤ"
            ]
        },
        {
            "prompt": "ᱟᱢ ᱪᱟᱹᱠᱨᱤ ᱥᱟᱱᱟᱢ ᱠᱟᱱᱟ ᱥᱮ ᱟᱢᱟᱜ ᱠᱟᱹᱢᱤ ᱮᱛᱚᱦᱚᱵ ᱥᱟᱱᱟᱢ ᱠᱟᱱᱟ?",
            "subtext": "(ᱡᱮᱞᱮᱠᱟ: ᱟᱯᱱᱟᱨᱟᱜ ᱵᱮᱯᱟᱨ ᱥᱮ ᱪᱟᱹᱠᱨᱤ)",
            "options": [
                "ᱟᱯᱱᱟᱨᱟᱜ ᱠᱟᱹᱢᱤ",
                "ᱪᱟᱹᱠᱨᱤ",
                "ᱡᱟᱦᱟᱸᱴᱟᱜ ᱜᱮ ᱵᱷᱟᱹᱜᱤᱭᱟ"
            ]
        },
        {
            "prompt": "ᱟᱢ ᱴᱨᱮᱱᱤᱝ ᱞᱟᱹᱜᱤᱫ ᱛᱤᱱᱟᱹᱜ ᱥᱟᱺᱜᱤᱧ ᱪᱟᱞᱟᱣ ᱫᱟᱲᱮᱭᱟᱜ-ᱟ?",
            "subtext": "(ᱡᱮᱞᱮᱠᱟ: ᱟᱹᱛᱩ ᱥᱩᱨ, ᱒᱕ ᱠᱤᱢᱤ)",
            "options": [
                "ᱟᱹᱛᱩ / ᱑᱐ ᱠᱤᱢᱤ ᱵᱷᱤᱛᱨᱤ ᱨᱮ",
                "᱒᱐-᱒᱕ ᱠᱤᱢᱤ ᱫᱷᱟᱹᱵᱤᱡ",
                "ᱜᱚᱴᱟ ᱡᱤᱞᱟ ᱨᱮ",
                "ᱯᱚᱱᱚᱛ ᱨᱮᱱᱟᱜ ᱡᱟᱦᱟᱸ ᱥᱚᱦᱚᱨ ᱨᱮᱜᱮ"
            ]
        },
        {
            "prompt": "ᱟᱢ ᱚᱠᱟᱨᱮ ᱛᱟᱦᱮᱸᱱ ᱠᱟᱱᱟ? (ᱯᱚᱱᱚᱛ, ᱡᱤᱞᱟ, ᱟᱹᱛᱩ)",
            "subtext": "(ᱡᱮᱞᱮᱠᱟ: ᱡᱷᱟᱨᱠᱷᱚᱸᱰ, ᱨᱟᱺᱪᱤ, ᱠᱷᱩᱸᱴᱤ)",
            "options": [
                "ᱨᱟᱺᱪᱤ, ᱡᱷᱟᱨᱠᱷᱚᱸᱰ",
                "ᱫᱩᱢᱠᱟᱹ, ᱡᱷᱟᱨᱠᱷᱚᱸᱰ",
                "ᱡᱟᱢᱥᱮᱫᱽᱯᱩᱨ, ᱡᱷᱟᱨᱠᱷᱚᱸᱰ",
                "ᱵᱚᱠᱟᱨᱚ, ᱡᱷᱟᱨᱠᱷᱚᱸᱰ"
            ]
        }
    ]
  },
  spv: {
    navVoice: "🎙️ Voice Interview",
    navProfile: "📊 Profile & Recommendations",
    navBack: "Main Site ku pherantu",
    bannerTitle: "“Apankara Swara. Apankara Dakhayata. Apankara Sujoga.”",
    bannerSub: "PM-AJAY adhinare SC beneficiary mananka pain AI-parichalita voice livelihood mapping.",
    bannerDesc: "AJAY Sathi saha apankara nijar bhashare katha huantu. AI apankara dakhayata, agraha ku bujhi sathi NSQF-aligned training au sthaniya niyukti khojibare sahajya kariba.",
    journeyTitle: "Sampurna Livelihood Journey:",
    journeyCitizen: "👤 Nagarik",
    journeyVoice: "🎙️ Voice AI",
    journeyGap: "⚡ Dakhayata gap",
    journeyTraining: "🎓 NSQF Training",
    journeyLivelihood: "💼 Jibika",
    talkCTA: "🎙️ AJAY Sathi saha katha huantu",
    sampleHeader: "Namoona Profile (Quick Assessment)",
    sampleDesc: "Recommendation engine ku jancha kariba pain eka namoona banchhantu:",
    qProgress: "Prashna",
    of: "ru",
    voiceGuide: "AJAY Sathi Voice Guide",
    speaking: "Kahuchhi...",
    noTyping: "Type karibara darkar nahi. Seधा katha huantu.",
    repeatVoice: "🔊 Swara punarbruti karantu",
    micListening: "🔴 Sunuchhi... Mic re spasta kahantu",
    micTapToSpeak: "Uttara deba pain mic re click karantu",
    speechRecognized: "Chinha jaithiba swara:",
    confirmNext: "Uttara nischita karantu au agaku badhantu →",
    orClick: "Kimba uttara bachhantu:",
    micIssue: "Mic re samasya achhi ki?",
    hideTyping: "Type box lukauchhi",
    typeAnswer: "⌨️ Type kari uttara diantu",
    typePlaceholder: "Apankara uttara type karantu...",
    next: "Agaku",
    profileTitle: "Apankara Livelihood Profile",
    profileSub: "AI voice assessment ru prastuta",
    editProfile: "Profile sampadana karantu",
    saveProfile: "Profile save karantu",
    retakeInterview: "🔄 Voice Interview punarbar diantu",
    education: "Shikhya",
    currentWork: "Bortoman Kama",
    traditionalWork: "Paramparika Kama",
    existingSkills: "Bortoman Dakhayata",
    careerInterest: "Career Agraha",
    workPref: "Kama Pasand",
    mobilityLimit: "Jibara Sima",
    location: "Sthana",
    skillGapTitle: "Apankara Dakhayata Gap bujhantu",
    skillGapSub: "Prayogika dakhayata au manaka ra mulyankana",
    currentSit: "1. Bortoman Sthiti",
    keyStrengths: "2. Mukhya Dakhayata",
    identifiedGaps: "3. Chihnat Gap",
    recTitle: "Anumodita NSQF Pathways",
    recSub: "Apankara profile au sthaniya PM-AJAY kendra anusare",
    potentialMatch: "Sambhabya Match — PM-AJAY niyamabali anusare chudanta",
    matchScore: "Match Score",
    whyRecommended: "Kanhiki anumodita?",
    outcomes: "Jibika Phala:",
    viewDetailsDoc: "Bibarani au Kagajapatra dekhantu →",
    roadmapTag: "Career Timeline",
    roadmapTitle: "Apankara Jibika Roadmap",
    roadmapSub: "Bortoman dakhayata ru sthayi byabasaya paryanta",
    roadmapSteps: [
      { step: "1", title: "Bortoman Dakhayata", desc: "Anubhaba ra chihnat" },
      { step: "2", title: "Dakhayata Gap", desc: "Techanical gap chihnat" },
      { step: "3", title: "NSQF Training", desc: "Maganare 3-masa PM-AJAY GIA course" },
      { step: "4", title: "Pramanapatra", desc: "Sector Skill Council Certificate" },
      { step: "5", title: "Sthaniya Kama", desc: "Apprenticeship kimba chakiri" },
      { step: "6", title: "Swayam Nijukti", desc: "Mudra loan au byabasaya" }
    ],
    ruralTitle: "Grama au kam-connectivity anchala pain nirmit",
    ruralSub: "Grama Panchayat re bina badhare upalabdha",
    modalDuration: "Samaya:",
    modalEdu: "Shikhya:",
    modalBenefits: "PM-AJAY GIA Labha",
    modalDocs: "Darakari Kagajapatra",
    modalOpp: "Apankara pakha sujoga",
    getGuidance: "Abedana Margadarshan paantu →",
    guidanceAlert: "Abedana Margadarshan prastuta! Kagajapatra list au sthaniya kendra ra bibarani prastuta achhi.",
    applicationGuideSteps: ["Step 1: Apankara pakhare thiba Gram Panchayat ba CSC center ku jaantu au PM-AJAY skill training bisayare pacharantu.", "Step 2: Nija Aadhaar Card, jati pramana patra au bank passbook sange neba pain bhulantu nahi.", "Step 3: Adhikari apankara form purana karibe au bachhi thiba course (jemiti: solar, wiring) re na lekhibe.", "Step 4: Apananku 3 masa ra magana training miliba au dina ku 150 tanka bhatta bi miliba.", "Step 5: Training sariba pare apananku certificate au toolkit miliba, jouthire apan nija kama ba chakiri aarambha kariparibe."],
    questions: [
        {
            "prompt": "Apankara patha padha kete hoichi?",
            "subtext": "(Jemiti: 8th pass, 10th pass, 12th pass)",
            "options": [
                "8th pass ba kam",
                "10th pass",
                "12th pass",
                "Diploma / Graduate"
            ]
        },
        {
            "prompt": "Apan ebe kana kama karuchanti?",
            "subtext": "(Jemiti: chasa-muliya, dokan kama)",
            "options": [
                "Chasa / Krushi majulia",
                "Dokan / Workshop helper",
                "Gruhini",
                "Chhatra / Berojgar"
            ]
        },
        {
            "prompt": "Apankara paribarara puruna kama kana?",
            "subtext": "(Jemiti: chasa, badhei kama, silai)",
            "options": [
                "Chasa",
                "Badhei kama / Mistri",
                "Silai kama",
                "Hastashilpa / Pashupalana"
            ]
        },
        {
            "prompt": "Apanaku ebe kana kana kama ba dakhayata asuchi?",
            "subtext": "(Jemiti: bijuli kama, computer)",
            "options": [
                "Bijuli kama / Wiring",
                "Silai o katai",
                "Gadi maramati / Tools",
                "Computer chaliba"
            ]
        },
        {
            "prompt": "Apan bhabisyat re kana kama sikhaba pain chahunchanti?",
            "subtext": "(Jemiti: solar, electrician, computer)",
            "options": [
                "Electrician / Bijuli kama",
                "Solar PV / Solar pump",
                "Automotive / EV technician",
                "Computer / Digital services"
            ]
        },
        {
            "prompt": "Apan chakiri kariba pain chahunchanti ki nija kama?",
            "subtext": "(Jemiti: nija byabasa ki chakiri)",
            "options": [
                "Nija byabasa",
                "Chakiri",
                "Jeunthi bhala heba"
            ]
        },
        {
            "prompt": "Apan training pain kete dura jaiparibe?",
            "subtext": "(Jemiti: gaon pakhare, 25 km)",
            "options": [
                "Gaon / 10 km bhitare",
                "20-25 km parjyanta",
                "Pura jilla re",
                "Rajyara je kounasi sahara re"
            ]
        },
        {
            "prompt": "Apan kouthi rahunchanti? (Rajya, jilla, gaon)",
            "subtext": "(Jemiti: Odisha, Sambalpur, Rengali)",
            "options": [
                "Sambalpur, Odisha",
                "Bargarh, Odisha",
                "Jharsuguda, Odisha",
                "Bolangir, Odisha"
            ]
        }
    ]
  },
  mr: {
    navVoice: "🎙️ व्हॉइस इंटरव्ह्यू",
    navProfile: "📊 प्रोफाइल आणि शिफारसी",
    navBack: "मुख्य साइटवर परत",
    bannerTitle: "“तुमचा आवाज. तुमचे कौशल्य. तुमची संधी.”",
    bannerSub: "PM-AJAY अंतर्गत SC लाभार्थ्यांसाठी AI-आधारित व्हॉइस उपजीविका आणि कौशल्य मार्गदर्शन.",
    bannerDesc: "सरकारी साथी सोबत तुमच्या भाषेत बोला. AI सहाय्यक तुमची पार्श्वभूमी, कौशल्ये आणि आवडी समजून घेऊन तुम्हाला योग्य NSQF-शिफारस केलेले प्रशिक्षण आणि स्थानिक रोजगार शोधण्यात मदत करतो.",
    journeyTitle: "संपूर्ण उपजीविका प्रक्रिया:",
    journeyCitizen: "👤 नागरिक",
    journeyVoice: "🎙️ व्हॉइस AI",
    journeyGap: "⚡ कौशल्य तफावत",
    journeyTraining: "🎓 NSQF प्रशिक्षण",
    journeyLivelihood: "💼 उपजीविका",
    talkCTA: "🎙️ सरकारी साथी सोबत बोला",
    sampleHeader: "नमुना नागरिक प्रोफाइल (त्वरित मूल्यांकन)",
    sampleDesc: "शिफारस इंजिन तपासण्यासाठी कोणतेही एक प्रोफाइल निवडा:",
    qProgress: "प्रश्न",
    of: "पैकी",
    voiceGuide: "सरकारी साथी व्हॉइस मार्गदर्शक",
    speaking: "बोलत आहे...",
    noTyping: "टाईप करण्याची आवश्यकता नाही. फक्त नैसर्गिकरित्या बोला.",
    repeatVoice: "🔊 आवाज पुन्हा ऐका",
    micListening: "🔴 ऐकत आहे... तुमच्या माईकमध्ये स्पष्ट बोला",
    micTapToSpeak: "उत्तर बोलण्यासाठी माईकवर क्लिक करा",
    speechRecognized: "ओळखलेले उत्तर:",
    confirmNext: "उत्तर निश्चित करा आणि पुढे जा →",
    orClick: "किंवा उत्तर निवडा:",
    micIssue: "माईकमध्ये समस्या आहे?",
    hideTyping: "टायपिंग बॉक्स लपवा",
    typeAnswer: "⌨️ त्याऐवजी तुमचे उत्तर टाईप करा",
    typePlaceholder: "तुमचे उत्तर टाईप करा...",
    next: "पुढे",
    profileTitle: "तुमची उपजीविका प्रोफाइल",
    profileSub: "तुमच्या AI व्हॉइस मूल्यांकन आणि पार्श्वभूमीवरून तयार केलेली",
    editProfile: "प्रोफाइल संपादित करा",
    saveProfile: "प्रोफाइल सेव्ह करा",
    retakeInterview: "🔄 व्हॉइस इंटरव्ह्यू पुन्हा द्या",
    education: "शिक्षण",
    currentWork: "सध्याचे काम",
    traditionalWork: "पारंपारिक काम",
    existingSkills: "सध्याचे कौशल्य",
    careerInterest: "करिअरची आवड",
    workPref: "रोजगाराची पसंती",
    mobilityLimit: "प्रवासाची मर्यादा",
    location: "ठिकाण",
    skillGapTitle: "तुमची उपजीविका आणि कौशल्य तफावत (Skill Gap) समजून घ्या",
    skillGapSub: "प्रायोगिक क्षमता विरुद्ध कौशल्य मानकांचे विश्लेषणात्मक मूल्यांकन",
    currentSit: "1. सद्यस्थिती",
    keyStrengths: "2. मुख्य क्षमता",
    identifiedGaps: "3. ओळखलेली कौशल्य तफावत",
    recTitle: "शिफारस केलेले कौशल्य मार्ग (NSQF Pathways)",
    recSub: "तुमच्या प्रोफाइल आणि स्थानिक PM-AJAY GIA केंद्रांनुसार",
    potentialMatch: "संभाव्य जुळणी — अंतिम पात्रता अधिकृत PM-AJAY मार्गदर्शक तत्त्वांनुसार तपासली जाईल",
    matchScore: "मॅच स्कोअर",
    whyRecommended: "का शिफारस केली?",
    outcomes: "उपजीविकेचे परिणाम:",
    viewDetailsDoc: "उपजीविकेचे तपशील आणि कागदपत्रे पहा →",
    roadmapTag: "धोरणात्मक करिअर टाइमलाइन",
    roadmapTitle: "तुमचा शिफारस केलेला उपजीविका रोडमॅप",
    roadmapSub: "सध्याच्या कौशल्यापासून शाश्वत व्यवसायापर्यंतचा टप्प्याटप्प्याने मार्ग",
    roadmapSteps: [
      { step: "1", title: "सध्याचे कौशल्य", desc: "प्रायोगिक अनुभवाची ओळख" },
      { step: "2", title: "कौशल्य तफावत", desc: "तांत्रिक तफावतीची ओळख" },
      { step: "3", title: "NSQF प्रशिक्षण", desc: "मोफत ३-महिन्यांचा PM-AJAY GIA कोर्स" },
      { step: "4", title: "प्रमाणन", desc: "सेक्टर स्किल कौन्सिल प्रमाणपत्र" },
      { step: "5", title: "स्थानिक रोजगार", desc: "शिकाऊ उमेदवारी किंवा नोकरी" },
      { step: "6", title: "स्वयंरोजगार", desc: "मुद्रा कर्ज आणि व्यवसाय उभारणी" }
    ],
    ruralTitle: "ग्रामीण आणि कमी-कनेक्टिव्हिटी क्षेत्रांसाठी बनवलेले",
    ruralSub: "ग्रामपंचायतींमध्ये विनाअडथळा प्रवेश",
    modalDuration: "कालावधी:",
    modalEdu: "शिक्षण:",
    modalBenefits: "PM-AJAY GIA घटकाचे फायदे",
    modalDocs: "आवश्यक कागदपत्रांची यादी",
    modalOpp: "तुमच्या जवळच्या संधी",
    getGuidance: "अर्ज मार्गदर्शन मिळवा →",
    guidanceAlert: "अर्ज मार्गदर्शन तयार! तुमची कागदपत्रांची यादी आणि जवळच्या प्रशिक्षण केंद्राचे संपर्क तपशील तयार केले आहेत.",
    applicationGuideSteps: ["पायरी १: तुमच्या जवळच्या ग्रामपंचायत कार्यालय किंवा सीएससी (CSC) केंद्रावर जा आणि PM-AJAY कौशल्य प्रशिक्षणाबद्दल विचारा.", "पायरी २: तुमचे आधार कार्ड, जातीचा दाखला आणि बँक पासबुक सोबत नेण्यास विसरू नका.", "पायरी ३: अधिकारी तुमचा फॉर्म भरतील आणि तुम्हाला तुम्ही निवडलेल्या कोर्समध्ये (उदा: सोलर, वायरिंग) नोंदणी करतील.", "पायरी ४: तुम्हाला ३ महिन्यांचे मोफत प्रशिक्षण मिळेल आणि दररोज १५० रुपये विद्यावेतन दिले जाईल.", "पायरी ५: प्रशिक्षण पूर्ण झाल्यावर तुम्हाला प्रमाणपत्र आणि टूलकिट मिळेल, ज्यातून तुम्ही स्वतःचे काम किंवा नोकरी सुरू करू शकता."],
    questions: [
        {
            "prompt": "तुमचे शिक्षण किती झाले आहे?",
            "subtext": "(उदा: ८वी पास, १०वी पास, १२वी पास)",
            "options": [
                "८वी पास किंवा कमी",
                "१०वी पास",
                "१२वी पास",
                "डिप्लोमा / पदवीधर"
            ]
        },
        {
            "prompt": "तुम्ही सध्या काय काम करता?",
            "subtext": "(उदा: शेती-मजुरी, दुकानात काम)",
            "options": [
                "शेती / कृषी मजूर",
                "दुकान / वर्कशॉप हेल्पर",
                "गृहिणी",
                "विद्यार्थी / बेरोजगार"
            ]
        },
        {
            "prompt": "तुमच्या कुटुंबाचे पारंपारिक काम काय आहे?",
            "subtext": "(उदा: शेती, सुतारकाम, शिवणकाम)",
            "options": [
                "शेती",
                "सुतारकाम / गवंडी",
                "शिवणकाम / विणकाम",
                "हस्तकला / पशुपालन"
            ]
        },
        {
            "prompt": "तुम्हाला सध्या कोणकोणती कामे किंवा कौशल्ये येतात?",
            "subtext": "(उदा: वायरिंग, कॉम्प्युटर)",
            "options": [
                "बेसिक वायरिंग / दुरुस्ती",
                "शिवणकाम व कटिंग",
                "वाहन दुरुस्ती / टूल्स",
                "कॉम्प्युटर चालवणे"
            ]
        },
        {
            "prompt": "तुम्हाला भविष्यात कोणत्या प्रकारचे काम शिकायला आवडेल?",
            "subtext": "(उदा: सोलर, इलेक्ट्रिशियन, कॉम्प्युटर)",
            "options": [
                "इलेक्ट्रिशियन / विजेचे काम",
                "सोलर पीव्ही / सोलर पंप",
                "ऑटोमोटिव्ह / ईव्ही टेक्निशियन",
                "कॉम्प्युटर / डिजिटल सेवा"
            ]
        },
        {
            "prompt": "तुम्हाला नोकरी करायची आहे की स्वतःचा व्यवसाय सुरू करायचा आहे?",
            "subtext": "(उदा: स्वतःचा व्यवसाय किंवा नोकरी)",
            "options": [
                "स्वतःचा व्यवसाय",
                "पगारी नोकरी",
                "दोन्हींपैकी जे चांगले असेल"
            ]
        },
        {
            "prompt": "तुम्ही ट्रेनिंगसाठी किती दूर जाऊ शकता?",
            "subtext": "(उदा: गावाजवळ, २५ किमी)",
            "options": [
                "गाव / १० किमीच्या आत",
                "२०-२५ किमीपर्यंत",
                "संपूर्ण जिल्ह्यात",
                "राज्यातील कोणत्याही शहरात"
            ]
        },
        {
            "prompt": "तुम्ही कुठे राहता? (राज्य, जिल्हा, गाव)",
            "subtext": "(उदा: महाराष्ट्र, पुणे, खेड)",
            "options": [
                "पुणे, महाराष्ट्र",
                "सातारा, महाराष्ट्र",
                "सोलापूर, महाराष्ट्र",
                "नाशिक, महाराष्ट्र"
            ]
        }
    ]
  },
  bn: {
    navVoice: "🎙️ ভয়েস ইন্টারভিউ",
    navProfile: "📊 প্রোফাইল এবং সুপারিশ",
    navBack: "মূল সাইটে ফিরে যান",
    bannerTitle: "“আপনার কণ্ঠ। আপনার দক্ষতা। আপনার সুযোগ।”",
    bannerSub: "PM-AJAY-এর অধীনে SC সুবিধাভোগীদের জন্য AI-চালিত ভয়েস জীবিকা ও দক্ষতা নির্দেশিকা।",
    bannerDesc: "সরকারি সাথীর সাথে আপনার পছন্দের ভাষায় কথা বলুন। AI সহকারী আপনার পটভূমি, দক্ষতা এবং আগ্রহ বুঝে সঠিক NSQF-প্রস্তাবিত প্রশিক্ষণ এবং স্থানীয় কর্মসংস্থান খুঁজে পেতে সাহায্য করে।",
    journeyTitle: "সম্পূর্ণ জীবিকা প্রক্রিয়া:",
    journeyCitizen: "👤 নাগরিক",
    journeyVoice: "🎙️ ভয়েস AI",
    journeyGap: "⚡ দক্ষতার ঘাটতি",
    journeyTraining: "🎓 NSQF প্রশিক্ষণ",
    journeyLivelihood: "💼 জীবিকা",
    talkCTA: "🎙️ সরকারি সাথীর সাথে কথা বলুন",
    sampleHeader: "নমুনা নাগরিক প্রোফাইল (দ্রুত মূল্যায়ন)",
    sampleDesc: "সুপারিশ ইঞ্জিনটি পরীক্ষা করতে একটি প্রোফাইল নির্বাচন করুন:",
    qProgress: "প্রশ্ন",
    of: "এর",
    voiceGuide: "সরকারি সাথী ভয়েস গাইড",
    speaking: "বলছি...",
    noTyping: "টাইপ করার দরকার নেই। স্বাভাবিকভাবে কথা বলুন।",
    repeatVoice: "🔊 কণ্ঠস্বর পুনরাবৃত্তি করুন",
    micListening: "🔴 শুনছি... আপনার মাইকে পরিষ্কার করে বলুন",
    micTapToSpeak: "উত্তর বলতে মাইকে ক্লিক করুন",
    speechRecognized: "চিহ্নিত উত্তর:",
    confirmNext: "উত্তর নিশ্চিত করুন এবং এগিয়ে যান →",
    orClick: "অথবা উত্তর নির্বাচন করুন:",
    micIssue: "মাইকে সমস্যা আছে?",
    hideTyping: "টাইপিং বক্স লুকান",
    typeAnswer: "⌨️ এর পরিবর্তে আপনার উত্তর টাইপ করুন",
    typePlaceholder: "আপনার উত্তর টাইপ করুন...",
    next: "এগিয়ে যান",
    profileTitle: "আপনার জীবিকা প্রোফাইল",
    profileSub: "আপনার AI ভয়েস মূল্যায়ন এবং পটভূমি থেকে তৈরি",
    editProfile: "প্রোফাইল সম্পাদনা করুন",
    saveProfile: "প্রোফাইল সংরক্ষণ করুন",
    retakeInterview: "🔄 ভয়েস ইন্টারভিউ আবার দিন",
    education: "শিক্ষা",
    currentWork: "বর্তমান কাজ",
    traditionalWork: "ঐতিহ্যবাহী কাজ",
    existingSkills: "বিদ্যমান দক্ষতা",
    careerInterest: "পেশাগত আগ্রহ",
    workPref: "কর্মসংস্থানের পছন্দ",
    mobilityLimit: "যাতায়াতের সীমা",
    location: "স্থান",
    skillGapTitle: "আপনার জীবিকা এবং দক্ষতার ঘাটতি (Skill Gap) বুঝুন",
    skillGapSub: "ব্যবহারিক ক্ষমতা বনাম দক্ষতা মানের বিশ্লেষণাত্মক মূল্যায়ন",
    currentSit: "1. বর্তমান পরিস্থিতি",
    keyStrengths: "2. মূল শক্তি",
    identifiedGaps: "3. চিহ্নিত দক্ষতার ঘাটতি",
    recTitle: "সুপারিশকৃত দক্ষতার পথ (NSQF Pathways)",
    recSub: "আপনার প্রোফাইল এবং স্থানীয় PM-AJAY GIA কেন্দ্রের উপর ভিত্তি করে",
    potentialMatch: "সম্ভাব্য মিল — চূড়ান্ত যোগ্যতা সরকারি PM-AJAY নির্দেশিকা অনুযায়ী যাচাই করা হবে",
    matchScore: "ম্যাচ স্কোর",
    whyRecommended: "কেন সুপারিশ করা হয়েছে?",
    outcomes: "জীবিকার ফলাফল:",
    viewDetailsDoc: "জীবিকার বিবরণ এবং কাগজপত্র দেখুন →",
    roadmapTag: "কৌশলগত ক্যারিয়ার টাইমলাইন",
    roadmapTitle: "আপনার সুপারিশকৃত জীবিকা রোডম্যাপ",
    roadmapSub: "বিদ্যমান দক্ষতা থেকে টেকসই ব্যবসা পর্যন্ত ধাপে ধাপে পথ",
    roadmapSteps: [
      { step: "1", title: "বিদ্যমান দক্ষতা", desc: "ব্যবহারিক অভিজ্ঞতার স্বীকৃতি" },
      { step: "2", title: "দক্ষতার ঘাটতি", desc: "প্রযুক্তিগত ঘাটতি চিহ্নিতকরণ" },
      { step: "3", title: "NSQF প্রশিক্ষণ", desc: "বিনামূল্যে ৩-মাসের PM-AJAY GIA কোর্স" },
      { step: "4", title: "সার্টিফিকেশন", desc: "সেক্টর স্কিল কাউন্সিল সার্টিফিকেট" },
      { step: "5", title: "স্থানীয় চাকরি", desc: "অ্যাপ্রেন্টিসশিপ বা চাকরি" },
      { step: "6", title: "আত্মকর্মসংস্থান", desc: "মুদ্রা ঋণ এবং ব্যবসা প্রতিষ্ঠা" }
    ],
    ruralTitle: "গ্রামীণ এবং কম-কানেক্টিভিটি এলাকার জন্য তৈরি",
    ruralSub: "গ্রাম পঞ্চায়েতগুলিতে বিনা বাধায় অ্যাক্সেস",
    modalDuration: "সময়কাল:",
    modalEdu: "শিক্ষা:",
    modalBenefits: "PM-AJAY GIA উপাদানের সুবিধা",
    modalDocs: "প্রয়োজনীয় কাগজপত্রের তালিকা",
    modalOpp: "আপনার কাছাকাছি সুযোগ",
    getGuidance: "আবেদনের দিকনির্দেশনা পান →",
    guidanceAlert: "আবেদনের দিকনির্দেশনা প্রস্তুত! আপনার কাগজপত্রের তালিকা এবং কাছাকাছি প্রশিক্ষণ কেন্দ্রের যোগাযোগের বিবরণ প্রস্তুত করা হয়েছে।",
    applicationGuideSteps: ["ধাপ ১: আপনার কাছের গ্রাম পঞ্চায়েত বা সিএসসি (CSC) কেন্দ্রে যান এবং PM-AJAY স্কিল ট্রেনিং সম্পর্কে খোঁজ নিন।", "ধাপ ২: আপনার আধার কার্ড, জাতিগত শংসাপত্র এবং ব্যাঙ্ক পাসবুক সাথে নিতে ভুলবেন না।", "ধাপ ৩: আধিকারিক আপনার ফর্ম পূরণ করবেন এবং আপনার বেছে নেওয়া কোর্সে (যেমন: সোলার, ওয়্যারিং) আপনাকে নথিভুক্ত করবেন।", "ধাপ ৪: আপনি ৩ মাসের বিনামূল্যে ট্রেনিং পাবেন এবং সাথে প্রতিদিন ১৫০ টাকা স্টাইপেন্ডও পাবেন।", "ধাপ ৫: ট্রেনিং শেষ হলে আপনি সার্টিফিকেট এবং টুলকিট পাবেন, যা দিয়ে আপনি নিজের কাজ বা চাকরি শুরু করতে পারবেন।"],
    questions: [
        {
            "prompt": "আপনার পড়াশোনা কতদূর হয়েছে?",
            "subtext": "(যেমন: ৮ম পাস, ১০ম পাস, ১২শ পাস)",
            "options": [
                "৮ম পাস বা তার কম",
                "১০ম পাস",
                "১২শ পাস",
                "ডিপ্লোমা / স্নাতক"
            ]
        },
        {
            "prompt": "আপনি বর্তমানে কী কাজ করেন?",
            "subtext": "(যেমন: কৃষি-মজুরি, দোকানে কাজ)",
            "options": [
                "কৃষি / ক্ষেতমজুর",
                "দোকান / ওয়ার্কশপ হেল্পার",
                "গৃহিণী",
                "শিক্ষার্থী / বেকার"
            ]
        },
        {
            "prompt": "আপনার পরিবারের ঐতিহ্যগত কাজ কী?",
            "subtext": "(যেমন: কৃষিকাজ, ছুতোর, সেলাই)",
            "options": [
                "কৃষিকাজ",
                "ছুতোর / রাজমিস্ত্রি",
                "সেলাই / তাঁত",
                "হস্তশিল্প / পশুপালন"
            ]
        },
        {
            "prompt": "আপনি বর্তমানে কী কী কাজ বা দক্ষতা জানেন?",
            "subtext": "(যেমন: ওয়্যারিং, কম্পিউটার)",
            "options": [
                "বেসিক ওয়্যারিং / মেরামত",
                "সেলাই ও কাটিং",
                "যানবাহন মেরামত / টুলস",
                "কম্পিউটার চালানো"
            ]
        },
        {
            "prompt": "আপনি ভবিষ্যতে কোন ধরনের কাজ শিখতে চান?",
            "subtext": "(যেমন: সোলার, ইলেকট্রিশিয়ান, কম্পিউটার)",
            "options": [
                "ইলেকট্রিশিয়ান / বৈদ্যুতিক কাজ",
                "সোলার পিভি / সোলার পাম্প",
                "অটোমোটিভ / ইভি টেকনিশিয়ান",
                "কম্পিউটার / ডিজিটাল পরিষেবা"
            ]
        },
        {
            "prompt": "আপনি কি চাকরি করতে চান নাকি নিজের ব্যবসা শুরু করতে চান?",
            "subtext": "(যেমন: নিজের ব্যবসা বা চাকরি)",
            "options": [
                "নিজের ব্যবসা",
                "বেতনের চাকরি",
                "যেটি ভালো হয়"
            ]
        },
        {
            "prompt": "আপনি ট্রেনিংয়ের জন্য কতদূর যেতে পারবেন?",
            "subtext": "(যেমন: গ্রামের কাছে, ২৫ কিমি)",
            "options": [
                "গ্রাম / ১০ কিমির মধ্যে",
                "২০-২৫ কিমি পর্যন্ত",
                "পুরো জেলায়",
                "রাজ্যের যেকোনো শহরে"
            ]
        },
        {
            "prompt": "আপনি কোথায় থাকেন? (রাজ্য, জেলা, গ্রাম)",
            "subtext": "(যেমন: পশ্চিমবঙ্গ, বর্ধমান, কালনা)",
            "options": [
                "বর্ধমান, পশ্চিমবঙ্গ",
                "বাঁকুড়া, পশ্চিমবঙ্গ",
                "পুরুলিয়া, পশ্চিমবঙ্গ",
                "বীরভূম, পশ্চিমবঙ্গ"
            ]
        }
    ]
  },
  te: {
    navVoice: "🎙️ వాయిస్ ఇంటర్వ్యూ",
    navProfile: "📊 ప్రొఫైల్ & సిఫార్సులు",
    navBack: "ప్రధాన సైట్‌కి తిరిగి వెళ్లండి",
    bannerTitle: "“మీ వాయిస్. మీ నైపుణ్యాలు. మీ అవకాశం.”",
    bannerSub: "PM-AJAY కింద SC లబ్ధిదారుల కోసం AI-ఆధారిత వాయిస్ జీవనోపాధి మరియు నైపుణ్య మార్గదర్శకత్వం.",
    bannerDesc: "మీకు ఇష్టమైన భాషలో ప్రభుత్వ సాథితో మాట్లాడండి. AI అసిస్టెంట్ మీ నేపథ్యం, ప్రస్తుత నైపుణ్యాలు మరియు ఆసక్తులను అర్థం చేసుకుని, మీకు తగిన NSQF-సిఫార్సు చేయబడిన శిక్షణ మరియు స్థానిక ఉపాధిని కనుగొనడంలో సహాయపడుతుంది.",
    journeyTitle: "పూర్తి జీవనోపాధి ప్రక్రియ:",
    journeyCitizen: "👤 పౌరుడు",
    journeyVoice: "🎙️ వాయిస్ AI",
    journeyGap: "⚡ నైపుణ్య అంతరం",
    journeyTraining: "🎓 NSQF శిక్షణ",
    journeyLivelihood: "💼 జీవనోపాధి",
    talkCTA: "🎙️ ప్రభుత్వ సాథితో మాట్లాడండి",
    sampleHeader: "నమూనా పౌరుల ప్రొఫైల్ (శీఘ్ర అంచనా)",
    sampleDesc: "సిఫార్సు ఇంజిన్‌ను తక్షణమే అంచనా వేయడానికి ప్రొఫైల్‌ను ఎంచుకోండి:",
    qProgress: "ప్రశ్న",
    of: "లో",
    voiceGuide: "ప్రభుత్వ సాథి వాయిస్ గైడ్",
    speaking: "మాట్లాడుతున్నాను...",
    noTyping: "టైపింగ్ అవసరం లేదు. సహజంగా మాట్లాడండి.",
    repeatVoice: "🔊 వాయిస్ రిపీట్ చేయండి",
    micListening: "🔴 వింటున్నాను... మైక్‌లో స్పష్టంగా మాట్లాడండి",
    micTapToSpeak: "సమాధానం చెప్పడానికి మైక్‌ను క్లిక్ చేయండి",
    speechRecognized: "గుర్తించబడిన సమాధానం:",
    confirmNext: "సమాధానం నిర్ధారించండి మరియు ముందుకు వెళ్ళండి →",
    orClick: "లేదా సమాధానాన్ని ఎంచుకోండి:",
    micIssue: "మైక్‌లో సమస్య ఉందా?",
    hideTyping: "టైపింగ్ బాక్స్‌ను దాచండి",
    typeAnswer: "⌨️ బదులుగా మీ సమాధానాన్ని టైప్ చేయండి",
    typePlaceholder: "మీ సమాధానం టైప్ చేయండి...",
    next: "తదుపరి",
    profileTitle: "మీ జీవనోపాధి ప్రొఫైల్",
    profileSub: "మీ AI వాయిస్ అంచనా మరియు నేపథ్యం నుండి సృష్టించబడింది",
    editProfile: "ప్రొఫైల్ సవరించండి",
    saveProfile: "ప్రొఫైల్ సేవ్ చేయండి",
    retakeInterview: "🔄 వాయిస్ ఇంటర్వ్యూ మళ్లీ ఇవ్వండి",
    education: "విద్య",
    currentWork: "ప్రస్తుత పని",
    traditionalWork: "సాంప్రదాయ పని",
    existingSkills: "ప్రస్తుత నైపుణ్యాలు",
    careerInterest: "కెరీర్ ఆసక్తి",
    workPref: "ఉపాధి ప్రాధాన్యత",
    mobilityLimit: "ప్రయాణ పరిమితి",
    location: "స్థానం",
    skillGapTitle: "మీ జీవనోపాధి మరియు నైపుణ్య అంతరం (Skill Gap) అర్థం చేసుకోండి",
    skillGapSub: "ప్రయోగాత్మక సామర్థ్యాలు వర్సెస్ నైపుణ్య ప్రమాణాల విశ్లేషణాత్మక అంచనా",
    currentSit: "1. ప్రస్తుత పరిస్థితి",
    keyStrengths: "2. ప్రధాన బలాలు",
    identifiedGaps: "3. గుర్తించబడిన నైపుణ్య అంతరాలు",
    recTitle: "సిఫార్సు చేయబడిన నైపుణ్య మార్గాలు (NSQF Pathways)",
    recSub: "మీ ప్రొఫైల్ మరియు స్థానిక PM-AJAY GIA కేంద్రాల ఆధారంగా",
    potentialMatch: "సాధ్యమైన మ్యాచ్ — తుది అర్హత అధికారిక PM-AJAY మార్గదర్శకాల ప్రకారం ధృవీకరించబడుతుంది",
    matchScore: "మ్యాచ్ స్కోర్",
    whyRecommended: "ఎందుకు సిఫార్సు చేయబడింది?",
    outcomes: "జీవనోపాధి ఫలితాలు:",
    viewDetailsDoc: "జీవనోపాధి వివరాలు మరియు పత్రాలను చూడండి →",
    roadmapTag: "వ్యూహాత్మక కెరీర్ టైమ్‌లైన్",
    roadmapTitle: "మీ సిఫార్సు చేయబడిన జీవనోపాధి రోడ్‌మ్యాప్",
    roadmapSub: "ప్రస్తుత నైపుణ్యాల నుండి స్థిరమైన వ్యాపారం వరకు దశల వారీ మార్గం",
    roadmapSteps: [
      { step: "1", title: "ప్రస్తుత నైపుణ్యాలు", desc: "ప్రయోగాత్మక అనుభవం గుర్తింపు" },
      { step: "2", title: "నైపుణ్య అంతరం", desc: "సాంకేతిక అంతరాల గుర్తింపు" },
      { step: "3", title: "NSQF శిక్షణ", desc: "ఉచిత 3-నెలల PM-AJAY GIA కోర్సు" },
      { step: "4", title: "ధృవీకరణ", desc: "సెక్టార్ స్కిల్ కౌన్సిల్ సర్టిఫికేట్" },
      { step: "5", title: "స్థానిక ఉద్యోగం", desc: "అప్రెంటిస్‌షిప్ లేదా ఉద్యోగం" },
      { step: "6", title: "స్వయం ఉపాధి", desc: "ముద్రా రుణం మరియు వ్యాపార స్థాపన" }
    ],
    ruralTitle: "గ్రామీణ మరియు తక్కువ-కనెక్టివిటీ ప్రాంతాల కోసం రూపొందించబడింది",
    ruralSub: "గ్రామ పంచాయతీలలో ఆటంకం లేని ప్రవేశం",
    modalDuration: "వ్యవధి:",
    modalEdu: "విద్య:",
    modalBenefits: "PM-AJAY GIA భాగం ప్రయోజనాలు",
    modalDocs: "అవసరమైన పత్రాల జాబితా",
    modalOpp: "మీ సమీప అవకాశాలు",
    getGuidance: "దరఖాస్తు మార్గదర్శకత్వం పొందండి →",
    guidanceAlert: "దరఖాస్తు మార్గదర్శకత్వం సిద్ధంగా ఉంది! మీ పత్రాల జాబితా మరియు సమీప శిక్షణా కేంద్రం సంప్రదింపు వివరాలు సిద్ధం చేయబడ్డాయి.",
    applicationGuideSteps: ["దశ 1: మీ దగ్గరి గ్రామ పంచాయతీ లేదా సిఎస్‌సి (CSC) కేంద్రానికి వెళ్లి PM-AJAY నైపుణ్య శిక్షణ గురించి అడగండి.", "దశ 2: మీ ఆధార్ కార్డ్, కుల ధృవీకరణ పత్రం మరియు బ్యాంకు పాస్‌బుక్ తీసుకువెళ్లడం మర్చిపోకండి.", "దశ 3: అధికారి మీ ఫారమ్‌ను నింపి, మీరు ఎంచుకున్న కోర్సులో (ఉదా: సోలార్, వైరింగ్) మిమ్మల్ని నమోదు చేస్తారు.", "దశ 4: మీకు 3 నెలల ఉచిత శిక్షణతో పాటు, రోజుకు ₹150 స్టైఫండ్ కూడా లభిస్తుంది.", "దశ 5: శిక్షణ పూర్తయిన తర్వాత మీకు సర్టిఫికేట్ మరియు టూల్‌కిట్ లభిస్తుంది, దీనితో మీరు మీ స్వంత వ్యాపారం లేదా ఉద్యోగం ప్రారంభించవచ్చు."],
    questions: [
        {
            "prompt": "మీ చదువు ఎంతవరకు జరిగింది?",
            "subtext": "(ఉదా: 8వ పాస్, 10వ పాస్, 12వ పాస్)",
            "options": [
                "8వ పాస్ లేదా అంతకంటే తక్కువ",
                "10వ పాస్",
                "12వ పాస్",
                "డిప్లొమా / గ్రాడ్యుయేట్"
            ]
        },
        {
            "prompt": "మీరు ప్రస్తుతం ఏ పని చేస్తున్నారు?",
            "subtext": "(ఉదా: వ్యవసాయ కూలీ, షాపులో పని)",
            "options": [
                "వ్యవసాయ కూలీ",
                "షాపు / వర్క్‌షాప్ హెల్పర్",
                "గృహిణి",
                "విద్యార్థి / నిరుద్యోగి"
            ]
        },
        {
            "prompt": "మీ కుటుంబ సాంప్రదాయ వృత్తి ఏమిటి?",
            "subtext": "(ఉదా: వ్యవసాయం, వడ్రంగి, టైలరింగ్)",
            "options": [
                "వ్యవసాయం",
                "వడ్రంగి / మేస్త్రీ",
                "టైలరింగ్ / నేత",
                "హస్తకళలు / పశుపోషణ"
            ]
        },
        {
            "prompt": "మీకు ప్రస్తుతం ఏ ఏ పనులు లేదా నైపుణ్యాలు తెలుసు?",
            "subtext": "(ఉదా: వైరింగ్, కంప్యూటర్)",
            "options": [
                "బేసిక్ వైరింగ్ / రిపేర్",
                "టైలరింగ్ & కటింగ్",
                "వాహనాల రిపేర్ / టూల్స్",
                "కంప్యూటర్ ఆపరేషన్"
            ]
        },
        {
            "prompt": "మీరు భవిష్యత్తులో ఏ రకమైన పని నేర్చుకోవాలనుకుంటున్నారు?",
            "subtext": "(ఉదా: సోలార్, ఎలక్ట్రీషియన్, కంప్యూటర్)",
            "options": [
                "ఎలక్ట్రీషియన్ / ఎలక్ట్రికల్ పని",
                "సోలార్ పివి / సోలార్ పంప్",
                "ఆటోమోటివ్ / ఈవీ టెక్నీషియన్",
                "కంప్యూటర్ / డిజిటల్ సేవలు"
            ]
        },
        {
            "prompt": "మీరు ఉద్యోగం చేయాలనుకుంటున్నారా లేదా సొంత పని ప్రారంభించాలనుకుంటున్నారా?",
            "subtext": "(ఉదా: సొంత వ్యాపారం లేదా ఉద్యోగం)",
            "options": [
                "సొంత వ్యాపారం",
                "ఉద్యోగం",
                "ఏది మంచిదైతే అది"
            ]
        },
        {
            "prompt": "మీరు శిక్షణ కోసం ఎంత దూరం ప్రయాణించగలరు?",
            "subtext": "(ఉదా: ఊరి దగ్గర, 25 కి.మీ)",
            "options": [
                "గ్రామం / 10 కి.మీ లోపు",
                "20-25 కి.మీ వరకు",
                "జిల్లాలో ఎక్కడైనా",
                "రాష్ట్రంలోని ఏ నగరానికైనా"
            ]
        },
        {
            "prompt": "మీరు ఎక్కడ నివసిస్తున్నారు? (రాష్ట్రం, జిల్లా, గ్రామం)",
            "subtext": "(ఉదా: తెలంగాణ, వరంగల్, హన్మకొండ)",
            "options": [
                "వరంగల్, తెలంగాణ",
                "కరీంనగర్, తెలంగాణ",
                "ఖమ్మం, తెలంగాణ",
                "నిజామాబాద్, తెలంగాణ"
            ]
        }
    ]
  },
  ta: {
    navVoice: "🎙️ குரல் நேர்காணல்",
    navProfile: "📊 சுயவிவரம் & பரிந்துரைகள்",
    navBack: "முக்கிய தளத்திற்குத் திரும்பு",
    bannerTitle: "“உங்கள் குரல். உங்கள் திறன்கள். உங்கள் வாய்ப்பு.”",
    bannerSub: "PM-AJAY இன் கீழ் SC பயனாளிகளுக்கான AI-ஆதரவு குரல் வாழ்வாதாரம் மற்றும் திறன் வழிகாட்டுதல்.",
    bannerDesc: "சர்காரி சாதியுடன் உங்கள் மொழியில் பேசுங்கள். AI உதவியாளர் உங்கள் பின்னணி, திறன்கள் மற்றும் ஆர்வங்களைப் புரிந்துகொண்டு, பொருத்தமான NSQF பயிற்சி மற்றும் வேலைவாய்ப்பைக் கண்டறிய உதவுகிறது.",
    journeyTitle: "முழுமையான வாழ்வாதார பயணம்:",
    journeyCitizen: "👤 குடிமகன்",
    journeyVoice: "🎙️ குரல் AI",
    journeyGap: "⚡ திறன் இடைவெளி",
    journeyTraining: "🎓 NSQF பயிற்சி",
    journeyLivelihood: "💼 வாழ்வாதாரம்",
    talkCTA: "🎙️ சர்காரி சாதியுடன் பேசுங்கள்",
    sampleHeader: "மாதிரி குடிமகன் சுயவிவரம் (விரைவான மதிப்பீடு)",
    sampleDesc: "பரிந்துரை இயந்திரத்தை சோதிக்க ஒரு சுயவிவரத்தைத் தேர்ந்தெடுக்கவும்:",
    qProgress: "கேள்வி",
    of: "இல்",
    voiceGuide: "சர்காரி சாதி குரல் வழிகாட்டி",
    speaking: "பேசுகிறது...",
    noTyping: "தட்டச்சு செய்ய தேவையில்லை. இயல்பாக பேசுங்கள்.",
    repeatVoice: "🔊 குரலை மீண்டும் கேளுங்கள்",
    micListening: "🔴 கேட்கிறது... மைக்கில் தெளிவாக பேசுங்கள்",
    micTapToSpeak: "பதிலளிக்க மைக்கை கிளிக் செய்யவும்",
    speechRecognized: "அங்கீகரிக்கப்பட்ட பதில்:",
    confirmNext: "பதிலை உறுதிசெய்து தொடரவும் →",
    orClick: "அல்லது பதிலை தேர்ந்தெடுக்கவும்:",
    micIssue: "மைக்கில் பிரச்சனையா?",
    hideTyping: "தட்டச்சு பெட்டியை மறை",
    typeAnswer: "⌨️ அதற்குப் பதிலாக உங்கள் பதிலைத் தட்டச்சு செய்யவும்",
    typePlaceholder: "உங்கள் பதிலைத் தட்டச்சு செய்யவும்...",
    next: "அடுத்து",
    profileTitle: "உங்கள் வாழ்வாதார சுயவிவரம்",
    profileSub: "உங்கள் AI குரல் மதிப்பீடு மற்றும் பின்னணியிலிருந்து உருவாக்கப்பட்டது",
    editProfile: "சுயவிவரத்தைத் திருத்து",
    saveProfile: "சுயவிவரத்தைச் சேமி",
    retakeInterview: "🔄 குரல் நேர்காணலை மீண்டும் செய்",
    education: "கல்வி",
    currentWork: "தற்போதைய வேலை",
    traditionalWork: "பாரம்பரிய வேலை",
    existingSkills: "தற்போதைய திறன்கள்",
    careerInterest: "தொழில் ஆர்வம்",
    workPref: "வேலைவாய்ப்பு விருப்பம்",
    mobilityLimit: "பயண வரம்பு",
    location: "இடம்",
    skillGapTitle: "உங்கள் திறன் இடைவெளியை (Skill Gap) புரிந்து கொள்ளுங்கள்",
    skillGapSub: "நடைமுறை திறன்கள் மற்றும் திறன் தரநிலைகளின் மதிப்பீடு",
    currentSit: "1. தற்போதைய நிலை",
    keyStrengths: "2. முக்கிய பலங்கள்",
    identifiedGaps: "3. அடையாளம் காணப்பட்ட திறன் இடைவெளிகள்",
    recTitle: "பரிந்துரைக்கப்பட்ட திறன் பாதைகள் (NSQF Pathways)",
    recSub: "உங்கள் சுயவிவரம் மற்றும் உள்ளூர் PM-AJAY GIA மையங்களின் அடிப்படையில்",
    potentialMatch: "சாத்தியமான பொருத்தம் — அதிகாரப்பூர்வ PM-AJAY வழிகாட்டுதல்களின்படி இறுதி தகுதி சரிபார்க்கப்படும்",
    matchScore: "மேட்ச் ஸ்கோர்",
    whyRecommended: "ஏன் பரிந்துரைக்கப்பட்டது?",
    outcomes: "வாழ்வாதார முடிவுகள்:",
    viewDetailsDoc: "விவரங்கள் மற்றும் ஆவணங்களைக் காண்க →",
    roadmapTag: "தொழில் காலவரிசை",
    roadmapTitle: "உங்கள் பரிந்துரைக்கப்பட்ட வாழ்வாதார வரைபடம்",
    roadmapSub: "தற்போதைய திறன்களிலிருந்து நிலையான வேலைவாய்ப்பு வரை படிப்படியான பாதை",
    roadmapSteps: [
      { step: "1", title: "தற்போதைய திறன்கள்", desc: "நடைமுறை அனுபவத்தின் அடையாளம்" },
      { step: "2", title: "திறன் இடைவெளி", desc: "தொழில்நுட்ப இடைவெளிகளின் அடையாளம்" },
      { step: "3", title: "NSQF பயிற்சி", desc: "இலவச 3-மாத PM-AJAY GIA কোর্স" },
      { step: "4", title: "சான்றிதழ்", desc: "செக்டார் ஸ்கில் கவுன்சில் சான்றிதழ்" },
      { step: "5", title: "உள்ளூர் வேலை", desc: "அப்ரண்டிஸ்ஷிப் அல்லது வேலை" },
      { step: "6", title: "சுய வேலைவாய்ப்பு", desc: "முத்ரா கடன் மற்றும் தொழில் தொடக்கம்" }
    ],
    ruralTitle: "கிராமப்புற மற்றும் குறைந்த இணைப்பு உள்ள பகுதிகளுக்காக உருவாக்கப்பட்டது",
    ruralSub: "கிராம பஞ்சாயத்துகளில் தடையற்ற அணுகல்",
    modalDuration: "கால அளவு:",
    modalEdu: "கல்வி:",
    modalBenefits: "PM-AJAY GIA நன்மைகள்",
    modalDocs: "தேவையான ஆவணங்கள்",
    modalOpp: "உங்களுக்கு அருகிலுள்ள வாய்ப்புகள்",
    getGuidance: "விண்ணப்ப வழிகாட்டுதலைப் பெறுங்கள் →",
    guidanceAlert: "விண்ணப்ப வழிகாட்டுதல் தயார்! ஆவணங்கள் மற்றும் பயிற்சி மைய விவரங்கள் தயாரிக்கப்பட்டுள்ளன.",
    applicationGuideSteps: ["படி 1: உங்கள் அருகில் உள்ள கிராம பஞ்சாயத்து அல்லது சி.எஸ்.சி (CSC) மையத்திற்குச் சென்று PM-AJAY திறன் பயிற்சி பற்றி விசாரிக்கவும்.", "படி 2: உங்கள் ஆதார் கார்டு, சாதிச் சான்றிதழ் மற்றும் வங்கி பாஸ்புக் ஆகியவற்றை எடுத்துச் செல்ல மறக்காதீர்கள்.", "படி 3: அதிகாரி உங்கள் விண்ணப்பத்தை நிரப்பி, நீங்கள் தேர்ந்தெடுத்த பாடப்பிரிவில் (உ-ம்: சோலார், வயரிங்) உங்களைப் பதிவு செய்வார்.", "படி 4: உங்களுக்கு 3 மாத இலவசப் பயிற்சியும், நாளொன்றுக்கு ₹150 உதவித்தொகையும் கிடைக்கும்.", "படி 5: பயிற்சி முடிந்ததும் உங்களுக்கு சான்றிதழும், கருவித்தொகுப்பும் (Toolkit) வழங்கப்படும், இதன் மூலம் நீங்கள் சொந்தத் தொழில் அல்லது வேலையைத் தொடங்கலாம்."],
    questions: [
        {
            "prompt": "உங்கள் படிப்பு எவ்வளவு முடிந்துள்ளது?",
            "subtext": "(உ-ம்: 8ஆம் வகுப்பு, 10ஆம் வகுப்பு, 12ஆம் வகுப்பு)",
            "options": [
                "8ஆம் வகுப்பு அல்லது அதற்கும் குறைவு",
                "10ஆம் வகுப்பு",
                "12ஆம் வகுப்பு",
                "டிப்ளமோ / பட்டதாரி"
            ]
        },
        {
            "prompt": "நீங்கள் தற்போது என்ன வேலை செய்கிறீர்கள்?",
            "subtext": "(உ-ம்: விவசாயக் கூலி, கடையில் வேலை)",
            "options": [
                "விவசாயக் கூலி",
                "கடை / பட்டறை உதவியாளர்",
                "இல்லத்தரசி",
                "மாணவர் / வேலையற்றவர்"
            ]
        },
        {
            "prompt": "உங்கள் குடும்பத்தின் பாரம்பரிய தொழில் என்ன?",
            "subtext": "(உ-ம்: விவசாயம், தச்சு வேலை, தையல்)",
            "options": [
                "விவசாயம்",
                "தச்சு வேலை / கொத்தனார்",
                "தையல் / நெசவு",
                "கைவினைப் பொருட்கள் / கால்நடை வளர்ப்பு"
            ]
        },
        {
            "prompt": "உங்களுக்கு தற்போது என்னென்ன வேலைகள் அல்லது திறன்கள் தெரியும்?",
            "subtext": "(உ-ம்: வயரிங், கம்ப்யூட்டர்)",
            "options": [
                "அடிப்படை வயரிங் / பழுதுபார்ப்பு",
                "தையல் & வெட்டுதல்",
                "வாகன பழுதுபார்ப்பு / கருவிகள்",
                "கம்ப்யூட்டர் இயக்குதல்"
            ]
        },
        {
            "prompt": "நீங்கள் எதிர்காலத்தில் எந்த வகையான வேலையைக் கற்றுக்கொள்ள விரும்புகிறீர்கள்?",
            "subtext": "(உ-ம்: சோலார், எலக்ட்ரீஷியன், கம்ப்யூட்டர்)",
            "options": [
                "எலக்ட்ரீஷியன் / மின்சார வேலை",
                "சோலார் பிவி / சோலார் பம்ப்",
                "ஆட்டோமோட்டிவ் / ஈவி டெக்னீஷியன்",
                "கம்ப்யூட்டர் / டிஜிட்டல் சேவைகள்"
            ]
        },
        {
            "prompt": "நீங்கள் வேலைக்குச் செல்ல விரும்புகிறீர்களா அல்லது சொந்தத் தொழில் தொடங்க விரும்புகிறீர்களா?",
            "subtext": "(உ-ம்: சொந்தத் தொழில் அல்லது வேலை)",
            "options": [
                "சொந்தத் தொழில்",
                "மாதச் சம்பள வேலை",
                "எது சிறந்ததோ அது"
            ]
        },
        {
            "prompt": "பயிற்சிக்காக நீங்கள் எவ்வளவு தூரம் பயணிக்க முடியும்?",
            "subtext": "(உ-ம்: கிராமத்திற்கு அருகில், 25 கி.மீ)",
            "options": [
                "கிராமம் / 10 கி.மீக்குள்",
                "20-25 கி.மீ வரை",
                "மாவட்டத்தில் எங்கும்",
                "மாநிலத்தில் எந்த நகரத்திலும்"
            ]
        },
        {
            "prompt": "நீங்கள் எங்கே வசிக்கிறீர்கள்? (மாநிலம், மாவட்டம், கிராமம்)",
            "subtext": "(உ-ம்: தமிழ்நாடு, மதுரை, மேலூர்)",
            "options": [
                "மதுரை, தமிழ்நாடு",
                "திருச்சி, தமிழ்நாடு",
                "சேலம், தமிழ்நாடு",
                "கோயம்புத்தூர், தமிழ்நாடு"
            ]
        }
    ]
  },
  gu: {
    navVoice: "🎙️ વોઇસ ઇન્ટરવ્યુ",
    navProfile: "📊 પ્રોફાઇલ અને ભલામણો",
    navBack: "મુખ્ય સાઇટ પર પાછા",
    bannerTitle: "“તમારો અવાજ. તમારું કૌશલ્ય. તમારી તક.”",
    bannerSub: "PM-AJAY હેઠળ SC લાભાર્થીઓ માટે AI-આધારિત વોઇસ આજીવિકા અને કૌશલ્ય માર્ગદર્શન.",
    bannerDesc: "સરકારી સાથી સાથે તમારી ભાષામાં વાત કરો. AI સહાયક તમારી પૃષ્ઠભૂમિ, કૌશલ્યો અને રુચિઓ સમજીને તમને યોગ્ય NSQF-ભલામણ કરેલ તાલીમ અને સ્થાનિક રોજગાર શોધવામાં મદદ કરે છે.",
    journeyTitle: "સંપૂર્ણ આજીવિકા પ્રક્રિયા:",
    journeyCitizen: "👤 નાગરિક",
    journeyVoice: "🎙️ વોઇસ AI",
    journeyGap: "⚡ કૌશલ્ય તફાવત",
    journeyTraining: "🎓 NSQF તાલીમ",
    journeyLivelihood: "💼 આજીવિકા",
    talkCTA: "🎙️ સરકારી સાથી સાથે વાત કરો",
    sampleHeader: "નમૂના નાગરિક પ્રોફાઇલ (ઝડપી મૂલ્યાંકન)",
    sampleDesc: "ભલામણ એન્જિન તપાસવા માટે એક પ્રોફાઇલ પસંદ કરો:",
    qProgress: "પ્રશ્ન",
    of: "માંથી",
    voiceGuide: "સરકારી સાથી વોઇસ માર્ગદર્શક",
    speaking: "બોલી રહ્યા છે...",
    noTyping: "ટાઇપ કરવાની જરૂર નથી. માત્ર સ્વાભાવિક રીતે બોલો.",
    repeatVoice: "🔊 અવાજ ફરી સાંભળો",
    micListening: "🔴 સાંભળી રહ્યા છીએ... તમારા માઇકમાં સ્પષ્ટ બોલો",
    micTapToSpeak: "જવાબ બોલવા માટે માઇક પર ક્લિક કરો",
    speechRecognized: "ઓળખાયેલ જવાબ:",
    confirmNext: "જવાબ કન્ફર્મ કરો અને આગળ વધો →",
    orClick: "અથવા જવાબ પસંદ કરો:",
    micIssue: "માઇકમાં સમસ્યા છે?",
    hideTyping: "ટાઇપિંગ બોક્સ છુપાવો",
    typeAnswer: "⌨️ તેના બદલે તમારો જવાબ ટાઇપ કરો",
    typePlaceholder: "તમારો જવાબ ટાઇપ કરો...",
    next: "આગળ",
    profileTitle: "તમારી આજીવિકા પ્રોફાઇલ",
    profileSub: "તમારા AI વોઇસ મૂલ્યાંકન અને પૃષ્ઠભૂમિ પરથી બનાવેલ",
    editProfile: "પ્રોફાઇલ સંપાદિત કરો",
    saveProfile: "પ્રોફાઇલ સેવ કરો",
    retakeInterview: "🔄 વોઇસ ઇન્ટરવ્યુ ફરી આપો",
    education: "શિક્ષણ",
    currentWork: "વર્તમાન કામ",
    traditionalWork: "પરંપરાગત કામ",
    existingSkills: "વર્તમાન કૌશલ્યો",
    careerInterest: "કારકિર્દીમાં રુચિ",
    workPref: "રોજગાર પસંદગી",
    mobilityLimit: "પ્રવાસની મર્યાદા",
    location: "સ્થળ",
    skillGapTitle: "તમારી આજીવિકા અને કૌશલ્ય તફાવત (Skill Gap) સમજો",
    skillGapSub: "પ્રાયોગિક ક્ષમતાઓ વિરુદ્ધ કૌશલ્ય ધોરણોનું મૂલ્યાંકન",
    currentSit: "1. વર્તમાન સ્થિતિ",
    keyStrengths: "2. મુખ્ય શક્તિઓ",
    identifiedGaps: "3. ઓળખાયેલ કૌશલ્ય તફાવતો",
    recTitle: "ભલામણ કરેલ કૌશલ્ય માર્ગો (NSQF Pathways)",
    recSub: "તમારી પ્રોફાઇલ અને સ્થાનિક PM-AJAY GIA કેન્દ્રો અનુસાર",
    potentialMatch: "સંભવિત મેચ — અધિકૃત PM-AJAY માર્ગદર્શિકા મુજબ અંતિમ પાત્રતા ચકાસવામાં આવશે",
    matchScore: "મેચ સ્કોર",
    whyRecommended: "શા માટે ભલામણ કરી?",
    outcomes: "આજીવિકા પરિણામો:",
    viewDetailsDoc: "વિગતો અને દસ્તાવેજો જુઓ →",
    roadmapTag: "કારકિર્દી સમયરેખા",
    roadmapTitle: "તમારો ભલામણ કરેલ આજીવિકા રોડમેપ",
    roadmapSub: "વર્તમાન કૌશલ્યોથી સ્થાયી વ્યવસાય સુધીનો માર્ગ",
    roadmapSteps: [
      { step: "1", title: "વર્તમાન કૌશલ્ય", desc: "પ્રાયોગિક અનુભવની ઓળખ" },
      { step: "2", title: "કૌશલ્ય તફાવત", desc: "તકનીકી તફાવતોની ઓળખ" },
      { step: "3", title: "NSQF તાલીમ", desc: "મફત 3-મહિનાનો PM-AJAY GIA કોર્સ" },
      { step: "4", title: "પ્રમાણપત્ર", desc: "સેક્ટર સ્કિલ કાઉન્સિલ સર્ટિફિકેટ" },
      { step: "5", title: "સ્થાનિક રોજગાર", desc: "એપ્રેન્ટિસશિપ અથવા નોકરી" },
      { step: "6", title: "સ્વરોજગાર", desc: "મુદ્રા લોન અને વ્યવસાય સ્થાપના" }
    ],
    ruralTitle: "ગ્રામીણ અને ઓછા-કનેક્ટિવિટીવાળા વિસ્તારો માટે બનાવેલ",
    ruralSub: "ગ્રામ પંચાયતોમાં વિના અવરોધે પ્રવેશ",
    modalDuration: "સમયગાળો:",
    modalEdu: "શિક્ષણ:",
    modalBenefits: "PM-AJAY GIA ના ફાયદા",
    modalDocs: "જરૂરી દસ્તાવેજોની યાદી",
    modalOpp: "તમારી નજીકની તકો",
    getGuidance: "અરજી માર્ગદર્શન મેળવો →",
    guidanceAlert: "અરજી માર્ગદર્શન તૈયાર! દસ્તાવેજોની યાદી અને તાલીમ કેન્દ્રની વિગતો તૈયાર છે.",
    applicationGuideSteps: ["પગલું ૧: તમારા નજીકના ગ્રામ પંચાયત અથવા સીએસસી (CSC) કેન્દ્ર પર જાઓ અને PM-AJAY કૌશલ્ય તાલીમ વિશે પૂછપરછ કરો.", "પગલું ૨: તમારું આધાર કાર્ડ, જાતિ પ્રમાણપત્ર અને બેંક પાસબુક સાથે લેવાનું ભૂલશો નહીં.", "પગલું ૩: અધિકારી તમારું ફોર્મ ભરશે અને તમે પસંદ કરેલા કોર્સમાં (જેમ કે: સોલાર, વાયરિંગ) તમારી નોંધણી કરશે.", "પગલું ૪: તમને ૩ મહિનાની મફત તાલીમ મળશે અને રોજનું ૧૫૦ રૂપિયા સ્ટાઈપેન્ડ પણ આપવામાં આવશે.", "પગલું ૫: તાલીમ પૂરી થયા પછી તમને પ્રમાણપત્ર અને ટૂલકિટ મળશે, જેનાથી તમે તમારો પોતાનો વ્યવસાય અથવા નોકરી શરૂ કરી શકો છો."],
    questions: [
        {
            "prompt": "તમારો અભ્યાસ કેટલો થયો છે?",
            "subtext": "(જેમ કે: ૮ પાસ, ૧૦ પાસ, ૧૨ પાસ)",
            "options": [
                "૮ પાસ કે તેથી ઓછું",
                "૧૦ પાસ",
                "૧૨ પાસ",
                "ડિપ્લોમા / સ્નાતક"
            ]
        },
        {
            "prompt": "તમે હાલમાં શું કામ કરો છો?",
            "subtext": "(જેમ કે: ખેત મજૂરી, દુકાનમાં કામ)",
            "options": [
                "ખેત મજૂર / કૃષિ મજૂર",
                "દુકાન / વર્કશોપ હેલ્પર",
                "ગૃહિણી",
                "વિદ્યાર્થી / બેરોજગાર"
            ]
        },
        {
            "prompt": "તમારા પરિવારનું પારંપરિક કામ શું છે?",
            "subtext": "(જેમ કે: ખેતી, સુથારીકામ, સિલાઈ)",
            "options": [
                "ખેતી",
                "સુથારીકામ / કડિયાકામ",
                "સિલાઈ / વણાટકામ",
                "હસ્તકલા / પશુપાલન"
            ]
        },
        {
            "prompt": "તમને હાલમાં કયાં-કયાં કામ કે કૌશલ્ય આવડે છે?",
            "subtext": "(જેમ કે: વાયરિંગ, કમ્પ્યુટર)",
            "options": [
                "બેઝિક વાયરિંગ / રિપેરિંગ",
                "સિલાઈ અને કટિંગ",
                "વાહન રિપેરિંગ / ટુલ્સ",
                "કમ્પ્યુટર ઓપરેશન"
            ]
        },
        {
            "prompt": "તમે ભવિષ્યમાં કયા પ્રકારનું કામ શીખવા માંગો છો?",
            "subtext": "(જેમ કે: સોલાર, ઇલેક્ટ્રિશિયન, કમ્પ્યુટર)",
            "options": [
                "ઇલેક્ટ્રિશિયન / ઇલેક્ટ્રિકલ કામ",
                "સોલાર પીવી / સોલાર પંપ",
                "ઓટોમોટિવ / ઈવી ટેકનિશિયન",
                "કમ્પ્યુટર / ડિજિટલ સેવાઓ"
            ]
        },
        {
            "prompt": "તમે નોકરી કરવા માંગો છો કે પોતાનો વ્યવસાય શરૂ કરવા માંગો છો?",
            "subtext": "(જેમ કે: પોતાનો વ્યવસાય કે નોકરી)",
            "options": [
                "પોતાનો વ્યવસાય",
                "પગારવાળી નોકરી",
                "જે પણ સારું હોય"
            ]
        },
        {
            "prompt": "તમે ટ્રેનિંગ માટે કેટલે દૂર જઈ શકો છો?",
            "subtext": "(જેમ કે: ગામની નજીક, ૨૫ કિમી)",
            "options": [
                "ગામ / ૧૦ કિમીની અંદર",
                "૨૦-૨૫ કિમી સુધી",
                "સમગ્ર જિલ્લામાં",
                "રાજ્યના કોઈપણ શહેરમાં"
            ]
        },
        {
            "prompt": "તમે ક્યાં રહો છો? (રાજ્ય, જિલ્લો, ગામ)",
            "subtext": "(જેમ કે: ગુજરાત, અમદાવાદ, સાણંદ)",
            "options": [
                "અમદાવાદ, ગુજરાત",
                "રાજકોટ, ગુજરાત",
                "સુરત, ગુજરાત",
                "વડોદરા, ગુજરાત"
            ]
        }
    ]
  },
  bho: {
    navVoice: "🎙️ आवाज इंटरव्यू",
    navProfile: "📊 प्रोफाइल आउर सिफारिश",
    navBack: "मुख्य साइट पर वापस",
    bannerTitle: "“रउवा आवाज। रउवा कौशल। रउवा मौका।”",
    bannerSub: "PM-AJAY के तहत SC लाभार्थियन खातिर AI-संचालित आवाज आजीविका आउर कौशल मार्गदर्शन।",
    bannerDesc: "सरकारी साथी से आपन भाषा में बात करीं। AI सहायक रउवा पृष्ठभूमि, मौजूदा कौशल आउर रुचियन के समझ के सही NSQF-अनुशंसित ट्रेनिंग आउर स्थानीय रोजगार खोजे में मदद करेला।",
    journeyTitle: "पूरा आजीविका प्रक्रिया:",
    journeyCitizen: "👤 नागरिक",
    journeyVoice: "🎙️ आवाज AI",
    journeyGap: "⚡ कौशल अंतर",
    journeyTraining: "🎓 NSQF ट्रेनिंग",
    journeyLivelihood: "💼 आजीविका",
    talkCTA: "🎙️ सरकारी साथी से बात करीं",
    sampleHeader: "नमूना नागरिक प्रोफाइल (जल्दी मूल्यांकन)",
    sampleDesc: "सिफारिश इंजन के तुरंत परखे खातिर कउनो एक प्रोफाइल चुनीं:",
    qProgress: "सवाल",
    of: "में से",
    voiceGuide: "सरकारी साथी आवाज गाइड",
    speaking: "बोल रहल बानी...",
    noTyping: "टाइप करे के जरूरत नइखे। बस सीधा बोलीं।",
    repeatVoice: "🔊 आवाज दोहराईं",
    micListening: "🔴 सुन रहल बानी... आपन माइक में साफ बोलीं",
    micTapToSpeak: "जवाब बोले खातिर माइक पर क्लिक करीं",
    speechRecognized: "पहचानल गइल जवाब:",
    confirmNext: "जवाब पक्का करीं आउर आगे बढ़ीं →",
    orClick: "या जवाब चुनीं:",
    micIssue: "माइक में कउनो दिक्कत बा?",
    hideTyping: "टाइपिंग बॉक्स छिपाईं",
    typeAnswer: "⌨️ एकर बजाय आपन जवाब टाइप करीं",
    typePlaceholder: "आपन जवाब टाइप करीं...",
    next: "आगे बढ़ीं",
    profileTitle: "रउवा आजीविका प्रोफाइल",
    profileSub: "रउवा AI आवाज मूल्यांकन आउर पृष्ठभूमि से बनल",
    editProfile: "प्रोफाइल बदलीं",
    saveProfile: "प्रोफाइल सुरक्षित करीं",
    retakeInterview: "🔄 आवाज इंटरव्यू फेर से दीं",
    education: "पढ़ाई",
    currentWork: "अभी के काम",
    traditionalWork: "खानदानी काम",
    existingSkills: "मौजूदा कौशल",
    careerInterest: "करियर में रुचि",
    workPref: "रोजगार के पसंद",
    mobilityLimit: "आवागमन सीमा",
    location: "जगह",
    skillGapTitle: "रउवा आजीविका आउर कौशल अंतर (Skill Gap) के समझीं",
    skillGapSub: "प्रायोगिक क्षमता आउर कौशल मानक के विश्लेषणात्मक मूल्यांकन",
    currentSit: "1. अभी के स्थिति",
    keyStrengths: "2. मुख्य क्षमता",
    identifiedGaps: "3. पहचानल गइल कौशल अंतर",
    recTitle: "अनुशंसित कौशल रस्ता (NSQF Pathways)",
    recSub: "रउवा प्रोफाइल आउर पास के PM-AJAY GIA ट्रेनिंग केंद्र के अनुसार",
    potentialMatch: "संभावित मैच — पक्का पात्रता आधिकारिक PM-AJAY दिशानिर्देश के अनुसार तय होई",
    matchScore: "मैच स्कोर",
    whyRecommended: "काहे अनुशंसित?",
    outcomes: "आजीविका परिणाम:",
    viewDetailsDoc: "आजीविका जानकारी आउर कागज देखीं →",
    roadmapTag: "रणनीतिक करियर समयरेखा",
    roadmapTitle: "रउवा अनुशंसित आजीविका रोडमैप",
    roadmapSub: "मौजूदा कौशल से स्थाई धंधा तक चरणबद्ध रस्ता",
    roadmapSteps: [
      { step: "1", title: "मौजूदा कौशल", desc: "प्रायोगिक अनुभव के पहचान" },
      { step: "2", title: "कौशल अंतर", desc: "तकनीकी अंतर के पहचान" },
      { step: "3", title: "NSQF ट्रेनिंग", desc: "फ्री 3-महिना के PM-AJAY GIA कोर्स" },
      { step: "4", title: "प्रमाणन", desc: "सेक्टर स्किल काउंसिल सर्टिफिकेट" },
      { step: "5", title: "स्थानीय रोजगार", desc: "अप्रेंटिसशिप या नौकरी" },
      { step: "6", title: "स्वरोजगार", desc: "मुद्रा लोन आउर व्यापार स्थापना" }
    ],
    ruralTitle: "ग्रामीण आउर कम-कनेक्टिविटी वाला क्षेत्रन खातिर बनल",
    ruralSub: "ग्राम पंचायतन में बिना कउनो रुकावट के पहुंच",
    modalDuration: "अवधि:",
    modalEdu: "पढ़ाई:",
    modalBenefits: "PM-AJAY GIA के फायदा",
    modalDocs: "जरूरी कागज के सूची",
    modalOpp: "रउवा पास के मौका",
    getGuidance: "आवेदन मार्गदर्शन पाईं →",
    guidanceAlert: "आवेदन मार्गदर्शन तैयार! रउवा कागज सूची आउर पास के ट्रेनिंग केंद्र के संपर्क विवरण तैयार कर लिहल गइल बा।",
    applicationGuideSteps: ["कदम 1: अपना लगे के ग्राम पंचायत भा सीएससी (CSC) केंद्र प जाईं आ PM-AJAY कौशल ट्रेनिंग के बारे में पूछीं।", "कदम 2: आपन आधार कार्ड, जाति प्रमाण पत्र आ बैंक पासबुक संगे ले जाइल मत भुलाईं।", "कदम 3: अधिकारी रउवा फॉर्म भरिहें आ रउवा चुनल कोर्स (जइसे: सोलर, वायरिंग) में रउवा के रजिस्टर करिहें।", "कदम 4: रउवा के 3 महीना के फ्री ट्रेनिंग मिली, आ संगे रोज 150 रुपया के स्टाइपेंड भी दिहल जाई।", "कदम 5: ट्रेनिंग पूरा भइला पर रउवा के सर्टिफिकेट आ टूलकिट मिली, जवना से रउवा आपन काम भा नौकरी शुरू कर सकत बानी।"],
    questions: [
        {
            "prompt": "रउवा पढ़ाई केतना भइल बा?",
            "subtext": "(जइसे: 8वीं पास, 10वीं पास, 12वीं पास)",
            "options": [
                "8वीं पास या ओकरा से कम",
                "10वीं पास",
                "12वीं पास",
                "डिप्लोमा / स्नातक"
            ]
        },
        {
            "prompt": "रउवा अभी का काम करब जा?",
            "subtext": "(जइसे: खेती-मजदूरी, दुकान प काम)",
            "options": [
                "खेती / कृषि मजदूर",
                "दुकान / वर्कशॉप हेल्पर",
                "गृहिणी",
                "विद्यार्थी / बेरोजगार"
            ]
        },
        {
            "prompt": "रउवा परिवार के पुरान काम का ह?",
            "subtext": "(जइसे: खेती, बढ़ईगीरी, सिलाई)",
            "options": [
                "खेती / किसानी",
                "बढ़ईगीरी / मिस्त्री",
                "सिलाई / कपड़ा बुनाई",
                "हस्तशिल्प / पशुपालन"
            ]
        },
        {
            "prompt": "रउवा अभी का-का काम आवेला?",
            "subtext": "(जइसे: बिजली के काम, कंप्यूटर)",
            "options": [
                "बेसिक वायरिंग / मरम्मत",
                "सिलाई आ कटाई",
                "गाड़ी सुधार / टूल्स",
                "कंप्यूटर चलावल"
            ]
        },
        {
            "prompt": "रउवा आगे चलके का काम सीखल चाहब?",
            "subtext": "(जइसे: सोलर, बिजली काम, कंप्यूटर)",
            "options": [
                "इलेक्ट्रिशियन / बिजली काम",
                "सोलर पीवी / सोलर पंप",
                "ऑटोमोटिव / ईवी टेक्निशियन",
                "कंप्यूटर / डिजिटल सेवा"
            ]
        },
        {
            "prompt": "रउवा नौकरी कइल चाहत बानी कि आपन काम?",
            "subtext": "(जइसे: खुद के बिजनेस या नौकरी)",
            "options": [
                "आपन खुद के काम",
                "वेतन वाली नौकरी",
                "दुनू में जवन बढ़िया होखे"
            ]
        },
        {
            "prompt": "रउवा ट्रेनिंग खातिर केतना दूर जा सकत बानी?",
            "subtext": "(जइसे: गाँव के लगे, 25 किमी)",
            "options": [
                "गाँव / 10 किमी के भीतर",
                "20-25 किमी तक",
                "पूरा जिला में",
                "राज्य के कवनों शहर में"
            ]
        },
        {
            "prompt": "रउवा कहाँ रहब जा? (राज्य, जिला, गाँव)",
            "subtext": "(जइसे: बिहार, पटना, बिहटा)",
            "options": [
                "पटना, बिहार",
                "गया, बिहार",
                "मुजफ्फरपुर, बिहार",
                "छपरा, बिहार"
            ]
        }
    ]
  },
  mai: {
    navVoice: "🎙️ आवाज इंटरव्यू",
    navProfile: "📊 प्रोफाइल आ सिफारिश",
    navBack: "मुख्य साइट पर वापस",
    bannerTitle: "“अहाँक आवाज। अहाँक कौशल। अहाँक मौका।”",
    bannerSub: "PM-AJAY के तहत SC लाभार्थियन लेल AI-संचालित आवाज आजीविका आ कौशल मार्गदर्शन।",
    bannerDesc: "सरकारी साथी सँ अपन भाषा मे बात करू। AI सहायक अहाँक पृष्ठभूमि, मौजूदा कौशल आ रुचियन केँ बुझि कऽ सही NSQF-अनुशंसित ट्रेनिंग आ स्थानीय रोजगार खोजय मे मदद करैत अछि।",
    journeyTitle: "पूरा आजीविका प्रक्रिया:",
    journeyCitizen: "👤 नागरिक",
    journeyVoice: "🎙️ आवाज AI",
    journeyGap: "⚡ कौशल अंतर",
    journeyTraining: "🎓 NSQF ट्रेनिंग",
    journeyLivelihood: "💼 आजीविका",
    talkCTA: "🎙️ सरकारी साथी सँ बात करू",
    sampleHeader: "नमूना नागरिक प्रोफाइल (जल्दी मूल्यांकन)",
    sampleDesc: "सिफारिश इंजन केँ तुरंत परखय लेल कोनो एक प्रोफाइल चुनू:",
    qProgress: "सवाल",
    of: "मे सँ",
    voiceGuide: "सरकारी साथी आवाज गाइड",
    speaking: "बजि रहल छी...",
    noTyping: "टाइप करबाक जरूरत नहि। मात्र सोझे बाजु।",
    repeatVoice: "🔊 आवाज दोहराऊ",
    micListening: "🔴 सुनि रहल छी... अपन माइक मे साफ बाजु",
    micTapToSpeak: "जवाब बजबाय लेल माइक पर क्लिक करू",
    speechRecognized: "पहचानल गेल जवाब:",
    confirmNext: "जवाब पक्का करू आ आगू बढ़ू →",
    orClick: "या जवाब चुनू:",
    micIssue: "माइक मे कोनो दिक्कत अछि?",
    hideTyping: "टाइपिंग बॉक्स छिपाऊ",
    typeAnswer: "⌨️ एकर बजाय अपन जवाब टाइप करू",
    typePlaceholder: "अपन जवाब टाइप करू...",
    next: "आगू बढ़ू",
    profileTitle: "अहाँक आजीविका प्रोफाइल",
    profileSub: "अहाँक AI आवाज मूल्यांकन आ पृष्ठभूमि सँ बनल",
    editProfile: "प्रोफाइल बदलू",
    saveProfile: "प्रोफाइल सुरक्षित करू",
    retakeInterview: "🔄 आवाज इंटरव्यू फेर सँ दिअ",
    education: "पढ़ाई",
    currentWork: "एखनक काज",
    traditionalWork: "खानदानी काज",
    existingSkills: "मौजूदा कौशल",
    careerInterest: "करियर मे रुचि",
    workPref: "रोजगारक पसंद",
    mobilityLimit: "आवागमन सीमा",
    location: "जगह",
    skillGapTitle: "अहाँक आजीविका आ कौशल अंतर (Skill Gap) केँ बुझू",
    skillGapSub: "प्रायोगिक क्षमता आ कौशल मानकक विश्लेषणात्मक मूल्यांकन",
    currentSit: "1. एखनक स्थिति",
    keyStrengths: "2. मुख्य क्षमता",
    identifiedGaps: "3. पहचानल गेल कौशल अंतर",
    recTitle: "अनुशंसित कौशल रस्ता (NSQF Pathways)",
    recSub: "अहाँक प्रोफाइल आ पासक PM-AJAY GIA ट्रेनिंग केंद्रक अनुसार",
    potentialMatch: "संभावित मैच — पक्का पात्रता आधिकारिक PM-AJAY दिशानिर्देश क अनुसार तय होएत",
    matchScore: "मैच स्कोर",
    whyRecommended: "किएक अनुशंसित?",
    outcomes: "आजीविका परिणाम:",
    viewDetailsDoc: "आजीविका जानकारी आ कागज देखू →",
    roadmapTag: "रणनीतिक करियर समयरेखा",
    roadmapTitle: "अहाँक अनुशंसित आजीविका रोडमैप",
    roadmapSub: "मौजूदा कौशल सँ स्थाई धंधा धरि चरणबद्ध रस्ता",
    roadmapSteps: [
      { step: "1", title: "मौजूदा कौशल", desc: "प्रायोगिक अनुभवक पहचान" },
      { step: "2", title: "कौशल अंतर", desc: "तकनीकी अंतरक पहचान" },
      { step: "3", title: "NSQF ट्रेनिंग", desc: "फ्री 3-महिनाक PM-AJAY GIA कोर्स" },
      { step: "4", title: "प्रमाणन", desc: "सेक्टर स्किल काउंसिल सर्टिफिकेट" },
      { step: "5", title: "स्थानीय रोजगार", desc: "अप्रेंटिसशिप या नौकरी" },
      { step: "6", title: "स्वरोजगार", desc: "मुद्रा लोन आ व्यापार स्थापना" }
    ],
    ruralTitle: "ग्रामीण आ कम-कनेक्टिविटी वाला क्षेत्रन लेल बनल",
    ruralSub: "ग्राम पंचायतन मे बिना कोनो रुकावट कें पहुंच",
    modalDuration: "अवधि:",
    modalEdu: "पढ़ाई:",
    modalBenefits: "PM-AJAY GIA क फायदा",
    modalDocs: "जरूरी कागजक सूची",
    modalOpp: "अहाँक पासक मौका",
    getGuidance: "आवेदन मार्गदर्शन पाऊ →",
    guidanceAlert: "आवेदन मार्गदर्शन तैयार! अहाँक कागज सूची आ पासक ट्रेनिंग केंद्रक संपर्क विवरण तैयार कए लेल गेल अछि।",
    applicationGuideSteps: ["कदम 1: अपन नजदीकक ग्राम पंचायत वा सीएससी (CSC) केंद्र पर जाउ आ PM-AJAY कौशल ट्रेनिंगक विषय मे पुछू।", "कदम 2: अपन आधार कार्ड, जाति प्रमाण पत्र आ बैंक पासबुक सँग लऽ जेबाक लेल नहि बिसरू।", "कदम 3: अधिकारी अहाँक फॉर्म भरताह आ अहाँक चुनल कोर्स (जहिना: सोलर, वायरिंग) मे अहाँक पंजीकरण करताह।", "कदम 4: अहाँक 3 मासक फ्री ट्रेनिंग भेटत, आ सँगहि रोज 150 टकाक स्टाइपेंड सेहो देल जायत।", "कदम 5: ट्रेनिंग पूरा भेला पर अहाँक सर्टिफिकेट आ टूलकिट भेटत, जकरा सँ अहाँ अपन काज वा नौकरी शुरू कऽ सकैत छी।"],
    questions: [
        {
            "prompt": "अहाँक पढ़ाई कतेक भेल अछि?",
            "subtext": "(जहिना: 8वीं पास, 10वीं पास, 12वीं पास)",
            "options": [
                "8वीं पास वा ओहि सँ कम",
                "10वीं पास",
                "12वीं पास",
                "डिप्लोमा / स्नातक"
            ]
        },
        {
            "prompt": "अहाँ एखन की काज करैत छी?",
            "subtext": "(जहिना: खेती-मजदूरी, दुकान पर काज)",
            "options": [
                "खेती / कृषि मजदूर",
                "दुकान / वर्कशॉप हेल्पर",
                "गृहिणी",
                "विद्यार्थी / बेरोजगार"
            ]
        },
        {
            "prompt": "अहाँक परिवारक पुरान काज की रहल अछि?",
            "subtext": "(जहिना: खेती, बढ़ईगीरी, सिलाई)",
            "options": [
                "खेती / किसानी",
                "बढ़ईगीरी / मिस्त्री",
                "सिलाई / कपड़ा बुनाई",
                "हस्तशिल्प / पशुपालन"
            ]
        },
        {
            "prompt": "अहाँक एखन की-की काज आबैया?",
            "subtext": "(जहिना: बिजलीक काज, कंप्यूटर)",
            "options": [
                "बेसिक वायरिंग / बिजली मरम्मत",
                "सिलाई आ कटाई",
                "गाड़ी सुधार / टूल्स",
                "कंप्यूटर चलाउब"
            ]
        },
        {
            "prompt": "अहाँ आगाँ की काज सिखय चाहब?",
            "subtext": "(जहिना: सोलर, बिजली काज, कंप्यूटर)",
            "options": [
                "इलेक्ट्रिशियन / बिजली काज",
                "सोलर पीवी / सोलर पंप",
                "ऑटोमोटिव / ईवी टेक्निशियन",
                "कंप्यूटर / डिजिटल सेवा"
            ]
        },
        {
            "prompt": "अहाँ नौकरी करय चाहैत छी वा अपन काज?",
            "subtext": "(जहिना: खुदक बिजनेस वा नौकरी)",
            "options": [
                "अपन खुदक काज",
                "वेतन वाली नौकरी",
                "दुन्नू में जे नीक होय"
            ]
        },
        {
            "prompt": "अहाँ ट्रेनिंग लेल कतेक दूर जा सकैत छी?",
            "subtext": "(जहिना: गामक लग, 25 किमी)",
            "options": [
                "गामक लग / 10 किमी",
                "20-25 किमी तक",
                "पूरा जिला में",
                "राज्यक कोनो शहर में"
            ]
        },
        {
            "prompt": "अहाँ कतय रहैत छी? (राज्य, जिला, गाम)",
            "subtext": "(जहिना: बिहार, दरभंगा, बेनीपुर)",
            "options": [
                "दरभंगा, बिहार",
                "मधुबनी, बिहार",
                "समस्तीपुर, बिहार",
                "सहरसा, बिहार"
            ]
        }
    ]
  }
};
