import { use} from "react"
import Card from "./Card";


function Products ({productPromise, carts ,setCarts}){
    const product = use(productPromise);
     
   
    //console.log(product)
    return (
        <div className="py-10 container mx-auto">
            <div className="text-center space-y-3">
                <h2 className="text-3xl font-bold ">Premium Digital Tools</h2>
            <p className="text-gray-500">Choose from our curated collection of premium digital products <br/>designed 
                to boost your productivity and creativity.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 py-16">
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