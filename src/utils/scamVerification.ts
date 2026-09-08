import { prototypeSchemes } from '../data/schemes';
import { officialSchemesDb } from '../data/officialSchemesDb';

export type VerificationResult = 'verified' | 'suspicious' | 'unknown';

export interface VerificationResponse {
  status: VerificationResult;
  message: string;
  matchedScheme?: string;
  officialUrl?: string;
}

export function verifyScheme(name: string, url: string, msg: string): VerificationResponse {
  const n = name.toLowerCase().trim();
  const u = url.toLowerCase().trim();
  const m = msg.toLowerCase().trim();

  // 1. Check for immediate Red Flags (Suspicious)
  const scamKeywords = ['free money', 'lottery', 'urgent', 'send otp', 'click here to claim', '₹5000 free', 'win', 'prize', 'whatsapp forward', 'forwarded many times'];
  const suspiciousUrls = ['bit.ly', 'tinyurl', 'free-gov-money', 'xyz', 'click.ru', 'wa.me', 'ngrok.io'];

  const hasScamKeywords = scamKeywords.some(kw => m.includes(kw));
  const hasSuspiciousUrl = suspiciousUrls.some(su => u.includes(su));

  if (hasScamKeywords || hasSuspiciousUrl) {
    return {
      status: 'suspicious',
      message: 'This contains common scam patterns (suspicious links or fake claims). Do NOT click any links or share your OTP.'
    };
  }

  // 2. Check for Green Flags (Verified) against both Prototype DB and Massive Official DB
  let matchedSchemeName = '';
  let officialSchemeUrl = '';
  let foundInDb = false;

  // Check Official DB first
  for (const s of officialSchemesDb) {
    if (n === s.name.toLowerCase() || s.aliases.some(alias => n.includes(alias) || alias.includes(n))) {
      foundInDb = true;
      matchedSchemeName = s.name;
      officialSchemeUrl = s.url;
      break;
    }
  }

  // Fallback to Prototype DB
  if (!foundInDb) {
    for (const s of prototypeSchemes) {
      if (s.name.toLowerCase().includes(n) || n.includes(s.name.toLowerCase())) {
        foundInDb = true;
        matchedSchemeName = s.name;
        break;
      }
    }
  }

  const isOfficialUrl = u.includes('.gov.in') || u.includes('.nic.in') || (officialSchemeUrl && u.includes(officialSchemeUrl));

  if (foundInDb && isOfficialUrl) {
    return {
      status: 'verified',
      message: 'This matches an official Government scheme and the provided website is verified.',
      matchedScheme: matchedSchemeName,
      officialUrl: officialSchemeUrl
    };
  }

  // If we know the scheme, but the URL doesn't match the official one, it's highly suspicious!
  if (foundInDb && u && !isOfficialUrl) {
    return {
      status: 'suspicious',
      message: \`WARNING: You are looking for a real scheme (\${matchedSchemeName}), but the website link you provided is FAKE! Do not enter your details.\`,
      matchedScheme: matchedSchemeName,
      officialUrl: officialSchemeUrl || 'Always use .gov.in websites'
    };
  }

  // 3. Fallback (Could not fully verify)
  if (foundInDb && !u) {
    return {
      status: 'unknown',
      message: 'The scheme name exists, but without a website link, we cannot fully verify this specific message. Be cautious.',
      matchedScheme: matchedSchemeName,
      officialUrl: officialSchemeUrl
    };
  }

  return {
    status: 'unknown',
    message: 'We could not find this exact scheme or website in our verified database. Please proceed with extreme caution and visit your local Panchayat office to confirm.'
  };
}
