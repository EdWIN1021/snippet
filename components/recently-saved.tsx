import Link from "next/link";
import { Avatar } from "./ui/avatar";

const RecentlySaved = () => {
  return (
    <div>
      <h4>Recently Saved</h4>

      <div>
        <div className="flex gap-2 mb-2">
          <Avatar />
          <span>Edwin Shi</span>
        </div>

        <p className="font-semibold">
          The Brain Science Behind Aging and Forgetting The Brain Science Behind
          Aging and Forgetting
        </p>
      </div>

      <Link className="text-[rgb(26,137,23)]" href={""}>
        See the full list
      </Link>
    </div>
  );
};

export default RecentlySaved;
