import React from "react";
import Brand from "@/components/brand";
import SearchInput from "@/components/ui/search-input";

import AvatarDropdown from "./avatar-dropdown";
import AuthDialogs from "./auth-dialogs";

import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth/next";

const header = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex items-center mx-10 gap-8 my-2">
      <Brand />
      <SearchInput />
      {session ? <AvatarDropdown user={session?.user} /> : <AuthDialogs />}
    </div>
  );
};

export default header;
