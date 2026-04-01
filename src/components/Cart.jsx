import { toast } from "react-toastify"

export default function Cart ({carts, setCarts}){
    const totalPrice = carts.reduce((sum , item)=> sum + item.price, 0)
    console.log(carts)
    const handlePayment = () => {
        setCarts([])
        toast.success('payment successfully')
    }
    const handleDelete = (item) => {
        const fiteredArray = carts.filter (c=>c.id !== item.id)
        setCarts(fiteredArray);
        toast.success('item deleted')
    }
    return (
        <div className="p-10 container mx-auto">
            <h1 className="font-bold text-3xl "> Your cart</h1>
            {
                carts.length === 0 ? <p className="text-xl font-semibold text-red-500">Carts is empty</p> :
                <>
                 <div className="space-y-4">
                {
                carts.map((item) => <div className="flex justify-between items-center rounded-lg  bg-gray-200" key={item.id}>
                    <div className="p-4 ">
                        <span className="flex gap-4">
                         <img src={item.icon} alt="icon"  className="mx-auto object-contain text-black bg-white p-3 rounded-full w-20 h-20 mt-4"/>
                       <h2 className="text-xl font-bold mt-10">{item.name}</h2>
                        </span>
                        <p className="font-semibold text-3xl ml-24 text-black ">${item.price}</p>
                         
                    </div>
                    <div>
                        
                    </div>
                    
                    <div className="flex gap-2">
                         <div>
                        
                    </div>
                    <button onClick = {()=>handleDelete(item)} className="text-red-600 mr-10 text-center">Remove</button>
                    </div>
                   
                </div>)
            }
            </div>
            <div className="flex justify-between bg-base-200 text-gray-500 mt-3 p-4 rounded-xl "> 
                <div className="text-xl font-bold">Total:</div>
                <div className="text-xl font-bold">{totalPrice}</div>
            </div>
            <button onClick={handlePayment} className="btn w-full rounded-3xl text-white bg-red-600 mt-4">
                Procued to checkout</button></>
            }
           
        </div>
    )
}