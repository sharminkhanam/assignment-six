import { CiPlay1 } from "react-icons/ci";
import { GiPlainCircle } from "react-icons/gi";

function Banner () {
    return (
      <div className="hero bg-base-200 container mx-auto p-16">
  <div className="flex justify-between ">
   
    <div className="space-y-5 bg-base-200 ">
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
        <button className="btn btn-primary">Get Started</button>
       <button className="btn "><CiPlay1 /> Watch Demo</button>
      </div>
      
    </div>
     <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      className="max-w-sm rounded-lg shadow-2xl"
    />
  </div>
</div>
    )
}

export default Banner