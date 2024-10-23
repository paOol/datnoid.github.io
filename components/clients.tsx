'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Particles from './particles';

// Import Swiper
import Swiper, { Autoplay } from 'swiper';
import 'swiper/swiper.min.css';
Swiper.use([Autoplay]);

export default function Clients() {
  const [logoURIs, setLogoURIs] = useState<string[]>([]);

  useEffect(() => {
    // Fetch data from the internal API route
    fetch('/api/market')
      .then((response) => response.json())
      .then((data: { logoURI: string }[]) => {
        const logoURIs: string[] = data.slice(0, 9).map((item) => item.logoURI);
        setLogoURIs(logoURIs);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    if (logoURIs.length > 0) {
      new Swiper('.clients-carousel', {
        slidesPerView: 'auto',
        spaceBetween: 64,
        centeredSlides: true,
        loop: true,
        speed: 5000,
        noSwiping: true,
        noSwipingClass: 'swiper-slide',
        autoplay: {
          delay: 0,
          disableOnInteraction: true,
        },
      });
    }
  }, [logoURIs]);

  // Helper function to handle relative paths in logoURIs
  const getFullLogoURI = (logoURI: string) => {
    if (logoURI.startsWith('http')) {
      return logoURI;
    } else {
      return `https://app.datnoid.com${logoURI}`;
    }
  };

  return (
    <section>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Particles animation */}
        <div className="absolute inset-0 max-w-6xl mx-auto px-4 sm:px-6">
          <Particles className="absolute inset-0 -z-10" quantity={5} />
        </div>

        <div className="py-12 md:py-16">
          <div className="overflow-hidden">
            {/* Carousel */}
            <div className="clients-carousel swiper-container relative before:absolute before:inset-0 before:w-32 before:z-10 before:pointer-events-none before:bg-gradient-to-r before:from-slate-900 after:absolute after:inset-0 after:left-auto after:w-32 after:z-10 after:pointer-events-none after:bg-gradient-to-l after:from-slate-900">
              <div className="swiper-wrapper !ease-linear select-none items-center">
                {/* Carousel items */}
                {logoURIs.map((logoURI, index) => (
                  <div key={index} className="swiper-slide !w-auto">
                    <Image
                      className="grayscale"
                      src={getFullLogoURI(logoURI)}
                      alt={`Client ${index + 1}`}
                      width={30}
                      height={30}
                      style={{ borderRadius: '100%' }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
