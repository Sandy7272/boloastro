import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import { styles, colors } from '../styles';

const PDFFooter: React.FC = () => (
  <View style={styles.footer} fixed>
    <Text style={styles.footerText}>
      © 2025 BoloAstro | Traditional Vedic Astrology + AI Analysis | www.boloastro.com | WhatsApp: +91 98765 43210
    </Text>
  </View>
);

export default PDFFooter;
