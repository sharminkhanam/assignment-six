
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

export default function Footer () {
    return (
        <div className="container mx-auto">
              <footer className="footer sm:footer-horizontal bg-blue-950  p-10 text-white">
                
                   <div >
                  <h1 className="text-3xl font-bold text-white">DigiTools</h1>
                  <p>
                Premium digital tools for creators, <br />professionals, 
                
                and businesses. Work smarter with our <br/>
                suite of powerful tools.
                
                </p>
                </div>
             
               
              <nav>
                <h6 className="font-bold text-2xl">Products</h6>
                <a className="font-semibold text-gray-500">Features</a>
                <a className="font-semibold text-gray-500">Pricing</a>
                <a className="font-semibold text-gray-500">Templates</a>
                <a className="font-semibold text-gray-500">Integrations</a>
              </nav>
              <nav>
                <h6 className="font-bold text-2xl">Company</h6>
                <a className="font-semibold text-gray-500">About</a>
                <a className="font-semibold text-gray-500">Blog</a>
                <a className="font-semibold text-gray-500">Careere</a>
                <a className="font-semibold text-gray-500">Press</a>
              </nav>
              <nav>
                <h6 className="font-bold text-2xl">Resources</h6>
                <a className="font-semibold text-gray-500">Documention</a>
                <a className="font-semibold text-gray-500">Help Center</a>
                <a className="font-semibold text-gray-500">Comunity</a>
                <a className="font-semibold text-gray-500">Conacted</a>
              </nav>
              <nav>
                <h6 className="text-2xl font-bold">Social Links</h6>
                <div className="grid grid-flow-col gap-4 ">
                  <a className="bg-black p-3 rounded-full">
                  <FaXTwitter />
                  </a>
                  <a className="bg-black p-3 rounded-full"> 
                    <FaFacebook />
                  </a>
                  <a className="bg-black p-3 rounded-full">
                    
                  <FaInstagramSquare />
                    
                  </a>
                </div>
                
              </nav>
              
               
            
            </footer>
            <footer className="bg-blue-950 text-gray-500">
                    <div>
                <hr className="border-black"/>
            </div>

            <div className="flex justify-between items-center mt-3">
              
                <p> © Copyright {new Date().getFullYear()} - All right reserved</p>
                <div className="flex items-center gap-4">
                    <p>Privacy Policy</p>
                    <p>Terms of Service </p>
                    <p>Cookies</p>
                </div>
              </div>
            </footer>

    </div>

    )
}