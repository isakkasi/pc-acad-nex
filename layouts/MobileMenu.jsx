"use client";
import { useState } from 'react';
import Link from 'next/link';

const MobileMenu = ({ single, menu }) => {
    const [multiMenu, setMultiMenu] = useState('');

    const multiMenuSet = (value) =>
            setMultiMenu(multiMenu === value ? '' : value),
        multiMenuActiveLi = (value) =>
            value === multiMenu ? { display: 'block' } : { display: 'none' };

    return (
        <div className="mobile-menu fix mb-3 mean-container d-block d-xl-none">
            <div className="mean-bar">
                <a href="#nav" className="meanmenu-reveal">
                    <span>
                        <span>
                            <span />
                        </span>
                    </span>
                </a>
                <nav className="mean-nav">
                    <ul>
                        {menu.map((item) => (
                            <li
                                key={item.id}
                                className={item.submenus ? 'has-dropdown' : ''}
                            >
                                <Link href={item.href}>
                                    {item.title}
                                    {item.submenus && (
                                        <i className="fas fa-angle-down" />
                                    )}
                                </Link>
                                {item.submenus && (
                                    <ul
                                        className="submenu"
                                        style={multiMenuActiveLi(item.id)}
                                    >
                                        {item.submenus.map((submenu) => (
                                            <li key={submenu.id}>
                                                <Link href={submenu.href}>
                                                    {submenu.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                {item.submenus && (
                                    <a
                                        className="mean-expand"
                                        href="#"
                                        onClick={() => multiMenuSet(item.id)}
                                    >
                                        <i className="far fa-plus" />
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default MobileMenu;
