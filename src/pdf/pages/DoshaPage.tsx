import React from 'react';
import { Page, View, Text } from '@react-pdf/renderer';
import { styles, colors } from '../styles';
import { PDFHeader, PDFFooter, SectionTitle, BulletList, DecorativeDivider } from '../components';
import { Dosha } from '../types';

interface DoshaPageProps { doshas: Dosha[]; }

const DoshaPage: React.FC<DoshaPageProps> = ({ doshas }) => (
  <Page size="A4" style={styles.page}>
    <PDFHeader pageNumber={11} />
    <SectionTitle title="Dosha Analysis" titleHindi="दोष विश्लेषण" showOm />
    
    {doshas.map((dosha, i) => (
      <View key={i} style={{ marginBottom: 15, padding: 12, backgroundColor: dosha.present ? '#FFF5F5' : '#E8F5E9', borderRadius: 8, borderWidth: 1, borderColor: dosha.present ? colors.burgundy : '#22C55E' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
          <Text style={{ fontSize: 12, fontWeight: 'bold', color: colors.charcoal }}>{dosha.name} ({dosha.nameHindi})</Text>
          <Text style={{ fontSize: 10, fontWeight: 'bold', color: dosha.present ? colors.burgundy : '#22C55E' }}>
            {dosha.present ? `⚠️ ${dosha.severity.toUpperCase()}` : '✓ Not Present'}
          </Text>
        </View>
        <Text style={{ fontSize: 9, color: colors.charcoal, marginBottom: 5 }}>{dosha.description}</Text>
        {dosha.present && dosha.remedies.length > 0 && (
          <>
            <DecorativeDivider symbol="•" />
            <Text style={{ fontSize: 9, fontWeight: 'bold', color: colors.saffron, marginBottom: 5 }}>Remedies:</Text>
            <BulletList items={dosha.remedies} bulletColor={colors.gold} />
          </>
        )}
      </View>
    ))}
    <PDFFooter />
  </Page>
);

export default DoshaPage;
