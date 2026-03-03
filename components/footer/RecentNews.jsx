import Link from "next/link";

const RecentNews = () => {
  return (
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
                                      backgroundImage: 'url("assets/img/news/pp1.png")',
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
                                      backgroundImage: 'url("assets/img/news/pp2.png")',
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
    );
};

export default RecentNews;