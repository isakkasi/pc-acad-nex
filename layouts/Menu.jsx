import { Fragment } from 'react';
import Link from 'next/link';

const Menu = ({ single, menu }) => {
    return (
        <Fragment>
            <nav id="mobile-menu" className="d-none d-xl-block">
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
                                <ul className="submenu">
                                    {item.submenus.map((submenu) => (
                                        <li key={submenu.id}>
                                            <Link href={submenu.href}>
                                                {submenu.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </Fragment>
    );
};

export default Menu;
