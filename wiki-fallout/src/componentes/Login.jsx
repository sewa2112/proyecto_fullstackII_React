import React, { useState } from "react";

// Componente `Login`:
// - Recibe `setUsuario` para actualizar el usuario logueado en el componente padre
// - Recibe `usuario` para saber si ya hay una sesión iniciada y mostrar el botón de logout
export default function Login({ setUsuario, usuario }) {
  // Estados locales para controlar los campos del formulario y mensajes al usuario
  const [username, setUsername] = useState(""); // valor del input 'Usuario'
  const [password, setPassword] = useState(""); // valor del input 'Contraseña'
  const [mensaje, setMensaje] = useState(""); // feedback (éxito/error)

  // manejarLogin: realiza una petición GET a la API (Xano) y valida credenciales
  // Nota: en producción no se deberían traer contraseñas en texto plano ni validarlas en el cliente.
  const manejarLogin = async () => {
    try {
      // GET a la API de Xano que devuelve la lista de usuarios
      const res = await fetch("https://x8ki-letl-twmt.n7.xano.io/api:1NeVgW6G/usuarios");
      const usuarios = await res.json();

      // Buscar coincidencia de username y password en la lista obtenida
      const encontrado = usuarios.find(
        (u) => u.username === username && u.password === password
      );

      if (encontrado) {
        // Si se encuentra, actualizamos el estado del usuario en el padre
        setUsuario(encontrado.username);
        setMensaje("Inicio de sesión exitoso");
      } else {
        // Si no coincide, mostramos mensaje de error
        setMensaje("Usuario o contraseña incorrectos");
      }
    } catch (error) {
      // Captura de errores de red/servidor
      setMensaje("Error conectando con Xano");
      console.error(error);
    }
  };

  // manejarLogout: limpia la sesión en el componente padre
  const manejarLogout = () => {
    setUsuario(null);
  };

  // Salida JSX:
  // - Si `usuario` existe, mostramos botón de 'Salir'
  // - Si no, mostramos formulario simple con inputs controlados y botón de Login
  return (
    <div>
      {usuario ? (
        // Botón de logout cuando hay sesión activa
        <button onClick={manejarLogout} className="btn-login">Salir</button>
      ) : (
        <div>
          {/* Input controlado para el nombre de usuario */}
          <input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {/* Input controlado para la contraseña */}
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* Botón que dispara la verificación de credenciales */}
          <button onClick={manejarLogin} className="btn-login">Login</button>
          {/* Mensaje de feedback (éxito / error / conexión) */}
          <p>{mensaje}</p>
        </div>
      )}
    </div>
  );
}
