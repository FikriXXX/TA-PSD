import { MdSupportAgent } from "react-icons/md";
import { RiRefund2Fill } from "react-icons/ri";
import { TbDiscount, TbTruckDelivery } from "react-icons/tb";
import FeatureCard from "./FeatureCard";

const data = [
    {
        icon: <TbTruckDelivery className="text-4xl" />,
        title:"Free Delivery",
        desc:"Orders from all item",
    },
    {
        icon: <RiRefund2Fill className="text-4xl" />,
        title:"Return & Refund",
        desc:"30 Days money back guarantee",
    },
    {
        icon: <TbDiscount className="text-4xl" />,
        title:"Member Discount",
        desc: "On Order Over $99.00",
    },
    {
        icon: <MdSupportAgent className="text-4xl" />,
        title: "24/7 Customer Support",
        desc: "Call us anytime for help",
    },
];

const Feature = () => {
    return (
        <div className="conteiner grid gap-1 sm:grid-cols-2 lg:grid-cols-4 mt-8">
            {data.map((item) => (
                <FeatureCard 
                key={item.title}
                icon={item.icon}
                title={item.title}
                desc={item.desc}
                />
            ))}
        </div>
    )
}

export default Feature