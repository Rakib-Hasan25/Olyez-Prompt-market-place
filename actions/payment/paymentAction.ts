"use server";
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
import Stripe from "stripe"
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!, {
  apiVersion:"2024-04-10"
})

// send stripe publishable key
export const stripePublishableKey = () => {
  const publishableKey =  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
  console.log(publishableKey);
  return publishableKey;
};

// send stripe payment intent
export const stripePaymentIntent = async ({ amount }: { amount: number }) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      metadata: {
        company: "Olyez",
      },
      automatic_payment_methods: {
        enabled: true,
      },
    });


    // const checkoutSesion = await stripe.checkout.sessions.create({
    //   success_url:`${process.env.NEXT_PUBLIC_WEBSITE_URL}/marketplace`,
    //   cancel_url:`${process.env.NEXT_PUBLIC_WEBSITE_URL}/marketplace`,
    //   payment_method_types:['card','paypal'],
    //   mode:'payment',
    //   metadata:{
    //     company: "Olyez",
    //   },
    //   line_items:[{price:amount as string }],
    // })




    // return {url:checkoutSesion.url}

    const  plainpaymentIntent = JSON.parse(JSON.stringify(paymentIntent));
    console.log(plainpaymentIntent)
    return plainpaymentIntent;
  } catch (error) {
    console.log(error);
  }
};


/*
install stripe and 
@stripe/stripe.js
@stripe/react-stripe-js
*/