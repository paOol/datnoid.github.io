'use client';

import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';
import Script from 'next/script';

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 1000,
      easing: 'ease-out-cubic',
    });
  });

  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://didiavax.com/script.js"
        data-website-id="461e4f40-6e0d-4252-9205-8e64aa9f0db2"
      />

      <Header />

      <main className="grow">{children}</main>

      <Footer />
    </>
  );
}
