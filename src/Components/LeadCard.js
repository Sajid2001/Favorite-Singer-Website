

const LeadCard = ({url,alt}) => {
  return (
    
        <div className="w-full overflow-hidden lg:h-[55rem] md:h-[35rem] h-[27.5rem] shadow-lg">
            <img src = {url} alt={alt}></img>
        </div>

  )
}

export default LeadCard