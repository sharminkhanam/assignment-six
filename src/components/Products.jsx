import { use} from "react"
import Card from "./Card";

function Products ({productPromise, carts ,setCarts}){
    const product = use(productPromise);
     
   
    //console.log(product)
    return (
        <div className="py-10 container mx-auto">
            <div className="text-center">
                <h2>Premium Digital Tools</h2>
            <p>Choose from our curated collection of premium digital products designed 
                to boost your productivity and creativity.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    product.map((product) => 
                        <Card product={product} carts={carts} setCarts={setCarts}></Card>
                    )
                }
            </div>
        </div>
    )
}

export default Products