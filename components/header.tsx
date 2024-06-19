import React from "react";
import Brand from "@/components/brand";
import SearchInput from "@/components/ui/search-input";

import AvatarDropdown from "./avatar-dropdown";
import AuthDialogs from "./auth-dialogs";

import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth/next";
import Link from "next/link";
import { Pencil } from "lucide-react";

const header = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex items-center mx-10 gap-8 my-2">
      <Brand />
      <SearchInput />
      {session ? (
        <>
          <Link className="flex items-center gap-2 text-gray-500" href="/write">
            <Pencil className="h-5 w-5 " />
            <span>Write</span>
          </Link>

          <AvatarDropdown user={session?.user} />
        </>
      ) : (
        <AuthDialogs />
      )}
    </div>
  );
};

export default header;
