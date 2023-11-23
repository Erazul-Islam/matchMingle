/* eslint-disable react/prop-types */
import { Avatar, Card } from "keep-react";
import { IoEyeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const ProfileCard = ({ profile }) => {


    const { biodata_id, type, profile_image, division, occupation, age } = profile || {}


    return (
        <div>
            <Card
                imgSrc="https://i.ibb.co/5jVzFCC/download-10.jpg"
                imgSize="md"
                className="max-w-xs">
                <Card.Container className="absolute right-3.5 top-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-yellow-400">
                    <Link to={`/profile/${biodata_id}`}>
                        <IoEyeSharp />
                    </Link>
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
                    </Card.Container>
                </Card.Container>
            </Card>

        </div>
    );
};

export default ProfileCard;