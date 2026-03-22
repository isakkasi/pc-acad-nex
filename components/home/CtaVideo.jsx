import Link from "next/link";

const CtaVideo = () => {
    return (
        <section>
            <div
                className="cta-video-section fix bg-cover"
                style={{
                    backgroundImage: 'url("/assets/img/cta/cta-video.jpg")',
                }}
            >
                <div className="container">
                    <div className="cta-video-wrapper">
                        <div className="video-box">
                            <Link href="https://www.youtube.com/watch?v=qOw44VFNk8Y" className="video-buttton ripple video-popup">
                                    <i className="fas fa-play" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="marquee-wrapper text-slider">
                    <div className="marquee-inner to-left">
                        <ul className="marqee-list d-flex">
                            <li className="marquee-item">
                                <span className="text-slider">IT</span>
                                <span className="text-slider">Consulting </span>
                                <span className="text-slider style-border" />
                                <span className="text-slider">Co</span>
                                <span className="text-slider">Machine </span>
                                <span className="text-slider style-border" />
                                <span className="text-slider">IT</span>
                                <span className="text-slider">Learning </span>
                                <span className="text-slider style-border" />
                                <span className="text-slider">Web </span>
                                <span className="text-slider">Development</span>
                                <span className="text-slider">IT</span>
                                <span className="text-slider">Consulting </span>
                                <span className="text-slider style-border" />
                                <span className="text-slider">Co</span>
                                <span className="text-slider">Machine </span>
                                <span className="text-slider style-border" />
                                <span className="text-slider">IT</span>
                                <span className="text-slider">Learning </span>
                                <span className="text-slider style-border" />
                                <span className="text-slider">Web </span>
                                <span className="text-slider">Development</span>
                                <span className="text-slider">IT</span>
                                <span className="text-slider">Consulting </span>
                                <span className="text-slider style-border" />
                                <span className="text-slider">Co</span>
                                <span className="text-slider">Machine </span>
                                <span className="text-slider style-border" />
                                <span className="text-slider">IT</span>
                                <span className="text-slider">Learning </span>
                                <span className="text-slider style-border" />
                                <span className="text-slider">Web </span>
                                <span className="text-slider">Development</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default CtaVideo;
