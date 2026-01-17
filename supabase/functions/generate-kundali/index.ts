import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Pro Kerala API configuration
const PROKERALA_TOKEN_URL = 'https://api.prokerala.com/token';
const PROKERALA_API_BASE = 'https://api.prokerala.com/v2/astrology';

// Cache for Pro Kerala access token
let cachedToken: { token: string; expiresAt: number } | null = null;

interface BirthDetails {
  name: string;
  dob: string; // YYYY-MM-DD
  time: string; // HH:MM
  place: string;
  latitude?: number;
  longitude?: number;
}

// Get Pro Kerala access token with caching
async function getProKeralaToken(): Promise<string> {
  const now = Date.now();
  
  // Return cached token if still valid (with 5 min buffer)
  if (cachedToken && cachedToken.expiresAt > now + 300000) {
    return cachedToken.token;
  }
  
  const clientId = Deno.env.get('PROKERALA_CLIENT_ID');
  const clientSecret = Deno.env.get('PROKERALA_CLIENT_SECRET');
  
  if (!clientId || !clientSecret) {
    throw new Error('Pro Kerala API credentials not configured');
  }
  
  console.log('Fetching new Pro Kerala access token...');
  
  const response = await fetch(PROKERALA_TOKEN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: clientId,
      client_secret: clientSecret,
    }),
  });
  
  if (!response.ok) {
    const error = await response.text();
    console.error('Pro Kerala auth error:', error);
    throw new Error('Failed to authenticate with Pro Kerala API');
  }
  
  const data = await response.json();
  cachedToken = {
    token: data.access_token,
    expiresAt: now + (data.expires_in * 1000),
  };
  
  console.log('Pro Kerala token obtained successfully');
  return cachedToken.token;
}

// Fetch astrology data from Pro Kerala
async function fetchProKeralaEndpoint(
  token: string,
  endpoint: string,
  params: Record<string, string>
): Promise<any> {
  const url = new URL(`${PROKERALA_API_BASE}${endpoint}`);
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, value);
  });
  
  console.log(`Fetching Pro Kerala: ${endpoint}`);
  
  const response = await fetch(url.toString(), {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
    },
  });
  
  if (!response.ok) {
    const error = await response.text();
    console.error(`Pro Kerala API error for ${endpoint}:`, error);
    throw new Error(`Pro Kerala API error: ${endpoint}`);
  }
  
  return response.json();
}

// Generate personalized predictions using Lovable AI
async function generatePredictions(astroData: any, userData: BirthDetails): Promise<any> {
  const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
  
  if (!LOVABLE_API_KEY) {
    throw new Error('LOVABLE_API_KEY is not configured');
  }
  
  const systemPrompt = `You are an expert Vedic astrologer with deep knowledge of Indian astrology, Jyotish Shastra, and traditional remedies. 
Based on the birth chart data provided, generate comprehensive and personalized predictions.
Be specific, insightful, and culturally authentic. Include Hindi terms where appropriate.
Your predictions should be positive yet realistic, offering practical guidance.`;

  const userPrompt = `Generate a complete Kundali analysis for:
Name: ${userData.name}
Date of Birth: ${userData.dob}
Time of Birth: ${userData.time}
Place: ${userData.place}

Astrological Data:
${JSON.stringify(astroData, null, 2)}

Return a JSON object with this EXACT structure (respond ONLY with valid JSON, no markdown):
{
  "nakshatra": "Nakshatra name",
  "rashi": "Moon sign in Hindi",
  "lagnaRashi": "Ascendant sign in Hindi",
  "personality": {
    "title": "Personality & Nature",
    "titleHindi": "व्यक्तित्व और स्वभाव",
    "content": "Detailed personality analysis (3-4 sentences)",
    "highlights": ["strength 1", "strength 2", "strength 3", "strength 4"],
    "warnings": ["challenge 1", "challenge 2"]
  },
  "career": {
    "title": "Career & Professional Life",
    "titleHindi": "करियर और पेशेवर जीवन",
    "content": "Detailed career analysis (3-4 sentences)",
    "highlights": ["career strength 1", "suitable field 1", "career opportunity"],
    "warnings": ["career caution 1"]
  },
  "wealth": {
    "title": "Wealth & Finance",
    "titleHindi": "धन और वित्त",
    "content": "Detailed wealth analysis (3-4 sentences)",
    "highlights": ["wealth opportunity 1", "financial strength"],
    "warnings": ["financial caution 1"]
  },
  "marriage": {
    "title": "Marriage & Relationships",
    "titleHindi": "विवाह और रिश्ते",
    "content": "Detailed marriage analysis (3-4 sentences)",
    "highlights": ["relationship strength 1", "partner quality"],
    "warnings": ["relationship caution 1"]
  },
  "health": {
    "title": "Health & Wellness",
    "titleHindi": "स्वास्थ्य और तंदुरुस्ती",
    "content": "Detailed health analysis (3-4 sentences)",
    "highlights": ["health strength 1", "wellness tip"],
    "warnings": ["health caution 1"]
  },
  "children": {
    "title": "Children & Progeny",
    "titleHindi": "संतान और वंश",
    "content": "Detailed children analysis (3-4 sentences)",
    "highlights": ["children blessing 1"],
    "warnings": []
  },
  "foreignTravel": {
    "title": "Foreign Travel & Settlement",
    "titleHindi": "विदेश यात्रा और बसाव",
    "content": "Detailed foreign travel analysis (3-4 sentences)",
    "highlights": ["travel opportunity 1"],
    "warnings": []
  },
  "doshas": [
    {
      "name": "Mangal Dosha",
      "nameHindi": "मंगल दोष",
      "present": false,
      "severity": "none",
      "description": "Analysis of Mangal Dosha",
      "impact": "Impact description",
      "remedies": ["remedy 1", "remedy 2"]
    },
    {
      "name": "Kaal Sarp Dosha",
      "nameHindi": "काल सर्प दोष",
      "present": false,
      "severity": "none",
      "description": "Analysis of Kaal Sarp Dosha",
      "impact": "Impact description",
      "remedies": ["remedy 1"]
    }
  ],
  "remedies": {
    "mantras": ["mantra 1", "mantra 2", "mantra 3"],
    "pujas": ["puja 1", "puja 2"],
    "vrats": ["vrat 1"],
    "donations": ["donation 1", "donation 2"],
    "templeVisits": ["temple 1", "temple 2"]
  },
  "gemstone": {
    "name": "Gemstone name in English",
    "nameHindi": "Gemstone name in Hindi",
    "reason": "Why this gemstone is recommended",
    "wearingMethod": "How to wear this gemstone",
    "day": "Best day to wear",
    "finger": "Which finger to wear on",
    "weight": "Recommended weight in carats",
    "metal": "Metal to set the stone in",
    "mantra": "Mantra to recite while wearing"
  },
  "luckyFactors": {
    "color": "Lucky color",
    "colorHindi": "Color in Hindi",
    "number": 7,
    "day": "Lucky day",
    "dayHindi": "Day in Hindi",
    "direction": "Lucky direction",
    "directionHindi": "Direction in Hindi",
    "deity": "Ruling deity"
  },
  "yearlyPrediction": [
    {"month": "January 2025", "career": "good", "money": "average", "love": "excellent", "health": "good"},
    {"month": "February 2025", "career": "excellent", "money": "good", "love": "good", "health": "average"},
    {"month": "March 2025", "career": "average", "money": "excellent", "love": "average", "health": "good"},
    {"month": "April 2025", "career": "good", "money": "good", "love": "good", "health": "excellent"},
    {"month": "May 2025", "career": "challenging", "money": "average", "love": "excellent", "health": "good"},
    {"month": "June 2025", "career": "good", "money": "good", "love": "average", "health": "average"},
    {"month": "July 2025", "career": "excellent", "money": "excellent", "love": "good", "health": "good"},
    {"month": "August 2025", "career": "good", "money": "average", "love": "challenging", "health": "excellent"},
    {"month": "September 2025", "career": "average", "money": "good", "love": "good", "health": "good"},
    {"month": "October 2025", "career": "good", "money": "excellent", "love": "excellent", "health": "average"},
    {"month": "November 2025", "career": "excellent", "money": "good", "love": "good", "health": "good"},
    {"month": "December 2025", "career": "good", "money": "good", "love": "average", "health": "excellent"}
  ],
  "muhurats": [
    {"purpose": "Marriage", "purposeHindi": "विवाह", "dates": ["date1", "date2"], "notes": "Special notes"},
    {"purpose": "Property Purchase", "purposeHindi": "संपत्ति खरीद", "dates": ["date1"], "notes": ""},
    {"purpose": "Business Start", "purposeHindi": "व्यापार आरंभ", "dates": ["date1", "date2"], "notes": ""}
  ],
  "panditMessage": "A personalized blessing and guidance message from the astrologer"
}`;

  console.log('Calling Lovable AI for predictions...');
  
  const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${LOVABLE_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'google/gemini-2.5-pro',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt },
      ],
      temperature: 0.7,
    }),
  });
  
  if (!response.ok) {
    if (response.status === 429) {
      throw new Error('Rate limit exceeded. Please try again later.');
    }
    if (response.status === 402) {
      throw new Error('AI credits exhausted. Please add credits to continue.');
    }
    const error = await response.text();
    console.error('Lovable AI error:', error);
    throw new Error('Failed to generate predictions');
  }
  
  const aiResponse = await response.json();
  const content = aiResponse.choices?.[0]?.message?.content;
  
  if (!content) {
    throw new Error('No content received from AI');
  }
  
  console.log('AI response received, parsing...');
  
  // Parse JSON from AI response (handle markdown code blocks)
  let jsonStr = content;
  if (content.includes('```json')) {
    jsonStr = content.split('```json')[1].split('```')[0].trim();
  } else if (content.includes('```')) {
    jsonStr = content.split('```')[1].split('```')[0].trim();
  }
  
  return JSON.parse(jsonStr);
}

// Map Pro Kerala planet data to our format
function mapPlanets(proKeralaData: any): any[] {
  const planetMap: Record<string, string> = {
    'Sun': 'सूर्य',
    'Moon': 'चंद्र',
    'Mars': 'मंगल',
    'Mercury': 'बुध',
    'Jupiter': 'गुरु',
    'Venus': 'शुक्र',
    'Saturn': 'शनि',
    'Rahu': 'राहु',
    'Ketu': 'केतु',
  };
  
  const zodiacSigns = [
    'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
    'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
  ];
  
  if (!proKeralaData?.planet_positions) {
    // Return default planets if API data is missing
    return [
      { label: 'Su', name: 'Sun', house: 1, sign: 'Aries', degree: '15°30\'', isRetrograde: false },
      { label: 'Mo', name: 'Moon', house: 4, sign: 'Cancer', degree: '22°45\'', isRetrograde: false },
      { label: 'Ma', name: 'Mars', house: 10, sign: 'Capricorn', degree: '8°15\'', isRetrograde: false },
      { label: 'Me', name: 'Mercury', house: 12, sign: 'Pisces', degree: '28°00\'', isRetrograde: true },
      { label: 'Ju', name: 'Jupiter', house: 5, sign: 'Leo', degree: '12°30\'', isRetrograde: false },
      { label: 'Ve', name: 'Venus', house: 2, sign: 'Taurus', degree: '5°45\'', isRetrograde: false },
      { label: 'Sa', name: 'Saturn', house: 7, sign: 'Libra', degree: '18°20\'', isRetrograde: true },
      { label: 'Ra', name: 'Rahu', house: 3, sign: 'Gemini', degree: '10°00\'', isRetrograde: true },
      { label: 'Ke', name: 'Ketu', house: 9, sign: 'Sagittarius', degree: '10°00\'', isRetrograde: true },
    ];
  }
  
  return proKeralaData.planet_positions.map((planet: any) => {
    const labelMap: Record<string, string> = {
      'Sun': 'Su', 'Moon': 'Mo', 'Mars': 'Ma', 'Mercury': 'Me',
      'Jupiter': 'Ju', 'Venus': 'Ve', 'Saturn': 'Sa', 'Rahu': 'Ra', 'Ketu': 'Ke'
    };
    
    return {
      label: labelMap[planet.name] || planet.name.substring(0, 2),
      name: planet.name,
      house: planet.house || 1,
      sign: zodiacSigns[planet.sign_id - 1] || 'Aries',
      degree: `${Math.floor(planet.degree)}°${Math.floor((planet.degree % 1) * 60)}'`,
      isRetrograde: planet.is_retrograde || false,
    };
  });
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }
  
  try {
    const birthDetails: BirthDetails = await req.json();
    
    console.log('Generating Kundali for:', birthDetails.name);
    
    // Validate required fields
    if (!birthDetails.name || !birthDetails.dob || !birthDetails.time || !birthDetails.place) {
      return new Response(
        JSON.stringify({ error: 'Missing required birth details' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
    
    // Default coordinates for India if not provided
    const latitude = birthDetails.latitude || 28.6139; // Delhi
    const longitude = birthDetails.longitude || 77.2090;
    
    // Format datetime for Pro Kerala API
    const datetime = `${birthDetails.dob}T${birthDetails.time}:00+05:30`;
    
    const apiParams = {
      datetime,
      coordinates: `${latitude},${longitude}`,
      ayanamsa: '1', // Lahiri Ayanamsa
    };
    
    let proKeralaData: any = {};
    
    try {
      // Get Pro Kerala access token
      const token = await getProKeralaToken();
      
      // Fetch all astrology data in parallel
      const [kundli, planetPositions, mangalDosha, kaalSarpDosha, panchang] = await Promise.all([
        fetchProKeralaEndpoint(token, '/kundli/advanced', apiParams).catch(e => {
          console.error('Kundli fetch failed:', e);
          return null;
        }),
        fetchProKeralaEndpoint(token, '/planet-position', apiParams).catch(e => {
          console.error('Planet position fetch failed:', e);
          return null;
        }),
        fetchProKeralaEndpoint(token, '/mangal-dosh', apiParams).catch(e => {
          console.error('Mangal dosha fetch failed:', e);
          return null;
        }),
        fetchProKeralaEndpoint(token, '/kaal-sarp-dosh', apiParams).catch(e => {
          console.error('Kaal sarp fetch failed:', e);
          return null;
        }),
        fetchProKeralaEndpoint(token, '/panchang', apiParams).catch(e => {
          console.error('Panchang fetch failed:', e);
          return null;
        }),
      ]);
      
      proKeralaData = {
        kundli: kundli?.data,
        planetPositions: planetPositions?.data,
        mangalDosha: mangalDosha?.data,
        kaalSarpDosha: kaalSarpDosha?.data,
        panchang: panchang?.data,
      };
      
      console.log('Pro Kerala data fetched successfully');
    } catch (proKeralaError) {
      console.error('Pro Kerala API error, proceeding with AI-only generation:', proKeralaError);
      // Continue with AI generation even if Pro Kerala fails
    }
    
    // Generate AI predictions
    const predictions = await generatePredictions(proKeralaData, birthDetails);
    
    // Map planets from Pro Kerala data
    const planets = mapPlanets(proKeralaData.planetPositions);
    
    // Construct complete KundaliData
    const kundaliData = {
      userData: {
        name: birthDetails.name,
        dob: birthDetails.dob,
        time: birthDetails.time,
        place: birthDetails.place,
        nakshatra: predictions.nakshatra || 'Rohini',
        rashi: predictions.rashi || 'वृषभ',
        lagnaRashi: predictions.lagnaRashi || 'मेष',
      },
      planets,
      personality: predictions.personality,
      career: predictions.career,
      wealth: predictions.wealth,
      marriage: predictions.marriage,
      health: predictions.health,
      children: predictions.children,
      foreignTravel: predictions.foreignTravel,
      doshas: predictions.doshas,
      remedies: predictions.remedies,
      gemstone: predictions.gemstone,
      luckyFactors: predictions.luckyFactors,
      yearlyPrediction: predictions.yearlyPrediction,
      muhurats: predictions.muhurats,
      panditName: 'Pt. Raj Sharma',
      panditMessage: predictions.panditMessage,
    };
    
    console.log('Kundali generation complete for:', birthDetails.name);
    
    return new Response(
      JSON.stringify(kundaliData),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
    
  } catch (error) {
    console.error('Error generating kundali:', error);
    
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : 'Failed to generate kundali' 
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
