import MarketTickerServer from '@/components/landing/MarketTicker.server';
import LandingHero from './LandingHero';
import { Suspense } from 'react';
import TickerSkeleton from '@/components/ticker/TickerSkeleton';
import CorePhilosophy from '@/components/landing/CorePhilosophy';
import OurOffer from '@/components/landing/OurOffer';
import LiveAlgoPreview from '@/components/landing/LiveAlgoPreview';

const LandingPage = () => {
  return (
    <>
      <LandingHero />
      <Suspense fallback={<TickerSkeleton />}>
        <MarketTickerServer />
        <CorePhilosophy />
        <LiveAlgoPreview />
        <OurOffer />
      </Suspense>
    </>
  );
};

export default LandingPage;
