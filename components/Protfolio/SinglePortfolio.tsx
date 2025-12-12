'use client';

interface SinglePortfolioProps {
  data: {
    imgLink: string;
    imgLinkLg: string;
    title: string;
    subTitle: string;
    link?: string;
    effect?: string;
    duration?: string;
    delay?: string;
  };
}

export default function SinglePortfolio({ data }: SinglePortfolioProps) {
  const { imgLink, title, subTitle, link, effect, duration, delay } = data;

  return (
    <div
      className="col-lg-4 col-md-6"
      data-aos={effect}
      data-aos-duration={duration}
      data-aos-delay={delay}
    >
      <div className="st-portfolio-single st-style1">
        <div className="st-portfolio-item">
          <div className="st-portfolio st-zoom">
            <div className="st-portfolio-img st-zoom-in">
              <img src={imgLink} alt={title} />
            </div>
            <div className="st-portfolio-item-hover">
              <h5>{title}</h5>
              <p>{subTitle}</p>
              {/* {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="st-portfolio-link"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Project
                </a>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
