import { useState } from "react"
import { toast } from "react-toastify";



 
 
 



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
                                className="">
                                    
                                    
                                    <span className="flex items-center justify-between border w-18 h-18 rounded-full">
                                        {product.icon}
                                        </span>
                                    <h2>{product.name}</h2>
                                     <h2>{product.title}</h2>
                                    <p>{product.description}</p>
                                    <h3>{product.tag}</h3>
                                    <h3>{product.tagType}</h3>
                                    <h3>{product.period}</h3>
                                    <h3>{product.features}</h3>
                                    <div>${product.price}</div>
                                </div>
                                    <button onClick={handleBuy}>{isBuy? "Buy" : "Buy Now"}</button>         
                                
                                

                    </div>
        </div>
    )
}

export default Carts