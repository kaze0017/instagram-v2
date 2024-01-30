import Image from "next/image";
import React from "react";
import Suggestion from "./Suggestion";

interface User {
  name: string;
  profileImage: string;
  job: string;
  email: string;
}

export default async function Suggestions({
  suggestionUsers,
}: {
  suggestionUsers: User[];
}) {
  return (
    <div className="p-2 max-w-[320px]">
      <div className="flex justify-between">
        <h3 className="fon-bold text-gray-400">Suggestions For You</h3>
        <h3 className="text-sm text-gray-400">See All</h3>
      </div>
      <div className="">
        {suggestionUsers.map((user, index) => (
          <Suggestion key={index} user={user} />
        ))}
      </div>
    </div>
  );
}
