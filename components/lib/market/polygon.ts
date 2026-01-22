import { TickerItem } from '@/components/ticker/ticker.types';

const POLYGON_API_KEY = process.env.POLYGON_API_KEY;

const ROTATION_SIZE = 3; // symbols shown at once
const ROTATION_WINDOW_MIN = 60; // rotate every 60 minutes

const SYMBOLS = [
  'AAPL',
  'MSFT',
  'NVDA',
  'TSLA',
  'META',
  'AMZN',
  'GOOGL',
  'AMD',
  'NFLX',
  'BA',
  'JPM',
  'XOM',
];

type PrevAggResponse = {
  results?: {
    c: number; // close
    o: number; // open
  }[];
};

async function fetchPrevClose(symbol: string): Promise<TickerItem | null> {
  const res = await fetch(
    `https://api.polygon.io/v2/aggs/ticker/${symbol}/prev?adjusted=true&apiKey=${POLYGON_API_KEY}`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) return null;

  const json: PrevAggResponse = await res.json();
  const bar = json.results?.[0];

  if (!bar || bar.o === 0) return null;

  return {
    symbol,
    changePercent: ((bar.c - bar.o) / bar.o) * 100,
  };
}

export async function fetchOptionUnderlyings(): Promise<TickerItem[]> {
  if (!POLYGON_API_KEY) {
    console.error('[Polygon] Missing API key');
    return [];
  }

  // ⏱ Deterministic hourly rotation
  const minutesSinceEpoch = Math.floor(Date.now() / 60000);
  const bucketCount = Math.ceil(SYMBOLS.length / ROTATION_SIZE);
  const rotationIndex = Math.floor(minutesSinceEpoch / ROTATION_WINDOW_MIN) % bucketCount;

  const start = rotationIndex * ROTATION_SIZE;
  const rotatedSymbols = SYMBOLS.slice(start, start + ROTATION_SIZE);

  const results = await Promise.all(rotatedSymbols.map(fetchPrevClose));

  return results.filter(Boolean) as TickerItem[];
}
