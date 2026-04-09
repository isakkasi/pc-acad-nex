import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";
import content from "@/data/content.json";

const news = content.news;

const page = () => {
    return (
        <NextLayout>
            <Breadcrumb
                pageTitle="News"
                crumbs={[{ label: "News" }]}
            />
            <section className="blog-wrapper news-wrapper section-padding">
                <div className="container">
                    <div className="news-area">
                        <div className="row">
                            {/* Main posts */}
                            <div className="col-12 col-lg-8">
                                <div className="blog-posts">
                                    {news.map((item) => (
                                        <div key={item.id} className="single-blog-post">
                                            <div
                                                className="post-featured-thumb bg-cover"
                                                style={{ backgroundImage: `url(${item.image})` }}
                                            />
                                            <div className="post-content">
                                                <div className="post-meta">
                                                    <span>
                                                        <i className="fal fa-calendar-alt" />
                                                        {item.date}
                                                    </span>
                                                </div>
                                                <h2>
                                                    {item.href ? (
                                                        <Link href={item.href}>{item.title}</Link>
                                                    ) : (
                                                        item.title
                                                    )}
                                                </h2>
                                                {item.excerpt && <p>{item.excerpt}</p>}
                                                {item.href && (
                                                    <Link href={item.href} className="theme-btn mt-4 line-height">
                                                        <span>
                                                            READ MORE <i className="fas fa-chevron-right" />
                                                        </span>
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Sidebar */}
                            <div className="col-12 col-lg-4">
                                <div className="main-sidebar">
                                    {/* Recent posts */}
                                    <div className="single-sidebar-widget">
                                        <div className="wid-title">
                                            <h3>Recent News</h3>
                                        </div>
                                        <div className="popular-posts">
                                            {news.map((item) => (
                                                <div key={item.id} className="single-post-item">
                                                    <div
                                                        className="thumb bg-cover"
                                                        style={{ backgroundImage: `url(${item.image})` }}
                                                    />
                                                    <div className="post-content">
                                                        <h5>
                                                            {item.href ? (
                                                                <Link href={item.href}>{item.title}</Link>
                                                            ) : (
                                                                item.title
                                                            )}
                                                        </h5>
                                                        <div className="post-date">
                                                            <i className="far fa-calendar-alt" />
                                                            {item.date}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Social */}
                                    <div className="single-sidebar-widget">
                                        <div className="wid-title">
                                            <h3>Follow Us</h3>
                                        </div>
                                        <div className="social-link">
                                            {content.contact.social.facebook && (
                                                <a href={content.contact.social.facebook} target="_blank" rel="noopener noreferrer">
                                                    <i className="fab fa-facebook-f" />
                                                </a>
                                            )}
                                            {content.contact.social.linkedin && (
                                                <a href={content.contact.social.linkedin} target="_blank" rel="noopener noreferrer">
                                                    <i className="fab fa-linkedin-in" />
                                                </a>
                                            )}
                                            {content.contact.social.twitter && (
                                                <a href={content.contact.social.twitter} target="_blank" rel="noopener noreferrer">
                                                    <i className="fab fa-twitter" />
                                                </a>
                                            )}
                                            {content.contact.social.instagram && (
                                                <a href={content.contact.social.instagram} target="_blank" rel="noopener noreferrer">
                                                    <i className="fab fa-instagram" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </NextLayout>
    );
};

export default page;
