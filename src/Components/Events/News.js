import React from 'react'
import EventCard from './EventCard'
import FormCard  from './FormCard'


const News = () => {
  return (
      <>
      <h2 className='text-6xl p-4 font-bold mt-8'> News</h2>
        <div className='bg-gradient-to-br from-pink-500 to-orange-400'>
            <div className='flex md:flex-row flex-col items-center'>


                <div className='md:m-3 m-2 mb-8 w-full md:w-2/3 rounded-lg flex flex-row'>
                    <div className='flex flex-col w-1/3 h-full overflow-visible translate-y-6'>
                        <EventCard title = "loreum ipsum" date = "12/12/2023" location = "Loreum Ipsum"/>
                        <EventCard title = "loreum ipsum" date = "12/12/2023" location = "Loreum Ipsum"/>
                        <EventCard title = "loreum ipsum" date = "12/12/2023" location = "Loreum Ipsum"/>
                    </div>
                    <div className='flex flex-col w-1/3 h-full overflow-visible'>
                        <EventCard title = "loreum ipsum" date = "12/12/2023" location = "Loreum Ipsum"/>
                        <EventCard title = "loreum ipsum" date = "12/12/2023" location = "Loreum Ipsum"/>
                        <EventCard title = "loreum ipsum" date = "12/12/2023" location = "Loreum Ipsum"/>
                    </div>
                    <div className='flex flex-col w-1/3 h-full overflow-visible translate-y-9'>
                        <EventCard title = "loreum ipsum" date = "12/12/2023" location = "Loreum Ipsum"/>
                        <EventCard title = "loreum ipsum" date = "12/12/2023" location = "Loreum Ipsum"/>
                        <EventCard title = "loreum ipsum" date = "12/12/2023" location = "Loreum Ipsum"/>
                    </div>
                </div>

                <div className='m-3 w-2/3 md:w-1/3 rounded-lg'>
                    <FormCard headerText="Community News" subText="Sign Up for the latest Yoasobi News"/>
                </div>
            </div>

                
        </div>
    </>
  )
}

export default News