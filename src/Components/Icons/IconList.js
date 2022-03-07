import IconLink from "./IconLink"
import Aos from 'aos';



const IconList = ({text, icons}) => {

  console.log(icons);
  return (
    <div className='justify-center flex'>
      <div className="m-2 w-full md:w-3/4 bg-white rounded-lg overflow-hidden shadow-lg">
          <h2 className="text-4xl md:text-2xl p-4 font-bold justify-center flex font-anton"> {text}</h2>
          <li className="p-1 md:m-2 sm:m-1 flex flex-row justify-evenly">
            {icons.map((icon) => (
                <IconLink link = {icon.link} logo = {icon.logo} color = {icon.hoverColor}/>
            ))} 
          </li>
      </div>
     </div>
  )
}

export default IconList