import content from "@/data/content.json";

const certificatePages = content.certificates.map((c) => ({
    id: c.id,
    img: c.image.split("/").pop(),
}));

export const CompanyCertificates = () => {
    return (
        <section className="working-process-section section-padding pt-0">
            <div className="container">
                <div className="section-title text-center">
                    <span className="sub-content wow fadeInUp"></span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                        Our Certificates
                    </h2>
                </div>
                <div className="work-process-wrapper">
                    <div className="row align-items-center">
                        {certificatePages.map((page) => (
                            <div className="col-lg-4" key={page.id}>
                                <div className="work-process-image wow fadeInUp" data-wow-delay=".4s">
                                    <img src={`/assets/img/certificates/${page.img}`} alt="img" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
