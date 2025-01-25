"use client"; 

import React from "react";
import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../context/CartContext";
import Navbar from "../Component/navbar";

// Define the Product type
interface Product {
  id: number;
  name: string;
  price: string;
  src: string;
}

const Page: React.FC = () => {
  const { addToCart } = useCart();

  const products: Product[] = [
    { id: 1, name: "Apple Smart I", price: "$255.00", src: "/product 1.png" },
    { id: 2, name: "Apple Smart II", price: "$255.00", src: "/product 2.png" },
    { id: 3, name: "Apple Smart III", price: "$255.00", src: "/Product 3.png" },
    { id: 4, name: "Apple Smart IV", price: "$399.00", src: "/Product 4.png" },
    { id: 5, name: "Samsung Watch Pro", price: "$255.00", src: "/Product 5.png" },
    { id: 6, name: "Fitbit Max 1", price: "$155.00", src: "/Product 6.png" },
  ];

  return (
    <div className="bg-white">
     
      <Navbar />

      {/* Products Section */}
      <section className="p-6">
        <h1 className="text-black font-bold text-2xl flex justify-center mt-16">
          Our Latest Products
        </h1>
        <p className="text-blue-600 mb-4 flex justify-center">
          Find your favorite smart watch.
        </p>
        <div className="grid grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id} className="product relative">
              {/* Wrap the Image component with a div to handle onClick */}
              <div 
                onClick={() => addToCart(product)} 
                className="cursor-pointer"
              >
                <Image
                  src={product.src}
                  alt={product.name}
                  width={335}
                  height={440}
                  className="cursor-pointer"
                />
              </div>
              <h2>{product.name}</h2>
              <p>⭐⭐⭐⭐⭐</p>
              <p>{product.price}</p>
              <div
                className="cart-icon"
                onClick={() => addToCart(product)}
              >
                <FiShoppingCart size={24} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 p-6">
        <h2 className="text-center text-2xl">What People Say About Us</h2>
        <div className="flex justify-center space-x-4">
          <div className="testimonial p-4 bg-white shadow rounded">
            <Image
              src="/6426000_sd-removebg-preview 1.png"
              alt="Hamza Faizi"
              width={164.16}
              height={179}
            />
            <h3>Hamza Faizi</h3>
            <p>
              Don't waste time, just order! This is the best website to purchase
              smart watches.
            </p>
            <p>⭐⭐⭐⭐⭐</p>
          </div>
          <div className="testimonial p-4 bg-white shadow rounded">
            <Image
              src="/6426000_sd-removebg-preview 1 (1).png"
              alt="Hafiz Huzaifa"
              width={164.16}
              height={179}
            />
            <h3>Hafiz Huzaifa</h3>
            <p>
              I've been purchasing smart watches from Shad for a long time. All
              the products are good quality.
            </p>
            <p>⭐⭐⭐⭐⭐</p>
          </div>
        </div>
      </section>

      {/* Subscribe to Newsletter Section */}
      <section className="p-6">
        <div className="bg-[#F6F6F6] p-6 rounded-lg flex justify-between items-center">
          <div className="w-1/2">
            <h2 className="text-center text">
              {/* Add content here if necessary */}
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
