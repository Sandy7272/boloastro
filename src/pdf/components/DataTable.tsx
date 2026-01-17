import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { colors } from '../styles';

interface DataTableProps {
  headers: string[];
  rows: string[][];
  columnWidths?: number[];
}

const localStyles = StyleSheet.create({
  table: {
    width: '100%',
    marginVertical: 10,
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: colors.gold,
    padding: 8,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  headerCell: {
    fontWeight: 'bold',
    fontSize: 10,
    color: colors.white,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    padding: 8,
  },
  rowAlternate: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    backgroundColor: colors.goldLight,
    padding: 8,
  },
  cell: {
    fontSize: 10,
    textAlign: 'center',
    color: colors.charcoal,
  },
});

const DataTable: React.FC<DataTableProps> = ({ headers, rows, columnWidths }) => {
  const getWidth = (index: number) => {
    if (columnWidths && columnWidths[index]) {
      return `${columnWidths[index]}%`;
    }
    return `${100 / headers.length}%`;
  };

  return (
    <View style={localStyles.table}>
      <View style={localStyles.headerRow}>
        {headers.map((header, index) => (
          <Text key={index} style={[localStyles.headerCell, { width: getWidth(index) }]}>
            {header}
          </Text>
        ))}
      </View>
      {rows.map((row, rowIndex) => (
        <View key={rowIndex} style={rowIndex % 2 === 0 ? localStyles.row : localStyles.rowAlternate}>
          {row.map((cell, cellIndex) => (
            <Text key={cellIndex} style={[localStyles.cell, { width: getWidth(cellIndex) }]}>
              {cell}
            </Text>
          ))}
        </View>
      ))}
    </View>
  );
};

export default DataTable;
