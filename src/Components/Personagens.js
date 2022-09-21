import React, { useState, useEffect } from "react";
import axios from "axios";
import * as S from "./Style/styles";

export default function Api() {
  const API = "https://hp-api.herokuapp.com/api/characters";

  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get(API)
      .then((resposta) => {
        setInfo(resposta.data);
      })
      .catch((error) => {
        console.log("desculpe, aconteceu um probleminha", error);
      });
  }, []);

  return (
    <div>
      {info.map((item) => (
        <S.Div>
          <figure>
            <S.Foto src={item.image} alt={item.name} />
          </figure>

          <S.UL>
            <li>{item.name}</li>
          </S.UL>

          <S.UL>
            <li>{item.house}</li>
          </S.UL>
        </S.Div>
      ))}
    </div>
  );
}
