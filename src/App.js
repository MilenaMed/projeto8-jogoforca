import React from "react";
import Jogo from "./componentes/Jogo.js";
import Chute from "./componentes/Chute.js";
import Letras from "./componentes/Letras.js";
import palavras from "./palavras.js";

function App() {
  <palavras/>
  return (
    <>
    <div className="conteinerGeral">
    <Jogo/>
    <Letras/>
    <Chute/>
  </div>
    </>
  )
}

export default App
