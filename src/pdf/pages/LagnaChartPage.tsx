import React from 'react';
import { Page, View, Text, Svg, Rect, Line, G } from '@react-pdf/renderer';
import { styles, colors } from '../styles';
import { PDFHeader, PDFFooter, SectionTitle } from '../components';
import { Planet } from '../types';

interface LagnaChartPageProps {
  planets: Planet[];
}

const LagnaChartPage: React.FC<LagnaChartPageProps> = ({ planets }) => {
  // North Indian chart house positions (center coordinates)
  const housePositions: { [key: number]: { x: number; y: number } } = {
    1: { x: 150, y: 75 },
    2: { x: 75, y: 75 },
    3: { x: 37, y: 112 },
    4: { x: 75, y: 150 },
    5: { x: 37, y: 187 },
    6: { x: 75, y: 225 },
    7: { x: 150, y: 225 },
    8: { x: 225, y: 225 },
    9: { x: 262, y: 187 },
    10: { x: 225, y: 150 },
    11: { x: 262, y: 112 },
    12: { x: 225, y: 75 },
  };

  // Group planets by house
  const planetsByHouse: { [key: number]: Planet[] } = {};
  planets.forEach(planet => {
    if (!planetsByHouse[planet.house]) {
      planetsByHouse[planet.house] = [];
    }
    planetsByHouse[planet.house].push(planet);
  });

  const getPlanetColor = (label: string) => {
    const colorMap: { [key: string]: string } = {
      'Su': '#FF6B00',
      'Mo': '#FFFFFF',
      'Ma': '#DC2626',
      'Me': '#22C55E',
      'Ju': '#EAB308',
      'Ve': '#EC4899',
      'Sa': '#1E40AF',
      'Ra': '#6B7280',
      'Ke': '#A855F7',
      'As': colors.gold,
    };
    return colorMap[label] || colors.charcoal;
  };

  return (
    <Page size="A4" style={styles.page}>
      <PDFHeader pageNumber={3} />
      
      <SectionTitle title="Lagna Chart (Birth Chart)" titleHindi="लग्न कुंडली" showOm />
      
      <Text style={styles.bodyText}>
        The Lagna Chart or Rashi Chart is the primary chart in Vedic Astrology. It shows 
        the position of all planets at the time of your birth. The 1st house (marked as 
        the top-center diamond) represents your Lagna or Ascendant.
      </Text>
      
      <View style={{ alignItems: 'center', marginTop: 20, marginBottom: 20 }}>
        <Svg width={300} height={300} viewBox="0 0 300 300">
          {/* Background */}
          <Rect x="0" y="0" width="300" height="300" fill={colors.creamLight} />
          
          {/* Outer border */}
          <Rect x="0" y="0" width="300" height="300" fill="none" stroke={colors.gold} strokeWidth="3" />
          
          {/* Inner square */}
          <Rect x="75" y="75" width="150" height="150" fill="none" stroke={colors.gold} strokeWidth="2" />
          
          {/* Diagonal lines from corners to inner square */}
          <Line x1="0" y1="0" x2="75" y2="75" stroke={colors.gold} strokeWidth="2" />
          <Line x1="300" y1="0" x2="225" y2="75" stroke={colors.gold} strokeWidth="2" />
          <Line x1="0" y1="300" x2="75" y2="225" stroke={colors.gold} strokeWidth="2" />
          <Line x1="300" y1="300" x2="225" y2="225" stroke={colors.gold} strokeWidth="2" />
          
          {/* Cross lines through center */}
          <Line x1="150" y1="0" x2="75" y2="75" stroke={colors.gold} strokeWidth="2" />
          <Line x1="150" y1="0" x2="225" y2="75" stroke={colors.gold} strokeWidth="2" />
          <Line x1="0" y1="150" x2="75" y2="75" stroke={colors.gold} strokeWidth="2" />
          <Line x1="0" y1="150" x2="75" y2="225" stroke={colors.gold} strokeWidth="2" />
          <Line x1="150" y1="300" x2="75" y2="225" stroke={colors.gold} strokeWidth="2" />
          <Line x1="150" y1="300" x2="225" y2="225" stroke={colors.gold} strokeWidth="2" />
          <Line x1="300" y1="150" x2="225" y2="75" stroke={colors.gold} strokeWidth="2" />
          <Line x1="300" y1="150" x2="225" y2="225" stroke={colors.gold} strokeWidth="2" />
        </Svg>
        
        {/* Overlay house numbers and planets as text */}
        <View style={{ position: 'absolute', width: 300, height: 300 }}>
          {Object.entries(housePositions).map(([house, pos]) => (
            <View 
              key={house}
              style={{
                position: 'absolute',
                left: pos.x - 25,
                top: pos.y - 15,
                width: 50,
                alignItems: 'center',
              }}
            >
              <Text style={{ fontSize: 8, color: colors.charcoalLight }}>{house}</Text>
              {planetsByHouse[parseInt(house)]?.map((planet, idx) => (
                <Text 
                  key={idx} 
                  style={{ 
                    fontSize: 9, 
                    color: getPlanetColor(planet.label),
                    fontWeight: 'bold',
                  }}
                >
                  {planet.label}{planet.isRetrograde ? '(R)' : ''}
                </Text>
              ))}
            </View>
          ))}
        </View>
      </View>
      
      <Text style={[styles.bodyText, { textAlign: 'center', fontWeight: 'bold', color: colors.gold }]}>
        North Indian Style Lagna Kundali
      </Text>
      
      {/* Planet Legend */}
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginTop: 15, gap: 10 }}>
        {planets.map((planet, idx) => (
          <View key={idx} style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15, marginBottom: 5 }}>
            <View style={{ 
              width: 12, 
              height: 12, 
              backgroundColor: getPlanetColor(planet.label), 
              borderRadius: 6,
              marginRight: 5,
              borderWidth: planet.label === 'Mo' ? 1 : 0,
              borderColor: colors.charcoal,
            }} />
            <Text style={{ fontSize: 9, color: colors.charcoal }}>
              {planet.label} - {planet.name.split(' ')[0]} (H{planet.house})
            </Text>
          </View>
        ))}
      </View>
      
      <View style={{ marginTop: 20, padding: 15, backgroundColor: colors.goldLight, borderRadius: 8 }}>
        <Text style={{ fontSize: 10, fontWeight: 'bold', color: colors.charcoal, marginBottom: 5 }}>
          Chart Reading Notes:
        </Text>
        <Text style={{ fontSize: 9, color: colors.charcoal, lineHeight: 1.5 }}>
          • House 1 (top-center) is your Ascendant/Lagna{'\n'}
          • Houses are numbered anti-clockwise{'\n'}
          • (R) indicates retrograde planets{'\n'}
          • As = Ascendant, Su = Sun, Mo = Moon, Ma = Mars, Me = Mercury,{'\n'}
            Ju = Jupiter, Ve = Venus, Sa = Saturn, Ra = Rahu, Ke = Ketu
        </Text>
      </View>
      
      <PDFFooter />
    </Page>
  );
};

export default LagnaChartPage;
