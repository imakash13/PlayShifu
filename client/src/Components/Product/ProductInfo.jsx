import React, { useEffect, useState } from "react";
import axios from "axios";
import { Star, StarHalf ,Share  } from "lucide-react";

const ProductInfo = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get("https://playshifu-fzs8.onrender.com/api/products")
      .then((res) => {
        setProduct(res.data[0]);
      })
      .catch((err) => console.error(err));
  }, []);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2">{product.name} <span><Share /></span></h1> 
      <h3 className=" text-blue-500 pb-1">{product.subtitle}</h3>
      <p>
        {" "}
        <span className="flex mb-2">
          <Star />
          <Star />
          <Star />
          <Star />
          <StarHalf />
        </span>
      </p>
      <div className="flex">
        <button className="border border-purple-500 text-purple-500 p-1 px-2 text-[10px] m-2 mr-2 hover:bg-purple-50">
          High Educational Value
        </button>
        <button className="bg-red-500 text-white p-1 px-2 text-[10px] m-2 hover:bg-red-600">
          Flat 25% off
        </button>
        <button className="border border-red-500 text-red-500 text-[10px] p-1 px-2 m-2 ">
          Super Saver Deals
        </button>
      </div>
      <p className="text-2xl text-gray-700 font-bold mb-4 ">
        ₹{product.price} <del className="text-gray-300">₹4999</del>
      </p>
      <div className="mr-40 text-sm">
        <ul className="flex flex-col  text-[#494949] gap-3 text-[14px] sm:text-[16px] xl:text-[18px]  list-disc sm:max-w-[80%] mb-4 sm:mb-8">
          {product.description.map((desc,index)=>(
            <li key={index} className="text-lg">{desc}</li>
          ))}
        </ul>
      </div>

      <button className="bg-[#5f125c] text-white text-[10px] font-semibold p-2 rounded-full w-90">Add to Cart </button>
    </div>
  )
};

export default ProductInfo;