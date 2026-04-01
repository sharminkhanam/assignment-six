import { CiShoppingCart } from "react-icons/ci";

function NavBar ({carts,}) {
  return (
    <div className="navbar container mx-auto bb-base-100 shadow p-4">
      <div className="navbar-start">
        <div className="flex items-center">
             <h2 className="font-bold text-2xl bg-gradient-to-r from-blue-500 to-purple-800 bg-clip-text  text-transparent">DigiTools</h2>
        </div>
       
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal">
          <li>
            <a href="" className="text-xl text-black">Products</a>
          </li>
          <li>
            <a href="" className="text-xl text-black">Features</a>
          </li>
          <li>
            <a href="" className="text-xl text-black">Pricing</a>
          </li>
          <li>
            <a href="" className="text-xl text-black">Terminals</a>
          </li>
          <li><a href="" className="text-xl text-black">FAQ</a></li>
        </ul>
      </div>
      <div className="navbar-end space-x-3">
       <div >
        {carts}
        <CiShoppingCart className="w-8 h-8"/>
        
      </div>
      <button className="text-xl text-black">Login</button>
      <div>
        <button className="btn bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full ">Get Started</button>
      </div>
      </div>
     
    </div>
  )
}
export default NavBar