import Breadcrumb from '@/components/Breadcrumb';
import NextLayout from '@/layouts/NextLayout';
const page = () => {
  return (
    <NextLayout>
      <Breadcrumb pageName="Contact Us" />
      {/* Contact Section Section Start */}
      <section className="contact-section section-padding">
        <div className="container">
          <div className="contact-wrapper">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="contact-content">
                  <div className="section-title">
                    {/* <span className="sub-content wow fadeInUp">
                      <img src="/assets/img/bale.png" alt="img" />
                      Contact Us
                    </span> */}
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Don’t Hessite to Contact Us
                    </h2>
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                    We will be glad to hear from you. Please reach out to us for
                    any queries, feedback, or assistance. Our team is here to
                    help you with whatever you need.
                  </p>
                  <ul
                    className="contact-list wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <li>
                      <a href="mailto:pca@pc-acad.com">pca@pc-acad.com</a>
                    </li>
                    <li>
                      Sofia Airport, bl.3, off.1, <br />
                      Sofia, Bulgaria
                    </li>
                    <li>
                      <a href="tel:+359886942644">+359 886 942 644 | </a>
                      <br />
                      <a href="tel:+359898304029">+359 898 304 029</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className="col-lg-6">
                <div
                  className="contact-right wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <h3>Send Us Message</h3>
                  <form
                    action="#"
                    id="contact-form"
                    method="POST"
                    className="contact-form-items"
                  >
                    <div className="row g-4">
                      <div className="col-lg-6">
                        <div className="form-clt">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Full Name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-clt">
                          <input
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder="Phone"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-clt">
                          <input
                            type="text"
                            name="email"
                            id="email2"
                            placeholder="Your Email"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-clt">
                          <textarea
                            name="message"
                            id="message"
                            placeholder="Comments"
                            defaultValue={''}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <button type="submit" className="theme-btn">
                          Send a Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      {/* Map Section Start */}
      <div className="map-section">
        <div className="map-items">
          <div className="googpemap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2932.813322304789!2d23.40236997663196!3d42.686496514415055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa87b7d259b0e5%3A0xe013050918b68eda!2sPlane%20Care%20Academy!5e0!3m2!1sen!2sbg!4v1756795879220!5m2!1sen!2sbg"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </NextLayout>
  );
};
export default page;
