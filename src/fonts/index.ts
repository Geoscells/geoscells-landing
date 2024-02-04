import {Inter} from 'next/font/google';
import localFont from 'next/font/local';

export const gilroyFont = localFont({
  src: [
    {
      path: './Gilroy-Regular.ttf',
      weight: '400'
    },
    {
      path: './Gilroy-SemiBold.ttf',
      weight: '600'
    },
    {
      path: './Gilroy-Bold.ttf',
      weight: '700'
    }
  ],
  display: 'swap',
  variable: '--font-gilroy',
  fallback: ['sans-serif']
});

export const interFont = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '400', '600', '700'],
  variable: '--font-inter',
  fallback: ['sans-serif']
});
