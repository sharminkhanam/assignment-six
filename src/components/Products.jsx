import { use } from "react"

function Products ({productPromise}){
    const product = use(productPromise);
    console.log(product)
    return (
        <div className="py-10 container mx-auto">
            <div className="text-center">
                <h2>Premium Digital Tools</h2>
            <p>Choose from our curated collection of premium digital products designed 
                to boost your productivity and creativity.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    product.map(product => <div className="shadow-lg border rounded-lg">
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
                               
                                <div>
                                    
                                </div>
                                x
                                <button>Subcribe Now</button>

                    </div>)
                }
            </div>
        </div>
    )
}

export default Products