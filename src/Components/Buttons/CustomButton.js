import React from 'react'

const CustomButton = ({text, onClick}) => {
  return (
    <button onClick={onClick} className={`rounded-xl relative inline-flex items-center justify-center p-1 mr-1 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800`}>
        <span className={`rounded-lg font-anton relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0`}>
            {text}
        </span>
    </button>
  )
}

export default CustomButton