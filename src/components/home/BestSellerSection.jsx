import React from "react";
import ProductComp from "../shared/ProductComp";
import FiveStar from "../../assets/images/Allicons/Five star.svg?react";
import FourStar from "../../assets/images/Allicons/Four Star.svg?react";
import Four_HalfStar from "../../assets/images/Allicons/Four Half Star.svg?react";
import DuffleBag from "../../assets/images/CartItems/547953_9C2ST_8746_001_082_0000_Light-Gucci-Savoy-medium-duffle-bag 1.svg?react";
import Coat from "../../assets/images/CartItems/672462_ZAH9D_5626_002_100_0000_Light-The-North-Face-x-Gucci-coat 1.svg?react";
import CPUcooler from "../../assets/images/CartItems/gammaxx-l240-argb-1-500x500 1.svg?react";
import Bookself from "../../assets/images/CartItems/sam-moghadam-khamseh-L_7MQsHl_aU-unsplash 1.svg?react";
import { products } from '../../product_data/productData'
import { Link } from "react-router-dom";
function BestSellerSection() {

  const bestSellingProducts = products.slice(0,4)
  // const BestProd = [
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
        <p className="text-[#DB4444] font-bold text-fluid-sm">This Month</p>
      </div>
      <div className="flex justify-between">
        <p className="text-fluid-md font-semibold">Best Selling Products</p>
        <button className="text-white bg-[#DB4444] rounded-sm p-2 px-5 text-fluid-xs">
          View All
        </button>
      </div>
      {/* <div className="flex flex-row overflow-auto gap-10 mt-9 no-scrollbar justify-between">
        {bestSellingProducts.map((prod, idx) => {
          return (
            <Link to={`/products/${prod.id}`} key={prod.id}>
              <ProductComp
                prodImage={prod.images[0]}
                prodName={prod.name}
                prodRating={prod.rating}
                prodPrice={`$${prod.price}`} 
                prodReviews={prod.reviews}
              />
            </Link>
          );
        })}
      </div> */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        {bestSellingProducts.map((prod) => (
          <Link to={`/products/${prod.id}`} key={prod.id}>
            <ProductComp
              prodImage={prod.images[0]}
              prodName={prod.name}
              prodRating={prod.rating}
              prodPrice={`$${prod.price}`}
              prodReviews={prod.reviews}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BestSellerSection;
