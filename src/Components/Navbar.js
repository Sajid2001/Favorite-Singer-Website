
import { Link } from "react-router-dom"


const Navbar = () => {
  return (
        <nav className="flex items-center justify-evenly flex-wrap p-5 bg-gray-100 shadow-xl"> 
            <Link to = "/" className="lg:text-5xl sm:text-2xl font-anton font-bold p-4 hover:text-slate-300 hover:scale-125 transition-all ease-in duration-200">Home</Link>
            <Link to="/about" className="lg:text-5xl sm:text-2xl font-anton font-bold p-4 hover:text-slate-300 hover:scale-125  transition-all ease-in duration-200">About</Link>

            <Link to = "/">
            <img className = "m-3 transition-all duration-300 hover:opacity-30 hover:scale-125 object-fill md:h-32 h-12" src = "https://www.theaudiodb.com/images/media/artist/logo/a3dni81631804680.png"/>
            </Link>

            <Link to="/tickets" className="lg:text-5xl sm:text-2xl font-anton font-bold p-4 hover:text-slate-300 hover:scale-125 transition-all ease-in duration-200">Tickets</Link>
            <Link to= "/store" className="lg:text-5xl sm:text-2xl font-anton font-bold p-4 hover:text-slate-300 hover:scale-125  transition-all ease-in duration-200">Store</Link>
        </nav>
  )
}

export default Navbar