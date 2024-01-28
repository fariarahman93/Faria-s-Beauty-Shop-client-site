import { useLoaderData } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";


const SingleProduct = () => {
    const [brand,setBrand]= useState({});
    const singleProduct = useLoaderData();
    const {user} = useContext(AuthContext);
    console.log(singleProduct);

    const  {_id, photo,name, type, price, Description2 ,brandName, rating }= singleProduct;
    

    useEffect(() => {
        fetch(`https://cosmetics-server-site-by-faria-15ni10ce5.vercel.app/brands/${brandName}`)
            .then(res => res.json())
            .then(data => {
                setBrand(data);
            })
            .catch(error => console.log(error))
    }, [singleProduct])
     
    
    const handleAddCart = (productId) =>{
        const cart = {uId: user.uid, productId: productId}
        fetch('https://cosmetics-server-site-by-faria-15ni10ce5.vercel.app/cart', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(cart)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Added Product Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }

        })
    } 



    return (
        <div className="card w-full bg-base-100 shadow-xl">
        <figure><img src={photo} alt="Shoes" className="h-96 w-2/3" /></figure>
        <div className="card-body bg-red-200">
          <h2 className="card-title text-red-500"><span className=" text-red-700 font-bold">Name:</span>{name}</h2>
          <h2 className="card-title text-red-500"><span className=" text-red-700 font-bold">Brand Name:</span>{brand.name}</h2>
          <h2 className="card-title  text-red-500"><span className=" text-red-700 font-bold">Type:</span> {type}</h2>
          <h2 className="card-title  text-red-500"><span className=" text-red-700 font-bold">Price:</span> ${price}</h2>
          <h2 className="card-title  text-red-500"><span className=" text-red-700 font-bold">Description:</span>{Description2}</h2>
          <h2 className="card-title  text-red-500"><span className=" text-red-700 font-bold">Rating:</span>{rating}</h2>
  
          <div className="card-actions justify-around">
            <button onClick={()=>handleAddCart(_id)} className="btn btn-error text-white">Add to Cart</button>
          </div>
        </div>
      </div>
    );
};

export default SingleProduct;

// };

// export default SingleProduct;