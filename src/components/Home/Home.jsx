import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import BrandCard from "../BrandCard/BrandCard";
import Type from "../Type/Type";
import Stats from "../stats/stats";

const Home = () => {
    const brands = useLoaderData();
    console.log(brands);
    return (
        <div >
            <Banner></Banner>
            <Type></Type>
            <div >
                <h1 className="text-5xl font-bold">B<span className=' font-semibold text-red-500 '>r</span>ands</h1>
                <div className="grid sm:grid-cols-1 md:grid-cols-3 mt-6 gap-10 mb-6 ">
                    {
                        brands.map(brand => <BrandCard key={brand._id} brand={brand}></BrandCard>)
                    }
                </div>
            </div>
            <Stats></Stats>
        </div>
    );
};

export default Home;