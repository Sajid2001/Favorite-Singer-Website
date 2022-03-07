import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const IconLink = ({link, logo, color}) => {
  return (
    <a className="justify-center" href={link} target="_blank">
        <FontAwesomeIcon  className ={color + " py-1 md:py-2 md:text-6xl text-5xl transition-all ease-in duration-90"} icon = {logo}></FontAwesomeIcon>
    </a>
  )
}

export default IconLink;