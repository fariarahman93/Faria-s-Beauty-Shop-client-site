import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";


const CardProduct = ({cardProduct,setCardProducts}) => {
    const { user } = useContext(AuthContext);
    const [brand,setBrand]= useState({});
    const{ photo, name, type, price, Description, brandName, rating, _id } = cardProduct;
 
    useEffect(() => {
        fetch(`https://cosmetics-server-site-by-faria-15ni10ce5.vercel.app/brands/${brandName}`)
            .then(res => res.json())
            .then(data => {
                setBrand(data);
            })
            .catch(error => console.log(error))
    }, [cardProduct])

    const handleDelete = ()=>{
    
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          // Make a DELETE request to the server
          fetch(`https://cosmetics-server-site-by-faria-15ni10ce5.vercel.app/users/${user.uid}/products/${_id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              // Assuming your server returns a success message upon successful deletion
              if (data.deleted.deletedCount) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });
                setCardProducts(data.data)
              } else {
                Swal.fire({
                  title: "Error",
                  text: "Failed to delete the item.",
                  icon: "error",
                });
              }
            })
            .catch((error) => {
              console.error("Error deleting item:", error);
              Swal.fire({
                title: "Error",
                text: "Failed to delete the item.",
                icon: "error",
              });
            });
        }
      });
    };
  
     
 
    return (
        <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure><img src={photo} alt="image" className="w-56 h-56" /></figure>
        <div className="card-body">
          <h2 className="card-title text-red-500"><span className=" text-red-700 font-bold">Name:</span>{name}</h2>
          <h2 className="card-title text-red-500"><span className=" text-red-700 font-bold">Brand Name:</span>{brand.name}</h2>
          <h2 className="card-title  text-red-500"><span className=" text-red-700 font-bold">Type:</span> {type}</h2>
          <h2 className="card-title  text-red-500"><span className=" text-red-700 font-bold">Price:</span> ${price}</h2>
          <h2 className="card-title  text-red-500"><span className=" text-red-700 font-bold">Description:</span>{Description}</h2>
          <h2 className="card-title  text-red-500"><span className=" text-red-700 font-bold">Rating:</span>{rating}</h2>

          <div className="card-actions " >
            
            <button className="btn btn-error text-white" onClick={()=>handleDelete(_id)}>Delete</button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default CardProduct;