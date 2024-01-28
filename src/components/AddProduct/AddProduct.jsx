

import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Rating from 'react-rating';
const AddProduct = () => {

    const [brands, setBrands] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState('');
    const [rating, setRating] = useState(0);
    

    useEffect(() => {
        // Fetch the brand data from your endpoint
        fetch('https://cosmetics-server-site-by-faria-15ni10ce5.vercel.app/brands')
            .then((response) => response.json())
            .then((data) => setBrands(data))
            .catch((error) => console.error('Error fetching brands:', error));
    }, []); // Empty dependency array ensures the effect runs once after initial render

    const handleBrandChange = (event) => {
        setSelectedBrand(event.target.value);
    };


    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const type = form.type.value;
        const brandName = form.brandName.value;
        const price = form.price.value;
        
        const Description = form.Description.value;
        const photo = form.photo.value;
       
        const newProduct = {photo,name, brandName, type, price, Description,rating };
        console.log(newProduct);

        fetch('https://cosmetics-server-site-by-faria-15ni10ce5.vercel.app/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Added User Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }

            })
    }
    return (
        <div className="bg-[#F4F3F0] p-24">
            <h1 className="text-3xl font-extrabold">Add a product</h1>
            <form onSubmit={handleSubmit}>
            <label className="form-control ">
                            <div className="label">
                                <span className="label-text">Photo</span>

                            </div>
                            <input type="photo" name="photo" placeholder="Enter Photo URL" className="input input-bordered w-full " />

                        </label>
                {/* form name and Type row */}
                <div className="md:flex">
                    <div className="md:w-1/2 mr-2">
                        <label className="form-control ">
                            <div className="label">
                                <span className="label-text">Name</span>

                            </div>
                            <input type="text" name="name" placeholder="Enter Product Name" className="input input-bordered w-full " />

                        </label>
                    </div>

                    <div className="md:w-1/2">
                        <label className="form-control ">
                            <div className="label">
                                <span className="label-text">Brand Name</span>

                            </div>
                            <select
                                name="brandName"
                                className="select select-bordered w-full"
                                onChange={handleBrandChange}
                                value={selectedBrand}
                            >
                                <option value="" disabled>
                                    Select a Brand
                                </option>
                                {brands.map((brand) => (
                                    <option key={brand.name} value={brand._id}>
                                        {brand.name}
                                    </option>
                                ))}
                            </select>

                        </label>
                    </div>
                </div>
                {/* form brand name and price row */}
                <div className="md:flex">
                   

<div className="md:w-1/2 ml-4 ">
                        <label className="form-control ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Type</span>
                                </label>
                                <select name="type" className="select select-bordered w-full">
                                    <option value="makeup">Makeup</option>
                                    <option value="skincare">Skincare</option>
                                    <option value="fragrance">Fragrance</option>
                                    <option value="fashion">Fashion</option>
                                </select>
                            </div>

                        </label>
                    </div>
                    <div className="md:w-1/2 ml-4">
                        <label className="form-control ">
                            <div className="label">
                                <span className="label-text">Price($)</span>

                            </div>
                            <input type="number" name="price" placeholder="Enter Price" className="input input-bordered w-full " />

                        </label>
                    </div>
                </div>
                {/* form delivery and Details row */}
                <div className="md:flex">

                    <div className="md:w-1/2 ml-4 ">
                        <label className="form-control ">
                            <div className="label">
                                <span className="label-text">Short Description</span>

                            </div>
                            <input type="text" name="Description" placeholder="Please Comment here" className="input input-bordered w-full " />

                        </label>
                    </div>

                    {/* rating */}
                    <div className="md:w-1/2 ml-4">
          <label className="form-control">
            <div className="label">
              <span className="label-text">Rating</span>
            </div>
            <Rating
          
              initialRating={rating}
              emptySymbol={<span className="text-gray-300 h-32 w-32">&#9734;</span>}
              fullSymbol={<span className="text-yellow-500 h-32 w-32">&#9733;</span>}
              onChange={(value) => setRating(value)}
            />
            
          </label>
        </div>
                {/* form category and Details row */}
                
                   
                </div>


                <input type="submit" value="Add Product" className="btn btn-active btn-neutral md:w-full mt-8" />
            </form>
        </div>
    );
};

export default AddProduct;