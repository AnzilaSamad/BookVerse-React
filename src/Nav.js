import Navbar1 from "./components/Navbar1";

function Nav() {
    return(
        <div className="Nav">
          
          <Routes>
            <Route path = "/navbar1" element={<Navbar1/>}/>
          </Routes>
          
        </div>
      );
      
    }
    
    export default Nav;