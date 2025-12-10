import React, { useEffect, useState } from "react";

const API = "https://x8ki-letl-twmt.n7.xano.io/api:1NeVgW6G/usuarios";

export default function PanelUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [nuevoUser, setNuevoUser] = useState({ username: "", password: "" });
  const [editando, setEditando] = useState(null); // id del usuario editándose
  const [editUser, setEditUser] = useState({ username: "", password: "" });
  const [mensaje, setMensaje] = useState("");

  // =============================
  //   GET: Cargar usuarios
  // =============================
  const cargarUsuarios = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setUsuarios(data);
    } catch (error) {
      console.error("Error cargando usuarios", error);
    }
  };

  useEffect(() => {
    cargarUsuarios();
  }, []);

  // =============================
  //   POST: Crear usuario
  // =============================
  const crearUsuario = async () => {
    try {
      const res = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevoUser),
      });

      if (!res.ok) throw new Error("Error creando usuario");

      setMensaje("Usuario creado correctamente");
      setNuevoUser({ username: "", password: "" });
      cargarUsuarios();
    } catch (error) {
      console.error(error);
      setMensaje("Error creando usuario");
    }
  };

  // =============================
  //   PATCH: Editar usuario
  // =============================
  const guardarEdicion = async (id) => {
    try {
      const res = await fetch(`${API}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editUser),
      });

      if (!res.ok) throw new Error("Error editando usuario");

      setMensaje("Usuario editado correctamente");
      setEditando(null);
      cargarUsuarios();
    } catch (error) {
      console.error(error);
      setMensaje("Error editando usuario");
    }
  };

  // =============================
  //   DELETE: Eliminar usuario
  // =============================
  const eliminarUsuario = async (id) => {
    try {
      const res = await fetch(`${API}/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Error eliminando usuario");

      setMensaje("Usuario eliminado");
      cargarUsuarios();
    } catch (error) {
      console.error(error);
      setMensaje("Error eliminando usuario");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Gestión de Usuarios</h2>
      <p style={{ color: "green" }}>{mensaje}</p>

      {/* Crear usuario */}
      <h3>Crear usuario</h3>
      <input
        type="text"
        placeholder="Nuevo username"
        value={nuevoUser.username}
        onChange={(e) =>
          setNuevoUser({ ...nuevoUser, username: e.target.value })
        }
      />
      <input
        type="password"
        placeholder="Nueva contraseña"
        value={nuevoUser.password}
        onChange={(e) =>
          setNuevoUser({ ...nuevoUser, password: e.target.value })
        }
      />
      <button onClick={crearUsuario}>Crear</button>

      <hr />

      {/* Lista de usuarios */}
      <h3>Usuarios registrados</h3>
      <ul>
        {usuarios.map((u) => (
          <li key={u.id}>
            {editando === u.id ? (
              <div>
                <input
                  type="text"
                  value={editUser.username}
                  onChange={(e) =>
                    setEditUser({ ...editUser, username: e.target.value })
                  }
                />
                <input
                  type="password"
                  value={editUser.password}
                  onChange={(e) =>
                    setEditUser({ ...editUser, password: e.target.value })
                  }
                />
                <button onClick={() => guardarEdicion(u.id)}>Guardar</button>
                <button onClick={() => setEditando(null)}>Cancelar</button>
              </div>
            ) : (
              <div>
                <strong>{u.username}</strong> (ID: {u.id})
                <button
                  onClick={() => {
                    setEditando(u.id);
                    setEditUser({ username: u.username, password: "" });
                  }}
                >
                  Editar
                </button>
                <button onClick={() => eliminarUsuario(u.id)}>Eliminar</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
