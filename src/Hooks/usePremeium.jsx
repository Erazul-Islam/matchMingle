import { useContext } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const usePremeium = () => {

    const {user} = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const {data: isPremeium} = useQuery({
        queryKey: [user?.email, 'premeium'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/users/admin/${user.email}`)
            console.log(res.data)
            return res.data?.premeium
        }
    })
    return [isPremeium]
};

export default usePremeium;