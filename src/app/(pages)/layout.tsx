import { Header } from '@/components/features/header/header';
import { Footer } from '@/components/features/footer/footer';
import { PageTransition } from '@/components/features/shared/page-transition';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <PageTransition>
        <main className='px-2'>{children}</main>
      </PageTransition>
      <Footer />
    </>
  );
}
