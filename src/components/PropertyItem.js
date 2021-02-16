import React from 'react'
import { useHistory } from 'react-router-dom'

import '../static/PropertyItem.scss'

const PropertyItem = ({ data }) => {
  const history = useHistory()

  const handleClick = e => {
    e.preventDefault()

    history.push(`/property/${data.id}`);
  }

  return (
    <div className='property__item' onClick={handleClick}>
      <div className='image'>
        <img
          src='https://maps.googleapis.com/maps/api/streetview?location=1135+S+Shenandoah+St%2C+Los+Angeles%2C+CA+90035&size=768x576&key=AIzaSyARFMLB1na-BBWf7_R3-5YOQQaHqEJf6RQ&source=outdoor&&signature=GUVJ56cKvkNiRMPYVFjz1iBnFhE='
          alt=''
        />
      </div>
      <div className='details'>
        <h3>{data.name}</h3>
        <p>
          {data.address.street}, {data.address.city}, {data.address.zip}
        </p>
      </div>
    </div>
  )
}

export default PropertyItem
