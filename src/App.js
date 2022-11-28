import React from "react";
import Jogo from "./componentes/Jogo.js";
import Chute from "./componentes/Chute.js";
import Letras from "./componentes/Letras.js";
import { useState } from "react";
import palavra from "./palavras";

function App() {
  const [palavraEscolhida, setpalavraEscolhida] = useState();
  const [palavraExibida, setPalavraExibida] = useState([]);
  const [disableGlobal, setdisableGlobal] = useState(true);
  const [letrasClicadas, setClicadas] = useState([]);
  const [palavraSorteada, setPalavraSorteada] = useState("");
  const [chuteDado, setchuteDado] = useState("");
  const [contador, setContador] = useState(0);
  const [color, setColor] = useState("");
  const [acertos, setAcertos] = useState(1);

  function StartJogo() {
    if (disableGlobal === true) {
      //console.log("sorteada", palavraSorteada)
      //console.log("palavraEScolhida1", palavraEscolhida)e
      setColor("");
      setContador(0);
      setClicadas([]);

      let novaPalavra = palavra[Math.floor(Math.random() * palavra.length)]
      setpalavraEscolhida(novaPalavra);
      setPalavraSorteada(novaPalavra.split(''));

      console.log(novaPalavra)

      let palavraSecreta = "_".repeat(novaPalavra.length).split('');
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
    let flegContador = true
    for (let i = 0; i < palavraSorteada.length; i++) {
      if (letra === palavraSorteada[i]) {
        let novaPalavra = palavraExibida
        novaPalavra[i] = letra
        setPalavraExibida(novaPalavra)
        console.log("novaPAlavra", novaPalavra)
        console.log("palavraSorteada", palavraSorteada)
        flegContador = false
      }
    }
    if (flegContador === true) {
      setContador(contador + 1)
      console.log(contador)
    }
    else if (!palavraExibida.includes("_")) {
        setColor("verde")
        setdisableGlobal(true)
      }
  }

  function Chutar() {
    if (chuteDado === palavraEscolhida) {
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
          setdisableGlobal={setdisableGlobal}
          acertos={acertos}
          setColor={setColor}
          color={color}
          contador={contador}
          palavraSorteada={palavraSorteada}
          letraClicada={letraClicada}
          StartJogo={StartJogo}
          palavraExibida={palavraExibida}
          setPalavraExibida={setPalavraExibida}
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
