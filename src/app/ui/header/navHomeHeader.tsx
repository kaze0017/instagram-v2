"use client";
import React, { useEffect, useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import HomeIcon from "@mui/icons-material/Home";
import Image from "next/image";
import { getRandomUsers } from "@/app/actions/getRandomUsers";

export default function NavHomeHeader() {
  const [user, setUser] = useState({ name: "", profileImage: "" });
  useEffect(() => {
    getRandomUsers({ n: 10 }).then((data) => {
      setUser(data[0]);
    });
  }, []);
  return (
    <div className="flex flex-row space-x-2 items-center">
      <HomeIcon className="hover:scale-125 cursor-pointer transition-transform duration-200 ease-out" />
      <AddCircleOutlineIcon className="hover:scale-125 cursor-pointer transition-transform duration-200 ease-out" />
      <div className="relativ rounded-full cursor-pointer">
        <Image
          src="https://randomuser.me/api/portraits/men/75.jpg"
          alt="avatar"
          width={30}
          height={30}
          className="object-cover rounded-full hover:scale-125 cursor-pointer transition-transform duration-200 ease-out"
        />
      </div>
    </div>
  );
}
