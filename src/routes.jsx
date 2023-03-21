import { DadosProvider } from "common/context/Dados";
import Experiencia from "pages/Experiencia";
import Home from "pages/Home";
import Informacoes from "pages/Informacoes";
import Ingresso from "pages/Ingresso";
import IngressoComprado from "pages/IngressoComprado";
import PaginaBase from "pages/PaginaBase";
import Setores from "pages/Setores";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function AppRoutes() {

  return (
    <BrowserRouter>
      <DadosProvider>
        <Routes>
          <Route path="/" element={<PaginaBase />}>
            <Route index element={<Home />}></Route>
            <Route path="experiencia" element={<Experiencia />}></Route>
            <Route path="setores" element={<Setores />}></Route>
            <Route path="informacoes" element={<Informacoes />}></Route>
            <Route path="ingresso" element={<Ingresso />}></Route>
            <Route path="seuingresso" element={<IngressoComprado />}></Route>
          </Route>
        </Routes>
      </DadosProvider>
    </BrowserRouter>
  );
}
