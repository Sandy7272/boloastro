import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { colors } from '../styles';

interface InfoBoxProps {
  title?: string;
  content: string;
  variant?: 'info' | 'warning' | 'highlight';
}

const localStyles = StyleSheet.create({
  info: {
    backgroundColor: colors.creamLight,
    borderWidth: 1,
    borderColor: colors.gold,
    borderRadius: 4,
    padding: 12,
    marginVertical: 8,
  },
  warning: {
    backgroundColor: '#FFF5F5',
    borderWidth: 1,
    borderColor: colors.burgundy,
    borderRadius: 4,
    padding: 12,
    marginVertical: 8,
  },
  highlight: {
    backgroundColor: colors.goldLight,
    borderLeftWidth: 4,
    borderLeftColor: colors.gold,
    padding: 12,
    marginVertical: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 11,
    color: colors.charcoal,
    marginBottom: 4,
  },
  content: {
    fontSize: 10,
    lineHeight: 1.5,
    color: colors.charcoal,
  },
});

const InfoBox: React.FC<InfoBoxProps> = ({ title, content, variant = 'info' }) => (
  <View style={localStyles[variant]}>
    {title && <Text style={localStyles.title}>{title}</Text>}
    <Text style={localStyles.content}>{content}</Text>
  </View>
);

export default InfoBox;
