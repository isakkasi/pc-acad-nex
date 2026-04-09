import Link from "next/link";
import content from "@/data/content.json";

const News = () => {
  const news = content.news;
    return (
      <section className="news-section section-padding pt-0">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              {/* <img src="/assets/img/bale.png" alt="img" /> */}
              {/* News &amp; Blog */}
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Explore Our Latest News &amp; Blog
            </h2>
          </div>
          <div className="row justify-content-center">
            {news.map((item) => (
              <div
                key={item.id}
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay={`${0.2 + item.id * 0.2}s`}
              >
                <div className="news-box-items">
                  <div className="news-content">
                    <p>{item.date}</p>
                    <h4>
                      <Link href={item.href || `/news/${item.slug}`}>{item.title}</Link>
                    </h4>
                    <Link className="link-btn" href={item.href || `/news/${item.slug}`}>
                      Read More
                      <i className="far fa-arrow-right" />
                    </Link>
                  </div>
                  <div className="news-image bg-cover" style={{ backgroundImage: `url(${item.image})` }} />
                </div>
              </div>
            ))}


            


          </div>
        </div>
      </section>
    );
};
export default News;