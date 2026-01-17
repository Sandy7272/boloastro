import React from 'react';
import { Document } from '@react-pdf/renderer';
import { KundaliPDFProps } from './types';
import CoverPage from './pages/CoverPage';
import IntroductionPage from './pages/IntroductionPage';
import BirthDetailsPage from './pages/BirthDetailsPage';
import LagnaChartPage from './pages/LagnaChartPage';
import PlanetaryPositionsPage from './pages/PlanetaryPositionsPage';
import PersonalityPage from './pages/PersonalityPage';
import CareerPage from './pages/CareerPage';
import WealthPage from './pages/WealthPage';
import MarriagePage from './pages/MarriagePage';
import HealthPage from './pages/HealthPage';
import ChildrenPage from './pages/ChildrenPage';
import DoshaPage from './pages/DoshaPage';
import RemediesPage from './pages/RemediesPage';
import GemstonePage from './pages/GemstonePage';
import LuckyFactorsPage from './pages/LuckyFactorsPage';
import YearlyPredictionPage from './pages/YearlyPredictionPage';
import MuhuratPage from './pages/MuhuratPage';
import ForeignTravelPage from './pages/ForeignTravelPage';
import CustomQuestionsPage from './pages/CustomQuestionsPage';
import PanditMessagePage from './pages/PanditMessagePage';
import ContactPage from './pages/ContactPage';

const KundaliPDF: React.FC<KundaliPDFProps> = ({ data }) => (
  <Document 
    title={`Kundali Report - ${data.userData.name}`} 
    author="BoloAstro" 
    subject="Premium Janam Kundali Report"
    creator="BoloAstro - Vedic Astrology"
  >
    <CoverPage userData={data.userData} />
    <IntroductionPage />
    <BirthDetailsPage userData={data.userData} />
    <LagnaChartPage planets={data.planets} />
    <PlanetaryPositionsPage planets={data.planets} />
    <PersonalityPage personality={data.personality} />
    <CareerPage career={data.career} />
    <WealthPage wealth={data.wealth} />
    <MarriagePage marriage={data.marriage} />
    <HealthPage health={data.health} />
    <ChildrenPage children={data.children} />
    <DoshaPage doshas={data.doshas} />
    <RemediesPage remedies={data.remedies} />
    <GemstonePage gemstone={data.gemstone} />
    <LuckyFactorsPage luckyFactors={data.luckyFactors} />
    <YearlyPredictionPage predictions={data.yearlyPrediction} />
    <MuhuratPage muhurats={data.muhurats} />
    <ForeignTravelPage foreignTravel={data.foreignTravel} />
    <CustomQuestionsPage questions={data.customQuestions} />
    <PanditMessagePage panditName={data.panditName} panditMessage={data.panditMessage} />
    <ContactPage panditName={data.panditName} panditMessage={data.panditMessage} />
  </Document>
);

export default KundaliPDF;
