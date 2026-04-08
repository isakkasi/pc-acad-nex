const certificatePages = [
    {
        id: 1,
        img: "147_Page1.jpg",
    },
    {
        id: 2,
        img: "147_Page2.jpg",
    },
    {
        id: 3,
        img: "147_Page3.jpg",
    },
    {
        id: 4,
        img: "147_Page4.jpg",
    },
    {
        id: 5,
        img: "147_Page5.jpg",
    },
    {
        id: 6,
        img: "147_Page6.jpg",
    },
];

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
