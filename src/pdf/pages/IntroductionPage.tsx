import React from 'react';
import { Page, View, Text } from '@react-pdf/renderer';
import { styles } from '../styles';
import { PDFHeader, PDFFooter, SectionTitle, DecorativeDivider, InfoBox } from '../components';

const IntroductionPage: React.FC = () => (
  <Page size="A4" style={styles.page}>
    <PDFHeader pageNumber={1} />
    
    <SectionTitle title="Introduction" titleHindi="परिचय" showOm />
    
    <Text style={styles.bodyText}>
      Welcome to your personalized Premium Janam Kundali Report. This comprehensive analysis 
      is prepared using the ancient wisdom of Vedic Astrology (Jyotish Shastra), combined 
      with modern AI-powered interpretation to provide you with accurate and actionable insights.
    </Text>
    
    <DecorativeDivider symbol="✦" />
    
    <Text style={styles.sectionSubtitle}>What is Kundali?</Text>
    <Text style={styles.bodyText}>
      Kundali, also known as Janam Patrika or Birth Chart, is a celestial snapshot of the 
      planetary positions at the exact moment of your birth. It is the foundation of Vedic 
      Astrology and serves as a cosmic map of your life's journey, revealing your strengths, 
      challenges, and life path.
    </Text>
    <Text style={styles.bodyText}>
      The Kundali consists of 12 houses (Bhava), each representing different aspects of life 
      such as personality, wealth, siblings, mother, children, enemies, marriage, longevity, 
      father, career, gains, and expenses. The placement of 9 celestial bodies (Navagraha) 
      in these houses determines the various influences on your life.
    </Text>
    
    <Text style={styles.sectionSubtitle}>How Predictions Are Made</Text>
    <Text style={styles.bodyText}>
      Our analysis combines multiple traditional techniques:
    </Text>
    <View style={{ marginLeft: 15, marginBottom: 10 }}>
      <Text style={styles.bodyText}>• Lagna (Ascendant) Analysis - Your core personality</Text>
      <Text style={styles.bodyText}>• Planetary Positions - Current influences on life areas</Text>
      <Text style={styles.bodyText}>• Dasha System - Time-based predictions using Vimshottari Dasha</Text>
      <Text style={styles.bodyText}>• Transit Analysis - How current planetary movements affect you</Text>
      <Text style={styles.bodyText}>• Yoga Analysis - Special planetary combinations in your chart</Text>
      <Text style={styles.bodyText}>• Dosha Analysis - Checking for Manglik, Kaal Sarp, etc.</Text>
    </View>
    
    <DecorativeDivider symbol="☸" />
    
    <InfoBox 
      title="⚠️ Disclaimer"
      content="This report is prepared for guidance and self-reflection purposes only. Astrology provides tendencies and possibilities, not certainties. The planets incline, they do not compel. Your free will, karma, and actions are the ultimate determiners of your destiny. Please consult qualified professionals for medical, legal, or financial decisions. This report should not replace professional advice in any field."
      variant="warning"
    />
    
    <Text style={[styles.bodyText, { marginTop: 15, fontStyle: 'italic', textAlign: 'center' }]}>
      "ज्योतिषं सर्व विद्यानां शिरोरत्नं प्रकीर्तितम्"
    </Text>
    <Text style={[styles.bodyText, { fontStyle: 'italic', textAlign: 'center', fontSize: 10 }]}>
      "Jyotish is proclaimed as the crown jewel of all sciences"
    </Text>
    
    <PDFFooter />
  </Page>
);

export default IntroductionPage;
