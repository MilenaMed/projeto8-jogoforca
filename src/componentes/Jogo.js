import React from "react";
import Letras from "./Letras";
import { useState } from "react";

const palavra = "Abacate"

function Jogo(){
  function StartJogo(){
    <Letras />
    //mudar a cor das teclas ao iniciar
    //escolher uma palavra   
  }

    return(
        <div className="conteiner">
      <div className="forca">
        <img className="forca img" src="./assets/forca0.png"></img>
      </div>
      <div className="ladoesquerdo">
      <button data-test="choose-word" className="palavra" onClick={StartJogo}> Escolher palavra</button>
      <div className="palavrasecreta">
        _ _ _ _ _ _ _ _ _
      </div>
      </div>
    </div>
    )
}

export default Jogo