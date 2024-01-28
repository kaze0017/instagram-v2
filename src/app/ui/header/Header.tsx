import Image from "next/image";
import React from "react";
import OutlinedSearchField from "./searchField";
import NavHomeHeader from "./navHomeHeader";
import LogoHomeHeader from "./logoHomeHeader";

export default function Header() {
  return (
    <div className="shadow-sm sticky top-0 bg-white z-30 py-4">
      <div className="flex items-center justify-between max-w-6xl mx-auto px-2">
        <LogoHomeHeader />
        <OutlinedSearchField />
        <NavHomeHeader />
      </div>
    </div>
  );
}
