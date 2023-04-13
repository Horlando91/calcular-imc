import React from 'react'
import Formulario from './Formulario'
import VisualModel from './VisualModel'

const DataUser = ({estatura, edad, peso, sexo, imagensexo, tallimetroimg, handleChange, onSubmit, resetValues, errorstate}) => {
  return (
    <div className='container'>
        <div className='row mt-5'>
          
          <Formulario
                      estatura={estatura}
                      edad={edad}
                      peso={peso}
                      sexo={sexo}
                      onChange={handleChange}
                      onSubmit={onSubmit}
                      resetValues={resetValues}
                      errorstate={errorstate}
          />

          <VisualModel
                      tallimetroimg={tallimetroimg}
                      imagensexo={imagensexo}
                     

          />
  
        </div>
    </div>
  )
}

export default DataUser
