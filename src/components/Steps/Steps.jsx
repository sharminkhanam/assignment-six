import user from "../../assets/user.png"
import baje from "../../assets/baje.png"
import rocket from "../../assets/rocket.png"

function Steps () {
    return (
        <div className="container mx-auto bg-base-200 p-20 mt-8">
            <div >
                <div className="">
                    <div className="text-center space-y-4">
                         <h1 className="font-bold text-5xl ">Get Started in 3 Steps</h1>
                    <p className="text-gray-500">Start using premium digital tools in minutes, not hours.</p>
                    </div>
                  </div>
                    <div className="flex justify-between mt-8">
                        <div className="card bg-base-100 w-96 shadow-sm p-8">
                      <figure>
                        <img
                          src={user}
                          alt="user" className="bg-base-300 p-4 rounded-full"/>
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title text-3xl font-bold text-gray-700">Create Account</h2>
                        <p>Sign up for free in seconds. No credit card 
                          <br/>required to get started.</p>
                      
                      </div>
                    </div>
                    <div className="card bg-base-100 w-96 shadow-sm p-8">
                      <figure>
                        <img
                          src={baje}
                          alt="baje" className="bg-base-300 p-4 rounded-full"/>
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title text-3xl font-bold text-gray-700">Choose Products</h2>
                        <p>Browse our catalog and select the toolsthat fit your needs.</p>
                        
                      </div>
                    </div>
                    <div className="card bg-base-100 w-96 shadow-sm p-8">
                       <figure>
                        <img
                          src={rocket}
                          alt="rocket" className="bg-base-300 p-4 rounded-full "/>
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title text-3xl font-bold text-gray-700">Start Creating</h2>
                        <p>Download and start using your premium <br/>tools immediately.</p>
                      
                      </div>
                    </div>
                    </div>
                    
                 

                </div>
             
            </div>
            
       
    )
}

export default Steps