import React from 'react';
import { Page, View, Text } from '@react-pdf/renderer';
import { styles, colors } from '../styles';
import { PDFHeader, PDFFooter, SectionTitle, DecorativeDivider } from '../components';
import { Muhurat } from '../types';

interface MuhuratPageProps { muhurats: Muhurat[]; }

const MuhuratPage: React.FC<MuhuratPageProps> = ({ muhurats }) => (
  <Page size="A4" style={styles.page}>
    <PDFHeader pageNumber={16} />
    <SectionTitle title="Shubh Muhurat" titleHindi="शुभ मुहूर्त" showOm />
    
    <Text style={styles.bodyText}>
      Muhurat is the most auspicious time to begin important activities. Starting any 
      significant work during Shubh Muhurat ensures success and removes obstacles. 
      Below are personalized auspicious dates based on your birth chart.
    </Text>
    
    <DecorativeDivider symbol="☸" />
    
    {muhurats.map((muhurat, i) => (
      <View key={i} style={{ marginBottom: 15, backgroundColor: colors.creamLight, borderRadius: 8, borderWidth: 1, borderColor: colors.gold, overflow: 'hidden' }}>
        <View style={{ backgroundColor: colors.gold, padding: 10, flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontSize: 16, marginRight: 8 }}>
            {muhurat.purpose === 'Marriage' ? '💒' : 
             muhurat.purpose === 'Job Joining' ? '💼' : 
             muhurat.purpose === 'Business Start' ? '🏪' : '🏠'}
          </Text>
          <View>
            <Text style={{ fontSize: 12, fontWeight: 'bold', color: colors.white }}>{muhurat.purpose}</Text>
            {muhurat.purposeHindi && <Text style={{ fontSize: 9, color: colors.creamLight }}>{muhurat.purposeHindi}</Text>}
          </View>
        </View>
        <View style={{ padding: 12 }}>
          <Text style={{ fontSize: 9, color: colors.charcoalLight, marginBottom: 8 }}>Auspicious Dates:</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
            {muhurat.dates.map((date, j) => (
              <View key={j} style={{ backgroundColor: colors.goldLight, borderRadius: 4, paddingVertical: 4, paddingHorizontal: 8 }}>
                <Text style={{ fontSize: 10, color: colors.charcoal, fontWeight: 'bold' }}>{date}</Text>
              </View>
            ))}
          </View>
          {muhurat.notes && (
            <Text style={{ fontSize: 9, color: colors.saffron, marginTop: 8, fontStyle: 'italic' }}>
              📌 {muhurat.notes}
            </Text>
          )}
        </View>
      </View>
    ))}
    
    <View style={{ padding: 12, backgroundColor: colors.goldLight, borderRadius: 8, marginTop: 10 }}>
      <Text style={{ fontSize: 10, fontWeight: 'bold', color: colors.gold, marginBottom: 5 }}>📿 General Muhurat Guidelines</Text>
      <Text style={{ fontSize: 9, color: colors.charcoal, lineHeight: 1.5 }}>
        • Avoid starting important work during Rahu Kaal{'\n'}
        • Brahma Muhurta (4-6 AM) is ideal for spiritual activities{'\n'}
        • Avoid Amavasya for new beginnings (except Pitru Karma){'\n'}
        • Purnima is excellent for new ventures and celebrations
      </Text>
    </View>
    
    <PDFFooter />
  </Page>
);

export default MuhuratPage;
