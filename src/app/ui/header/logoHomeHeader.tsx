import React from "react";
import Image from "next/image";

export default function LogoHomeHeader() {
  return (
    <>
      <div className="relative  w-24 h-24 hidden lg:inline-grid cursor-pointer">
        <Image
          src="/logos/instagram_logo.png"
          alt="instagram logo"
          layout="fill"
          className="object-contain"
        />
      </div>
      <div className="relative  w-10 h-24 lg:hidden cursor-pointer">
        <Image
          src="/logos/instagram_logo_sm.png"
          alt="instagram logo"
          layout="fill"
          className="object-contain"
        />
      </div>
    </>
  );
}
