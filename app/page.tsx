import Navbar from "./Component/navbar";
import Image from "next/image";

import BrandsPage from "./brands/page";

import RecentProductsPage from "./recent-products/page";
import Footer from "./footer/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="container mx-auto flex flex-row items-center justify-between mt-20 p-6">
        <div className="text-white max-w-lg mt-28 ml-32 ">
          <h1 className="text-6xl font-bold leading-tight">
            Discover
            <br />
            Most Suitable <br />
            Watches
          </h1>
          <p className="text-gray-300 mt-7">
            Find the best, reliable, and cheap smart watches here. We focus on
            product quality. Here you can find smart watches of almost all
            brands. So why are you waiting? Just order now!
          </p>
          <div className="mt-6 flex space-x-2">
            <input
              type="text"
              placeholder="Find the best brands"
              className="px-4 py-2 w-full text-black rounded-md"
            />
            <button className="bg-blue-500 px-4 py-2 text-white rounded-md">
              Search
            </button>
          </div>
        </div>

        <div>
          <Image src="/watch.png" alt="Smart Watch" width={461} height={563} />
        </div>
      </div>
     
    
      <BrandsPage />
      <RecentProductsPage />
      <Footer />
    
    </div>
  );
}



