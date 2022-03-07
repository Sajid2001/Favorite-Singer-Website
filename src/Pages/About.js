import aboutAlt from "../assets/images/about.jpg"


const About = ({title,personOne, personTwo, imageOne, imageTwo}) => {
  return (
    <>

      <div style = {{backgroundImage:'url(https://kbopped.files.wordpress.com/2021/01/yoasobi-kaibutsu.jpg)'}} className=" md:h-[38rem] h-80 mt-5 shadow-xl bg-center bg-cover overflow-hidden transition-opacity duration-300 hover:opacity-70">
      </div>

      <div className="flex flex-col md:flex-row justify-center m-3">

          <div className="mx-3 p-3 flex flex-col justify-start">
            <div className="text-left m-2">
              <h5 className="text-base font-inconsolata font-semibold p-2">Singer, Vocaloid, Producer</h5>
              <h2 className="text-6xl font-anton text-red-500">Ayase</h2>
            </div>
            <p className="my-2 p-3 font-inconsolata">
              Integer sit amet tincidunt lacus, ut egestas diam. Nulla facilisi. Nulla vel quam at tellus malesuada tincidunt. Vivamus orci erat, sagittis vel augue non, pulvinar efficitur lorem. Fusce gravida aliquet sapien, nec aliquam urna ornare nec. Nunc pellentesque efficitur urna, sit amet ornare elit condimentum vitae. Maecenas rhoncus, neque eget.
            </p>
            <p className="p-3 font-inconsolata">
              Cras ut vestibulum nibh, a pharetra tortor. Aliquam tempor aliquam massa, ut commodo tellus convallis quis. Vivamus est justo, vulputate.
            </p>
          </div>
          
          <img alt={aboutAlt} data-aos="fade-down" className="rounded-tr-3xl rounded-bl-3xl shadow-xl w-full md:w-1/2 m-3 flex md:content-center transition-opacity duration-300 hover:opacity-70" src="https://lastfm.freetls.fastly.net/i/u/ar0/664b84b6967d1ccf8d96cf34d4940c9a"/>
         
          <div className="mx-3 p-3 flex flex-col justify-end">
            <p className="my-2 p-3 font-inconsolata">
              Integer sit amet tincidunt lacus, ut egestas diam. Nulla facilisi. Nulla vel quam at tellus malesuada tincidunt. Vivamus orci erat, sagittis vel augue non, pulvinar efficitur lorem. Fusce gravida aliquet sapien, nec aliquam urna ornare nec. Nunc pellentesque efficitur urna, sit amet ornare elit condimentum vitae. Maecenas rhoncus, neque eget.
            </p>
            <p className="p-3 font-inconsolata">
              Cras ut vestibulum nibh, a pharetra tortor. Aliquam tempor aliquam massa, ut commodo tellus convallis quis. Vivamus est justo, vulputate.
            </p>
            <div className="md:text-left text-right m-2 p-2 font-inconsolata">
              <h2 className="text-6xl font-anton text-red-500">Ikura</h2>
              <h5 className="text-base font-semibold font-inconsolata ">Singer</h5>
            </div>
            
          </div>
      </div>
    </>
  )
}

export default About