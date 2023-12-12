import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutPayement from "./CheckoutPayement";

const Payement = () => {

    // const stripePromise = loadStripe('import.meta.env.PUBLISHABLE_KEY');
    const stripePromise = loadStripe('pk_test_51OEWQiI8i8m69lNjPL8a3QNQtS31dfaIR6lr00gHoVxSTvtZpjdNVv186ZG7pYGfTwqchyWoClqvbBLGmdzA4Oxr00lZCJmnc7');

    return (
        <div>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutPayement></CheckoutPayement>
                </Elements>
            </div>
        </div>
    );
};

export default Payement;