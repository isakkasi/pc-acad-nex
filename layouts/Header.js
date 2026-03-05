"use client";
import { nextUtility } from "@/utility";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";

import Sidebar from "@/layouts/Sidebar";
import Menu from "@/layouts/Menu";

const Header = ({ single }) => {
    useEffect(() => {
        nextUtility.stickyNav();
    }, []);

    const [sidebarToggle, setSidebarToggle] = useState(false);

    const menu = [
        { id: 0, href: "/", title: "Home" },
        {
            id: 1,
            href: "/courses",
            title: "Courses",
            submenus: [
                { id: "a", href: "/courses/incoming-courses", title: "Incoming Courses" },
                { id: "b", href: "/courses/type-trainings", title: "Type Trainings" },
                {
                    id: "c",
                    href: "/courses/online-trainings",
                    title: "Online Trainings",
                },
                { id: "d", href: "/courses/other-trainings", title: "Other Trainings" },
            ],
        },
        { id: 2, href: "/about", title: "About" },
        { id: 3, href: "/contact", title: "Contact" },
        { id: 4, href: "/blog", title: "Blog" },
    ];

    return (
        <Fragment>
            <header id="header-sticky" className="header-3">
                <div className="container-fluid">
                    <div className="mega-menu-wrapper">
                        <div className="header-main">
                            <div className="sticky-logo">
                                <Link href="/">
                                    <img src="assets/img/logo/black-logo.svg" alt="logo-img" />
                                </Link>
                            </div>
                            <div className="header-left">
                                <div className="mean__menu-wrapper">
                                    <div className="main-menu">
                                        <Menu single={single} menu={menu} />
                                    </div>
                                </div>
                            </div>
                            <div className="header-right d-flex justify-content-end align-items-center">
                                <div className="header__hamburger d-xl-block my-auto">
                                    <div className="sidebar__toggle" onClick={() => setSidebarToggle(true)}>
                                        <i className="far fa-bars" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <Sidebar sidebarToggle={sidebarToggle} close={() => setSidebarToggle(false)} single={single} menu={menu} />
        </Fragment>
    );
};
export default Header;
