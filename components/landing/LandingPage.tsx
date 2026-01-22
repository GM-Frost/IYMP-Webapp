import MarketTickerServer from '@/components/landing/MarketTicker.server';
import LandingHero from './LandingHero';
import { Suspense } from 'react';
import TickerSkeleton from '@/components/ticker/TickerSkeleton';
import CorePhilosophy from '@/components/landing/CorePhilosophy';
import OurOffer from '@/components/landing/OurOffer';
import LiveAlgoPreview from '@/components/landing/LiveAlgoPreview';
import StudyComponent from '@/components/landing/StudyComponent';
import HistoricChartSection from '@/components/landing/HistoricChartSection';
import JoinSection from '@/components/landing/JoinSection';
import Testimonial from '@/components/landing/Testimonial';

const LandingPage = () => {
  return (
    <>
      <LandingHero />
      <Suspense fallback={<TickerSkeleton />}>
        <MarketTickerServer />
        <CorePhilosophy />
        <LiveAlgoPreview />
        <div className="relative">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-24 left-12 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="absolute bottom-0 right-10 h-112 w-md rounded-full bg-cyan-500/10 blur-3xl" />
          </div>
          <StudyComponent />
          <OurOffer />
          <HistoricChartSection />
          <JoinSection />
        </div>
        <Testimonial />
      </Suspense>
    </>
  );
};

export default LandingPage;
