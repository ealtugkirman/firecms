import React from 'react'
import ServicesBar from './services/ServicesRight'
import ServicesContent from './services/ServicesContent'
const page = () => {
  return (
    <div className='flex flex-row py-32 px-32 text-first bg-light' >
      <ServicesBar />
      <ServicesContent />
    </div>
  )
}

export default page