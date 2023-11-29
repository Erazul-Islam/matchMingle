import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { PieChart } from "recharts";




const Admin = () => {

    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();

    const { data: bio = [] } = useQuery({
        queryKey: ['all'],
        queryFn: async () => {
            const res = await axiosSecure.get('/all')
            return res.data
        }
    })
    const { data: premeium = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosPublic.get('/users')
            return res.data
        }
    })

    const filterByMale = bio.filter(single => single.type === 'male')
    const filterByFemale = bio.filter(single => single.type === 'female')
    const filterByPremeium = premeium.filter(single => single.type === 'premeium')
    console.log(filterByPremeium)



    return (
        <div>
            <div className="text-3xl mt-10 text-yellow-400">
                <p>The Total BioData : {bio.length}</p>
                <p>The Total Male Data : {filterByMale.length}</p>
                <p>The total Female Data : {filterByFemale.length}</p>
                <p>The total Premeium Data : {filterByPremeium.length}</p>
            </div>
            <div>
                <PieChart
                    series={[
                        {
                            filterByFemale,
                            highlightScope: { faded: 'global', highlighted: 'item' },
                            faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                        },
                    ]}
                    height={200}
                />
            </div>
        </div>
    );
};

export default Admin;