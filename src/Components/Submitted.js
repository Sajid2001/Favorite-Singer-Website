import React from 'react'

const Submitted = ({title,textOne,textTwo}) => {
  return (
    <div className=''>
        <h1 className='text-center font-anton text-6xl my-5'>{title}</h1>
        <h2 className='text-center font-inconsolata text-5xl my-5'>{textOne}</h2>
        <h3 className='text-center font-inconsolata text-3xl my-5'>{textTwo}</h3>
    </div>
  )
}

export default Submitted