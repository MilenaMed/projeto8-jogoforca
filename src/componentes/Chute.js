 import React, { useState } from "react";

 function Chute(){
  const palavra = "abcd"
  const [chuteDado, setchuteDado]= useState("")

  function Chutar(){
    if(chuteDado === palavra){
      console.log("ganhou")
      //vai no comp jogo,  na div "palavrasecreta" e coloca a palavra em verde
    } else {
      console.log("perdeu")
      // troca a imagem da forca pra forca06 e mostra a palavra correta em vermelho
    }
  }
  function salvarChute(event){  
    setchuteDado(event.target.value)
  }
    return(
        <div className="chute">
      Já sei a palavra! <input data-test="guess-input" onChange={salvarChute} className="texto" type="text" name="Nome" size="40" /> <button data-test="guess-button" onClick={Chutar} className="chutar">chutar</button>
    </div>
    )
 }

 export default Chute