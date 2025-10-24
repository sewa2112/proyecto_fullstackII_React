import React from "react";
import { render, screen } from "@testing-library/react";
import Login from "../../src/componentes/Login";

describe("Componente Login", () => {
  it("debería renderizar el botón de Login", () => {
    render(<Login />);
    const boton = screen.getByText("Login");
    expect(boton).toBeTruthy();
  });
});
