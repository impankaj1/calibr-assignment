"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";

import { useState } from "react";
import Sidebar from "./SideBar";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const openSidebar = () => {
    setIsOpen(true);
  };

  return (
    <nav className=" w-full  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60  top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 ">
        <div className="flex justify-between h-24 items-end lg:items-center">
          {/* Logo/Brand */}
          <div className="flex gap-8">
            <Link
              href="/"
              className="text-3xl font-bold text-primary hover:text-primary/80 transition-colors"
            >
              <Image
                height={150}
                width={150}
                src={
                  "https://cdn.prod.website-files.com/61800161ed9edf6bdd5c6c4d/62d80ee516e45986ef20f689_logo-techpool-x-webflow-template.svg"
                }
                alt="Techpool Logo"
              />{" "}
            </Link>
            <div className="lg:flex gap-4 hidden text-lg font-medium text-gray-500">
              <h2>Home</h2>
              <h2>About</h2>
              <h2>Pricing</h2>
              <h2>Pages</h2>
              <h2>Cart(0)</h2>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <h2 className="text-gray-800 text-xl lg:hidden">Cart(0)</h2>
            <Button className="p-3 lg:p-4 hidden md:flex">
              Get Started{" "}
              <span>
                <ArrowRight />
              </span>
            </Button>
            <div className=" lg:hidden flex items-center  gap-x-4">
              {isOpen ? (
                <Button className="px-8 py-3" onClick={closeSidebar}>
                  <X size={88} strokeWidth={3} className="font-bold" />
                </Button>
              ) : (
                <Button
                  variant={"default"}
                  className="px-6 py-3"
                  onClick={openSidebar}
                >
                  <Menu size={88} strokeWidth={3} />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="fixed h-[100vh] left-0 top-16 w-full ease-in-out slide-in-from-left slide-out-to-left right-0 bottom-0">
        {<Sidebar setIsOpen={setIsOpen} open={isOpen} />}
      </div>
    </nav>
  );
};

export default Navbar;
