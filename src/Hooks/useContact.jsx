import { useContext } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Providers/AuthProvider";


const useContact = () => {
    const { user } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const { data: isContact } = useQuery({
        queryKey: [user?.email, 'contact'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/contact/${user.email}`)
            console.log(res.data)
            return res.data?.contact
        }

    })
    return [isContact]
};

export default useContact;