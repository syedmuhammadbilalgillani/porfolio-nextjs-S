'use client';

interface ResumeItem {
  title: string;
  duration: string;
  subTitle: string;
  text: string;
}

interface SingleResumeProps {
  element: ResumeItem;
}

export default function SingleResume({ element }: SingleResumeProps) {
  if (!element) {
    return null;
  }

  const { title, duration, subTitle, text } = element;

  return (
    <div className="st-resume-timeline">
      <h3 className="st-resume-timeline-title">{title}</h3>
      <div className="st-resume-timeline-duration">{duration}</div>
      <h4 className="st-resume-timeline-subtitle">{subTitle}</h4>
      <div className="st-resume-timeline-text">
        <p>{text}</p>
      </div>
    </div>
  );
}
