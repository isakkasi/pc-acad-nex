import Link from "next/link";

const PopularServices = () => {
    return (
        <section className="service-section section-padding pt-0">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              <img src="/assets/img/bale.png" alt="img" />
              Popular Services
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              We Provide Best Quality Service <br />
              For Your Business
            </h2>
          </div>
          <div className="row">
            <div
              className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="service-card-items">
                <div className="icon">
                  <i className="flaticon-technical" />
                </div>
                <h3>
                  <Link href="service-details">
                    Data Center and Cloud Services
                  </Link>
                </h3>
                <div className="service-thumb">
                  <img src="/assets/img/service/04.png" alt="service-img" />
                  <div className="line-shape">
                    <img src="/assets/img/service/line.png" alt="shape-img" />
                  </div>
                </div>
                <Link className="link-btn" href="service-details">
                  Read More
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div
              className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="service-card-items active">
                <div className="icon">
                  <i className="flaticon-vector-design" />
                </div>
                <h3>
                  <Link href="service-details">
                    Web Development Software Renew
                  </Link>
                </h3>
                <div className="service-thumb">
                  <img src="/assets/img/service/05.png" alt="service-img" />
                  <div className="line-shape">
                    <img src="/assets/img/service/line.png" alt="shape-img" />
                  </div>
                </div>
                <Link className="link-btn" href="service-details">
                  Read More
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div
              className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="service-card-items">
                <div className="icon">
                  <i className="flaticon-database" />
                </div>
                <h3>
                  <Link href="service-details">
                    IT Management Machine Learning
                  </Link>
                </h3>
                <div className="service-thumb">
                  <img src="/assets/img/service/06.png" alt="service-img" />
                  <div className="line-shape">
                    <img src="/assets/img/service/line.png" alt="shape-img" />
                  </div>
                </div>
                <Link className="link-btn" href="service-details">
                  Read More
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
            <div
              className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="service-card-items">
                <div className="icon">
                  <i className="flaticon-design-thinking" />
                </div>
                <h3>
                  <Link href="service-details">
                    Digital Product UI/UX Design
                  </Link>
                </h3>
                <div className="service-thumb">
                  <img src="/assets/img/service/07.png" alt="service-img" />
                  <div className="line-shape">
                    <img src="/assets/img/service/line.png" alt="shape-img" />
                  </div>
                </div>
                <Link className="link-btn" href="service-details">
                  Read More
                  <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
};
export default PopularServices;