import React from 'react'

const VisualModel = ({tallimetroimg, imagensexo, size}) => {
  return (
    <div className="col-8">
      <div className="h-75">
      <img 
            className=''
            src={tallimetroimg}
            height={size}  
        />

        <img 
              className=''
              src={imagensexo}
              height={'65%'}
          /> 
      </div>  
    </div>
  )
}

export default VisualModel
