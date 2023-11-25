import Banner from "../../Components/Banner/Banner";
import CreateBio from "../../Components/CreateBio/CreateBio";
import Profile from "../../Components/Profile/Profile";
import Success from "../../Components/Success/Success";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Profile></Profile>
            <CreateBio></CreateBio>
            <Success></Success>
            <Footer></Footer>
        </div>
    );
};

export default Home;