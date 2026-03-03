"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X, Heart, ShoppingCart, User } from "lucide-react";

type BurgerMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function BurgerMenu({ isOpen, onClose }: BurgerMenuProps) {
  useEffect(() => {
    const { body } = document;
    const prevOverflow = body.style.overflow;

    if (!isOpen) return;

    body.style.overflow = "hidden";

    return () => {
      body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50">
      <button
        className="absolute inset-0 bg-black/40"
        aria-label="Close menu overlay"
        onClick={onClose}
      />

      <aside className="absolute right-0 top-0 h-full w-full bg-white">
        <div className="flex items-center justify-between px-4 py-6 border-b">
          <div className="text-base font-semibold">Menu</div>

          <button className="p-2" onClick={onClose} aria-label="Close menu">
            <X size={24} />
          </button>
        </div>

        <nav className="px-4 py-6 text-sm font-medium">
          <ul className="flex flex-col gap-4 text-base">
            <li>
              <Link href="/" onClick={onClose} className="block py-2">
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/category/all"
                onClick={onClose}
                className="block py-2"
              >
                Browse by category
              </Link>
            </li>

            <li className="border-t pt-4 mt-2" />

            <li>
              <Link
                href="/favorites"
                onClick={onClose}
                className="flex items-center gap-3 py-2"
              >
                <Heart size={20} />
                Favorites
              </Link>
            </li>

            <li>
              <Link
                href="/cart"
                onClick={onClose}
                className="flex items-center gap-3 py-2"
              >
                <ShoppingCart size={20} />
                Cart
              </Link>
            </li>

            <li>
              <button
                type="button"
                className="flex w-full items-center gap-3 py-2 text-left"
                onClick={onClose}
              >
                <User size={20} />
                Login
              </button>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
}
