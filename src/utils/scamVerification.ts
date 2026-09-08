import { prototypeSchemes } from '../data/schemes';

export type VerificationResult = 'verified' | 'suspicious' | 'unknown';

export interface VerificationResponse {
  status: VerificationResult;
  message: string;
  matchedScheme?: string;
}

export function verifyScheme(name: string, url: string, msg: string): VerificationResponse {
  const n = name.toLowerCase().trim();
  const u = url.toLowerCase().trim();
  const m = msg.toLowerCase().trim();

  // 1. Check for immediate Red Flags (Suspicious)
  const scamKeywords = ['free money', 'lottery', 'urgent', 'send otp', 'click here to claim', '₹5000 free', 'win', 'prize', 'whatsapp forward'];
  const suspiciousUrls = ['bit.ly', 'tinyurl', 'free-gov-money', 'xyz', 'click.ru', 'wa.me'];

  const hasScamKeywords = scamKeywords.some(kw => m.includes(kw));
  const hasSuspiciousUrl = suspiciousUrls.some(su => u.includes(su));

  if (hasScamKeywords || hasSuspiciousUrl) {
    return {
      status: 'suspicious',
      message: 'This contains common scam patterns (suspicious links or fake claims). Do NOT click any links or share your OTP.'
    };
  }

  // 2. Check for Green Flags (Verified)
  // Find a matching scheme
  let matchedSchemeName = '';
  const isKnownScheme = prototypeSchemes.some(s => {
    if (s.name.toLowerCase().includes(n) || n.includes(s.name.toLowerCase())) {
      matchedSchemeName = s.name;
      return true;
    }
    return false;
  });

  const isOfficialUrl = u.includes('.gov.in') || u.includes('.nic.in');

  if (isKnownScheme && isOfficialUrl) {
    return {
      status: 'verified',
      message: 'This matches an official Government scheme and the provided website is verified.',
      matchedScheme: matchedSchemeName
    };
  }

  // 3. Fallback (Could not fully verify)
  if (isKnownScheme && !u) {
    return {
      status: 'unknown',
      message: 'The scheme name exists, but without an official website link, we cannot fully verify this specific message. Be cautious.',
      matchedScheme: matchedSchemeName
    };
  }

  return {
    status: 'unknown',
    message: 'We could not find this exact scheme or website in our verified database. Please proceed with extreme caution and visit your local Panchayat office to confirm.'
  };
}
