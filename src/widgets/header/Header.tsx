"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "@/shared/ui/Logo";
import Link from "next/link";
import { Menu, Heart, ShoppingCart, User, Search } from "lucide-react";
import BurgerMenu from "@/widgets/header/BurgerMenu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="w-full bg-white">
        <div className="mx-auto max-w-280 px-4 md:px-6 lg:px-8">
          {/* ================= MOBILE ================= */}
          <div className="flex items-center justify-between py-6 md:hidden">
            <Link href="/" className="inline-flex items-center shrink-0">
              <Logo className="h-7 w-auto" />
            </Link>

            <button
              className="p-2 shrink-0"
              aria-label="Open menu"
              onClick={() => setIsOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>

          {/* ================= TABLET ================= */}
          <div className="hidden md:grid lg:hidden grid-cols-3 items-center py-6">
            <div className="justify-self-start">
              <Link href="/" className="inline-flex items-center">
                <Logo className="h-7 w-auto" />
              </Link>
            </div>

            <nav className="flex justify-center items-center gap-13 text-sm font-medium">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
                { href: "/blog", label: "Blog" },
              ].map((link) => {
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

            <div className="flex justify-self-end items-center gap-6">
              <Link href="/favorites" aria-label="Favorites">
                <Heart size={24} />
              </Link>
              <Link href="/cart" aria-label="Cart">
                <ShoppingCart size={24} />
              </Link>
              <Link href="/login" aria-label="Login">
                <User size={24} />
              </Link>
            </div>
          </div>

          {/* ================= DESKTOP ================= */}
          <div className="hidden lg:flex items-center py-6 gap-8">
            <Link href="/" className="inline-flex items-center shrink-0">
              <Logo className="h-7 w-auto" />
            </Link>

            <div className="flex min-w-0 flex-1 items-center gap-2 px-4 h-14 bg-[#F5F5F5] rounded-lg">
              <Search size={18} className="text-gray-500 shrink-0" />
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-transparent text-sm outline-none placeholder:text-gray-500"
              />
            </div>

            <nav className="flex justify-center items-center gap-13 text-base font-medium">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
                { href: "/blog", label: "Blog" },
              ].map((link) => {
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
