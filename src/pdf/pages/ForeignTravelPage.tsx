import React from 'react';
import { Page, View, Text } from '@react-pdf/renderer';
import { styles, colors } from '../styles';
import { PDFHeader, PDFFooter, SectionTitle, BulletList, DecorativeDivider } from '../components';
import { PredictionSection } from '../types';

interface ForeignTravelPageProps { foreignTravel: PredictionSection; }

const ForeignTravelPage: React.FC<ForeignTravelPageProps> = ({ foreignTravel }) => (
  <Page size="A4" style={styles.page}>
    <PDFHeader pageNumber={17} />
    <SectionTitle title={foreignTravel.title} titleHindi={foreignTravel.titleHindi} showOm />
    
    <Text style={styles.bodyText}>{foreignTravel.content}</Text>
    
    <View style={{ flexDirection: 'row', gap: 10, marginVertical: 15 }}>
      <View style={{ flex: 1, backgroundColor: colors.goldLight, borderRadius: 8, padding: 15, alignItems: 'center' }}>
        <Text style={{ fontSize: 24 }}>✈️</Text>
        <Text style={{ fontSize: 9, color: colors.charcoalLight, marginTop: 5 }}>Foreign Travel Yoga</Text>
        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#22C55E', marginTop: 4 }}>Present</Text>
      </View>
      <View style={{ flex: 1, backgroundColor: colors.goldLight, borderRadius: 8, padding: 15, alignItems: 'center' }}>
        <Text style={{ fontSize: 24 }}>🏠</Text>
        <Text style={{ fontSize: 9, color: colors.charcoalLight, marginTop: 5 }}>Settlement Abroad</Text>
        <Text style={{ fontSize: 14, fontWeight: 'bold', color: colors.saffron, marginTop: 4 }}>40% Likely</Text>
      </View>
      <View style={{ flex: 1, backgroundColor: colors.goldLight, borderRadius: 8, padding: 15, alignItems: 'center' }}>
        <Text style={{ fontSize: 24 }}>📅</Text>
        <Text style={{ fontSize: 9, color: colors.charcoalLight, marginTop: 5 }}>Best Visa Period</Text>
        <Text style={{ fontSize: 14, fontWeight: 'bold', color: colors.gold, marginTop: 4 }}>2025-26</Text>
      </View>
    </View>
    
    <Text style={styles.sectionSubtitle}>🌍 Favorable Countries</Text>
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 15 }}>
      {['USA 🇺🇸', 'UAE 🇦🇪', 'Singapore 🇸🇬', 'UK 🇬🇧', 'Canada 🇨🇦', 'Australia 🇦🇺'].map((country, i) => (
        <View key={i} style={{ backgroundColor: colors.creamLight, borderRadius: 20, paddingVertical: 6, paddingHorizontal: 12, borderWidth: 1, borderColor: colors.gold }}>
          <Text style={{ fontSize: 10, color: colors.charcoal }}>{country}</Text>
        </View>
      ))}
    </View>
    
    <DecorativeDivider symbol="✈️" />
    
    {foreignTravel.highlights && (
      <>
        <Text style={styles.sectionSubtitle}>Detailed Analysis</Text>
        <BulletList items={foreignTravel.highlights} />
      </>
    )}
    
    <Text style={styles.sectionSubtitle}>9th & 12th House Analysis</Text>
    <View style={{ padding: 15, backgroundColor: colors.creamLight, borderRadius: 8, borderWidth: 1, borderColor: colors.gold }}>
      <Text style={{ fontSize: 10, color: colors.charcoal, lineHeight: 1.6 }}>
        Rahu in the 7th house creates strong foreign yoga. The 9th lord (father, luck, long journeys) 
        aspects the 12th house (foreign lands) creating multiple opportunities for overseas travel. 
        Career-related travel is most favorable. Permanent settlement depends on the running Dasha.
      </Text>
    </View>
    
    <View style={{ marginTop: 15, padding: 12, backgroundColor: colors.goldLight, borderRadius: 8 }}>
      <Text style={{ fontSize: 10, fontWeight: 'bold', color: colors.gold, marginBottom: 5 }}>🕉️ Travel Remedies</Text>
      <Text style={{ fontSize: 9, color: colors.charcoal, lineHeight: 1.5 }}>
        • Worship Lord Ganesha before any journey{'\n'}
        • Carry a small Hanuman idol during travel{'\n'}
        • Recite travel safety mantra before flights
      </Text>
    </View>
    
    <PDFFooter />
  </Page>
);

export default ForeignTravelPage;
