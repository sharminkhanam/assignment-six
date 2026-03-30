    

import './App.css'
import Banner from './components/Banner/Banner';
import NavBar from './components/Navbar/NavBar'
import Pricing from './components/Pricing/Pricing';
import Products from './components/Products';
import Stats from './components/Stats/Stats';
import Steps from './components/Steps/Steps';




const getProducts = async () => {
  const res = await fetch("/prodicts.json");
  return res.json()
}
const productPromise = getProducts()


function App() {
 

  return (
    <>
      <NavBar />

     <Banner />
     <Products productPromise={productPromise}/>
     <Stats></Stats>
     <Steps></Steps>
      
     <Pricing></Pricing>
    </>
  );
}


     
  

export default App
