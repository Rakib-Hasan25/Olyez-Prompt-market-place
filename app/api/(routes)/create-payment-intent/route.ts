import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
 
    try {
      const { amount } = req.body;

      if (!amount || typeof amount !== 'number') {
        res.status(400).json({ error: 'Invalid amount' });
        return;
      }

      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: 'usd',
        metadata: {
          company: 'Olyez',
        },
        automatic_payment_methods: {
          enabled: true,
        },
      });

      res.status(200).json({ clientSecret: paymentIntent.client_secret });
    } catch (error: any) {
      console.error('Error creating payment intent:', error);
      res.status(500).json({ error: error.message });
    }
  } 


