import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Badge, Table } from "keep-react";
import { Button } from "keep-react";
import Swal from "sweetalert2";


const Manage = () => {

    const axiosSecure = useAxiosSecure();
    const { data: users = [],refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })

    const handleAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res => {
            console.log(res.data)
            if(res.data.modifiedCount > 0){
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
            {users.length}

            <Table>
                <Table.Head>
                    <Table.HeadCell className="min-w-[290px]">
                        <p className="text-body-6 font-medium text-metal-400">User Name</p>
                    </Table.HeadCell>
                    <Table.HeadCell>Make Admin</Table.HeadCell>
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
                            <Table.Cell>
                                <Badge colorType="light" color="success">
                                    <div>
                                        { user.role === 'admin' ? 'Admin' : <Button onClick={() => handleAdmin(user)} size="md" className="bg-green-400" type="default">Make Admin</Button>}
                                        </div>
                                </Badge>
                            </Table.Cell>
                            <Table.Cell>{user.email}</Table.Cell>
                            <Table.Cell>
                            <Button size="md" className="bg-yellow-400" type="default">Make Premeium</Button>
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>)
                }
            </Table>

        </div>
    );
};

export default Manage;