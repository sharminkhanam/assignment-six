import { CiPlay1 } from "react-icons/ci";
import { GiPlainCircle } from "react-icons/gi";
import banner from "../assets/banner.png"

function Banner () {
    return (
      <div className="hero container mx-auto ">
  <div className="flex justify-between gap-8 p-20">
   
    <div className="space-y-5  ">
      <div className="p-2 rounded-full bg-gray-200 w-76 text-center flex gap-2 items-center">
        <GiPlainCircle className="text-purple-400"/>
          <p className="font-semibold text-purple-400">New: AI-Powered Tools Available</p>
      </div>
      
      <h1 className="text-7xl font-bold text-gray-800">Supercharge Your <br/>Digital Workflow</h1>
      <p className="py-6">
        Access premium AI tools, design assets, templates, and productivity <br/>
        software—all in one place. Start creating faster today.<br/>
        Explore Products

      </p>
      <div className="flex gap-5">
         
               <button  className="btn bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-full text-white">Explore Products</button>
        
       
       <button className="btn bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-full bg-clip-text text-transparent border-fuchsia-400">
        <CiPlay1 className="text-purple-700 w-6 h-6"/> Watch Demo</button>
      </div>
      
    </div>
     <img
      src={banner}
      alt ="banner"
      className="mx-auto items-end"
    />
  </div>
</div>
    )
}

export default Banner