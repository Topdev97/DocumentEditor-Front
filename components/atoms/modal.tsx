import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  top: number;
  right: number;
  className?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, top, right, className = '', children }) => {
  // Close modal if clicked outside
  const handleOutsideClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.id === 'modal-overlay') {
      onClose();
    }
  };

  console.log("Modal top position:", top);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
      window.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.body.style.overflow = 'unset'; // Re-enable scrolling when modal is closed
      window.removeEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.body.style.overflow = 'unset'; // Clean up overflow style
      window.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div id="modal-overlay" className="fixed inset-0 z-50">
      <div className={`bg-white px-3 max-w-[281px] rounded-lg shadow-[0_2px_6px_2px_rgba(0,0,0,0.30)] z-50 ${className}`} style={{ position: 'absolute', top: `${top}px`, right: `${right}px` }}>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
