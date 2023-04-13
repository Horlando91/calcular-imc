import React from 'react'


const Title = ({title, position}) => {
  return (
    <div>
      <h1 className={position}>{title}</h1>
    </div>
  )
}




export default Title
