import { NavLink } from "react-router-dom";

import { Icon } from "../../images/Icon/Icon";

import useMedia from "../../hooks/useMedia";

import s from "./Navigation.module.css";

const Navigation = () => {
  const { isMobile } = useMedia();

  const getClasses = ({ isActive }) =>
    [s.navLink, isActive ? s.active : ""].join(" ");

  const navLinks = [
    {
      title: "Home",
      path: "/",
      icon: "icon-home",
      visible: true,
    },
    {
      title: "Statistics",
      path: "/statistics",
      icon: "icon-timeline",
      visible: true,
    },
    {
      title: "Currency",
      path: "/currency",
      icon: "icon-dollar",
      visible: isMobile,
    },
  ];

  return (
    <nav className={s.navigation}>
      {navLinks
        .filter((link) => link.visible)
        .map((link) => (
          <NavLink
            key={link.title}
            to={link.path}
            className={getClasses}
            aria-label="navlink"
          >
            <div className={s.linkIcon}>
              <Icon id={link.icon} className={s.navIcon} />
            </div>
            <p className={isMobile ? s.hidden : s.linkText}>{link.title}</p>
          </NavLink>
        ))}
    </nav>
  );
};

export default Navigation;
