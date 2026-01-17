export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  tags: string[];
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "how-kundali-works",
    title: "How Kundali Works: A Complete Guide to Vedic Birth Charts",
    excerpt: "Learn about the 12 houses, planets, and their significance in your Janam Kundali.",
    category: "Kundali",
    date: "Jan 10, 2024",
    readTime: "8 min read",
    image: "🌟",
    author: {
      name: "Pandit Sharma",
      avatar: "👨‍🦳"
    },
    tags: ["Kundali", "Birth Chart", "Vedic Astrology", "Houses"],
    content: `
      <h2>Introduction to Vedic Birth Charts</h2>
      <p>A Kundali, also known as Janam Kundali or birth chart, is a celestial snapshot of the sky at the exact moment of your birth. This ancient Vedic system has been used for thousands of years to understand one's destiny, personality, and life path.</p>
      
      <h2>The 12 Houses (Bhavas)</h2>
      <p>The Kundali is divided into 12 houses, each representing different aspects of life:</p>
      <ul>
        <li><strong>1st House (Lagna):</strong> Self, personality, physical appearance, and overall health</li>
        <li><strong>2nd House:</strong> Wealth, family, speech, and early education</li>
        <li><strong>3rd House:</strong> Siblings, courage, short journeys, and communication</li>
        <li><strong>4th House:</strong> Mother, home, property, and emotional foundations</li>
        <li><strong>5th House:</strong> Children, creativity, romance, and education</li>
        <li><strong>6th House:</strong> Health, enemies, debts, and daily work</li>
        <li><strong>7th House:</strong> Marriage, partnerships, and business relationships</li>
        <li><strong>8th House:</strong> Transformation, longevity, and hidden matters</li>
        <li><strong>9th House:</strong> Fortune, spirituality, higher learning, and father</li>
        <li><strong>10th House:</strong> Career, reputation, and public life</li>
        <li><strong>11th House:</strong> Gains, income, friends, and aspirations</li>
        <li><strong>12th House:</strong> Losses, spirituality, foreign lands, and liberation</li>
      </ul>
      
      <h2>The Nine Planets (Navagrahas)</h2>
      <p>Vedic astrology recognizes nine celestial bodies that influence our lives:</p>
      <ul>
        <li><strong>Sun (Surya):</strong> Soul, authority, father, government</li>
        <li><strong>Moon (Chandra):</strong> Mind, emotions, mother, public</li>
        <li><strong>Mars (Mangal):</strong> Energy, courage, siblings, property</li>
        <li><strong>Mercury (Budha):</strong> Intelligence, communication, business</li>
        <li><strong>Jupiter (Guru):</strong> Wisdom, fortune, children, spirituality</li>
        <li><strong>Venus (Shukra):</strong> Love, beauty, luxury, spouse</li>
        <li><strong>Saturn (Shani):</strong> Karma, discipline, longevity, hardship</li>
        <li><strong>Rahu:</strong> Desires, illusions, foreign connections</li>
        <li><strong>Ketu:</strong> Spirituality, past karma, liberation</li>
      </ul>
      
      <h2>Reading Your Kundali</h2>
      <p>To read a Kundali effectively, one must understand the interplay between planets, houses, and zodiac signs. The placement of each planet in a specific house and sign creates unique combinations that shape your destiny.</p>
      
      <h2>Conclusion</h2>
      <p>Your Kundali is like a cosmic GPS that guides you through life's journey. Understanding it helps you make informed decisions about career, relationships, health, and spiritual growth. Consult with our expert astrologers at BoloAstro for personalized guidance.</p>
    `
  },
  {
    id: "best-nakshatra-marriage-2024",
    title: "Best Nakshatra for Marriage in 2024",
    excerpt: "Discover the most auspicious Nakshatras for marriage ceremonies this year.",
    category: "Marriage",
    date: "Jan 8, 2024",
    readTime: "6 min read",
    image: "💒",
    author: {
      name: "Acharya Verma",
      avatar: "🧘"
    },
    tags: ["Marriage", "Nakshatra", "Muhurat", "Wedding"],
    content: `
      <h2>Choosing the Perfect Wedding Nakshatra</h2>
      <p>In Vedic astrology, selecting an auspicious Nakshatra for marriage is crucial for ensuring a happy and prosperous married life. The stars under which you tie the knot can influence your relationship's harmony and success.</p>
      
      <h2>Most Auspicious Nakshatras for Marriage</h2>
      <p>The following Nakshatras are considered highly favorable for marriage ceremonies:</p>
      <ul>
        <li><strong>Rohini:</strong> Ruled by Moon, symbolizes fertility, growth, and prosperity</li>
        <li><strong>Mrigashira:</strong> Brings curiosity and adventure in married life</li>
        <li><strong>Magha:</strong> Excellent for traditional ceremonies, brings respect</li>
        <li><strong>Uttara Phalguni:</strong> The most auspicious, ensures lasting love</li>
        <li><strong>Hasta:</strong> Promotes skill and creativity in relationships</li>
        <li><strong>Swati:</strong> Brings independence and balance</li>
        <li><strong>Anuradha:</strong> Excellent for love marriages and devotion</li>
        <li><strong>Uttara Ashadha:</strong> Victory and achievement in married life</li>
        <li><strong>Uttara Bhadrapada:</strong> Spiritual growth and deep connection</li>
        <li><strong>Revati:</strong> Prosperity and nurturing relationships</li>
      </ul>
      
      <h2>Nakshatras to Avoid</h2>
      <p>Some Nakshatras are traditionally avoided for wedding ceremonies:</p>
      <ul>
        <li>Bharani, Ardra, Ashlesha</li>
        <li>Jyeshtha, Moola</li>
        <li>Purva Ashadha (for some traditions)</li>
      </ul>
      
      <h2>Best Marriage Dates in 2024</h2>
      <p>Based on Nakshatra alignments, the following periods are especially favorable:</p>
      <ul>
        <li><strong>February:</strong> 14th-18th (Uttara Phalguni)</li>
        <li><strong>April:</strong> 22nd-26th (Rohini period)</li>
        <li><strong>November:</strong> 15th-20th (Multiple auspicious days)</li>
        <li><strong>December:</strong> 1st-5th (Excellent muhurat)</li>
      </ul>
      
      <h2>Getting Your Personalized Muhurat</h2>
      <p>While these general guidelines are helpful, the perfect wedding date should be calculated based on both partners' birth charts. Contact BoloAstro for a personalized muhurat that considers all astrological factors.</p>
    `
  },
  {
    id: "saturn-transit-2024",
    title: "Saturn Transit 2024: Effects on All Zodiac Signs",
    excerpt: "Complete guide to Shani's movement and its impact on your career and relationships.",
    category: "Rashifal",
    date: "Jan 5, 2024",
    readTime: "10 min read",
    image: "🪐",
    author: {
      name: "Jyotish Guru",
      avatar: "⭐"
    },
    tags: ["Saturn", "Transit", "Shani", "Zodiac", "2024"],
    content: `
      <h2>Understanding Saturn Transit</h2>
      <p>Saturn, known as Shani in Vedic astrology, is the planet of karma, discipline, and life lessons. Its transit through different zodiac signs brings significant changes that can last for 2.5 years in each sign.</p>
      
      <h2>Saturn in Aquarius (2024)</h2>
      <p>Saturn continues its transit through Aquarius (Kumbha Rashi) in 2024, bringing transformation in technology, social structures, and humanitarian efforts globally.</p>
      
      <h2>Effects on Each Zodiac Sign</h2>
      
      <h3>♈ Aries (Mesh)</h3>
      <p>Saturn transits your 11th house. Expect gains through networking but delays in friendship matters. Career advancement is likely through persistent effort.</p>
      
      <h3>♉ Taurus (Vrishabh)</h3>
      <p>With Saturn in your 10th house, career responsibilities increase. This is a powerful period for professional growth but demands hard work and patience.</p>
      
      <h3>♊ Gemini (Mithun)</h3>
      <p>Saturn blesses your 9th house, encouraging spiritual growth and higher learning. Travel for education or pilgrimage is favored.</p>
      
      <h3>♋ Cancer (Karka)</h3>
      <p>The 8th house transit brings transformation. Focus on health, manage joint finances carefully, and embrace change.</p>
      
      <h3>♌ Leo (Simha)</h3>
      <p>Saturn in the 7th house tests relationships. Commitment and patience are key. Business partnerships require careful evaluation.</p>
      
      <h3>♍ Virgo (Kanya)</h3>
      <p>The 6th house placement helps overcome enemies and health issues. Work-life improves with disciplined effort.</p>
      
      <h3>♎ Libra (Tula)</h3>
      <p>Creative projects flourish with Saturn in your 5th house. Children-related matters require patience. Romance may feel serious.</p>
      
      <h3>♏ Scorpio (Vrishchik)</h3>
      <p>The 4th house transit affects home and mother. Property matters require attention. Emotional foundations are being tested.</p>
      
      <h3>♐ Sagittarius (Dhanu)</h3>
      <p>Communication and short travels are highlighted. Siblings relations need care. Writing and learning are favored.</p>
      
      <h3>♑ Capricorn (Makar)</h3>
      <p>Financial matters are in focus with Saturn in the 2nd house. Family responsibilities increase. Speech should be measured.</p>
      
      <h3>♒ Aquarius (Kumbha)</h3>
      <p>Saturn in your sign brings Sade Sati phase. Self-transformation is the theme. Health and identity need attention.</p>
      
      <h3>♓ Pisces (Meen)</h3>
      <p>The 12th house transit increases spiritual inclinations. Foreign connections are possible. Manage expenses carefully.</p>
      
      <h2>Remedies for Saturn Transit</h2>
      <ul>
        <li>Worship Lord Hanuman on Saturdays</li>
        <li>Donate black sesame seeds</li>
        <li>Chant Shani mantras</li>
        <li>Wear blue sapphire (after consultation)</li>
        <li>Help the elderly and disabled</li>
      </ul>
    `
  },
  {
    id: "mangal-dosha-remedies",
    title: "Powerful Remedies for Mangal Dosha",
    excerpt: "Effective solutions to reduce the negative effects of Mars in your horoscope.",
    category: "Remedies",
    date: "Jan 3, 2024",
    readTime: "7 min read",
    image: "🔱",
    author: {
      name: "Pandit Sharma",
      avatar: "👨‍🦳"
    },
    tags: ["Mangal Dosha", "Remedies", "Mars", "Marriage"],
    content: `
      <h2>What is Mangal Dosha?</h2>
      <p>Mangal Dosha, also known as Kuja Dosha or Manglik Dosha, occurs when Mars (Mangal) is placed in the 1st, 2nd, 4th, 7th, 8th, or 12th house of a person's birth chart. It's believed to affect marriage and relationships.</p>
      
      <h2>Effects of Mangal Dosha</h2>
      <ul>
        <li>Delays in marriage</li>
        <li>Conflict with spouse</li>
        <li>Relationship instability</li>
        <li>Health issues for self or spouse</li>
      </ul>
      
      <h2>Types of Mangal Dosha</h2>
      <p><strong>High Mangal Dosha:</strong> Mars in 1st, 7th, or 8th house</p>
      <p><strong>Low Mangal Dosha:</strong> Mars in 2nd, 4th, or 12th house</p>
      
      <h2>Powerful Remedies</h2>
      
      <h3>1. Kumbh Vivah</h3>
      <p>The most powerful remedy where the Manglik person symbolically marries a Peepal tree, banana tree, or a silver/gold idol of Lord Vishnu before the actual marriage.</p>
      
      <h3>2. Mangal Shanti Puja</h3>
      <p>A special puja performed to pacify Mars. This should be done on Tuesdays with proper mantras and offerings.</p>
      
      <h3>3. Fasting on Tuesdays</h3>
      <p>Observing fast on Tuesdays and eating only after sunset helps reduce Mars' negative influence.</p>
      
      <h3>4. Chanting Mantras</h3>
      <p>Regular chanting of Mangal Beej Mantra:</p>
      <blockquote>"Om Kraam Kreem Kraum Sah Bhaumaya Namah"</blockquote>
      <p>Chant 108 times daily, especially on Tuesdays.</p>
      
      <h3>5. Wearing Red Coral</h3>
      <p>After proper consultation, wearing a Red Coral (Moonga) gemstone can help balance Mars energy. It should be worn on the ring finger on a Tuesday.</p>
      
      <h3>6. Donate on Tuesdays</h3>
      <ul>
        <li>Red lentils (Masoor dal)</li>
        <li>Red cloth</li>
        <li>Wheat bread to monkeys</li>
        <li>Sharp items like knives</li>
      </ul>
      
      <h3>7. Visit Mangalnath Temple</h3>
      <p>The Mangalnath Temple in Ujjain is considered the birthplace of Mars. Visiting and performing puja here is highly beneficial.</p>
      
      <h2>When Does Mangal Dosha Get Cancelled?</h2>
      <p>Mangal Dosha is naturally cancelled in certain conditions:</p>
      <ul>
        <li>If both partners are Manglik</li>
        <li>After the age of 28 (Mars matures)</li>
        <li>If Mars is in its own sign or exalted</li>
        <li>If Jupiter aspects Mars in the chart</li>
      </ul>
      
      <h2>Consult an Expert</h2>
      <p>Not all Mars placements create equal Dosha. The severity depends on many factors. Contact BoloAstro for accurate analysis of your chart and personalized remedies.</p>
    `
  },
  {
    id: "career-astrology-zodiac",
    title: "Career Astrology: Best Professions by Zodiac Sign",
    excerpt: "Find out which careers are most suitable based on your birth chart.",
    category: "Career",
    date: "Dec 28, 2023",
    readTime: "9 min read",
    image: "💼",
    author: {
      name: "Acharya Verma",
      avatar: "🧘"
    },
    tags: ["Career", "Profession", "Zodiac", "Job"],
    content: `
      <h2>Aligning Career with Your Stars</h2>
      <p>Vedic astrology provides profound insights into career choices by analyzing the 10th house (house of profession), its lord, and planetary placements. Here's a guide to ideal careers for each zodiac sign.</p>
      
      <h2>♈ Aries (Mesh Rashi)</h2>
      <p><strong>Ruling Planet:</strong> Mars</p>
      <p><strong>Best Careers:</strong> Military, police, sports, surgery, engineering, entrepreneurship, fitness training, firefighting</p>
      <p><strong>Key Traits:</strong> Leadership, courage, initiative</p>
      
      <h2>♉ Taurus (Vrishabh Rashi)</h2>
      <p><strong>Ruling Planet:</strong> Venus</p>
      <p><strong>Best Careers:</strong> Banking, finance, luxury goods, hospitality, agriculture, singing, fashion, real estate</p>
      <p><strong>Key Traits:</strong> Stability, persistence, aesthetic sense</p>
      
      <h2>♊ Gemini (Mithun Rashi)</h2>
      <p><strong>Ruling Planet:</strong> Mercury</p>
      <p><strong>Best Careers:</strong> Journalism, writing, teaching, sales, marketing, IT, telecommunications, translation</p>
      <p><strong>Key Traits:</strong> Communication, adaptability, intellect</p>
      
      <h2>♋ Cancer (Karka Rashi)</h2>
      <p><strong>Ruling Planet:</strong> Moon</p>
      <p><strong>Best Careers:</strong> Nursing, hospitality, catering, real estate, childcare, psychology, marine industries</p>
      <p><strong>Key Traits:</strong> Nurturing, intuition, emotional intelligence</p>
      
      <h2>♌ Leo (Simha Rashi)</h2>
      <p><strong>Ruling Planet:</strong> Sun</p>
      <p><strong>Best Careers:</strong> Politics, entertainment, management, government jobs, gold trading, theatre, CEO positions</p>
      <p><strong>Key Traits:</strong> Authority, creativity, confidence</p>
      
      <h2>♍ Virgo (Kanya Rashi)</h2>
      <p><strong>Ruling Planet:</strong> Mercury</p>
      <p><strong>Best Careers:</strong> Healthcare, accounting, editing, research, quality control, nutrition, veterinary</p>
      <p><strong>Key Traits:</strong> Analysis, precision, service orientation</p>
      
      <h2>♎ Libra (Tula Rashi)</h2>
      <p><strong>Ruling Planet:</strong> Venus</p>
      <p><strong>Best Careers:</strong> Law, diplomacy, fashion design, interior design, counseling, beauty industry, public relations</p>
      <p><strong>Key Traits:</strong> Balance, aesthetics, negotiation</p>
      
      <h2>♏ Scorpio (Vrishchik Rashi)</h2>
      <p><strong>Ruling Planet:</strong> Mars</p>
      <p><strong>Best Careers:</strong> Detective work, research, psychology, surgery, insurance, mining, occult sciences</p>
      <p><strong>Key Traits:</strong> Investigation, intensity, transformation</p>
      
      <h2>♐ Sagittarius (Dhanu Rashi)</h2>
      <p><strong>Ruling Planet:</strong> Jupiter</p>
      <p><strong>Best Careers:</strong> Teaching, law, philosophy, travel industry, sports, publishing, religious work</p>
      <p><strong>Key Traits:</strong> Wisdom, optimism, exploration</p>
      
      <h2>♑ Capricorn (Makar Rashi)</h2>
      <p><strong>Ruling Planet:</strong> Saturn</p>
      <p><strong>Best Careers:</strong> Administration, engineering, architecture, mining, politics, manufacturing</p>
      <p><strong>Key Traits:</strong> Discipline, ambition, structure</p>
      
      <h2>♒ Aquarius (Kumbha Rashi)</h2>
      <p><strong>Ruling Planet:</strong> Saturn</p>
      <p><strong>Best Careers:</strong> Technology, innovation, social work, aviation, astrology, electronics, NGOs</p>
      <p><strong>Key Traits:</strong> Innovation, humanitarianism, independence</p>
      
      <h2>♓ Pisces (Meen Rashi)</h2>
      <p><strong>Ruling Planet:</strong> Jupiter</p>
      <p><strong>Best Careers:</strong> Music, art, healing, spirituality, marine work, pharmaceuticals, cinema</p>
      <p><strong>Key Traits:</strong> Creativity, compassion, intuition</p>
      
      <h2>Beyond Sun Signs</h2>
      <p>While sun signs give general guidance, a complete career analysis requires examining:</p>
      <ul>
        <li>10th house and its lord</li>
        <li>Planets in the 10th house</li>
        <li>Dashas (planetary periods)</li>
        <li>D-10 chart (Dashamsha)</li>
      </ul>
      <p>Get your personalized career report from BoloAstro for detailed guidance.</p>
    `
  },
  {
    id: "understanding-nakshatra-guide",
    title: "Understanding Your Nakshatra: Complete Guide",
    excerpt: "Deep dive into the 27 Nakshatras and their characteristics.",
    category: "Nakshatra",
    date: "Dec 25, 2023",
    readTime: "12 min read",
    image: "⭐",
    author: {
      name: "Jyotish Guru",
      avatar: "⭐"
    },
    tags: ["Nakshatra", "Moon Sign", "Vedic Astrology"],
    content: `
      <h2>What are Nakshatras?</h2>
      <p>Nakshatras are the 27 lunar mansions in Vedic astrology. The Moon travels through each Nakshatra in approximately one day, making them crucial for understanding your emotional nature and life path.</p>
      
      <h2>The 27 Nakshatras</h2>
      
      <h3>1. Ashwini (अश्विनी)</h3>
      <p><strong>Symbol:</strong> Horse's head | <strong>Deity:</strong> Ashwini Kumaras</p>
      <p>Quick, healing abilities, pioneering spirit. Good for doctors and healers.</p>
      
      <h3>2. Bharani (भरणी)</h3>
      <p><strong>Symbol:</strong> Yoni | <strong>Deity:</strong> Yama</p>
      <p>Transformative, creative, deals with life-death cycles.</p>
      
      <h3>3. Krittika (कृत्तिका)</h3>
      <p><strong>Symbol:</strong> Razor/Flame | <strong>Deity:</strong> Agni</p>
      <p>Sharp intellect, purifying nature, leadership qualities.</p>
      
      <h3>4. Rohini (रोहिणी)</h3>
      <p><strong>Symbol:</strong> Chariot | <strong>Deity:</strong> Brahma</p>
      <p>Most creative and beautiful, artistic, materialistic.</p>
      
      <h3>5. Mrigashira (मृगशिरा)</h3>
      <p><strong>Symbol:</strong> Deer's head | <strong>Deity:</strong> Moon</p>
      <p>Searching nature, gentle, curious about life.</p>
      
      <h3>6. Ardra (आर्द्रा)</h3>
      <p><strong>Symbol:</strong> Teardrop | <strong>Deity:</strong> Rudra</p>
      <p>Emotional depth, transformation through crisis.</p>
      
      <h3>7. Punarvasu (पुनर्वसु)</h3>
      <p><strong>Symbol:</strong> Bow and quiver | <strong>Deity:</strong> Aditi</p>
      <p>Renewal, optimism, ability to bounce back.</p>
      
      <h3>8. Pushya (पुष्य)</h3>
      <p><strong>Symbol:</strong> Cow's udder | <strong>Deity:</strong> Brihaspati</p>
      <p>Most auspicious, nurturing, spiritual wisdom.</p>
      
      <h3>9. Ashlesha (आश्लेषा)</h3>
      <p><strong>Symbol:</strong> Serpent | <strong>Deity:</strong> Nagas</p>
      <p>Mystical, hypnotic, intuitive, can be manipulative.</p>
      
      <h3>10. Magha (मघा)</h3>
      <p><strong>Symbol:</strong> Royal throne | <strong>Deity:</strong> Pitris</p>
      <p>Royal nature, ancestral connections, leadership.</p>
      
      <h3>11. Purva Phalguni (पूर्वफाल्गुनी)</h3>
      <p><strong>Symbol:</strong> Hammock | <strong>Deity:</strong> Bhaga</p>
      <p>Enjoyment, creativity, love of leisure.</p>
      
      <h3>12. Uttara Phalguni (उत्तरफाल्गुनी)</h3>
      <p><strong>Symbol:</strong> Bed | <strong>Deity:</strong> Aryaman</p>
      <p>Contracts, agreements, helping nature.</p>
      
      <h3>13. Hasta (हस्त)</h3>
      <p><strong>Symbol:</strong> Hand | <strong>Deity:</strong> Savitar</p>
      <p>Skill with hands, craftsmanship, healing touch.</p>
      
      <h3>14. Chitra (चित्रा)</h3>
      <p><strong>Symbol:</strong> Pearl | <strong>Deity:</strong> Vishwakarma</p>
      <p>Artistic, attractive, architectural abilities.</p>
      
      <h3>15. Swati (स्वाति)</h3>
      <p><strong>Symbol:</strong> Coral | <strong>Deity:</strong> Vayu</p>
      <p>Independent, flexible, business acumen.</p>
      
      <h3>16. Vishakha (विशाखा)</h3>
      <p><strong>Symbol:</strong> Archway | <strong>Deity:</strong> Indra-Agni</p>
      <p>Goal-oriented, determined, transformative.</p>
      
      <h3>17. Anuradha (अनुराधा)</h3>
      <p><strong>Symbol:</strong> Lotus | <strong>Deity:</strong> Mitra</p>
      <p>Friendship, devotion, success in foreign lands.</p>
      
      <h3>18. Jyeshtha (ज्येष्ठा)</h3>
      <p><strong>Symbol:</strong> Earring | <strong>Deity:</strong> Indra</p>
      <p>Chief, protective, can be jealous.</p>
      
      <h3>19. Moola (मूल)</h3>
      <p><strong>Symbol:</strong> Roots | <strong>Deity:</strong> Nirriti</p>
      <p>Research, getting to the root, destruction before creation.</p>
      
      <h3>20. Purva Ashadha (पूर्वाषाढ़ा)</h3>
      <p><strong>Symbol:</strong> Fan | <strong>Deity:</strong> Apas</p>
      <p>Invincibility, purification, philosophical.</p>
      
      <h3>21. Uttara Ashadha (उत्तराषाढ़ा)</h3>
      <p><strong>Symbol:</strong> Elephant tusk | <strong>Deity:</strong> Vishvadevas</p>
      <p>Final victory, leadership, righteousness.</p>
      
      <h3>22. Shravana (श्रवण)</h3>
      <p><strong>Symbol:</strong> Ear | <strong>Deity:</strong> Vishnu</p>
      <p>Listening, learning, connection, organization.</p>
      
      <h3>23. Dhanishtha (धनिष्ठा)</h3>
      <p><strong>Symbol:</strong> Drum | <strong>Deity:</strong> Vasus</p>
      <p>Wealth, music, rhythm, group activities.</p>
      
      <h3>24. Shatabhisha (शतभिषा)</h3>
      <p><strong>Symbol:</strong> Circle | <strong>Deity:</strong> Varuna</p>
      <p>Healing, secrets, mystical knowledge.</p>
      
      <h3>25. Purva Bhadrapada (पूर्वभाद्रपदा)</h3>
      <p><strong>Symbol:</strong> Sword | <strong>Deity:</strong> Aja Ekapada</p>
      <p>Intensity, spiritual fire, transformation.</p>
      
      <h3>26. Uttara Bhadrapada (उत्तरभाद्रपदा)</h3>
      <p><strong>Symbol:</strong> Twins | <strong>Deity:</strong> Ahir Budhnya</p>
      <p>Deep wisdom, psychic abilities, sacrifice.</p>
      
      <h3>27. Revati (रेवती)</h3>
      <p><strong>Symbol:</strong> Fish | <strong>Deity:</strong> Pushan</p>
      <p>Nurturing, wealth, journey's end, transcendence.</p>
      
      <h2>Finding Your Nakshatra</h2>
      <p>Your birth Nakshatra is determined by the Moon's position at birth. Use BoloAstro's free Kundali generator to discover your Nakshatra and its detailed interpretation.</p>
    `
  }
];

export const categories = ["All", "Kundali", "Rashifal", "Marriage", "Career", "Remedies", "Nakshatra"];
