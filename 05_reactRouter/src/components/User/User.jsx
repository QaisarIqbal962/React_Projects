import React from 'react'
import { useParams } from 'react-router-dom';               

const user = () => {
  const { id } = useParams();

  return (
    
      <div className='text-center text-3xl p-4'>user: {id}</div>
    
  )
}

export default user
