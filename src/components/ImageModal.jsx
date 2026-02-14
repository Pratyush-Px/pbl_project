import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './ImageModal.css';

const ImageModal = ({ isOpen, imageSrc, onClose }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        } else {
            const timer = setTimeout(() => setIsVisible(false), 300); // Wait for transition
            document.body.style.overflow = 'auto';
            return () => clearTimeout(timer);
        }

        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [isOpen, onClose]);

    if (!isVisible && !isOpen) return null;

    return ReactDOM.createPortal(
        <div
            className={`modal-overlay ${isOpen ? 'open' : ''}`}
            onClick={onClose}
        >
            <div
                className={`modal-content ${isOpen ? 'open' : ''}`}
                onClick={(e) => e.stopPropagation()}
            >
                <button className="modal-close" onClick={onClose}>&times;</button>
                <img src={imageSrc} alt="Enlarged view" className="modal-image" />
            </div>
        </div>,
        document.body
    );
};

export default ImageModal;
