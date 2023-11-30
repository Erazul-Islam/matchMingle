import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckoutPayement = () => {

    const stripe = useStripe();
    const elements = useElements()

    const handleSubmit = e => {
        e.preventDefault()

        if(!stripe || !elements){
            return
        }

        const card = elements.getElement(CardElement)

        if(card === null){
            return
        }

        const {error, payementMethod} = stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if(error){
            console.log('error khaisi vai')
        }else{
            console.log('payement Method',payementMethod)
        }
    }



    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn btn-sm btn-primary my-4" type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>
    );
};

export default CheckoutPayement;