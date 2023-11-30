import { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";


const Profile = () => {


    const [data, setData] = useState([])

    const strAscending = [...data].sort((a, b) =>
        a.age > b.age ? -1 : 1,
    );

    useEffect(() => {
        fetch('https://match-mingle-server.vercel.app/profile')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])


    return (
        <div>
            <div>
                <div className="lg:ml-60 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
                    {
                        strAscending.map(profile => <ProfileCard profile={profile} key={profile._id}></ProfileCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Profile;