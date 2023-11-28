import { Button } from "keep-react";
import axios from "axios";
import Swal from "sweetalert2";
const SuccessRoute = () => {


    const hanldeSubmit = e => {

        e.preventDefault()

        const form = e.target;
        const biodataNum = form.number.value;
        const partner = form.partner.value;
        const couple_pic = form.img.value;
        const success_story = form.success.value;

        console.log(biodataNum,partner,couple_pic,success_story)

        const successData = { biodataNum, partner, couple_pic, success_story }
        console.log(successData)

        axios.post('http://localhost:5000/successful', successData)
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
                <form onSubmit={hanldeSubmit}>
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
                    <Button size="md" className="bg-blue-600 mt-4" type="primary">Submit</Button>
                </form>
            </div>
        </div>
    );
};

export default SuccessRoute;