import React from 'react'

const GCData = ({gc, tipoGc, sexo}) => {
  let color="";

  if (sexo==='masculino') {
    color = gc>25? 'red' : 'black';
  }
  else{
    color = gc>32? 'red' : 'black';
  }



  return (
    <div>
      <p style={{fontSize:30 }}>GC calculado = {gc}{' %'}</p>
      <p>Tu grasa corporal es : <span style={{fontSize:24, color: color,textTransform:'uppercase'}}>{tipoGc}</span></p>  
    </div>
  )
}
export default GCData
