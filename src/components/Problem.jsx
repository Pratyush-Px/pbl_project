import React from 'react';
import './Problem.css';

const Problem = () => {
    return (
        <section id="problem" className="section-container">
            <h2 className="section-title gradient-text">Problem Statement</h2>

            <div className="problem-grid">
                <div className="problem-main glass-card glow-border">
                    <h3>The Challenge</h3>
                    <div className="card-scroll-content">
                        <p>
                            Manual verification of purchase orders and invoices is a time-consuming and error-prone process in many organizations. Finance teams often spend significant time cross-checking vendor details, item quantities, totals, and transaction dates across multiple documents. As transaction volumes increase, maintaining accuracy becomes difficult, leading to delayed payments, reconciliation errors, and increased operational costs. This growing dependence on manual validation highlights the need for automation.
                            <br />
                            <br />
                            However, automating this workflow introduces several challenges.
                            <br />
                            <br />
                            <ol>
                                <li>First, invoices and purchase orders are semi-structured documents with no universal format. Vendors use different layouts, table structures, date formats, and naming conventions. Designing a system that works across varied document styles without relying on fixed templates is complex.</li>
                                <br />
                                <li>Second, extracting reliable data from scanned or image-based documents requires accurate Optical Character Recognition (OCR). Real-world documents may contain noise, shadows, blur, skew, or compression artifacts, all of which can reduce OCR accuracy. Even small recognition errors can affect downstream comparison logic.</li>
                                <br />
                                <li>Third, identifying and structuring key fields such as vendor name, line items, quantities, and totals from raw text requires intelligent parsing mechanisms. Data may appear in different positions or formats, making deterministic extraction non-trivial.</li>
                                <br />
                                <li>Another major challenge lies in discrepancy detection. Exact matching is insufficient due to minor variations in vendor names, descriptive text differences in item names, or floating-point rounding differences in totals. The system must tolerate such variations while still accurately identifying genuine mismatches.</li>
                                <br />
                                <li>Finally, the solution must remain efficient, scalable, and secure. Processing sensitive financial documents without storing them permanently, ensuring fast response times, and generating structured outputs compatible with accounting systems are critical design requirements.</li>
                                <br />
                                These combined business and technical challenges shaped the foundation of our project.
                            </ol>
                        </p>

                    </div>
                </div>

                <div className="problem-sidebar">
                    <div className="problem-card glass-card">
                        <h3>Literature Review: Automated Invoice Verification</h3>
                        <div className="card-scroll-content">
                            <p><strong>Abstract:</strong> Automating Purchase Order (PO) and Invoice verification is a critical improvement in modern accounts payable workflows. Manual reconciliation is time-consuming, error-prone, and costly.</p>

                            <h4>1. OCR and Image Preprocessing</h4>
                            <p>Optical Character Recognition is the foundational layer for digitizing invoice documents. The open-source engine Tesseract is widely adopted for structured business documents due to its reliability and support for configurable Page Segmentation Modes.</p>
                            <p>OCR performance depends heavily on image quality. Literature emphasizes preprocessing pipelines to enhance signal clarity. Adaptive Thresholding is preferred over global thresholding. Bilateral Filtering is also recommended, as it reduces background noise while preserving character edges.</p>

                            <h4>2. Information Extraction Approaches</h4>
                            <p>Document data extraction methods are categorized into machine learning-based models (e.g., LayoutLM) and rule-based systems using Regular Expressions (Regex). While deep learning models offer layout flexibility, they require large labeled datasets.</p>
                            <p>For structured business documents, rule-based extraction provides deterministic outputs, lower latency, and easier explainability, making Regex-based systems suitable for real-time validation.</p>

                            <h4>3. Fuzzy Matching and Reconciliation</h4>
                            <p>Exact string comparison is insufficient for invoice reconciliation. Fuzzy string matching algorithms, such as Ratcliff/Obershelp similarity scoring, compute match confidence using character overlap ratios. Applying similarity thresholds enables systems to detect logical matches despite formatting differences.</p>

                            <h4>Conclusion</h4>
                            <p>The literature supports a modular approach combining OCR, structured rule-based extraction, and fuzzy comparison logic. This hybrid methodology balances computational efficiency and reliability.</p>
                        </div>
                    </div>

                    <div className="problem-card glass-card">
                        <h3>Research Gap / Innovation</h3>
                        <div className="card-scroll-content">
                            <p>
                                Extensive research exists on automated document processing using deep learning models such as LayoutLM, Graph Neural Networks, and Large Language Models for invoice understanding. These approaches demonstrate high accuracy in extracting structured information from complex and highly unstructured layouts. However, they typically require large labeled datasets, GPU-based infrastructure, and substantial computational resources, making them less practical for small to mid-scale business environments or academic implementations.
                                <br />
                                <br />
                                On the other hand, traditional rule-based systems using OCR and regular expressions are computationally efficient and interpretable but are often criticized for lacking flexibility when handling layout variations or minor textual inconsistencies. Much of the literature focuses either on high-end machine learning solutions or on isolated OCR extraction techniques, with limited emphasis on lightweight, end-to-end reconciliation systems that integrate preprocessing, structured parsing, intelligent comparison, and business-level validation scoring within a unified pipeline.
                                <br />
                                <br />
                                Additionally, existing studies often prioritize data extraction accuracy but provide limited discussion on practical discrepancy detection strategies such as tolerance-based numeric comparison, fuzzy string matching thresholds, and aggregated confidence scoring for financial reconciliation tasks.
                                <br />
                                <br />
                                Therefore, there is a gap in designing a modular, stateless, and computationally efficient system that bridges classical computer vision techniques with deterministic parsing and fuzzy comparison logic to achieve reliable invoice-to-purchase-order validation without relying on heavy machine learning models.
                                <br />
                                This project aims to address that gap by developing a lightweight yet structured document validation framework that balances accuracy, explainability, scalability, and practical deployability.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Problem;
