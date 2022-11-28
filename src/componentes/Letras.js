import React, { useState } from "react";

function Letras(){
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const [letrasClicadas, setClicadas] = useState([])

    function letraClicada(letra){
      const novoArray = [...letrasClicadas, letra];
      setClicadas(novoArray)

      console.log(novoArray)
    } 
      return(
    <div className="conteinerbotoes">
      <div className="botoes">
        {alfabeto.map((letra)=> <button data-test="letter" 
        onClick={() => letraClicada(letra)} 
        key = {letra}
        className={`letra ${letrasClicadas.includes(letra)? "desativada" : "ativada"}`}>
           {letra} 
           </button> )}
      </div>
    </div>
    )
}

export default Letras