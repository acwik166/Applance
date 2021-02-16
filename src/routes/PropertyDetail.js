import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import CircularProgress from '@material-ui/core/CircularProgress'

import '../static/PropertyDetail.scss'

const PropertyDetail = ({ match }) => {
  const id = match.params.id

  const [property, setProperty] = useState()

  useEffect(() => {
    db.collection('properties')
      .doc(id)
      .get()
      .then(doc => {
        if (doc.exists) {
          setProperty(doc.data())
        }
      })
  }, [])

  console.log(property)

  return (
    <div className='property__detail'>
      {
        property ? 
        <div className='card'>
          <div className='image'>
            <img
              src='https://maps.googleapis.com/maps/api/streetview?location=1135+S+Shenandoah+St%2C+Los+Angeles%2C+CA+90035&size=768x576&key=AIzaSyARFMLB1na-BBWf7_R3-5YOQQaHqEJf6RQ&source=outdoor&&signature=GUVJ56cKvkNiRMPYVFjz1iBnFhE='
              alt=''
            />
          </div>
          <div className='overview'>
            <h2>{property.name}</h2>
          </div>
        </div>
        : 
        <CircularProgress />
      }
    </div>
  )
}

export default PropertyDetail
