export type LanguageCode = 'en' | 'hi' | 'bun' | 'cg' | 'sat' | 'spv' | 'mr' | 'bn' | 'te' | 'ta' | 'gu' | 'bho' | 'mai';

export const languages = {
  en: {
    code: 'en',
    name: 'English',
    home: {
      tagline: 'Apni awaaz mein, apne haq ki yojana.', // Keeping the vibe as requested
      subtitle: 'Answer a few simple questions and discover government schemes you may be eligible for.',
      startVoiceCTA: 'Start Voice Assistant',
      manualCTA: 'Enter Details Manually',
      features: [
        { title: 'Voice First', desc: 'Find schemes by speaking in your language.' },
        { title: 'Scheme Matching', desc: 'Get schemes based on your eligibility.' },
        { title: 'Application Assistance', desc: 'Understand required documents and steps.' },
      ],
      howItWorks: 'How it works',
      steps: ['Speak', 'Answer', 'Get matched', 'Apply'],
      pmAjayBanner: {
      badge: "PM-AJAY Special Feature",
      subBadge: "GIA Component Skilling",
      title: "AI Voice Assistant for Livelihood & NSQF Skilling",
      desc: "“Your Voice. Your Skills. Your Opportunity.” — Voice-first livelihood mapping for SC beneficiaries.",
      cta: "PM-AJAY Voice Assistant 🎙️"
}
    },
    assistant: {
      greeting: 'Namaste! I am AJAY Sathi.',
      intro: 'I will help you find government schemes. Just answer a few simple questions.',
      tapToSpeak: 'Tap to Speak',
      orType: 'Or type your answer below',
      typePlaceholder: 'Type your answer...',
      send: 'Send',
      listening: 'Listening...',
      processing: 'Thank you! Checking suitable schemes based on your information...',
      questions: [
        "Namaste! Which state do you live in?",
        "Which district do you live in?",
        "Which block do you live in?",
        "Which village do you live in?",
        "What is your age?",
        "What is your primary occupation?",
        "What is your approximate annual family income?",
        "How many members are in your family?",
        "Do you have a ration card? (Yes/No)",
        "Is there any student in your family? (Yes/No)"
      ],
      occupations: ['Farmer', 'Student', 'Labourer', 'Small Business', 'Homemaker', 'Other'],
      incomes: ['Below ₹1 lakh', '₹1–2 lakh', '₹2–5 lakh', 'Above ₹5 lakh']
    },
    results: {
      header: 'Schemes you may be eligible for',
      subtitle: 'Based on the information you provided, we found these potentially relevant schemes.',
      highMatch: 'High Match',
      possibleMatch: 'Possible Match',
      viewDetails: 'View Details',
      disclaimer: 'Eligibility shown here is an initial assessment. Please verify the official government requirements before applying.'
    },
    details: {
      whatIsIt: 'What is this scheme?',
      whoIsEligible: 'Who may be eligible?',
      benefits: 'Benefits',
      documents: 'Documents commonly required',
      howToApply: 'How to apply',
      applySteps: ['Check eligibility', 'Keep documents ready', 'Apply through the official government channel'],
      visitPortal: 'Visit Official Portal',
      back: 'Back to Recommendations',
      portalPlaceholder: 'Official portal link will be connected here.'
    }
  },
  hi: {
    code: 'hi',
    name: 'हिंदी',
    home: {
      tagline: 'अपनी आवाज़ में, अपने हक़ की योजना।',
      subtitle: 'कुछ आसान सवालों के जवाब दें और जानें कि आप किन सरकारी योजनाओं के पात्र हो सकते हैं।',
      startVoiceCTA: 'वॉइस असिस्टेंट शुरू करें',
      manualCTA: 'मैन्युअल रूप से जानकारी भरें',
      features: [
        { title: 'वॉइस फर्स्ट', desc: 'अपनी भाषा में बोलकर योजना खोजिये।' },
        { title: 'स्कीम मैचिंग', desc: 'अपनी पात्रता के हिसाब से स्कीम्स पाइये।' },
        { title: 'आवेदन सहायता', desc: 'एप्लीकेशन के लिए ज़रूरी डाक्यूमेंट्स और स्टेप्स समझिये।' },
      ],
      howItWorks: 'यह कैसे काम करता है',
      steps: ['बोलें', 'जवाब दें', 'योजना पाएं', 'आवेदन करें'],
      pmAjayBanner: {
      badge: "PM-AJAY विशेष सुविधा",
      subBadge: "GIA घटक कौशल विकास",
      title: "आजीविका और NSQF कौशल के लिए AI वॉयस असिस्टेंट",
      desc: "“आपकी आवाज़। आपके कौशल। आपका अवसर।” — SC लाभार्थियों के लिए वॉयस-फर्स्ट आजीविका मैपिंग।",
      cta: "PM-AJAY वॉयस असिस्टेंट 🎙️"
}
    },
    assistant: {
      greeting: 'नमस्ते! मैं सरकारी साथी हूँ।',
      intro: 'मैं आपके लिए सरकारी योजना ढूँढने में मदद करूँगा। बस कुछ सिंपल सवालों के जवाब दीजिये।',
      tapToSpeak: 'बोलने के लिए टैप करें',
      orType: 'या नीचे टाइप करके जवाब दें',
      typePlaceholder: 'अपना जवाब टाइप करें...',
      send: 'भेजें',
      listening: 'सुन रहा हूँ...',
      processing: 'धन्यवाद! मैं आपकी जानकारी के आधार पर उपयुक्त स्कीम्स चेक कर रहा हूँ...',
      questions: [
        "नमस्ते! आप किस राज्य में रहते हैं?",
        "आप किस जिले में रहते हैं?",
        "आप किस ब्लॉक (खंड) में रहते हैं?",
        "आप किस गाँव में रहते हैं?",
        "आपकी उम्र कितनी है?",
        "आपका मुख्य काम क्या है?",
        "आपके परिवार की लगभग सालाना आय कितनी है?",
        "आपके परिवार में कितने लोग हैं?",
        "क्या आपके पास राशन कार्ड है? (हाँ/ना)",
        "क्या आपके परिवार में कोई छात्र है? (हाँ/ना)"
      ],
      occupations: ['किसान', 'छात्र', 'मज़दूर', 'छोटा व्यवसाय', 'गृहिणी', 'अन्य'],
      incomes: ['₹1 लाख से कम', '₹1–2 लाख', '₹2–5 लाख', '₹5 लाख से ज़्यादा']
    },
    results: {
      header: 'आपके लिए मिल सकती हैं ये स्कीम्स',
      subtitle: 'आपकी दी गई जानकारी के आधार पर, हमें ये संभावित रूप से प्रासंगिक स्कीम्स मिली हैं।',
      highMatch: 'High Match',
      possibleMatch: 'Possible Match',
      viewDetails: 'विवरण देखें',
      disclaimer: 'यहाँ दिखाई गई पात्रता एक प्रारंभिक मूल्यांकन है। आवेदन करने से पहले कृपया आधिकारिक सरकारी आवश्यकताओं को सत्यापित करें।'
    },
    details: {
      whatIsIt: 'यह योजना क्या है?',
      whoIsEligible: 'कौन पात्र हो सकता है?',
      benefits: 'लाभ',
      documents: 'आमतौर पर आवश्यक दस्तावेज़',
      howToApply: 'आवेदन कैसे करें',
      applySteps: ['पात्रता जांचें', 'दस्तावेज़ तैयार रखें', 'आधिकारिक सरकारी चैनल के माध्यम से आवेदन करें'],
      visitPortal: 'आधिकारिक पोर्टल पर जाएँ',
      back: 'सिफारिशों पर वापस जाएँ',
      portalPlaceholder: 'आधिकारिक पोर्टल लिंक यहाँ जोड़ा जाएगा।'
    }
  },
  bun: {
    code: 'bun',
    name: 'बुंदेली',
    home: {
      tagline: 'अपनई अवाज में, अपने हक की योजना।',
      subtitle: 'कछू सीधे सवालन के जबाव दओ और जानो के तुम कोन सी सरकारी योजनान के पात्र हो सकत हो।',
      startVoiceCTA: 'आवाज सई काम शुरू करो',
      manualCTA: 'हाथ सई जानकारी भरो',
      features: [
        { title: 'पहिले आवाज', desc: 'अपनई भाषा में बोल के योजना खोजो।' },
        { title: 'योजना मिलाब', desc: 'अपनी पात्रता के हिसाब सई योजनाएं पायो।' },
        { title: 'आवेदन में मदद', desc: 'आवेदन खों जरूरी कागज और तरीका समझो।' },
      ],
      howItWorks: 'कैसो काम करत है',
      steps: ['बोलो', 'जबाव दओ', 'योजना पाओ', 'आवेदन करो'],
      pmAjayBanner: {
      badge: "PM-AJAY खास सुबिधा",
      subBadge: "GIA घटक कौशल",
      title: "आजीविका और NSQF कौशल के लाने AI आवाज असिस्टेंट",
      desc: "“तुमारी आवाज। तुमारे कौशल। तुमाओ मौका।” — SC लाभार्थिन के लाने आवाज-फर्स्ट आजीविका मैपिंग।",
      cta: "PM-AJAY आवाज असिस्टेंट 🎙️"
}
    },
    assistant: {
      greeting: 'राम-राम! हम सरकारी साथी आंय।',
      intro: 'हम तुमारे लाने सरकारी योजना ढूंढ़बे में मदद करहैं। बस कछू सीधे सवालन के जबाव दओ।',
      tapToSpeak: 'बोलबे खों दबाओ',
      orType: 'या खाले लिख के जबाव दओ',
      typePlaceholder: 'अपनो जबाव लिखो...',
      send: 'भेजो',
      listening: 'सुन रये आंय...',
      processing: 'धन्यवाद! हम तुमारी जानकारी के आधार पे सही योजनाएं चेक कर रये आंय...',
      questions: [
        "राम राम! तुम कोनसे राज्य में रत हो?",
        "तुम कोनसे जिले में रत हो?",
        "तुम कोनसे ब्लॉक में रत हो?",
        "तुम कोनसे गाँव में रत हो?",
        "तुमारी उमर कत्ती है?",
        "तुमाओ मुख्य काम का है?",
        "तुमारे परिवार की साल भर की आमदनी लगभग कत्ती है?",
        "तुमारे परिवार में कत्ते जने हैं?",
        "का तुमारे पास राशन कार्ड है? (हओ/नई)",
        "का तुमारे परिवार में कोऊ मोड़ा-मोड़ी पढ़त है? (हओ/नई)"
      ],
      occupations: ['किसान', 'पढ़बे वालो', 'मजदूर', 'छोटो धंधा', 'घरैत', 'और कछू'],
      incomes: ['₹1 लाख सई कम', '₹1–2 लाख', '₹2–5 लाख', '₹5 लाख सई जादा']
    },
    results: {
      header: 'तुमारे लाने मिल सकत हैं ई योजनाएं',
      subtitle: 'तुमारी दई गई जानकारी के आधार पे, हमें ई संभावित रूप सई सही योजनाएं मिली हैं।',
      highMatch: 'पक्को मिलाब',
      possibleMatch: 'हो सकत मिलाब',
      viewDetails: 'पूरी जानकारी देखो',
      disclaimer: 'इते दिखाई गई पात्रता बस एक शुरुआत है। आवेदन करबे सई पहिले कृपया पक्की सरकारी जानकारी जरूर देख लियो।'
    },
    details: {
      whatIsIt: 'ई योजना का है?',
      whoIsEligible: 'कोन पात्र हो सकत है?',
      benefits: 'फायदा',
      documents: 'आमतौर पे जरूरी कागज',
      howToApply: 'आवेदन कैसो करनें',
      applySteps: ['पात्रता जांचो', 'कागज तैयार राखो', 'पक्के सरकारी चैनल सई आवेदन करो'],
      visitPortal: 'पक्के पोर्टल पे जाओ',
      back: 'सिफारिशन पे वापस जाओ',
      portalPlaceholder: 'पक्को पोर्टल लिंक इते जोड़ो जैहै।'
    }
  },
  cg: {
    code: 'cg',
    name: 'छत्तीसगढ़ी',
    home: {
      tagline: 'अपन अवाज म, अपन हक के योजना।',
      subtitle: 'कुछ आसान सवाल के जवाब दव अउ जानव के आप कउन सरकारी योजना के पात्र हो सकथव।',
      startVoiceCTA: 'आवाज से काम सुरु करव',
      manualCTA: 'हाथ से जानकारी भरव',
      features: [
        { title: 'पहिली अवाज', desc: 'अपन भाखा म बोल के योजना खोजव।' },
        { title: 'योजना मिलाब', desc: 'अपन पात्रता के हिसाब से योजना पाव।' },
        { title: 'आवेदन म मदद', desc: 'आवेदन बर जरूरी कागज अउ तरीका समझव।' },
      ],
      howItWorks: 'कइसे काम करथे',
      steps: ['बोलव', 'जवाब दव', 'योजना पाव', 'आवेदन करव'],
      pmAjayBanner: {
      badge: "PM-AJAY खास सुविधा",
      subBadge: "GIA घटक कौशल",
      title: "आजीविका अउ NSQF कौशल बर AI अवाज असिस्टेंट",
      desc: "“आप के अवाज। आप के कौशल। आप के मौका।” — SC हितग्राही मन बर अवाज-फर्स्ट आजीविका मैपिंग।",
      cta: "PM-AJAY अवाज असिस्टेंट 🎙️"
}
    },
    assistant: {
      greeting: 'जय जोहार! मय सरकारी साथी अंव।',
      intro: 'मय आप मन बर सरकारी योजना खोजे म मदद करहूं। बस कुछ सीधा सवाल के जवाब दव।',
      tapToSpeak: 'बोले बर दबाओ',
      orType: 'या खाले लिख के जवाब दव',
      typePlaceholder: 'अपन जवाब लिखव...',
      send: 'भेज देव',
      listening: 'सुनत हंव...',
      processing: 'धन्यवाद! मय आप के जानकारी के आधार म सही योजना चेक करत हंव...',
      questions: [
        "जय जोहार! आप मन कोन राज्य म रहिथव?",
        "आप मन कोन जिला म रहिथव?",
        "आप मन कोन ब्लॉक म रहिथव?",
        "आप मन कोन गाँव म रहिथव?",
        "आप के उमर कतका हे?",
        "आप के मुख्य काम का हे?",
        "आप के परिवार के साल भर के आमदनी लगभग कतका हे?",
        "आप के परिवार म कतका झन हे?",
        "का आप के मेर राशन कार्ड हे? (हव/नइ)",
        "का आप के परिवार म कोनो लइका पढ़त हे? (हव/नइ)"
      ],
      occupations: ['किसान', 'पढ़इया', 'मजदूर', 'छोट काम', 'घर के काम', 'अउ कुछ'],
      incomes: ['₹1 लाख से कम', '₹1–2 लाख', '₹2–5 लाख', '₹5 लाख से जादा']
    },
    results: {
      header: 'आप बर मिल सकत हे ए योजना मन',
      subtitle: 'आप के देय जानकारी के आधार म, हमन ला ए संभावित रूप से सही योजना मिले हे।',
      highMatch: 'पक्का मिलाब',
      possibleMatch: 'हो सकत मिलाब',
      viewDetails: 'पूरा जानकारी देखव',
      disclaimer: 'इहां दिखाए गए पात्रता बस एक सुरुआत हे। आवेदन करे से पहिली किरिपा करके पक्का सरकारी जानकारी जरूर देख लेव।'
    },
    details: {
      whatIsIt: 'ए योजना का हे?',
      whoIsEligible: 'कउन पात्र हो सकत हे?',
      benefits: 'फायदा',
      documents: 'जरूरी कागज',
      howToApply: 'आवेदन कइसे करना हे',
      applySteps: ['पात्रता जांचव', 'कागज तइयार राखव', 'पक्का सरकारी चैनल से आवेदन करव'],
      visitPortal: 'पक्का पोर्टल म जाव',
      back: 'सिफारिश म वापस जाव',
      portalPlaceholder: 'पक्का पोर्टल लिंक इहां जोड़े जाही।'
    }
  },
  sat: {
    code: 'sat',
    name: 'Santali (ᱥᱟᱱᱛᱟᱲᱤ)',
    home: {
      tagline: 'ᱟᱢᱟᱜ ᱟᱲᱟᱝ ᱨᱮ, ᱟᱢᱟᱜ ᱦᱚᱠ ᱨᱮᱭᱟᱜ ᱡᱚᱡᱚᱱᱟ (Apni awaaz mein, apne haq ki yojana).',
      subtitle: 'Answer a few simple questions and discover government schemes you may be eligible for.',
      startVoiceCTA: 'Start Voice Assistant',
      manualCTA: 'Enter Details Manually',
      features: [
        { title: 'Voice First', desc: 'Find schemes by speaking in your language.' },
        { title: 'Scheme Matching', desc: 'Get schemes based on your eligibility.' },
        { title: 'Application Assistance', desc: 'Understand required documents and steps.' },
      ],
      howItWorks: 'How it works',
      steps: ['Speak', 'Answer', 'Get matched', 'Apply'],
      pmAjayBanner: {
      badge: "PM-AJAY ᱠᱷᱟᱥ ᱥᱩᱵᱤᱫᱷᱟ",
      subBadge: "GIA ᱠᱚᱢᱯᱳᱱᱮᱱᱴ ᱥᱠᱤᱞᱤᱝ",
      title: "ᱠᱟᱹᱢᱤ ᱟᱨ NSQF ᱥᱠᱤᱞᱤᱝ ᱞᱟᱹᱜᱤᱫ AI ᱟᱲᱟᱝ ᱟᱥᱤᱥᱴᱮᱱᱴ",
      desc: "“ᱟᱢᱟᱜ ᱟᱲᱟᱝ᱾ ᱟᱢᱟᱜ ᱦᱩᱱᱟᱹᱨ᱾ ᱟᱢᱟᱜ ᱫᱟᱣ᱾” — SC ᱦᱚᱲ ᱠᱚ ᱞᱟᱹᱜᱤᱫ ᱟᱲᱟᱝ-ᱯᱷᱟᱨᱥᱴ ᱠᱟᱹᱢᱤ ᱢᱮᱯᱤᱝ᱾",
      cta: "PM-AJAY ᱟᱲᱟᱝ ᱟᱥᱤᱥᱴᱮᱱᱴ 🎙️"
}
    },
    assistant: {
      greeting: 'Johar! I am AJAY Sathi.',
      intro: 'I will help you find government schemes. Just answer a few simple questions.',
      tapToSpeak: 'Tap to Speak',
      orType: 'Or type your answer below',
      typePlaceholder: 'Type your answer...',
      send: 'Send',
      listening: 'Listening...',
      processing: 'Thank you! Checking suitable schemes based on your information...',
      questions: [
        "ᱡᱚᱦᱟᱨ! ᱟᱢ ᱫᱚ ᱚᱠᱟ ᱯᱚᱱᱚᱛ ᱨᱮᱢ ᱛᱟᱦᱮᱸᱱᱟ?",
        "ᱟᱢ ᱫᱚ ᱚᱠᱟ ᱡᱤᱞᱟᱹ ᱨᱮᱢ ᱛᱟᱦᱮᱸᱱᱟ?",
        "ᱟᱢ ᱫᱚ ᱚᱠᱟ ᱵᱽᱞᱚᱠ ᱨᱮᱢ ᱛᱟᱦᱮᱸᱱᱟ?",
        "ᱟᱢ ᱫᱚ ᱚᱠᱟ ᱟᱹᱛᱩ ᱨᱮᱢ ᱛᱟᱦᱮᱸᱱᱟ?",
        "What is your age?",
        "What is your primary occupation?",
        "What is your approximate annual family income?",
        "How many members are in your family?",
        "Do you have a ration card? (Yes/No)",
        "Is there any student in your family? (Yes/No)"
      ],
      occupations: ['Farmer', 'Student', 'Labourer', 'Small Business', 'Homemaker', 'Other'],
      incomes: ['Below ₹1 lakh', '₹1–2 lakh', '₹2–5 lakh', 'Above ₹5 lakh']
    },
    results: {
      header: 'Schemes you may be eligible for',
      subtitle: 'Based on the information you provided, we found these potentially relevant schemes.',
      highMatch: 'High Match',
      possibleMatch: 'Possible Match',
      viewDetails: 'View Details',
      disclaimer: 'Eligibility shown here is an initial assessment. Please verify the official government requirements before applying.'
    },
    details: {
      whatIsIt: 'What is this scheme?',
      whoIsEligible: 'Who may be eligible?',
      benefits: 'Benefits',
      documents: 'Documents commonly required',
      howToApply: 'How to apply',
      applySteps: ['Check eligibility', 'Keep documents ready', 'Apply through the official government channel'],
      visitPortal: 'Visit Official Portal',
      back: 'Back to Recommendations',
      portalPlaceholder: 'Official portal link will be connected here.'
    }
  },
  spv: {
    code: 'spv',
    name: 'Sambalpuri',
    home: {
      tagline: 'Nijar katha re, nijar adhikar ra yojana.',
      subtitle: 'Kichhi sahaja prashna ra uttara dia au jana je apana kieun sarakari yojana ra patra hoi paranti.',
      startVoiceCTA: 'Voice Assistant Start Kara',
      manualCTA: 'Nije Tathy Diantu',
      features: [
        { title: 'Prathame Katha', desc: 'Nijar bhasha re kahi yojana khojantu.' },
        { title: 'Yojana Melaka', desc: 'Nijar jogyata anusare yojana paantu.' },
        { title: 'Abedana Sahayata', desc: 'Darakaari kagaj au niyama bujhantu.' },
      ],
      howItWorks: 'Kemiti kama kare',
      steps: ['Kuha', 'Uttara', 'Yojana Pau', 'Abedana'],
      pmAjayBanner: {
      badge: "PM-AJAY Swatantra Suvidha",
      subBadge: "GIA Component Skilling",
      title: "Jibika au NSQF Skilling pain AI Voice Assistant",
      desc: "“Apankara Swara. Apankara Dakhayata. Apankara Sujoga.” — SC beneficiary mananka pain voice-first jibika mapping.",
      cta: "PM-AJAY Voice Assistant 🎙️"
}
    },
    assistant: {
      greeting: 'Juhar! Mu AJAY Sathi.',
      intro: 'Mu apananku sarakari yojana khojibare sahajya karibi. Khali kichhi sahaja prashna ra uttara dia.',
      tapToSpeak: 'Kahiba pain dabantu',
      orType: 'Kimba tale likhi uttara diantu',
      typePlaceholder: 'Nijar uttara likhantu...',
      send: 'Pathantu',
      listening: 'Sunuchhi...',
      processing: 'Dhanyabad! Apankara tathya adharare thik yojana khojuchhi...',
      questions: [
        "नमो नमः! भवान् कस्मिन् राज्ये निवसति?",
        "भवान् कस्मिन् मण्डले निवसति?",
        "भवान् कस्मिन् खण्डे निवसति?",
        "भवान् कस्मिन् ग्रामे निवसति?",
        "Apankara bayasa kete?",
        "Apankara mukhya kama kana?",
        "Apankara paribara ra barshika aya pray kete?",
        "Apankara paribara re kete jana achhanti?",
        "Apanankara ration card achhi ki? (Han/Na)",
        "Apankara paribara re kehi chhatra achhanti ki? (Han/Na)"
      ],
      occupations: ['Chasi', 'Chhatra', 'Mulia', 'Chhota Byabasaya', 'Gruhini', 'Anya'],
      incomes: ['₹1 lakha ru kama', '₹1–2 lakha', '₹2–5 lakha', '₹5 lakha ru adhika']
    },
    results: {
      header: 'Apananku mili paruthiba yojana',
      subtitle: 'Apankara diyajaithiba tathya adharare, amaku ehi sambhabya yojana milichhi.',
      highMatch: 'Pura Mela',
      possibleMatch: 'Sambhabya Mela',
      viewDetails: 'Pura Bibarani Dekhantu',
      disclaimer: 'Ethare dekhajaithiba jogyata eka prarambhika mulyankana. Abedana kariba purbaru sarakari niyamabali nischita karantu.'
    },
    details: {
      whatIsIt: 'Ehi yojana kana?',
      whoIsEligible: 'Kie patra hoi paranti?',
      benefits: 'Labha',
      documents: 'Sadharanataha darakari kagajpatra',
      howToApply: 'Kemiti abedana karibe',
      applySteps: ['Jogyata jancha karantu', 'Kagajpatra prastuta rakhantu', 'Sarakari channel re abedana karantu'],
      visitPortal: 'Sarakari Portal ku Jantu',
      back: 'Pachhaku Jantu',
      portalPlaceholder: 'Sarakari portal link ethare joda jiba.'
    }
  },
  mr: {
    code: 'mr',
    name: 'मराठी',
    home: {
      tagline: 'तुमच्या आवाजात, तुमच्या हक्काची योजना.',
      subtitle: 'काही सोप्या प्रश्नांची उत्तरे द्या आणि सरकारी योजना शोधा.',
      startVoiceCTA: 'व्हॉइस असिस्टंट सुरू करा',
      manualCTA: 'माहिती मॅन्युअली भरा',
      features: [
        { title: 'व्हॉइस फर्स्ट', desc: 'तुमच्या भाषेत बोलून योजना शोधा.' },
        { title: 'स्कीम मॅचिंग', desc: 'तुमच्या पात्रतेनुसार योजना मिळवा.' },
        { title: 'अर्ज सहाय्य', desc: 'आवश्यक कागदपत्रे आणि प्रक्रिया समजून घ्या.' },
      ],
      howItWorks: 'हे कसे काम करते',
      steps: ['बोला', 'उत्तर द्या', 'योजना मिळवा', 'अर्ज करा'],
      pmAjayBanner: {
      badge: "PM-AJAY विशेष सुविधा",
      subBadge: "GIA घटक कौशल्य",
      title: "उपजीविका आणि NSQF कौशल्यासाठी AI व्हॉइस असिस्टंट",
      desc: "“तुमचा आवाज. तुमचे कौशल्य. तुमची संधी.” — SC लाभार्थ्यांसाठी व्हॉइस-फर्स्ट उपजीविका मॅपिंग.",
      cta: "PM-AJAY व्हॉइस असिस्टंट 🎙️"
}
    },
    assistant: {
      greeting: 'नमस्कार! मी सरकारी साथी आहे.',
      intro: 'मी तुम्हाला सरकारी योजना शोधण्यात मदत करेन. फक्त काही सोप्या प्रश्नांची उत्तरे द्या.',
      tapToSpeak: 'बोलण्यासाठी टॅप करा',
      orType: 'किंवा खाली उत्तर टाईप करा',
      typePlaceholder: 'तुमचे उत्तर टाईप करा...',
      send: 'पाठवा',
      listening: 'ऐकत आहे...',
      processing: 'धन्यवाद! तुमच्या माहितीच्या आधारावर योग्य योजना तपासत आहे...',
      questions: [
        "नमस्कार! तुम्ही कोणत्या राज्यात राहता?",
        "तुम्ही कोणत्या जिल्ह्यात राहता?",
        "तुम्ही कोणत्या तालुक्यात (ब्लॉक) राहता?",
        "तुम्ही कोणत्या गावात राहता?",
        "तुमचे वय काय आहे?",
        "तुमचा मुख्य व्यवसाय काय आहे?",
        "तुमच्या कुटुंबाचे वार्षिक उत्पन्न अंदाजे किती आहे?",
        "तुमच्या कुटुंबात किती सदस्य आहेत?",
        "तुमच्याकडे शिधापत्रिका (रेशन कार्ड) आहे का? (होय/नाही)",
        "तुमच्या कुटुंबात कोणी विद्यार्थी आहे का? (होय/नाही)"
      ],
      occupations: ['शेतकरी', 'विद्यार्थी', 'मजूर', 'लहान व्यवसाय', 'गृहिणी', 'इतर'],
      incomes: ['₹१ लाखांपेक्षा कमी', '₹१–२ लाख', '₹२–५ लाख', '₹५ लाखांपेक्षा जास्त']
    },
    results: {
      header: 'तुम्ही पात्र असू शकता अशा योजना',
      subtitle: 'तुम्ही दिलेल्या माहितीच्या आधारावर, आम्हाला या संभाव्य संबंधित योजना सापडल्या आहेत.',
      highMatch: 'उच्च जुळणी',
      possibleMatch: 'संभाव्य जुळणी',
      viewDetails: 'तपशील पहा',
      disclaimer: 'येथे दर्शविलेली पात्रता हे प्राथमिक मूल्यांकन आहे. अर्ज करण्यापूर्वी कृपया अधिकृत सरकारी आवश्यकता तपासा.'
    },
    details: {
      whatIsIt: 'ही योजना काय आहे?',
      whoIsEligible: 'कोण पात्र असू शकेल?',
      benefits: 'फायदे',
      documents: 'सामान्यतः आवश्यक कागदपत्रे',
      howToApply: 'अर्ज कसा करावा',
      applySteps: ['पात्रता तपासा', 'कागदपत्रे तयार ठेवा', 'अधिकृत सरकारी चॅनेलद्वारे अर्ज करा'],
      visitPortal: 'अधिकृत पोर्टलला भेट द्या',
      back: 'शिफारशींवर परत जा',
      portalPlaceholder: 'अधिकृत पोर्टल लिंक येथे जोडली जाईल.'
    }
  },
  bn: {
    code: 'bn',
    name: 'বাংলা',
    home: {
      tagline: 'আপনার কণ্ঠে, আপনার অধিকারের প্রকল্প।',
      subtitle: 'কয়েকটি সহজ প্রশ্নের উত্তর দিন এবং সরকারি প্রকল্পগুলি আবিষ্কার করুন।',
      startVoiceCTA: 'ভয়েস অ্যাসিস্ট্যান্ট শুরু করুন',
      manualCTA: 'ম্যানুয়ালি তথ্য দিন',
      features: [
        { title: 'ভয়েস ফার্স্ট', desc: 'আপনার ভাষায় কথা বলে প্রকল্প খুঁজুন।' },
        { title: 'প্রকল্প ম্যাচিং', desc: 'আপনার যোগ্যতার উপর ভিত্তি করে প্রকল্প পান।' },
        { title: 'আবেদন সহায়তা', desc: 'প্রয়োজনীয় নথি এবং পদক্ষেপগুলি বুঝুন।' },
      ],
      howItWorks: 'এটি কীভাবে কাজ করে',
      steps: ['বলুন', 'উত্তর দিন', 'প্রকল্প পান', 'আবেদন করুন'],
      pmAjayBanner: {
      badge: "PM-AJAY বিশেষ বৈশিষ্ট্য",
      subBadge: "GIA কম্পোনেন্ট স্কিলিং",
      title: "জীবিকা এবং NSQF স্কিলিংয়ের জন্য AI ভয়েস সহকারী",
      desc: "“আপনার কণ্ঠ। আপনার দক্ষতা। আপনার সুযোগ।” — SC সুবিধাভোগীদের জন্য ভয়েস-ফার্স্ট জীবিকা ম্যাপিং।",
      cta: "PM-AJAY ভয়েস সহকারী 🎙️"
}
    },
    assistant: {
      greeting: 'নমস্কার! আমি সরকারি সাথী।',
      intro: 'আমি আপনাকে সরকারি প্রকল্প খুঁজে পেতে সাহায্য করব। শুধু কয়েকটি সহজ প্রশ্নের উত্তর দিন।',
      tapToSpeak: 'কথা বলার জন্য আলতো চাপুন',
      orType: 'অথবা নিচে উত্তর টাইপ করুন',
      typePlaceholder: 'আপনার উত্তর টাইপ করুন...',
      send: 'পাঠান',
      listening: 'শুনছি...',
      processing: 'ধন্যবাদ! আপনার তথ্যের ভিত্তিতে উপযুক্ত প্রকল্পগুলি চেক করছি...',
      questions: [
        "নমস্কার! আপনি কোন রাজ্যে থাকেন?",
        "আপনি কোন জেলায় থাকেন?",
        "আপনি কোন ব্লকে থাকেন?",
        "আপনি কোন গ্রামে থাকেন?",
        "আপনার বয়স কত?",
        "আপনার প্রধান পেশা কি?",
        "আপনার পরিবারের আনুমানিক বার্ষিক আয় কত?",
        "আপনার পরিবারে কতজন সদস্য আছেন?",
        "আপনার কি রেশন কার্ড আছে? (হ্যাঁ/না)",
        "আপনার পরিবারে কি কোন ছাত্র আছে? (হ্যাঁ/না)"
      ],
      occupations: ['কৃষক', 'ছাত্র', 'শ্রমিক', 'ছোট ব্যবসা', 'গৃহিণী', 'অন্যান্য'],
      incomes: ['₹১ লাখের নিচে', '₹১–২ লাখ', '₹২–৫ লাখ', '₹৫ লাখের উপরে']
    },
    results: {
      header: 'যেসব প্রকল্পের জন্য আপনি যোগ্য হতে পারেন',
      subtitle: 'আপনার দেওয়া তথ্যের ভিত্তিতে আমরা এই সম্ভাব্য প্রাসঙ্গিক প্রকল্পগুলি পেয়েছি।',
      highMatch: 'উচ্চ মিল',
      possibleMatch: 'সম্ভাব্য মিল',
      viewDetails: 'বিস্তারিত দেখুন',
      disclaimer: 'এখানে দেখানো যোগ্যতা একটি প্রাথমিক মূল্যায়ন। আবেদন করার আগে অনুগ্রহ করে সরকারি প্রয়োজনীয়তা যাচাই করুন।'
    },
    details: {
      whatIsIt: 'এই প্রকল্প কি?',
      whoIsEligible: 'কারা যোগ্য হতে পারে?',
      benefits: 'সুবিধা',
      documents: 'সাধারণত প্রয়োজনীয় কাগজপত্র',
      howToApply: 'কিভাবে আবেদন করবেন',
      applySteps: ['যোগ্যতা যাচাই করুন', 'কাগজপত্র প্রস্তুত রাখুন', 'সরকারি চ্যানেলের মাধ্যমে আবেদন করুন'],
      visitPortal: 'অফিসিয়াল পোর্টালে যান',
      back: 'সুপারিশে ফিরে যান',
      portalPlaceholder: 'অফিসিয়াল পোর্টাল লিঙ্ক এখানে যুক্ত করা হবে।'
    }
  },
  te: {
    code: 'te',
    name: 'తెలుగు',
    home: {
      tagline: 'మీ గొంతుతో, మీ హక్కుల పథకం.',
      subtitle: 'కొన్ని సాధారణ ప్రశ్నలకు సమాధానం ఇవ్వండి మరియు మీరు అర్హత పొందే ప్రభుత్వ పథకాలను కనుగొనండి.',
      startVoiceCTA: 'వాయిస్ అసిస్టెంట్‌ని ప్రారంభించండి',
      manualCTA: 'మాన్యువల్‌గా వివరాలను నమోదు చేయండి',
      features: [
        { title: 'వాయిస్ ఫస్ట్', desc: 'మీ భాషలో మాట్లాడటం ద్వారా పథకాలను కనుగొనండి.' },
        { title: 'పథకాల సరిపోలిక', desc: 'మీ అర్హత ఆధారంగా పథకాలను పొందండి.' },
        { title: 'దరఖాస్తు సహాయం', desc: 'అవసరమైన పత్రాలు మరియు దశలను అర్థం చేసుకోండి.' },
      ],
      howItWorks: 'ఇది ఎలా పనిచేస్తుంది',
      steps: ['మాట్లాడండి', 'సమాధానం', 'పథకం పొందండి', 'దరఖాస్తు చేయండి'],
      pmAjayBanner: {
      badge: "PM-AJAY ప్రత్యేక ఫీచర్",
      subBadge: "GIA కాంపోనెంట్ స్కిల్లింగ్",
      title: "జీవనోపాధి మరియు NSQF స్కిల్లింగ్ కోసం AI వాయిస్ అసిస్టెంట్",
      desc: "“మీ వాయిస్. మీ నైపుణ్యాలు. మీ అవకాశం.” — SC లబ్ధిదారుల కోసం వాయిస్-ఫస్ట్ జీవనోపాధి మ్యాపింగ్.",
      cta: "PM-AJAY వాయిస్ అసిస్టెంట్ 🎙️"
}
    },
    assistant: {
      greeting: 'నమస్కారం! నేను ప్రభుత్వ సాథిని.',
      intro: 'ప్రభుత్వ పథకాలను కనుగొనడంలో నేను మీకు సహాయం చేస్తాను. కేవలం కొన్ని సాధారణ ప్రశ్నలకు సమాధానం ఇవ్వండి.',
      tapToSpeak: 'మాట్లాడటానికి నొక్కండి',
      orType: 'లేదా మీ సమాధానాన్ని టైప్ చేయండి',
      typePlaceholder: 'మీ సమాధానం టైప్ చేయండి...',
      send: 'పంపండి',
      listening: 'వింటున్నాను...',
      processing: 'ధన్యవాదాలు! మీ సమాచారం ఆధారంగా తగిన పథకాలను తనిఖీ చేస్తున్నాను...',
      questions: [
        "నమస్కారం! మీరు ఏ రాష్ట్రంలో నివసిస్తున్నారు?",
        "మీరు ఏ జిల్లాలో నివసిస్తున్నారు?",
        "మీరు ఏ బ్లాక్ లో నివసిస్తున్నారు?",
        "మీరు ఏ గ్రామంలో నివసిస్తున్నారు?",
        "మీ వయస్సు ఎంత?",
        "మీ ప్రధాన వృత్తి ఏమిటి?",
        "మీ కుటుంబం సుమారు వార్షిక ఆదాయం ఎంత?",
        "మీ కుటుంబంలో ఎంత మంది సభ్యులు ఉన్నారు?",
        "మీకు రేషన్ కార్డు ఉందా? (అవును/కాదు)",
        "మీ కుటుంబంలో విద్యార్థులు ఉన్నారా? (అవును/కాదు)"
      ],
      occupations: ['రైతు', 'విద్యార్థి', 'కార్మికుడు', 'చిన్న వ్యాపారం', 'గృహిణి', 'ఇతర'],
      incomes: ['₹1 లక్ష కంటే తక్కువ', '₹1–2 లక్షలు', '₹2–5 లక్షలు', '₹5 లక్షల పైన']
    },
    results: {
      header: 'మీరు అర్హత పొందగల పథకాలు',
      subtitle: 'మీరు అందించిన సమాచారం ఆధారంగా, మేము ఈ సంబంధిత పథకాలను కనుగొన్నాము.',
      highMatch: 'అధిక సరిపోలిక',
      possibleMatch: 'సాధ్యమైన సరిపోలిక',
      viewDetails: 'వివరాలు చూడండి',
      disclaimer: 'ఇక్కడ చూపబడిన అర్హత ప్రాథమిక అంచనా. దరఖాస్తు చేసే ముందు దయచేసి అధికారిక ప్రభుత్వ అవసరాలను ధృవీకరించండి.'
    },
    details: {
      whatIsIt: 'ఈ పథకం ఏమిటి?',
      whoIsEligible: 'ఎవరు అర్హులు కావచ్చు?',
      benefits: 'ప్రయోజనాలు',
      documents: 'సాధారణంగా అవసరమైన పత్రాలు',
      howToApply: 'ఎలా దరఖాస్తు చేయాలి',
      applySteps: ['అర్హతను తనిఖీ చేయండి', 'పత్రాలను సిద్ధంగా ఉంచండి', 'అధికారిక ప్రభుత్వ ఛానెల్ ద్వారా దరఖాస్తు చేయండి'],
      visitPortal: 'అధికారిక పోర్టల్‌ను సందర్శించండి',
      back: 'సిఫార్సులకు తిరిగి వెళ్ళండి',
      portalPlaceholder: 'అధికారిక పోర్టల్ లింక్ ఇక్కడ జోడించబడుతుంది.'
    }
  },
  ta: {
    code: 'ta',
    name: 'தமிழ்',
    home: {
      tagline: 'உங்கள் குரலில், உங்கள் உரிமைக்கான திட்டம்.',
      subtitle: 'சில எளிய கேள்விகளுக்கு பதிலளித்து, நீங்கள் தகுதிபெறும் அரசு திட்டங்களைக் கண்டறியவும்.',
      startVoiceCTA: 'குரல் உதவியாளரைத் தொடங்கவும்',
      manualCTA: 'விவரங்களை கைமுறையாக உள்ளிடவும்',
      features: [
        { title: 'முதலில் குரல்', desc: 'உங்கள் மொழியில் பேசுவதன் மூலம் திட்டங்களைக் கண்டறியவும்.' },
        { title: 'திட்டப் பொருத்தம்', desc: 'உங்கள் தகுதியின் அடிப்படையில் திட்டங்களைப் பெறுங்கள்.' },
        { title: 'விண்ணப்ப உதவி', desc: 'தேவையான ஆவணங்கள் மற்றும் படிகளைப் புரிந்து கொள்ளுங்கள்.' },
      ],
      howItWorks: 'எப்படி செயல்படுகிறது',
      steps: ['பேசுக', 'பதில்', 'திட்டத்தைப் பெறுக', 'விண்ணப்பிக்கவும்'],
      pmAjayBanner: {
      badge: "PM-AJAY சிறப்பு அம்சம்",
      subBadge: "GIA கூறு திறன் மேம்பாடு",
      title: "வாழ்வாதாரம் மற்றும் NSQF திறனுக்கான AI குரல் உதவியாளர்",
      desc: "“உங்கள் குரல். உங்கள் திறன்கள். உங்கள் வாய்ப்பு.” — SC பயனாளிகளுக்கான குரல் முதல் வாழ்வாதார மேப்பிங்.",
      cta: "PM-AJAY குரல் உதவியாளர் 🎙️"
}
    },
    assistant: {
      greeting: 'வணக்கம்! நான் சர்காரி சாதி.',
      intro: 'அரசு திட்டங்களைக் கண்டறிய நான் உங்களுக்கு உதவுவேன். சில எளிய கேள்விகளுக்கு மட்டும் பதிலளிக்கவும்.',
      tapToSpeak: 'பேச தட்டவும்',
      orType: 'அல்லது உங்கள் பதிலை தட்டச்சு செய்யவும்',
      typePlaceholder: 'உங்கள் பதிலை தட்டச்சு செய்யவும்...',
      send: 'அனுப்பு',
      listening: 'கேட்கிறது...',
      processing: 'நன்றி! உங்கள் தகவலின் அடிப்படையில் பொருத்தமான திட்டங்களைச் சரிபார்க்கிறது...',
      questions: [
        "வணக்கம்! நீங்கள் எந்த மாநிலத்தில் வசிக்கிறீர்கள்?",
        "நீங்கள் எந்த மாவட்டத்தில் வசிக்கிறீர்கள்?",
        "நீங்கள் எந்த வட்டத்தில் (பிளாக்) வசிக்கிறீர்கள்?",
        "நீங்கள் எந்த கிராமத்தில் வசிக்கிறீர்கள்?",
        "உங்கள் வயது என்ன?",
        "உங்கள் முக்கிய தொழில் என்ன?",
        "உங்கள் குடும்பத்தின் தோராயமான ஆண்டு வருமானம் எவ்வளவு?",
        "உங்கள் குடும்பத்தில் எத்தனை உறுப்பினர்கள் உள்ளனர்?",
        "உங்களிடம் ரேஷன் கார்டு உள்ளதா? (ஆம்/இல்லை)",
        "உங்கள் குடும்பத்தில் மாணவர் யாராவது உள்ளாரா? (ஆம்/இல்லை)"
      ],
      occupations: ['விவசாயி', 'மாணவர்', 'தொழிலாளி', 'சிறு வணிகம்', 'இல்லத்தரசி', 'மற்றவை'],
      incomes: ['₹1 லட்சத்திற்கும் கீழ்', '₹1–2 லட்சம்', '₹2–5 லட்சம்', '₹5 லட்சத்திற்கு மேல்']
    },
    results: {
      header: 'நீங்கள் தகுதிபெறும் திட்டங்கள்',
      subtitle: 'நீங்கள் வழங்கிய தகவலின் அடிப்படையில், சாத்தியமான இந்த திட்டங்களை நாங்கள் கண்டறிந்துள்ளோம்.',
      highMatch: 'அதிக பொருத்தம்',
      possibleMatch: 'சாத்தியமான பொருத்தம்',
      viewDetails: 'விவரங்களைக் காண்க',
      disclaimer: 'இங்கு காட்டப்பட்டுள்ள தகுதி ஒரு ஆரம்ப மதிப்பீடாகும். விண்ணப்பிப்பதற்கு முன் உத்தியோகபூர்வ அரசு தேவைகளைச் சரிபார்க்கவும்.'
    },
    details: {
      whatIsIt: 'இந்த திட்டம் என்ன?',
      whoIsEligible: 'யார் தகுதியுடையவர்கள்?',
      benefits: 'நன்மைகள்',
      documents: 'பொதுவாக தேவைப்படும் ஆவணங்கள்',
      howToApply: 'விண்ணப்பிப்பது எப்படி',
      applySteps: ['தகுதியைச் சரிபார்க்கவும்', 'ஆவணங்களைத் தயாராக வைத்திருக்கவும்', 'அதிகாரப்பூர்வ அரசு சேனல் மூலம் விண்ணப்பிக்கவும்'],
      visitPortal: 'அதிகாரப்பூர்வ போர்ட்டலைப் பார்வையிடவும்',
      back: 'பரிந்துரைகளுக்குத் திரும்பு',
      portalPlaceholder: 'அதிகாரப்பூர்வ போர்ட்டல் இணைப்பு இங்கே சேர்க்கப்படும்.'
    }
  },
  gu: {
    code: 'gu',
    name: 'ગુજરાતી',
    home: {
      tagline: 'તમારા અવાજમાં, તમારા હકની યોજના.',
      subtitle: 'થોડા સરળ પ્રશ્નોના જવાબ આપો અને સરકારી યોજનાઓ શોધો.',
      startVoiceCTA: 'વૉઇસ આસિસ્ટન્ટ શરૂ કરો',
      manualCTA: 'વિગતો મેન્યુઅલી દાખલ કરો',
      features: [
        { title: 'વૉઇસ ફર્સ્ટ', desc: 'તમારી ભાષામાં બોલીને યોજનાઓ શોધો.' },
        { title: 'યોજના મેચિંગ', desc: 'તમારી પાત્રતાના આધારે યોજનાઓ મેળવો.' },
        { title: 'અરજી સહાય', desc: 'જરૂરી દસ્તાવેજો અને પ્રક્રિયા સમજો.' },
      ],
      howItWorks: 'તે કેવી રીતે કામ કરે છે',
      steps: ['બોલો', 'જવાબ આપો', 'યોજના મેળવો', 'અરજી કરો'],
      pmAjayBanner: {
      badge: "PM-AJAY વિશેષ સુવિધા",
      subBadge: "GIA ઘટક કૌશલ્ય",
      title: "આજીવિકા અને NSQF કૌશલ્ય માટે AI વોઇસ આસિસ્ટન્ટ",
      desc: "“તમારો અવાજ. તમારું કૌશલ્ય. તમારી તક.” — SC લાભાર્થીઓ માટે વોઇસ-ફર્સ્ટ આજીવિકા મેપિંગ.",
      cta: "PM-AJAY વોઇસ આસિસ્ટન્ટ 🎙️"
}
    },
    assistant: {
      greeting: 'નમસ્તે! હું સરકારી સાથી છું.',
      intro: 'હું તમને સરકારી યોજનાઓ શોધવામાં મદદ કરીશ. ફક્ત થોડા સરળ પ્રશ્નોના જવાબ આપો.',
      tapToSpeak: 'બોલવા માટે ટેપ કરો',
      orType: 'અથવા તમારો જવાબ ટાઈપ કરો',
      typePlaceholder: 'તમારો જવાબ ટાઈપ કરો...',
      send: 'મોકલો',
      listening: 'સાંભળી રહ્યા છીએ...',
      processing: 'આભાર! તમારી માહિતીના આધારે યોગ્ય યોજનાઓ ચકાસી રહ્યા છીએ...',
      questions: [
        "નમસ્તે! તમે કયા રાજ્યમાં રહો છો?",
        "તમે કયા જિલ્લામાં રહો છો?",
        "તમે કયા તાલુકામાં (બ્લોક) રહો છો?",
        "તમે કયા ગામમાં રહો છો?",
        "તમારી ઉંમર કેટલી છે?",
        "તમારો મુખ્ય વ્યવસાય શું છે?",
        "તમારા પરિવારની અંદાજિત વાર્ષિક આવક કેટલી છે?",
        "તમારા પરિવારમાં કેટલા સભ્યો છે?",
        "શું તમારી પાસે રેશન કાર્ડ છે? (હા/ના)",
        "શું તમારા પરિવારમાં કોઈ વિદ્યાર્થી છે? (હા/ના)"
      ],
      occupations: ['ખેડૂત', 'વિદ્યાર્થી', 'મજૂર', 'નાનો વ્યવસાય', 'ગૃહિણી', 'અન્ય'],
      incomes: ['₹૧ લાખથી ઓછી', '₹૧–૨ લાખ', '₹૨–૫ લાખ', '₹૫ લાખથી વધુ']
    },
    results: {
      header: 'તમે પાત્ર હોઈ શકો તેવી યોજનાઓ',
      subtitle: 'તમે આપેલી માહિતીના આધારે, અમને આ સંભવિત સંબંધિત યોજનાઓ મળી છે.',
      highMatch: 'ઉચ્ચ મેચ',
      possibleMatch: 'સંભવિત મેચ',
      viewDetails: 'વિગતો જુઓ',
      disclaimer: 'અહીં દર્શાવેલ પાત્રતા એ પ્રારંભિક મૂલ્યાંકન છે. અરજી કરતા પહેલા કૃપા કરીને સત્તાવાર સરકારી આવશ્યકતાઓ ચકાસો.'
    },
    details: {
      whatIsIt: 'આ યોજના શું છે?',
      whoIsEligible: 'કોણ પાત્ર બની શકે?',
      benefits: 'લાભો',
      documents: 'સામાન્ય રીતે જરૂરી દસ્તાવેજો',
      howToApply: 'કેવી રીતે અરજી કરવી',
      applySteps: ['પાત્રતા ચકાસો', 'દસ્તાવેજો તૈયાર રાખો', 'સત્તાવાર સરકારી ચેનલ દ્વારા અરજી કરો'],
      visitPortal: 'સત્તાવાર પોર્ટલની મુલાકાત લો',
      back: 'ભલામણો પર પાછા જાઓ',
      portalPlaceholder: 'સત્તાવાર પોર્ટલ લિંક અહીં ઉમેરવામાં આવશે.'
    }
  },
  bho: {
    code: 'bho',
    name: 'भोजपुरी',
    home: {
      tagline: 'राउर आवाज में, राउर हक के योजना।',
      subtitle: 'कुछ आसान सवालन के जवाब दीं आउर जानीं कि रउवा कवन सरकारी योजनान के पात्र हो सकत बानी।',
      startVoiceCTA: 'आवाज से काम शुरू करीं',
      manualCTA: 'हाथ से जानकारी भरीं',
      features: [
        { title: 'पहिले आवाज', desc: 'आपन भाषा में बोल के योजना खोजीं।' },
        { title: 'योजना मिलाव', desc: 'आपन पात्रता के हिसाब से योजना पाईं।' },
        { title: 'आवेदन में मदद', desc: 'आवेदन खातिर जरूरी कागज आ तरीका समझीं।' },
      ],
      howItWorks: 'कइसे काम करेला',
      steps: ['बोलीं', 'जवाब दीं', 'योजना पाईं', 'आवेदन करीं'],
      pmAjayBanner: {
      badge: "PM-AJAY विशेष सुविधा",
      subBadge: "GIA घटक कौशल",
      title: "आजीविका आउर NSQF कौशल खातिर AI आवाज असिस्टेंट",
      desc: "“रउवा आवाज। रउवा कौशल। रउवा मौका।” — SC लाभार्थियन खातिर आवाज-फर्स्ट आजीविका मैपिंग।",
      cta: "PM-AJAY आवाज असिस्टेंट 🎙️"
}
    },
    assistant: {
      greeting: 'प्रणाम! हम सरकारी साथी हईं।',
      intro: 'हम रउवा खातिर सरकारी योजना खोजे में मदद करब। बस कुछ सीधा सवालन के जवाब दीं।',
      tapToSpeak: 'बोले खातिर दबाईं',
      orType: 'या नीचे लिख के जवाब दीं',
      typePlaceholder: 'आपन जवाब लिखीं...',
      send: 'भेजीं',
      listening: 'सुनत बानी...',
      processing: 'धन्यवाद! हम राउर जानकारी के आधार पर सही योजना चेक करत बानी...',
      questions: [
        "प्रणाम! रउआ कवन राज्य में रहेनी?",
        "रउआ कवन जिला में रहेनी?",
        "रउआ कवन ब्लॉक में रहेनी?",
        "रउआ कवन गाँव में रहेनी?",
        "राउर उमिर केतना बा?",
        "राउर मुख्य काम का ह?",
        "राउर परिवार के साल भर के आमदनी लगभग केतना बा?",
        "राउर परिवार में केतना लोग बा?",
        "का राउर लगे राशन कार्ड बा? (हां/ना)",
        "का राउर परिवार में कवनो लइका पढ़त बा? (हां/ना)"
      ],
      occupations: ['किसान', 'लइका (छात्र)', 'मजदूर', 'छोट धंधा', 'घर के काम', 'अउर कुछ'],
      incomes: ['₹1 लाख से कम', '₹1–2 लाख', '₹2–5 लाख', '₹5 लाख से जादा']
    },
    results: {
      header: 'राउर खातिर मिल सकत बा ई योजना सब',
      subtitle: 'राउर दिहल जानकारी के आधार पर, हमनी के ई संभावित रूप से सही योजना मिलल बा।',
      highMatch: 'पक्का मिलाव',
      possibleMatch: 'हो सकत मिलाव',
      viewDetails: 'पूरा जानकारी देखीं',
      disclaimer: 'इहाँ देखावल गइल पात्रता बस एगो सुरुआत ह। आवेदन करे से पहिले किरपा करके पक्का सरकारी जानकारी जरूर देख लीं।'
    },
    details: {
      whatIsIt: 'ई योजना का ह?',
      whoIsEligible: 'के पात्र हो सकत बा?',
      benefits: 'फायदा',
      documents: 'जरूरी कागज',
      howToApply: 'आवेदन कइसे करे के बा',
      applySteps: ['पात्रता जांचीं', 'कागज तइयार राखीं', 'पक्का सरकारी चैनल से आवेदन करीं'],
      visitPortal: 'पक्का पोर्टल पर जाईं',
      back: 'सिफारिश पर वापस जाईं',
      portalPlaceholder: 'पक्का पोर्टल लिंक इहाँ जोड़ल जाई।'
    }
  },
  mai: {
    code: 'mai',
    name: 'मैथिली',
    home: {
      tagline: 'अहाँक आवाज मे, अहाँक हकक योजना।',
      subtitle: 'किछु आसान सवालक जवाब दियौ आ जानू जे अहाँ कोना सरकारी योजनाक पात्र भ सकैत छी।',
      startVoiceCTA: 'आवाज सं काज शुरू करू',
      manualCTA: 'हाथ सं जानकारी भरू',
      features: [
        { title: 'पहिल आवाज', desc: 'अपन भाषा मे बाजि क योजना खोजू।' },
        { title: 'योजना मिलान', desc: 'अपन पात्रताक हिसाब सं योजना पाबू।' },
        { title: 'आवेदन मे मदद', desc: 'आवेदन लेल जरूरी कागज आ तरीका बुझू।' },
      ],
      howItWorks: 'कोना काज करैत अछि',
      steps: ['बाजू', 'जवाब दियौ', 'योजना पाबू', 'आवेदन करू'],
      pmAjayBanner: {
      badge: "PM-AJAY विशेष सुविधा",
      subBadge: "GIA घटक कौशल",
      title: "आजीविका आ NSQF कौशल लेल AI आवाज असिस्टेंट",
      desc: "“अहाँक आवाज। अहाँक कौशल। अहाँक मौका।” — SC लाभार्थियन लेल आवाज-फर्स्ट आजीविका मैपिंग।",
      cta: "PM-AJAY आवाज असिस्टेंट 🎙️"
}
    },
    assistant: {
      greeting: 'प्रणाम! हम सरकारी साथी छी।',
      intro: 'हम अहाँक लेल सरकारी योजना खोजय मे मदद करब। बस किछु सीधा सवालक जवाब दियौ।',
      tapToSpeak: 'बजबाक लेल दबाउ',
      orType: 'या नीचा लिख क जवाब दियौ',
      typePlaceholder: 'अपन जवाब लिखू...',
      send: 'पठाउ',
      listening: 'सुनि रहल छी...',
      processing: 'धन्यवाद! हम अहाँक जानकारीक आधार पर सही योजना चेक क रहल छी...',
      questions: [
        "प्रणाम! अहाँ कोना राज्य मे रहैत छी?",
        "अहाँ कोना जिला मे रहैत छी?",
        "अहाँ कोना ब्लॉक मे रहैत छी?",
        "अहाँ कोना गाम मे रहैत छी?",
        "अहाँक उम्र कतेक अछि?",
        "अहाँक मुख्य काज की अछि?",
        "अहाँक परिवारक साल भरिक आमदनी लगभग कतेक अछि?",
        "अहाँक परिवार मे कतेक गोटे छैथ?",
        "की अहाँ लग राशन कार्ड अछि? (हँ/नहि)",
        "की अहाँक परिवार मे कोनो विद्यार्थी अछि? (हँ/नहि)"
      ],
      occupations: ['किसान', 'विद्यार्थी', 'मजदूर', 'छोट व्यापार', 'गृहिणी', 'आन'],
      incomes: ['₹1 लाख सं कम', '₹1–2 लाख', '₹2–5 लाख', '₹5 लाख सं बेसी']
    },
    results: {
      header: 'अहाँक लेल मिल सकैत अछि ई योजना सब',
      subtitle: 'अहाँक देल जानकारीक आधार पर, हमरा ई संभावित रूप सं सही योजना मिलल अछि।',
      highMatch: 'पक्का मिलान',
      possibleMatch: 'भ सकैत मिलान',
      viewDetails: 'पूरा जानकारी देखू',
      disclaimer: 'एतय देखाओल गेल पात्रता बस एकटा शुरुआत अछि। आवेदन करबाक पहिने कृपा कय पक्का सरकारी जानकारी जरूर देख लिअ।'
    },
    details: {
      whatIsIt: 'ई योजना की अछि?',
      whoIsEligible: 'के पात्र भ सकैत अछि?',
      benefits: 'फायदा',
      documents: 'जरूरी कागज',
      howToApply: 'आवेदन कोना करी',
      applySteps: ['पात्रता जाँचू', 'कागज तैयार राखू', 'पक्का सरकारी चैनल सं आवेदन करू'],
      visitPortal: 'पक्का पोर्टल पर जाउ',
      back: 'सिफारिश पर वापस जाउ',
      portalPlaceholder: 'पक्का पोर्टल लिंक एतय जोडल जाएत।'
    }
  }
};

export interface ExtraTranslations {
  home: {
    needTitle: string;
    needSubtitle: string;
    needCTA: string;
    scamCheckTitle: string;
    scamCheckDesc: string;
    scamCheckCTA: string;
    pmAjayBanner?: {
      badge: string;
      subBadge: string;
      title: string;
      desc: string;
      cta: string;
    };
  };
  needAssistant: {
    prompt: string;
    statusReady: string;
    statusListening: string;
    statusSpeaking: string;
    statusProcessing: string;
    findingSchemes: string;
  };
  scamVerification: {
    backToHome: string;
    title: string;
    subtitle: string;
    schemeNameLabel: string;
    schemeNamePlaceholder: string;
    urlLabel: string;
    urlPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    uploadLabel: string;
    clickToUpload: string;
    verifyNow: string;
    verifying: string;
    verifiedTitle: string;
    suspiciousTitle: string;
    unknownTitle: string;
    matchedEntry: string;
    officialWebsite: string;
  };
  results: {
    listenResults: string;
    stopReading: string;
    noSchemesFound: string;
    tryDifferent: string;
    disclaimerLabel: string;
  };
  details: {
    listenDetails: string;
    stopReading: string;
  };
}

const extras: Record<string, ExtraTranslations> = {
  en: {
    home: {
      needTitle: 'Looking for something specific?',
      needSubtitle: "Just say what facility you need (e.g. Water, Electricity, Food, Housing, Healthcare, or Money) and we'll instantly show you relevant schemes.",
      needCTA: 'Tell us your need',
      scamCheckTitle: 'Fake Scheme Check',
      scamCheckDesc: 'Received a suspicious WhatsApp message about free government money? Verify it here.',
      scamCheckCTA: 'Verify Now',
      pmAjayBanner: {
        badge: 'PM-AJAY Special Feature',
        subBadge: 'GIA Component Skilling',
        title: 'AI Voice Assistant for Livelihood & NSQF Skilling',
        desc: '“Your Voice. Your Skills. Your Opportunity.” — Voice-first livelihood mapping for SC beneficiaries.',
        cta: 'PM-AJAY Voice Assistant 🎙️'
      }
    },
    needAssistant: {
      prompt: 'What specific facility do you need? For example: Water, Electricity, Food, Housing, Healthcare, or Money.',
      statusReady: 'Ready',
      statusListening: 'Listening...',
      statusSpeaking: 'Speaking...',
      statusProcessing: 'Processing...',
      findingSchemes: 'Finding schemes for your need...'
    },
    scamVerification: {
      backToHome: 'Back to Home',
      title: 'Scam / Fake Scheme Check',
      subtitle: "Received a suspicious WhatsApp forward or SMS about free government money? Paste it below to verify if it's a real scheme or a scam.",
      schemeNameLabel: 'Scheme Name (if mentioned)',
      schemeNamePlaceholder: 'e.g. PM Kisan Yojana',
      urlLabel: 'Website Link / URL',
      urlPlaceholder: 'e.g. bit.ly/free-money or pmkisan.gov.in',
      messageLabel: 'Message Received (WhatsApp/SMS)',
      messagePlaceholder: 'Paste the full message here...',
      uploadLabel: 'Upload Screenshot (Optional)',
      clickToUpload: 'Click to upload screenshot',
      verifyNow: 'Verify Now',
      verifying: 'Verifying against databases...',
      verifiedTitle: 'Verified Official Scheme',
      suspiciousTitle: 'Suspicious / Fake Scheme Detected!',
      unknownTitle: 'Could Not Fully Verify',
      matchedEntry: 'Matched Official Database Entry:',
      officialWebsite: 'Official Website:'
    },
    results: {
      listenResults: 'Listen to Results',
      stopReading: 'Stop Reading',
      noSchemesFound: 'No exact schemes found',
      tryDifferent: 'Try searching with a different keyword or use our main Voice Assistant.',
      disclaimerLabel: 'Disclaimer:'
    },
    details: {
      listenDetails: 'Listen to Details',
      stopReading: 'Stop Reading'
    }
  },
  hi: {
    home: {
      needTitle: 'क्या आप किसी विशेष सुविधा की तलाश में हैं?',
      needSubtitle: 'बस अपनी आवश्यकता बताएं (जैसे: पानी, बिजली, राशन, मकान, इलाज, या पैसा) और हम तुरंत उपयुक्त योजनाएं दिखाएंगे।',
      needCTA: 'अपनी आवश्यकता बताएं',
      scamCheckTitle: 'फर्जी / धोखाधड़ी योजना जांच',
      scamCheckDesc: 'क्या आपको मुफ्त सरकारी पैसे के बारे में कोई संदिग्ध WhatsApp या SMS संदेश मिला है? यहां जांचें।',
      scamCheckCTA: 'अभी जांच करें',
      pmAjayBanner: {
        badge: 'PM-AJAY विशेष सुविधा',
        subBadge: 'GIA घटक कौशल',
        title: 'आजीविका एवं NSQF कौशल के लिए AI वॉयस सहायक',
        desc: '“आपकी आवाज़। आपके कौशल। आपका अवसर।” — SC लाभार्थियों के लिए वॉयस-आधारित आजीविका मैपिंग।',
        cta: 'PM-AJAY वॉयस असिस्टेंट 🎙️'
      }
    },
    needAssistant: {
      prompt: 'आपको किस विशेष सुविधा की आवश्यकता है? उदाहरण के लिए: पानी, बिजली, राशन, घर, स्वास्थ्य, या पैसा।',
      statusReady: 'तैयार',
      statusListening: 'सुन रहा हूँ...',
      statusSpeaking: 'बोल रहा हूँ...',
      statusProcessing: 'जांच जारी...',
      findingSchemes: 'आपकी आवश्यकता के अनुसार योजनाएं खोजी जा रही हैं...'
    },
    scamVerification: {
      backToHome: 'मुख्य पृष्ठ पर वापस जाएं',
      title: 'फर्जी / धोखाधड़ी योजना जांच',
      subtitle: 'क्या आपको मुफ्त सरकारी पैसे या योजना का कोई संदेश मिला है? नीचे विवरण दर्ज करके जांचें कि योजना असली है या फर्जी।',
      schemeNameLabel: 'योजना का नाम (यदि उल्लेखित हो)',
      schemeNamePlaceholder: 'जैसे: पीएम किसान योजना',
      urlLabel: 'वेबसाइट लिंक / URL',
      urlPlaceholder: 'जैसे: bit.ly/free-money या pmkisan.gov.in',
      messageLabel: 'प्राप्त संदेश (WhatsApp/SMS)',
      messagePlaceholder: 'पूरा संदेश यहां पेस्ट करें...',
      uploadLabel: 'स्क्रीनशॉट अपलोड करें (वैकल्पिक)',
      clickToUpload: 'स्क्रीनशॉट अपलोड करने के लिए क्लिक करें',
      verifyNow: 'अभी सत्यापित करें',
      verifying: 'सरकारी डेटाबेस से जांच की जा रही है...',
      verifiedTitle: 'सत्यापित आधिकारिक योजना',
      suspiciousTitle: 'सावधान! संदिग्ध / फर्जी योजना पाई गई!',
      unknownTitle: 'पूर्णतः सत्यापित नहीं हो सका',
      matchedEntry: 'आधिकारिक डेटाबेस प्रविष्टि:',
      officialWebsite: 'आधिकारिक वेबसाइट:'
    },
    results: {
      listenResults: 'परिणाम सुनें',
      stopReading: 'पढ़ना बंद करें',
      noSchemesFound: 'कोई सटीक योजना नहीं मिली',
      tryDifferent: 'किसी अन्य शब्द से खोजें या हमारे मुख्य वॉइस असिस्टेंट का उपयोग करें।',
      disclaimerLabel: 'अस्वीकरण:'
    },
    details: {
      listenDetails: 'विवरण सुनें',
      stopReading: 'पढ़ना बंद करें'
    }
  },
  bun: {
    home: {
      needTitle: 'का तुम कछू खास सुविधा खोज रहे हो?',
      needSubtitle: 'बस बताओ के तुम का चाहत हो (जइसे: पानी, बिजली, राशन, मकान, दवाई या पईसा) और हम तुरंत योजना दिखाउब।',
      needCTA: 'अपनई जरूरत बताओ',
      scamCheckTitle: 'फर्जी योजना की जांच',
      scamCheckDesc: 'का तुमाओ WhatsApp पर सरकारी पैसा को कोई संदिग्ध मैसेज आओ है? इते जांच करो।',
      scamCheckCTA: 'अभी जांच करो',
      pmAjayBanner: {
        badge: 'PM-AJAY खास सुविधा',
        subBadge: 'GIA घटक काम-धंधा',
        title: 'आजीविका और कौशल के लाने वॉयस सहायक',
        desc: '“तुमाई आवाज। तुमाओ हुनर। तुमाओ मौका।” — SC भाइयों के लाने आवाज सई काम-धंधा खोजो।',
        cta: 'PM-AJAY वॉयस असिस्टेंट 🎙️'
      }
    },
    needAssistant: {
      prompt: 'तुम खों का चीज की जरूरत है? जइसे: पानी, बिजली, राशन, मकान, दवाई या पईसा।',
      statusReady: 'तैयार',
      statusListening: 'सुन रहे...',
      statusSpeaking: 'बोल रहे...',
      statusProcessing: 'खोज रहे...',
      findingSchemes: 'तुमाई जरूरत के हिसाब से योजना खोजी जा रही...'
    },
    scamVerification: {
      backToHome: 'घर वापस जाओ',
      title: 'फर्जी योजना जांच',
      subtitle: 'का तुमाओ फर्जी मैसेज आओ है? नीचे जानकारी भरके चेक करो।',
      schemeNameLabel: 'योजना का नाम',
      schemeNamePlaceholder: 'जइसे: पीएम किसान योजना',
      urlLabel: 'वेबसाइट लिंक',
      urlPlaceholder: 'जइसे: bit.ly/free-money या pmkisan.gov.in',
      messageLabel: 'आओ मैसेज',
      messagePlaceholder: 'पूरा मैसेज इते लिखो...',
      uploadLabel: 'फोटो/स्क्रीनशॉट डालो',
      clickToUpload: 'फोटो अपलोड करो',
      verifyNow: 'जांच करो',
      verifying: 'जांच चल रही...',
      verifiedTitle: 'सच्ची सरकारी योजना',
      suspiciousTitle: 'सावधान! फर्जी मैसेज!',
      unknownTitle: 'पूरी जांच नहीं हो पाई',
      matchedEntry: 'सरकारी रिकॉर्ड:',
      officialWebsite: 'सरकारी वेबसाइट:'
    },
    results: {
      listenResults: 'रिजल्ट सुनो',
      stopReading: 'पढ़ना बंद करो',
      noSchemesFound: 'कोई पक्की योजना नहीं मिली',
      tryDifferent: 'दूसरे शब्द से खोजो या आवाज से बताओ।',
      disclaimerLabel: 'ध्यान देवो:'
    },
    details: {
      listenDetails: 'विवरण सुनो',
      stopReading: 'पढ़ना बंद करो'
    }
  }
};

export function getTranslation(lang: LanguageCode) {
  const base = languages[lang] || languages['en'];
  const extra = extras[lang] || (lang !== 'en' ? extras['hi'] : extras['en']);
  
  return {
    ...base,
    home: {
      ...base.home,
      ...extra.home
    },
    assistant: base.assistant,
    needAssistant: extra.needAssistant,
    scamVerification: extra.scamVerification,
    results: {
      ...base.results,
      ...extra.results
    },
    details: {
      ...base.details,
      ...extra.details
    }
  };
}

