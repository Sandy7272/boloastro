import React from 'react';
import { Page, View, Text, StyleSheet } from '@react-pdf/renderer';
import { styles, colors } from '../styles';
import { PDFHeader, PDFFooter, SectionTitle, DecorativeDivider, BulletList } from '../components';
import { PredictionSection } from '../types';

interface CareerPageProps {
  career: PredictionSection;
}

const localStyles = StyleSheet.create({
  statBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginVertical: 15,
  },
  statItem: {
    width: '48%',
    backgroundColor: colors.goldLight,
    borderRadius: 8,
    padding: 12,
    borderLeftWidth: 4,
    borderLeftColor: colors.gold,
  },
  statLabel: {
    fontSize: 9,
    color: colors.charcoalLight,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  statValue: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.charcoal,
    marginTop: 4,
  },
  highlightValue: {
    color: colors.saffron,
  },
});

const CareerPage: React.FC<CareerPageProps> = ({ career }) => (
  <Page size="A4" style={styles.page}>
    <PDFHeader pageNumber={6} />
    
    <SectionTitle title={career.title} titleHindi={career.titleHindi} showOm />
    
    <Text style={styles.bodyText}>{career.content}</Text>
    
    <View style={localStyles.statBox}>
      <View style={localStyles.statItem}>
        <Text style={localStyles.statLabel}>Best Career Fields</Text>
        <Text style={localStyles.statValue}>Administration, Finance, Arts, Politics</Text>
      </View>
      <View style={localStyles.statItem}>
        <Text style={localStyles.statLabel}>Job vs Business</Text>
        <Text style={localStyles.statValue}>Both favorable, slight edge for job</Text>
      </View>
      <View style={localStyles.statItem}>
        <Text style={localStyles.statLabel}>Government Job Yoga</Text>
        <Text style={[localStyles.statValue, localStyles.highlightValue]}>Strong (80% favorable)</Text>
      </View>
      <View style={localStyles.statItem}>
        <Text style={localStyles.statLabel}>Promotion Period</Text>
        <Text style={localStyles.statValue}>2025-2026</Text>
      </View>
    </View>
    
    <DecorativeDivider symbol="✦" />
    
    <Text style={styles.sectionSubtitle}>Career Analysis Details</Text>
    {career.highlights && <BulletList items={career.highlights} />}
    
    <Text style={styles.sectionSubtitle}>🌍 Abroad Career Opportunities</Text>
    <View style={{ padding: 15, backgroundColor: colors.creamLight, borderRadius: 8, borderWidth: 1, borderColor: colors.gold }}>
      <Text style={{ fontSize: 10, color: colors.charcoal, lineHeight: 1.6 }}>
        Rahu in the 7th house creates a yoga for foreign connections and overseas career opportunities. 
        After age 35, there are strong indications of work-related foreign travel or even relocation. 
        Best countries indicated: USA, UAE, Singapore, and European nations. IT, finance, and 
        administrative roles abroad are most favorable.
      </Text>
    </View>
    
    <Text style={styles.sectionSubtitle}>⚡ Current Dasha Impact on Career</Text>
    <View style={{ padding: 15, backgroundColor: colors.goldLight, borderRadius: 8 }}>
      <Text style={{ fontSize: 10, color: colors.charcoal, lineHeight: 1.6 }}>
        During the current planetary period (Mahadasha), career growth is indicated through 
        systematic effort rather than sudden jumps. The 10th house lord's placement suggests 
        recognition for your work, but patience is required. Avoid changing jobs during 
        Saturn retrograde periods for best results.
      </Text>
    </View>
    
    <View style={{ marginTop: 15, padding: 12, backgroundColor: '#FFF5F5', borderRadius: 8, borderWidth: 1, borderColor: colors.burgundy }}>
      <Text style={{ fontSize: 10, fontWeight: 'bold', color: colors.burgundy, marginBottom: 5 }}>
        ⚠️ Career Cautions
      </Text>
      <Text style={{ fontSize: 9, color: colors.charcoal, lineHeight: 1.5 }}>
        • Avoid partnerships with Saturn-afflicted individuals{'\n'}
        • Do not start new ventures during Rahu/Ketu transit over 10th house{'\n'}
        • Legal matters in career should be avoided during Mars retrograde
      </Text>
    </View>
    
    <PDFFooter />
  </Page>
);

export default CareerPage;
