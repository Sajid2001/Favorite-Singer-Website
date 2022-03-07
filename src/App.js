
import Navbar from "./Components/Navbar";
import Homepage from "./Pages/Homepage";
import Store from "./Pages/Store";
import Footer from "./Components/Footer";
import { render } from "react-dom";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import About from "./Pages/About";
import Tickets from "./Pages/Tickets";
import EmailSubmission from "./Pages/EmailSubmission";
import Purchase from "./Pages/Purchase";

function App() {
  return (
    <div>
        <BrowserRouter>
          <Navbar/>
              <Routes>
                <Route path="/" element={<Homepage/>} />
                <Route path="/store" element={<Store/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/tickets" element={<Tickets/>} />
                <Route path = "/submitted" element = {<EmailSubmission/>}></Route>
                <Route path="/purchase" element = {<Purchase/>}/>
              </Routes>

          <Footer/>
        </BrowserRouter>



    </div>
    
  );
}

export default App;
