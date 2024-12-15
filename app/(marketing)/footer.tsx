//bytequest/app/(marketing)/footer.tsx
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button size="lg" variant="ghost" className="w-full">
          <Image src="/yellow.svg" alt="Array/List" height={40} width={40} className="mr-4 rounded-md" />
          English
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image src="/blue.svg" alt="Search" height={40} width={40} className="mr-4 rounded-md" />
          Spanish
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image src="/dirt.svg" alt="Stack/heap" height={40} width={40} className="mr-4 rounded-md" />
          French
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image src="/stone.svg" alt="Dynamic Programming" height={40} width={40} className="mr-4 rounded-md" />
          Japanese
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image src="/green.svg" alt="Greedy" height={40} width={40} className="mr-4 rounded-md" />
          German
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image src="/black.svg" alt="Graph" height={40} width={40} className="mr-4 rounded-md" />
          Chinese
        </Button>

      </div>
    </footer>
  );
};