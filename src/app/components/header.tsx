// import { SidebarTrigger, Sidebar } from "@/components/ui/sidebar";
import React from "react";
// import { IoMdMenu } from "react-icons/io";

export type MenuItem = {
  name: string;
  type: "select" | "text";
  children?: MenuItem[];
};

const Header = () => {
  return (
    <div className="flex justify-center w-[100vw]">
      <div className="h-[86px] bg-white flex px-10 max-w-[1800px] items-center justify-between w-[100vw] mx-auto">
        <div className="flex gap-[14px] flex-shrink-0">
          <img
            src="/header-logo.png"
            alt=""
            className="h-[35px] flex-shrink-0"
          />
        </div>
        <button className="bg-[#ffc72c] font-bold font-ubnutu px-3 py-2">
          IFC COIN
        </button>
      </div>
    </div>
  );
};

export default Header;
