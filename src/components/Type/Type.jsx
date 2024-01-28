import skincare from '../../assets/images/skincare.jpg'
import makeup from '../../assets/images/makeup.jpg'
import fragrance from '../../assets/images/fragrance.jpg'
import fashion from '../../assets/images/fashion.jpg'

const Type = () => {
    
    return (
        <div >
            
<h1 className="text-5xl font-bold">Ty<span className=' font-semibold text-red-500 '>p</span>es</h1>
<div className='flex mt-5'>
<div className="hero  bg-base-200 mb-3">
<div className="hero-content flex-col lg:flex-row sm:ml-4">
  <img src={skincare} className=" h-80 w-96 rounded-lg shadow-2xl" />
  <div>
    <h1 className="text-5xl font-bold">Skin<span className=' font-semibold text-red-500'>c</span>are</h1>
    <p className="py-6">Nourish your skin, embrace your glow – a journey to radiant confidence.</p>
    
  </div>
</div>
</div>

<div className="hero  bg-base-200 mb-3">
<div className="hero-content flex-col lg:flex-row sm:mr-4">
  <img src={makeup} className="h-80 w-96 rounded-lg shadow-2xl " />
  <div>
    <h1 className="text-5xl font-bold">M<span className=' font-semibold text-red-500'>a</span>keup</h1>
    <p className="py-6">Express yourself with the art of makeup – where every stroke tells your unique story.</p>
    
  </div>
</div>
</div>

</div>
<div className='flex'>
<div className="hero  bg-base-200 mb-3">
<div className="hero-content flex-col lg:flex-row sm:ml-4">
  <img src={fragrance} className=" rounded-lg shadow-2xl h-80 w-96" />
  <div>
    <h1 className="text-5xl font-bold">F<span className=' font-semibold text-red-500'>r</span>agrance</h1>
    <p className="py-6">Indulge in the essence of allure – where fragrance becomes the silent poetry you wear.</p>
   
  </div>
</div>
</div>

<div className="hero  bg-base-200 mb-3">
<div className="hero-content flex-col lg:flex-row sm:mr-4">
  <img src={fashion} className=" rounded-lg shadow-2xl h-80 w-96" />
  <div>
    <h1 className="text-5xl font-bold">Fashi<span className=' font-semibold text-red-500'>0</span>n</h1>
    <p className="py-6">Elevate your style, embrace your individuality – fashion is the canvas of self-expression.</p>
   
  </div>
</div>
</div>
</div>

   
        </div>
    );
};

export default Type;