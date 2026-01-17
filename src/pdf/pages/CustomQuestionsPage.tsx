import React from 'react';
import { Page, View, Text } from '@react-pdf/renderer';
import { styles, colors } from '../styles';
import { PDFHeader, PDFFooter, SectionTitle, DecorativeDivider } from '../components';
import { CustomQuestion } from '../types';

interface CustomQuestionsPageProps { questions?: CustomQuestion[]; }

const CustomQuestionsPage: React.FC<CustomQuestionsPageProps> = ({ questions }) => (
  <Page size="A4" style={styles.page}>
    <PDFHeader pageNumber={18} />
    <SectionTitle title="Your Personal Questions" titleHindi="आपके व्यक्तिगत प्रश्न" showOm />
    
    <Text style={styles.bodyText}>
      Below are personalized answers to your specific questions, analyzed based on 
      your birth chart, current planetary transits, and running Dasha period.
    </Text>
    
    <DecorativeDivider symbol="❓" />
    
    {questions && questions.length > 0 ? (
      questions.map((qa, i) => (
        <View key={i} style={{ marginBottom: 20 }}>
          <View style={{ backgroundColor: colors.gold, borderTopLeftRadius: 8, borderTopRightRadius: 8, padding: 12 }}>
            <Text style={{ fontSize: 10, color: colors.creamLight, marginBottom: 4 }}>Question {i + 1}</Text>
            <Text style={{ fontSize: 12, fontWeight: 'bold', color: colors.white }}>{qa.question}</Text>
          </View>
          <View style={{ backgroundColor: colors.creamLight, borderBottomLeftRadius: 8, borderBottomRightRadius: 8, padding: 15, borderWidth: 1, borderTopWidth: 0, borderColor: colors.gold }}>
            <Text style={{ fontSize: 10, color: colors.charcoal, lineHeight: 1.6 }}>{qa.answer}</Text>
          </View>
        </View>
      ))
    ) : (
      <View style={{ padding: 30, backgroundColor: colors.goldLight, borderRadius: 8, alignItems: 'center' }}>
        <Text style={{ fontSize: 24, marginBottom: 10 }}>📝</Text>
        <Text style={{ fontSize: 12, fontWeight: 'bold', color: colors.charcoal, marginBottom: 5 }}>No Custom Questions</Text>
        <Text style={{ fontSize: 10, color: colors.charcoalLight, textAlign: 'center' }}>
          You haven't submitted any personal questions.{'\n'}
          Contact us on WhatsApp to add custom questions to your report.
        </Text>
      </View>
    )}
    
    <View style={{ marginTop: 20, padding: 15, backgroundColor: colors.goldLight, borderRadius: 8 }}>
      <Text style={{ fontSize: 10, fontWeight: 'bold', color: colors.gold, marginBottom: 8 }}>💬 Have More Questions?</Text>
      <Text style={{ fontSize: 9, color: colors.charcoal, lineHeight: 1.5 }}>
        Our Premium plan includes up to 3 personalized questions. For additional queries:{'\n'}
        • WhatsApp us at +91 98765 43210{'\n'}
        • Email: questions@boloastro.com{'\n'}
        • VIP members get unlimited questions
      </Text>
    </View>
    
    <PDFFooter />
  </Page>
);

export default CustomQuestionsPage;
