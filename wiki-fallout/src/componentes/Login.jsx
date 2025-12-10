import React, { useState } from "react";

export default function Login({ setUsuario, usuario }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const manejarLogin = async () => {
    setMensaje("");

    // Validación simple
    if (!username || !password) {
      setMensaje("Por favor completa todos los campos.");
      return;
    }

    try {
      // GET: obtener todos los usuarios desde Xano
      const res = await fetch("https://x8ki-letl-twmt.n7.xano.io/api:1NeVgW6G/usuarios");
      const usuarios = await res.json();

      // Buscar coincidencia exacta
      const encontrado = usuarios.find(
        (u) => u.username === username && u.password === password
      );

      if (encontrado) {
        setUsuario(encontrado.username);
        setMensaje("Inicio de sesión exitoso 🎉");
      } else {
        setMensaje("Usuario o contraseña incorrectos");
      }
    } catch (error) {
      console.error(error);
      setMensaje("Error conectando con Xano");
    }
  };

  const manejarLogout = () => {
    setUsuario(null);
    setMensaje("Sesión cerrada");
  };

  return (
    <div>
      {usuario ? (
        <>
          <p>Sesión iniciada como: <strong>{usuario}</strong></p>
          <button onClick={manejarLogout} className="btn-login">Salir</button>
        </>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={manejarLogin} className="btn-login">Login</button>

          <p>{mensaje}</p>
        </div>
      )}
    </div>
  );
}
