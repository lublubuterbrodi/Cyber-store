"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "@/shared/ui/Logo";
import { Menu, Heart, ShoppingCart, User, Search } from "lucide-react";
import BurgerMenu from "@/widgets/header/BurgerMenu";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <>
      <header className="w-full bg-white">
        <div className="mx-auto max-w-280 px-4 md:px-6 lg:px-8">
          {/* ============ MOBILE + TABLET (<lg) ============ */}
          <div className="lg:hidden py-6">
            {/* top row */}
            <div className="flex items-center justify-between gap-4">
              <Link href="/" className="inline-flex items-center shrink-0">
                <Logo className="h-7 w-auto" />
              </Link>

              {/* tablet search only */}
              <div className="hidden md:flex min-w-0 flex-1 items-center gap-2 px-4 h-12 bg-[#F5F5F5] rounded-lg">
                <Search size={18} className="text-gray-500 shrink-0" />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-gray-500"
                />
              </div>

              <button
                className="p-2 shrink-0"
                aria-label="Open menu"
                onClick={() => setIsOpen(true)}
              >
                <Menu size={24} />
              </button>
            </div>

            {/* optional: if you want search on mobile too, uncomment this */}
            {/*
            <div className="mt-4 flex items-center gap-2 px-4 h-12 bg-[#F5F5F5] rounded-lg md:hidden">
              <Search size={18} className="text-gray-500 shrink-0" />
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-transparent text-sm outline-none placeholder:text-gray-500"
              />
            </div>
            */}
          </div>

          {/* ============ DESKTOP (lg+) ============ */}
          <div className="hidden lg:flex items-center py-6 gap-8">
            <Link href="/" className="inline-flex items-center shrink-0">
              <Logo className="h-7 w-auto" />
            </Link>

            <div className="hidden md:flex w-full max-w-100 mx-auto items-center gap-2 px-4 h-12 bg-[#F5F5F5] rounded-lg">
              <Search size={18} className="text-gray-500 shrink-0" />
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-transparent text-sm outline-none placeholder:text-gray-500"
              />
            </div>

            <nav className="flex justify-center items-center gap-13 text-base font-medium">
              {links.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={
                      isActive
                        ? "text-black"
                        : `
                          text-[#979797]
                          bg-linear-to-r
                          from-black
                          to-black
                          bg-no-repeat
                          bg-size-[0%_100%]
                          bg-left
                          bg-clip-text
                          hover:bg-size-[100%_100%]
                          hover:text-transparent
                          transition-all
                          duration-300
                        `
                    }
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-6 ml-auto">
              <Link href="/favorites" aria-label="Favorites">
                <Heart size={28} />
              </Link>
              <Link href="/cart" aria-label="Cart">
                <ShoppingCart size={28} />
              </Link>
              <Link href="/login" aria-label="Login">
                <User size={28} />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <BurgerMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
