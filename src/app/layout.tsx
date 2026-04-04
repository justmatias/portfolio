import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Matias Gimenez | Portfolio',
  description: 'My name is Matias and this is my personal site',
  icons: {
    icon: '/favicon.ico',
  },
};
import { Open_Sans } from 'next/font/google';
import { ThemeProvider } from '@/components/providers';
import { Header, Footer, PageTransition } from '@/components/ui';

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='h-full' suppressHydrationWarning>
      <body className={`min-h-full ${openSans.className} px-4 lg:px-12`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          disableTransitionOnChange
        >
          <Header />
          <PageTransition>
            <main className='px-2'>{children}</main>
          </PageTransition>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
