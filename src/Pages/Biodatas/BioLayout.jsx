import { Avatar, Card } from "keep-react";
import { useContext } from "react";
import { MdBookmarkAdded } from "react-icons/md";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";
import axios from "axios";
import usePremeium from "../../Hooks/usePremeium";

// eslint-disable-next-line react/prop-types
const BioLayout = ({ data }) => {

    console.log(data)

    const { biodata_id, type, profile_image, division, occupation, age,email,phone } = data || {}

    const { user } = useContext(AuthContext)

    const userEmail = user.email;

    const info = useLoaderData();
    console.log(info)


    const [isPremeium] = usePremeium();

    const handleAdd = () => {
        const add = { biodata_id, type, profile_image, division, occupation, age, userEmail }
        console.log(add)

        axios.post('http://localhost:5000/fav', add)
            .then(res => {
                console.log(res.data)
            })
    }


    return (
        <div className="lg:ml-36 mt-10">
            <p className="text-4xl text-blue-600 mb-6 ml-10">BioData Detail</p>
            <Card
                imgSrc="https://i.ibb.co/5jVzFCC/download-10.jpg"
                imgSize="md"
                className="lg:w-[500px]">
                <Card.Container className="absolute text-4xl right-3.5 top-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full ">
                    <form onSubmit={handleAdd}>
                        <button><MdBookmarkAdded /></button>
                    </form>
                </Card.Container>
                <Card.Container className="flex flex-col items-center justify-center">
                    <Card.Container className="absolute top-32  rounded-full ring-4 ring-white ring-offset-0">
                        <Avatar size="2xl" shape="circle" img={profile_image} />
                    </Card.Container>
                    <Card.Container className="mb-3 mt-10 text-center">
                        <Card.Title className="text-body-5 font-semibold text-metal-800 md:text-body-4">{occupation}</Card.Title>
                        <Card.Title className="!text-body-6 font-normal text-metal-400 md:text-body-5">{type}</Card.Title>
                    </Card.Container>
                    <Card.Container className="flex w-full justify-between border-t border-t-metal-50 px-5 py-3">
                        <Card.Container className="text-center">
                            <Card.Title className="text-body-5 !font-normal text-metal-400 md:text-body-5 md:!font-medium">
                                Age
                            </Card.Title>
                            <Card.Title className="!text-body-1 !font-semibold text-metal-800">{age}</Card.Title>
                        </Card.Container>
                        <Card.Container className="text-center">
                            <Card.Title className="text-body-5 !font-normal text-metal-400 md:text-body-5 md:!font-medium">
                                Division
                            </Card.Title>
                            <Card.Title className="!text-body-1 !font-semibold text-metal-800">{division}</Card.Title>
                        </Card.Container>
                        <Card.Container className="text-center">
                            <Card.Title className="text-body-5 !font-normal text-metal-400 md:text-body-5 md:!font-medium">
                                BioData Id
                            </Card.Title>
                            <Card.Title className="!text-body-1 !font-semibold text-metal-800">{biodata_id}</Card.Title>

                        </Card.Container>
                        <Card.Title className="!text-body-1 !font-semibold text-yellow-700">
                            {
                                isPremeium ? <div className="text-xl">email:{email} <br /> phone: {phone}</div> : <Link to={'/checkout'}><button>Req</button></Link>
                            }
                        </Card.Title>
                    </Card.Container>
                </Card.Container>
            </Card>
        </div>
    );
};

export default BioLayout;