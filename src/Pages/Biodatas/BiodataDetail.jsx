import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import BioLayout from "./BioLayout";

const BiodataDetail = () => {


    const {_id} = useParams()

    const [profile,setData] = useState({})

    const profiles = useLoaderData()

    useEffect(() => {
        const findData = profiles.find(profile => profile._id = _id)
        setData(findData)
    },[_id,profiles])

    return (
        <div>
            <BioLayout profile={profile} ></BioLayout>
        </div>
    );
};

export default BiodataDetail;