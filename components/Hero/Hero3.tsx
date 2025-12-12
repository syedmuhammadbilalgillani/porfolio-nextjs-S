'use client';

import React from 'react';
import './Hero.scss';
import perser from 'html-react-parser';
import WaterWave from 'react-water-wave';
import SocialLinks2 from '../SocialLinks/SocialLinks2';
import Image from 'next/image';

interface Hero3Props {
  data: {
    title: string;
    text: string;
    imgAuthor: string;
    bgImgLink: string;
  };
  socialData: Array<any>;
}

export default function Hero3({ data, socialData }: Hero3Props) {
  const { title, text, imgAuthor, bgImgLink } = data;
  return (
    <WaterWave
      id="home"
      className="st-hero st-style2 st-bg st-dynamic-bg st-ripple-version"
      imageUrl={bgImgLink}
    >
      {() => (
        <div className="container">
          <div className="st-hero-text">
            <div
              className="st-author"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <Image
                src={imgAuthor}
                width={100}
                height={100}
                alt="Author Image"
                style={{ height: '100%' }}
              />
            </div>
            <h1 className='st-hero-title' data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
              {perser(title)}
            </h1>
            <p className='st-hero-text' data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
              {perser(text)}
            </p>
            <SocialLinks2 data={socialData} />
          </div>
        </div>
      )}
    </WaterWave>
  );
}
