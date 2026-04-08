import Link from "next/link";
import { Fragment } from "react";
import content from "@/data/content.json";

const Courses = () => {
    const courseCategories = content.courseCategories;

    return (
        <Fragment>
            <section className="service-section section-padding pt-0" id="services">
                <div className="container">
                    <div className="section-title text-center">
                        <span className="sub-content wow fadeInUp">
                            {/* <img src="/assets/img/bale.png" alt="img" /> */}
                        </span>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                            We provide courses and trainings that will help you start or advance your career in the
                            aviation industry
                        </h2>
                    </div>
                    <div className="row justify-content-center">
                        {courseCategories.map((item) => (
                            <div
                                key={item.id}
                                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                                data-wow-delay={`${0.2 + item.id * 0.2}s`}
                            >
                                <div className="service-popular-items">
                                    <div className="service-image">
                                        <img src={item.image} alt="img" />
                                    </div>
                                    <div className="service-content">
                                        <h3>
                                            <Link
                                                href={item.href}
                                                target={item.newTab ? "_blank" : undefined}
                                                rel={item.newTab ? "noopener noreferrer" : undefined}
                                            >
                                                {item.title}
                                            </Link>
                                        </h3>
                                        <p>{item.description}</p>
                                        <Link
                                            href={item.href}
                                            className="theme-btn bg-2"
                                            target={item.newTab ? "_blank" : undefined}
                                            rel={item.newTab ? "noopener noreferrer" : undefined}
                                        >
                                            {item.button} <i className="far fa-arrow-right" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Fragment>
    );
};
export default Courses;

const temp = `
<section
                className="service-section-4 fix bg-cover section-padding"
                style={{
                    backgroundImage: 'url("/assets/img/service/service-bg-min.jpg")',
                }}
                id="services"
            >
                <div className="container">
                    <div className="section-title text-center">
                        <span className="sub-content bg-color-3 wow fadeInUp">
                            <img src="/assets/img/bale.png" alt="img" />
                            Popular Services
                        </span>
                        <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                            We Provide Best Digital Marketing <br />
                            service to build an modern &amp; <br /> professional service for clients
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="service-box-items">
                                <div className="icon">
                                    <i className="flaticon-keywords" />
                                </div>
                                <div className="content">
                                    <h3>
                                        <Link href="service-details">Keyword Research</Link>
                                    </h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                            <div className="service-box-items active">
                                <div className="icon">
                                    <i className="flaticon-social-media" />
                                </div>
                                <div className="content">
                                    <h3>
                                        <Link href="service-details">Social Media Marketing</Link>
                                    </h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                            <div className="service-box-items">
                                <div className="icon">
                                    <i className="flaticon-email-marketing" />
                                </div>
                                <div className="content">
                                    <h3>
                                        <Link href="service-details">Email Marketing</Link>
                                    </h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="service-box-items">
                                <div className="icon">
                                    <i className="flaticon-copy-writing" />
                                </div>
                                <div className="content">
                                    <h3>
                                        <Link href="service-details">Content Writing</Link>
                                    </h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                            <div className="service-box-items">
                                <div className="icon">
                                    <i className="flaticon-software-development" />
                                </div>
                                <div className="content">
                                    <h3>
                                        <Link href="service-details">Website Development</Link>
                                    </h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                            <div className="service-box-items">
                                <div className="icon">
                                    <i className="flaticon-www" />
                                </div>
                                <div className="content">
                                    <h3>
                                        <Link href="service-details">SEO Optimizations</Link>
                                    </h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
`;
