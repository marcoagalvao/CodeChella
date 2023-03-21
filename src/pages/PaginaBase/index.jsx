import Cabecalho from "components/Cabecalho";
import Rodape from "components/Rodape";
import React from "react";
import { Outlet } from "react-router-dom";

export default function PaginaBase() {
  return (
    <main>
      <Cabecalho />
      <Outlet />
      <Rodape />
    </main>
  );
}
