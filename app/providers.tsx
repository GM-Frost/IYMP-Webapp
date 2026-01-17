'use client';

import { ThemeProvider } from '@/components/hooks/ThemeContext';

export default function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
