import { useState } from "react"
import { toast } from "react-toastify";
import { FaCheck } from "react-icons/fa6";


function Carts ({product, carts, setCarts}) {
    const [isBuy , setIsBuy] = useState(false);
    const handleBuy = () => {
        setIsBuy(true)

        const isFound = carts.find( item => item.id === product.id);
        if(isFound){
            toast.error("item already in cart")
            return ;
        }
        //console.log(isFound)
        setCarts([...carts,product])
        toast.success("item added to cart")
    }
    return (
        <div>
            <div className="shadow-lg border rounded-lg">
                            
                               
                        <div 
                                key={product.id}
                                className="p-8 ">
                                    
                                    
                                    <span className="flex items-center justify-between w-20 h-20 border  rounded-full">
                                       <img src={product.icon} alt="icon"  className="mx-auto"/>
                                        </span>
                                        <div className="space-y-3 mt-4">
                                             <h2 className="font-bold text-2xl">{product.name}</h2>
                                    
                                    <p className="font-semibold">{product.description}</p>
                                    
                                      <div>${product.price}</div>
                                   <h3 className="flex gap-2 items-center"> 
                                    <FaCheck className="text-green-500 w-5 h-5 "/>{product.tag}</h3>
                                    
                                    <h3 className="flex gap-2 items-center">
                                        <FaCheck className="text-green-500 w-5 h-5 "/>{product.tagType}</h3>
                                    <h3 className="flex gap-2 items-center">
                                        <FaCheck className="text-green-500 w-5 h-5 "/>{product.period}</h3>
                                    <h3 className="flex gap-2 items-center">
                                        <FaCheck className="text-green-500 w-5 h-5 "/>{product.features}</h3>
                                        </div>
                                    
                                    </div>
                                    <button onClick={handleBuy} className="btn bg-gradient-to-r from-blue-500 to-purple-500  btn-block text-white p-5 
                                    rounded-full mb-4
                                    text-xl text-center font-bold">
                                        {isBuy? "Buy" : "Buy Now"}</button>  
                                </div>
                                          
                                
                                

                    </div>
        
    )
}

export default Carts