import React from 'react';
import { Page, View, Text } from '@react-pdf/renderer';
import { styles, colors } from '../styles';
import { PDFHeader, PDFFooter, SectionTitle, BulletList } from '../components';
import { KundaliData } from '../types';

interface RemediesPageProps { remedies: KundaliData['remedies']; }

const RemediesPage: React.FC<RemediesPageProps> = ({ remedies }) => (
  <Page size="A4" style={styles.page}>
    <PDFHeader pageNumber={12} />
    <SectionTitle title="Remedies & Solutions" titleHindi="उपाय और समाधान" showOm />
    
    <Text style={styles.sectionSubtitle}>🕉️ Mantras (मंत्र)</Text>
    <BulletList items={remedies.mantras} bulletColor={colors.saffron} />
    
    <Text style={styles.sectionSubtitle}>🪔 Pujas (पूजा)</Text>
    <BulletList items={remedies.pujas} bulletColor={colors.gold} />
    
    <Text style={styles.sectionSubtitle}>🍽️ Vrats (व्रत)</Text>
    <BulletList items={remedies.vrats} />
    
    <Text style={styles.sectionSubtitle}>🎁 Donations (दान)</Text>
    <BulletList items={remedies.donations} />
    
    <Text style={styles.sectionSubtitle}>🛕 Temple Visits (मंदिर दर्शन)</Text>
    <BulletList items={remedies.templeVisits} />
    
    <PDFFooter />
  </Page>
);

export default RemediesPage;
