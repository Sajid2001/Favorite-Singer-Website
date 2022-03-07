import React from 'react'
import { Link } from 'react-router-dom'
import CustomButton from '../Buttons/CustomButton'

const EventCard = ({title,date,location}) => {
  return (
    <div className='bg-slate-50 h-1/3 m-2 shadow-lg rounded-lg'>
        <div className='flex flex-col'>
            <h2 className='text-3xl font-semibold font-anton p-4 text-center'>Title: {title}</h2>
            <h3 className='text-2xl mx-2 font-semibold font-inconsolata text-center p-1'>Date: {date}</h3>
            <p className='text-lg mx-2 text-center p-1 font-inconsolata'> Location: {location}</p>
        </div>
        <div className='flex flex-row justify-evenly my-3'>
          <a target="_blank" href='https://www.youtube.com/watch?v=aYsgsSo1aow'> <CustomButton text = "VIP"/> </a>
          <Link to="/tickets"> <CustomButton text = "Tickets"/> </Link> 
            
        </div>
        
    </div>
  )
}

export default EventCard