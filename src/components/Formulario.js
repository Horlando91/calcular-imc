import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

export const Formulario = ({onChange, estatura, edad, peso, sexo}) => (

    <div className='col-4'>
      <form >
        <div className="mb-3 ">
          <label htmlFor="inputestatura" className="form-label">Estatura</label>
          <input  type="number" 
                  className="form-control input-sm" 
                  id="inputestatura" 
                  aria-describedby="estaturaHelp"
                  onChange={e => onChange(e.target.value, 'estatura')}
                  value={estatura}
                  />
        </div>
        <div className="mb-3 ">
          <label htmlFor="inputedad" className="form-label">Edad</label>
          <input  type="text" 
                  className="form-control" 
                  id="inputedad" 
                  aria-describedby="edadHelp"
                  onChange={e => onChange(e.target.value, 'edad')}
                  value={edad}
                  />
        </div>
        <div className="mb-3 ">
          <label htmlFor="inputpeso" className="form-label">Peso</label>
          <input  type="number" 
                  className="form-control" 
                  id="inputpeso" 
                  aria-describedby="edadHelp"
                  onChange={e => onChange(e.target.value, 'peso')}
                  value={peso}
                  />
        </div>
        <div className="mb-3 ">
          <label htmlFor="inputsexo" className="form-label">Sexo</label>
              <select onChange={e => onChange(e.target.value, 'sexo')} className="form-select" aria-label="Default select example" defaultValue={''}>
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenio</option>
              </select>
        </div>
      <button type="submit" className="btn btn-primary">Calcular</button>
     </form>
   </div>
   
  )

  export default Formulario;
