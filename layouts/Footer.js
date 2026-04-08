import AboutUs from '@/components/footer/AboutUs';
import GetInTouch from '@/components/footer/GetInTouch';
import NewsletterSignIn from '@/components/footer/NewsletterSignIn';
import QuickLinks from '@/components/footer/QuickLinks';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="footer-section footer-bg">
            <div className="container">
            {/*    <div className="discussed-items">
                    <div
                        className="footer-logo wow fadeInUp"
                        data-wow-delay=".3s"
                    >
                        <Link href="/">
                            <img
                                src="/assets/img/logo/white-logo.svg"
                                alt="logo-img"
                            />
                        </Link>
                    </div>
                    <div
                        className="discussed-content wow fadeInUp"
                        data-wow-delay=".5s"
                        style={{ margin: '0 3rem' }}
                    >
                        <h2>
                            Let’s Talk About <br />
                            <span>Your Next Training</span>
                        </h2>
                        <Link href="contact" className="theme-btn hover-white">
                            Go to contacts <i className="far fa-arrow-right" />
                        </Link>
                    </div>
                </div> */}
                <div className="footer-widgets-wrapper">
                    <div className="row">
                        <AboutUs />

                        <QuickLinks />

                        <GetInTouch />

                        {/* <RecentNews /> */}

                        <NewsletterSignIn />
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="footer-wrapper d-flex align-items-center justify-content-between">
                            <ul
                                className="footer-menu wow fadeInUp"
                                data-wow-delay=".2s"
                            >
                                <li>
                                    <Link href="/about">Company</Link>
                                </li>
                                <li>
                                    <Link href="/contact">Contact</Link>
                                </li>
                            </ul>
                            <a
                                href="#"
                                id="scrollUp"
                                className="scroll-icon wow fadeInUp"
                                data-wow-delay=".4s"
                            >
                                <i className="far fa-angle-double-up" />
                            </a>
                            <p className="wow fadeInUp" data-wow-delay=".6s">
                                © <Link href="/">2022-2026</Link> All Rights
                                Reserved
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
