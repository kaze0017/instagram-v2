import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import HomeIcon from "@mui/icons-material/Home";
import Image from "next/image";

export default function NavHomeHeader() {
  return (
    <div className="flex flex-row space-x-2 items-center">
      <HomeIcon className="hover:scale-125 cursor-pointer transition-transform duration-200 ease-out" />
      <AddCircleOutlineIcon className="hover:scale-125 cursor-pointer transition-transform duration-200 ease-out" />
      <div className="relative w-8 h-8 rounded-full cursor-pointer">
        <Image
          src="https://randomuser.me/api/portraits/men/75.jpg"
          alt="avatar"
          layout="fill"
          className="object-cover rounded-full hover:scale-125 cursor-pointer transition-transform duration-200 ease-out"
        />
      </div>
    </div>
  );
}
