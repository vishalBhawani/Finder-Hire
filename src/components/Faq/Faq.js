import React, { useState } from "react";
import "./Faq.scss";

const faqData = [
    {
        question: 'What is your refund policy?',
        answer: 'Our refund policy allows full refunds within 14 days of purchase.',
    },
    {
        question: 'Do you offer customer support?',
        answer: 'Yes, we provide 24/7 customer support via chat and email.',
    },
    {
        question: 'Can I change my plan later?',
        answer: 'Absolutely! You can upgrade or downgrade your plan anytime.',
    },
];

function Faq() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(prev => (prev === index ? null : index));
    };

    return (
        <section className="faq">
            <div className="faq__container full__container">
                <div className="site-heading text-center">
                    <h2 className="site-heading--main small-heading">
                        Frequently Asked Questions
                    </h2>
                    <p className="site-des--main mt-24">
                        Check below for FAQs about the fundamentals course.
                    </p>
                </div>

                <div className="faq__list">
                    {faqData.map((item, index) => (
                        <div className="faq__item" key={index}>
                            <button
                                className="faq__question"
                                aria-expanded={activeIndex === index}
                                onClick={() => toggleFAQ(index)}
                            >
                                {item.question}
                            </button>
                            <div
                                className="faq__answer"
                                style={{ display: activeIndex === index ? 'block' : 'none' }}
                            >
                                {item.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Faq;
