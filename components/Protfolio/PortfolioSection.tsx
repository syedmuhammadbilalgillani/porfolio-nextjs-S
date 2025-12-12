'use client';

import './Portfolio.scss';
import SectionHeading from '../SectionHeading/SectionHeading';
import { useState } from 'react';
import SinglePortfolio from './SinglePortfolio';
import Modal from '../Modal/Modal';

interface PortfolioItem {
  imgLink: string;
  imgLinkLg: string;
  title: string;
  subTitle: string;
  link?: string;
  effect?: string;
  duration?: string;
  delay?: string;
}

interface PortfolioSectionProps {
  data: {
    portfolioItems: PortfolioItem[];
  };
}

export default function PortfolioSection({ data }: PortfolioSectionProps) {
  // Modal
  const [modal, setModal] = useState(false);
  const [tempData, setTempData] = useState<string[]>([]);

  const getData = (imgLink: string, title: string, subTitle: string, link?: string) => {
    const tempDataArray = [imgLink, title, subTitle, link || ''];
    setTempData((item) => [1, ...tempDataArray] as string[]);
    setModal(true);
  };

  const modalClose = () => {
    setModal(false);
  };

  // Load Items
  const { portfolioItems } = data;
  const itemsPerPage = 6;
  const [visibleItems, setVisibleItems] = useState(
    portfolioItems.slice(0, itemsPerPage)
  );

  const [showLoadMore, setShowLoadMore] = useState(true);

  const loadMoreItems = () => {
    const currentLength = visibleItems.length;
    const nextChunk = portfolioItems.slice(
      currentLength,
      currentLength + itemsPerPage
    );
    setVisibleItems((prevItems) => [...prevItems, ...nextChunk]);

    if (currentLength + itemsPerPage >= portfolioItems.length) {
      setShowLoadMore(false);
    }
  };

  return (
    <>
      <section id="portfolio">
        <div className="st-height-b100 st-height-lg-b80"></div>
        <SectionHeading title={'Portfolio'} />
        <div className="container">
          <div className="row">
            {visibleItems.map((element, index) => (
              <SinglePortfolio data={element} key={index} getData={getData} />
            ))}
            <div className="col-lg-12 text-center">
              <div className="st-portfolio-btn">
                {showLoadMore && (
                  <button
                    className="st-btn st-style1 st-color1"
                    onClick={loadMoreItems}
                  >
                    Load more
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="st-height-b100 st-height-lg-b80"></div>
      </section>
      {modal === true ? (
        <Modal
          img={tempData[1]}
          title={tempData[2]}
          subTitle={tempData[3]}
          link={tempData[4]}
          modalClose={modalClose}
        />
      ) : (
        ''
      )}
    </>
  );
}
