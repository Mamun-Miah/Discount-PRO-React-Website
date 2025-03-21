
import { Link } from "react-router-dom";
const Card = ({ name, logo, coupon, category, sale }) => {

    if (!sale) {
        return null;
    }
    return (


        <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
                <img
                    src={logo}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Name: {name}</h2>
                <p className="text-xl">Category: {category} </p>
                <p className="text-xl">Total Coupons: {coupon?.length}</p>
                <div className="card-actions justify-end">
                    <Link to={`/brand/1`}>
                        <button className="btn btn-primary mt-4">
                            View Coupons
                        </button>
                    </Link>
                </div>
            </div>
        </div>


    );
};

export default Card;