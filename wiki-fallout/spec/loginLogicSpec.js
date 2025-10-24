import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../src/componentes/Login";

describe("Componente Login", () => {
  it("debería mostrar el botón de Login", () => {
    render(<Login />);
    const boton = screen.getByText("Login");
    expect(boton).toBeTruthy();
  });

  it("debería mostrar el formulario al hacer clic", () => {
    render(<Login />);
    const boton = screen.getByText("Login");
    fireEvent.click(boton);
    const titulo = screen.getByText("Acceso a la Wiki Fallout");
    expect(titulo).toBeTruthy();
  });

  it("debería mostrar mensaje de error con credenciales incorrectas", () => {
    render(<Login />);
    fireEvent.click(screen.getByText("Login"));

    const user = screen.getByPlaceholderText("Usuario");
    const pass = screen.getByPlaceholderText("Contraseña");
    const form = screen.getByText("Entrar");

    fireEvent.change(user, { target: { value: "vaultboy" } });
    fireEvent.change(pass, { target: { value: "wrong" } });
    fireEvent.click(form);

    expect(screen.getByText(/incorrectos/i)).toBeTruthy();
  });
});
