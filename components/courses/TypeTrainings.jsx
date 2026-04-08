import TypeTrainingCard from "@/components/courses/TypeTrainingCard";
import content from "@/data/content.json";

const TypeTrainings = () => {
    const typeTrainingPortfolio = content.typeTrainings;
    return (
        <section className="project-section fix section-padding">
            <div className="container">
                <div className="section-title text-center">
                    {/* <span className="sub-content wow fadeInUp">
                        <img src="/assets/img/bale.png" alt="img" />
                        Courses
                    </span> */}
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                        Explore Our Type Training Courses
                    </h2>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-9">
                        <div className="row justify-content-center">
                            {typeTrainingPortfolio.map((training) => (
                                <TypeTrainingCard key={training.id} training={training} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TypeTrainings;
