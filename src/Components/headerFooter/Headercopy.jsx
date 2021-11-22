import React from "react";
import logo from "../../assets/programateLogo.png";
import projectIcon from "../../assets/icons/projects-icon.svg";
import dashboardIcon from "../../assets/icons/dashboard-icon.svg";
import forumIcon from "../../assets/icons/forum-icon.svg";
import { Link } from "react-router-dom";
import "./headerFooterStyles.css";

export default function Header() {
  return (
    <>
      <header>
        <div className="headerContainer">
          <div className="hamburguerMenu">
            <i style={{ margin: "0" }} class="fas fa-bars"></i>
          </div>

          <img className="Logo" src={logo} alt="Prográmate-logotipo" />

          <div className="iconsContainer">
            <div>
              <img src={dashboardIcon} alt="dashboardIcon" />
              <a className="linksHeader" href="#!">
                Dashboard
              </a>
            </div>

            <div>
              <img src={projectIcon} alt="projectIcon" />
              <Link className="linksHeader" to="/proyectos">
                Projectos
              </Link>
            </div>

            <div>
              <img src={forumIcon} alt="forumIcon" />
              <Link className="linksHeader" to="/anuncios">
                Anuncios
              </Link>
            </div>
          </div>

          <div className="notificationsConfigContainer">
            <i className="far fa-bell"></i>
            <i class="fas fa-caret-down"></i>
          </div>
        </div>
      </header>
    </>
  );
}
