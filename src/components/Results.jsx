import React, { useState } from 'react';
import './Results.css';
import ImageModal from './ImageModal';

const Results = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section id="results" className="section-container">
            <h2 className="section-title gradient-text">Results & Analysis</h2>

            <div className="results-container glass-card glow-border">
                <div className="results-content">
                    <div className="metrics-column">
                        <h3>Performance Metrics</h3>
                        <p className="metrics-description">
                            Our system demonstrates superior performance in extracting and validating
                            complex invoice data compared to traditional template-based OCR solutions.
                        </p>

                        <div className="metric-box">
                            <span className="metric-label">Field Accuracy</span>
                            <span className="metric-value">98.5%</span>
                            <div className="progress-bar">
                                <div className="progress-fill" style={{ width: '98.5%' }}></div>
                            </div>
                        </div>

                        <div className="metric-box">
                            <span className="metric-label">Match Rate</span>
                            <span className="metric-value">95.2%</span>
                            <div className="progress-bar">
                                <div className="progress-fill" style={{ width: '95.2%', animationDelay: '0.2s' }}></div>
                            </div>
                        </div>

                        <div className="chart-container clickable-image" onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}images/accuracy_by_mode.png`)}>
                            <h4>Accuracy Comparison</h4>
                            <div className="chart-preview">
                                <img src={`${import.meta.env.BASE_URL}images/accuracy_by_mode.png`} alt="Accuracy by Mode" />
                                <div className="overlay-hint">
                                    <span>Touch to Expand</span>
                                </div>
                            </div>
                            <p className="chart-caption">Comparison against Tesseract (Base)</p>
                        </div>

                        <div className="chart-container clickable-image" style={{ marginTop: '20px' }} onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}images/metrics_summary.png`)}>
                            <h4>Evaluation Summary</h4>
                            <div className="chart-preview">
                                <img src={`${import.meta.env.BASE_URL}images/metrics_summary.png`} alt="Metrics Summary" />
                                <div className="overlay-hint">
                                    <span>Touch to Expand</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="gallery-column">
                        <h3>Visual Results</h3>
                        <div className="image-grid">
                            <div className="gallery-item" onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}images/char_accuracy_per_image.png`)}>
                                <div className="image-wrapper">
                                    <img src={`${import.meta.env.BASE_URL}images/char_accuracy_per_image.png`} alt="Character Accuracy" />
                                    <div className="hover-overlay">
                                        <span>Character Accuracy</span>
                                    </div>
                                </div>
                            </div>
                            <div className="gallery-item" onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}images/confidence_distribution.png`)}>
                                <div className="image-wrapper">
                                    <img src={`${import.meta.env.BASE_URL}images/confidence_distribution.png`} alt="Confidence Distribution" />
                                    <div className="hover-overlay">
                                        <span>Confidence Dist.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="gallery-item" onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}images/precision_recall_curve.png`)}>
                                <div className="image-wrapper">
                                    <img src={`${import.meta.env.BASE_URL}images/precision_recall_curve.png`} alt="Precision-Recall Curve" />
                                    <div className="hover-overlay">
                                        <span>Precision-Recall</span>
                                    </div>
                                </div>
                            </div>
                            <div className="gallery-item" onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}images/accuracy_by_mode.png`)}>
                                <div className="image-wrapper">
                                    <img src={`${import.meta.env.BASE_URL}images/accuracy_by_mode.png`} alt="System Analysis" />
                                    <div className="hover-overlay">
                                        <span>System Analysis</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ImageModal
                isOpen={!!selectedImage}
                imageSrc={selectedImage}
                onClose={() => setSelectedImage(null)}
            />
        </section>
    );
};

export default Results;
