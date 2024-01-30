import Image from "next/image";

interface User {
  name: string;
  profileImage: string;
  job: string;
  email: string;
}
export default function Suggestion({ user }: { user: User }) {
  return (
    <div className="flex max-w-[245px] p-2 py-1 space-x-2 items-center">
      <Image
        src={user.profileImage}
        width={40}
        height={40}
        alt={user.name}
        className="rounded-full  filter hover:brightness-110 transition duration-200 ease-out border-2 border-red-500 p-[1px]"
        loading="lazy"
        placeholder="blur"
        blurDataURL={"/icons/rolling.svg"}
      />
      <div className="flex flex-col">
        <h2 className="font-bold truncate max-w-[100px]"> {user.name}</h2>
        <h3 className="text-sm text-gray-400 truncate max-w-[100px]">
          {user.email}
        </h3>
      </div>
      <div className="flex-grow" />
      <button className="text-blue-400 text-sm">Follow</button>
    </div>
  );
}
