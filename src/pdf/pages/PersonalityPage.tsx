import React from 'react';
import { Page, View, Text } from '@react-pdf/renderer';
import { styles, colors } from '../styles';
import { PDFHeader, PDFFooter, SectionTitle, DecorativeDivider, BulletList, InfoBox } from '../components';
import { PredictionSection } from '../types';

interface PersonalityPageProps {
  personality: PredictionSection;
}

const PersonalityPage: React.FC<PersonalityPageProps> = ({ personality }) => (
  <Page size="A4" style={styles.page}>
    <PDFHeader pageNumber={5} />
    
    <SectionTitle title={personality.title} titleHindi={personality.titleHindi} showOm />
    
    <Text style={styles.bodyText}>{personality.content}</Text>
    
    <DecorativeDivider symbol="✦" />
    
    <View style={{ flexDirection: 'row', gap: 15 }}>
      {/* Nature & Strengths */}
      <View style={{ flex: 1 }}>
        <Text style={styles.sectionSubtitle}>🌟 Nature & Strengths</Text>
        <Text style={{ fontSize: 10, color: colors.charcoal, marginBottom: 8 }}>
          Your core personality traits and natural talents that help you succeed in life.
        </Text>
        {personality.highlights && (
          <BulletList items={personality.highlights} bulletSymbol="✓" bulletColor="#22C55E" />
        )}
      </View>
      
      {/* Weaknesses & Challenges */}
      <View style={{ flex: 1 }}>
        <Text style={styles.sectionSubtitle}>⚠️ Areas to Improve</Text>
        <Text style={{ fontSize: 10, color: colors.charcoal, marginBottom: 8 }}>
          Traits that may create challenges and require conscious effort to overcome.
        </Text>
        {personality.warnings && (
          <BulletList items={personality.warnings} bulletSymbol="•" bulletColor={colors.burgundy} />
        )}
      </View>
    </View>
    
    <DecorativeDivider symbol="☸" />
    
    <Text style={styles.sectionSubtitle}>Emotional Behavior</Text>
    <View style={{ padding: 15, backgroundColor: colors.creamLight, borderRadius: 8, borderWidth: 1, borderColor: colors.gold }}>
      <Text style={{ fontSize: 10, color: colors.charcoal, lineHeight: 1.6 }}>
        With Moon in Taurus in the 10th house, you possess remarkable emotional stability. 
        You are not easily swayed by temporary setbacks and maintain composure under pressure. 
        Your emotional intelligence helps you in professional settings where calm decision-making 
        is valued. You may sometimes appear reserved, but this is because you process emotions 
        internally before expressing them. Family and close relationships provide you with 
        emotional security and grounding.
      </Text>
    </View>
    
    <Text style={styles.sectionSubtitle}>Personality Insights from Nakshatra</Text>
    <View style={{ padding: 15, backgroundColor: colors.goldLight, borderRadius: 8 }}>
      <Text style={{ fontSize: 11, fontWeight: 'bold', color: colors.gold, marginBottom: 5 }}>
        रोहिणी नक्षत्र (Rohini Nakshatra)
      </Text>
      <Text style={{ fontSize: 10, color: colors.charcoal, lineHeight: 1.5 }}>
        Ruled by Moon and residing in Taurus, Rohini natives are known for their beauty, 
        artistic talents, and materialistic tendencies. The deity is Brahma (creator), 
        giving you creative abilities. The symbol is a chariot or ox cart, indicating 
        progress through steady effort. You attract people naturally and have a 
        magnetic presence.
      </Text>
    </View>
    
    <InfoBox 
      title="💡 Key Takeaway"
      content="Your combination of Leo Lagna (leadership) with Taurus Moon (stability) creates a personality that commands respect while remaining approachable. Focus on balancing ambition with patience for best results."
      variant="highlight"
    />
    
    <PDFFooter />
  </Page>
);

export default PersonalityPage;
