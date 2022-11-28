import React from "react";

function Letras({ disableGlobal, letraClicada, letrasClicadas }) {
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  return (
    <div className="conteinerbotoes">
      <div className="botoes">
        {alfabeto.map((letra) =>
          <button data-test="letter"
            onClick={() => letraClicada(letra)}
            key={letra}
            className={`letra ${disableGlobal === true || letrasClicadas.includes(letra) ? "desativada" : "ativada"}`}
            disabled={disableGlobal === true || letrasClicadas.includes(letra)}
          >
            {letra}
          </button>
        )}
      </div>
    </div>
  )
}

export default Letras