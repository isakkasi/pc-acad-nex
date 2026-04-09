import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";

const page = () => {
    return (
        <NextLayout>
            <Breadcrumb pageTitle="Service Details" crumbs={[{ label: "Service Details" }]} />
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
                                <Link href="/" className="theme-btn wow fadeInUp mt-4" data-wow-delay=".5s">
                                    <span>
                                        Back To Home <i className="fas fa-chevron-right" />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </NextLayout>
    );
};

export default page;
