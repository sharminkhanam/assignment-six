
import { FaCheck } from "react-icons/fa6";

export default function Pricingsection () {
    return (
        <div className="container mx-auto px-4 py-16 mt-8">
            <div className="text-center space-y-4">
                <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl ">Simple, Transparent Pricing</h2>
                <p>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center p-10 ">

            <div className="card w-100 bg-base-200 shadow-sm">
              <div className="card-body ">
   
    
            <div className="space-y-3">
              <h2 className="text-3xl font-bold">Starter</h2>
              <p>Perfect for getting started</p>
              
            </div>
              <span className="text-5xl mt-4">$0/mo</span>
              <ul className="mt-6 flex flex-col gap-2 text-xs">
                <li className="flex gap-2 items-center">
                  <FaCheck className="text-green-500 w-5 h-5 "/>
                  <span>Access to 10 free tools</span>
                </li>
                <li className="flex gap-2 items-center"> 
                  <FaCheck className="text-green-500 w-5 h-5 "/>
                  <span>Basic templates</span>
                </li>
                <li className="flex gap-2 items-center">
                    <FaCheck className="text-green-500 w-4 h-4"/>
                  <span>Community support</span>
                </li>
                <li className="flex gap-2 items-center">
                  <FaCheck className="text-green-500 w-5 h-5 "/>
                  <span>1 project per month</span>
                </li>
              
              </ul>
              <div className="mt-6">
                <button className="btn bg-gradient-to-r from-blue-500 to-purple-500  btn-block text-white p-7 rounded-full text-xl text-center font-bold">Get Started Free</button>
              </div>
            </div>
            </div>

            <div className="card w-100 bg-base-100 shadow-sm">
              <div className="card-body bg-gradient-to-r from-blue-500 to-purple-500 rounded-md">
                <div className="flex justify-center ">
                    <span className=" badge sbadge-xs badge-warning rounded-full">Most Popular</span>
                </div>
                
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold text-white">Pro</h2>
                  <p className="text-white">Best for professionals</p>
                  
                </div>
                <span className="text-5xl text-white mt-4">$29/mo</span>
                <ul className="mt-6 flex flex-col gap-2 text-xs">
                  <li className="flex gap-2 items-center">
                    <FaCheck className="text-white w-5 h-5 "/>
                    <span className="text-white">Access to all premium tools</span>
                  </li>
                  <li className="flex gap-2 items-center"> 
                    <FaCheck className="text-white w-5 h-5 "/>
                    <span className="text-white">Unlimited templates</span>
                  </li>
                  <li className="flex gap-2 items-center">
                      <FaCheck className="text-white w-5 h-5"/>
                    <span className="text-white">Priority support</span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <FaCheck className="text-white w-5 h-5 "/>
                    <span className="text-white">Unlimited projects</span>
                  </li>
                  <li className="flex gap-2 items-center">
                      <FaCheck className="text-white w-5 h-5 "/>
                    <span className="text-white">Cloud sync</span>
                  </li>
                  <li className="flex gap-2 items-center">
                    <FaCheck className="text-white w-5 h-5 "/>
                    <span className="text-white">Advanced analytics</span>
                  </li>
                </ul>
                <div className="mt-6 bg-white p-2 rounded-full">
                  <button className=" bg-gradient-to-r from-blue-500 to-purple-800 bg-clip-text 
                  text-transparent btn-block p-1 rounded-full text-xl text-center font-bold">Start Pro Trial</button>
                </div>
              </div>
            </div>

            <div className="card w-100 bg-base-200 shadow-sm">
  <div className="card-body ">
   
    
    <div className="space-y-3">
      <h2 className="text-3xl font-bold">Enterprise</h2>
      <p>For teams and businesses</p>
      
    </div>
    <span className="text-5xl mt-4">$99/mo</span>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li className="flex gap-2 items-center">
         <FaCheck className="text-green-500 w-5 h-5 "/>
        <span>Everything in Pro</span>
      </li>
      <li className="flex gap-2 items-center"> 
        <FaCheck className="text-green-500 w-5 h-5 "/>
        <span>Team collaboration</span>
      </li>
      <li className="flex gap-2 items-center">
           <FaCheck className="text-green-500 w-4 h-4"/>
        <span>Custom integrations</span>
      </li>
      <li className="flex gap-2 items-center">
         <FaCheck className="text-green-500 w-5 h-5 "/>
        <span>Dedicated support</span>
      </li>
      <li className="flex gap-2 items-center">
           <FaCheck className="text-green-500 w-5 h-5 "/>
        <span >SLA guarantee</span>
      </li>
      <li className="flex gap-2 items-center">
        <FaCheck className="text-green-500 w-5 h-5 "/>
        <span>Custom branding</span>
      </li>
    </ul>
    <div className="mt-6">
      <button className="btn bg-gradient-to-r from-blue-500 to-purple-500  btn-block text-white p-7 rounded-full
      text-xl text-center font-bold">Contact Sales</button>
    </div>
  </div>
            </div>
            </div>

           
          
         
         
            
        </div>
    )
}