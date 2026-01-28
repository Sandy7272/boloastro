import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.38.4";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

// WhatsApp conversation states
type SessionState = 
  | 'start'
  | 'awaiting_name'
  | 'awaiting_dob'
  | 'awaiting_time'
  | 'awaiting_place'
  | 'awaiting_language'
  | 'generating'
  | 'complete'
  | 'awaiting_payment';

interface WhatsAppSession {
  id: string;
  phone_number: string;
  session_state: SessionState;
  collected_data: {
    name?: string;
    dob?: string;
    time?: string;
    place?: string;
    language?: string;
  };
  language: string;
}

// Messages in different languages
const messages = {
  en: {
    welcome: `🙏 *Welcome to BoloAstro!*\n\nI'm your AI Vedic Astrologer, trained on 5000+ ancient scriptures.\n\nI can create your personalized Kundali with:\n✨ Accurate birth chart\n💫 Life predictions\n💍 Marriage analysis\n💼 Career guidance\n🔮 Remedies & Gemstones\n\n*This is a paid service (₹199-₹999)*\n_No refunds after report delivery_\n\nReply *START* to begin!`,
    askName: `What is your *full name*?\n\n_(जैसे: राज कुमार शर्मा)_`,
    askDob: `When were you born?\n\nPlease enter your *date of birth* in this format:\n*DD-MM-YYYY*\n\n_(Example: 15-08-1990)_`,
    askTime: `What was your *exact birth time*?\n\nPlease enter in *HH:MM* format (24-hour):\n\n_(Example: 14:30 for 2:30 PM)_\n\nIf you don't know, reply *UNKNOWN*`,
    askPlace: `Where were you born?\n\nPlease enter your *birth city and state*:\n\n_(Example: Mumbai, Maharashtra)_`,
    askLanguage: `Which language would you prefer for your report?\n\n1️⃣ *English*\n2️⃣ *Hindi* (हिंदी)\n3️⃣ *Marathi* (मराठी)\n\nReply with *1*, *2*, or *3*`,
    confirmDetails: (data: any) => `📋 *Please confirm your details:*\n\n👤 Name: ${data.name}\n📅 DOB: ${data.dob}\n⏰ Time: ${data.time}\n📍 Place: ${data.place}\n🌐 Language: ${data.language === 'hi' ? 'Hindi' : data.language === 'mr' ? 'Marathi' : 'English'}\n\n⚠️ *Important:*\n• This is a *PAID SERVICE*\n• *No refunds* after delivery\n\nReply *CONFIRM* to proceed\nReply *RESTART* to start over`,
    generating: `🔮 *Generating your Kundali...*\n\n🪐 Calculating planetary positions...\n✨ Analyzing birth chart...\n📝 Preparing predictions...\n\nThis may take 1-2 minutes. Please wait...`,
    complete: (reportUrl?: string) => `✅ *Your Kundali is Ready!*\n\n🎉 Your personalized Vedic astrology report has been generated.\n\n${reportUrl ? `📥 *Download your PDF report:*\n${reportUrl}` : '📲 *Visit our website to download:*\nhttps://boloastro.com'}\n\n🙏 Thank you for using BoloAstro!\n\nType *NEW* to generate another Kundali.`,
    error: `❌ Oops! Something went wrong.\n\nPlease try again by typing *START*\n\nOr contact us: +91 98765 43210`,
    invalidInput: `I didn't understand that. Please follow the format mentioned above.`,
    unknownTime: `No worries! I'll use the average birth time (12:00 noon) for your calculations.\n\n_Note: For most accurate predictions, knowing the exact birth time is recommended._`,
  },
  hi: {
    welcome: `🙏 *BoloAstro में आपका स्वागत है!*\n\nमैं आपका AI वैदिक ज्योतिषी हूं, 5000+ प्राचीन ग्रंथों पर प्रशिक्षित।\n\nमैं आपकी व्यक्तिगत कुंडली बना सकता हूं:\n✨ सटीक जन्म कुंडली\n💫 जीवन भविष्यवाणी\n💍 विवाह विश्लेषण\n💼 करियर मार्गदर्शन\n🔮 उपाय और रत्न\n\n*यह एक सशुल्क सेवा है (₹199-₹999)*\n_रिपोर्ट डिलीवरी के बाद कोई रिफंड नहीं_\n\nशुरू करने के लिए *START* टाइप करें!`,
    askName: `आपका *पूरा नाम* क्या है?\n\n_(जैसे: राज कुमार शर्मा)_`,
    askDob: `आपका जन्म कब हुआ था?\n\n*जन्म तिथि* इस फॉर्मेट में दें:\n*DD-MM-YYYY*\n\n_(उदाहरण: 15-08-1990)_`,
    askTime: `आपका *जन्म का सही समय* क्या था?\n\n*HH:MM* फॉर्मेट में दें (24-घंटे):\n\n_(उदाहरण: 14:30)_\n\nअगर नहीं पता, तो *UNKNOWN* टाइप करें`,
    askPlace: `आपका जन्म कहाँ हुआ था?\n\n*जन्म स्थान* (शहर और राज्य) बताएं:\n\n_(उदाहरण: मुंबई, महाराष्ट्र)_`,
    askLanguage: `आप रिपोर्ट किस भाषा में चाहते हैं?\n\n1️⃣ *English*\n2️⃣ *Hindi* (हिंदी)\n3️⃣ *Marathi* (मराठी)\n\n*1*, *2*, या *3* टाइप करें`,
    confirmDetails: (data: any) => `📋 *कृपया अपनी जानकारी की पुष्टि करें:*\n\n👤 नाम: ${data.name}\n📅 जन्मतिथि: ${data.dob}\n⏰ समय: ${data.time}\n📍 स्थान: ${data.place}\n🌐 भाषा: ${data.language === 'hi' ? 'हिंदी' : data.language === 'mr' ? 'मराठी' : 'English'}\n\n⚠️ *महत्वपूर्ण:*\n• यह *सशुल्क सेवा* है\n• डिलीवरी के बाद *रिफंड नहीं*\n\nआगे बढ़ने के लिए *CONFIRM* टाइप करें\nदोबारा शुरू करने के लिए *RESTART* टाइप करें`,
    generating: `🔮 *आपकी कुंडली बन रही है...*\n\n🪐 ग्रहों की स्थिति निकाल रहे हैं...\n✨ जन्म कुंडली का विश्लेषण...\n📝 भविष्यवाणी तैयार कर रहे हैं...\n\n1-2 मिनट लग सकते हैं। कृपया प्रतीक्षा करें...`,
    complete: (reportUrl?: string) => `✅ *आपकी कुंडली तैयार है!*\n\n🎉 आपकी व्यक्तिगत वैदिक ज्योतिष रिपोर्ट बन गई है।\n\n${reportUrl ? `📥 *PDF रिपोर्ट डाउनलोड करें:*\n${reportUrl}` : '📲 *डाउनलोड के लिए वेबसाइट पर जाएं:*\nhttps://boloastro.com'}\n\n🙏 BoloAstro का उपयोग करने के लिए धन्यवाद!\n\nनई कुंडली के लिए *NEW* टाइप करें।`,
    error: `❌ कुछ गलत हो गया!\n\n*START* टाइप करके फिर से कोशिश करें\n\nया संपर्क करें: +91 98765 43210`,
    invalidInput: `मुझे समझ नहीं आया। कृपया ऊपर बताए फॉर्मेट का पालन करें।`,
    unknownTime: `कोई बात नहीं! मैं औसत जन्म समय (12:00 दोपहर) का उपयोग करूंगा।\n\n_नोट: सबसे सटीक भविष्यवाणी के लिए, सही जन्म समय जानना महत्वपूर्ण है।_`,
  },
  mr: {
    welcome: `🙏 *BoloAstro मध्ये आपले स्वागत!*\n\nमी आपला AI वैदिक ज्योतिषी आहे, 5000+ प्राचीन ग्रंथांवर प्रशिक्षित।\n\nमी तुमची वैयक्तिक कुंडली तयार करू शकतो:\n✨ अचूक जन्म कुंडली\n💫 जीवन भविष्यवाणी\n💍 विवाह विश्लेषण\n💼 करिअर मार्गदर्शन\n🔮 उपाय आणि रत्ने\n\n*ही सशुल्क सेवा आहे (₹199-₹999)*\n_रिपोर्ट डिलिव्हरीनंतर रिफंड नाही_\n\nसुरू करण्यासाठी *START* टाईप करा!`,
    askName: `तुमचे *पूर्ण नाव* काय आहे?\n\n_(उदाहरण: राज कुमार शर्मा)_`,
    askDob: `तुमचा जन्म कधी झाला?\n\n*जन्मतारीख* या स्वरूपात द्या:\n*DD-MM-YYYY*\n\n_(उदाहरण: 15-08-1990)_`,
    askTime: `तुमचा *जन्माची वेळ* काय होती?\n\n*HH:MM* स्वरूपात द्या (24-तास):\n\n_(उदाहरण: 14:30)_\n\nमाहीत नसल्यास *UNKNOWN* टाईप करा`,
    askPlace: `तुमचा जन्म कुठे झाला?\n\n*जन्मस्थान* (शहर आणि राज्य) सांगा:\n\n_(उदाहरण: मुंबई, महाराष्ट्र)_`,
    askLanguage: `तुम्हाला रिपोर्ट कोणत्या भाषेत हवा?\n\n1️⃣ *English*\n2️⃣ *Hindi* (हिंदी)\n3️⃣ *Marathi* (मराठी)\n\n*1*, *2*, किंवा *3* टाईप करा`,
    confirmDetails: (data: any) => `📋 *कृपया तुमची माहिती तपासा:*\n\n👤 नाव: ${data.name}\n📅 जन्मतारीख: ${data.dob}\n⏰ वेळ: ${data.time}\n📍 स्थान: ${data.place}\n🌐 भाषा: ${data.language === 'hi' ? 'हिंदी' : data.language === 'mr' ? 'मराठी' : 'English'}\n\n⚠️ *महत्त्वाचे:*\n• ही *सशुल्क सेवा* आहे\n• डिलिव्हरीनंतर *रिफंड नाही*\n\nपुढे जाण्यासाठी *CONFIRM* टाईप करा\nपुन्हा सुरू करण्यासाठी *RESTART* टाईप करा`,
    generating: `🔮 *तुमची कुंडली तयार होत आहे...*\n\n🪐 ग्रहांची स्थिती काढत आहे...\n✨ जन्म कुंडलीचे विश्लेषण...\n📝 भविष्यवाणी तयार करत आहे...\n\n1-2 मिनिटे लागू शकतात. कृपया प्रतीक्षा करा...`,
    complete: (reportUrl?: string) => `✅ *तुमची कुंडली तयार आहे!*\n\n🎉 तुमचा वैयक्तिक वैदिक ज्योतिष रिपोर्ट तयार झाला.\n\n${reportUrl ? `📥 *PDF रिपोर्ट डाउनलोड करा:*\n${reportUrl}` : '📲 *डाउनलोडसाठी वेबसाइटवर जा:*\nhttps://boloastro.com'}\n\n🙏 BoloAstro वापरल्याबद्दल धन्यवाद!\n\nनवीन कुंडलीसाठी *NEW* टाईप करा.`,
    error: `❌ काहीतरी चूक झाली!\n\n*START* टाईप करून पुन्हा प्रयत्न करा\n\nकिंवा संपर्क करा: +91 98765 43210`,
    invalidInput: `मला समजले नाही. कृपया वर सांगितलेल्या स्वरूपाचे पालन करा.`,
    unknownTime: `कोणतीही अडचण नाही! मी सरासरी जन्म वेळ (12:00 दुपार) वापरेन.\n\n_टीप: सर्वात अचूक भविष्यवाणीसाठी, अचूक जन्म वेळ जाणून घेणे महत्त्वाचे आहे._`,
  },
};

// Get or create session
async function getOrCreateSession(
  supabase: any,
  phoneNumber: string
): Promise<WhatsAppSession> {
  const { data: existingSession } = await supabase
    .from('whatsapp_sessions')
    .select('*')
    .eq('phone_number', phoneNumber)
    .single();
  
  if (existingSession) {
    // Update last_message_at
    await supabase
      .from('whatsapp_sessions')
      .update({ last_message_at: new Date().toISOString() })
      .eq('id', existingSession.id);
    
    return existingSession;
  }
  
  // Create new session
  const { data: newSession, error } = await supabase
    .from('whatsapp_sessions')
    .insert({
      phone_number: phoneNumber,
      session_state: 'start',
      collected_data: {},
      language: 'en',
    })
    .select()
    .single();
  
  if (error) {
    throw error;
  }
  
  return newSession;
}

// Update session
async function updateSession(
  supabase: any,
  sessionId: string,
  updates: Partial<WhatsAppSession>
) {
  await supabase
    .from('whatsapp_sessions')
    .update(updates)
    .eq('id', sessionId);
}

// Parse date from various formats
function parseDate(input: string): string | null {
  // Try DD-MM-YYYY or DD/MM/YYYY
  const ddmmyyyy = /^(\d{1,2})[-\/](\d{1,2})[-\/](\d{4})$/;
  const match = input.trim().match(ddmmyyyy);
  
  if (match) {
    const [, day, month, year] = match;
    const d = parseInt(day, 10);
    const m = parseInt(month, 10);
    const y = parseInt(year, 10);
    
    if (d >= 1 && d <= 31 && m >= 1 && m <= 12 && y >= 1900 && y <= 2024) {
      return `${y}-${m.toString().padStart(2, '0')}-${d.toString().padStart(2, '0')}`;
    }
  }
  
  return null;
}

// Parse time from various formats
function parseTime(input: string): string | null {
  if (input.toUpperCase() === 'UNKNOWN') {
    return '12:00';
  }
  
  // Try HH:MM or H:MM
  const hhmm = /^(\d{1,2}):(\d{2})$/;
  const match = input.trim().match(hhmm);
  
  if (match) {
    const [, hours, minutes] = match;
    const h = parseInt(hours, 10);
    const m = parseInt(minutes, 10);
    
    if (h >= 0 && h <= 23 && m >= 0 && m <= 59) {
      return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
    }
  }
  
  return null;
}

// Process incoming message and return response
async function processMessage(
  supabase: any,
  session: WhatsAppSession,
  messageText: string
): Promise<{ response: string; newState?: SessionState; newData?: any }> {
  const lang = session.language as keyof typeof messages || 'en';
  const msg = messages[lang];
  const text = messageText.trim().toUpperCase();
  
  // Handle global commands
  if (text === 'START' || text === 'NEW' || text === 'RESTART') {
    return {
      response: msg.welcome,
      newState: 'awaiting_name',
      newData: {},
    };
  }
  
  // Handle language selection at any point
  if (text === 'ENGLISH' || text === 'EN') {
    await updateSession(supabase, session.id, { language: 'en' });
    return { response: messages.en.welcome, newState: 'awaiting_name', newData: {} };
  }
  if (text === 'HINDI' || text === 'HI') {
    await updateSession(supabase, session.id, { language: 'hi' });
    return { response: messages.hi.welcome, newState: 'awaiting_name', newData: {} };
  }
  if (text === 'MARATHI' || text === 'MR') {
    await updateSession(supabase, session.id, { language: 'mr' });
    return { response: messages.mr.welcome, newState: 'awaiting_name', newData: {} };
  }
  
  // State machine
  switch (session.session_state) {
    case 'start':
      return { response: msg.welcome, newState: 'awaiting_name' };
    
    case 'awaiting_name':
      if (messageText.trim().length < 2) {
        return { response: msg.invalidInput };
      }
      return {
        response: msg.askDob,
        newState: 'awaiting_dob',
        newData: { ...session.collected_data, name: messageText.trim() },
      };
    
    case 'awaiting_dob':
      const parsedDate = parseDate(messageText);
      if (!parsedDate) {
        return { response: msg.invalidInput + '\n\n' + msg.askDob };
      }
      return {
        response: msg.askTime,
        newState: 'awaiting_time',
        newData: { ...session.collected_data, dob: parsedDate },
      };
    
    case 'awaiting_time':
      const parsedTime = parseTime(messageText);
      if (!parsedTime) {
        return { response: msg.invalidInput + '\n\n' + msg.askTime };
      }
      const timeResponse = messageText.toUpperCase() === 'UNKNOWN' 
        ? msg.unknownTime + '\n\n' + msg.askPlace 
        : msg.askPlace;
      return {
        response: timeResponse,
        newState: 'awaiting_place',
        newData: { ...session.collected_data, time: parsedTime },
      };
    
    case 'awaiting_place':
      if (messageText.trim().length < 2) {
        return { response: msg.invalidInput };
      }
      return {
        response: msg.askLanguage,
        newState: 'awaiting_language',
        newData: { ...session.collected_data, place: messageText.trim() },
      };
    
    case 'awaiting_language':
      let selectedLang = 'en';
      if (text === '2' || text === 'HINDI' || text === 'HI') {
        selectedLang = 'hi';
      } else if (text === '3' || text === 'MARATHI' || text === 'MR') {
        selectedLang = 'mr';
      } else if (text !== '1' && text !== 'ENGLISH' && text !== 'EN') {
        return { response: msg.invalidInput + '\n\n' + msg.askLanguage };
      }
      
      const updatedData = { ...session.collected_data, language: selectedLang };
      await updateSession(supabase, session.id, { language: selectedLang });
      
      const confirmLang = selectedLang as keyof typeof messages;
      return {
        response: messages[confirmLang].confirmDetails(updatedData),
        newState: 'generating',
        newData: updatedData,
      };
    
    case 'generating':
      if (text === 'CONFIRM') {
        // Trigger kundali generation
        return {
          response: msg.generating,
          newState: 'complete',
        };
      } else if (text === 'RESTART') {
        return {
          response: msg.welcome,
          newState: 'awaiting_name',
          newData: {},
        };
      }
      return { response: msg.confirmDetails(session.collected_data) };
    
    case 'complete':
      return { response: msg.complete() };
    
    default:
      return { response: msg.welcome, newState: 'awaiting_name' };
  }
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }
  
  try {
    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    
    // Parse incoming webhook (adjust based on your WhatsApp provider - Twilio, Meta, etc.)
    const body = await req.json();
    
    // Extract message details (this format is for a generic webhook)
    const phoneNumber = body.from || body.phone || body.sender;
    const messageText = body.message || body.text || body.body || '';
    
    if (!phoneNumber) {
      return new Response(
        JSON.stringify({ error: 'Missing phone number' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
    
    console.log(`WhatsApp message from ${phoneNumber}: ${messageText}`);
    
    // Get or create session
    const session = await getOrCreateSession(supabase, phoneNumber);
    
    // Process message
    const result = await processMessage(supabase, session, messageText);
    
    // Update session if needed
    if (result.newState || result.newData) {
      await updateSession(supabase, session.id, {
        session_state: result.newState || session.session_state,
        collected_data: result.newData || session.collected_data,
      });
    }
    
    // If user confirmed and we need to generate kundali
    if (result.newState === 'complete' && session.session_state === 'generating') {
      // Trigger async kundali generation
      const data = session.collected_data;
      
      // Call generate-kundali function
      try {
        const kundaliResponse = await fetch(`${supabaseUrl}/functions/v1/generate-kundali`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${supabaseServiceKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: data.name,
            dob: data.dob,
            time: data.time,
            place: data.place,
            language: data.language,
            saveToDB: true,
          }),
        });
        
        if (kundaliResponse.ok) {
          console.log('Kundali generated for WhatsApp user:', phoneNumber);
          // Update response with success message
          const lang = session.language as keyof typeof messages || 'en';
          result.response = messages[lang].complete();
        }
      } catch (genError) {
        console.error('Kundali generation error:', genError);
      }
    }
    
    // Log the interaction
    await supabase.from('api_logs').insert({
      endpoint: '/whatsapp-webhook',
      method: 'POST',
      request_body: { phone: phoneNumber, message: messageText.substring(0, 100) },
      response_status: 200,
    });
    
    // Return response (your WhatsApp provider will use this to send the reply)
    return new Response(
      JSON.stringify({
        success: true,
        to: phoneNumber,
        message: result.response,
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
    
  } catch (error) {
    console.error('WhatsApp webhook error:', error);
    
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : 'Webhook processing failed',
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
