import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { colors } from '../styles';

interface BulletListProps {
  items: string[];
  bulletColor?: string;
  bulletSymbol?: string;
}

const localStyles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  item: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  bullet: {
    width: 15,
    fontSize: 10,
  },
  content: {
    flex: 1,
    fontSize: 10,
    lineHeight: 1.5,
    color: colors.charcoal,
  },
});

const BulletList: React.FC<BulletListProps> = ({ 
  items, 
  bulletColor = colors.gold, 
  bulletSymbol = '•' 
}) => (
  <View style={localStyles.container}>
    {items.map((item, index) => (
      <View key={index} style={localStyles.item}>
        <Text style={[localStyles.bullet, { color: bulletColor }]}>{bulletSymbol}</Text>
        <Text style={localStyles.content}>{item}</Text>
      </View>
    ))}
  </View>
);

export default BulletList;
