import React, { useState } from 'react'
import DataUser from '../components/DataUser'
import Title from '../components/Title'
import tallimetroimg from '../images/tallimetro_movil.png'
import hombre from '../images/hombre.png'
import mujer from '../images/mujer.png'
import GCData from '../components/GCData'
import GCPercentageTable from '../components/GCPercentageTable'
import jsPDF from 'jspdf'
import * as moment from 'moment';


const VariosContainer = () => {

// **************** State values ****************
// Todos los datos de un usuario
  const [state, setState] = useState({
    estatura: 0,
    edad: 0,
    peso: 0,
    sexo:'masculino'
});
// Mensajes con el error de cada dato
const [errorstate, setErrorState] = useState({
  estatura: "",
  edad: "",
  peso: "",
});
// Grasa corporal
const [gc, setGc] = useState(0);
// Tipo de grasa
const [tipoGc, setTipoGc]= useState('');

// handle change
const handleChange = (value, name) => {
  setState({ ...state, [name]:  value})
}

// Comprobar los datos introducidos
const comprobarDatos = () => {
  var flag='f';

  if (state.estatura<1) {
    setErrorState((errorstate)=> ({ ...errorstate, estatura: "Estatura incorrecta" }));
    flag='v';
  }

  if (state.edad<1) {
    setErrorState((errorstate)=> ({ ...errorstate, edad: "Edad incorrecta" }));
    flag='v';
  }

  if (state.peso===0 || state.peso<0) {
    setErrorState((errorstate)=> ({ ...errorstate, peso: "Peso incorrecto" }));
    flag='v';
  }

  if(flag==='f'){
    realizarCalculo(state.estatura, state.edad, state.peso, state.sexo);
    return true;
  }

  return false;
}

// Fórmula para calcular la grasa comporal GC
const realizarCalculo = (estatura, edad, peso, sexo) => {
  const var_dependiente_sexo = 10.8; 
  const sexo_number = sexo==='masculino' ? 1 : 0;
  const IMC =  peso / (estatura * estatura);

  // Grasa corporal
  const GC = (1.2 * (IMC)) + (0.23 * edad) - (var_dependiente_sexo * (sexo_number)) - 5.4
  setTipoGc(tipoGrasaCorporal(GC))
  setGc(GC.toFixed(2));
  setErrorState((errorstate)=> ({ ...errorstate, estatura: "" }));
}

// Dejar los valores por defecto
const resetValues = () =>{

  setState({
    ['estatura']: 0,
    ['sexo']: 'masculino',
    ['edad']:0,
    ['peso']: 0
  })

  setGc(0);
  setTipoGc('');
  //  Borramos todos los campos de error teniendo en cuenta solamente el primer campo
  setErrorState( { estatura: "" } );
  setErrorState( { edad: "" } );
  setErrorState( { peso: "" } );
}

// Tipo de grasa corporal
const tipoGrasaCorporal =(gc) =>{
 
  if (state.sexo==='femenino') {
    if ((gc>=10 && gc<=13.99)) {
      return 'grasa esencial';
    }
    else if ((gc>=14 && gc<=20.99)) {
      return 'atleta';
    }
    else if ((gc>=21 && gc<=24.99)) {
      return 'fitness';
    }
    else if ((gc>=25 && gc<=31.99)) {
      return 'aceptable';
    }
    else if ((gc>32)) {
      return 'obesidad';
    }
    else{
      return '';
    }
  }

  if (state.sexo==='masculino') {
    if ((gc>=2 && gc<=5.99)) {
      return 'grasa esencial';
    }
    else if ((gc>=6 && gc<=13.99)) {
      return 'atleta';
    }
    else if ((gc>=14 && gc<=17.99)) {
      return 'fitness';
    }
    else if ((gc>=18 && gc<=24.99)) {
      return 'aceptable';
    }
    else if ((gc>25)) {
      return 'obesidad';
    }
    else{
      return '';
    }
  }

}

// Enviar datos
const onSubmit = (e) =>{
  // Evitar que se recargue la página
  e.preventDefault();

  if(comprobarDatos()){
    return;
  }
}

// Function will execute on click of button
const createForm = async () => {
  const fecha = new Date();
  const mifecha = moment(fecha, 'DD-MM-YYYY');
  const doc = new jsPDF('p', 'pt');

  //x=20 , y=20

  doc.text(20, 20, 'Datos del usuario');

  doc.setFont('courier');
  
  doc.setFontType('normal');

  doc.text(20, 40, 'Estatura: '+state.estatura+ ' cm');
  doc.text(20, 60, 'Edad: '+state.edad+' años');
  doc.text(20, 80, 'Peso: '+state.peso+' kg');
  doc.text(20, 100, 'Grasa corporal(gc): '+gc+' %');
  doc.text(20, 120, 'Tu grasa está entre los valores de: '+tipoGc);
  doc.text(20, 140, 'Fecha: '+mifecha.format('DD-MM-YYYY'));

  doc.save('resultado_grasa_corporal.pdf')
  // Trigger the browser to download the PDF document
  
}

  return (
   <React.Fragment>
        <Title
                title={'Calcula Tu Grasa Corporal'}
                position={"text-center"}
        />
        <DataUser
                  estatura={state.estatura}
                  edad={state.edad}
                  peso={state.peso}
                  sexo={state.sexo}
                  tallimetroimg={tallimetroimg}
                  imagensexo={state.sexo==='masculino' ? hombre : mujer}
                  handleChange={handleChange}
                  onSubmit={onSubmit}
                  resetValues={resetValues}
                  errorstate={errorstate}   
        />

       
        <Title title={'Tabla de valores'} />

        {gc !=0 && <GCPercentageTable/>}
        
        <GCData
                gc={gc}
                tipoGc={tipoGc}
                sexo={state.sexo}
        />

        {gc !=0 &&
          <button onClick={()=>{createForm()}}>
          Descargar datos
          </button>
        }

    </React.Fragment>
  )
}

export default VariosContainer
