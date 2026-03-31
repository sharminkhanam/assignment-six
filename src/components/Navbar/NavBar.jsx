import { CiShoppingCart } from "react-icons/ci";

function NavBar ({carts,}) {
  return (
    <div className="navbar container mx-auto shadow p-4">
      <div className="navbar-start">
        <div className="flex items-center">
             <h2>DigiTools</h2>
        </div>
       
      </div>
      <div className="navbar-center">
        <ul className="menu menu-horizontal">
          <li>
            <a href="">Products</a>
          </li>
          <li>
            <a href="">Features</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">Terminals</a>
          </li>
          <li><a href="">FAQ</a></li>
        </ul>
      </div>
      <div className="navbar-end space-x-3">
       <div >
        {carts}
        <CiShoppingCart className="w-8 h-8"/>
        
      </div>
      <button>Login</button>
      <div>
        <button className="btn btn-primary rounded-full ">Get Started</button>
      </div>
      </div>
     
    </div>
  )
}
export default NavBar