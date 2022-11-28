import React from "react";

function Jogo({StartJogo,disableGlobal, palavraExibida,contador, color, palavraEscolhida}) {

  return (
    <div className="conteiner">
      <div className="forca">
        <img data-test="game-image" className="forca img" src={`./assets/forca${contador}.png`}></img>
      </div>
      <div className="ladoesquerdo">
        <button data-test="choose-word" className="palavra" disabled={disableGlobal === false} onClick={StartJogo}> Escolher palavra</button>
        <div data-test="word" data-answer={palavraEscolhida} className={`palavrasecreta ${color}`}>
          {palavraExibida}
        </div>
      </div>
    </div>
  )
}

export default Jogo