import MarketTickerServer from '@/components/landing/MarketTicker.server';
import LandingHero from './LandingHero';
import { Suspense } from 'react';
import TickerSkeleton from '@/components/ticker/TickerSkeleton';
import CorePhilosophy from './CorePhilosophy';

const LandingPage = () => {
  return (
    <>
      <LandingHero />
      <Suspense fallback={<TickerSkeleton />}>
        <MarketTickerServer />
        <CorePhilosophy />
      </Suspense>
    </>
  );
};

export default LandingPage;
