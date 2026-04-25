import React from "react";
import { Link } from "@heroui/react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <p className="text-xl font-bold">CS-1-M8</p>
        </div>

        <ul className="flex items-center gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/models">Models</Link>
          </li>

          <li>
            <Link href="/auth/sign-up">Sign Up</Link>
          </li>

          <li>
            <Link href="/auth/sign-in">Sign In</Link>
          </li>
        </ul>
      </header>
    </nav>
  );
};

export default Navbar;
