import React from "react";
import Brand from "@/components/brand";
import SearchInput from "@/components/ui/search-input";

import AvatarDropdown from "./avatar-dropdown";
import { SigninDialog } from "./signin-dialog";
import { SignupDialog } from "./signup-dialog";

const header = () => {
  return (
    <div className="flex items-center mx-10 gap-8 my-2">
      <Brand />
      <SearchInput />

      <div className="flex gap-4">
        <SignupDialog />
        <SigninDialog />
      </div>

      <AvatarDropdown />
    </div>
  );
};

export default header;
