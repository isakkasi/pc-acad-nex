import Breadcrumb from '@/components/Breadcrumb';
import FunFactCounter from '@/components/FunFactCounter';
import Team from '@/components/Team';
import { TestimonialSlider2 } from '@/components/TestimonialSlider';
import { WorkingProcess2 } from '@/components/WorkingProcess';
import NextLayout from '@/layouts/NextLayout';
import Link from 'next/link';
const page = () => {
  return (
    <NextLayout>
      {/*<< Breadcrumb Section Start >>*/}
      <Breadcrumb pageName="About Us" />
      {/* About Section Start */}
      <section className="about-section fix section-padding pb-0">
        <div className="container">
          <div className="about-wrapper style-2">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="about-content ms-0 style-about">
                  <div className="section-title">
                    {/* <span className="sub-content wow fadeInUp">
                      <img src="assets/img/bale.png" alt="img" />
                      About Plane Care Academy
                    </span> */}
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      About Plane Care Academy
                    </h2>
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                    Plane Care Academy is a certified aviation maintenance
                    training organization, based in Bulgaria and licensed under
                    EASA Part-147. We are dedicated to shaping the next
                    generation of highly skilled aircraft maintenance
                    professionals through top-quality, industry-focused training
                    programs.
                  </p>
                  <p>
                    With a strong foundation in regulatory compliance and a
                    vision for innovation, we combine proven teaching methods
                    with modern technology to deliver training that meets
                    today’s aviation standards — and prepares professionals for
                    tomorrow’s challenges.
                  </p>
                  <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                    {/* <div className="dot" /> */}
                    <div className="content">
                      <h4>Our Mission</h4>
                      <p>
                        Our mission is simple: to provide the next level in
                        aviation maintenance training. We empower future
                        engineers and technicians with the knowledge, skills,
                        and confidence to excel in their careers and contribute
                        to safer, more efficient aviation worldwide.
                      </p>
                    </div>
                  </div>
                  <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                    {/* <div className="dot" /> */}
                    <div className="content">
                      <h4>Our Vision</h4>
                      <p>
                        To become a recognized leader in aviation maintenance
                        training, setting benchmarks for quality, innovation,
                        and global reach — while nurturing the next generation
                        of aviation professionals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                <div className="about-image-3">
                  <img src="assets/img/about/05.png" alt="img" style={{width: "80%"}}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section Start */}
      <section className="about-section fix section-padding pt-80">
        <div className="container">
          <div className="about-wrapper style-2">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6 wow  fadeInUp" data-wow-delay=".3s">
                <div className="about-image-3">
                  <img src="assets/img/about/06.png" alt="img" style={{width: "80%"}}/>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content">
                  <h4 className="wow fadeInUp" data-wow-delay=".3s">
                    What We Offer
                  </h4>
                  <p className="mt-3 wow fadeInUp" data-wow-delay=".5s">
                    <li>
                      <strong>EASA Part-147 Approved Training</strong> – fully compliant with
                      European regulations.
                    </li>
                    <li>
                      <strong>Comprehensive Course Portfolio</strong> – covering aircraft
                      systems, maintenance practices, and industry standards.
                    </li>
                    <li>
                      <strong>Hands-On & Theoretical Learning</strong> – a balanced approach that
                      combines classroom instruction with practical experience.
                    </li>
                    <li>
                      <strong>Experienced Instructors</strong> – aviation professionals with
                      extensive industry and teaching backgrounds.
                    </li>
                    <li>
                      <strong>Global Perspective</strong> – training designed for both local and
                      international learners, ensuring global employability.
                    </li>
                  </p>
                  <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                    {/* <div className="dot" /> */}
                    <div className="content">
                      <h4>Why Choose Plane Care Academy?</h4>
                      <p>
                        <li>
                          <strong>Industry-Relevant</strong> - Courses aligned with real-world
                          maintenance needs.
                        </li>
                        <li>
                          <strong>Career-Focused</strong> - Training that enhances employability
                          in global aviation markets.
                        </li>
                        <li>
                          <strong>Commitment to Excellence</strong> - A culture of quality,
                          safety, and continuous improvement.
                        </li>
                      </p>
                    </div>
                  </div>
                  {/* <Link
                    href="about"
                    className="theme-btn mt-50 wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    Learn More Us
                    <i className="far fa-arrow-right" />
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team Section Start */}
      <Team />
      
      {/* Funfact Section Start */}
      {/* <section className="funfact-section-2 section-padding pt-0">
        <div className="container">
          <FunFactCounter style={2} />
        </div>
      </section> */}
      
      {/* Working Process Section Start */}
      <WorkingProcess2 />

      {/* Brand Section Start */}
      {/* <section className="brand-section-2 mt-0 mb-0 fix section-padding pt-0">
        <div className="container-fluid">
          <div className="brand-wrapper-2">
            <div className="radius-shape">
              <img src="assets/img/brand/radius-left.png" alt="shape-img" />
            </div>
            <div className="radius-shape-2">
              <img src="assets/img/brand/radius-right.png" alt="shape-img" />
            </div>
            <h5 className="wow fadeInUp" data-wow-delay=".3s">
              We Have <span>1563+</span> Global Partners. Explore Our Global
              Clients
            </h5>
            <div className="brand-items">
              <div className="brand-image wow fadeInUp" data-wow-delay=".2s">
                <img src="assets/img/brand/linkedIn.png" alt="img" />
              </div>
              <div className="brand-image wow fadeInUp" data-wow-delay=".4s">
                <img src="assets/img/brand/dropbox.png" alt="img" />
              </div>
              <div className="brand-image wow fadeInUp" data-wow-delay=".6s">
                <img src="assets/img/brand/trello.png" alt="img" />
              </div>
              <div className="brand-image wow fadeInUp" data-wow-delay=".8s">
                <img src="assets/img/brand/framer.png" alt="img" />
              </div>
            </div>
            <div className="brand-items">
              <div className="brand-image wow fadeInUp" data-wow-delay=".2s">
                <img src="assets/img/brand/grammarly.png" alt="img" />
              </div>
              <div className="brand-image wow fadeInUp" data-wow-delay=".4s">
                <img src="assets/img/brand/amazon.png" alt="img" />
              </div>
              <div className="brand-image wow fadeInUp" data-wow-delay=".6s">
                <img src="assets/img/brand/outbrain.png" alt="img" />
              </div>
              <div className="brand-image wow fadeInUp" data-wow-delay=".8s">
                <img src="assets/img/brand/shopify.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Testimonial Section Start */}
      {/* <section className="testimonial-section-2 fix section-padding fix">
        <div className="bg-shape">
          <img src="assets/img/testimonial/bg-shape.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content">
              <img src="assets/img/bale.png" alt="img" />
              Clients Feedback
            </span>
            <h2>We’ve 1250+ Global Clients Say Us</h2>
          </div>
        </div>
        <TestimonialSlider2 />
      </section> */}

      {/* Footer Section Start */}
    </NextLayout>
  );
};
export default page;
