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

    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: 'Do you want Delete the product?',
            showCancelButton: true,
            confirmButtonText: 'Delete',
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                fetch(` http://localhost:5000/fav/${_id}`,{
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire('Successfully Deleted', '', 'success')
                        }
                    })

            }


        })
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
                                <th><button onClick={() => handleDelete(data._id)} className="btn">Delete</button></th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyFavourite;