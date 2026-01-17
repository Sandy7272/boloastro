import React from 'react';
import { Page, View, Text, StyleSheet } from '@react-pdf/renderer';
import { colors } from '../styles';
import { UserData } from '../types';

interface CoverPageProps {
  userData: UserData;
}

const localStyles = StyleSheet.create({
  page: {
    backgroundColor: colors.cream,
    position: 'relative',
  },
  outerBorder: {
    position: 'absolute',
    top: 20,
    left: 20,
    right: 20,
    bottom: 20,
    borderWidth: 3,
    borderColor: colors.gold,
  },
  innerBorder: {
    position: 'absolute',
    top: 28,
    left: 28,
    right: 28,
    bottom: 28,
    borderWidth: 1,
    borderColor: colors.gold,
  },
  cornerOrnament: {
    position: 'absolute',
    fontSize: 20,
    color: colors.gold,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 60,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.gold,
    fontFamily: 'Noto Serif',
    marginBottom: 10,
  },
  logoSubtext: {
    fontSize: 10,
    color: colors.charcoalLight,
    letterSpacing: 3,
    textTransform: 'uppercase',
    marginBottom: 40,
  },
  dividerLine: {
    width: 200,
    height: 2,
    backgroundColor: colors.gold,
    marginVertical: 20,
  },
  title: {
    fontFamily: 'Noto Serif',
    fontSize: 28,
    color: colors.gold,
    textAlign: 'center',
    marginBottom: 5,
  },
  titleHindi: {
    fontSize: 16,
    color: colors.saffron,
    textAlign: 'center',
    marginBottom: 30,
  },
  name: {
    fontFamily: 'Noto Serif',
    fontSize: 24,
    color: colors.charcoal,
    textAlign: 'center',
    marginBottom: 20,
  },
  detailsBox: {
    backgroundColor: colors.goldLight,
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    marginBottom: 30,
    width: '80%',
  },
  detailText: {
    fontSize: 12,
    color: colors.charcoal,
    marginBottom: 5,
  },
  detailLabel: {
    fontSize: 10,
    color: colors.charcoalLight,
    marginBottom: 2,
  },
  shloka: {
    fontFamily: 'Noto Serif',
    fontSize: 14,
    color: colors.saffron,
    textAlign: 'center',
    fontStyle: 'italic',
    marginTop: 30,
  },
  shlokaTranslation: {
    fontSize: 10,
    color: colors.charcoalLight,
    textAlign: 'center',
    marginTop: 5,
    fontStyle: 'italic',
  },
  tagline: {
    fontSize: 10,
    color: colors.charcoalLight,
    textAlign: 'center',
    marginTop: 30,
    letterSpacing: 1,
  },
  generatedDate: {
    position: 'absolute',
    bottom: 40,
    fontSize: 9,
    color: colors.charcoalLight,
  },
});

const CoverPage: React.FC<CoverPageProps> = ({ userData }) => (
  <Page size="A4" style={localStyles.page}>
    <View style={localStyles.outerBorder} />
    <View style={localStyles.innerBorder} />
    
    {/* Corner ornaments */}
    <Text style={[localStyles.cornerOrnament, { top: 25, left: 25 }]}>☸</Text>
    <Text style={[localStyles.cornerOrnament, { top: 25, right: 25 }]}>☸</Text>
    <Text style={[localStyles.cornerOrnament, { bottom: 25, left: 25 }]}>☸</Text>
    <Text style={[localStyles.cornerOrnament, { bottom: 25, right: 25 }]}>☸</Text>

    <View style={localStyles.content}>
      <Text style={localStyles.logo}>ॐ BoloAstro</Text>
      <Text style={localStyles.logoSubtext}>Vedic Astrology</Text>
      
      <View style={localStyles.dividerLine} />
      
      <Text style={localStyles.title}>Premium Janam Kundali</Text>
      <Text style={localStyles.titleHindi}>प्रीमियम जन्म कुंडली रिपोर्ट</Text>
      
      <Text style={localStyles.name}>{userData.name}</Text>
      
      <View style={localStyles.detailsBox}>
        <Text style={localStyles.detailLabel}>Date of Birth</Text>
        <Text style={localStyles.detailText}>{userData.dob}</Text>
        
        <Text style={[localStyles.detailLabel, { marginTop: 10 }]}>Time of Birth</Text>
        <Text style={localStyles.detailText}>{userData.time}</Text>
        
        <Text style={[localStyles.detailLabel, { marginTop: 10 }]}>Place of Birth</Text>
        <Text style={localStyles.detailText}>{userData.place}</Text>
      </View>
      
      <View style={localStyles.dividerLine} />
      
      <Text style={localStyles.shloka}>॥ कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ॥</Text>
      <Text style={localStyles.shlokaTranslation}>
        "You have the right to work, but never to the fruit of work"
      </Text>
      
      <Text style={localStyles.tagline}>
        Traditional Vedic Astrology + AI Analysis
      </Text>
      
      <Text style={localStyles.generatedDate}>
        Generated on: {new Date().toLocaleDateString('en-IN', { 
          day: 'numeric', 
          month: 'long', 
          year: 'numeric' 
        })}
      </Text>
    </View>
  </Page>
);

export default CoverPage;
