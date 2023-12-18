import { Inter } from 'next/font/google';
import './globals.css';

// Components
import Header from '@/components/Header';
import Footer from '@/components/Footer';
// ThemeProvider
import ThemeProvider from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'], weight: [ '300', '400', '500', '600', '700', '800', '900'] });

export const metadata = {
  title: 'Akib Saleh',
  description: 'Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
