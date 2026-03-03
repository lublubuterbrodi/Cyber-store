"use client";

import Link from "next/link";
import {
  Smartphone,
  Laptop,
  Watch,
  Camera,
  Headphones,
  Gamepad2,
} from "lucide-react";

const items = [
  { label: "Phones", href: "/phones", Icon: Smartphone },
  { label: "Computers", href: "/computers", Icon: Laptop },
  { label: "Smart Watches", href: "/smart-watches", Icon: Watch },
  { label: "Cameras", href: "/cameras", Icon: Camera },
  { label: "Headphones", href: "/headphones", Icon: Headphones },
  { label: "Gaming", href: "/gaming", Icon: Gamepad2 },
];

export default function SubNav() {
  return (
    <div className="hidden md:block w-full bg-[#111]">
      <div className="mx-auto max-w-295">
        <nav className="grid grid-cols-6 items-center h-12 text-sm text-[#979797]">
          {items.map(({ label, href, Icon }, index) => (
            <Link
              key={label}
              href={href}
              className={[
                "relative flex items-center justify-center gap-2 h-full transition-colors active:text-white",
                index !== 0
                  ? "before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-6 before:w-px before:bg-[#979797]"
                  : "",
              ].join(" ")}
            >
              <Icon className="size-4.5 lg:size-6" />
              <span className="whitespace-nowrap">{label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
