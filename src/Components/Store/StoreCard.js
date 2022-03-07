import ShopButton from "../Buttons/ShopButton"
import { loadStripe } from "@stripe/stripe-js"
import { useState } from "react";

const stripePromise = loadStripe(
    process.env.REACT_APP_STRIPE_API_KEY
  );


const StoreCard = ({title, image, price, alt}) => {
  const[stripeError,setStripeError] = useState();
  const[loading,setLoading] = useState();

  const handleClick = async() => {
    setLoading(true);
  

  const stripe = await stripePromise;

  const { error } = await stripe.redirectToCheckout({
    lineItems:[
      {
        price: process.env.REACT_APP_STRIPE_PRODUCT_KEY,
        quantity:1,
      },
    ],
    mode: "payment",
    cancelUrl:window.location.origin,
    successUrl:`${window.location.origin}/purchase`,
  });

  if(error){ 
    setLoading(false);
    setStripeError(error);
  }
};

  return (
    <div data-aos="slide-up" className="md:w-1/3 w-full my-4 mx-3 h-full rounded-xl bg-red-400 overflow-hidden shadow-lg">
      <img className="p-3 rounded-3xl" alt={alt} src = {image}/>
      <div className=" my-2">
          <h2 className="text-bold flex justify-center p-2 text-center text-4xl font-inconsolata font-bold">{title}</h2>
          <h3 className="text-bold flex justify-center p-2 text-center text-2xl font-inconsolata">${price}</h3>
      </div>
      <div className=" w-full flex justify-center p-2">
          {stripeError && <p className="text-red-500">{stripeError}</p>}
          <ShopButton disabled={loading} onClick={handleClick} text = "Buy"/>
      </div>
  </div>
  )
}

export default StoreCard