import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PainContext from './components/PainContext';
import ValueProposition from './components/ValueProposition';
import PriceAnchor from './components/PriceAnchor';
import HowItWorks from './components/HowItWorks';
import Mission from './components/Mission';
import FAQ from './components/FAQ';
import Founder from './components/Founder';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-light">
      <Header />
      <main className="flex-grow">
        <Hero />
        <PainContext />
        <ValueProposition />
        <HowItWorks />
        <PriceAnchor />
        <Mission />
        <FAQ />
        <FinalCTA />
        <Founder />
      </main>
      <Footer />
    </div>
  );
};

export default App;