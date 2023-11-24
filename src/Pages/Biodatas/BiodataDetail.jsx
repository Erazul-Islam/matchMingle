import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import BioLayout from "./BioLayout";

const BiodataDetail = () => {

    const {_id} = useParams()

    const [data,setData] = useState({})

    const datas = useLoaderData()



    useEffect(() => {
        const findData = datas.find(data => data._id == _id)
        setData(findData)
    },[_id,datas])
   

    return (
        <div>
            <BioLayout data={data} ></BioLayout>
        </div>
    );
};

export default BiodataDetail;