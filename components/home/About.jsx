import Link from "next/link";

const About = () => {
    return (
        <section className="about-section fix section-padding">
            <div className="container">
                <div className="about-wrapper">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-6">
                            <div className="about-image-items">
                                {/* <ul className="experience-text wow fadeInUp" data-wow-delay=".6s">
                                    <li>25+ Years Of Experience</li>
                                    <li>
                                        <i className="fas fa-star" />
                                    </li>
                                    <li>Awards Winning Company</li>
                                </ul> */}
                                <div className="row g-4 align-items-center">
                                    <div className="col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                        <div className="about-image">
                                            <img src="/assets/img/about/05.png" alt="about-img" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 wow fadeInUp" data-wow-delay=".4s">
                                        <div className="about-image">
                                            <img src="/assets/img/about/06.png" alt="about-img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content">
                                <div className="section-title">
                                    <span className="sub-content wow fadeInUp">
                                        <img src="/assets/img/bale.png" alt="img" />
                                        About Plane Care Academy
                                    </span>
                                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                        EASA Part-147 Certified Aviation Maintenance Training Organization
                                    </h2>
                                </div>
                                <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                                    Plane Care Academy is a certified aviation maintenance training organization, based
                                    in Bulgaria and licensed under EASA Part-147. We are dedicated to shaping the next
                                    generation of highly skilled aircraft maintenance professionals through top-quality,
                                    industry-focused training programs.
                                </p>
                                <ul className="about-list wow fadeInUp" data-wow-delay=".3s">
                                    <li>
                                        <i className="fas fa-check" />
                                        Flexible training options to fit your schedule and learning style
                                    </li>
                                    <li>
                                        <i className="fas fa-check" />
                                        Access to a wide range of courses to advance your career
                                    </li>
                                    <li>
                                        <i className="fas fa-check" />
                                        Personalized support and guidance throughout your training journey
                                    </li>
                                    <li>
                                        <i className="fas fa-check" />
                                        Opportunities for hands-on experience and real-world application of skills
                                    </li>
                                </ul>
                                <div className="about-author wow fadeInUp" data-wow-delay=".5s">
                                    <div className="about-button">
                                        <Link href="/about" className="theme-btn">
                                            More About Us
                                            <i className="far fa-arrow-right" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default About;
