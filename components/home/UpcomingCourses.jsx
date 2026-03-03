import Link from "next/link";

const UpcomingCourses = () => {
    const courses = [
        {
            id: 1,
            title: "Airbus A320neo Type Training",
            image: "/assets/img/ac/A320neo.jpg",
            href: "/service-details",
        },
        {
            id: 2,
            title: "Airbus A330ceo Type Training",
            image: "/assets/img/ac/A330ceo.png",
            href: "/service-details",
        },
        {
            id: 3,
            title: "Airbus A330neo Type Training",
            image: "/assets/img/ac/A330neo.jpg",
            href: "/service-details",
        },
        {
            id: 4,
            title: "Airbus A330neo Type Training",
            image: "/assets/img/ac/A330neo.jpg",
            href: "/service-details",
        },
        {
            id: 5,
            title: "Airbus A330neo Type Training",
            image: "/assets/img/ac/A330neo.jpg",
            href: "/service-details",
        },
    ];
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
export default UpcomingCourses;
