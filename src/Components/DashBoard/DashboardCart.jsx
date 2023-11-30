
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const DashboardCart = () => {

    const { user } = useContext(AuthContext)
    const email = user.email
    const data = useLoaderData();

    const filteredData = data.filter(single => single.email === email)

    const hanldeClick = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Make Premium"
        }).then((result) => {
            if (result.isConfirmed) {
                const add = { email }
                axios.post('https://match-mingle-server.vercel.app/premium', add)
                    .then(res => {
                        console.log(res)
                        Swal.fire({
                            title: "Request sent",
                            text: "Wait for Admin Approval",
                            icon: "success"
                        });
                    })

            }
        });
    }



    return (
        <div>
            {
                filteredData.map(data => <div key={data._id}>
                    <h1 className="text-center pt-8 text-3xl">Your Bio</h1>
                    <img src={data.image} alt="" />
                    <form className=" mt-8 pb-8 pr-36">
                        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:justify-between">
                            <div>
                                <div>
                                    <span className="">Name</span><br />
                                    <input className="lg:w-96 mt-2 h-10 rounded text-black bg-[#fff]" defaultValue={data.bio} readOnly required placeholder="Name" name="bio" type="text" />
                                </div>
                                <div>
                                    <span className="">Type</span><br />
                                    <input className="lg:w-96 mt-2 h-10 rounded text-black bg-[#fff]" defaultValue={data.type} readOnly required placeholder="male/female" name="type" type="text" />
                                </div>
                            </div>
                            <div>
                                <div>
                                    <span className="">Date of birth</span><br />
                                    <input className="lg:w-96 mt-2 h-10 rounded text-black bg-[#fff]" defaultValue={data.birth} readOnly required placeholder="Date of birth" name="birth" type="text" />
                                </div>
                                <div>
                                    <span className="">Height</span><br />
                                    <input className="lg:w-96 mt-2 h-10 rounded text-black bg-[#fff]" defaultValue={data.height} readOnly required placeholder="Height" name="height" type="text" />
                                </div>
                                <div>
                                    <span className="">Weight</span><br />
                                    <input className="lg:w-96 mt-2 h-10 rounded text-black bg-[#fff]" defaultValue={data.weight} readOnly required placeholder="weight" name="weight" type="text" />
                                </div>
                            </div>
                            <div>
                                <div>
                                    <span className="">Age</span><br />
                                    <input className="lg:w-96 mt-2 h-10 rounded text-black bg-[#fff]" defaultValue={data.age} readOnly required placeholder="Age" name="age" type="text" />
                                </div>
                                <div>
                                    <span className="">Occupetion</span><br />
                                    <input className="lg:w-96 mt-2 h-10 rounded text-black bg-[#fff]" defaultValue={data.occupation} readOnly required placeholder="Ocuupation" name="occupation" type="text" />
                                </div>
                                <div>
                                    <span className="">Email</span><br />
                                    <input className="lg:w-96 mt-2 h-10 rounded text-black bg-[#fff]" defaultValue={data.email} readOnly required placeholder="email" name="email" type="text" />
                                </div>
                            </div>
                            <div>
                                <div>
                                    <span className="">Fathers name</span><br />
                                    <input className="lg:w-96 mt-2 h-10 rounded text-black bg-[#fff]" defaultValue={data.fname} readOnly required placeholder="Fathers name" name="fname" type="text" />
                                </div>
                                <div>
                                    <span className="">Mothers name</span><br />
                                    <input className="lg:w-96 mt-2 h-10 rounded text-black bg-[#fff]" defaultValue={data.mname} readOnly required placeholder="Mothers name" name="mname" type="text" />
                                </div>
                                <div>
                                    <span className="">Permanent Division</span><br />
                                    <input className="lg:w-96 mt-2 h-10 rounded text-black bg-[#fff]" defaultValue={data.perdiv} readOnly required placeholder="permanent division" name="perdiv" type="text" />
                                </div>
                            </div>
                            <div>
                                <div>
                                    <span className="">Present Division</span><br />
                                    <input className="lg:w-96 mt-2 h-10 rounded text-black bg-[#fff]" defaultValue={data.perdiv} readOnly required placeholder="Present division" name="prediv" type="text" />
                                </div>
                                <div>
                                    <span className="">Expected partner age</span><br />
                                    <input className="lg:w-96 mt-2 h-10 rounded text-black bg-[#fff]" defaultValue={data.exage} readOnly required placeholder="Expected" name="exage" type="text" />
                                </div>
                                <div>
                                    <span className="">Expected partner height</span><br />
                                    <input className="lg:w-96 mt-2 h-10 rounded text-black bg-[#fff]" defaultValue={data.exheight} readOnly required placeholder="height" name="exheight" type="text" />
                                </div>
                            </div>
                            <div>
                                <div>
                                    <span className="">Expected partner weight</span><br />
                                    <input className="lg:w-96 mt-2 h-10 rounded text-black bg-[#fff]" defaultValue={data.exweight} readOnly required placeholder="Expected weight" name="exweight" type="text" />
                                </div>
                                <div>
                                    <span className="">Mobile Number</span><br />
                                    <input className="lg:w-96 mt-2 h-10 rounded text-black bg-[#fff]" defaultValue={data.mobile} readOnly required placeholder="Expected" name="mobile" type="text" />
                                </div>
                            </div>
                        </div>
                        <div>
                        </div>
                    </form>
                </div>)
            }
            
            <button className="btn btn-success" onClick={hanldeClick}>Make Premium</button>
        </div>
    );
};

export default DashboardCart;