
import CustomButtonRounded from "../Buttons/CustomButtonRounded";


const Album = ({title, image, animation,link, alt}) => {
 
  return (
    <div data-aos-delay = {500} data-aos = {animation} className="md:w-1/3 w-full my-4 mx-3 h-full bg-white rounded-xl overflow-hidden shadow-lg">
        <div className='flex justify-center text-2xl font-bold mx-2 mb-2 font-inconsolata'>
            {title}
        </div>
        <img src={image} alt ={alt}/>
        <div className="m-3 p-2 flex justify-center">
            <CustomButtonRounded text = "listen on Spotify" link={link}/>
            
        </div>
    </div>
  )
}

export default Album