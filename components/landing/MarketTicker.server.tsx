import Ticker from '@/components/ticker/Ticker';
import { fetchOptionUnderlyings } from '@/components/lib/market/polygon';

export default async function MarketTickerServer() {
  const items = await fetchOptionUnderlyings();
  return <Ticker items={items} direction="left" />;
}
