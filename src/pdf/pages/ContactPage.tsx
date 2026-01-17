import React from 'react';
import { Page, View, Text } from '@react-pdf/renderer';
import { styles, colors } from '../styles';
import { PDFHeader, PDFFooter, SectionTitle } from '../components';

interface ContactPageProps { panditName?: string; panditMessage?: string; }

const ContactPage: React.FC<ContactPageProps> = ({ panditName, panditMessage }) => (
  <Page size="A4" style={styles.page}>
    <PDFHeader pageNumber={20} />
    <SectionTitle title="Pandit's Blessing & Contact" titleHindi="पंडित जी का आशीर्वाद" showOm />
    
    {panditMessage && (
      <View style={{ padding: 20, backgroundColor: colors.goldLight, borderRadius: 8, marginBottom: 20, borderWidth: 2, borderColor: colors.gold }}>
        <Text style={{ fontSize: 11, color: colors.charcoal, lineHeight: 1.6, fontStyle: 'italic' }}>{panditMessage}</Text>
        {panditName && <Text style={{ fontSize: 12, fontWeight: 'bold', color: colors.saffron, marginTop: 15, textAlign: 'right' }}>— {panditName}</Text>}
      </View>
    )}
    
    <Text style={styles.sectionSubtitle}>📞 Contact Us</Text>
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
      {[
        { icon: '💬', label: 'WhatsApp', value: '+91 98765 43210' },
        { icon: '📧', label: 'Email', value: 'contact@boloastro.com' },
        { icon: '🌐', label: 'Website', value: 'www.boloastro.com' },
      ].map((c, i) => (
        <View key={i} style={{ width: '31%', backgroundColor: colors.creamLight, borderRadius: 8, padding: 15, alignItems: 'center', borderWidth: 1, borderColor: colors.gold }}>
          <Text style={{ fontSize: 20 }}>{c.icon}</Text>
          <Text style={{ fontSize: 8, color: colors.charcoalLight, marginTop: 5, textTransform: 'uppercase' }}>{c.label}</Text>
          <Text style={{ fontSize: 9, fontWeight: 'bold', color: colors.charcoal, marginTop: 3, textAlign: 'center' }}>{c.value}</Text>
        </View>
      ))}
    </View>
    
    <View style={{ marginTop: 30, padding: 20, backgroundColor: colors.gold, borderRadius: 8, alignItems: 'center' }}>
      <Text style={{ fontSize: 14, color: colors.white, fontFamily: 'Noto Serif' }}>🙏 धन्यवाद 🙏</Text>
      <Text style={{ fontSize: 10, color: colors.white, marginTop: 5 }}>Thank you for choosing BoloAstro</Text>
      <Text style={{ fontSize: 9, color: colors.creamLight, marginTop: 10, fontStyle: 'italic' }}>
        "सर्वे भवन्तु सुखिनः, सर्वे सन्तु निरामयाः"
      </Text>
    </View>
    
    <PDFFooter />
  </Page>
);

export default ContactPage;
