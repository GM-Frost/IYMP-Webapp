import MarketTickerServer from '@/components/landing/MarketTicker.server';
import LandingHero from './LandingHero';
import { Suspense } from 'react';
import TickerSkeleton from '@/components/ticker/TickerSkeleton';
import CorePhilosophy from '@/components/landing/CorePhilosophy';
import OurOffer from '@/components/landing/OurOffer';

const LandingPage = () => {
  return (
    <>
      <LandingHero />
      <Suspense fallback={<TickerSkeleton />}>
        <MarketTickerServer />
        <CorePhilosophy />
        <OurOffer />
      </Suspense>
    </>
  );
};

export default LandingPage;
