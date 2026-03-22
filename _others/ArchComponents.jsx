

const Header1 = ({ single, menu }) => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <Fragment>
      <header id="header-sticky" className="header-1">
        <div className="container-fluid">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <div className="sticky-logo">
                <Link href="/">
                  <img
                    src="//assets/img/logo/white-logo.svg"
                    alt="logo-img"
                    className="logo-1"
                  />
                </Link>
                <Link href="/">
                  <img
                    src="//assets/img/logo/black-logo.svg"
                    alt="logo-img"
                    className="logo-2"
                  />
                </Link>
              </div>
              <div className="header-left">
                <div className="mean__menu-wrapper">
                  <div className="main-menu">
                    <Menu single={single} />
                  </div>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <div className="icon-items">
                  <div className="icon">
                    <i className="fas fa-phone-alt" />
                  </div>
                  <div className="content">
                    <p>Make A Call</p>
                    <h4>
                      <a href="tel:+359886942644"> +359 (886) 942 644 </a>
                    </h4>
                  </div>
                </div>
                <div className="header__hamburger d-xl-block my-auto">
                  <div
                    className="sidebar__toggle"
                    onClick={() => setSidebarToggle(true)}
                  >
                    <i className="far fa-bars" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Sidebar
        sidebarToggle={sidebarToggle}
        close={() => setSidebarToggle(false)}
        single={single}
      />
    </Fragment>
  );
};

const Header2 = ({ single }) => {
  const singleMenu = [
    { id: 1, href: "about", title: "About" },
    { id: 2, href: "services", title: "Services" },
    { id: 3, href: "projects", title: "Projects" },
    { id: 4, href: "testimonial", title: "Testimonial" },
  ];

  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <Fragment>
      <header id="header-sticky" className="header-2">
        <div className="container">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <div className="sticky-logo">
                <Link href="/">
                  <img src="/assets/img/logo/black-logo.svg" alt="logo-img" />
                </Link>
              </div>
              <div className="header-left">
                <div className="mean__menu-wrapper">
                  <div className="main-menu">
                    <Menu single={single} menu={singleMenu} />
                  </div>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <div className="header-button">
                  <Link href="contact" className="theme-btn bg-2">
                    Get A Quote
                  </Link>
                </div>
                <div className="header__hamburger d-xl-none my-auto">
                  <div
                    className="sidebar__toggle"
                    onClick={() => setSidebarToggle(true)}
                  >
                    <i className="far fa-bars" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Sidebar
        sidebarToggle={sidebarToggle}
        close={() => setSidebarToggle(false)}
        single={single}
        menu={singleMenu}
      />
    </Fragment>
  );
};

const Header3 = ({ single }) => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const singleMenu = [
    { id: 2, href: "services", title: "Services" },
    { id: 1, href: "about", title: "About" },
    { id: 3, href: "team", title: "Team" },
    { id: 4, href: "testimonial", title: "Testimonial" },
    { id: 4, href: "blog", title: "Blog" },
  ];
  return (
    <Fragment>
      <header id="header-sticky" className="header-2">
        <div className="container-fluid">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <div className="sticky-logo">
                <Link href="/">
                  <img src="/assets/img/logo/black-logo.svg" alt="logo-img" />
                </Link>
              </div>
              <div className="header-left">
                <div className="mean__menu-wrapper">
                  <div className="main-menu">
                    <Menu single={single} menu={singleMenu} />
                  </div>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <div className="icon-items">
                  <div className="icon">
                    <i className="fas fa-phone-alt" />
                  </div>
                  <div className="content">
                    <p>Make A Call</p>
                    <h4>
                      <a href="tel:+00012345688">+000 (123) 456 88</a>
                    </h4>
                  </div>
                </div>
                <div className="header-button">
                  <Link href="contact" className="theme-btn bg-2">
                    Get A Quote
                  </Link>
                </div>
                <div className="header__hamburger d-xl-none my-auto">
                  <div
                    className="sidebar__toggle"
                    onClick={() => setSidebarToggle(true)}
                  >
                    <i className="far fa-bars" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Sidebar
        sidebarToggle={sidebarToggle}
        close={() => setSidebarToggle(false)}
        single={single}
        menu={singleMenu}
      />
    </Fragment>
  );
};

const Header5 = ({ single }) => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const singleMenu = [
    { id: 1, href: "about", title: "About" },
    { id: 2, href: "services", title: "Services" },
    { id: 3, href: "projects", title: "Projects" },
    { id: 4, href: "contact", title: "Contact" },
  ];
  return (
    <Fragment>
      <header id="header-sticky" className="header-6">
        <div className="container">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <div className="sticky-logo">
                <Link href="/" className="logo-1">
                  <img src="/assets/img/logo/white-logo.svg" alt="logo-img" />
                </Link>
                <Link href="/" className="logo-2">
                  <img src="/assets/img/logo/black-logo.svg" alt="logo-img" />
                </Link>
              </div>
              <div className="header-left">
                <div className="mean__menu-wrapper">
                  <div className="main-menu">
                    <Menu single={single} menu={singleMenu} />
                  </div>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <div className="header__hamburger d-xl-block my-auto">
                  <div
                    className="sidebar__toggle"
                    onClick={() => setSidebarToggle(true)}
                  >
                    <i className="far fa-bars" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Sidebar
        sidebarToggle={sidebarToggle}
        close={() => setSidebarToggle(false)}
        single={single}
        menu={singleMenu}
      />
    </Fragment>
  );
};

const Footer2 = () => {
  return (
    <footer className="footer-section footer-bg">
      <div className="container">
        <div className="footer-widgets-wrapper">
          <div className="row">
            <div
              className="col-xxl-2 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <Link href="/">
                    <img src="/assets/img/logo/white-logo.svg" alt="logo-img" />
                  </Link>
                </div>
                <div className="footer-content">
                  <p>
                    Sed perspiciatis unde omnis natus doloremque laudantium
                    totae
                  </p>
                  <div className="social-icon d-flex align-items-center">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-vimeo-v" />
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 ps-xxl-5 ml-30 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>Quick Link</h4>
                </div>
                <ul className="list-items">
                  <li>
                    <Link href="service-details">Popular Services</Link>
                  </li>
                  <li>
                    <Link href="team-details">Team Member</Link>
                  </li>
                  <li>
                    <Link href="contact">Privacy &amp; Setting</Link>
                  </li>
                  <li>
                    <Link href="pricing">Pricing Package</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 ml-minus-30 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>Get In Touch</h4>
                </div>
                <div className="contact-info-area">
                  <div className="contact-items color-style-2">
                    <div className="icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div className="content">
                      <p>
                        55 Main Street, 2nd block <br />
                        Malborne, Australia
                      </p>
                    </div>
                  </div>
                  <div className="contact-items color-style-2">
                    <div className="icon">
                      <i className="fas fa-envelope" />
                    </div>
                    <div className="content">
                      <a href="mailto:info@example.com" className="link">
                        info@example.com
                      </a>
                    </div>
                  </div>
                  <div className="contact-items color-style-2">
                    <div className="icon">
                      <i className="fas fa-phone-alt" />
                    </div>
                    <div className="content">
                      <h4>
                        <a href="tel:00012345688">+000 (123) 456 88</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xxl-2 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>Support</h4>
                </div>
                <ul className="list-items">
                  <li>
                    <Link href="service-details">Terms &amp; Conditions</Link>
                  </li>
                  <li>
                    <Link href="contact">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="pricing">Pricing Plan</Link>
                  </li>
                  <li>
                    <Link href="contact">Contact us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xxl-2 col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>Product</h4>
                </div>
                <ul className="list-items">
                  <li>
                    <Link href="service-details">Web Template Design</Link>
                  </li>
                  <li>
                    <Link href="service-details">Mobile Application</Link>
                  </li>
                  <li>
                    <Link href="service-details">3D Illustration</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom style-2">
        <div className="container">
          <div className="footer-wrapper d-flex align-items-center justify-content-between pb-0">
            <ul className="footer-menu">
              <li>
                <Link href="faq">FAQs</Link>
              </li>
              <li>
                <Link href="about">Company</Link>
              </li>
              <li>
                <Link href="contact">Privacy</Link>
              </li>
            </ul>
            <a href="#" id="scrollUp" className="scroll-icon">
              <i className="far fa-angle-double-up" />
            </a>
            <p>
              © <Link href="/">2024</Link> All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Footer3 = () => {
  return (
    <footer className="footer-section footer-bg">
      <div className="container">
        <div className="footer-widgets-wrapper">
          <div className="row">
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <Link href="/">
                    <img src="/assets/img/logo/white-logo.svg" alt="logo-img" />
                  </Link>
                </div>
                <div className="footer-content">
                  <p>
                    Sed perspiciatis unde omnis natus doloremque laudantium
                    totae
                  </p>
                  <div className="social-icon d-flex align-items-center">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-vimeo-v" />
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>Quick Link</h4>
                </div>
                <ul className="list-items">
                  <li>
                    <Link href="service-details">Popular Services</Link>
                  </li>
                  <li>
                    <Link href="team-details">Team Member</Link>
                  </li>
                  <li>
                    <Link href="contact">Privacy &amp; Setting</Link>
                  </li>
                  <li>
                    <Link href="pricing">Pricing Package</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>Get In Touch</h4>
                </div>
                <div className="contact-info-area">
                  <div className="contact-items color-style-2">
                    <div className="icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div className="content">
                      <p>
                        55 Main Street, 2nd block <br />
                        Malborne, Australia
                      </p>
                    </div>
                  </div>
                  <div className="contact-items color-style-2">
                    <div className="icon">
                      <i className="fas fa-envelope" />
                    </div>
                    <div className="content">
                      <a href="mailto:info@example.com" className="link">
                        info@example.com
                      </a>
                    </div>
                  </div>
                  <div className="contact-items color-style-2">
                    <div className="icon">
                      <i className="fas fa-phone-alt" />
                    </div>
                    <div className="content">
                      <h4>
                        <a href="tel:00012345688">+000 (123) 456 88</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 ps-lg-2 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>Newsletter</h4>
                </div>
                <div className="footer-content">
                  <p>Get more update to join Us</p>
                  <div className="footer-input">
                    <input type="email" id="email" placeholder="Your Email" />
                    <button className="newsletter-btn" type="submit">
                      <i className="far fa-arrow-right" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom style-2">
        <div className="container">
          <div className="footer-wrapper d-flex align-items-center justify-content-between pb-0">
            <ul className="footer-menu">
              <li>
                <Link href="faq">FAQs</Link>
              </li>
              <li>
                <Link href="about">Company</Link>
              </li>
              <li>
                <Link href="contact">Privacy</Link>
              </li>
            </ul>
            <a href="#" id="scrollUp" className="scroll-icon">
              <i className="far fa-angle-double-up" />
            </a>
            <p>
              © <Link href="/">2024</Link> All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Footer4 = () => {
  return (
    <footer className="footer-section footer-bg fix">
      <div className="color-shape">
        <img src="/assets/img/footer-color-shape.png" alt="shape-img" />
      </div>
      <div className="color-shape-2">
        <img src="/assets/img/footer-color-shape-2.png" alt="shape-img" />
      </div>
      <div className="container">
        <div className="footer-widgets-wrapper">
          <div className="row">
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <Link href="/">
                    <img src="/assets/img/logo/white-logo.svg" alt="logo-img" />
                  </Link>
                </div>
                <div className="footer-content">
                  <p>
                    Sed perspiciatis unde omnis natus doloremque laudantium
                    totae
                  </p>
                  <div className="social-icon d-flex align-items-center">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-vimeo-v" />
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>Quick Link</h4>
                </div>
                <ul className="list-items">
                  <li>
                    <Link href="service-details">Popular Services</Link>
                  </li>
                  <li>
                    <Link href="team-details">Team Member</Link>
                  </li>
                  <li>
                    <Link href="contact">Privacy &amp; Setting</Link>
                  </li>
                  <li>
                    <Link href="pricing">Pricing Package</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>Get In Touch</h4>
                </div>
                <div className="contact-info-area">
                  <div className="contact-items color-style-2">
                    <div className="icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div className="content">
                      <p>
                        55 Main Street, 2nd block <br />
                        Malborne, Australia
                      </p>
                    </div>
                  </div>
                  <div className="contact-items color-style-2">
                    <div className="icon">
                      <i className="fas fa-envelope" />
                    </div>
                    <div className="content">
                      <a href="mailto:info@example.com" className="link">
                        info@example.com
                      </a>
                    </div>
                  </div>
                  <div className="contact-items color-style-2">
                    <div className="icon">
                      <i className="fas fa-phone-alt" />
                    </div>
                    <div className="content">
                      <h4>
                        <a href="tel:00012345688">+000 (123) 456 88</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 ps-lg-2 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>Newsletter</h4>
                </div>
                <div className="footer-content">
                  <p>Get more update to join Us</p>
                  <div className="footer-input">
                    <input type="email" id="email" placeholder="Your Email" />
                    <button className="newsletter-btn" type="submit">
                      <i className="far fa-arrow-right" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom style-2">
        <div className="container">
          <div className="footer-wrapper d-flex align-items-center justify-content-between pb-0">
            <ul className="footer-menu">
              <li>
                <Link href="faq">FAQs</Link>
              </li>
              <li>
                <Link href="about">Company</Link>
              </li>
              <li>
                <Link href="contact">Privacy</Link>
              </li>
            </ul>
            <a href="#" id="scrollUp" className="scroll-icon">
              <i className="far fa-angle-double-up" />
            </a>
            <p>
              © <Link href="/">2024</Link> All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Footer6 = () => {
  return (
    <footer className="footer-section footer-bg">
      <div className="robot-shape float-bob-y">
        <img src="/assets/img/home-6/robot-3.png" alt="shape-img" />
      </div>
      <div className="robot-shape-2 float-bob-y">
        <img src="/assets/img/home-6/robot-4.png" alt="shape-img" />
      </div>
      <div className="container">
        <div className="discussed-items">
          <div className="footer-logo wow fadeInUp" data-wow-delay=".3s">
            <Link href="/">
              <img src="/assets/img/logo/white-logo.svg" alt="logo-img" />
            </Link>
          </div>
          <div className="discussed-content wow fadeInUp" data-wow-delay=".5s">
            <h2>
              Let’s Discussed About <span>Your Projects</span>
            </h2>
            <Link href="contact" className="theme-btn hover-white">
              Get Started <i className="far fa-arrow-right" />
            </Link>
          </div>
        </div>
        <div className="footer-widgets-wrapper">
          <div className="row">
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>About Us</h4>
                </div>
                <div className="footer-content">
                  <p>
                    Sed perspiciatis unde omnis natus doloremque laudantium
                    totae
                  </p>
                  <div className="social-icon d-flex align-items-center">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-vimeo-v" />
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>Quick Link</h4>
                </div>
                <ul className="list-items">
                  <li>
                    <Link href="service-details">Popular Services</Link>
                  </li>
                  <li>
                    <Link href="team-details">Team Member</Link>
                  </li>
                  <li>
                    <Link href="contact">Privacy &amp; Setting</Link>
                  </li>
                  <li>
                    <Link href="pricing">Pricing Package</Link>
                  </li>
                </ul>
              </div>
            </div>
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
                        55 Main Street, 2nd block <br />
                        Malborne, Australia
                      </p>
                    </div>
                  </div>
                  <div className="contact-items">
                    <div className="icon">
                      <i className="fas fa-envelope" />
                    </div>
                    <div className="content">
                      <a href="mailto:info@example.com" className="link">
                        info@example.com
                      </a>
                    </div>
                  </div>
                  <div className="contact-items">
                    <div className="icon">
                      <i className="fas fa-phone-alt" />
                    </div>
                    <div className="content">
                      <h4>
                        <a href="tel:00012345688">+000 (123) 456 88</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h4>Recent News</h4>
                </div>
                <div className="recent-post-area">
                  <div className="recent-post-items">
                    <div
                      className="thumb bg-cover"
                      style={{
                        backgroundImage: 'url("/assets/img/news/pp1.png")',
                      }}
                    />
                    <div className="content">
                      <ul className="post-date">
                        <li>Nov 25, 2024</li>
                      </ul>
                      <h6>
                        <Link href="news-details">
                          How achieve more <br /> your nine to five
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <div className="recent-post-items mb-0">
                    <div
                      className="thumb bg-cover"
                      style={{
                        backgroundImage: 'url("/assets/img/news/pp2.png")',
                      }}
                    />
                    <div className="content">
                      <ul className="post-date">
                        <li>Nov 29, 2024</li>
                      </ul>
                      <h6>
                        <Link href="news-details">
                          Discover a better way of company.
                        </Link>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-wrapper d-flex align-items-center justify-content-between">
              <ul className="footer-menu wow fadeInUp" data-wow-delay=".2s">
                <li>
                  <Link href="faq">FAQs</Link>
                </li>
                <li>
                  <Link href="about">Company</Link>
                </li>
                <li>
                  <Link href="contact">Privacy</Link>
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
                © <Link href="/">2024</Link> All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};