import { useState } from "react"
import { toast } from "react-toastify";
import { FaCheck } from "react-icons/fa6";



 
 
 



function Carts ({product, carts, setCarts}) {
    const [isBuy , setIsBuy] = useState(false);
    const handleBuy = () => {
        setIsBuy(true)

        const isFound = carts.find( item => item.id === product).id;
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
                                    <span className="flex gap-2"><h3> <FaCheck className="text-green-500 w-5 h-5 "/>{product.tag}</h3></span>
                                    
                                    <h3>{product.tagType}</h3>
                                    <h3>{product.period}</h3>
                                    <h3>{product.features}</h3>
                                        </div>
                                   
                                </div>
                                    <button onClick={handleBuy}>{isBuy? "Buy" : "Buy Now"}</button>         
                                
                                

                    </div>
        </div>
    )
}

export default Carts