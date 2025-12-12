import './Footer.scss';

export default function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <footer className='st-footer-wrap'>
      <div className="container">
        <div className="st-copyright-wrap text-center">
          <div className="st-copyright-text">
            © {currentYear}. Developed by Sarfaraz Khan. All right reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
