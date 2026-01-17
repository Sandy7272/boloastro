import React from 'react';
import { Page, View, Text } from '@react-pdf/renderer';
import { styles, colors } from '../styles';
import { PDFHeader, PDFFooter, SectionTitle } from '../components';
import { MonthlyPrediction } from '../types';

interface YearlyPredictionPageProps { predictions: MonthlyPrediction[]; }

const getStatusColor = (status: string) => {
  switch (status) {
    case 'excellent': return '#22C55E';
    case 'good': return colors.gold;
    case 'average': return '#EAB308';
    case 'challenging': return colors.burgundy;
    default: return colors.charcoal;
  }
};

const getStatusSymbol = (status: string) => {
  switch (status) {
    case 'excellent': return '★★★';
    case 'good': return '★★';
    case 'average': return '★';
    case 'challenging': return '⚠';
    default: return '-';
  }
};

const YearlyPredictionPage: React.FC<YearlyPredictionPageProps> = ({ predictions }) => (
  <Page size="A4" style={styles.page}>
    <PDFHeader pageNumber={15} />
    <SectionTitle title="Yearly Prediction 2025" titleHindi="वार्षिक भविष्यवाणी" showOm />
    
    <View style={{ marginTop: 10 }}>
      <View style={{ flexDirection: 'row', backgroundColor: colors.gold, padding: 8, borderTopLeftRadius: 4, borderTopRightRadius: 4 }}>
        {['Month', 'Career', 'Money', 'Love', 'Health'].map((h, i) => (
          <Text key={i} style={{ flex: i === 0 ? 1.5 : 1, fontSize: 9, fontWeight: 'bold', color: colors.white, textAlign: 'center' }}>{h}</Text>
        ))}
      </View>
      {predictions.map((p, i) => (
        <View key={i} style={{ flexDirection: 'row', padding: 6, backgroundColor: i % 2 === 0 ? colors.creamLight : colors.goldLight, borderBottomWidth: 1, borderBottomColor: colors.border }}>
          <Text style={{ flex: 1.5, fontSize: 9, color: colors.charcoal }}>{p.month}</Text>
          {[p.career, p.money, p.love, p.health].map((s, j) => (
            <Text key={j} style={{ flex: 1, fontSize: 8, color: getStatusColor(s), textAlign: 'center', fontWeight: 'bold' }}>{getStatusSymbol(s)}</Text>
          ))}
        </View>
      ))}
    </View>
    
    <View style={{ marginTop: 15, flexDirection: 'row', justifyContent: 'center', gap: 15 }}>
      {['excellent', 'good', 'average', 'challenging'].map((s) => (
        <View key={s} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontSize: 10, color: getStatusColor(s), marginRight: 4 }}>{getStatusSymbol(s)}</Text>
          <Text style={{ fontSize: 8, color: colors.charcoal, textTransform: 'capitalize' }}>{s}</Text>
        </View>
      ))}
    </View>
    
    <PDFFooter />
  </Page>
);

export default YearlyPredictionPage;
