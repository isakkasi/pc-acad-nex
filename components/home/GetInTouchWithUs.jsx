import Link from 'next/link';


const GetInTouchWithUs = () => {
    return (
        <div className="col-lg-5 wow fadeInUp" data-wow-delay=".4s">
                        <div className="hero-contact-box">
                            <h4>Get in touch with us</h4>
                            <p>
                                We are happy to provide you with more
                                information
                            </p>
                            <form
                                action="#"
                                id="contact-form"
                                method="POST"
                                className="contact-form-item"
                            >
                                <div className="row g-4">
                                    <div className="col-lg-12">
                                        <div className="form-clt">
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                placeholder="Your Name"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-clt">
                                            <input
                                                type="text"
                                                name="email"
                                                id="email"
                                                placeholder="Email Address"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-clt">
                                            <input
                                                type="text"
                                                name="phone"
                                                id="phone"
                                                placeholder="Phone Number"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="payment-save">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                name="save-for-next"
                                                id="saveForNext"
                                            />
                                            <p>
                                                I’ve Read and agreed to{' '}
                                                <Link href="/">
                                                    Terms &amp; Conditions
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <button
                                            type="submit"
                                            className="theme-btn"
                                        >
                                            Get Started Now{' '}
                                            <i className="far fa-arrow-right" />
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
    )
};
export default GetInTouchWithUs;