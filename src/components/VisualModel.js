import React from 'react'

const VisualModel = ({tallimetroimg, imagensexo}) => {
  return (
    <div className="col-sm-12 col-md-8 d-flex justify-content-center">
   
        <img 
            className=''
            alt='tallimetro'
            src={tallimetroimg}
            width={'120px'}
            height={'320px'}
        />

        <img 
              className=''
              alt='person'
              src={imagensexo}
              width={'120px'}
              height={'320px'}
          /> 
    </div>  
    
  )
}

export default VisualModel
