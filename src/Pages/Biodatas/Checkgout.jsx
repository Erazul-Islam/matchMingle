import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutPayement from "../../Components/AdminDashboard/CheckoutPayement";


const Checkgout = () => {

    const { user } = useContext(AuthContext)
    const email = user.email
    console.log(email)

    const stripePromise = loadStripe('pk_test_51OEWQiI8i8m69lNjPL8a3QNQtS31dfaIR6lr00gHoVxSTvtZpjdNVv186ZG7pYGfTwqchyWoClqvbBLGmdzA4Oxr00lZCJmnc7');

    const hanldeClick = (e) => {

        e.preventDefault()
        const form = e.target;
        const number = form.number.value;
        const partner = form.partner.value;
        const card = form.card.value;

        const add = { number, partner, card, email }
        console.log(add)

        axios.post('https://match-mingle-server.vercel.app/contact', add)
            .then(res => {
                console.log(res.data)
                if (res.insertedId) {
                    Swal.fire({
                        title: "Good job!",
                        text: "You clicked the button!",
                        icon: "success"
                    });
                }
            })
    }




    return (
        <div className="lg:ml-20 mt-32">
            <form onSubmit={hanldeClick}>
                <div>
                    <div>
                        <span className="">Biodata Id</span><br />
                        <input className="lg:w-96 mt-2 h-10 rounded bg-[#fff]"  placeholder="11" name="number" type="text" />
                    </div>
                    <div>
                        <span className="">Self Biodata Id</span><br />
                        <input className="lg:w-96 mt-2 h-10 rounded bg-[#fff]"  placeholder="10" name="partner" type="text" />
                    </div>
                    <div>
                        <span className="">Email</span><br />
                        <input className="lg:w-96 mt-2 h-10 rounded text-black bg-[#fff]" defaultValue={email}  placeholder="" name="partner" type="text" />
                    </div>
                </div>
                <button className="btn mt-4 btn-success">Submit</button>
            </form>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutPayement></CheckoutPayement>
                </Elements>
            </div>
        </div>
    );
};

export default Checkgout;