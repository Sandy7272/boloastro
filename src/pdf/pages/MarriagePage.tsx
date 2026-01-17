import React from 'react';
import { Page, View, Text } from '@react-pdf/renderer';
import { styles, colors } from '../styles';
import { PDFHeader, PDFFooter, SectionTitle, BulletList } from '../components';
import { PredictionSection } from '../types';

interface MarriagePageProps {
  marriage: PredictionSection;
}

const MarriagePage: React.FC<MarriagePageProps> = ({ marriage }) => (
  <Page size="A4" style={styles.page}>
    <PDFHeader pageNumber={8} />
    <SectionTitle title={marriage.title} titleHindi={marriage.titleHindi} showOm />
    <Text style={styles.bodyText}>{marriage.content}</Text>
    
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginVertical: 15 }}>
      {[
        { label: 'Marriage Type', value: 'Arranged/Semi-arranged' },
        { label: 'Best Age', value: '27-30 years' },
        { label: 'Partner Nature', value: 'Caring, artistic' },
        { label: 'Marital Happiness', value: '75% favorable' },
      ].map((item, i) => (
        <View key={i} style={{ width: '48%', backgroundColor: colors.goldLight, borderRadius: 8, padding: 12 }}>
          <Text style={{ fontSize: 9, color: colors.charcoalLight }}>{item.label}</Text>
          <Text style={{ fontSize: 12, fontWeight: 'bold', color: colors.charcoal, marginTop: 4 }}>{item.value}</Text>
        </View>
      ))}
    </View>
    
    {marriage.highlights && <BulletList items={marriage.highlights} />}
    {marriage.warnings && (
      <View style={{ marginTop: 15, padding: 12, backgroundColor: '#FFF5F5', borderRadius: 8 }}>
        <Text style={{ fontSize: 10, fontWeight: 'bold', color: colors.burgundy, marginBottom: 5 }}>⚠️ Cautions</Text>
        <BulletList items={marriage.warnings} bulletColor={colors.burgundy} />
      </View>
    )}
    <PDFFooter />
  </Page>
);

export default MarriagePage;
