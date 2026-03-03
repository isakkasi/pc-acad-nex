const AboutUs = () => {
    return (
        <div
            className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay=".2s"
        >
            <div className="single-footer-widget">
                <div className="widget-head">
                    <h4>About Us</h4>
                </div>
                <div className="footer-content">
                    <p>An EASA Part-147 approved training organization</p>
                    <div className="social-icon d-flex align-items-center">
                        <a href="https://www.facebook.com/profile.php?id=61565616397848">
                            <i className="fab fa-facebook-f" />
                        </a>
                        {/* <a href="#">
                            <i className="fab fa-twitter" />
                        </a> */}
                        <a href="https://www.linkedin.com/company/90363949/admin/dashboard/">
                            <i className="fab fa-linkedin" />
                        </a>
                        {/* <a href="#">
                            <i className="fab fa-pinterest-p" />
                        </a> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
