import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import featured from '../../../../assets/featured.jpg';
import './Featured.css'
const Featured = () => {
    return (
        <div class="featured-item bg-fixed text-white my-20">
            <div className="bg-slate-500">
                <SectionTitle
                    subheading="check it out" heading="Featured Item"
                ></SectionTitle>
            </div>

            <div className="md:flex py-8 bg-slate-500 bg-opacity-20 px-16">
                <div>
                    <img src={featured} alt="" />
                </div>
                <div className="text-center my-auto md:ml-10">
                    <p>Sep 19 2023</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos eligendi tenetur blanditiis maiores perspiciatis eveniet quo, ducimus eum ipsa porro!</p>
                    <div>
                        <button className="btn btn-outline font-bold uppercase mt-2 border-0 border-b-4">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;