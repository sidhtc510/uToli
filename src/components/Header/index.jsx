import * as React from "react";
import s from "./s.module.css";
import { Context } from "../../context";
import { CiMenuBurger, CiSettings, CiLogout, CiDark, CiLight } from "react-icons/ci";
import { LiaListAlt } from "react-icons/lia";
import { Link } from "react-router-dom";
// import CheckboxMy from "../UI/CheckboxMy";
import { Switch } from "antd";
import Button from "../UI/Button";

export default function Header({ ...props }) {
    const { darkMode, setDarkmode } = React.useContext(Context);
    const [nav_menu_isActive, set_nav_menu_isActive] = React.useState(false);

    return (
        <>
            <div className={s.Header_wrap} {...props}>
                <Link to="/">uToli</Link>
                <div>
                    {/* <CheckboxMy checked={darkMode} onChange={() => setDarkmode(!darkMode)} /> */}
                    <Switch checked={darkMode} onChange={() => setDarkmode(!darkMode)} />

                    <Button className={s.menu_button} onClick={() => set_nav_menu_isActive(true)}>
                        <CiMenuBurger />
                    </Button>
                </div>
            </div>

            <div className={nav_menu_isActive ? [s.navMenuWrapper, s.active].join(" ") : s.navMenuWrapper} onClick={() => set_nav_menu_isActive(false)}>
                <nav className={nav_menu_isActive ? [s.Header_nav_menu, s.active].join(" ") : s.Header_nav_menu}>
                    <ul>
                        <Link to="/">
                            <li>
                                <LiaListAlt />
                                Orders
                            </li>
                        </Link>
                        <Link to="#">
                            <li>
                                <CiSettings />
                                Settings
                            </li>
                        </Link>
                        <Link to="#" onClick={() => setDarkmode(!darkMode)}>
                            <li>
                                {darkMode ? (
                                    <>
                                        <CiLight /> Light Mode
                                    </>
                                ) : (
                                    <>
                                        <CiDark /> Dark Mode
                                    </>
                                )}
                            </li>
                        </Link>
                        <Link to="#">
                            <li>
                                <CiLogout />
                                LogOut
                            </li>
                        </Link>
                    </ul>
                </nav>
            </div>
        </>
    );
}
