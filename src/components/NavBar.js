import CartWidget from "./CartWidget"

const NavBar = () => {
   return( 
    <navbar className="navBar">
            <ul>
               <li><a href="../public/index.html">Home</a></li> 
               <li><a href="../public/index.html">Tienda</a></li> 
               <li><a href="../public/index.html">Contacto</a></li> 
               <li className="push"><a href="../public/index.html">Register</a></li> 
               <li><a href="../public/index.html">Login</a></li> 
            </ul>

      <CartWidget/>
    </navbar>
   )
}

export default NavBar