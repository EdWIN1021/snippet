import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const WhoToFollow = () => {
  return (
    <div className="flex flex-col gap-8">
      <h4 className="text-lg font-semibold">Who to follow</h4>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-5">
          <div className="flex items-start gap-3 flex-1">
            <Avatar className="cursor-pointer">
              <AvatarImage
                src={"https://github.com/shadcn.png"}
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div>
              <span className="font-semibol">Edwin Shi</span>
              <p className="text-[13px] text-[rgb(107,107,107)]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>

          <Button className="rounded-full border" variant={"ghost"}>
            Follow
          </Button>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-start gap-3 flex-1">
            <Avatar className="cursor-pointer">
              <AvatarImage
                src={"https://github.com/shadcn.png"}
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div>
              <span className="font-semibol">Edwin Shi</span>
              <p className="text-[13px] text-[rgb(107,107,107)]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>

          <Button className="rounded-full border" variant={"ghost"}>
            Follow
          </Button>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-start gap-3 flex-1">
            <Avatar className="cursor-pointer">
              <AvatarImage
                src={"https://github.com/shadcn.png"}
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div>
              <span className="font-semibol">Edwin Shi</span>
              <p className="text-[13px] text-[rgb(107,107,107)]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>

          <Button className="rounded-full border" variant={"ghost"}>
            Follow
          </Button>
        </div>
      </div>

      <Link className="text-[rgb(26,137,23)]" href={""}>
        See more suggestions
      </Link>
    </div>
  );
};

export default WhoToFollow;
