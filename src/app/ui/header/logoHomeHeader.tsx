import React from "react";
import Image from "next/image";
import { autocompleteClasses } from "@mui/material";

export default function LogoHomeHeader() {
  return (
    <>
      <div className="relative hidden lg:inline-grid cursor-pointer h-42 ">
        <Image
          src="/logos/instagram_logo.png"
          alt="instagram logo"
          width={120}
          height={43}
          priority
        />
      </div>
      <div className="relative  lg:hidden cursor-pointer">
        <Image
          src="/logos/instagram_logo_sm.png"
          alt="instagram logo"
          width={42}
          height={42}
        />
      </div>
    </>
  );
}
