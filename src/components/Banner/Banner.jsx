const Banner = () => {
    const backgroundImageUrl = 'https://i.ibb.co/5hDgqqT/laura-chouette-Dc-WY-e3-xus-unsplash.jpg';
  
    return (
      <div
        className="hero min-h-screen bg-cover bg-center shadow-2xl relative"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
        }}
      >
        <div className="absolute inset-0 bg-opacity-75 bg-black"></div>
        <div className="hero-content text-center text-white relative z-10">
          <div className="max-w-md mx-auto">
            <h1 className="text-5xl font-bold">Hei beauties</h1>
            <p className="py-6">Elegance is the only beauty that never fades.</p>
            <button className="btn bg-orange-500">Get Started</button>
          </div>
        </div>
      </div>
    );
  };
  
export default Banner;