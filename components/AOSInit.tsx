'use client';

import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

export function AOSInit() {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);

  return null;
}
