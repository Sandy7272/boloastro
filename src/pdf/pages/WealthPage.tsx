import React from 'react';
import { Page, View, Text, StyleSheet } from '@react-pdf/renderer';
import { styles, colors } from '../styles';
import { PDFHeader, PDFFooter, SectionTitle, DecorativeDivider, BulletList } from '../components';
import { PredictionSection } from '../types';

interface WealthPageProps {
  wealth: PredictionSection;
}

const localStyles = StyleSheet.create({
  yogaCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.goldLight,
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  yogaIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.gold,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  yogaIconText: {
    fontSize: 18,
    color: colors.white,
  },
  yogaContent: {
    flex: 1,
  },
  yogaName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.charcoal,
  },
  yogaDesc: {
    fontSize: 9,
    color: colors.charcoalLight,
    marginTop: 2,
  },
  yogaStatus: {
    fontSize: 10,
    fontWeight: 'bold',
    color: colors.saffron,
  },
});

const WealthPage: React.FC<WealthPageProps> = ({ wealth }) => (
  <Page size="A4" style={styles.page}>
    <PDFHeader pageNumber={7} />
    
    <SectionTitle title={wealth.title} titleHindi={wealth.titleHindi} showOm />
    
    <Text style={styles.bodyText}>{wealth.content}</Text>
    
    <DecorativeDivider symbol="₹" />
    
    <Text style={styles.sectionSubtitle}>💰 Wealth Yogas in Your Chart</Text>
    
    <View style={localStyles.yogaCard}>
      <View style={localStyles.yogaIcon}>
        <Text style={localStyles.yogaIconText}>₹</Text>
      </View>
      <View style={localStyles.yogaContent}>
        <Text style={localStyles.yogaName}>Dhan Yoga (धन योग)</Text>
        <Text style={localStyles.yogaDesc}>Jupiter aspects 2nd house, Moon in 10th - wealth through profession</Text>
      </View>
      <Text style={localStyles.yogaStatus}>✓ Present</Text>
    </View>
    
    <View style={localStyles.yogaCard}>
      <View style={localStyles.yogaIcon}>
        <Text style={localStyles.yogaIconText}>🏠</Text>
      </View>
      <View style={localStyles.yogaContent}>
        <Text style={localStyles.yogaName}>Property Yoga (भूमि योग)</Text>
        <Text style={localStyles.yogaDesc}>4th lord Mars well-placed - favorable for land and real estate</Text>
      </View>
      <Text style={localStyles.yogaStatus}>✓ Present</Text>
    </View>
    
    <View style={[localStyles.yogaCard, { backgroundColor: colors.creamLight }]}>
      <View style={[localStyles.yogaIcon, { backgroundColor: colors.charcoalLight }]}>
        <Text style={localStyles.yogaIconText}>🎰</Text>
      </View>
      <View style={localStyles.yogaContent}>
        <Text style={localStyles.yogaName}>Lottery/Speculation Yoga</Text>
        <Text style={localStyles.yogaDesc}>5th house afflicted by Mars - moderate luck in speculation</Text>
      </View>
      <Text style={[localStyles.yogaStatus, { color: colors.charcoalLight }]}>Mild</Text>
    </View>
    
    <Text style={styles.sectionSubtitle}>📈 Financial Predictions</Text>
    {wealth.highlights && <BulletList items={wealth.highlights} />}
    
    <Text style={styles.sectionSubtitle}>Best Investment Periods</Text>
    <View style={{ padding: 15, backgroundColor: colors.goldLight, borderRadius: 8 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}>
        <Text style={{ fontSize: 10, color: colors.charcoal }}>Real Estate Purchase:</Text>
        <Text style={{ fontSize: 10, fontWeight: 'bold', color: colors.saffron }}>2025-2027</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}>
        <Text style={{ fontSize: 10, color: colors.charcoal }}>Gold/Jewelry:</Text>
        <Text style={{ fontSize: 10, fontWeight: 'bold', color: colors.saffron }}>Akshaya Tritiya periods</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}>
        <Text style={{ fontSize: 10, color: colors.charcoal }}>Stock Market:</Text>
        <Text style={{ fontSize: 10, fontWeight: 'bold', color: colors.saffron }}>Jupiter transit periods</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 10, color: colors.charcoal }}>New Business:</Text>
        <Text style={{ fontSize: 10, fontWeight: 'bold', color: colors.saffron }}>Avoid Saturn retrograde</Text>
      </View>
    </View>
    
    {wealth.warnings && wealth.warnings.length > 0 && (
      <View style={{ marginTop: 15, padding: 12, backgroundColor: '#FFF5F5', borderRadius: 8, borderWidth: 1, borderColor: colors.burgundy }}>
        <Text style={{ fontSize: 10, fontWeight: 'bold', color: colors.burgundy, marginBottom: 5 }}>
          ⚠️ Financial Cautions
        </Text>
        <BulletList items={wealth.warnings} bulletSymbol="•" bulletColor={colors.burgundy} />
      </View>
    )}
    
    <PDFFooter />
  </Page>
);

export default WealthPage;
