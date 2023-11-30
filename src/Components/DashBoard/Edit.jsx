import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Edit = () => {

    const editedData = useLoaderData();
    console.log(editedData)

    const  { _id, bio,type,birth,height,weight,age,occupation,fname,mname,perdiv,prediv,exage,exheight,exweight,mobile,email } = editedData;

    const handleEdit = e => {
        e.preventDefault()

        const form = e.target;

        const bio = form.bio.value;
        const image = form.img.value;
        const type = form.type.value;
        const birth = form.birth.value;
        const height = form.height.value;
        const weight = form.weight.value;
        const age = form.age.value;
        const occupation = form.occupation.value;
        const fname = form.fname.value;
        const mname = form.mname.value;
        const perdiv = form.perdiv.value;
        const prediv = form.prediv.value;
        const exage = form.exage.value;
        const exheight = form.exheight.value;
        const exweight = form.exweight.value;
        const mobile = form.mobile.value;
        const email = form.email.value

 

        const EditBio = { bio,image,type,birth,height,weight,age,occupation,fname,mname,perdiv,prediv,exage,exheight,exweight,mobile,email }
        console.log(EditBio)


        fetch(` https://match-mingle-server.vercel.app/add/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(EditBio)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
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
            <h1 className="text-center pt-8 text-3xl">Add Bio</h1>
            <form onSubmit={handleEdit} className="mt-8 pb-8 pr-36">
                <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 lg:justify-between">
                    <div>
                        <div>
                            <span className="">Name</span><br />
                            <input className="lg:w-96 mt-2 h-10 rounded bg-[#fff]" defaultValue={bio} required placeholder="Name" name="bio" type="text" />
                        </div>
                        <div>
                            <span className="">Image</span><br />
                            <input className="lg:w-96 mt-2 h-10 rounded bg-[#fff]"  required placeholder="Publish image" name="img" type="text" />
                        </div>
                        <div>
                            <span className="">Type</span><br />
                            <input className="lg:w-96 mt-2 h-10 rounded bg-[#fff]" defaultValue={type} required placeholder="male/female" name="type" type="text" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <span className="">Date of birth</span><br />
                            <input className="lg:w-96 mt-2 h-10 rounded bg-[#fff]" defaultValue={birth} required placeholder="Date of birth" name="birth" type="text" />
                        </div>
                        <div>
                            <span className="">Height</span><br />
                            <input className="lg:w-96 mt-2 h-10 rounded bg-[#fff]" defaultValue={height} required placeholder="Height" name="height" type="text" />
                        </div>
                        <div>
                            <span className="">Weight</span><br />
                            <input className="lg:w-96 mt-2 h-10 rounded bg-[#fff]" required defaultValue={weight} placeholder="weight" name="weight" type="text" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <span className="">Age</span><br />
                            <input className="lg:w-96 mt-2 h-10 rounded bg-[#fff]" required defaultValue={age} placeholder="Age" name="age" type="text" />
                        </div>
                        <div>
                            <span className="">Occupetion</span><br />
                            <input className="lg:w-96 mt-2 h-10 rounded bg-[#fff]" required defaultValue={occupation} placeholder="Ocuupation" name="occupation" type="text" />
                        </div>
                        <div>
                            <span className="">Email</span><br />
                            <input className="lg:w-96 mt-2 h-10 rounded bg-[#fff]"  required defaultValue={email} placeholder="email" name="email" type="text" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <span className="">Fathers name</span><br />
                            <input className="lg:w-96 mt-2 h-10 rounded bg-[#fff]" required defaultValue={fname} placeholder="Fathers name" name="fname" type="text" />
                        </div>
                        <div>
                            <span className="">Mothers name</span><br />
                            <input className="lg:w-96 mt-2 h-10 rounded bg-[#fff]" required defaultValue={mname} placeholder="Mothers name" name="mname" type="text" />
                        </div>
                        <div>
                            <span className="">Permanent Division</span><br />
                            <input className="lg:w-96 mt-2 h-10 rounded bg-[#fff]" required defaultValue={perdiv} placeholder="permanent division" name="perdiv" type="text" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <span className="">Present Division</span><br />
                            <input className="lg:w-96 mt-2 h-10 rounded bg-[#fff]" required defaultValue={prediv} placeholder="Present division" name="prediv" type="text" />
                        </div>
                        <div>
                            <span className="">Expected partner age</span><br />
                            <input className="lg:w-96 mt-2 h-10 rounded bg-[#fff]" required defaultValue={exage} placeholder="Expected" name="exage" type="text" />
                        </div>
                        <div>
                            <span className="">Expected partner height</span><br />
                            <input className="lg:w-96 mt-2 h-10 rounded bg-[#fff]" required defaultValue={exheight} placeholder="height" name="exheight" type="text" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <span className="">Expected partner weight</span><br />
                            <input className="lg:w-96 mt-2 h-10 rounded bg-[#fff]" required defaultValue={exweight} placeholder="Present division" name="exweight" type="text" />
                        </div>
                        <div>
                            <span className="">Mobile Number</span><br />
                            <input className="lg:w-96 mt-2 h-10 rounded bg-[#fff]" required defaultValue={mobile} placeholder="Expected" name="mobile" type="text" />
                        </div>
                    </div>
                </div>

                <div>
                    <button className="btn w-full h-12 mt-4 rounded-lg hover:bg-yellow-600 bg-yellow-400 border-none text-[#331A15]">Edit</button>
                </div>
            </form>
        </div>
    );
};

export default Edit;