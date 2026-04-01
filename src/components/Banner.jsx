import { CiPlay1 } from "react-icons/ci";
import { GiPlainCircle } from "react-icons/gi";
import banner from "../assets/banner.png"

function Banner () {
    return (
      <div className="hero container mx-auto px-4 py-12">
  <div className="flex flex-col-reverse flex-row justify-between gap-8 p-20">
   
    <div className="space-y-5  ">
      <div className=" rounded-full bg-gray-200 px-3 py-2 gap-2 inline-flex items-center">
        <GiPlainCircle className="text-purple-400"/>
          <p className="font-semibold text-purple-400">New: AI-Powered Tools Available</p>
      </div>
      
      <h1 className=" text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-800">Supercharge Your <br/>Digital Workflow</h1>
      <p className="py-6">
        Access premium AI tools, design assets, templates, and productivity <br/>
        software—all in one place. Start creating faster today.<br/>
        Explore Products

      </p>
      <div className="flex flex-col sm:flex-row gap-4">
         
               <button  className="btn bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-full text-white">Explore Products</button>
        
       
       <button className="btn bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-full bg-clip-text text-transparent border-fuchsia-400  ">
        <CiPlay1 className="text-purple-700 w-5 h-5"/> Watch Demo</button>
      </div>
      
    </div>
    <div className="w-full flex justify-center-safe">
        <img
      src={banner}
      alt ="banner"
      className=" w-full max-w-md lg:max-w-lg mx-auto"
    />
    </div>
     
  
    
  </div>
</div>
    )
}

export default Banner