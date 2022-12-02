import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"

const NavBar = () => {
   return(
      <> 
    <nav className="navBar">
            <ul>
               <li> <Link to='/'>Home</Link></li> 
               <li><Link to='/category/1'>Guitarras</Link></li> 
               <li><Link to='/category/2'>Bajos</Link></li>
               <li><Link to='/category/3'>Accesorios</Link></li>
               <li className="push"><Link to='/'>Register</Link></li> 
               <li><Link to='/'>Log In</Link></li> 
            </ul>

         <li className="cartIcon"><Link to='/cart'><CartWidget/></Link></li>
    </nav>
    </>
   )
}

export default NavBar