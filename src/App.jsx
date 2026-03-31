    

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
      <div className="tabs tabs-box justify-center bg-transparent">
        <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label="Products" 
         onClick={() => setActive("Products")}
        defaultChecked  />
        <input type="radio" name="my_tabs_1" 
        className="tab rounded-full w-40" 
        aria-label={`carts (${carts.length}) `}
        onClick={() => setActive("cart")}
        />
       
      </div>
     {active === "products" && <Products productPromise={productPromise} carts={carts} setCarts={setCarts}/>}
     { active === "cart" && <Cart carts={carts} setCarts={setCarts}/>}
     
     <Steps></Steps>
      
     <Pricingsection />
     <Transform />
     <Footer></Footer>
    </>
  );
}


     
  

export default App
