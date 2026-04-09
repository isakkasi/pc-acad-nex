import Link from "next/link";
import GetInTouchWithUs from "./GetInTouchWithUs";
import IncomingCourses from "../courses/IncomingCourses";
import { Fragment } from "react";
import Pricing from "./Pricing";
import About from "./About";
import CtaVideo from "./CtaVideo";
import News from "../news/News";

const Home = () => {
    return (
        <Fragment>
            <section
                className="hero-section hero-1 bg-cover fix"
                style={{ backgroundImage: 'url("/assets/img/hero/01.jpg")' }}
            >
                <div className="container">
                    <div className="row g-4 justify-content-between">
                        <div className="col-lg-9">
                            <div className="hero-content">
                                <h1 className="wow fadeInUp" data-wow-delay=".2s">
                                    We Take Care of Your Aviation Career &amp; <br /> Provide the Best Trainings
                                </h1>
                                <div className="hero-button">
                                    <Link
                                        href="/courses"
                                        className="theme-btn hover-white wow fadeInUp"
                                        data-wow-delay=".4s"
                                    >
                                        View all courses <i className="far fa-arrow-right" />
                                    </Link>
                                    <Link
                                        href="/courses/incoming-courses"
                                        className="btn-link wow fadeInUp"
                                        data-wow-delay=".6s"
                                    >
                                        View Incoming Courses <i className="far fa-arrow-right" />
                                    </Link>
                                </div>
                                {/* <div
                                className="hero-client d-flex align-items-center gap-4 mt-50 wow fadeInUp"
                                data-wow-delay=".8s"
                            >
                                <img src="/assets/img/hero/client.png" alt="img" />
                                <p className="text-white">
                                    Trusted by 1M+ people <br />
                                    around the globe
                                </p>
                            </div> */}
                            </div>
                        </div>
                        {/* <GetInTouchWithUs /> */}
                    </div>
                </div>
            </section>
            <About />
            <IncomingCourses />
            <News />
        </Fragment>
    );
};
export default Home;
