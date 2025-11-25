import React from 'react'
import PS5 from "../../assets/images/ps5.svg?react";
import Woman from "../../assets/images/woman.svg?react";
import Perfume from "../../assets/images/Perfume.svg?react";
import AmazonEcho from "../../assets/images/AmazonEcho.svg?react";

function FeaturedSection() {
  return (
    <div className="flex flex-col gap-8">
        <div className="flex items-center gap-6">
          <div className="bg-[#DB4444] w-3 h-6 rounded-sm"></div>
          <p className="text-[#DB4444] font-bold text-fluid-sm">Featured</p>
        </div>

        <div>
          <p className="text-fluid-md font-semibold">New Arrival</p>
        </div>

        <div className="flex flex-col lg:flex-row justify-between w-full gap-4">
          {/* Left: PS5 */}
          <div className="relative bg-black flex-1 h-[300px] sm:h-[400px] lg:h-[500px] rounded-md overflow-hidden">
            <PS5 className="w-full h-full object-cover" />
            <div className="absolute bottom-5 left-5 text-white p-2">
              <p className="text-lg sm:text-xl font-semibold">PlayStation 5</p>
              <p className="text-[#FAFAFA] font-light text-sm sm:text-base">
                Black and White version of the PS5 <br />
                coming out on sale
              </p>
              <p className="underline text-sm mt-2">Shop Now</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 flex-1">
            <div className="bg-black h-[200px] sm:h-[240px] lg:h-[250px] rounded-md overflow-hidden relative">
              <Woman className="w-full h-full object-cover" />
              <div className="absolute bottom-0 p-4">
                <p className="text-lg sm:text-xl font-semibold text-white">
                  Women's Collections
                </p>
                <p className="text-[#FAFAFA] font-light text-sm sm:text-base">
                  Featured woman collections that <br />
                  give you another vibe
                </p>
                <p className="underline text-sm mt-2 text-white">Shop Now</p>
              </div>
            </div>

            <div className="flex gap-4 h-[200px] sm:h-[240px] lg:h-[250px]">
              <div className="bg-black flex-1 relative rounded-md overflow-hidden">
                <AmazonEcho className="w-full h-full object-cover" />
                <div className="absolute bottom-0 p-4">
                  <p className="text-lg sm:text-xl font-semibold text-white">
                    Speakers
                  </p>
                  <p className="text-[#FAFAFA] font-light text-sm sm:text-base">
                    Amazon wireless speakers
                  </p>
                  <p className="underline text-sm mt-2 text-white">Shop Now</p>
                </div>
              </div>
              <div className="bg-black flex-1 rounded-md overflow-hidden relative">
                <Perfume className="w-full h-full object-cover" />
                <div className="absolute text-white bottom-0 p-4">
                  <p className="text-lg sm:text-xl font-semibold text-white">
                    Perfume
                  </p>
                  <p className="text-[#FAFAFA] font-light text-sm sm:text-base">
                    GUCCI INTENSE OUD EDP
                  </p>
                  <p className="underline text-sm mt-2">Shop Now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default FeaturedSection