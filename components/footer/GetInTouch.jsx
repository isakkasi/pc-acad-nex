

const GetInTouch = () => {
    return (
        <div
                            className="col-xl-3 col-lg-4 col-md-6 ps-lg-1 wow fadeInUp"
                            data-wow-delay=".6s"
                        >
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <h4>Get In Touch</h4>
                                </div>
                                <div className="contact-info-area">
                                    <div className="contact-items">
                                        <div className="icon">
                                            <i className="fas fa-map-marker-alt" />
                                        </div>
                                        <div className="content">
                                            <p>
                                                Sofia Airport, bl.3, off.1,{' '}
                                                <br />
                                                Sofia, Bulgaria
                                            </p>
                                        </div>
                                    </div>
                                    <div className="contact-items">
                                        <div className="icon">
                                            <i className="fas fa-envelope" />
                                        </div>
                                        <div className="content">
                                            <a
                                                href="mailto:info@example.com"
                                                className="link"
                                            >
                                                pca@pc-acad.com
                                            </a>
                                        </div>
                                    </div>
                                    <div className="contact-items">
                                        <div className="icon">
                                            <i className="fas fa-phone-alt" />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <a href="tel:+359886942644">
                                                    +359 886 942 644 |{' '}
                                                </a>
                                                <br />
                                                <a href="tel:+359898304029">
                                                    +359 898 304 029
                                                </a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    );
};

export default GetInTouch;