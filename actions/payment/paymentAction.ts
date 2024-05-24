"use server";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// send stripe publishable key
export const stripePublishableKey = () => {
  const publishableKey = process.env.STRIPE_PUBLISHABLE_KEY;
  console.log(publishableKey);
  return publishableKey;
};

// send stripe payment intent
export const stripePaymentIntent = async ({ amount }: { amount: Number }) => {
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
    const  plainpaymentIntent = JSON.parse(JSON.stringify(paymentIntent));

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