import { StyleSheet, Font } from '@react-pdf/renderer';

// Register fonts - using system fonts for now, can be replaced with custom fonts
Font.register({
  family: 'Noto Serif',
  fonts: [
    { src: 'https://fonts.gstatic.com/s/notoserif/v23/ga6iaw1J5X9T9RW6j9bNVls-hfgvz8JcMofYTa32J4wsL2JAlAhZqFCjwM0Lhq_Szw.ttf' },
    { src: 'https://fonts.gstatic.com/s/notoserif/v23/ga6iaw1J5X9T9RW6j9bNVls-hfgvz8JcMofYTa32J4wsL2JAlAhZT1OjwM0Lhq_Szw.ttf', fontWeight: 'bold' },
  ],
});

Font.register({
  family: 'Noto Sans',
  fonts: [
    { src: 'https://fonts.gstatic.com/s/notosans/v36/o-0mIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyD9A-9a6Vc.ttf' },
    { src: 'https://fonts.gstatic.com/s/notosans/v36/o-0mIpQlx3QUlC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyAOBu9a6Vc.ttf', fontWeight: 'bold' },
  ],
});

// Color Palette
export const colors = {
  cream: '#FDF8E8',
  creamLight: '#FFFDF7',
  gold: '#D4AF37',
  goldLight: '#F5E6C4',
  goldDark: '#B8960C',
  saffron: '#FF6B00',
  saffronLight: '#FF8533',
  charcoal: '#1A1A2E',
  charcoalLight: '#2D2D44',
  burgundy: '#800020',
  white: '#FFFFFF',
  border: '#E8D5A3',
};

// Base styles
export const styles = StyleSheet.create({
  // Page
  page: {
    backgroundColor: colors.cream,
    paddingTop: 60,
    paddingBottom: 50,
    paddingHorizontal: 40,
    fontFamily: 'Noto Sans',
    fontSize: 11,
    color: colors.charcoal,
    position: 'relative',
  },

  // Cover page specific
  coverPage: {
    backgroundColor: colors.cream,
    padding: 0,
    fontFamily: 'Noto Sans',
    position: 'relative',
  },

  // Header
  header: {
    position: 'absolute',
    top: 20,
    left: 40,
    right: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.gold,
  },

  headerLogo: {
    width: 60,
    height: 20,
  },

  headerTitle: {
    fontFamily: 'Noto Serif',
    fontSize: 10,
    color: colors.gold,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },

  pageNumber: {
    fontSize: 9,
    color: colors.charcoalLight,
  },

  // Footer
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 40,
    right: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },

  footerText: {
    fontSize: 8,
    color: colors.charcoalLight,
    textAlign: 'center',
  },

  // Section titles
  sectionTitle: {
    fontFamily: 'Noto Serif',
    fontSize: 18,
    color: colors.gold,
    marginBottom: 15,
    paddingBottom: 8,
    borderBottomWidth: 2,
    borderBottomColor: colors.gold,
  },

  sectionSubtitle: {
    fontFamily: 'Noto Serif',
    fontSize: 14,
    color: colors.saffron,
    marginTop: 15,
    marginBottom: 8,
  },

  // Text styles
  bodyText: {
    fontSize: 11,
    lineHeight: 1.6,
    color: colors.charcoal,
    marginBottom: 8,
    textAlign: 'justify',
  },

  hindiText: {
    fontSize: 12,
    color: colors.saffron,
    marginBottom: 5,
  },

  boldText: {
    fontWeight: 'bold',
  },

  italicText: {
    fontStyle: 'italic',
    color: colors.charcoalLight,
  },

  // Tables
  table: {
    width: '100%',
    marginVertical: 10,
  },

  tableHeader: {
    flexDirection: 'row',
    backgroundColor: colors.gold,
    padding: 8,
  },

  tableHeaderCell: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 10,
    color: colors.white,
    textAlign: 'center',
  },

  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    padding: 8,
  },

  tableRowAlternate: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    backgroundColor: colors.goldLight,
    padding: 8,
  },

  tableCell: {
    flex: 1,
    fontSize: 10,
    textAlign: 'center',
    color: colors.charcoal,
  },

  // Cards/Boxes
  infoBox: {
    backgroundColor: colors.creamLight,
    borderWidth: 1,
    borderColor: colors.gold,
    borderRadius: 4,
    padding: 12,
    marginVertical: 8,
  },

  warningBox: {
    backgroundColor: '#FFF5F5',
    borderWidth: 1,
    borderColor: colors.burgundy,
    borderRadius: 4,
    padding: 12,
    marginVertical: 8,
  },

  highlightBox: {
    backgroundColor: colors.goldLight,
    borderLeftWidth: 4,
    borderLeftColor: colors.gold,
    padding: 12,
    marginVertical: 8,
  },

  // Decorative
  divider: {
    height: 2,
    backgroundColor: colors.gold,
    marginVertical: 15,
  },

  ornamentDivider: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
  },

  ornamentLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.gold,
  },

  ornamentCenter: {
    marginHorizontal: 10,
    fontSize: 14,
    color: colors.gold,
  },

  // Cover page elements
  coverBorder: {
    position: 'absolute',
    top: 20,
    left: 20,
    right: 20,
    bottom: 20,
    borderWidth: 3,
    borderColor: colors.gold,
  },

  coverInnerBorder: {
    position: 'absolute',
    top: 28,
    left: 28,
    right: 28,
    bottom: 28,
    borderWidth: 1,
    borderColor: colors.gold,
  },

  coverContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 60,
  },

  coverLogo: {
    width: 120,
    height: 40,
    marginBottom: 30,
  },

  coverTitle: {
    fontFamily: 'Noto Serif',
    fontSize: 28,
    color: colors.gold,
    textAlign: 'center',
    marginBottom: 10,
  },

  coverSubtitle: {
    fontFamily: 'Noto Serif',
    fontSize: 16,
    color: colors.saffron,
    textAlign: 'center',
    marginBottom: 40,
  },

  coverName: {
    fontFamily: 'Noto Serif',
    fontSize: 22,
    color: colors.charcoal,
    textAlign: 'center',
    marginBottom: 20,
  },

  coverDetails: {
    fontSize: 12,
    color: colors.charcoalLight,
    textAlign: 'center',
    marginBottom: 5,
  },

  coverShloka: {
    fontFamily: 'Noto Serif',
    fontSize: 14,
    color: colors.saffron,
    textAlign: 'center',
    marginTop: 40,
    fontStyle: 'italic',
  },

  coverTagline: {
    fontSize: 10,
    color: colors.charcoalLight,
    textAlign: 'center',
    marginTop: 5,
  },

  // Watermark
  watermark: {
    position: 'absolute',
    top: '35%',
    left: '25%',
    width: 300,
    height: 300,
    opacity: 0.03,
  },

  // Grid layouts
  twoColumn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  column: {
    width: '48%',
  },

  threeColumn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  columnThird: {
    width: '31%',
  },

  // List styles
  listItem: {
    flexDirection: 'row',
    marginBottom: 6,
  },

  listBullet: {
    width: 20,
    fontSize: 10,
    color: colors.gold,
  },

  listContent: {
    flex: 1,
    fontSize: 10,
    color: colors.charcoal,
  },

  // Chart container
  chartContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    padding: 20,
    backgroundColor: colors.creamLight,
    borderWidth: 1,
    borderColor: colors.gold,
    borderRadius: 4,
  },

  // Gemstone card
  gemstoneCard: {
    flexDirection: 'row',
    backgroundColor: colors.creamLight,
    borderWidth: 2,
    borderColor: colors.gold,
    borderRadius: 8,
    padding: 15,
    marginVertical: 10,
  },

  gemstoneIcon: {
    width: 60,
    height: 60,
    marginRight: 15,
  },

  gemstoneInfo: {
    flex: 1,
  },

  // Lucky factors grid
  luckyGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  luckyItem: {
    width: '48%',
    backgroundColor: colors.creamLight,
    borderWidth: 1,
    borderColor: colors.gold,
    borderRadius: 4,
    padding: 12,
    marginBottom: 10,
    alignItems: 'center',
  },

  luckyLabel: {
    fontSize: 9,
    color: colors.charcoalLight,
    marginBottom: 4,
    textTransform: 'uppercase',
  },

  luckyValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.gold,
  },

  // Contact section
  contactCard: {
    backgroundColor: colors.goldLight,
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    marginVertical: 10,
  },

  contactIcon: {
    fontSize: 20,
    color: colors.gold,
    marginBottom: 5,
  },

  contactLabel: {
    fontSize: 9,
    color: colors.charcoalLight,
    textTransform: 'uppercase',
    marginBottom: 3,
  },

  contactValue: {
    fontSize: 12,
    color: colors.charcoal,
    fontWeight: 'bold',
  },
});

export default styles;
