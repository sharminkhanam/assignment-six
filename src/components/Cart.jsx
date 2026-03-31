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
        <div>
            <h1>cart</h1>
            {
                carts.length === 0 ? <p>Carts is empty</p> :
                <>
                 <div className="flex ">
                {
                carts.map((item) => <div key={item.id}>
                    <div>
                        {item.icon}
                    </div>
                    <div>
                        {item.title}
                    </div>
                    <div className="flex gap-2">
                         <div>
                        {item.price}
                    </div>
                    <button onClick = {()=>handleDelete(item)} className="btn ">x</button>
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