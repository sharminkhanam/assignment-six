export default function Transform () {
    return (
        <div className="container mx-auto p-20 bg-purple-700">
            <div className=" text-center x  mt-4">
                <div className="space-y-3">
                    <h1 className="text-white font-bold text-5xl">Ready to Transform Your Workflow?</h1>
                <p className=" text-gray-300">Join thousands of professionals who are already using Digitools to work smarter.
                    <br />
                    Start your free trial today.
                    </p>
                </div>
                
                    <div className="flex gap-4 justify-center mt-8">
                        <button className="btn p-6 rounded-full text-blue-500">Export Products</button>
                        <button className="btn bg-purple-700 p-6 rounded-full border-white text-white">View Pricing</button>
                    </div>
                    <p className="mt-5 text-gray-300">14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    )

}