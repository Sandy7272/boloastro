import React from 'react';
import { Page, View, Text } from '@react-pdf/renderer';
import { styles, colors } from '../styles';
import { PDFHeader, PDFFooter, SectionTitle, DataTable } from '../components';
import { Planet } from '../types';

interface PlanetaryPositionsPageProps {
  planets: Planet[];
}

const PlanetaryPositionsPage: React.FC<PlanetaryPositionsPageProps> = ({ planets }) => {
  const headers = ['Planet (ग्रह)', 'House', 'Sign (राशि)', 'Degree', 'Status'];
  
  const rows = planets.map(planet => [
    planet.name,
    `H${planet.house}`,
    planet.sign,
    planet.degree,
    planet.isRetrograde ? 'Retrograde (वक्री)' : 'Direct',
  ]);

  return (
    <Page size="A4" style={styles.page}>
      <PDFHeader pageNumber={4} />
      
      <SectionTitle title="Planetary Positions" titleHindi="ग्रह स्थिति" showOm />
      
      <Text style={styles.bodyText}>
        The following table shows the exact positions of all nine planets (Navagraha) 
        in your birth chart. These positions are calculated using the Lahiri Ayanamsa, 
        which is the standard for Vedic Astrology in India.
      </Text>
      
      <DataTable headers={headers} rows={rows} columnWidths={[30, 12, 20, 18, 20]} />
      
      <View style={{ marginTop: 20 }}>
        <Text style={styles.sectionSubtitle}>Planet Significance</Text>
        
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          <View style={{ width: '50%', paddingRight: 10, marginBottom: 10 }}>
            <Text style={{ fontSize: 10, fontWeight: 'bold', color: colors.saffron }}>☀️ Sun (सूर्य)</Text>
            <Text style={{ fontSize: 9, color: colors.charcoal }}>Soul, Father, Authority, Government</Text>
          </View>
          <View style={{ width: '50%', paddingRight: 10, marginBottom: 10 }}>
            <Text style={{ fontSize: 10, fontWeight: 'bold', color: colors.charcoal }}>🌙 Moon (चन्द्र)</Text>
            <Text style={{ fontSize: 9, color: colors.charcoal }}>Mind, Mother, Emotions, Public</Text>
          </View>
          <View style={{ width: '50%', paddingRight: 10, marginBottom: 10 }}>
            <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#DC2626' }}>♂️ Mars (मंगल)</Text>
            <Text style={{ fontSize: 9, color: colors.charcoal }}>Energy, Courage, Property, Brothers</Text>
          </View>
          <View style={{ width: '50%', paddingRight: 10, marginBottom: 10 }}>
            <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#22C55E' }}>☿️ Mercury (बुध)</Text>
            <Text style={{ fontSize: 9, color: colors.charcoal }}>Intelligence, Communication, Business</Text>
          </View>
          <View style={{ width: '50%', paddingRight: 10, marginBottom: 10 }}>
            <Text style={{ fontSize: 10, fontWeight: 'bold', color: colors.gold }}>♃ Jupiter (गुरु)</Text>
            <Text style={{ fontSize: 9, color: colors.charcoal }}>Wisdom, Children, Fortune, Dharma</Text>
          </View>
          <View style={{ width: '50%', paddingRight: 10, marginBottom: 10 }}>
            <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#EC4899' }}>♀️ Venus (शुक्र)</Text>
            <Text style={{ fontSize: 9, color: colors.charcoal }}>Love, Marriage, Luxury, Arts</Text>
          </View>
          <View style={{ width: '50%', paddingRight: 10, marginBottom: 10 }}>
            <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#1E40AF' }}>♄ Saturn (शनि)</Text>
            <Text style={{ fontSize: 9, color: colors.charcoal }}>Karma, Discipline, Longevity, Service</Text>
          </View>
          <View style={{ width: '50%', paddingRight: 10, marginBottom: 10 }}>
            <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#6B7280' }}>☊ Rahu (राहु)</Text>
            <Text style={{ fontSize: 9, color: colors.charcoal }}>Desires, Illusion, Foreign, Technology</Text>
          </View>
          <View style={{ width: '50%', paddingRight: 10, marginBottom: 10 }}>
            <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#A855F7' }}>☋ Ketu (केतु)</Text>
            <Text style={{ fontSize: 9, color: colors.charcoal }}>Spirituality, Detachment, Past Karma</Text>
          </View>
        </View>
      </View>
      
      <View style={{ marginTop: 15, padding: 12, backgroundColor: colors.goldLight, borderRadius: 8 }}>
        <Text style={{ fontSize: 10, fontWeight: 'bold', color: colors.charcoal, marginBottom: 5 }}>
          🔄 About Retrograde Planets
        </Text>
        <Text style={{ fontSize: 9, color: colors.charcoal, lineHeight: 1.5 }}>
          Retrograde (Vakri) planets appear to move backward from Earth's perspective. 
          In Vedic astrology, retrograde planets are considered stronger and give results 
          in unexpected ways. They often indicate karmic lessons from past lives that need 
          to be addressed in this lifetime.
        </Text>
      </View>
      
      <PDFFooter />
    </Page>
  );
};

export default PlanetaryPositionsPage;
