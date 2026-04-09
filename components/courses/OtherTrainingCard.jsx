import Link from "next/link";

const OtherTrainingCard = ({ course }) => {
    return (
        <div className="col-xl-4 col-lg-4 col-md-4 wow fadeInUp" data-wow-delay=".2s">
            <div className="course-box-items service-card-items" style={{ minHeight: "24rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div className="icon">
                    <i className="fal fa-globe" />
                </div>
                <span style={{ fontSize: "0.8rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--theme)" }}>
                    {course.category}
                </span>
                <h3 style={{ marginTop: "8px" }}>
                    {course.title}
                    {course.subtitle && (
                        <span style={{ fontSize: "0.75em", fontWeight: 400, display: "block" }}>{course.subtitle}</span>
                    )}
                </h3>
                {/* <p style={{ fontSize: "0.85rem", marginBottom: "6px" }}>
                    <i className="fal fa-clock" /> {course.duration}
                    &nbsp;&nbsp;
                    <i className="fal fa-desktop" /> {course.delivery}
                </p>
                <p style={{ fontSize: "0.9rem" }}>{course.description}</p>
                {course.topics && course.topics.length > 0 && (
                    <ul className="checked-list mt-3 mb-3">
                        {course.topics.slice(0, 4).map((topic, index) => (
                            <li key={index} style={{ fontSize: "0.85rem" }}>{topic}</li>
                        ))}
                        {course.topics.length > 4 && (
                            <li style={{ fontSize: "0.85rem", fontStyle: "italic" }}>
                                + {course.topics.length - 4} more topics
                            </li>
                        )}
                    </ul>
                )} */}
                <div style={{marginTop: "2rem", textAlign: "right"}}>
                <Link href="https://pca.contipso.com/" className="link-btn" target="_blank" rel="noopener noreferrer">
                    Go to platform <i className="far fa-arrow-right" />
                </Link>
                </div>
            </div>
        </div>
    );
};

export default OtherTrainingCard;
