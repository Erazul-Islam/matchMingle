import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'https://match-mingle-server.vercel.app'
})

const useAxiosSecure = () => {
   return axiosSecure
};

export default useAxiosSecure;