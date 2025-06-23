"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

import { useState } from "react";
import Sidebar from "./SideBar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const MobileMenu = () => <Sidebar setIsOpen={setIsOpen} open={isOpen} />;

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const openSidebar = () => {
    setIsOpen(true);
  };

  return (
    <nav className=" w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60  top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-end">
          {/* Logo/Brand */}
          <div className="flex-shrink-0 flex  items-center gap-2">
            <Link
              href="/"
              className="text-3xl font-bold text-primary hover:text-primary/80 transition-colors"
            >
              Techpool X
            </Link>
          </div>

          <div className=" md:hidden flex items-center gap-4">
            {isOpen ? (
              <Button variant={"default"} onClick={closeSidebar}>
                <X className="font-bold" />
              </Button>
            ) : (
              <Button
                size={"icon"}
                variant={"default"}
                className="p-2"
                onClick={openSidebar}
              >
                <Menu size={88} strokeWidth={3} />
              </Button>
            )}
            <div>
              <div className="absolute h-full left-0 top-16 w-full ease-in-out slide-in-from-left slide-out-to-left right-0 bottom-0">
                {isOpen && <MobileMenu />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
