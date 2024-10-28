// import PropTypes from "prop-types";

import PriceCard from "../PriceCard/PriceCard";

const PriceOptions = () => {

    const priceOptions = [
        {
            "id": 101,
            "name": "Basic Plan",
            "price": 20,
            "features": ["Access to gym equipment", "Locker access", "1 fitness consultation per month"]
        },
        {
            "id": 102,
            "name": "Standard Plan",
            "price": 35,
            "features": ["24/7 gym access", "Group classes", "Free parking", "Locker access", "2 fitness consultations per month"]
        },
        {
            "id": 103,
            "name": "Premium Plan",
            "price": 50,
            "features": ["24/7 gym access", "Group classes", "Personal training (1 session per month)", "Sauna access", "Priority locker access", "Free parking"]
        },
        {
            "id": 104,
            "name": "VIP Plan",
            "price": 70,
            "features": ["24/7 gym access", "Unlimited group classes", "4 personal training sessions per month", "Access to all spa facilities", "Reserved parking", "Free guest pass monthly"]
        },
        {
            "id": 105,
            "name": "VIP Plan 1",
            "price": 70,
            "features": ["24/7 gym access", "Unlimited group classes", "4 personal training sessions per month", "Access to all spa facilities", "Reserved parking", "Free guest pass monthly"]
        },
        {
            "id": 106,
            "name": "VIP Plan 2",
            "price": 70,
            "features": ["24/7 gym access", "Unlimited group classes", "4 personal training sessions per month", "Access to all spa facilities", "Reserved parking", "Free guest pass monthly"]
        }
    ]

    return (
        <div>
            <h2 className="text-5xl font-bold font-sans mt-10">Best Price In Town</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                {priceOptions.map((option, i) => <PriceCard key={i} option={option} />)}
            </div>
        </div>
    );
};



export default PriceOptions;