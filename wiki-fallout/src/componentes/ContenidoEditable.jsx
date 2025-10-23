import { useState } from "react";
import "./LogIn.css";
export default function ContenidoEditable({ textoInicial, puedeEditar }) {
  const [texto, setTexto] = useState(textoInicial);
  const [editando, setEditando] = useState(false);

  const guardar = () => setEditando(false);

  return (
    <div className="editable-box">
      {editando && puedeEditar ? (
        <textarea
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          rows={5}
        />
      ) : (
        <p>{texto}</p>
      )}

      {puedeEditar && (
        <button onClick={() => (editando ? guardar() : setEditando(true))}>
          {editando ? "Guardar" : "Editar"}
        </button>
      )}
    </div>
  );
}
