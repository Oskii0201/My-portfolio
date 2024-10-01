"use client";
import myImage from "../../../public/images/my image.jpg";
import Image from "next/image";
import { Navigation } from "@/app/components/Sidebar/Navigation";
import { Socials } from "@/app/components/Sidebar/Socials";
export const Sidebar: React.FC = () => {
  return (
    <aside className="fixed flex h-screen w-24 flex-col justify-between border-r border-[#272727] p-4 md:w-48 md:p-6 lg:w-72 lg:p-10">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <Image src={myImage} alt="My image" className="m-auto rounded-xl" />
          <div className="flex items-center justify-center rounded-xl bg-[#062D1D] px-1 py-1 text-green-400 md:px-3">
            <span className="mr-2 h-2 w-2 rounded-full bg-green-400"></span>
            <span className="flex items-center text-[10px] md:text-base">
              Available<span className="hidden lg:block">&nbsp;for Work</span>
            </span>
          </div>
        </div>
        <Navigation />
      </div>
      <Socials />
    </aside>
  );
};
