import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { colors } from '../styles';

interface SectionTitleProps {
  title: string;
  titleHindi?: string;
  showOm?: boolean;
}

const localStyles = StyleSheet.create({
  container: {
    marginBottom: 15,
    paddingBottom: 8,
    borderBottomWidth: 2,
    borderBottomColor: colors.gold,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  om: {
    fontSize: 16,
    color: colors.saffron,
    marginRight: 8,
  },
  title: {
    fontFamily: 'Noto Serif',
    fontSize: 18,
    color: colors.gold,
  },
  hindiTitle: {
    fontSize: 12,
    color: colors.saffron,
    marginTop: 2,
  },
});

const SectionTitle: React.FC<SectionTitleProps> = ({ title, titleHindi, showOm = false }) => (
  <View style={localStyles.container}>
    <View style={localStyles.titleRow}>
      {showOm && <Text style={localStyles.om}>ॐ</Text>}
      <Text style={localStyles.title}>{title}</Text>
    </View>
    {titleHindi && <Text style={localStyles.hindiTitle}>{titleHindi}</Text>}
  </View>
);

export default SectionTitle;
