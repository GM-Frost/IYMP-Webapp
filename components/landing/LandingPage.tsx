'use client';
import { Button, ArrowForward, PlayCircleOutlineIcon } from '@/components/ui';
import Image from 'next/image';

const LandingPage = () => {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-8 ">
      <section className="flex flex-col-reverse md:flex-row items-center max-w-6xl w-full gap-10 md:gap-16">
        {/* Left: Text and logo */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-6">
          <h1 className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
            Trade the <span className="gradient-text">Setup</span>, Not the Noise.
          </h1>
          <p className="text-base sm:text-lg md:text-xl">
            <span className="font-bold text-secondary/80">IYMP — It's Your Money Plant</span>
            &emsp;is an algorithm-driven trading ecosystem built around one core belief: Wealth
            grows best with structure, patience, and probability — just like a plant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center md:justify-start">
            <Button bloom className="flex-1 sm:flex-none">
              Get Started <ArrowForward />
            </Button>
            <Button variant="outlined" className="flex-1 sm:flex-none">
              Watch Algo Live <PlayCircleOutlineIcon />
            </Button>
          </div>
        </div>

        {/* Right: Chart image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <Image
            src="/logo/logo.png"
            alt="IYMP Logo"
            width={120}
            height={120}
            className="bg-radial w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 mx-auto md:mx-0"
          />
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
