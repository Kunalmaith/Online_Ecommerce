import React from "react";
import BrowseBtn from "../../assets/images/Allicons/DropDown.svg?react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Img1 from "../../assets/images/Frame 560.svg?react";
import Autoplay from "embla-carousel-autoplay";

import TruckImg from "../../assets/images/Allicons/icon-delivery.svg?react";
import Customer from "../../assets/images/Allicons/Icon-Customer service.svg?react";
import Protection from "../../assets/images/Services-icon/shield-tick.svg?react";
import TodaySection from "@/components/home/TodaySection";
import CategorySection from "@/components/home/CategorySection";
import BestSellerSection from "@/components/home/BestSellerSection";
import JBLAddSection from "@/components/home/JBLAddSection";
import OurProductSection from "@/components/home/OurProductSection";
import FeaturedSection from "@/components/home/FeaturedSection";

function Home() {
  
  return (
    // Use responsive padding and gaps for the main container
    <div className="flex flex-col flex-1 px-4 md:px-8 lg:px-16 gap-10 lg:gap-16">
       
      {/* Main content wrapper (Sidebar + Carousel)
        - Stacks vertically on mobile (default)
        - Becomes a row on large screens (lg:flex-row) 
      */}
      <div className="flex flex-col lg:flex-row lg:gap-8 pt-5">
        {/* Sidebar
          - Takes full width on mobile, but a fixed width on large screens
          - The border is only on the right side on large screens
        */}
        <div className="flex flex-col text-fluid-sm lg:border-r lg:border-gray-300 lg:pr-4 lg:w-64 gap-2">
          <div className="flex justify-between items-center py-2">
            <p>Woman's Fashion</p>
            <BrowseBtn />
          </div>
          <div className="flex justify-between items-center py-2">
            <p>Men's Fashion</p>
            <BrowseBtn />
          </div>
          <p className="py-2">Electronics</p>
          <p className="py-2">Home & Lifestyle</p>
          <p className="py-2">Medicine</p>
          <p className="py-2">Sports & Outdoor</p>
          <p className="py-2">Baby's & Toys</p>
          <p className="py-2">Groceries & Pets</p>
          <p className="py-2">Health & Beauty</p>
        </div>

        {/* Carousel
          - Takes up the remaining space on large screens
          - Hides the sidebar's border on mobile with a negative margin
        */}
        <div className="flex-1 w-full lg:border-t-0 border-t-2 border-gray-300 mt-4 lg:mt-0 pt-4 lg:pt-0">
          <Carousel
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            className="w-full"
            opts={{
              loop: true,
            }}
          >
            <CarouselContent>
              {[1, 2, 3].map((_, index) => (
                // Use basis-full to ensure one item shows at a time
                <CarouselItem key={index} className="basis-full">
                  {/* Container to control aspect ratio */}
                  <div className="aspect-video md:aspect-[2.3/1] h-auto w-full">
                    <Img1 className="h-full w-full object-cover" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>

      {/* Todays Section */}
      <TodaySection />

      {/* Category Section */}
      <CategorySection />

      {/* Best Selling Product */}
      <BestSellerSection />

      {/* JBL ADD SECTION */}
      <JBLAddSection />

      {/* Our Products */}
      <OurProductSection />

      {/* Featured Section */}
      <FeaturedSection />

      {/* Sub footer / Services Section
        - Stacks vertically on mobile with a smaller gap
        - Becomes a row on large screens with a larger gap
      */}
      <div className="flex flex-col lg:flex-row w-full justify-around items-center gap-12 lg:gap-8 mt-14">
        {/* Item 1 */}
        <div className="flex flex-col justify-center items-center text-center">
          <div className="flex justify-center border-8 border-gray-300 rounded-full bg-black">
            <TruckImg className="text-white p-2 size-16" />
          </div>
          <p className="font-semibold text-fluid-md mt-4">
            FREE AND FAST DELIVERY
          </p>
          <p className="text-fluid-xs">
            Free delivery for all orders over $140
          </p>
        </div>
        {/* Item 2 */}
        <div className="flex flex-col justify-center items-center text-center">
          <div className="flex justify-center border-8 border-gray-300 rounded-full bg-black">
            <Customer className="text-white p-2 size-16" />
          </div>
          <p className="font-semibold text-fluid-md mt-4">
            24/7 CUSTOMER SERVICE
          </p>
          <p className="text-fluid-xs">Friendly 24/7 customer support</p>
        </div>
        {/* Item 3 */}
        <div className="flex flex-col justify-center items-center text-center">
          <div className="flex justify-center border-8 border-gray-300 rounded-full bg-black">
            <Protection className="text-white p-2 size-16" />
          </div>
          <p className="font-semibold text-fluid-md mt-4">
            MONEY BACK GUARANTEE
          </p>
          <p className="text-fluid-xs">We return money within 30 days</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
