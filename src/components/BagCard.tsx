import React from "react";
import { LuShoppingCart } from "react-icons/lu";

interface BagCardProps {
  data: {
    img: string;
    price: string;
    desc: string;
  };
}

const BagCard: React.FC<BagCardProps> = ({ data }) => {
  return (
    <div className="shadow-md rounded-md p-4 hover:translate-y-2 transition-all cursor-pointer w-[250px] xl:w-[280px]  relative">
      <div className="bg-[#121212] absolute left-0 top-0 inline-block p-1 xl:p-2 text-white  ">
        <LuShoppingCart size={20} />
      </div>
      <img src={data?.img} alt="" />
      <div className="text-center">
        <p className="font-bold text-[18px] mb-2">{data?.desc}</p>
        <p>{data?.price}</p>
      </div>
    </div>
  );
};

export default BagCard;
