import React from "react";
import FiveStar from "../../assets/images/Allicons/Five star.svg?react";
import ArrowLeft from "../../assets/images/Allicons/Vector-12.svg?react";
import ArrowRight from "../../assets/images/Allicons/Vector-13.svg?react";

import Four_HalfStar from "../../assets/images/Allicons/Four Half Star.svg?react";

import DuffleBag from "../../assets/images/CartItems/547953_9C2ST_8746_001_082_0000_Light-Gucci-Savoy-medium-duffle-bag 1.svg?react";
import Coat from "../../assets/images/CartItems/672462_ZAH9D_5626_002_100_0000_Light-The-North-Face-x-Gucci-coat 1.svg?react";
import CPUcooler from "../../assets/images/CartItems/gammaxx-l240-argb-1-500x500 1.svg?react";
import Bookself from "../../assets/images/CartItems/sam-moghadam-khamseh-L_7MQsHl_aU-unsplash 1.svg?react";
import ProductComp from "../shared/ProductComp";
import {products} from "../../product_data/productData";
import { Link } from "react-router-dom";

function OurProductSection() {
  const OurProd1 = products.slice(1, 5);
  //   const OurProd1 = [
  //   {
  //     prodName: "The north coat",
  //     prodPrice: "$260",
  //     prodReviews: "65",
  //     prodRating: <FiveStar />,
  //     prodImage: <Coat />,
  //   },
  //   {
  //     prodName: "Gucci duffle bag",
  //     prodPrice: "$960",
  //     prodReviews: "75",
  //     prodRating: <Four_HalfStar />,
  //     prodImage: <DuffleBag />,
  //   },
  //   {
  //     prodName: "RGB liquid CPU Cooler",
  //     prodPrice: "$160",
  //     prodReviews: "65",
  //     prodRating: <Four_HalfStar />,
  //     prodImage: <CPUcooler />,
  //   },
  //   {
  //     prodName: "Small BookSelf",
  //     prodPrice: "$360",
  //     prodReviews: "65",
  //     prodRating: <FiveStar />,
  //     prodImage: <Bookself />,
  //   },
  //   {
  //     prodName: "Small BookSelf",
  //     prodPrice: "$360",
  //     prodReviews: "65",
  //     prodRating: <FiveStar />,
  //     prodImage: <Bookself />,
  //   },
  //   {
  //     prodName: "Small BookSelf",
  //     prodPrice: "$360",
  //     prodReviews: "65",
  //     prodRating: <FiveStar />,
  //     prodImage: <Bookself />,
  //   },
  // ];
  const OurProd2 = products.slice(6, 10);
  // const OurProd2 = [
  //   {
  //     prodName: "The north coat",
  //     prodPrice: "$260",
  //     prodReviews: "65",
  //     prodRating: <FiveStar />,
  //     prodImage: <Coat />,
  //   },
  //   {
  //     prodName: "Gucci duffle bag",
  //     prodPrice: "$960",
  //     prodReviews: "75",
  //     prodRating: <Four_HalfStar />,
  //     prodImage: <DuffleBag />,
  //   },
  //   {
  //     prodName: "RGB liquid CPU Cooler",
  //     prodPrice: "$160",
  //     prodReviews: "65",
  //     prodRating: <Four_HalfStar />,
  //     prodImage: <CPUcooler />,
  //   },
  //   {
  //     prodName: "Small BookSelf",
  //     prodPrice: "$360",
  //     prodReviews: "65",
  //     prodRating: <FiveStar />,
  //     prodImage: <Bookself />,
  //   },
  //   {
  //     prodName: "Small BookSelf",
  //     prodPrice: "$360",
  //     prodReviews: "65",
  //     prodRating: <FiveStar />,
  //     prodImage: <Bookself />,
  //   },
  //   {
  //     prodName: "Small BookSelf",
  //     prodPrice: "$360",
  //     prodReviews: "65",
  //     prodRating: <FiveStar />,
  //     prodImage: <Bookself />,
  //   },
  // ];
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-6">
        <div className="bg-[#DB4444] w-[1vw] h-[2vw] rounded-sm"></div>
        <p className="text-[#DB4444] font-bold text-fluid-sm">Our Products</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-semibold text-fluid-md">Explore Our Products</p>
        <div className="flex gap-5">
          <ArrowLeft className="bg-[#F5F5F5] rounded-full p-1 size-7" />
          <ArrowRight className="bg-[#F5F5F5] rounded-full p-1 size-7" />
        </div>
      </div>
      <div className="flex flex-row overflow-auto gap-10 mt-9 no-scrollbar justify-between">
        {OurProd1.map((prod) => (
          // The Link and key go on the wrapping element
          <Link to={`/products/${prod.id}`} key={prod.id}>
            <ProductComp
              // Use the correct property names from your 'products' data
              prodImage={prod.images[0]}
              prodName={prod.name}
              prodRating={prod.rating}
              prodPrice={`$${prod.price}`}
              prodReviews={prod.reviews}
            />
          </Link>
        ))}
      </div>
      <div className="flex flex-row overflow-auto gap-10 mt-9 no-scrollbar justify-between">
        {OurProd2.map((prod) => (
          // The Link and key go on the wrapping element
          <Link to={`/products/${prod.id}`} key={prod.id}>
            <ProductComp
              // Use the correct property names from your 'products' data
              prodImage={prod.images[0]}
              prodName={prod.name}
              prodRating={prod.rating}
              prodPrice={`$${prod.price}`}
              prodReviews={prod.reviews}
            />
          </Link>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="bg-[#DB4444] text-white p-2 px-5 rounded-sm">
          View All Products
        </button>
      </div>
    </div>
  );
}

export default OurProductSection;
