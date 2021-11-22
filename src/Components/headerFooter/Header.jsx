import React from "react";
import logo from "../../assets/programateLogo.png";
import projectIcon from "../../assets/icons/projects-icon.svg";
import dashboardIcon from "../../assets/icons/dashboard-icon.svg";
import forumIcon from "../../assets/icons/forum-icon.svg";
import { Link } from "react-router-dom";
import "./headerFooterStyles.css";
import { Dropdown } from "react-bootstrap";

export default function Header() {
  return (
    <>
      <header>
        <div className="headerContainer">
          <div className="hamburguerMenu">
            <Dropdown>
              <Dropdown.Toggle
                variant="bg-transparent"
                id="dropdown-basic"
                className="caret-off"
              >
                <i style={{ margin: "0" }} class="fas fa-bars"></i>
              </Dropdown.Toggle>

              <Dropdown.Menu class="hamburguerMenu">
                <Dropdown.Item>
                  <span>
                    <img src={dashboardIcon} alt="dashboardIcon" />
                  </span>
                  <Link className="linksHeader" to="*">
                    Dashboard
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <span>
                    <img src={projectIcon} alt="projectIcon" />
                  </span>
                  <Link className="linksHeader" to="/proyectos">
                    Proyectos
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <span>
                    <img src={forumIcon} alt="forumIcon" />
                  </span>
                  <Link className="linksHeader" to="/anuncios">
                    Anuncios
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <img className="Logo" src={logo} alt="Prográmate-logotipo" />

          <div className="iconsContainer">
            <div>
              <img src={dashboardIcon} alt="dashboardIcon" />
              <a className="linksHeader">Dashboard</a>
            </div>

            <div>
              <img src={projectIcon} alt="projectIcon" />
              <Link className="linksHeader" to="/proyectos">
                Proyectos
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
            <Dropdown>
              <Dropdown.Toggle
                variant="bg-transparent"
                id="dropdown-basic"
                className="caret-off"
              >
                <i className="far fa-bell"></i>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1" style={{ color: "gray" }}>
                  Notificaciones aqui
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-2">Ver todas</Dropdown.Item>
                <Dropdown.Item style={{ color: "red" }} href="#/action-3">
                  Eliminar todas
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle
                variant="bg-transparent"
                id="dropdown-basic"
              ></Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  <span></span>Configuración
                </Dropdown.Item>
                <Dropdown.Item href="#/action-1">
                  <span></span>Salir
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </header>
    </>
  );
}
