import React from "react";

function Jogo({StartJogo, palavraExibida}) {
  const imagemforca = ["forca0", "forca1", "forca2"]

  return (
    <div className="conteiner">
      <div className="forca">
        <img data-test="game-image" className="forca img" src={`./assets/${imagemforca[0]}.png`}></img>
      </div>
      <div className="ladoesquerdo">
        <button data-test="choose-word" className="palavra" onClick={StartJogo}> Escolher palavra</button>
        <div data-test="word" className="palavrasecreta">
          {palavraExibida}
        </div>
      </div>
    </div>
  )
}

export default Jogo