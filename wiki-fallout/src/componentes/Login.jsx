import React from "react";
import { useState } from "react";
import "./LogIn.css";

export default function Login({ setUsuario, usuario }) {
  const [visible, setVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const USER = "admin";
  const PASS = "1234";

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === USER && password === PASS) {
      setUsuario(username); // avisa al padre (App.js)
      setMessage(`Bienvenido, ${username}!`);
      setTimeout(() => setVisible(false), 1500);
    } else {
      setMessage("Usuario o contraseña incorrectos.");
    }
  };

  const handleClose = () => {
    setVisible(false);
    setMessage("");
    setUsername("");
    setPassword("");
  };

  const handleLogout = () => {
    setUsuario(null);
  };

  return (
    <div className="login-navbar">
      {usuario ? (
        <div className="login-user">
          <span>{usuario}</span>
          <button className="btn-logout" onClick={handleLogout}>Salir</button>
        </div>
      ) : (
        <button className="btn-login" onClick={() => setVisible(true)}>
          Login
        </button>
      )}

      {visible && (
        <div className="login-overlay">
          <div className="login-box">
            <button className="close-btn" onClick={handleClose}>✖</button>
            <h2>Acceso a la Wiki Fallout</h2>
            <form onSubmit={handleLogin}>
              <input
                type="text"
                placeholder="Usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit">Entrar</button>
            </form>
            {message && <p className="login-message">{message}</p>}
          </div>
        </div>
      )}
    </div>
  );
}
