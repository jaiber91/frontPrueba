import React, { useState } from "react";

const SearchBar = () => {
  const competenciesList = ["Competencia 1", "Competencia 2", "Competencia 3"];

  const competenciesObject = {
    competence: "",
    level: null,
  };

  const [option, setOption] = useState([]);
  const [level, setLevel] = useState([]);
  const [competencies, setCompetencies] = useState(competenciesObject);
  //const [state, setstate] = useState(initialState);

  const handleOptionChange = (e) => {
    setOption(e.target.value);
    setCompetencies({ ...competencies, competence: e.target.value });
  };

  const handleLevelChange = (e) => {
    //setLevel(...level, [e.target.value]);
    setCompetencies({ ...competencies, [e.target.name]: e.target.value });
    setLevel(e.target.value);
  };

  const handleData = (e) => {
    e.preventDefault();
    console.log(competencies);
    console.log(option, level);
    //console.log(option, level);
  };

  return (
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
              value="nivel-1"
              onChange={handleLevelChange}
              className="m-3"
            />
            Nivel 1
          </label>
          <label htmlFor="two" className="block">
            <input
              type="radio"
              name="level"
              value="nivel-2"
              onChange={handleLevelChange}
              className="m-3"
            />
            Nivel 2
          </label>
          <label htmlFor="three" className="block">
            <input
              type="radio"
              name="level"
              value="nivel-3"
              onChange={handleLevelChange}
              className="m-3"
            />
            Nivel 3
          </label>
        </div>
      </div>
      <button onClick={handleData}>Guardar</button>
    </form>
  );
};

const App2 = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-1/3 h-16  text-black-100 flex items-center justify-center text-xl">
        <SearchBar />
      </div>
    </div>
  );
};

export default App2;
