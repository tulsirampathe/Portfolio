import React from "react";
import { socialMediaLinks } from "../constants";

function Footer() {
  return (
    <footer className="fixed right-1 bottom-2 z-20 sm:right-2 sm:bottom-2 md:right-4 md:bottom-4 lg:right-8 lg:bottom-6">
      <div className="flex flex-col justify-end gap-3 sm:gap-2">
        {socialMediaLinks.map((social, index) => (
          <div
            key={index}
            onClick={() => window.open(social.url, "_blank")}
            aria-label={`Open ${social.name}`}
            className="relative black-gradient w-10 h-10 sm:w-12 sm:h-12 rounded-full flex justify-center items-center cursor-pointer group transform transition-transform duration-300 hover:scale-110"
          >
            <img
              src={social.img}
              alt={`${social.name} icon`}
              className="w-1/2 h-1/2 object-contain"
            />
            <span className="absolute right-full px-3 py-1 text-xs text-white bg-gray-900 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {social.name}
            </span>
          </div>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
