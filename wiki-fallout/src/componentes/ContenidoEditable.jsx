import React, { useState } from "react";

export default function ContenidoEditable({ textoInicial, puedeEditar }) {
  const [editando, setEditando] = useState(false);
  const [texto, setTexto] = useState(textoInicial);

  const manejarClickEditar = () => {
    if (puedeEditar) setEditando(true);
  };

  const manejarGuardar = () => {
    setEditando(false);
  };

  return (
    <div className="editable-box">
      {!editando ? (
        <>
          <p>{texto}</p>
          {puedeEditar && (
            <button
              data-testid="btnEditar"
              onClick={manejarClickEditar}
            >
              Editar
            </button>
          )}
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
}
