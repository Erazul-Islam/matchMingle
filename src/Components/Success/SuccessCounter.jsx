import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const SuccessCounter = () => {

    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();

    const { data: bio = [] } = useQuery({
        queryKey: ['all'],
        queryFn: async () => {
            const res = await axiosSecure.get('/all')
            return res.data
        }
    })
    const { data: successful = [] } = useQuery({
        queryKey: ['successful'],
        queryFn: async () => {
            const res = await axiosPublic.get('/successful')
            return res.data
        }
    })

    const filterByMale = bio.filter(single => single.type === 'male')
    const filterByFemale = bio.filter(single => single.type === 'female')

    return (
        <div>
            <div className="overflow-x-auto lg:ml-[800px] lg:w-[600px]">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Total BioData</th>
                            <th>Total Male Data</th>
                            <th>Total Female Data</th>
                            <th>Successfull Marriage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            
                            <td>{bio.length}</td>
                            <td>{filterByMale.length}</td>
                            <td>{filterByFemale.length}</td>
                            <td>{successful.length}</td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SuccessCounter;