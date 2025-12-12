'use client';

import './Modal.scss';

interface ModalProps {
  img: string;
  title: string;
  subTitle: string;
  link?: string;
  modalClose: () => void;
}

export default function Modal({ img, title, subTitle, link, modalClose }: ModalProps) {
  const modalStyle = {
    backgroundColor: 'rgba(0,0,0,0.8)',
    display: 'block',
  };
  return (
    <div className="modal show fade bd-example-modal-lg" style={modalStyle}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">{title}</h4>
            <button
              type="button"
              className="btn-close"
              onClick={modalClose}
            ></button>
          </div>
          <div className="modal-body">
            <div className="st-flex-center">
              <img src={img} alt={title} />
            </div>
            <p className="modal-subtitle">{subTitle}</p>
            {link && (
              <div className="st-flex-center" style={{ marginTop: '20px' }}>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="st-btn st-style1 st-color1"
                  style={{ textDecoration: 'none', display: 'inline-block' }}
                >
                  View Live Project
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
