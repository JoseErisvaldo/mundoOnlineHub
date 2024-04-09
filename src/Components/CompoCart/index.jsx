import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { IoTrash } from "react-icons/io5";
import { Link } from "react-router-dom";


export default function CompoCart () { 
  return(

    <div className="grid max-w-6xl gap-4 lg:grid-cols-12 items-start px-4 mx-auto py-6">
      <div className="lg:col-span-8">
        <div>
          <div className="pb-0">
            <div>Shopping Cart</div>
          </div>
          <div>
            <div className="grid gap-4">
              <div className="flex items-start gap-4">
                <div className="grid gap-4 md:gap-2">
                  <div className="flex items-start gap-4 md:gap-2">
                    <img
                      alt="Product image"
                      className="aspect-square rounded-md object-cover border dark:border-gray-800"
                      height="120"
                      src="/placeholder.svg"
                      width="120"
                    />
                    <div className="grid gap-1.5">
                      <h2 className="font-semibold text-base sm:text-xl">Acme Circles T-Shirt</h2>
                      <div className="flex items-center gap-2">
                        <button className="w-6 h-6" size="icon" variant="ghost">
                          <FaArrowUp className="h-4 w-4" />
                          <span className="sr-only">Increase quantity</span>
                        </button>
                        <input
                          className="w-12 border-0 border-b text-center shadow-none appearance-none"
                          type="number"
                          value="1"
                        />
                        <button className="w-6 h-6" size="icon" variant="ghost">
                          <FaArrowDown className="h-4 w-4" />
                          <span className="sr-only">Decrease quantity</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="rounded-full w-8 h-8 dark:bg-gray-950" size="icon" variant="ghost">
                <IoTrash className="w-4 h-4" />
                <span className="sr-only">Remove</span>
              </button>
              <div />
              <div className="flex items-start gap-4">
                <div className="grid gap-2.5 relative group">
                  <Link className="absolute inset-0 z-10" href="#">
                    <span className="sr-only">View</span>
                  </Link>
                  <img
                    alt="Product 2"
                    className="rounded-lg object-cover w-28 aspect-square group-hover:opacity-50 transition-opacity"
                    height={200}
                    src="/placeholder.svg"
                    width={200}
                  />
                  <div className="grid gap-1.5">
                    <div className="flex items-center gap-4">
                      <h3 className="font-semibold">Product 2</h3>
                      <h4 className="font-semibold ml-auto">$29.99</h4>
                    </div>
                    <p className="text-sm leading-none">Description for product 2</p>
                  </div>
                </div>
                <button className="rounded-full w-8 h-8 ml-auto dark:bg-gray-950" size="icon" variant="ghost">
                  <IoTrash className="w-4 h-4" />
                  <span className="sr-only">Remove</span>
                </button>
                <div className="w-full" />
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-4">
              <form className="flex items-center gap-4">
                <label className="sr-only" htmlFor="coupon">
                  Enter coupon code
                </label>
                <input className="w-[200px] sm:w-[300px]" id="coupon" placeholder="Enter coupon code" type="text" />
                <button>Apply Coupon</button>
              </form>
              <button className="ml-auto" variant="outline">
                <IoTrash className="w-4 h-4 mr-2" />
                Proceed to Shipping
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:col-span-4">
        <div>
          <div>
            <div>Order Summary</div>
            <div>You have 2 items in your cart</div>
          </div>
          <div>
            <div className="flex items-start gap-4">
              <div className="grid gap-2">
                <h3 className="font-semibold">Subtotal</h3>
                <h3 className="font-semibold">Shipping</h3>
                <h3 className="font-semibold">Taxes</h3>
              </div>
              <div className="grid gap-2 ml-auto text-right">
                <h3>$198.00</h3>
                <h3>Free</h3>
                <h3>$17.82</h3>
              </div>
            </div>
          </div>
          <div>
            <button className="w-full" size="lg">
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
