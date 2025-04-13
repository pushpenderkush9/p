import React from "react";
import {
  FaPinterestP,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-100 text-gray-800 pt-16 pb-8 mt-10 relative overflow-hidden">
      {/* Wave Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-full h-[40px]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M0,0V46.29c47.73,22.52,103.55,29.38,158,20.13C254.36,51,320,24.56,376,21.75c71.61-3.72,142.36,27.23,213,44.9C660,89.76,730.52,87.42,800,74.55c59.65-10.69,113.74-33.53,172-40.09,48.91-5.36,103.3,1.39,152,17.59V0Z"
            opacity=".25"
            className="fill-green-100"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
        {/* Shop Matcha */}
        <div>
          <h3 className="font-bold mb-4">Shop Matcha</h3>
          <ul className="space-y-2 text-sm">
            <li>Starter Kits</li>
            <li>Lattes & Sweetened</li>
            <li>Just the Matcha</li>
            <li>Matchaware</li>
            <li>Shop All</li>
          </ul>
        </div>

        {/* Learn */}
        <div>
          <h3 className="font-bold mb-4">Learn</h3>
          <ul className="space-y-2 text-sm">
            <li>Our Story</li>
            <li>Matcha Recipes</li>
            <li>Caffeine Content</li>
            <li>Health Benefits</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* More from Tenzo */}
        <div>
          <h3 className="font-bold mb-4">More from Tenzo</h3>
          <ul className="space-y-2 text-sm">
            <li>Sign In</li>
            <li>Wholesale Opportunities</li>
            <li>Affiliate</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Social & Legal */}
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="font-bold mb-4">Follow us</h3>
            <div className="flex gap-4 text-xl text-green-800">
              <FaPinterestP />
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
            </div>
          </div>
          <div className="mt-8 text-xs space-x-2 text-gray-500">
            <span>Terms of Service</span>|
            <span>Privacy Policy</span>|
            <span>Refund Policy</span>|
            <span>Accessibility Policy</span>
          </div>
        </div>
      </div>

      <p className="text-center text-sm text-gray-500 mt-8 relative z-10">
        © 2025 tenzotea.co
      </p>
    </footer>
  );
}
