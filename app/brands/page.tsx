import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="flex items-center justify-center bg-yellow-50 min-h-screen">
      <Image 
        src="/Brand.png" 
        alt="Brand Logo" 
        width={1102} 
        height={239} 
        className="object-contain shadow-lg rounded-lg"
      />
    </div>
  );
};

export default Page;