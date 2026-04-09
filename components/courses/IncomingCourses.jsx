import Link from "next/link";
import content from "@/data/content.json";

const IncomingCourses = () => {
    const courses = content.incomingCourses;
    return (
        <section className="service-section fix pt-80 pb-80 section-bg">
            <div className="container">
                <h4 className="mb-5 text-white text-center wow fadeInUp" data-wow-delay=".3s">
                    Find Out Our Upcoming Courses
                </h4>

                <div className="row g-4 justify-content-center">
                    {courses.map((course) => (
                        <div key={course.id} className="col-xl-5 col-lg-5 col-md-5 wow fadeInUp" data-wow-delay=".6s">
                            <div className="service-items" style={{minHeight: "10rem"}}>
                                <div className="content">
                                    <h5 style={{ marginTop: "1.5rem", marginBottom: "2rem" }}>
                                        <Link href={course.href}>{course.title}</Link>
                                    </h5>
                                    <Link className="arrow-btn" href={course.href}>
                                        <i className="far fa-arrow-right" />
                                    </Link>
                                </div>
                                <div className="thumb" style={{ flexShrink: 0, width: "50%" }}>
                                    <img
                                        src={course.image}
                                        alt={course.title}
                                        style={{ width: "100%", objectFit: "cover" }}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default IncomingCourses;
