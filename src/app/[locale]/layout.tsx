import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import SocialButtons from '../../components/SocialButtons';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'A-PRO LTD',
  description: 'A-PRO LTD - Multilingual site',
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    console.error('LOCALE MESSAGES ERROR:', error);
    // notFound();
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className='flex flex-col min-h-screen'>
          <Header />
          <div className='flex-grow mt-20'>{children}</div>
            <SocialButtons />
          <Footer />
        </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
