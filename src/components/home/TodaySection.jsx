import React from "react";
import useCountdown from "@/hooks/useCountdown";
import ProductComp from "../shared/ProductComp";
import ArrowLeft from "../../assets/images/Allicons/Vector-12.svg?react";
import ArrowRight from "../../assets/images/Allicons/Vector-13.svg?react";
import FiveStar from "../../assets/images/Allicons/Five star.svg?react";
import FourStar from "../../assets/images/Allicons/Four Star.svg?react";
import Four_HalfStar from "../../assets/images/Allicons/Four Half Star.svg?react";
import Keyboard from "../../assets/images/CartItems/ak-900-01-500x500 1.svg?react";
import Gamepad from "../../assets/images/CartItems/g92-2-500x500 1.svg?react";
import Monitor from "../../assets/images/CartItems/g27cq4-500x500 1.svg?react";
import Chair from "../../assets/images/CartItems/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.svg?react";
import { products } from "@/product_data/productData";
import { Link } from "react-router-dom";

function TodaySection() {
  const TodaysProducts=products.slice(0,8)
  const Products = [
    {
      prodName: "HAVIT-HV-G92 Gamepad",
      prodPrice: "$120",
      prodReviews: "88",
      prodRating: <FiveStar />,
      prodImage: <Gamepad />,
      originalPrice: "$160", // Example data for discounts
    },
    {
      prodName: "AK-900 Wired Keyboard",
      prodPrice: "$960",
      prodReviews: "75",
      prodRating: <FourStar />,
      prodImage: <Keyboard />,
      originalPrice: "$1160",
    },
    {
      prodName: "IPS LCD Gaming Monitor",
      prodPrice: "$370",
      prodReviews: "99",
      prodRating: <FiveStar />,
      prodImage: <Monitor />,
      originalPrice: "$400",
    },
    {
      prodName: "S-Series Comfort Chair",
      prodPrice: "$375",
      prodReviews: "99",
      prodRating: <Four_HalfStar />,
      prodImage: <Chair />,
      originalPrice: "$500",
    },
    {
      prodName: "Another Gaming Monitor",
      prodPrice: "$400",
      prodReviews: "150",
      prodRating: <FiveStar />,
      prodImage: <Monitor />,
      originalPrice: "$550",
    },
    {
      prodName: "Another Gamepad",
      prodPrice: "$130",
      prodReviews: "42",
      prodRating: <FourStar />,
      prodImage: <Gamepad />,
      originalPrice: "$180",
    },
  ];
  // Highlight: Using a future date based on the current time for the countdown to be active.
  const saleEndDate = "2025-09-30T23:59:59";
  const { formattedTime, isSaleEnded } = useCountdown(saleEndDate);

  return (
    // Highlight: Added padding for better spacing on mobile screens.
    <div className="flex flex-col gap-6 px-4 sm:px-0">
      <div className="flex items-center gap-4">
        {/* Highlight: Replaced vw/vh units with fixed rem units for predictable sizing. */}
        <div className="bg-[#DB4444] w-5 h-10 rounded"></div>
        <p className="text-[#DB4444] font-semibold text-base">Today's</p>
      </div>

      {/* Highlight: This container will stack vertically on mobile and horizontally on larger screens. */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div className="flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-12">
          <h2 className="text-2xl lg:text-3xl font-semibold tracking-wider">
            Flash Sales
          </h2>
          <div className="flex items-center gap-3 sm:gap-4">
            {isSaleEnded ? (
              <p className="text-red-600 text-xl md:text-2xl font-bold">
                Sale Ended!
              </p>
            ) : (
              <>
                {/* Highlight: Made font sizes and labels responsive. */}
                <div className="text-center font-bold">
                  <p className="text-xs">Days</p>
                  <p className="text-2xl lg:text-3xl tracking-wider">
                    {formattedTime.days}
                  </p>
                </div>
                <span className="text-2xl font-semibold text-[#DB4444]">:</span>
                <div className="text-center font-bold">
                  <p className="text-xs">Hours</p>
                  <p className="text-2xl lg:text-3xl tracking-wider">
                    {formattedTime.hours}
                  </p>
                </div>
                <span className="text-2xl font-semibold text-[#DB4444]">:</span>
                <div className="text-center font-bold">
                  <p className="text-xs">Minutes</p>
                  <p className="text-2xl lg:text-3xl tracking-wider">
                    {formattedTime.minutes}
                  </p>
                </div>
                <span className="text-2xl font-semibold text-[#DB4444]">:</span>
                <div className="text-center font-bold">
                  <p className="text-xs">Seconds</p>
                  <p className="text-2xl lg:text-3xl tracking-wider">
                    {formattedTime.seconds}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="flex gap-2 self-end">
          <button
            aria-label="Previous Slide"
            className="bg-[#F5F5F5] rounded-full p-2 hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft className="size-6" />
          </button>
          <button
            aria-label="Next Slide"
            className="bg-[#F5F5F5] rounded-full p-2 hover:bg-gray-200 transition-colors"
          >
            <ArrowRight className="size-6" />
          </button>
        </div>
      </div>

      {/* Highlight: This is the main change for the product list.
        Instead of a flex row, we use a responsive grid.
        - On mobile (default): 1 column
        - On small screens (sm): 2 columns
        - On medium screens (md): 3 columns
        - On large screens (lg): 4 columns
        This approach is better than horizontal scrolling on larger devices.
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 mt-4">
        {TodaysProducts.map((prod) => (
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
      <div className="flex justify-center mt-5 border-b pb-16">
        <button className="bg-[#DB4444] py-3 px-12 text-white rounded hover:bg-red-700 transition-colors font-medium">
          View All Products
        </button>
      </div>
    </div>
  );
}

export default TodaySection;