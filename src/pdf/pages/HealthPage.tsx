import React from 'react';
import { Page, View, Text } from '@react-pdf/renderer';
import { styles, colors } from '../styles';
import { PDFHeader, PDFFooter, SectionTitle, BulletList } from '../components';
import { PredictionSection } from '../types';

interface HealthPageProps { health: PredictionSection; }

const HealthPage: React.FC<HealthPageProps> = ({ health }) => (
  <Page size="A4" style={styles.page}>
    <PDFHeader pageNumber={9} />
    <SectionTitle title={health.title} titleHindi={health.titleHindi} showOm />
    <Text style={styles.bodyText}>{health.content}</Text>
    
    <View style={{ flexDirection: 'row', gap: 15, marginVertical: 15 }}>
      <View style={{ flex: 1, backgroundColor: '#E8F5E9', borderRadius: 8, padding: 12, borderLeftWidth: 4, borderLeftColor: '#22C55E' }}>
        <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#22C55E', marginBottom: 5 }}>💪 Strong Areas</Text>
        <Text style={{ fontSize: 9, color: colors.charcoal }}>Heart, Spine, Immunity, Digestive fire</Text>
      </View>
      <View style={{ flex: 1, backgroundColor: '#FFF5F5', borderRadius: 8, padding: 12, borderLeftWidth: 4, borderLeftColor: colors.burgundy }}>
        <Text style={{ fontSize: 10, fontWeight: 'bold', color: colors.burgundy, marginBottom: 5 }}>⚠️ Weak Areas</Text>
        <Text style={{ fontSize: 9, color: colors.charcoal }}>Digestion, Knees, Skin conditions</Text>
      </View>
    </View>
    
    {health.highlights && <BulletList items={health.highlights} />}
    {health.warnings && (
      <View style={{ marginTop: 15, padding: 12, backgroundColor: colors.goldLight, borderRadius: 8 }}>
        <Text style={{ fontSize: 10, fontWeight: 'bold', marginBottom: 5 }}>Health Recommendations</Text>
        <BulletList items={health.warnings} />
      </View>
    )}
    <PDFFooter />
  </Page>
);

export default HealthPage;
