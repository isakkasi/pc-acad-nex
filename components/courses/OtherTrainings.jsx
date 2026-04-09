import OtherTrainingCard from "@/components/courses/OtherTrainingCard";
import content from "@/data/content.json";

const OtherTrainings = () => {
    const courses = content.onlineTrainings;
    return (
        <section className="service-section fix section-padding">
            <div className="container">
                <div className="section-title text-center">
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                        Online &amp; Compliance Trainings
                    </h2>
                    <p className="wow fadeInUp" data-wow-delay=".4s" style={{ maxWidth: "700px", margin: "0 auto" }}>
                        EASA Part-147 approved courses delivered in classroom, virtual classroom, or blended format.
                        Designed for aircraft maintenance and compliance monitoring professionals.
                    </p>
                </div>
                <div className="row mt-5">
                    {courses.map((course) => (
                        <OtherTrainingCard key={course.id} course={course} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OtherTrainings;
