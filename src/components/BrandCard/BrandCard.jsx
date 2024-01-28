
import { useNavigate } from 'react-router-dom';

const BrandCard = ({ brand }) => {
  const { _id, name, image } = brand;
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/brands/${_id}/products`);
  };

  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl cursor-pointer" onClick={handleCardClick}>
        <figure><img src={image} alt="images" /></figure>
        <div className="card-body text-center text-red-700 poppins-bold">
          <h2 className="card-title">{name}</h2>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;

