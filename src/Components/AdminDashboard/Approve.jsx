import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import {  Table } from "keep-react";
import { Button } from "keep-react";

const Approve = () => {

    axios.get('http://localhost:5000/premium')
        .then(res => console.log(res.data))

    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['premium'],
        queryFn: async () => {
            const res = await axiosSecure.get('/premium')
            return res.data
        }
    })

    const handlePremeium = user => {
        axiosSecure.patch(`/premium/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch
                    Swal.fire({
                        title: "Good job!",
                        text: "You clicked the button!",
                        icon: "success"
                    });
                }
            })
    }

    return (
        <div>
            <Table>
                <Table.Head>
                    <Table.HeadCell className="min-w-[290px]">
                        <p className="text-body-6 font-medium text-metal-400">User Name</p>
                    </Table.HeadCell>
                    <Table.HeadCell className="min-w-[240px]">
                        Email Address
                    </Table.HeadCell>
                    <Table.HeadCell className="min-w-[215px]">Make Premeium</Table.HeadCell>
                </Table.Head>
                {
                    users.map(user => <Table.Body key={user._id} className="divide-y divide-gray-25">
                        <Table.Row className="bg-white">
                            <Table.Cell>
                                <div>
                                    {
                                        user.name
                                    }
                                </div>
                            </Table.Cell>
                            <Table.Cell>{user.email}</Table.Cell>
                            <Table.Cell>
                                <div>
                                    {user.type === 'premeium' ? 'Premeium' : <Button onClick={() => handlePremeium(user)} size="md" className="bg-yellow-400" type="default">Make Premeium</Button>}
                                </div>
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>)
                }
            </Table>

        </div>
    );
};

export default Approve;