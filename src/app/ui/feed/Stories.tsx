import React, { Suspense, useEffect, useState } from "react";
import { getRandomUsers } from "@/app/actions/getRandomUsers";
import Image from "next/image";

// interface User {
//   name: string;
//   profileImage: string;
// }

export default async function Stories() {
  //   const [storyUsers, setStoryUsers] = useState<User[]>([]);

  //   useEffect(() => {
  //     getRandomUsers().then((data) => {
  //       setStoryUsers(data);
  //     });
  //   }, []);
  const storyUsers = await getRandomUsers();

  return (
    <div className="flex gap-2 overflow-x-scroll max-w-[100%] px-2 py-4 border-2 border-gray-200 bg-white mt-8 rounded-sm scrollbar-none">
      {storyUsers.map((user, index) => (
        <div
          key={index}
          className="hover:scale-110 transition-transform duration-200"
        >
          <Image
            src={user.profileImage}
            width={50}
            height={50}
            alt={user.name}
            className="rounded-full object-cover filter hover:brightness-110 transition duration-200 ease-out border-2 border-red-500 p-[1px]"
            loading="lazy"
            placeholder="blur"
            blurDataURL={"/icons/rolling.svg"}
          />
          <p className="text-xs w-14 truncate text-center">{user.name}</p>
        </div>
      ))}
    </div>
  );
}