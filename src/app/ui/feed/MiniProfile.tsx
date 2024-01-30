import Image from "next/image";

export default function MiniProfile() {
  return (
    <div className="flex relative w-full max-w-[360px] items-center gap-2 p-4">
      <Image
        src="https://randomuser.me/api/portraits/men/75.jpg"
        alt="avatar"
        width={64}
        height={64}
        className="object-cover border p-[2px] rounded-full hover:scale-125 cursor-pointer transition-transform duration-200 ease-out"
      />
      <div className="flex flex-col">
        <h2 className="font-bold">User Name</h2>
        <h3 className="text-sm text-gray-400">description</h3>
      </div>
      <div className="flex-grow" />
      <button className="font-semibold text-blue-400 text-sm">Sign out</button>
    </div>
  );
}
