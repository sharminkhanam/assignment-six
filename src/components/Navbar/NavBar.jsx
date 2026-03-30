import { PiShoppingCartSimple } from "react-icons/pi";

export default function Navbar () {
    return (
         <div className="container mx-auto px-6 py-4 shadow-md">
 
  <div className="flex justify-between items-center ">
    <a className="font-bold ">DigiTools</a>
     <ul className="flex justify-between gap-7 items-center"> 
      <li><a href="">Hopmepage</a></li>
      <li><a href=""></a>Products</li>
      <li><a href=""></a>Features</li>
      <li><a href=""></a>Pricing</li>
      <PiShoppingCartSimple />
      <button className="font-bold">Login</button>
      <button className="btn btn-primary p-6 rounded-full">Get Started</button>
      
    </ul>
  </div>
 
</div>
    )
}