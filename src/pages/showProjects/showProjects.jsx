import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import * as controllerProject from "../../controllers/controllerProject";
import TitleSectionWithButton from "../../Components/titles/TitleSectionWitButton";
import "./showProjects.css";

export const ShowProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const listProject = async () => {
      try {
        const res = await controllerProject.listProjects();
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.log(error);
      }
    };
    listProject();
  }, []);

  return (
    <>
      <TitleSectionWithButton
        name={"BRIEFS DE LA PROMO"}
        btnName={"Agregar Proyecto"}
        url={"/crearProyecto"}
      />

      <div className="cardsGrid">
        {projects.map((project, i) => (
          <div key={i} className="cardProject">
            <div className="imgProject"></div>
            <div className="cardContent">
              <h5 className="titleProject">{project.name}</h5>
              <div className="descriptionContainer">
                <p className="descriptionProject">{project.description}</p>
              </div>
              <Button variant="warning  font-weight-bold text-2 btn-sm p-2 px-3 btnProject">
                Ver mas
              </Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
