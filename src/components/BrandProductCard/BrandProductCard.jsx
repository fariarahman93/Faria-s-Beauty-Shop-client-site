import { useLoaderData } from 'react-router-dom';
import Product from '../Products/Product';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const BrandProductCard = () => {
  const brandProducts = useLoaderData();
  const productImages = brandProducts.map((product) => product.photo);

  return (
    <div >
    
    <AwesomeSlider>
        {productImages.map((image, index) => (
          <div key={index} data-src={image} />
        ))}
      </AwesomeSlider>
    

      <div className="sm:block" >
      {brandProducts.slice(0, 4).map((product) => (
        <Product key={product._id} product={product} />
      ))}
      </div>
    </div>
  );
};

export default BrandProductCard;
