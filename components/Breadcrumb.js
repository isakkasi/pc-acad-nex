import Link from "next/link";
import { Fragment } from "react";

/**
 * Breadcrumb component.
 *
 * Usage A — multi-step (recommended for nested pages):
 *   <Breadcrumb
 *     pageTitle="Airbus A320 series"
 *     crumbs={[
 *       { label: "Courses", href: "/courses" },
 *       { label: "Type Trainings", href: "/courses/type-trainings" },
 *       { label: "Airbus A320 series" },   // no href = current page
 *     ]}
 *   />
 *
 * Usage B — single step (legacy, used by most pages):
 *   <Breadcrumb pageName="About Us" />
 *   <Breadcrumb pageName="Type Trainings" pageTitle="Airbus A320" link="/courses/type-trainings" />
 */
const Breadcrumb = ({ pageName = "Page", pageTitle, link, crumbs }) => {
    const heading = pageTitle ? pageTitle : pageName;

    return (
        <div
            className="breadcrumb-wrapper section-padding bg-cover"
            style={{ backgroundImage: 'url("/assets/img/breadcrumb.jpg")' }}
        >
            <div className="container">
                <div className="page-heading">
                    <h1 className="wow fadeInUp" data-wow-delay=".3s">
                        {heading}
                    </h1>
                    <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s" style={{ flexWrap: "wrap" }}>
                        <li>
                            <Link href="/">Home</Link>
                        </li>

                        {crumbs ? (
                            crumbs.map((crumb, index) => (
                                <Fragment key={index}>
                                    <li>
                                        <i className="fas fa-chevron-right" />
                                    </li>
                                    <li className={!crumb.href ? "style-2" : ""}>
                                        {crumb.href ? (
                                            <Link href={crumb.href}>{crumb.label}</Link>
                                        ) : (
                                            crumb.label
                                        )}
                                    </li>
                                </Fragment>
                            ))
                        ) : (
                            <>
                                <li>
                                    <i className="fas fa-chevron-right" />
                                </li>
                                <li className={!link ? "style-2" : ""}>
                                    {link ? <Link href={link}>{pageName}</Link> : pageName}
                                </li>
                                {link && (
                                    <>
                                        <li>
                                            <i className="fas fa-chevron-right" />
                                        </li>
                                        <li className="style-2">{heading}</li>
                                    </>
                                )}
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Breadcrumb;
