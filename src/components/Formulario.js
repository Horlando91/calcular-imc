import React from 'react'

 const Formulario = ({onChange, estatura, edad, peso, sexo, onSubmit, resetValues, errorstate}) => (
 
    <div className='col-sm-12 col-md-4 mb-5'>
      <form onSubmit={onSubmit} >
        <div className="mb-3">
          <label htmlFor="inputestatura" className="form-label">Estatura</label>
          <input  type="number" 
                  className="form-control input-sm" 
                  id="inputestatura" 
                  aria-describedby="estaturaHelp"
                  onChange={e => onChange(e.target.value, 'estatura')}
                  value={estatura}
                  min={0}
                  />

          <span className='text-danger'>{errorstate.estatura===''?  null : errorstate.estatura }</span>
        </div>
        <div className="mb-3">
          <label htmlFor="inputedad" className="form-label">Edad</label>
          <input  type="text" 
                  className="form-control" 
                  id="inputedad" 
                  aria-describedby="edadHelp"
                  onChange={e => onChange(e.target.value, 'edad')}
                  value={edad}
                  min={0}
                  />
          <span className='text-danger'>{errorstate.edad===''?  null : errorstate.edad }</span>
        </div>
        <div className="mb-3">
          <label htmlFor="inputpeso" className="form-label">Peso (Kg)</label>
          <input  type="number" 
                  className="form-control" 
                  id="inputpeso" 
                  aria-describedby="edadHelp"
                  onChange={e => onChange(e.target.value, 'peso')}
                  value={peso}
                  min={0}
                  />
            <span className='text-danger'>{errorstate.peso===''?  null : errorstate.peso }</span>
        </div>
        <div className="mb-3">
          <label htmlFor="inputsexo" className="form-label">Sexo</label>
              <select onChange={e => onChange(e.target.value, 'sexo')} className="form-select" aria-label="Default select example" defaultValue={''}>
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
              </select>
        </div>
      <button type="submit" className="btn btn-primary" style={{width:'40%'}}>Calcular</button>
      <button type='reset' className="btn btn-primary ms-3" style={{width:'40%'}} onClick={resetValues}>Reset</button>
     </form>
   </div>
    
  )

  export default Formulario;
