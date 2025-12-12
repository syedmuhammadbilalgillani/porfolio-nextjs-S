'use client';

import SectionHeading from '../SectionHeading/SectionHeading';
import './Resume.scss';
import SingleResume from './SingleResume';
import Image from 'next/image';

interface ResumeItem {
  title: string;
  duration: string;
  subTitle: string;
  text: string;
}

interface ResumeSectionProps {
  data: {
    educationTitle: string;
    education: ResumeItem[];
    experienceTitle: string;
    experience: ResumeItem[];
  };
}

export default function ResumeSection({ data }: ResumeSectionProps) {
  // Safety check for hydration issues
  if (!data) {
    return null;
  }

  const { educationTitle, education, experienceTitle, experience } = data;
  
  // Ensure arrays exist and are arrays
  const educationList = Array.isArray(education) ? education : [];
  const experienceList = Array.isArray(experience) ? experience : [];
  return (
    <section id="resume" className="st-dark-bg">
      <div className="st-height-b100 st-height-lg-b80"></div>
      <SectionHeading title={'Resume'} />
      <div
        className="container"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200"
      >
        <div className="row">
          <div className="col-lg-6">
            <div className="st-height-b0 st-height-lg-b50"></div>
            <div className="st-resume-wrap">
              <div className="st-resume-heading">
                <Image
                  src="/images/icon/resume-icon1.png"
                  alt="resume-icon"
                  width={50}
                  height={50}
                />
                <h2 className="st-resume-heading-title">{educationTitle}</h2>
              </div>
              <div className="st-height-b50 st-height-lg-b30"></div>

              <div className="st-resume-timeline-wrap">
                {educationList.map((education, index) => (
                  <SingleResume element={education} key={index} />
                ))}
              </div>
            </div>
            <div className="st-height-b100 st-height-lg-b80"></div>
          </div>
          <div className="col-lg-6">
            <div className="st-height-b0 st-height-lg-b50"></div>
            <div className="st-resume-wrap">
              <div className="st-resume-heading">
                <Image
                  src="/images/icon/resume-icon2.png"
                  alt="resume-icon"
                  width={50}
                  height={50}
                />
                <h2 className="st-resume-heading-title">{experienceTitle}</h2>
              </div>
              <div className="st-height-b50 st-height-lg-b30"></div>

              <div className="st-resume-timeline-wrap">
                {experienceList.map((experience, index) => (
                  <SingleResume element={experience} key={index} />
                ))}
              </div>
            </div>
            <div className="st-height-b100 st-height-lg-b80"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
