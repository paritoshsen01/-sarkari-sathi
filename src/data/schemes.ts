export interface Scheme {
  id: string;
  name: string;
  category: string;
  icon: string;
  benefit: string;
  whatIsIt: string;
  whoIsEligible: string;
  documents: string[];
  link: string;
  tags: string[]; 
  guideSteps: Record<string, string[]>;
  score?: number;
}

export const prototypeSchemes: Scheme[] = [
  {
    id: "pm-kisan",
    name: "PM-KISAN",
    category: "Agriculture",
    icon: "🌾",
    benefit: "Eligible farmers can receive financial support under the scheme.",
    whatIsIt: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN) is a central sector scheme that provides income support to all landholding farmers' families in the country.",
    whoIsEligible: "Applicant must be a farmer with cultivable landholding in their name.",
    documents: [
      "Aadhaar Card",
      "Bank Account (Aadhaar linked)",
      "Land Ownership Documents",
      "Citizenship Certificate"
    ],
    link: "https://pmkisan.gov.in/",
    tags: ["money", "पैसा", "agriculture", "farmer", "finance"],
    guideSteps: {
      en: [
        "First, open your web browser and navigate to the official portal: pmkisan.gov.in.",
        "Scroll down to the 'Farmers Corner' section on the right side of the homepage and click on the 'New Farmer Registration' button.",
        "A new page will open. Select 'Rural Farmer Registration' or 'Urban Farmer Registration'. Enter your Aadhaar Number, your active Mobile Number, select your State from the dropdown, and click 'Get OTP'.",
        "Enter the OTP received on your mobile. Once verified, the detailed registration form will open on your screen.",
        "Carefully fill in your personal details, and then enter your exact land details, including your Survey or Khata number and Khasra number.",
        "Finally, upload a scanned PDF copy of your land ownership document, check the declaration box, and click the 'Save' button to submit your application."
      ],
      hi: [
        "सबसे पहले, अपने ब्राउज़र को खोलें और आधिकारिक पोर्टल पर जाएं: pmkisan.gov.in।",
        "होमपेज के दाईं ओर 'फार्मर्स कॉर्नर' सेक्शन में नीचे जाएं और 'नया किसान पंजीकरण (New Farmer Registration)' बटन पर क्लिक करें।",
        "एक नया पेज खुलेगा। 'ग्रामीण किसान पंजीकरण' चुनें, अपना आधार नंबर, मोबाइल नंबर दर्ज करें, अपना राज्य चुनें और 'Get OTP' पर क्लिक करें।",
        "अपने मोबाइल पर प्राप्त ओटीपी दर्ज करें। सत्यापित होने के बाद, विस्तृत पंजीकरण फॉर्म खुल जाएगा।",
        "अपनी व्यक्तिगत जानकारी भरें, और फिर अपनी जमीन का विवरण जैसे सर्वे या खाता नंबर और खसरा नंबर सही-सही दर्ज करें।",
        "अंत में, अपनी जमीन के दस्तावेज की पीडीएफ कॉपी अपलोड करें, घोषणा बॉक्स पर टिक करें और अपना आवेदन जमा करने के लिए 'Save' बटन पर क्लिक करें।"
      ]
    }
  },
  {
    id: "pm-jay",
    name: "Ayushman Bharat – PM-JAY",
    category: "Healthcare",
    icon: "🏥",
    benefit: "Provides health coverage to eligible families.",
    whatIsIt: "Pradhan Mantri Jan Arogya Yojana (PM-JAY) provides a health cover of ₹5 lakhs per family per year for secondary and tertiary care hospitalization.",
    whoIsEligible: "Families belonging to the poor and vulnerable population based on SECC database.",
    documents: [
      "Aadhaar Card",
      "Ration Card",
      "Mobile Number",
      "PMJAY ID (if applicable)"
    ],
    link: "https://beneficiary.nha.gov.in/",
    tags: ["health", "hospital", "स्वास्थ्य", "इलाज", "medical"],
    guideSteps: {
      en: [
        "First, open your browser and go to the official beneficiary portal: beneficiary.nha.gov.in.",
        "On the login screen, select the 'Beneficiary' option. Enter your active mobile number, click the verify button, and log in using the OTP sent to your phone.",
        "Once logged into the dashboard, select your State from the dropdown, choose 'PMJAY' under the scheme, and search for your name using your Aadhaar Number or Ration Card ID.",
        "If your name appears in the search results, click on the 'Action' icon on the far right side of your name to initiate your eKYC process.",
        "Authenticate yourself using Aadhaar OTP or Fingerprint. After successful authentication, upload a live photograph of yourself using your webcam or phone camera.",
        "Click submit. Once your eKYC is approved by the authorities, you can log back in and download your Ayushman Card from this exact same portal."
      ],
      hi: [
        "सबसे पहले, अपना ब्राउज़र खोलें और आधिकारिक लाभार्थी पोर्टल: beneficiary.nha.gov.in पर जाएं।",
        "लॉगिन स्क्रीन पर, 'Beneficiary' (लाभार्थी) विकल्प चुनें। अपना मोबाइल नंबर दर्ज करें, 'Verify' बटन पर क्लिक करें, और फोन पर आए ओटीपी का उपयोग करके लॉग इन करें।",
        "डैशबोर्ड खुलने के बाद, अपना राज्य चुनें, योजना में 'PMJAY' चुनें, और अपने आधार नंबर या राशन कार्ड आईडी का उपयोग करके अपना नाम खोजें।",
        "यदि आपका नाम खोज परिणामों में आता है, तो अपनी ई-केवाईसी (eKYC) प्रक्रिया शुरू करने के लिए अपने नाम के दाईं ओर 'Action' आइकन पर क्लिक करें।",
        "आधार ओटीपी या फिंगरप्रिंट का उपयोग करके खुद को प्रमाणित करें। सफल प्रमाणीकरण के बाद, वेबकैम या फोन कैमरे का उपयोग करके अपनी एक लाइव फोटो अपलोड करें।",
        "सबमिट पर क्लिक करें। अधिकारियों द्वारा आपकी ई-केवाईसी स्वीकृत होने के बाद, आप वापस लॉग इन कर सकते हैं और इसी पोर्टल से अपना आयुष्मान कार्ड डाउनलोड कर सकते हैं।"
      ]
    }
  },
  {
    id: "scholarship",
    name: "National Scholarship Scheme",
    category: "Education",
    icon: "🎓",
    benefit: "Financial assistance for eligible students.",
    whatIsIt: "Provides financial assistance to meritorious students from low-income families to meet a part of their day-to-day expenses while pursuing higher studies.",
    whoIsEligible: "Students meeting specific academic criteria and family income limits.",
    documents: [
      "Aadhaar Card",
      "Bank Account",
      "Income Certificate",
      "Previous Year Marksheets",
      "Caste Certificate (if applicable)"
    ],
    link: "https://scholarships.gov.in/",
    tags: ["education", "school", "college", "पढ़ाई", "शिक्षा", "money"],
    guideSteps: {
      en: [
        "First, open your web browser and go to the National Scholarship Portal at scholarships.gov.in.",
        "Click on the 'Applicant Corner' and select 'New Registration'. Read all the guidelines on the page carefully, check the undertaking boxes, and click 'Continue'.",
        "Select your state of domicile, scholarship category (Pre-Matric or Post-Matric), name, date of birth, and enter your Aadhaar details and bank account information.",
        "Click on 'Register'. An Application ID and password will be generated and sent to your registered mobile number.",
        "Go back to the homepage, click on 'Fresh Login', and enter your new Application ID and password. You will be prompted to change your password on the first login.",
        "After logging in, click on 'Application Form'. Fill in your academic details, upload your scanned income and caste certificates, and click 'Final Submit'."
      ],
      hi: [
        "सबसे पहले, scholarships.gov.in पर नेशनल स्कॉलरशिप पोर्टल खोलें।",
        "'एप्लीकेंट कॉर्नर' पर क्लिक करें और 'न्यू रजिस्ट्रेशन' चुनें। पेज पर दिए गए सभी दिशा-निर्देशों को ध्यान से पढ़ें, अंडरटेकिंग बॉक्स चेक करें और 'कंटिन्यू' पर क्लिक करें।",
        "अपना राज्य, छात्रवृत्ति की श्रेणी (प्री-मैट्रिक या पोस्ट-मैट्रिक), नाम, जन्म तिथि चुनें और अपना आधार और बैंक खाता विवरण दर्ज करें।",
        "'रजिस्टर' पर क्लिक करें। एक एप्लीकेशन आईडी और पासवर्ड आपके पंजीकृत मोबाइल नंबर पर भेजा जाएगा।",
        "होमपेज पर वापस आएं, 'फ्रेश लॉगिन' पर क्लिक करें और अपनी नई एप्लीकेशन आईडी और पासवर्ड दर्ज करें। आपको पहली बार लॉग इन करने पर अपना पासवर्ड बदलने के लिए कहा जाएगा।",
        "लॉग इन करने के बाद, 'एप्लीकेशन फॉर्म' पर क्लिक करें। अपनी शैक्षणिक जानकारी भरें, अपना आय और जाति प्रमाण पत्र अपलोड करें, और 'फाइनल सबमिट' पर क्लिक करें।"
      ]
    }
  },
  {
    id: "pm-ujjwala",
    name: "PM Ujjwala Yojana",
    category: "Household / LPG",
    icon: "🔥",
    benefit: "Support for eligible households to obtain an LPG connection.",
    whatIsIt: "Pradhan Mantri Ujjwala Yojana (PMUY) aims to safeguard the health of women & children by providing them with a clean cooking fuel – LPG.",
    whoIsEligible: "Adult woman belonging to a poor household not having an LPG connection.",
    documents: [
      "Aadhaar Card",
      "Ration Card",
      "Bank Account",
      "Address Proof",
      "Passport Size Photograph"
    ],
    link: "https://www.pmuy.gov.in/",
    tags: ["gas", "fuel", "गैस", "खाना", "cylinder"],
    guideSteps: {
      en: [
        "First, go to the official PM Ujjwala Yojana website at pmuy.gov.in.",
        "On the homepage, click on the 'Apply for New Ujjwala 2.0 Connection' link.",
        "A popup will appear asking you to choose your preferred LPG distributor: Indane, BharatGas, or HP Gas. Click on the link for the company you prefer.",
        "You will be redirected to the respective gas company's portal. Select 'Ujjwala Beneficiary Connection' type.",
        "Search for your nearest distributor by selecting your State and District. Then, enter your Aadhaar Number to verify your identity through an OTP.",
        "Fill out the online application form with your demographic details and bank account information. Upload your Ration Card and submit the application."
      ],
      hi: [
        "सबसे पहले, pmuy.gov.in पर आधिकारिक पीएम उज्ज्वला योजना वेबसाइट पर जाएं।",
        "होमपेज पर, 'Apply for New Ujjwala 2.0 Connection' (नए उज्ज्वला 2.0 कनेक्शन के लिए आवेदन करें) लिंक पर क्लिक करें।",
        "एक पॉपअप दिखाई देगा जिसमें आपसे अपना पसंदीदा एलपीजी वितरक चुनने के लिए कहा जाएगा: इंडेन, भारतगैस, या एचपी गैस। उस कंपनी के लिंक पर क्लिक करें जिसे आप पसंद करते हैं।",
        "आपको संबंधित गैस कंपनी के पोर्टल पर भेज दिया जाएगा। 'उज्ज्वला लाभार्थी कनेक्शन' का प्रकार चुनें।",
        "अपना राज्य और जिला चुनकर अपने निकटतम वितरक को खोजें। इसके बाद, ओटीपी के माध्यम से अपनी पहचान सत्यापित करने के लिए अपना आधार नंबर दर्ज करें।",
        "अपनी व्यक्तिगत जानकारी और बैंक खाते के विवरण के साथ ऑनलाइन आवेदन फॉर्म भरें। अपना राशन कार्ड अपलोड करें और आवेदन जमा करें।"
      ]
    }
  },
  {
    id: "pm-ajay",
    name: "PM-AJAY",
    category: "Welfare / SC Empowerment",
    icon: "🤝",
    benefit: "Financial assistance, skill development, and infrastructure support for Scheduled Caste communities.",
    whatIsIt: "Pradhan Mantri Anusuchit Jaati Abhyuday Yojana (PM-AJAY) is a merged scheme aimed at reducing poverty of the SC communities by generation of additional employment opportunities through skill development, income generating schemes and other initiatives.",
    whoIsEligible: "Individuals and communities belonging to Scheduled Castes meeting the income and other specific criteria.",
    documents: [
      "Aadhaar Card",
      "Caste Certificate (SC)",
      "Income Certificate",
      "Bank Account Details",
      "Address Proof"
    ],
    link: "https://pmajay.dosje.gov.in/",
    tags: ["welfare", "money", "business", "पैसा", "व्यापार"],
    guideSteps: {
      en: [
        "First, navigate to the official portal at pmajay.dosje.gov.in.",
        "On the homepage menu, look for the 'Beneficiary Registration' or 'Login' button and click on it.",
        "If you are a new user, click on 'Register' and enter your Aadhaar details to verify your identity via OTP.",
        "Once registered, log in to your dashboard. Select the specific component you wish to apply for, such as 'Income Generating Scheme' or 'Skill Development'.",
        "Fill in the detailed application form. You will be required to input your SC Caste Certificate number so the system can verify it online.",
        "Upload your project proposal or training preference, enter your bank details, and click 'Submit'. You can track your application status directly from this dashboard."
      ],
      hi: [
        "सबसे पहले, आधिकारिक पोर्टल pmajay.dosje.gov.in पर जाएं।",
        "होमपेज मेनू पर, 'Beneficiary Registration' (लाभार्थी पंजीकरण) या 'लॉगिन' बटन खोजें और उस पर क्लिक करें।",
        "यदि आप एक नए उपयोगकर्ता हैं, तो 'रजिस्टर' पर क्लिक करें और ओटीपी के माध्यम से अपनी पहचान सत्यापित करने के लिए अपना आधार विवरण दर्ज करें।",
        "पंजीकृत होने के बाद, अपने डैशबोर्ड में लॉग इन करें। उस विशिष्ट घटक का चयन करें जिसके लिए आप आवेदन करना चाहते हैं, जैसे कि 'आय सृजन योजना' या 'कौशल विकास'।",
        "विस्तृत आवेदन फॉर्म भरें। आपको अपना एससी जाति प्रमाण पत्र नंबर दर्ज करना होगा ताकि सिस्टम इसे ऑनलाइन सत्यापित कर सके।",
        "अपना प्रोजेक्ट प्रस्ताव या प्रशिक्षण वरीयता अपलोड करें, अपना बैंक विवरण दर्ज करें, और 'सबमिट' पर क्लिक करें। आप सीधे इस डैशबोर्ड से अपने आवेदन की स्थिति को ट्रैक कर सकते हैं।"
      ]
    }
  },
  {
    id: "jal-jeevan",
    name: "Jal Jeevan Mission",
    category: "Infrastructure / Water",
    icon: "💧",
    benefit: "Ensures safe and adequate drinking water through individual household tap connections.",
    whatIsIt: "Jal Jeevan Mission is envisioned to provide safe and adequate drinking water through individual household tap connections by 2024 to all households in rural India.",
    whoIsEligible: "Every rural household without a tap water connection.",
    documents: [
      "Aadhaar Card",
      "Address Proof / Ration Card",
      "Gram Panchayat Approval"
    ],
    link: "https://jaljeevanmission.gov.in/",
    tags: ["water", "पानी", "जल", "drinking"],
    guideSteps: {
      en: [
        "Please note: The Jal Jeevan Mission application is primarily managed locally through your state's Water Supply Department portal, not the central website.",
        "First, visit your specific State Water and Sanitation Department website (e.g., e-Jal in some states) or visit jaljeevanmission.gov.in to find your state's portal link.",
        "On your state's water portal, look for the 'Apply for New Tap Connection' or 'Har Ghar Jal Application' link.",
        "Register using your mobile number. Fill in your district, block, Gram Panchayat, and village name accurately.",
        "Enter your personal details, upload a copy of your Aadhaar Card and property tax receipt or Ration Card.",
        "Submit the form. You will receive an application reference number to track when the local Panchayat officials will inspect and approve your connection."
      ],
      hi: [
        "कृपया ध्यान दें: जल जीवन मिशन का आवेदन मुख्य रूप से केंद्रीय वेबसाइट के बजाय आपके राज्य के जल आपूर्ति विभाग के पोर्टल के माध्यम से प्रबंधित किया जाता है।",
        "सबसे पहले, अपने विशिष्ट राज्य जल और स्वच्छता विभाग की वेबसाइट (जैसे कुछ राज्यों में ई-जल) पर जाएं या अपने राज्य का पोर्टल लिंक खोजने के लिए jaljeevanmission.gov.in पर जाएं।",
        "अपने राज्य के जल पोर्टल पर, 'Apply for New Tap Connection' (नए नल कनेक्शन के लिए आवेदन करें) या 'हर घर जल आवेदन' लिंक खोजें।",
        "अपने मोबाइल नंबर का उपयोग करके पंजीकरण करें। अपना जिला, ब्लॉक, ग्राम पंचायत और गांव का नाम सही-सही भरें।",
        "अपना व्यक्तिगत विवरण दर्ज करें, अपने आधार कार्ड और संपत्ति कर रसीद या राशन कार्ड की एक प्रति अपलोड करें।",
        "फॉर्म जमा करें। आपको एक आवेदन संदर्भ संख्या प्राप्त होगी जिससे आप यह ट्रैक कर सकते हैं कि स्थानीय पंचायत अधिकारी कब आपके कनेक्शन का निरीक्षण और अनुमोदन करेंगे।"
      ]
    }
  },
  {
    id: "saubhagya",
    name: "Saubhagya Yojana",
    category: "Infrastructure / Electricity",
    icon: "⚡",
    benefit: "Provides free electricity connections to all un-electrified households in rural areas.",
    whatIsIt: "Pradhan Mantri Sahaj Bijli Har Ghar Yojana (Saubhagya) is a scheme to ensure electrification of all willing households in the country.",
    whoIsEligible: "Poor households lacking an electricity connection.",
    documents: [
      "Aadhaar Card",
      "Ration Card / BPL Card",
      "Address Proof"
    ],
    link: "https://saubhagya.gov.in/",
    tags: ["electricity", "बिजली", "power", "light", "current"],
    guideSteps: {
      en: [
        "While you can view scheme details at saubhagya.gov.in, actual applications are processed through your State Electricity Distribution Company (DISCOM) portal.",
        "First, go to your local DISCOM's official website (for example, UPPCL in UP, MSEDCL in Maharashtra).",
        "Look for the 'New Connection Services' or 'Saubhagya Scheme Application' button on their homepage.",
        "Register your mobile number to create an account and click on 'Apply for New Connection'.",
        "Select the category as 'BPL' or 'Saubhagya Beneficiary' so that connection charges are waived.",
        "Upload a scanned copy of your Aadhaar Card, BPL Ration Card, and a photo of your house. Click 'Submit' to generate your service request number."
      ],
      hi: [
        "हालाँकि आप saubhagya.gov.in पर योजना का विवरण देख सकते हैं, लेकिन वास्तविक आवेदन आपके राज्य विद्युत वितरण कंपनी (DISCOM) के पोर्टल के माध्यम से संसाधित किए जाते हैं।",
        "सबसे पहले, अपने स्थानीय डिस्कॉम (DISCOM) की आधिकारिक वेबसाइट (उदाहरण के लिए, यूपी में UPPCL, महाराष्ट्र में MSEDCL) पर जाएं।",
        "उनके होमपेज पर 'New Connection Services' (नई कनेक्शन सेवाएं) या 'सौभाग्य योजना आवेदन' बटन खोजें।",
        "खाता बनाने के लिए अपना मोबाइल नंबर पंजीकृत करें और 'Apply for New Connection' (नए कनेक्शन के लिए आवेदन करें) पर क्लिक करें।",
        "श्रेणी को 'BPL' (बीपीएल) या 'सौभाग्य लाभार्थी' के रूप में चुनें ताकि कनेक्शन शुल्क माफ हो जाए।",
        "अपने आधार कार्ड, बीपीएल राशन कार्ड और अपने घर की तस्वीर की स्कैन कॉपी अपलोड करें। अपना सेवा अनुरोध नंबर प्राप्त करने के लिए 'Submit' (जमा करें) पर क्लिक करें।"
      ]
    }
  },
  {
    id: "pm-gkay",
    name: "PM Garib Kalyan Anna Yojana",
    category: "Welfare / Food Grains",
    icon: "🌾",
    benefit: "Provides free food grains to the poorest of the poor.",
    whatIsIt: "PM-GKAY is a food security welfare scheme designed to provide free food grains (rice/wheat) to the poor through the Public Distribution System (PDS).",
    whoIsEligible: "Families holding Priority Householder (PHH) or Antyodaya Anna Yojana (AAY) ration cards.",
    documents: [
      "Aadhaar Card",
      "Ration Card (Active)"
    ],
    link: "https://nfsa.gov.in/",
    tags: ["food grains", "राशन", "अनाज", "food", "ration"],
    guideSteps: {
      en: [
        "There is no direct online application for PM-GKAY. You only need a valid, active Ration Card to be eligible.",
        "However, to check your entitlement online, visit the National Food Security portal at nfsa.gov.in.",
        "Click on the 'Citizen Corner' menu at the top of the homepage and select 'Know Your Ration Card Status'.",
        "Enter your Ration Card Number and the captcha code on the screen, then click 'Search'.",
        "The portal will display your family details and your exact monthly entitlement of free food grains under PM-GKAY.",
        "If you do not have a Ration Card, you must visit your State's Food and Civil Supplies portal to apply for a new Ration Card first."
      ],
      hi: [
        "पीएम-जीकेएवाई (PM-GKAY) के लिए कोई सीधा ऑनलाइन आवेदन नहीं है। पात्र होने के लिए आपको केवल एक वैध, सक्रिय राशन कार्ड की आवश्यकता है।",
        "हालाँकि, ऑनलाइन अपनी पात्रता की जांच करने के लिए, nfsa.gov.in पर राष्ट्रीय खाद्य सुरक्षा पोर्टल पर जाएं।",
        "होमपेज के शीर्ष पर 'Citizen Corner' (नागरिक कॉर्नर) मेनू पर क्लिक करें और 'Know Your Ration Card Status' (अपनी राशन कार्ड की स्थिति जानें) चुनें।",
        "स्क्रीन पर अपना राशन कार्ड नंबर और कैप्चा कोड दर्ज करें, फिर 'Search' (खोजें) पर क्लिक करें।",
        "पोर्टल आपके परिवार के विवरण और पीएम-जीकेएवाई के तहत मुफ्त खाद्यान्न के आपके सटीक मासिक अधिकार को प्रदर्शित करेगा।",
        "यदि आपके पास राशन कार्ड नहीं है, तो आपको सबसे पहले नए राशन कार्ड के लिए आवेदन करने के लिए अपने राज्य के खाद्य और नागरिक आपूर्ति पोर्टल पर जाना होगा।"
      ]
    }
  },
  {
    id: "pm-awas",
    name: "PM Awas Yojana (PMAY-G)",
    category: "Infrastructure / Housing",
    icon: "🏠",
    benefit: "Provides financial assistance to construct a pucca house with basic amenities.",
    whatIsIt: "Pradhan Mantri Awas Yojana - Gramin is a social welfare programme to provide housing for the rural poor in India.",
    whoIsEligible: "Homeless families or families living in kutcha/dilapidated houses, identified through SECC data.",
    documents: [
      "Aadhaar Card",
      "Bank Account",
      "Job Card (MGNREGA)",
      "Swachh Bharat Mission Number"
    ],
    link: "https://pmayg.nic.in/",
    tags: ["housing", "घर", "मकान", "house", "shelter", "money"],
    guideSteps: {
      en: [
        "First, go to the official portal for rural housing: pmayg.nic.in.",
        "Click on the 'Awaassoft' tab in the top menu bar, and from the dropdown, select 'Data Entry'.",
        "A login screen will appear. Note: General citizens cannot fill this out directly. You must log in using the credentials provided by your Gram Panchayat or Block Development Officer.",
        "Once logged in by an official, they will click on 'PMAY-G Registration' to open the detailed form.",
        "The official will enter your personal details, bank account information, Aadhaar number, and your Swachh Bharat Mission (SBM) number.",
        "Finally, the official will upload the consent form and submit the application on your behalf. You can track your status later by clicking on 'Stakeholders' and then 'IAY/PMAYG Beneficiary' using your registration number."
      ],
      hi: [
        "सबसे पहले, ग्रामीण आवास के लिए आधिकारिक पोर्टल पर जाएं: pmayg.nic.in।",
        "शीर्ष मेनू बार में 'Awaassoft' टैब पर क्लिक करें, और ड्रॉपडाउन से 'Data Entry' (डेटा एंट्री) चुनें।",
        "एक लॉगिन स्क्रीन दिखाई देगी। ध्यान दें: आम नागरिक इसे सीधे नहीं भर सकते। आपको अपनी ग्राम पंचायत या खंड विकास अधिकारी (BDO) द्वारा दिए गए क्रेडेंशियल्स का उपयोग करके लॉग इन करना होगा।",
        "एक बार किसी अधिकारी द्वारा लॉग इन करने के बाद, वे विस्तृत फॉर्म खोलने के लिए 'PMAY-G Registration' (पीएमएवाई-जी पंजीकरण) पर क्लिक करेंगे।",
        "अधिकारी आपकी व्यक्तिगत जानकारी, बैंक खाता विवरण, आधार नंबर और आपका स्वच्छ भारत मिशन (SBM) नंबर दर्ज करेगा।",
        "अंत में, अधिकारी सहमति पत्र अपलोड करेगा और आपकी ओर से आवेदन जमा करेगा। आप बाद में अपना पंजीकरण नंबर का उपयोग करके 'Stakeholders' (हितधारकों) और फिर 'IAY/PMAYG Beneficiary' (आईएवाई/पीएमएवाईजी लाभार्थी) पर क्लिक करके अपनी स्थिति को ट्रैक कर सकते हैं।"
      ]
    }
  },
  {
    id: "pmmvy",
    name: "Pradhan Mantri Matru Vandana Yojana (PMMVY)",
    category: "Healthcare",
    icon: "🤰",
    benefit: "Cash incentive of ₹5000 for pregnant women and lactating mothers.",
    whatIsIt: "PMMVY is a maternity benefit program providing partial compensation for wage loss so that the woman can take adequate rest before and after delivery.",
    whoIsEligible: "Pregnant women and lactating mothers for their first living child.",
    documents: [
      "Aadhaar Card",
      "Bank Account",
      "MCP (Mother and Child Protection) Card",
      "Husband's Aadhaar Card"
    ],
    link: "https://pmmvy.wcd.gov.in/",
    tags: ["health", "pregnancy", "mother", "maternity", "baby", "गर्भवती", "महिला"],
    guideSteps: {
      en: [
        "First, visit your nearest Anganwadi Centre (AWC) or approved Health facility.",
        "Alternatively, you can apply online by visiting the official portal: pmmvy.wcd.gov.in.",
        "Click on 'Citizen Login' and register your mobile number to create an account.",
        "Once logged in, fill in the beneficiary details such as name, Aadhaar number, and date of registration in the MCP card.",
        "Upload the required documents including your Aadhaar and bank passbook.",
        "Submit the form. You will receive an acknowledgment slip to track your application."
      ],
      hi: [
        "सबसे पहले, अपने निकटतम आंगनवाड़ी केंद्र (AWC) या अनुमोदित स्वास्थ्य सुविधा केंद्र पर जाएं।",
        "वैकल्पिक रूप से, आप आधिकारिक पोर्टल pmmvy.wcd.gov.in पर जाकर ऑनलाइन आवेदन कर सकते हैं।",
        "'Citizen Login' (नागरिक लॉगिन) पर क्लिक करें और खाता बनाने के लिए अपना मोबाइल नंबर पंजीकृत करें।",
        "लॉग इन करने के बाद, लाभार्थी का विवरण जैसे नाम, आधार नंबर और एमसीपी (MCP) कार्ड में पंजीकरण की तिथि भरें।",
        "अपना आधार और बैंक पासबुक सहित आवश्यक दस्तावेज अपलोड करें।",
        "फॉर्म सबमिट करें। आपको अपना आवेदन ट्रैक करने के लिए एक पावती पर्ची मिलेगी।"
      ]
    }
  },
  {
    id: "pmbjp",
    name: "PM Bhartiya Janaushadhi Pariyojana",
    category: "Healthcare",
    icon: "💊",
    benefit: "Provides quality generic medicines at affordable prices.",
    whatIsIt: "PMBJP is a campaign launched by the Department of Pharmaceuticals to provide quality medicines at affordable prices to the masses through special kendras known as Pradhan Mantri Bhartiya Janaushadhi Kendra.",
    whoIsEligible: "Every citizen of India can avail of affordable medicines at PMBJP Kendras.",
    documents: [
      "Valid Prescription (if buying prescription drugs)"
    ],
    link: "http://janaushadhi.gov.in/",
    tags: ["medicine", "dawai", "pharmacy", "दवा", "मेडिकल", "health"],
    guideSteps: {
      en: [
        "There is no online application required to buy medicines. However, you can find your nearest PMBJP Kendra online.",
        "First, go to the official website: janaushadhi.gov.in.",
        "Click on the 'Kendra' tab on the homepage and select 'Locate Kendra'.",
        "Select your State and District from the dropdown menus.",
        "The portal will display the exact address and contact details of the nearest Janaushadhi Kendra.",
        "Visit the Kendra with a valid doctor's prescription (if required) to buy affordable generic medicines."
      ],
      hi: [
        "दवाएं खरीदने के लिए किसी ऑनलाइन आवेदन की आवश्यकता नहीं है। हालांकि, आप अपने निकटतम पीएमबीजेपी (PMBJP) केंद्र को ऑनलाइन खोज सकते हैं।",
        "सबसे पहले, आधिकारिक वेबसाइट janaushadhi.gov.in पर जाएं।",
        "होमपेज पर 'Kendra' (केंद्र) टैब पर क्लिक करें और 'Locate Kendra' (केंद्र खोजें) चुनें।",
        "ड्रॉपडाउन मेनू से अपना राज्य और जिला चुनें।",
        "पोर्टल निकटतम जन औषधि केंद्र का सटीक पता और संपर्क विवरण प्रदर्शित करेगा।",
        "सस्ती जेनेरिक दवाएं खरीदने के लिए वैध डॉक्टर के पर्चे (यदि आवश्यक हो) के साथ केंद्र पर जाएं।"
      ]
    }
  }
];
