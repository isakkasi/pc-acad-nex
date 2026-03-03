

const NewsletterSignIn = () => {
  return (
    <div
                            className="col-xl-3 col-lg-4 col-md-6 ps-lg-2 wow fadeInUp"
                            data-wow-delay=".8s"
                        >
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <h4>Newsletter</h4>
                                </div>
                                <div className="footer-content">
                                    <p>Get more update from us</p>
                                    <div className="footer-input">
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="Your Email"
                                        />
                                        <button
                                            className="newsletter-btn"
                                            type="submit"
                                        >
                                            <i className="far fa-arrow-right" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
    );
};

export default NewsletterSignIn;