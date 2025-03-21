import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const ImageMarquee = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await fetch("data.json");
        const result = await response.json();
        setBrands(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchBrands();
  }, []);

  return (
    <div className="marquee-container my-5">
      <h1 className="text-center text-4xl py-5 border-b">Top Brands</h1>
      <Marquee pauseOnHover={true} speed={50}>
        {brands.map((brand) => (
          <Link
            key={brand._id}
            to={`/brand/${brand._id}`} // Navigate to the specific brand page
          >
            <img
              src={brand.brand_logo || "https://via.placeholder.com/100"}
              alt={brand.name || "Brand Logo"}
              className="mx-5 w-24 h-24 object-contain border p-2 rounded-lg hover:scale-110 transition-transform duration-200"
            />
          </Link>
        ))}
      </Marquee>
    </div>
  );
};

export default ImageMarquee;
