import React from "react";
import CategoryImg1 from "../../assets/images/Category-icons/Category-CellPhone.svg?react";
import CategoryImg2 from "../../assets/images/Category-icons/Category-Computer.svg?react";
import CategoryImg3 from "../../assets/images/Category-icons/Category-SmartWatch.svg?react";
import CategoryImg4 from "../../assets/images/Category-icons/Category-Camera.svg?react";
import CategoryImg5 from "../../assets/images/Category-icons/Category-Headphone.svg?react";
import CategoryImg6 from "../../assets/images/Category-icons/Category-Gamepad.svg?react";
import ArrowLeft from "../../assets/images/Allicons/Vector-12.svg?react";
import ArrowRight from "../../assets/images/Allicons/Vector-13.svg?react";
function CategorySection() {
  return (
    <div className="flex flex-col gap-8">
      {" "}
      <div className="flex items-center gap-6">
        <div className="bg-[#DB4444] w-[1vw] h-[2vw] rounded-sm"></div>
        <p className="text-[#DB4444] font-bold text-fluid-sm">Categories</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-semibold text-fluid-md">Browse By Category</p>
        <div className="flex gap-5">
          <ArrowLeft className="bg-[#F5F5F5] rounded-full p-1 size-7" />
          <ArrowRight className="bg-[#F5F5F5] rounded-full p-1 size-7" />
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 border-b pb-15">
        {[
          { icon: <CategoryImg1 />, label: "Phones" },
          { icon: <CategoryImg2 />, label: "Computers" },
          { icon: <CategoryImg3 />, label: "SmartWatch" },
          { icon: <CategoryImg4 />, label: "Camera" },
          { icon: <CategoryImg5 />, label: "HeadPhones" },
          { icon: <CategoryImg6 />, label: "Gaming" },
        ].map((cat, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center gap-3 border border-gray-300 rounded-md p-6 hover:shadow-md transition"
          >
            {cat.icon}
            <p className="text-sm font-medium">{cat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategorySection;
