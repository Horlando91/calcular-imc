import React from 'react'
import Formulario from './Formulario'
import VisualModel from './VisualModel'
import img from '../images/tallimetro_movil.png'

const DataUser = ({estatura, edad, peso, sexo, imagensexo, tallimetroimg, handleChange}) => {
  return (
    <div className='row mt-5'>
        
        <Formulario
                    //form={form}
                    estatura={estatura}
                    edad={edad}
                    peso={peso}
                    sexo={sexo}
                    onChange={handleChange}

        />

        <VisualModel
                    tallimetroimg={tallimetroimg}
                    imagensexo={imagensexo}
                    size={'70%'}
        />
 
    </div>
  )
}

export default DataUser
