import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import ReactStars from "react-rating-stars-component";

const CouponPage = () => {
    const { id } = useParams(); // Get brand id from URL
    const [brand, setBrand] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch brand data from the public data.json
        const fetchBrand = async () => {
            try {
                const response = await fetch("/data.json"); // Assuming data.json is in the public folder
                const result = await response.json();
                const selectedBrand = result.find(b => b._id === id);
                setBrand(selectedBrand);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching brand data:", error);
                setLoading(false);
            }
        };

        fetchBrand();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!brand) {
        return <div>Brand not found</div>;
    }

    // Toast notification for successful coupon copy
    const handleCopySuccess = () => {
        toast.success("Coupon code copied!");
    };

    return (
        <div className="coupon-page p-5">
            <ToastContainer />

            {/* Brand Details */}
            <div className="brand-details mb-5">
                <div className="flex items-center gap-5">
                    <img
                        src={brand.brand_logo}
                        alt={brand.name}
                        className="w-32 h-32 object-cover"
                    />
                    <div>
                        <h1 className="text-3xl font-bold">{brand.name}</h1>
                        <div className="flex items-center">
                            <ReactStars
                                count={5}
                                value={brand.rating}
                                edit={false}
                                size={24}
                                activeColor="#ffd700"
                            />
                            <span className="ml-2 text-lg">{brand.rating}</span>
                        </div>
                        <p className="text-lg">{brand.description}</p>
                    </div>
                </div>
            </div>

            {/* Coupons Grid */}
            <div className="coupons-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {brand.coupons.map(coupon => (
                    <div key={coupon.coupon_code} className="card bg-base-100 shadow-xl p-4">
                        <h2 className="card-title text-xl font-bold">{coupon.coupon_code}</h2>
                        <p className="text-lg">{coupon.description}</p>
                        <p className="text-sm text-gray-600">Expiry: {coupon.expiry_date}</p>
                        <p className="text-sm text-gray-600">{coupon.condition}</p>

                        <div className="card-actions flex justify-between mt-4">
                            {/* Copy Code Button */}
                            <CopyToClipboard
                                text={coupon.coupon_code}
                                onCopy={handleCopySuccess}
                            >
                                <button className="btn btn-secondary">Copy Code</button>
                            </CopyToClipboard>

                            {/* Use Now Button */}
                            <button
                                className="btn btn-primary"
                                onClick={() => window.open(brand.shop_Link, "_blank")}
                            >
                                Use Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CouponPage;
