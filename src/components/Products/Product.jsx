import { Link, useNavigate } from "react-router-dom";

const Product = ({ product }) => {

  const { photo, name, type, price, Description, brandName, rating, _id } = product;
 // console.log(product);
  const navigate = useNavigate();

  const handleCardClick = () => {

    navigate(`/products/${_id}`);
  };

 
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl sm: block mt-4">
        <figure><img src={photo} alt="image" className="w-56 h-56" /></figure>
        <div className="card-body">
          <h2 className="card-title text-red-500"><span className=" text-red-700 font-bold">Name:</span>{name}</h2>

          <h2 className="card-title  text-red-500"><span className=" text-red-700 font-bold">Type:</span> {type}</h2>
          <h2 className="card-title  text-red-500"><span className=" text-red-700 font-bold">Price:</span> ${price}</h2>
          <h2 className="card-title  text-red-500"><span className=" text-red-700 font-bold">Description:</span>{Description}</h2>
          <h2 className="card-title  text-red-500"><span className=" text-red-700 font-bold">Rating:</span>{rating}</h2>

          <div className="card-actions" >
          <Link to={`/updateProduct/${_id}`}><button className="btn btn-error text-white">Update</button></Link>
            <button onClick={handleCardClick} className="btn btn-error text-white">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;