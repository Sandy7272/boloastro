import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { colors } from '../styles';

interface DecorativeDividerProps {
  symbol?: string;
}

const localStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: colors.gold,
  },
  symbol: {
    marginHorizontal: 10,
    fontSize: 14,
    color: colors.gold,
  },
});

const DecorativeDivider: React.FC<DecorativeDividerProps> = ({ symbol = '✦' }) => (
  <View style={localStyles.container}>
    <View style={localStyles.line} />
    <Text style={localStyles.symbol}>{symbol}</Text>
    <View style={localStyles.line} />
  </View>
);

export default DecorativeDivider;
