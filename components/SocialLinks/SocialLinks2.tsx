'use client';

import { Icon } from '@iconify/react';
import Link from 'next/link';

interface SocialLinkItem {
  link: string;
  icon: string;
}

interface SocialLinks2Props {
  data: SocialLinkItem[];
}

export default function SocialLinks2({ data }: SocialLinks2Props) {
  return (
    <div
      className="st-hero-social-links"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay="500"
    >
      {data.map((item, index) => (
        <Link href={item.link} className="st-social-btn" key={index}>
          <span className="st-social-icon">
            <Icon icon={`fa6-brands:${item.icon}`} />
          </span>
        </Link>
      ))}
    </div>
  );
}