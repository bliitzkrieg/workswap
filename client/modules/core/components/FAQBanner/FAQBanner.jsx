import React from 'react';
import Overlay from '../Overlay/Overlay.jsx';

class FAQCTA extends React.Component {

    render() {
        return (
            <div className="faq-cta">
                <Overlay />
                <div className="faq-cta-banner">
                    <h1>Frequently Asked Questions</h1>
                    <h4 className="faq-details">
                        If you still have any questions, feel free to email <a href="mailto:support@workswap.io" className="faq-link">support</a>. We will get back to you as possible.
                    </h4>
                </div>
            </div>
        );
    }
}


export default FAQCTA;