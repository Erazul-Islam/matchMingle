import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Button, Table } from "keep-react";

const ApproveContact = () => {

    axios.get('http://localhost:5000/contact')
        .then(res => console.log(res.data))

    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['contact'],
        queryFn: async () => {
            const res = await axiosSecure.get('/contact')
            return res.data
        }
    })

    const handlePremeium = user => {
        axiosSecure.patch(`/contact/${user._id}`)
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
            <Table className="mt-11">
                <Table.Head>
                    <Table.HeadCell className="min-w-[290px]">
                        <p className="text-body-6 font-medium text-metal-400">User Name</p>
                    </Table.HeadCell>
                    <Table.HeadCell className="min-w-[240px]">
                        Email Address
                    </Table.HeadCell>
                    <Table.HeadCell className="min-w-[215px]">Approval</Table.HeadCell>
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
                                    {user.type === 'contact' ? 'Approved' : <Button onClick={() => handlePremeium(user)} size="md" className="bg-yellow-400" type="default">Approve</Button>}
                                </div>
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>)
                }
            </Table>
        </div>
    );
};

export default ApproveContact;