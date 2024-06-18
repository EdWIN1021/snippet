import React from "react";
import Brand from "@/components/brand";
import SearchInput from "@/components/ui/search-input";

import AvatarDropdown from "./avatar-dropdown";
import AuthDialogs from "./auth-dialogs";

const header = () => {
  return (
    <div className="flex items-center mx-10 gap-8 my-2">
      <Brand />
      <SearchInput />
      <AuthDialogs />
      <AvatarDropdown />
    </div>
  );
};

export default header;
