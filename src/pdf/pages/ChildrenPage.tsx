import React from 'react';
import { Page, View, Text } from '@react-pdf/renderer';
import { styles, colors } from '../styles';
import { PDFHeader, PDFFooter, SectionTitle, BulletList } from '../components';
import { PredictionSection } from '../types';

interface ChildrenPageProps { children: PredictionSection; }

const ChildrenPage: React.FC<ChildrenPageProps> = ({ children: childrenPrediction }) => (
  <Page size="A4" style={styles.page}>
    <PDFHeader pageNumber={10} />
    <SectionTitle title={childrenPrediction.title} titleHindi={childrenPrediction.titleHindi} showOm />
    
    <Text style={styles.bodyText}>{childrenPrediction.content}</Text>
    
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginVertical: 15 }}>
      {[
        { label: 'Children Yoga', value: 'Strong & Favorable', icon: '👶' },
        { label: 'Number of Children', value: '2-3 likely', icon: '👨‍👩‍👧‍👦' },
        { label: 'First Child', value: 'Son (higher probability)', icon: '👦' },
        { label: 'Children Success', value: 'Education & Career', icon: '🎓' },
      ].map((item, i) => (
        <View key={i} style={{ width: '48%', backgroundColor: colors.goldLight, borderRadius: 8, padding: 12, flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontSize: 20, marginRight: 10 }}>{item.icon}</Text>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 9, color: colors.charcoalLight }}>{item.label}</Text>
            <Text style={{ fontSize: 11, fontWeight: 'bold', color: colors.charcoal, marginTop: 2 }}>{item.value}</Text>
          </View>
        </View>
      ))}
    </View>
    
    <Text style={styles.sectionSubtitle}>5th House Analysis (पंचम भाव)</Text>
    <View style={{ padding: 15, backgroundColor: colors.creamLight, borderRadius: 8, borderWidth: 1, borderColor: colors.gold }}>
      <Text style={{ fontSize: 10, color: colors.charcoal, lineHeight: 1.6 }}>
        The 5th house in your chart is influenced by Jupiter's aspect, which is highly auspicious 
        for children. Mars placement here may cause some initial delays but ultimately leads to 
        brave and successful children. Your firstborn is likely to achieve recognition in their field.
      </Text>
    </View>
    
    {childrenPrediction.highlights && (
      <>
        <Text style={styles.sectionSubtitle}>Key Predictions</Text>
        <BulletList items={childrenPrediction.highlights} />
      </>
    )}
    
    {childrenPrediction.warnings && childrenPrediction.warnings.length > 0 && (
      <View style={{ marginTop: 15, padding: 12, backgroundColor: '#FFF5F5', borderRadius: 8, borderWidth: 1, borderColor: colors.burgundy }}>
        <Text style={{ fontSize: 10, fontWeight: 'bold', color: colors.burgundy, marginBottom: 5 }}>⚠️ Important Notes</Text>
        <BulletList items={childrenPrediction.warnings} bulletColor={colors.burgundy} />
      </View>
    )}
    
    <View style={{ marginTop: 15, padding: 12, backgroundColor: colors.goldLight, borderRadius: 8 }}>
      <Text style={{ fontSize: 10, fontWeight: 'bold', color: colors.gold, marginBottom: 5 }}>🙏 Recommended for Children's Well-being</Text>
      <Text style={{ fontSize: 9, color: colors.charcoal, lineHeight: 1.5 }}>
        • Perform Santana Gopal Puja for blessed children{'\n'}
        • Recite Santana Gopala Mantra during pregnancy{'\n'}
        • Donate to orphanages on Panchami tithi
      </Text>
    </View>
    
    <PDFFooter />
  </Page>
);

export default ChildrenPage;
