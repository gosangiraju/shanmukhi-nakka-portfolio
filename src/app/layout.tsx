import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Shanmukhi Nakka | Hardware & PCB Design Engineer',
  description: 'Portfolio of Shanmukhi Nakka, an Electronics & Electrical Engineering graduate specializing in Hardware & PCB Design.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="container animate-fade-in">
          {children}
        </main>
      </body>
    </html>
  );
}
