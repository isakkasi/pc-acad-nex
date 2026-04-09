import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";

const page = () => {
    return (
        <NextLayout>
            <Breadcrumb
                pageTitle="Other Trainings"
                crumbs={[
                    { label: "Courses", href: "/courses" },
                    { label: "Other Trainings" },
                ]}
            />
            <div className="error-section fix section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="error-items text-center">
                                <div className="error-image wow fadeInUp" data-wow-delay=".3s">
                                    <i
                                        className="fal fa-tools"
                                        style={{ fontSize: "8rem", color: "var(--theme)", opacity: 0.8 }}
                                    />
                                </div>
                                <h2 className="wow fadeInUp" data-wow-delay=".4s" style={{ marginTop: "30px" }}>
                                    Page Under Development
                                </h2>
                                <p className="wow fadeInUp" data-wow-delay=".45s" style={{ marginTop: "16px", marginBottom: "40px" }}>
                                    We are working on this section. In the meantime, please contact us to find out more about our other training offerings.
                                </p>
                                <div className="d-flex gap-3 justify-content-center wow fadeInUp" data-wow-delay=".5s">
                                    <Link href="/contact" className="theme-btn">
                                        <span>
                                            Contact Us <i className="fas fa-chevron-right" />
                                        </span>
                                    </Link>
                                    <Link href="/courses" className="theme-btn hover-white">
                                        <span>
                                            All Courses <i className="fas fa-chevron-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </NextLayout>
    );
};

export default page;