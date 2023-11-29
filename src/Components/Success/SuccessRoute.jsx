import axios from "axios";
import Swal from "sweetalert2";
const SuccessRoute = () => {


    const handleAdd = e => {
        e.preventDefault()

        const form = e.target;

        const number = form.number.value;
        const couple_pic = form.img.value;
        const partner = form.partner.value;
        const success_story = form.success.value;
        

        const success = { number,couple_pic,partner,success_story }
        console.log(success)

        axios.post('http://localhost:5000/successful', success)
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
        <div>
            <div className="lg:ml-32 lg:mt-32">
                <p>Submit Your story</p>
                <form onSubmit={handleAdd}>
                    <div>
                        <div>
                            <span className="">Biodata Id</span><br />
                            <input className="lg:w-96 mt-2 h-10 rounded bg-[#fff]" required placeholder="Name" name="number" type="text" />
                        </div>
                        <div>
                            <span className="">Couple</span><br />
                            <input className="lg:w-96 mt-2 h-10 rounded bg-[#fff]" required placeholder="Publish image" name="img" type="text" />
                        </div>
                        <div>
                            <span className="">Partner Id</span><br />
                            <input className="lg:w-96 mt-2 h-10 rounded bg-[#fff]" required placeholder="" name="partner" type="text" />
                        </div>
                        <div>
                            <span className="">Story</span><br />
                            <input className="lg:w-96 mt-2 h-10 rounded bg-[#fff]" required placeholder="story" name="success" type="text" />
                        </div>
                    </div>
                    <button className="btn w-32 h-12 mt-4 rounded-lg hover:bg-yellow-600 bg-yellow-400 border-none text-[#331A15]">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default SuccessRoute;