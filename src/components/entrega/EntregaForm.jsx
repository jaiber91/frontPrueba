import React, { useState } from "react";
import EntregaRow from "./EntregaRow";

const EntregaForm = () => {
  const competenciesList = [
    "C1. Maquetar una aplicación",
    "C2. Crear una interfaz de usuario web estática y adaptable",
    "C3. Desarrollar una interfaz de usuario web dinámica",
    "C4. Crear una interfaz de usuario con una solución de gestión de contenidos o de e-comercio",
    "C5. Crear una base de datos",
    "C6. Desarrollar los componentes de acceso a los datos",
    "C7. Desarrollar la parte back-end de una aplicación web o móvil",
    "C8. Desarrollar e implementar componentes en una aplicación de gestión de contenidos o de comercio electrónico",
  ];

  const [competencies, setCompetencies] = useState([]);
  const [array, setArray] = useState([]);

  const handleOptionChange = (e) => {
    setCompetencies({ ...competencies, competence: e.target.value });
  };

  const handleLevelChange = (e) => {
    setCompetencies({ ...competencies, level: e.target.value });
  };

  const handleData = (e) => {
    e.preventDefault();
    if (competencies.competence === "Selecciona competencia") {
      alert("No seleccionaste una competencia");
      return;
    }

    if (!competencies.competence || !competencies.level) {
      alert("No seleccionaste alguna opción");
      return;
    }

    setArray([...array, competencies]);
    //console.log(array);
  };

  const removeCompetence = (index) => {
    const competencesList = [...array];
    competencesList.splice(index, 1);
    setArray(competencesList);

    console.log(array);
  };

  return (
    <>
      <form onSubmit={handleData} style={{ padding: "2rem" }}>
        <div className="w-64">
          <div className="relative">
            <h6>Selecciona una competencia </h6>
            <select
              className="w-full font-semibold"
              onChange={handleOptionChange}
            >
              <option>Selecciona competencia</option>
              {competenciesList.map((competence, x) => (
                <option key={x} value={competence} name="competence">
                  {competence}
                </option>
              ))}
            </select>
            <div className="absolute left-0 right-0 top-0 bottom-0" />
          </div>
          <div className="checkboxes border-gray-200 border border-solid">
            <label htmlFor="one" className="block ">
              <input
                type="radio"
                name="level"
                value="nivel 1"
                onChange={handleLevelChange}
                className="m-3"
              />
              Nivel 1
            </label>
            <label htmlFor="two" className="block">
              <input
                type="radio"
                name="level"
                value="nivel 2"
                onChange={handleLevelChange}
                className="m-3"
              />
              Nivel 2
            </label>
            <label htmlFor="three" className="block">
              <input
                type="radio"
                name="level"
                value="nivel 3"
                onChange={handleLevelChange}
                className="m-3"
              />
              Nivel 3
            </label>
          </div>
        </div>
        <button onClick={handleData}>Agregar </button>
      </form>
      <div>
        <EntregaRow array={array} removeCompetence={removeCompetence} />
      </div>
      ;
    </>
  );
};

export default EntregaForm;
