"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Buttons from "./Button";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="flex justify-between items-center gap-10 md:gap-3 px-10 max-w-6xl mx-auto">
        <Logo />
        <NavLinks />
        <div className="hidden md:flex gap-5 items-center">
          <Image src="/assets/search.svg" alt="search" width={25} height={25} />
          <Buttons name="Login" />
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden cursor-pointer">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-20" onClick={() => setIsOpen(false)}></div>}
      
      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-[250px] bg-white shadow-lg z-30 transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out`}
      >
        <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4">
          <X size={24} className="cursor-pointer" />
        </button>
        <div className="py-16 flex flex-col space-y-1 text-black">
          <Link href="/" className="py-3 border-b border-t pl-3" onClick={() => setIsOpen(false)}>Why Pizzateria?</Link>
          <Link href="/offering" className="py-3 border-b pl-3" onClick={() => setIsOpen(false)}>Offering</Link>
          <Link href="/selection" className="py-3 border-b pl-3" onClick={() => setIsOpen(false)}>Selection</Link>
          <Link href="/contact" className="py-3 border-b pl-3" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}
