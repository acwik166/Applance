import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import PropertyItem from '../components/PropertyItem'

import '../static/Properties.scss'

const Properties = () => {
  const [properties, setProperties] = useState([])

  useEffect(() => {
    db.collection('properties').onSnapshot(snapshot =>
      setProperties(snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})))
    )
  }, [])

  return (
    <div className='properties'>
      {properties.map(prop => (
        <PropertyItem data={prop} />
      ))}
    </div>
  )
}

export default Properties
