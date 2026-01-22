// app/providers.tsx
import AppThemeProvider from '@/components/hooks/ThemeProvider';

export default function Providers({ children }: { children: React.ReactNode }) {
  return <AppThemeProvider>{children}</AppThemeProvider>;
}
