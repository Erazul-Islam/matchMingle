import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const MyFavourite = () => {

    const favouriteData = useLoaderData();
    

    const { user } = useContext(AuthContext)
    const email = user.email

    const filteredData = favouriteData.filter(single => single.userEmail === email)
    console.log(filteredData)

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

                fetch(` https://match-mingle-server.vercel.app/fav/${_id}`, {
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
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Biodata Id</th>
                            <th>Division</th>
                            <th>Occupation</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            filteredData.map(data => <tr key={data._id}>

                                <td>{data.biodata_id}</td>
                                <td>{data.division}</td>
                                <td>{data.occupation}</td>
                                <th><button onClick={() => handleCancel(data._id)} className="btn">Delete</button></th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyFavourite;