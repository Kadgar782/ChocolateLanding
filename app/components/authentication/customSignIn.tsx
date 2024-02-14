"use client";
import { usePathname } from "next/navigation";
import { SignInButton } from "@clerk/nextjs";
import { KeyRound } from "lucide-react";

export const CustomSignIn = () => {
  const pathname = usePathname();
  return (
    <SignInButton mode="modal" afterSignInUrl={pathname}>
      <button className=" flex flex-col items-center justify-center text-sm">
        <KeyRound /> login
      </button>
    </SignInButton>
  );
};
