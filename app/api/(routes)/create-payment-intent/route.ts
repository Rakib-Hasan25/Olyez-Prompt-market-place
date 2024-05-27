import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import { v4 as uuidv4 } from 'uuid';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
 
    try {
      const { product,token } = req.body;
      console.log("Product",product);
      console.log("Price",product.price);

      const idempotencykey=uuidv4();

      if (!product.price || typeof product.price !== 'number') {
        res.status(400).json({ error: 'Invalid amount' });
        return;
      }

      // const paymentIntent = await stripe.paymentIntents.create({
      //   amount,
      //   currency: 'usd',
      //   metadata: {
      //     company: 'Olyez',
      //   },
      //   automatic_payment_methods: {
      //     enabled: true,
      //   },
      // });

      // res.status(200).json({ clientSecret: paymentIntent.client_secret });
      
            return stripe.customers.create({
              email:token.email,
              source:token.id
            }).then(customer=>{
              stripe.charges.create({
                amount:product.price*100,
                currency: 'usd',
                customer:customer.id,
                receipt_email:token.email,
                description:`purchase of${product.name}`
              },{idempotencykey}as Object)
            }).then(result=>res.status(200).json(result)).catch(err=>console.log(err));



    } catch (error: any) {
      console.error('Error creating payment intent:', error);
      res.status(500).json({ error: error.message });
    }
  } 


