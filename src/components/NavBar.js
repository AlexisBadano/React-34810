import CartWidget from "./CartWidget"

const NavBar = () => {
   return(
      <> 
    <nav className="navBar">
            <ul>
               <li><a href="../public/index.html">Home</a></li> 
               <li><a href="../public/index.html">Guitarras</a></li> 
               <li><a href="../public/index.html">Bajos</a></li> 
               <li className="push"><a href="../public/index.html">Register</a></li> 
               <li><a href="../public/index.html">Accesorios</a></li> 
            </ul>

      <CartWidget/>
    </nav>
    </>
   )
}

export default NavBar