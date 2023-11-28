import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const SuccessStory = () => {

    const axiosPublic = useAxiosPublic();

    const { data: bio = [] } = useQuery({
        queryKey: ['all'],
        queryFn: async () => {
            const res = await axiosPublic.get('/successful')
            return res.data
        }
    })

    return (
        <div>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Male BioData Id</th>
                                <th>Female Biodata Id</th>
                                <th>view</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bio.map(single => <tr key={single._id} className="bg-base-200">

                                    <td>{single.review}</td>
                                    <td></td>
                                    <td>{/* Open the modal using document.getElementById('ID').showModal() method */}
                                        <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>View</button>
                                        <dialog id="my_modal_1" className="modal">
                                            <div className="modal-box">
                                                <h3 className="font-bold text-lg"><img src={single.couple_pic} alt="" /></h3>
                                                <p className="py-4">{single.success_story}</p>
                                                <div className="modal-action">
                                                    <form method="dialog">
                                                        {/* if there is a button in form, it will close the modal */}
                                                        <button className="btn">Close</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </dialog></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default SuccessStory;