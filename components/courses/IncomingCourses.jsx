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
                        <div key={course.id} className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                            <div className="service-items">
                                <div className="content">
                                    {/* <p>{course.id.toString().padStart(2, "0")}</p> */}
                                    <h5>
                                        <Link href={course.href}>{course.title}</Link>
                                    </h5>
                                    <Link className="arrow-btn" href={course.href}>
                                        <i className="far fa-arrow-right" />
                                    </Link>
                                </div>
                                <div className="thumb">
                                    <img src={course.image} alt="img" />
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
