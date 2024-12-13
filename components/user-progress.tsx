import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { InfinityIcon } from "lucide-react";

type Props = {
  activeCourse: {imageSrc : string; title : string};
  hearts:number;
  points:number;
  hasActiveSubscrption:boolean;
};

export const UserProgress = ({
  activeCourse,
  points,
  hearts,
  hasActiveSubscrption,
  }: Props) => {
  return (
    <div className="flex items-center justify-between gap-x-2 w-full">
      <Link href="/courses">
        <Button variant="ghost"> 
          <Image
            src={activeCourse.imageSrc}
            alt={activeCourse.title}
            className="rounded-md border"
            width={32}
            height={32}
            />
        </Button>
      </Link>
      <Link href="/shop">
        <Button variant="ghost" className="text-orange-500">
          <Image src="/points.svg" alt="Points" width={28} height={28} />
          {points}
        </Button>
      </Link>
      <Link href="/shop">
        <Button variant="ghost" className="text-rose-500">
          <Image src="/heart.svg" alt="Hearts" width={22} height={22} className="mr-2" />
          {hasActiveSubscrption 
            ? <InfinityIcon className="h-4 w-4 storke-[3]"/> 
            : hearts
          }          
        </Button>
      </Link>
    </div>
  );
};