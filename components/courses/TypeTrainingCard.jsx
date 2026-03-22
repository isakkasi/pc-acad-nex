import Link from "next/link";

const TypeTrainingCard = ({ training }) => {
    return (
        <div className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
            <div className="project-card-items">
                <div className="project-image">
                    <img src={training.image} alt={training.title} />
                </div>
                <div className="project-content">
                    <p>Cat. B1.1/B2</p>
                    <h3>
                        <Link href="project-details">
                            {training.title}
                        </Link>
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default TypeTrainingCard;
