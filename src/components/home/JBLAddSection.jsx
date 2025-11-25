import React from "react";
import JBL from "../../assets/images/JBL.svg?react";
import useCountdown from "@/hooks/useCountdown";

function JBLAddSection() {
  const saleEndDate = "2025-08-09T23:59:59";
  const { formattedTime, isSaleEnded } = useCountdown(saleEndDate);
  return (
    <div className="px-20 py-20 flex justify-between text-white bg-black">
      <div className="flex">
        <div className="flex flex-col gap-4 justify-around">
          <p className="text-[#00FF66]">Categories</p>
          <p className="text-fluid-lg">Enhance Your Music Experience</p>
          <div className="flex gap-5">
            {isSaleEnded ? (
              <p className="text-red-500 text-xl font-bold">Sale Ended!</p>
            ) : (
              ["hours", "days", "minutes", "seconds"].map((unit, idx) => (
                <div
                  key={idx}
                  className="flex justify-center items-center relative bg-white text-black rounded-full size-14"
                >
                  <p className="font-bold pb-2">{formattedTime[unit]}</p>
                  <p className="absolute text-xs bottom-1 pb-1">
                    {unit.charAt(0).toUpperCase() + unit.slice(1)}
                  </p>
                </div>
              ))
            )}
          </div>
          <div className="flex">
            <button className="rounded-sm bg-[#00FF66] text-white px-5 p-2">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div>
        <JBL className="w-full h-full object-cover rounded-full" />
      </div>
    </div>
  );
}

export default JBLAddSection;
