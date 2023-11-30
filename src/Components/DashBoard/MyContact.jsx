import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";


const MyContact = () => {



    const axiosSecure = useAxiosSecure();



    const { data: contact = [] } = useQuery({
        queryKey: ['contact'],
        queryFn: async () => {
            const res = await axiosSecure.get('/contact')
            return res.data
        }
    })

    const { data: all = [] } = useQuery({
        queryKey: ['all'],
        queryFn: async () => {
            const res = await axiosSecure.get('/all')
            return res.data
        }
    })

    console.log(all)

    const { user } = useContext(AuthContext)
    const email = user.email

    const filteredData = contact.filter(single => single.email === email)

    const aall = all.filter(single => single.biodata_id === filteredData.number);
    console.log(aall)

    const handleCancel = _id => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(` http://localhost:5000/contact/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your cancelletion has been cancelled.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }


    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Biodata Id</th>
                            <th>status</th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            filteredData.map(single => <tr key={single._id}>

                                <td></td>
                                <td>{single.number}</td>
                                <td>Pending</td>
                                <th>{single.phone}</th>
                                <th></th>
                                <th><button onClick={() => handleCancel(single._id)} className="btn btn-error">Delete</button></th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyContact;