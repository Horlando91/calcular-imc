import React from 'react'

const GCPercentageTable = () => {
  return (
    <div className='container'>
        <div className="row">
        <table className="table table-dark table-striped" >
        <thead>
        <tr>
            <th scope="col">Descripción</th>
            <th scope="col">Mujeres</th>
            <th scope="col">Hombres</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row">Grasa esencial</th>
            <td>10 - 13 %</td>
            <td>2 - 5 %</td>
           
        </tr>
        <tr>
            <th scope="row">Atletas</th>
            <td>14 - 20 %</td>
            <td>6 - 13 %</td>
            
        </tr>
        <tr>
            <th scope="row">Fitness</th>
            <td>21 - 24 %</td>
            <td>14 - 17 %</td>
        </tr>
        <tr>
            <th scope="row">Aceptable</th>
            <td>25 - 31 %</td>
            <td>18 - 24 %</td>
        </tr>
        <tr>
            <th scope="row">Obesidad</th>
            <td>{'>'}32 %</td>
            <td>{'>'}25 %</td>
        </tr>
        </tbody>
    </table>
        </div>
   
  </div>
  )
}

export default GCPercentageTable;