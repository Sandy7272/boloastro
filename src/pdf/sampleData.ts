import { KundaliData } from './types';

export const getSampleKundaliData = (): KundaliData => ({
  userData: {
    name: 'राम कुमार शर्मा',
    dob: '15 अगस्त 1990',
    time: '10:30 प्रातः',
    place: 'जयपुर, राजस्थान',
    nakshatra: 'रोहिणी',
    rashi: 'वृषभ',
    lagnaRashi: 'सिंह',
  },

  planets: [
    { label: 'Su', name: 'Sun (सूर्य)', house: 1, sign: 'Leo', degree: '22°15\'', isRetrograde: false },
    { label: 'Mo', name: 'Moon (चन्द्र)', house: 10, sign: 'Taurus', degree: '08°42\'', isRetrograde: false },
    { label: 'Ma', name: 'Mars (मंगल)', house: 5, sign: 'Sagittarius', degree: '14°33\'', isRetrograde: true },
    { label: 'Me', name: 'Mercury (बुध)', house: 1, sign: 'Leo', degree: '28°07\'', isRetrograde: false },
    { label: 'Ju', name: 'Jupiter (गुरु)', house: 11, sign: 'Gemini', degree: '03°21\'', isRetrograde: false },
    { label: 'Ve', name: 'Venus (शुक्र)', house: 12, sign: 'Cancer', degree: '17°55\'', isRetrograde: false },
    { label: 'Sa', name: 'Saturn (शनि)', house: 6, sign: 'Capricorn', degree: '25°18\'', isRetrograde: true },
    { label: 'Ra', name: 'Rahu (राहु)', house: 7, sign: 'Aquarius', degree: '11°44\'', isRetrograde: true },
    { label: 'Ke', name: 'Ketu (केतु)', house: 1, sign: 'Leo', degree: '11°44\'', isRetrograde: true },
  ],

  personality: {
    title: 'Personality Analysis',
    titleHindi: 'व्यक्तित्व विश्लेषण',
    content: 'With Sun in the ascendant in Leo, you possess natural leadership qualities and a magnetic personality. Your Moon in Taurus gives you emotional stability and a deep appreciation for beauty and comfort. The combination creates a person who is both ambitious and grounded.',
    highlights: [
      'Natural leader with strong willpower',
      'Creative and artistic inclinations',
      'Loyal and dependable in relationships',
      'Strong sense of self-worth and dignity',
    ],
    warnings: [
      'May sometimes appear stubborn or inflexible',
      'Need to balance pride with humility',
    ],
  },

  career: {
    title: 'Career Prediction',
    titleHindi: 'करियर भविष्यवाणी',
    content: 'Your 10th house lord is well-placed, indicating success in career. Government jobs are favorable due to strong Sun placement. Business partnerships may face some challenges due to Saturn aspect on 7th house.',
    highlights: [
      'Best career fields: Administration, Politics, Arts, Finance',
      'Job vs Business: Both suitable, slight edge for employment',
      'Government job yoga: Strong (80% favorable)',
      'Promotion expected: 2025-2026 period',
      'Abroad opportunities: Yes, after age 35',
    ],
  },

  wealth: {
    title: 'Money & Wealth',
    titleHindi: 'धन और संपत्ति',
    content: 'Jupiter aspect on 2nd house creates Dhan Yoga. Property acquisition is favorable in your chart. Sudden gains possible through speculation during Jupiter Mahadasha.',
    highlights: [
      'Dhan Yoga: Present (Jupiter-Moon aspect)',
      'Property Yoga: Favorable for land purchase',
      'Best investment period: 2025-2027',
      'Lottery/Speculation: Mildly favorable',
    ],
    warnings: [
      'Avoid major investments during Saturn transit',
      'Loss possible if lending money during Rahu periods',
    ],
  },

  marriage: {
    title: 'Marriage & Love',
    titleHindi: 'विवाह और प्रेम',
    content: 'Venus in 12th house indicates a spiritual and devoted partner. Marriage is likely to be harmonious with some initial adjustments needed. Love marriage has moderate chances.',
    highlights: [
      'Marriage type: Arranged or Semi-arranged',
      'Best marriage age: 27-30 years',
      'Partner nature: Caring, artistic, possibly foreign connection',
      'Marital happiness: Above average (75%)',
    ],
    warnings: [
      'Mild Manglik Dosha - remedies recommended',
      'First year may have adjustment issues',
    ],
  },

  health: {
    title: 'Health Prediction',
    titleHindi: 'स्वास्थ्य भविष्यवाणी',
    content: 'Overall constitution is strong due to Sun in ascendant. However, attention needed for digestive system due to Saturn placement. Regular exercise recommended.',
    highlights: [
      'Strong areas: Heart, Spine, Immunity',
      'Weak areas: Digestion, Knees, Skin',
      'Surgery Yoga: Not present (favorable)',
      'Accident Yoga: Mild - caution in travel',
    ],
    warnings: [
      'Monitor blood pressure after age 45',
      'Avoid spicy food during Saturn periods',
    ],
  },

  children: {
    title: 'Children Prediction',
    titleHindi: 'संतान भविष्यवाणी',
    content: 'Jupiter in 11th house aspects 5th house, indicating good children yoga. First child likely to be a son. Children will bring happiness and pride to the family.',
    highlights: [
      'Children Yoga: Strong and favorable',
      'Number of children: 2-3 likely',
      'First child: Son (higher probability)',
      'Children success: Education and career',
    ],
    warnings: [
      'Slight delay possible in conception',
      'Perform Santana Gopal puja if delay exceeds 2 years',
    ],
  },

  foreignTravel: {
    title: 'Foreign Travel & Settlement',
    titleHindi: 'विदेश यात्रा और बसावट',
    content: 'Rahu in 7th house creates foreign yoga. Multiple foreign trips indicated. Permanent settlement abroad is possible but not definite. Career-related travel is highly favorable.',
    highlights: [
      'Foreign travel yoga: Present',
      'Settlement abroad: 40% probability',
      'Best countries: USA, UAE, Singapore',
      'Visa timing: Favorable in 2025-2026',
    ],
  },

  doshas: [
    {
      name: 'Manglik Dosha',
      nameHindi: 'मांगलिक दोष',
      present: true,
      severity: 'mild',
      description: 'Mars is placed in 5th house from Lagna, creating a mild form of Manglik Dosha.',
      impact: 'May cause some delays or minor conflicts in marriage. Remedies can neutralize the effects.',
      remedies: [
        'Recite Hanuman Chalisa on Tuesdays',
        'Wear coral (Moonga) after consultation',
        'Perform Mangal Shanti Puja',
        'Fast on Tuesdays for 21 weeks',
      ],
    },
    {
      name: 'Kaal Sarp Dosha',
      nameHindi: 'काल सर्प दोष',
      present: false,
      severity: 'none',
      description: 'Kaal Sarp Dosha is NOT present in your horoscope.',
      impact: 'No negative effects from this dosha.',
      remedies: [],
    },
    {
      name: 'Pitra Dosha',
      nameHindi: 'पितृ दोष',
      present: true,
      severity: 'moderate',
      description: 'Sun conjunction with Ketu in Lagna indicates Pitra Dosha.',
      impact: 'May face obstacles in career growth. Father\'s health needs attention. Ancestral blessings are important.',
      remedies: [
        'Perform Shraddha rituals during Pitru Paksha',
        'Donate food to Brahmins on Amavasya',
        'Recite Pitra Stotra daily',
        'Plant a Peepal tree in temple premises',
      ],
    },
    {
      name: 'Grahan Dosha',
      nameHindi: 'ग्रहण दोष',
      present: false,
      severity: 'none',
      description: 'No Grahan Dosha found as Sun/Moon are not with Rahu/Ketu closely.',
      impact: 'No negative effects from this dosha.',
      remedies: [],
    },
  ],

  remedies: {
    mantras: [
      'ॐ सूर्याय नमः - 108 times daily at sunrise',
      'ॐ शं शनैश्चराय नमः - 108 times on Saturdays',
      'हनुमान चालीसा - Every Tuesday',
      'महामृत्युंजय मंत्र - For health protection',
    ],
    pujas: [
      'Navagraha Shanti Puja - Once a year',
      'Mangal Shanti Puja - Before marriage',
      'Satyanarayan Puja - On Purnima monthly',
      'Rudrabhishek - During Shravan month',
    ],
    vrats: [
      'Tuesday fast for 21 weeks',
      'Saturday fast for Shani Shanti',
      'Ekadashi fasting for overall prosperity',
    ],
    donations: [
      'Donate red lentils on Tuesday',
      'Donate black sesame on Saturday',
      'Donate wheat to poor on Sunday',
      'Feed cows with green grass on Wednesday',
    ],
    templeVisits: [
      'Hanuman temple on Tuesdays',
      'Shani temple on Saturdays',
      'Surya temple during Chhath Puja',
      'Kaal Bhairav temple during Navratri',
    ],
  },

  gemstone: {
    name: 'Ruby (Manik)',
    nameHindi: 'माणिक',
    reason: 'Sun is your Lagna lord and is well-placed. Ruby will strengthen your leadership qualities, health, and career prospects.',
    wearingMethod: 'Set the ruby in gold ring. Before wearing, dip in Gangajal and raw milk mixture. Recite Surya mantra 108 times and wear on an auspicious Sunday morning during Shukla Paksha.',
    day: 'Sunday',
    finger: 'Ring finger (Anamika) of right hand',
    weight: '5-7 Carats (Ratti: 5.5-7.7)',
    metal: 'Gold (Sona)',
    mantra: 'ॐ ह्रां ह्रीं ह्रौं सः सूर्याय नमः',
  },

  luckyFactors: {
    color: 'Orange, Gold, Red',
    colorHindi: 'नारंगी, सुनहरा, लाल',
    number: 1,
    day: 'Sunday',
    dayHindi: 'रविवार',
    direction: 'East',
    directionHindi: 'पूर्व',
    deity: 'Lord Surya (Sun God)',
  },

  yearlyPrediction: [
    { month: 'January', career: 'good', money: 'average', love: 'good', health: 'excellent' },
    { month: 'February', career: 'excellent', money: 'good', love: 'average', health: 'good' },
    { month: 'March', career: 'good', money: 'excellent', love: 'good', health: 'good' },
    { month: 'April', career: 'average', money: 'good', love: 'excellent', health: 'average' },
    { month: 'May', career: 'challenging', money: 'average', love: 'good', health: 'good' },
    { month: 'June', career: 'good', money: 'good', love: 'average', health: 'excellent' },
    { month: 'July', career: 'excellent', money: 'excellent', love: 'good', health: 'good' },
    { month: 'August', career: 'good', money: 'good', love: 'excellent', health: 'good' },
    { month: 'September', career: 'average', money: 'challenging', love: 'good', health: 'average' },
    { month: 'October', career: 'good', money: 'good', love: 'good', health: 'good' },
    { month: 'November', career: 'excellent', money: 'good', love: 'average', health: 'excellent' },
    { month: 'December', career: 'good', money: 'excellent', love: 'excellent', health: 'good' },
  ],

  muhurats: [
    {
      purpose: 'Marriage',
      purposeHindi: 'विवाह',
      dates: ['Feb 12, 2025', 'Feb 26, 2025', 'Apr 18, 2025', 'Nov 22, 2025'],
      notes: 'Avoid during Pitru Paksha and eclipse periods',
    },
    {
      purpose: 'Job Joining',
      purposeHindi: 'नौकरी प्रारंभ',
      dates: ['Jan 15, 2025', 'Mar 8, 2025', 'May 20, 2025', 'Aug 12, 2025'],
      notes: 'Best to join on Monday or Thursday',
    },
    {
      purpose: 'Business Start',
      purposeHindi: 'व्यापार शुरू',
      dates: ['Feb 5, 2025', 'Apr 10, 2025', 'Sep 25, 2025', 'Nov 5, 2025'],
      notes: 'Perform Ganesh Puja before starting',
    },
    {
      purpose: 'House Shifting',
      purposeHindi: 'गृह प्रवेश',
      dates: ['Mar 15, 2025', 'Jun 22, 2025', 'Oct 18, 2025', 'Dec 8, 2025'],
      notes: 'Enter new house during Brahma Muhurta',
    },
  ],

  customQuestions: [
    {
      question: 'Will I get a government job?',
      answer: 'Yes, your chart shows strong government job yoga due to Sun placement in Lagna and Moon in 10th house. The period between 2025-2027 is especially favorable for competitive exams. Focus on preparation during Jupiter transit through your 10th house.',
    },
    {
      question: 'When will I get married?',
      answer: 'Marriage is indicated between ages 27-30. The year 2025 has multiple auspicious muhurats. Look for a partner through family connections rather than love marriage for better compatibility as per your chart.',
    },
    {
      question: 'Should I invest in real estate?',
      answer: 'Yes, property investment is favorable in your chart. The best period for real estate purchase is during Jupiter Mahadasha. Avoid buying during Saturn retrograde periods. Land investments are more beneficial than apartments.',
    },
  ],

  panditName: 'Pt. Shrinivas Sharma',
  panditMessage: 'Dear Ram Kumar ji, your horoscope reveals a blessed life with the grace of Lord Surya. With proper remedies and your positive karma, all obstacles can be overcome. May you achieve success in all endeavors. Remember that the planets incline, they do not compel. Your actions and devotion are the true determiners of your destiny.\n\n🙏 शुभ आशीर्वाद 🙏\nसर्वे भवन्तु सुखिनः, सर्वे सन्तु निरामयाः।',
});

export default getSampleKundaliData;
