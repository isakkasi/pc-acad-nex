import Link from "next/link";

const Cta = ({ sectionPadding = false }) => {
    return (
        <section className={`cta-marketing-section fix ${sectionPadding ? "section-padding" : ""}`}>
            <div className="container">
                <div className="cta-marketing-wrapper">
                    <div className="content">
                        <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                            You are looking for something else ?
                        </h2>
                        <p className="text-white wow fadeInUp" data-wow-delay=".5s">
                            Do not hesistate to contact us if you have any questions about our courses, trainings, or
                            how we can assist you in achieving your aviation career goals. Our team is here to provide
                            you with the information and support you need to make informed decisions about your
                            education and training.
                        </p>
                    </div>
                    <div className="thumb wow fadeInUp" data-wow-delay=".6s">
                        <img src="assets/img/cta/cta-marketing.png" alt="img" />
                        <div className="circle-shape">
                            <img src="assets/img/cta/circle-shape.png" alt="shape-img" />
                        </div>
                    </div>
                    <Link href="/contact" className="theme-btn bg-2 wow fadeInUp" data-wow-delay=".7s">
                        Contact us <i className="far fa-arrow-right" />
                    </Link>
                </div>
            </div>
        </section>
    );
};
export default Cta;
