"use client";
import React from "react";
import { Button, Link } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data: userData, isPending } = authClient.useSession();
  const user = userData?.user;

  const handleLogOut = async () => {
    await authClient.signOut();
  };

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
            <Link href="/posts">Posts</Link>
          </li>

          {!user && (
            <>
              <li>
                <Link href="/auth/sign-up">Sign Up</Link>
              </li>

              <li>
                <Link href="/auth/sign-in">Sign In</Link>
              </li>
            </>
          )}
        </ul>

        {isPending ? (
          <>
            <p>User Loading,,,</p>
          </>
        ) : (
          user && (
            <div className="flex gap-2 items-center">
              <p>Welcome {user.name}</p>
              <Button variant="danger" onClick={handleLogOut}>
                Log Out
              </Button>
            </div>
          )
        )}
      </header>
    </nav>
  );
};

export default Navbar;
