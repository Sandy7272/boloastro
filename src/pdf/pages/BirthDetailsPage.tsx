import React from 'react';
import { Page, View, Text, StyleSheet } from '@react-pdf/renderer';
import { styles, colors } from '../styles';
import { PDFHeader, PDFFooter, SectionTitle, DecorativeDivider } from '../components';
import { UserData } from '../types';

interface BirthDetailsPageProps {
  userData: UserData;
}

const localStyles = StyleSheet.create({
  detailsTable: {
    marginTop: 20,
    borderWidth: 2,
    borderColor: colors.gold,
    borderRadius: 8,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  tableRowLast: {
    flexDirection: 'row',
  },
  labelCell: {
    width: '40%',
    backgroundColor: colors.goldLight,
    padding: 12,
    borderRightWidth: 1,
    borderRightColor: colors.border,
  },
  valueCell: {
    width: '60%',
    padding: 12,
    backgroundColor: colors.creamLight,
  },
  labelText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: colors.charcoal,
  },
  labelHindi: {
    fontSize: 9,
    color: colors.saffron,
    marginTop: 2,
  },
  valueText: {
    fontSize: 12,
    color: colors.charcoal,
  },
  summaryBox: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  summaryItem: {
    alignItems: 'center',
    backgroundColor: colors.goldLight,
    borderRadius: 8,
    padding: 15,
    width: '30%',
  },
  summaryLabel: {
    fontSize: 9,
    color: colors.charcoalLight,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  summaryValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.gold,
    marginTop: 5,
    fontFamily: 'Noto Serif',
  },
  summaryHindi: {
    fontSize: 10,
    color: colors.saffron,
    marginTop: 2,
  },
});

const BirthDetailsPage: React.FC<BirthDetailsPageProps> = ({ userData }) => {
  const details = [
    { label: 'Name', labelHindi: 'नाम', value: userData.name },
    { label: 'Date of Birth', labelHindi: 'जन्म तिथि', value: userData.dob },
    { label: 'Time of Birth', labelHindi: 'जन्म समय', value: userData.time },
    { label: 'Place of Birth', labelHindi: 'जन्म स्थान', value: userData.place },
    { label: 'Nakshatra', labelHindi: 'नक्षत्र', value: userData.nakshatra || 'Rohini' },
    { label: 'Rashi (Moon Sign)', labelHindi: 'राशि', value: userData.rashi || 'Vrishabha' },
    { label: 'Lagna (Ascendant)', labelHindi: 'लग्न', value: userData.lagnaRashi || 'Simha' },
  ];

  return (
    <Page size="A4" style={styles.page}>
      <PDFHeader pageNumber={2} />
      
      <SectionTitle title="Birth Details" titleHindi="जन्म विवरण" showOm />
      
      <Text style={styles.bodyText}>
        The following birth details form the foundation of your Kundali analysis. 
        Accurate birth time and place are essential for precise calculations of 
        planetary positions and house cusps.
      </Text>
      
      <View style={localStyles.detailsTable}>
        {details.map((detail, index) => (
          <View 
            key={index} 
            style={index === details.length - 1 ? localStyles.tableRowLast : localStyles.tableRow}
          >
            <View style={localStyles.labelCell}>
              <Text style={localStyles.labelText}>{detail.label}</Text>
              <Text style={localStyles.labelHindi}>{detail.labelHindi}</Text>
            </View>
            <View style={localStyles.valueCell}>
              <Text style={localStyles.valueText}>{detail.value}</Text>
            </View>
          </View>
        ))}
      </View>
      
      <DecorativeDivider symbol="☸" />
      
      <View style={localStyles.summaryBox}>
        <View style={localStyles.summaryItem}>
          <Text style={localStyles.summaryLabel}>Nakshatra</Text>
          <Text style={localStyles.summaryValue}>{userData.nakshatra || 'Rohini'}</Text>
          <Text style={localStyles.summaryHindi}>रोहिणी</Text>
        </View>
        <View style={localStyles.summaryItem}>
          <Text style={localStyles.summaryLabel}>Moon Sign</Text>
          <Text style={localStyles.summaryValue}>{userData.rashi || 'Taurus'}</Text>
          <Text style={localStyles.summaryHindi}>वृषभ</Text>
        </View>
        <View style={localStyles.summaryItem}>
          <Text style={localStyles.summaryLabel}>Ascendant</Text>
          <Text style={localStyles.summaryValue}>{userData.lagnaRashi || 'Leo'}</Text>
          <Text style={localStyles.summaryHindi}>सिंह</Text>
        </View>
      </View>
      
      <Text style={[styles.bodyText, { marginTop: 25, fontStyle: 'italic', textAlign: 'center' }]}>
        "जन्मकाले ग्रहाः सर्वे यत्र राशौ भवन्ति च। 
        तद्राशौ जातको ज्ञेयः स्वभावेन समन्वितः॥"
      </Text>
      
      <PDFFooter />
    </Page>
  );
};

export default BirthDetailsPage;
