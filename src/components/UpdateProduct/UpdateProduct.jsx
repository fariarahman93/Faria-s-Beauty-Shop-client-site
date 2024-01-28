

import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Rating from 'react-rating';
import { useLoaderData } from "react-router-dom";
const UpdateProduct = () => {
    const product = useLoaderData();
    const { _id, photo, name, brandName, type, price, Description, rating } = product

    const [brands, setBrands] = useState([]);
    const [pbrandName, setPbrandName] = useState('');
    const [productRating, setProductRating] = useState(0);

    useEffect(() => {

        fetch('https://cosmetics-server-site-by-faria-15ni10ce5.vercel.app/brands')
            .then((response) => response.json())
            .then((data) => setBrands(data))
            .catch((error) => console.error('Error fetching brands:', error));
    }, []);




    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const type = form.type.value;
        const brandName = pbrandName;
        const price = form.price.value;
        const rating = productRating
        const Description = form.Description.value;
        const photo = form.photo.value;


        const updatedProduct = { photo, name, brandName, type, price, Description, rating };
        console.log(updatedProduct);

        fetch(`https://cosmetics-server-site-by-faria-15ni10ce5.vercel.app/product/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }

            })
    }
    return (
        <div className="bg-[#F4F3F0] p-24">
            <h1 className="text-3xl font-extrabold">Update product: {name}</h1>
            <form onSubmit={handleSubmit}>
                <label className="form-control ">
                    <div className="label">
                        <span className="label-text">Photo</span>

                    </div>
                    <input type="photo" name="photo" defaultValue={photo} placeholder="Enter Photo URL" className="input input-bordered w-full " />

                </label>
                {/* form name and Type row */}
                <div className="md:flex">
                    <div className="md:w-1/2 mr-2">
                        <label className="form-control ">
                            <div className="label">
                                <span className="label-text">Name</span>

                            </div>
                            <input type="text" name="name" defaultValue={name} placeholder="Enter Product Name" className="input input-bordered w-full " />

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
                                defaultValue={brandName}
                                onChange={(e) => setPbrandName(e.target.value)}
                            >
                                <option value="" disabled>
                                    Select a Brand
                                </option>
                                {brands.map((brand) => (
                                    <option key={brand._id} value={brand._id}>
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
                                <select name="type" defaultValue={type} className="select select-bordered w-full">
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
                            <input type="number" name="price" defaultValue={price} placeholder="Enter Price" className="input input-bordered w-full " />

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
                            <input type="text" name="Description" defaultValue={Description} placeholder="Please Comment here" className="input input-bordered w-full " />

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
                                onChange={(value) => setProductRating(value)}
                            />

                        </label>
                    </div>
                    {/* form category and Details row */}


                </div>


                <input type="submit" value="Update Product" className="btn btn-active btn-neutral md:w-full mt-8" />
            </form>
        </div>
    );
};

export default UpdateProduct;