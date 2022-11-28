import React from "react";
import Jogo from "./componentes/Jogo.js";
import Chute from "./componentes/Chute.js";
import Letras from "./componentes/Letras.js";
import { useState } from "react";
import palavra from "./palavras";

function App() {
  const palavraEscolhida = palavra[Math.floor(Math.random() * palavra.length)];
  const [palavraExibida, setPalavraExibida] = useState([]);
  const [disableGlobal, setdisableGlobal] = useState(true)
  const [letrasClicadas, setClicadas] = useState([])
  const [contador, setContador] = useState(0)
  const [palavraSorteada, setPalavraSorteada] = useState(palavraEscolhida.split(''))
  
  function StartJogo() {
    console.log(palavraSorteada)
    let palavraSecreta = "_".repeat(palavraSorteada.length).split('');
    setPalavraExibida(palavraSecreta);
    setdisableGlobal(false)
  }

  function letraClicada(letra) {
    const novoArray = [...letrasClicadas]
    if (!novoArray.includes(letra)) {
      novoArray.push(letra)
      setClicadas(novoArray)
      VerificarPalavra(letra)
    }
  }

  function VerificarPalavra(letra){
    for(let i=0; i<palavraSorteada.length; i++){
      if(letra === palavraSorteada[i]){
        let novaPalavra = palavraExibida        
        novaPalavra[i] = letra
        setPalavraExibida(novaPalavra)
      }
    }
  }

  return (
    <>
      <div className="conteinerGeral">
        <Jogo
          letraClicada={letraClicada}
          StartJogo={StartJogo}
          palavraExibida={palavraExibida} />
        <Letras
          letraClicada={letraClicada}
          letrasClicadas={letrasClicadas}
          disableGlobal={disableGlobal} />
        <Chute
          disableGlobal={disableGlobal} />
      </div>
    </>
  )
}

export default App
