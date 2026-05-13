

import BannarImg from "../../../assets/Bannar.jpg";







const Bannar = () => {
    return (
       <div className="relative my-3">
  <img
    src={BannarImg}
    alt="banner"
    className="w-full h-[500px] md:h-[600px] rounded-xl object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 bg-black/40 rounded-xl">
    
    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">
      Share Food. <span className="text-yellow-300">Spread Smiles</span>
    </h1>

    <p className="mt-4 max-w-2xl text-sm md:text-lg text-gray-200">
      PlateShare helps you donate surplus food to people in need. Reduce
      food waste and build a caring community—one plate at a time.
    </p>

    {/* Search Box */}
    <label className="input mt-8 flex items-center gap-2 w-full max-w-md bg-white/90 backdrop-blur-md rounded-full px-4 py-2">
      <svg
        className="h-5 w-5 opacity-60"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2.5"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </g>
      </svg>

      <input
        type="search"
        placeholder="Search food..."
        className="w-full bg-transparent outline-none"
      />
    </label>
  </div>
</div>
    );
};

export default Bannar;