import Link from "next/link";

const TypeTrainingDetails = ({ training }) => {
    return (
        <section className="project-details-section fix section-padding">
            <div className="container">
                <div className="project-details-wrapper">
                    {/* Header */}
                    <div className="row g-4 align-items-start justify-content-between">
                        <div className="project-details-image mt-50 center">
                            <img
                                // src={training.image}
                                // alt={training.title}
                                src="/assets/img/course/ac.png"
                                alt="ac-image"
                                style={{ width: "100%", borderRadius: "8px" }}
                            />
                        </div>

                        <div className="col-lg-7">
                            <div className="project-details-content">
                                <p
                                    className="text-uppercase"
                                    style={{
                                        letterSpacing: "0.15em",
                                        color: "var(--theme-color)",
                                        fontWeight: 600,
                                    }}
                                >
                                    Type Training
                                </p>
                                <h2 className="mt-2">
                                    {training.title}
                                    {training.subtitle && (
                                        <>
                                            <br />
                                            <span>{training.subtitle}</span>
                                        </>
                                    )}
                                </h2>
                                {training.category && (
                                    <h5 className="mt-2" style={{ fontWeight: 400 }}>
                                        Category {training.category}
                                    </h5>
                                )}
                                <p className="mt-4">{training.description}</p>

                                <h4 className="mt-50">Course Highlights</h4>
                                <ul className="project-list mt-3">
                                    <li>
                                        <i className="far fa-crosshairs" />
                                        For aircraft maintenance professionals applying for EASA Part-66 license
                                    </li>
                                    <li>
                                        <i className="far fa-chalkboard" />
                                        Theoretical: Delivered in classroom, virtual classroom, or blended format
                                        {training.selfStudyNote && ". Includes self-study (up to 30 hrs)"}
                                    </li>
                                    <li>
                                        <i className="far fa-paper-plane" />
                                        Practical: Conducted on aircraft and in training facilities
                                    </li>
                                    <li>
                                        <i className="far fa-award" />
                                        EASA Part-147 Certificate of Recognition upon completion
                                    </li>
                                    <li>
                                        <i className="far fa-calendar" />
                                        Flexible course schedule
                                    </li>
                                    <li>
                                        <i className="far fa-coins" />
                                        Flexible pricing models
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Info sidebar */}
                        <div className="col-lg-4">
                            <div className="project-information">
                                <h4>Course Information</h4>
                                <ul>
                                    <li style={{ fontSize: "1rem" }}>
                                        Aircraft <span style={{marginLeft: "16px", textAlign: "right"}}>{training.title}</span>
                                    </li>
                                    {training.engines && (
                                        <li style={{ fontSize: "1rem" }}>
                                            Engines <span style={{marginLeft: "16px", textAlign: "right"}}>{training.engines}</span>
                                        </li>
                                    )}
                                    {training.category && (
                                        <li style={{ fontSize: "1rem" }}>
                                            Category <span style={{marginLeft: "16px", textAlign: "right"}}>{training.category}</span>
                                        </li>
                                    )}
                                    <li style={{ fontSize: "1rem" }}>
                                        Approval <span style={{marginLeft: "16px", textAlign: "right"}}>EASA Part-147</span>
                                    </li>
                                    <li style={{ fontSize: "1rem" }}>
                                        Price <span style={{marginLeft: "16px", textAlign: "right"}}>On request</span>
                                    </li>
                                </ul>
                                <div className="mt-4">
                                    <Link href="/contact" className="theme-btn w-100 text-center">
                                        Reserve your seat <i className="far fa-arrow-right" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Available options table */}
                    {training.options && training.options.length > 0 && (
                        <div className="mt-50">
                            <h4 className="mb-4">Available Options</h4>
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead style={{ backgroundColor: "var(--theme-color)", color: "#fff" }}>
                                        <tr>
                                            <th>Course Option</th>
                                            <th>Theory</th>
                                            <th>Practical</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {training.options.map((option, index) => (
                                            <tr key={index}>
                                                <td>{option.label}</td>
                                                <td>{option.theory}</td>
                                                <td>{option.practical}</td>
                                                <td>{option.total}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            {training.selfStudyNote && (
                                <p className="mt-2" style={{ fontSize: "0.9rem", color: "#666" }}>
                                    * Up to 30 hours self-study included
                                </p>
                            )}
                        </div>
                    )}

                    {/* CTA */}
                    <div className="mt-50 p-4 text-center" style={{ background: "#f5f5f5", borderRadius: "8px" }}>
                        <h4>Ready to advance your career?</h4>
                        <p className="mt-2">Contact us to request pricing, check upcoming dates, or reserve your seat.</p>
                        <div className="mt-4 d-flex gap-3 justify-content-center flex-wrap">
                            <Link href="/contact" className="theme-btn">
                                Get in touch <i className="far fa-arrow-right" />
                            </Link>
                            <Link href="/courses/type-trainings" className="theme-btn hover-white">
                                All type trainings <i className="far fa-arrow-right" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default TypeTrainingDetails;