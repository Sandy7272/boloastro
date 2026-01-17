import React from 'react';
import { Page, View, Text } from '@react-pdf/renderer';
import { styles, colors } from '../styles';
import { PDFHeader, PDFFooter, SectionTitle } from '../components';

const PanditMessagePage: React.FC<{ panditName?: string; panditMessage?: string }> = ({ panditName = 'Pt. Shrinivas Sharma', panditMessage }) => (
  <Page size="A4" style={styles.page}>
    <PDFHeader pageNumber={19} />
    <SectionTitle title="Pandit's Message" titleHindi="पंडित जी का संदेश" showOm />
    
    <View style={{ alignItems: 'center', marginVertical: 20 }}>
      <View style={{ width: 80, height: 80, borderRadius: 40, backgroundColor: colors.goldLight, alignItems: 'center', justifyContent: 'center', borderWidth: 3, borderColor: colors.gold }}>
        <Text style={{ fontSize: 40 }}>🙏</Text>
      </View>
      <Text style={{ fontSize: 14, fontWeight: 'bold', color: colors.gold, marginTop: 10, fontFamily: 'Noto Serif' }}>{panditName}</Text>
      <Text style={{ fontSize: 10, color: colors.charcoalLight }}>Vedic Astrologer, BoloAstro</Text>
    </View>
    
    <View style={{ padding: 25, backgroundColor: colors.creamLight, borderRadius: 12, borderWidth: 2, borderColor: colors.gold }}>
      <Text style={{ fontSize: 14, color: colors.saffron, textAlign: 'center', marginBottom: 15, fontFamily: 'Noto Serif' }}>
        ॥ शुभ आशीर्वाद ॥
      </Text>
      <Text style={{ fontSize: 11, color: colors.charcoal, lineHeight: 1.8, textAlign: 'justify' }}>
        {panditMessage || `Dear devotee,

It has been my privilege to analyze your Janam Kundali. Your horoscope reveals a life blessed with potential and opportunities. With the grace of the divine and your positive karma, all obstacles can be overcome.

Remember that the planets incline, they do not compel. Your free will and righteous actions (dharma) are the ultimate determiners of your destiny. Use this knowledge as a guide, not as a fixed fate.

I pray to Lord Ganesha to remove all obstacles from your path and to Goddess Lakshmi to bless you with prosperity and happiness.

May you achieve success in all your endeavors and live a life filled with joy, health, and spiritual growth.`}
      </Text>
      
      <View style={{ marginTop: 20, alignItems: 'center' }}>
        <Text style={{ fontSize: 12, color: colors.saffron, fontFamily: 'Noto Serif' }}>
          सर्वे भवन्तु सुखिनः, सर्वे सन्तु निरामयाः।
        </Text>
        <Text style={{ fontSize: 9, color: colors.charcoalLight, fontStyle: 'italic', marginTop: 5 }}>
          "May all beings be happy, may all beings be healthy"
        </Text>
      </View>
      
      <View style={{ marginTop: 20, alignItems: 'flex-end' }}>
        <Text style={{ fontSize: 11, fontWeight: 'bold', color: colors.gold }}>— {panditName}</Text>
        <Text style={{ fontSize: 9, color: colors.charcoalLight }}>BoloAstro</Text>
      </View>
    </View>
    
    <View style={{ marginTop: 20, padding: 15, backgroundColor: colors.goldLight, borderRadius: 8, alignItems: 'center' }}>
      <Text style={{ fontSize: 12, color: colors.gold, fontFamily: 'Noto Serif' }}>🙏 ॐ शांति शांति शांति 🙏</Text>
    </View>
    
    <PDFFooter />
  </Page>
);

export default PanditMessagePage;
