import React from "react";
import Jogo from "./componentes/Jogo.js";
import Chute from "./componentes/Chute.js";
import Letras from "./componentes/Letras.js";
import { useState } from "react";
import palavra from "./palavras";

function App() {
  const [palavraEscolhida, setpalavraEscolhida] = useState(palavra[Math.floor(Math.random() * palavra.length)]);
  const [palavraExibida, setPalavraExibida] = useState([]);
  const [disableGlobal, setdisableGlobal] = useState(true);
  const [letrasClicadas, setClicadas] = useState([]);
  const palavraSorteada = palavraEscolhida.split('');
  const [chuteDado, setchuteDado] = useState("");
  let [contador, setContador] = useState(0);
  let [color, setColor] = useState("")

  function StartJogo() {
    if(disableGlobal===true){
    console.log(palavraSorteada)
    console.log(palavraEscolhida)
    setColor("")
    setContador(0)
    setClicadas([])
    let palavraSecreta = "_".repeat(palavraSorteada.length).split('');
    setPalavraExibida(palavraSecreta);
    setdisableGlobal(false)
  }
}

  function letraClicada(letra) {
    const novoArray = [...letrasClicadas]
    if (!novoArray.includes(letra)) {
      novoArray.push(letra)
      setClicadas(novoArray)
      VerificarPalavra(letra)
    }
  }

  function VerificarPalavra(letra) {
    for (let i = 0; i < palavraSorteada.length; i++) {
      if (letra === palavraSorteada[i]) {
        let novaPalavra = palavraExibida
        novaPalavra[i] = letra
        setPalavraExibida(novaPalavra)
        }
    }setContador(contador+1)
    if(contador===5){
      setContador(6)
      setPalavraExibida(palavraEscolhida)
      setColor("red")
      setdisableGlobal(true)

    }
    console.log(contador)
  }

  function Chutar() {
    if (chuteDado == palavraEscolhida) {
      console.log("ganhou")
      setPalavraExibida(palavraEscolhida)
      setColor("verde")
      setdisableGlobal(true)
    } else {
      console.log("perdeu")
      setContador(6)
      setPalavraExibida(palavraEscolhida)
      setColor("red")
      setdisableGlobal(true)
    }
  }
  function salvarChute(event) {
    setchuteDado(event.target.value)
  }

  return (
    <>
      <div className="conteinerGeral">
        <Jogo
        disableGlobal={disableGlobal}
          color={color}
          contador={contador}
          letraClicada={letraClicada}
          StartJogo={StartJogo}
          palavraExibida={palavraExibida}
          palavraEscolhida={palavraEscolhida}
          chuteDado={chuteDado} />
        <Letras
          letraClicada={letraClicada}
          letrasClicadas={letrasClicadas}
          disableGlobal={disableGlobal} />
        <Chute
          Chutar={Chutar}
          salvarChute={salvarChute}
          disableGlobal={disableGlobal}
        />

      </div>
    </>
  )
}

export default App
