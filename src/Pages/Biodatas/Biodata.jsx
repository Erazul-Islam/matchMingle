import { useEffect, useState } from "react";
import BiodataCard from "./BiodataCard";

const Biodata = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/all')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])


    return (
        <div>
            <div className="lg:ml-60 mt-20 mb-10 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
                {
                    data.map(profile => <BiodataCard profile={profile} key={profile._id}></BiodataCard>)
                }
            </div>
        </div>
    );
};

export default Biodata;