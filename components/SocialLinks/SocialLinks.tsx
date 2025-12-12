'use client';

import { Icon } from '@iconify/react';
import { useState } from 'react';
import Link from 'next/link';

interface SocialLinkItem {
  link: string;
  icon: string;
  title: string;
}

interface SocialLinksProps {
  data: SocialLinkItem[];
}

export default function SocialLinks({ data }: SocialLinksProps) {
  const [activeLink, setActiveLink] = useState(0);

  const handleIconHover = (index: number) => {
    setActiveLink(index);
  };

  return (
    <div className="st-social-link">
      {data.map((item, index) => (
        <Link
          href={item.link}
          className={index === activeLink ? 'st-social-btn active' : 'st-social-btn'}
          onMouseEnter={() => handleIconHover(index)}
          key={index}
        >
          <span className="st-social-icon">
            <Icon icon={`fa6-brands:${item.icon}`} />
          </span>
          <span className="st-icon-name">{item.title}</span>
        </Link>
      ))}
    </div>
  );
}
