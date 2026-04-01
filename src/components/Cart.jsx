import { toast } from "react-toastify"
import { RiDeleteBin6Line } from "react-icons/ri";
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
                carts.length === 0 ? <p>Carts is empty</p> :
                <>
                 <div className="space-y-4">
                {
                carts.map((item) => <div className="flex justify-between items-center rounded-lg border" key={item.id}>
                    <div className="p-4">
                        <span className="flex gap-2  ">
                         <img src={item.icon} alt="icon"  className="mx-auto object-contain"/>
                         {item.name}
                        </span>
                        <p className="text-semibold text-xl ml-10">${item.price}</p>
                         
                    </div>
                    <div>
                        
                    </div>
                    
                    <div className="flex gap-2">
                         <div>
                        
                    </div>
                    <button onClick = {()=>handleDelete(item)} className="btn "><RiDeleteBin6Line /></button>
                    </div>
                   
                </div>)
            }
            </div>
            <div className="flex justify-between bg-black text-white mt-3 p-4 rounded-xl"> 
                <div>Total</div>
                <div>{totalPrice}</div>
            </div>
            <button onClick={handlePayment} className="btn w-full rounded-3xl text-white bg-red-600 ">
                Procued to checkout</button></>
            }
           
        </div>
    )
}