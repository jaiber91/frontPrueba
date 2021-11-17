import React from "react";

const EntregaRow = ({ array, removeCompetence }) => {
  console.log(array);
  return (
    <div style={{ padding: "2rem" }}>
      <h5>Competencias</h5>
      {array.map((el, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "1rem",
          }}
        >
          <p>
            <b>{el.level}: </b> {el.competence}
          </p>
          <button onClick={() => removeCompetence(i)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default EntregaRow;

/* {
  array.map((el, i) => {
    <>
      <p key={i}>
        {el.competence} {el.level}
      </p>
      <button >X</button>
    </>;
  });
} */
