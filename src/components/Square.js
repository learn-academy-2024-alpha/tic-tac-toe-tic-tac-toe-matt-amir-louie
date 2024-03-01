import React from 'react'

const Square = ({ square, index, handleGamePlay, checkForWinner}) => {  
  const handleClick = () =>{
    if (checkForWinner === true){
      document.querySelector(".squares").removeAttribute("onClick")
    }else{
      handleGamePlay(index)
          
    }
  }


  return (
    <div id = "square" className="square" onClick={handleClick}>{square}</div>
  )
}
export default Square


