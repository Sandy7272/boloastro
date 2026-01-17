import React from 'react';
import { Page, View, Text } from '@react-pdf/renderer';
import { styles, colors } from '../styles';
import { PDFHeader, PDFFooter, SectionTitle } from '../components';
import { Gemstone } from '../types';

interface GemstonePageProps { gemstone: Gemstone; }

const GemstonePage: React.FC<GemstonePageProps> = ({ gemstone }) => (
  <Page size="A4" style={styles.page}>
    <PDFHeader pageNumber={13} />
    <SectionTitle title="Gemstone Recommendation" titleHindi="रत्न सुझाव" showOm />
    
    <View style={{ alignItems: 'center', marginVertical: 20 }}>
      <View style={{ width: 80, height: 80, borderRadius: 40, backgroundColor: '#DC2626', alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
        <Text style={{ fontSize: 30, color: colors.white }}>💎</Text>
      </View>
      <Text style={{ fontSize: 18, fontWeight: 'bold', color: colors.gold, fontFamily: 'Noto Serif' }}>{gemstone.name}</Text>
      <Text style={{ fontSize: 14, color: colors.saffron }}>{gemstone.nameHindi}</Text>
    </View>
    
    <View style={{ backgroundColor: colors.goldLight, borderRadius: 8, padding: 15, marginBottom: 15 }}>
      <Text style={{ fontSize: 10, fontWeight: 'bold', marginBottom: 5 }}>Why This Stone?</Text>
      <Text style={{ fontSize: 10, color: colors.charcoal, lineHeight: 1.5 }}>{gemstone.reason}</Text>
    </View>
    
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
      {[
        { label: 'Day', value: gemstone.day },
        { label: 'Finger', value: gemstone.finger },
        { label: 'Weight', value: gemstone.weight },
        { label: 'Metal', value: gemstone.metal },
      ].map((item, i) => (
        <View key={i} style={{ width: '48%', backgroundColor: colors.creamLight, borderRadius: 8, padding: 12, borderWidth: 1, borderColor: colors.gold }}>
          <Text style={{ fontSize: 9, color: colors.charcoalLight }}>{item.label}</Text>
          <Text style={{ fontSize: 11, fontWeight: 'bold', color: colors.charcoal, marginTop: 4 }}>{item.value}</Text>
        </View>
      ))}
    </View>
    
    <View style={{ marginTop: 15, padding: 15, backgroundColor: colors.creamLight, borderRadius: 8, borderWidth: 1, borderColor: colors.gold }}>
      <Text style={{ fontSize: 10, fontWeight: 'bold', marginBottom: 5 }}>Wearing Method:</Text>
      <Text style={{ fontSize: 10, color: colors.charcoal, lineHeight: 1.5 }}>{gemstone.wearingMethod}</Text>
    </View>
    
    {gemstone.mantra && (
      <View style={{ marginTop: 15, padding: 15, backgroundColor: colors.goldLight, borderRadius: 8, alignItems: 'center' }}>
        <Text style={{ fontSize: 9, color: colors.charcoalLight, marginBottom: 5 }}>Mantra to recite:</Text>
        <Text style={{ fontSize: 12, color: colors.saffron, fontFamily: 'Noto Serif' }}>{gemstone.mantra}</Text>
      </View>
    )}
    
    <PDFFooter />
  </Page>
);

export default GemstonePage;
