'use client';

import './About.scss';
import SectionHeading from '../SectionHeading/SectionHeading';

interface DetailItem {
  title: string;
  info: string;
}

interface AboutData {
  imgLink: string;
  title: string;
  subtitle: string;
  text: string;
  details: DetailItem[];
  cvPdf: string;
}

interface AboutProps {
  data: AboutData;
}

export default function About({ data }: AboutProps) {
  const { imgLink, title, subtitle, text, details, cvPdf } = data;
  
  // Generate dynamic filename with current date
  const getDynamicFileName = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    return `muhammad-sarafaraz-resume-${year}-${month}-${day}.pdf`;
  };

  return (
    <section id="about" className="st-about-wrap">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <SectionHeading title={'About Me'} />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 ">
            <div className="st-about-img-wrap">
              <div
                className="st-about-img st-bg rounded-5"
                style={{ backgroundImage: `url(${imgLink})` }}
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="400"
              ></div>
            </div>
            <div className="st-height-b0 st-height-lg-b30"></div>
          </div>
          <div className="col-lg-6">
            <div className="st-vertical-middle">
              <div className="st-vertical-middle-in">
                <div
                  className={`st-text-block st-style1`}
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                  data-aos-delay="500"
                >
                  <h2 className="st-text-block-title">{title}</h2>
                  <h4 className="st-text-block-subtitle">{subtitle}</h4>
                  <div className="st-text-block-text">
                    <p>{text}</p>
                  </div>
                  <ul className="st-text-block-details st-mp0">
                    {details.map((item, index) => (
                      <li key={index}>
                        <span>{item.title}</span> : <span>{item.info}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="st-text-block-btn">
                    <a
                      className="st-btn st-style1 st-color1"
                      href={cvPdf}
                      download={getDynamicFileName()}
                    >
                      Download CV
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
