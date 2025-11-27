import React, { useEffect, useState } from "react";

// Componente `UsuariosDesdeXano`:
// - Recupera la lista de usuarios desde un endpoint de Xano cuando el componente se monta.
// - Muestra los usuarios en una lista simple.
export default function UsuariosDesdeXano() {
  // Estado local: arreglo de usuarios recibido desde el backend
  const [usuarios, setUsuarios] = useState([]);

  // useEffect con arreglo de dependencias vacío: se ejecuta solo al montar el componente
  // Realiza una petición fetch a Xano para obtener usuarios
  useEffect(() => {
    fetch("https://x8ki-letl-twmt.n7.xano.io/api:1NeVgW6G/usuarios") // endpoint público de Xano
      .then(res => res.json())
      .then(data => {
        // Actualizamos el estado con los datos recibidos
        setUsuarios(data);
      })
      .catch(err =>
        // Manejo básico de errores; en producción conviene informar al usuario
        console.error("Error obteniendo usuarios desde Xano:", err)
      );
  }, []);

  
}
