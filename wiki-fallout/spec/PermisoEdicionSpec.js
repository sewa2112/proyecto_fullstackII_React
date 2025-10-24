import React, { useState } from "react";


const ContenidoEditable = ({ isLoggedIn }) => {
  const [editando, setEditando] = useState(false);
  const [texto, setTexto] = useState("Texto de ejemplo...");

  const manejarClickEditar = () => {
    if (isLoggedIn) setEditando(true);
  };

  const manejarGuardar = () => setEditando(false);

  return (
    <div className="contenido-editable">
      {!editando ? (
        <>
          <p>{texto}</p>
          <button data-testid="btnEditar" onClick={manejarClickEditar}>
            Editar
          </button>
        </>
      ) : (
        <>
          <textarea
            data-testid="editor"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
          />
          <button onClick={manejarGuardar}>Guardar</button>
        </>
      )}
    </div>
  );
};

export default ContenidoEditable;
