import React, { useState } from 'react'
import Formulario from '../components/Formulario'
import DataUser from '../components/DataUser'
import Welcome from '../components/Welcome'
import tallimetroimg from '../images/tallimetro_movil.png'
import hombre from '../images/hombre.png'
import mujer from '../images/mujer.png'

const VariosContainer = () => {

  const [state, setState] = useState({
    estatura: '',
    edad: '',
    peso: '',
    sexo:''
});

const handleChange = (value, name) => {
  setState({[name]:  value})
  console.log(value)
}

  return (
   <React.Fragment>
        <Welcome/>
        <DataUser
                  estatura={state.estatura}
                  edad={state.edad}
                  peso={state.peso}
                  sexo={state.sexo}
                  tallimetroimg={tallimetroimg}
                  imagensexo={state.sexo== 'masculino' ? hombre : mujer}
                  handleChange={handleChange}
        />
    </React.Fragment>
  )
}

export default VariosContainer
