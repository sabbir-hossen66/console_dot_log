import Testimonials from "../../../Testimonials/Testimonials";
import Banner from "../Banner/Banner";
import Catagory from "../Catagory/Catagory";
import PopularMenu from "../PopularMenu/PopularMenu";
import Featured from "./Featured/Featured";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Catagory></Catagory>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;