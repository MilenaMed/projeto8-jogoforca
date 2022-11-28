import React, { useState } from "react";

function Chute({disableGlobal, Chutar, salvarChute}) {

  return (
    <div className="chute">
      Já sei a palavra!
      <input
        data-test="guess-input"
        onChange={salvarChute}
        className="texto"
        type="text"
        name="Nome"
        size="40"
        disabled={disableGlobal === true}
      />
      <button
        data-test="guess-button"
        className="chutar"
        onClick={Chutar}
        disabled={disableGlobal === true}
      >
        chutar
      </button>
    </div>
  )
}

export default Chute