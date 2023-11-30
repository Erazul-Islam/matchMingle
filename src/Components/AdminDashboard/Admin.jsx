import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Pie, PieChart } from "recharts";




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

    const data01 = [
        {
            "name": "Group A",
            "value": filterByFemale.length
        },
        {
            "name": "Group B",
            "value": bio.length
        },
        {
            "name": "Group A",
            "value": filterByMale.length
        },
        {
            "name": "Group A",
            "value": filterByPremeium.length
        }
    ];

    const data02 = [
        {
            "name": "Group A",
            "value": filterByFemale.length
        },
        {
            "name": "Group B",
            "value": bio.length
        },
        {
            "name": "Group A",
            "value": filterByMale.length
        },
        {
            "name": "Group A",
            "value": filterByPremeium.length
        }
    ];



    return (
        <div>
            <div className="text-3xl mt-10 text-yellow-400">
                <p className="text-green-500">The Total BioData : {bio.length}</p>
                <p className="text-red-400">The Total Male Data : {filterByMale.length}</p>
                <p className="text-blue-700">The total Female Data : {filterByFemale.length}</p>
                <p className="text-cyan-600">The total Premeium Data : {filterByPremeium.length}</p>
            </div>
            <div className="mt-20">
                <PieChart width={830} height={350}>
                    <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#FF0000" />
                    <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#FFBF00" label />
                </PieChart>
            </div>
        </div>
    );
};

export default Admin;