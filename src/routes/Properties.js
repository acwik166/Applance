import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import PropertyList from '../components/PropertyList'

import '../static/Properties.scss'

const Properties = () => {
  const [properties, setProperties] = useState([])

  useEffect(() => {
    db.collection('properties').onSnapshot(snapshot =>
      setProperties(snapshot.docs.map(doc => doc.data()))
    )
  }, [])

  console.log(properties)

  return (
    <div className='properties'>
      <h1>properties</h1>
      {properties.map(prop => (
        <PropertyList data={prop} />
      ))}
    </div>
  )
}

export default Properties
