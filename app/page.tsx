import data from '@/data.json';
import About from '@/components/About/About';
import Iconbox from '@/components/Iconbox/Iconbox';
import Skill from '@/components/Skill/Skill';
import Resume from '@/components/Resume/ResumeSection';
// import BlogSection from '@/components/Blog/BlogSection';
// import ReviewSection from '@/components/Review/ReviewSection';
import Contact from '@/components/Contact/Contact';
import PortfolioSection from '@/components/Protfolio/PortfolioSection';
import Hero3 from '@/components/Hero/Hero3';

export default function Home() {
  const {
    heroData,
    aboutData,
    serviceData,
    skillData,
    portfolioData,
    // blogData,
    resumeData,
    // reviewData,
    contactData,
    socialData,
    socialData2,
  } = data;

  return (
    <>
      <Hero3 data={heroData.homeThreeHero} socialData={socialData2} />
      <About data={aboutData} />
      <Iconbox data={serviceData} />
      <Skill data={skillData} />
      <Resume data={resumeData} />
      <PortfolioSection data={portfolioData} />
      {/* <ReviewSection data={reviewData} /> */}
      {/* <BlogSection data={blogData} /> */}
      <Contact data={contactData} socialData={socialData} />
    </>
  );
}
