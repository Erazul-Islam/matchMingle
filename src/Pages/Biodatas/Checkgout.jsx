import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Checkgout = () => {

    const { user } = useContext(AuthContext)
    const email = user.email
    console.log(email)


    

    return (
        <div className="lg:ml-20 mt-32">
            <form>
                <div>
                    <div>
                        <span className="">Biodata Id</span><br />
                        <input className="lg:w-96 mt-2 h-10 rounded bg-[#fff]" required placeholder="Id" name="number" type="text" />
                    </div>
                    <div>
                        <span className="">Self Biodata Id</span><br />
                        <input className="lg:w-96 mt-2 h-10 rounded bg-[#fff]" required placeholder="Publish image" name="img" type="text" />
                    </div>
                    <div>
                        <span className="">Email</span><br />
                        <input className="lg:w-96 mt-2 h-10 rounded text-black bg-[#fff]" defaultValue={email}  required placeholder="" name="partner" type="text" />
                    </div>
                    <div>
                        <span className="">Strip card</span><br />
                        <input className="lg:w-96 mt-2 h-10 rounded bg-[#fff]" required placeholder="story" name="success" type="text" />
                    </div>
                </div>
                <button className="btn mt-4 btn-success">Submit</button>
            </form>
        </div>
    );
};

export default Checkgout;