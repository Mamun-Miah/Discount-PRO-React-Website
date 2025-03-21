import { useEffect, useState } from "react";
import Card from "./Card";

const Cards = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("data.json");
                const result = await response.json();
                setData(result);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="grid lg:grid-cols-3 my-5 w-11/12 m-auto gap-3">
            {data.map((datas) => (
                <Card
                    key={datas._id}
                    name={datas.name}
                    logo={datas.brand_logo}
                    coupon={datas.coupons}
                    category={datas.category}
                    sale={datas.isSaleOn}
                />
            ))}
        </div>
    );
};

export default Cards;