"use client";
import { useState } from "react";

const Faq = () => {
    const questions = [
        {
            id: 1,
            question: "Are your aircraft type training courses officially recognized?",
            answer: "Yes, all our type training courses are fully approved in accordance with EASA Part-66 requirements. Upon successful completion, students receive a Certificate of Recognition issued under our EASA Part-147 approval.",
        },
        {
            id: 2,
            question: "What kind of certificate will I receive after the course?",
            answer: "Graduates are issued a formal Certificate of Recognition (CoR) as per the EASA Part-147 standard. This certificate is valid for the endorsement of aircraft type ratings on an EASA Part-66 Aircraft Maintenance License (AML).",
        },
        {
            id: 3,
            question: "Where is the practical element of the training conducted?",
            answer: "Our practical training sessions are performed on-site within fully approved EASA Part-145 maintenance organizations. This ensures students gain hands-on experience in a real-world, regulated environment using actual aircraft and tooling.",
        },
        {
            id: 4,
            question: "How flexible are the training schedules and payment terms?",
            answer: "We offer flexible scheduling and payment plans aligned with standard commercial good practices to accommodate your operational needs. We aim to find a balance that supports both your timeline and your budget.",
        },
        {
            id: 5,
            question: "Can you provide training tailored to our specific company requirements?",
            answer: "Absolutely. We can develop and customize training packages to meet the unique technical or logistical needs of your organization while maintaining full regulatory compliance.",
        },
        
    ];
    const [openId, setOpenId] = useState(questions[0].id);

    return (
        <section className="faq-section section-padding">
            <div className="container">
                <div className="section-title text-center">
                    <span className="sub-content wow fadeInUp">
                        {/* <img src="assets/img/bale.png" alt="img" /> */}
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                        Frequently Asked Questions
                    </h2>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="faq-content">
                            <div className="faq-accordion">
                                <div className="accordion" id="accordion">
                                    {questions.map((item, index) => {
                                        const faqId = `faq${item.id}`;
                                        const isOpen = openId === item.id;
                                        const delay = `${0.3 + index * 0.2}s`;

                                        return (
                                            <div
                                                key={item.id}
                                                className="accordion-item wow fadeInUp"
                                                data-wow-delay={delay}
                                            >
                                                <h4 className="accordion-header">
                                                    <button
                                                        className={`accordion-button${isOpen ? "" : " collapsed"}`}
                                                        type="button"
                                                        onClick={() =>
                                                            setOpenId((prevOpenId) =>
                                                                prevOpenId === item.id ? null : item.id,
                                                            )
                                                        }
                                                        aria-expanded={isOpen}
                                                        aria-controls={faqId}
                                                    >
                                                        {item.question}
                                                    </button>
                                                </h4>
                                                <div
                                                    id={faqId}
                                                    className={`accordion-collapse collapse${isOpen ? " show" : ""}`}
                                                >
                                                    <div className="accordion-body">{item.answer}</div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Faq;
