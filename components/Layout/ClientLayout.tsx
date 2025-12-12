'use client';

import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import CustomCursor from '../CustomCursor/CustomCursor';
import { AOSInit } from '@/components/AOSInit';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <AOSInit />
      {isLoading ? (
        <Preloader />
      ) : (
        <div>
          <CustomCursor />
          <Header />
          {children}
          <Footer />
        </div>
      )}
    </>
  );
}
