import React from 'react';
import { Page, View, Text } from '@react-pdf/renderer';
import { styles, colors } from '../styles';
import { PDFHeader, PDFFooter, SectionTitle } from '../components';
import { LuckyFactors } from '../types';

interface LuckyFactorsPageProps { luckyFactors: LuckyFactors; }

const LuckyFactorsPage: React.FC<LuckyFactorsPageProps> = ({ luckyFactors }) => (
  <Page size="A4" style={styles.page}>
    <PDFHeader pageNumber={14} />
    <SectionTitle title="Lucky Factors" titleHindi="शुभ तत्व" showOm />
    
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 15, marginTop: 20 }}>
      {[
        { label: 'Lucky Color', hindi: 'शुभ रंग', value: luckyFactors.color, icon: '🎨' },
        { label: 'Lucky Number', hindi: 'शुभ अंक', value: luckyFactors.number.toString(), icon: '🔢' },
        { label: 'Lucky Day', hindi: 'शुभ दिन', value: luckyFactors.day, icon: '📅' },
        { label: 'Favorable Direction', hindi: 'शुभ दिशा', value: luckyFactors.direction, icon: '🧭' },
      ].map((item, i) => (
        <View key={i} style={{ width: '47%', backgroundColor: colors.goldLight, borderRadius: 12, padding: 20, alignItems: 'center', borderWidth: 2, borderColor: colors.gold }}>
          <Text style={{ fontSize: 24 }}>{item.icon}</Text>
          <Text style={{ fontSize: 9, color: colors.charcoalLight, marginTop: 8, textTransform: 'uppercase' }}>{item.label}</Text>
          <Text style={{ fontSize: 14, fontWeight: 'bold', color: colors.gold, marginTop: 4, fontFamily: 'Noto Serif', textAlign: 'center' }}>{item.value}</Text>
          <Text style={{ fontSize: 10, color: colors.saffron }}>{item.hindi}</Text>
        </View>
      ))}
    </View>
    
    {luckyFactors.deity && (
      <View style={{ marginTop: 25, padding: 20, backgroundColor: colors.creamLight, borderRadius: 8, alignItems: 'center', borderWidth: 1, borderColor: colors.gold }}>
        <Text style={{ fontSize: 9, color: colors.charcoalLight, textTransform: 'uppercase' }}>Ruling Deity</Text>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: colors.saffron, marginTop: 5, fontFamily: 'Noto Serif' }}>{luckyFactors.deity}</Text>
      </View>
    )}
    
    <PDFFooter />
  </Page>
);

export default LuckyFactorsPage;
