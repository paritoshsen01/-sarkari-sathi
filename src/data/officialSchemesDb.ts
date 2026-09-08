export interface OfficialScheme {
  name: string;
  aliases: string[];
  url: string; // The primary official URL domain
}

export const officialSchemesDb: OfficialScheme[] = [
  { name: "Pradhan Mantri Awas Yojana", aliases: ["pmay", "pm awas yojana", "pmay-g", "pmay-u"], url: "pmayg.nic.in" },
  { name: "Pradhan Mantri Kisan Samman Nidhi", aliases: ["pm kisan", "pm-kisan", "pm kisan yojana"], url: "pmkisan.gov.in" },
  { name: "Ayushman Bharat", aliases: ["pmjay", "pm-jay", "ayushman bharat yojana", "national health protection scheme"], url: "pmjay.gov.in" },
  { name: "Atal Pension Yojana", aliases: ["apy", "atal pension"], url: "npscra.nsdl.co.in" },
  { name: "Sukanya Samriddhi Yojana", aliases: ["ssy", "sukanya samriddhi"], url: "nsiindia.gov.in" },
  { name: "Pradhan Mantri Jan Dhan Yojana", aliases: ["pmjdy", "jan dhan yojana"], url: "pmjdy.gov.in" },
  { name: "Pradhan Mantri Jeevan Jyoti Bima Yojana", aliases: ["pmjjby", "jeevan jyoti bima"], url: "jansuraksha.gov.in" },
  { name: "Pradhan Mantri Suraksha Bima Yojana", aliases: ["pmsby", "suraksha bima yojana"], url: "jansuraksha.gov.in" },
  { name: "Pradhan Mantri Mudra Yojana", aliases: ["pmmy", "mudra yojana", "mudra loan"], url: "mudra.org.in" },
  { name: "Pradhan Mantri Ujjwala Yojana", aliases: ["pmuy", "ujjwala yojana"], url: "pmuy.gov.in" },
  { name: "Stand Up India", aliases: ["stand-up india", "standup india"], url: "standupmitra.in" },
  { name: "Start Up India", aliases: ["startup india", "start-up india"], url: "startupindia.gov.in" },
  { name: "Pradhan Mantri Fasal Bima Yojana", aliases: ["pmfby", "fasal bima yojana"], url: "pmfby.gov.in" },
  { name: "Pradhan Mantri Garib Kalyan Yojana", aliases: ["pmgky", "garib kalyan yojana"], url: "india.gov.in" },
  { name: "Mahatma Gandhi National Rural Employment Guarantee Act", aliases: ["mgnrega", "nrega"], url: "nrega.nic.in" },
  { name: "Deen Dayal Upadhyaya Grameen Kaushalya Yojana", aliases: ["ddu-gky", "ddugky"], url: "ddugky.gov.in" },
  { name: "Pradhan Mantri Kaushal Vikas Yojana", aliases: ["pmkvy", "kaushal vikas yojana"], url: "pmkvyofficial.org" },
  { name: "Swachh Bharat Mission", aliases: ["sbm", "swachh bharat abhiyan"], url: "swachhbharatmission.gov.in" },
  { name: "Beti Bachao Beti Padhao", aliases: ["bbbp", "beti bachao"], url: "wcd.nic.in/bbbp" },
  { name: "Pradhan Mantri Matru Vandana Yojana", aliases: ["pmmvy", "matru vandana yojana"], url: "pmmvy.wcd.gov.in" },
  { name: "National Scholarship Portal", aliases: ["nsp", "national scholarship scheme", "scholarship portal"], url: "scholarships.gov.in" },
  { name: "Pradhan Mantri SVANidhi", aliases: ["pm svanidhi", "pmsvanidhi"], url: "pmsvanidhi.mohua.gov.in" },
  { name: "Kisan Credit Card", aliases: ["kcc"], url: "agricoop.nic.in" },
  { name: "Pradhan Mantri Krishi Sinchayee Yojana", aliases: ["pmksy", "krishi sinchayee yojana"], url: "pmksy.gov.in" },
  { name: "E-Shram", aliases: ["eshram", "e shram card", "shramik card"], url: "eshram.gov.in" },
  { name: "Chief Minister's Ladli Behna Yojana", aliases: ["ladli behna", "ladli bahna", "mukhyamantri ladli behna"], url: "cmladlibahna.mp.gov.in" },
  { name: "Mukhya Mantri Kanya Vivah Yojana", aliases: ["kanya vivah", "kanya vivah yojana"], url: "socialjustice.mp.gov.in" },
  { name: "PM Vishwakarma", aliases: ["pm vishwakarma yojana", "vishwakarma scheme"], url: "pmvishwakarma.gov.in" },
  { name: "Lakhpati Didi", aliases: ["lakhpati didi yojana"], url: "lakhpatididi.gov.in" },
  { name: "PM Surya Ghar Muft Bijli Yojana", aliases: ["surya ghar", "muft bijli", "pm surya ghar"], url: "pmsuryaghar.gov.in" }
];
