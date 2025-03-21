import React, { useEffect, useState } from "react";

import ReactStars from "react-rating-stars-component";
import 'animate.css';
import { Link } from "react-router-dom";

const Brands = () => {
    const [brands, setBrands] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBrands = async () => {
            try {
                const response = await fetch("data.json");
                const result = await response.json();
                setBrands(result);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };

        fetchBrands();
    }, []);

    // Handle the search functionality
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    // Redirect to login if user is not logged in

    if (loading) {
        return <div>Loading...</div>;
    }

    // Filter brands based on the search term
    const filteredBrands = brands.filter(brand =>
        brand.brand_name?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="brands-page p-5">
            <h1 className="text-5xl font-bold mb-4 text-center">Brands</h1>

            <input
                type="text"
                placeholder="Search Brands..."
                className="search-bar p-2 border rounded mb-5"
                value={searchTerm}
                onChange={handleSearch}
            />

            <div className="card-section grid grid-cols-1 gap-5">
                {brands.map((brand) => (
                    <div key={brand._id} className="lg:flex card-compact bg-base-100 shadow-xl p-5">
                        
                        <figure>
                            <img src={brand.brand_logo} alt={brand.name} className="w-[240px] h-auto object-cover" />
                            <div className="flex items-center">
                                <ReactStars
                                    count={5}
                                    value={brand.rating}
                                    edit={false} // Rating is read-only
                                    size={24}
                                    activeColor="#ffd700" // Gold color for active stars
                                />
                                <span className="ml-2 text-lg">{brand.rating}</span>
                            </div>
                            
                        </figure>
                        
                        <div className="card-body">

                        <h2 className="card-title text-xl font-semibold">{brand.name}</h2>
                            <p className="text-lg">{brand.description}</p>

                            {brand.isSaleOn && (
                                <div className="sale-bounce animate__animated animate__bounce text-lg text-red-500 font-bold">
                                    Sale is On!
                                </div>
                            )}


                            <Link to={`/brand/${brand._id}`}>


                                <button
                                    onClick={() => handleViewCoupons(true, brand._id)} // Assuming user is logged in
                                    className="btn btn-primary mt-4"
                                >
                                    View Coupons
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Brands;



