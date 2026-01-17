import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import { styles, colors } from '../styles';

interface PDFHeaderProps {
  pageNumber?: number;
  totalPages?: number;
}

const PDFHeader: React.FC<PDFHeaderProps> = ({ pageNumber, totalPages = 20 }) => (
  <View style={styles.header} fixed>
    <View>
      <Text style={{ fontSize: 12, fontWeight: 'bold', color: colors.gold, fontFamily: 'Noto Serif' }}>
        ॐ BoloAstro
      </Text>
    </View>
    <Text style={styles.headerTitle}>Premium Kundali Report</Text>
    {pageNumber && (
      <Text style={styles.pageNumber}>
        Page {pageNumber} of {totalPages}
      </Text>
    )}
  </View>
);

export default PDFHeader;
