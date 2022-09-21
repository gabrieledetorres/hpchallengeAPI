import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from "react";
import Personagens from "../Components/Personagens";
import * as S from "../Components/Style/styles";

const Rota = () => {
  return (
    <BrowserRouter>
      <Rotas rota="Home" rota2="PERSONAGENS DE HARRY POTTER" />
      <Routes>
        <Route path="" />
        <Route path="/personagens" element={<Personagens />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rota;

function Rotas({ rota, rota2 }) {
  return (
    <S.Nav>
      <S.UL>
        <S.Li>
          <Link to="/">{rota}</Link>
        </S.Li>

        <S.Li>
          <Link to="/personagens">{rota2}</Link>
        </S.Li>
      </S.UL>
    </S.Nav>
  );
}
