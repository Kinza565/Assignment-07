"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { MdAccountBox } from "react-icons/md";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const route = useRouter();
  const { cart } = useCart();

  return (
    <div className="fixed top-0 left-0 right-0 flex items-center justify-between p-4 bg-black shadow-md z-50">
      <div className="flex items-center space-x-6">
        {/* Logo */}
        <Image
          src="/logo.png"
          alt="logo"
          width={50}
          height={24}
          className="cursor-pointer ml-10"
        />
        <div className="hidden md:flex space-x-8">
          <button onClick={() => route.push("/")} className="text-white hover:text-gray-400 transition-all">
            Home
          </button>
          <button onClick={() => route.push("/brands")} className="text-white hover:text-gray-400 transition-all">
            Brands
          </button>
          <button onClick={() => route.push("/recent-products")} className="text-white hover:text-gray-400 transition-all">
            Recent Products
          </button>
          <button onClick={() => route.push("/contact")} className="text-white hover:text-gray-400 transition-all">
            Contact
          </button>
          <button onClick={() => route.push("/about")} className="text-white hover:text-gray-400 transition-all">
            About
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-6">
        {/* Search Icon */}
        <CiSearch
          size={24}
          className="text-white cursor-pointer hover:text-gray-400 transition-all"
          aria-label="Search"
          onClick={() => console.log("Search clicked")}
        />

        {/* Account Icon */}
        <MdAccountBox
          size={24}
          className="text-white cursor-pointer hover:text-gray-400 transition-all"
          aria-label="Account"
          onClick={() => route.push("/account")}
        />

        {/* Cart Icon */}
        <div className="relative">
          <CiShoppingCart
            size={24}
            className="text-white cursor-pointer hover:text-gray-400 transition-all"
            aria-label="Cart"
            onClick={() => route.push("/cart")}
          />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs font-semibold">
              {cart.length}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
