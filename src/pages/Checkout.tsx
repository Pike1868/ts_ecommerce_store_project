import { useAppSelector } from '@/hooks';
import { CheckoutForm, SectionTitle, CartTotals } from '@/components';
import { LoaderFunction, redirect } from 'react-router-dom';
import { toast } from '@/components/ui/use-toast';
import { type ReduxStore } from '@/store';

export const loader = (store:ReduxStore):LoaderFunction => async():Promise<Response|null> => {
  console.log(store);
  const user = store.getState().userState.user;

  if(!user){
    toast({description:"Please login to continue!"})
    return redirect("/login")
  }
  return null
}

export default function Checkout() {
  const cartTotal = useAppSelector((state)=>state.cartState.cartTotal);
  console.log(cartTotal)
  if(cartTotal === 0 ){
    return <SectionTitle text="Your cart is empty" />
  }

  return (
    <>
    <SectionTitle text="Place Your Order" />
      <div className="grid items-start gap-8 mt-8 md:grid-cols-2">
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  )
}
