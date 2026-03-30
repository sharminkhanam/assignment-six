import { CiPlay1 } from "react-icons/ci";


function Banner () {
    return (
      <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
        <p>New: AI-Powered Tools Available</p>
      <h1 className="text-5xl font-bold">Supercharge Your Digital Workflow</h1>
      <p className="py-6">
        Access premium AI tools, design assets, templates, and productivity
        software—all in one place. Start creating faster today.
        Explore Products

      </p>
      <div className="">
        <button className="btn btn-primary">Get Started</button>
       <button className="btn "><CiPlay1 /> Watch Demo</button>
      </div>
      
    </div>
  </div>
</div>
    )
}

export default Banner