import AddToCardMenu from "../Components/add-to-card/menu-item";
import Address from "../Components/checkOut/address";
import Cupon from "../Components/checkOut/cupon";
import image from "../Image/category/oral-care.webp";
import OrderButton from "../utils/order-btn";

function CheckOut() {
  return (
    <section className="min-h-screen"> 
      <section className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start"> 
        
        {/* Section 1: Cart Items */}
        <section className="col-span-1 p-6 bg-white border border-gray-200 rounded-xl shadow-lg"> 
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6 border-b pb-3"> 
            🛒 Your Cart Items
          </h2>
          <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
           
            <AddToCardMenu
              image={image}
              name={"Woman Care Cream"}
              price={250}
              quantiry={6}
            />
           
          </div>
        </section>

        {/* Section 2: Order Summary / Checkout Details */}
        <section className="col-span-1 p-6 bg-white border border-gray-200 rounded-xl shadow-lg sticky top-8"> 
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6 border-b pb-3"> 
            📝 Order Summary
          </h2>
          <div className="space-y-6 text-gray-700"> 
            
            {/* shipping address */}
            <Address />
            
            {/* Cupon component */}
            <Cupon /> 

            {/* Total Count Container */}
            <div className="pt-4 border-t border-gray-200 space-y-3">
                
              <div className="flex justify-between">
                <span className="text-base text-gray-800">Subtotal</span>
                <span className="text-lg font-semibold text-gray-900">৳ 1800/-</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Shipping</span>
                <span className="font-normal text-gray-600">৳ 60/-</span>
              </div>

              {/* Grand Total */}
              <div className="flex justify-between font-extrabold text-2xl pt-4 border-t-2 border-red-400">
                <span className="text-gray-900">Total</span>
                <span className="text-red-400">৳ 1860/-</span> 
              </div>
            </div>
          </div>

          {/* submit button */}
          <div className="mt-8 w-full"> 
            <OrderButton text={'Proceed to Checkout'} className="w-full" />
          </div>
        </section>
      </section>
    </section>
  );
}

export default CheckOut;