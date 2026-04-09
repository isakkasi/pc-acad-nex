import Link from "next/link";
import content from "@/data/content.json";

const NewsDetails = ({ article }) => {
    const recentNews = content.news.filter((n) => n.id !== article.id).slice(0, 3);

    return (
        <section className="blog-wrapper news-wrapper section-padding">
            <div className="container">
                <div className="news-area">
                    <div className="row">
                        {/* Article */}
                        <div className="col-12 col-lg-8">
                            <div className="blog-post-details border-wrap mt-0">
                                <div className="single-blog-post post-details mt-0">
                                    <div className="post-content pt-0">
                                        <h2 className="mt-0">{article.title}</h2>
                                        <div className="post-meta mt-3">
                                            <span>
                                                <i className="fal fa-calendar-alt" />
                                                {article.date}
                                            </span>
                                        </div>
                                        {article.image && (
                                            <img
                                                src={article.image}
                                                alt={article.title}
                                                className="single-post-image"
                                                style={{ width: "100%", marginBottom: "1.5rem" }}
                                            />
                                        )}
                                        {Array.isArray(article.body)
                                            ? article.body.map((paragraph, index) => <p key={index}>{paragraph}</p>)
                                            : article.body && <p>{article.body}</p>}
                                    </div>
                                </div>

                                {/* Tags + Social */}
                                <div className="row tag-share-wrap">
                                    <div className="col-lg-8 col-12">
                                        <h4>Tags</h4>
                                        <div className="tagcloud">
                                            <Link href="/news">Aviation</Link>
                                            <Link href="/news">EASA</Link>
                                            <Link href="/news">Training</Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-12 mt-3 mt-lg-0 text-lg-end">
                                        <h4>Share</h4>
                                        <div className="social-share">
                                            {content.contact.social.facebook && (
                                                <a
                                                    href={content.contact.social.facebook}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <i className="fab fa-facebook-f" />
                                                </a>
                                            )}
                                            {content.contact.social.linkedin && (
                                                <a
                                                    href={content.contact.social.linkedin}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <i className="fab fa-linkedin-in" />
                                                </a>
                                            )}
                                            {content.contact.social.twitter && (
                                                <a
                                                    href={content.contact.social.twitter}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <i className="fab fa-twitter" />
                                                </a>
                                            )}
                                            {content.contact.social.instagram && (
                                                <a
                                                    href={content.contact.social.instagram}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <i className="fab fa-instagram" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="col-12 col-lg-4">
                            <div className="main-sidebar">
                                {recentNews.length > 0 && (
                                    <div className="single-sidebar-widget">
                                        <div className="wid-title">
                                            <h3>Recent News</h3>
                                        </div>
                                        <div className="popular-posts">
                                            {recentNews.map((item) => (
                                                <div key={item.id} className="single-post-item">
                                                    <div
                                                        className="thumb bg-cover"
                                                        style={{ backgroundImage: `url(${item.image})` }}
                                                    />
                                                    <div className="post-content">
                                                        <h5>
                                                            <Link href={item.href || `/news/${item.slug}`}>
                                                                {item.title}
                                                            </Link>
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
                                )}

                                <div className="single-sidebar-widget">
                                    <div className="wid-title">
                                        <h3>Follow Us</h3>
                                    </div>
                                    <div className="social-link">
                                        {content.contact.social.facebook && (
                                            <a
                                                href={content.contact.social.facebook}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                        )}
                                        {content.contact.social.linkedin && (
                                            <a
                                                href={content.contact.social.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <i className="fab fa-linkedin-in" />
                                            </a>
                                        )}
                                        {content.contact.social.twitter && (
                                            <a
                                                href={content.contact.social.twitter}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <i className="fab fa-twitter" />
                                            </a>
                                        )}
                                        {content.contact.social.instagram && (
                                            <a
                                                href={content.contact.social.instagram}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <i className="fab fa-instagram" />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <div className="single-sidebar-widget">
                                    <div className="wid-title">
                                        <h3>All News</h3>
                                    </div>
                                    <div className="tagcloud">
                                        <Link href="/news">Back to News</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsDetails;
