import React from 'react';
import './styles.css'


export default function SearchButton({count,setCount}) {
    
    function alterarEstado(){
        if(count=='1'){
          setCount(0)
        }else{setCount(1)
        }
      }    

    return(
        <button className="botao" onClick={alterarEstado}>Toggle</button>
    )
}
