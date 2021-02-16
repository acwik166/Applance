import React from 'react'

const PropertyDetail = ({ match }) => {
  const id = match.params.id;
  console.log(id)
  return (
    <div>
      <h1>detail</h1>
    </div>
  )
}

export default PropertyDetail
