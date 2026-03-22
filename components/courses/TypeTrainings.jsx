import TypeTrainingCard from "@/components/courses/TypeTrainingCard";

const TypeTrainings = () => {
    const typeTrainingPortfolio = [
        {
            id: 1,
            title: "Airbus A320ceo series Type Training",
            description: "Description for Airbus A320 (CFM56) Type Training",
            image: "/assets/img/ac/A320ceo.jpg",
        },
        {
            id: 2,
            title: "Airbus A320neo series Type Training",
            description: "Description for Airbus A320neo Type Training",
            image: "/assets/img/ac/A320neo.jpg",
        },
        
        {
            id: 3,
            title: "Airbus A330ceo Type Training",
            description: "Description for Airbus A330ceo Type Training",
            image: "/assets/img/ac/A330ceo.png",
        },
        
        {
            id: 4,
            title: "Airbus A330neo Type Training",
            description: "Description for Airbus A330neo Type Training",
            image: "/assets/img/ac/A330neo.jpg",
        },
        {
            id: 5,
            title: "Boeing 737NG Type Training",
            description: "Description for Boeing 737NG Type Training",
            image: "/assets/img/ac/B737ng.jpg",
        },
        {
            id: 6,
            title: "Boeing 737MAX Type Training",
            description: "Description for Boeing 737MAX Type Training",
            image: "/assets/img/ac/B737max.jpg",
        },
        {
            id: 7,
            title: "Bombardier BD-500 (A220) Type Training",
            description: "Description for Bombardier BD-500 (A220) Type Training",
            image: "/assets/img/ac/A220.jpg",
        },
        {
            id: 8,
            title: "Gulfstream 200/280 Type Training",
            description: "Description for Gulfstream 200/280 Type Training",
            image: "/assets/img/ac/G200.png",
        },
    ];
    return (
        <section className="project-section fix section-padding">
            <div className="container">
                <div className="section-title text-center">
                    <span className="sub-content wow fadeInUp">
                        <img src="/assets/img/bale.png" alt="img" />
                        Courses
                    </span>
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
