    

import { useState } from 'react';
import './App.css'
import Banner from './components/Banner';
import Cart from './components/Cart';
import NavBar from './components/Navbar/NavBar'

import Products from './components/Products';
import Stats from './components/Stats/Stats';
import Steps from './components/Steps/Steps';
import Footer from './components/Footer';
import Transform from './components/Transform';
import Pricingsection from './components/Pricingsection';




const getProducts = async () => {
  const res = await fetch("/prodicts.json");
  return res.json()
}
const productPromise = getProducts()


function App() {
 
const [active , setActive] =useState("products")
const [carts, setCarts] = useState([]);
console.log(carts)
console.log(active)
  return (
    <>
      <NavBar />

     <Banner />
    <Stats></Stats>
     {/* name of each tab group should be unique */}
      <div className="tabs tabs-box justify-center bg-transparent mt-20">
          <input type="radio" 
          name="my_tabs_1" 
          className="tab rounded-full w-40 text-xl font-bold text-black
            checked:bg-gradient-to-r 
            checked: from-blue-500 
            checked: to-purple-500
            checked:text-white" 
          aria-label="Products" 
          onClick={() => setActive("Products")}
          defaultChecked  />

          <input type="radio" 
          name="my_tabs_1" 
          className="tab rounded-full w-40 text-xl font-bold text-black   
           checked:bg-gradient-to-r 
           checked: from-blue-500 
           checked: to-purple-500
            checked:text-white" 
          aria-label={`carts (${carts.length}) `}
          onClick={() => setActive("cart")}
          />
       
      </div>
     {active === "products" && 
     <Products 
     productPromise={productPromise} 
     carts={carts} 
     setCarts={setCarts}/>}

     { active === "cart" && 
     <Cart 
     carts={carts} 
     setCarts={setCarts}/>}
     
     <Steps></Steps>
      
     <Pricingsection />
      
     <Transform />
     <Footer></Footer>
    </>
  );
}


     
  

export default App
