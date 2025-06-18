"use client";

import { signIn } from "next-auth/react";

export default function Home() {
  const formSubmitted = async () => {
    await signIn("credentials", {
      redirect: false,
    });
  };

  return <div onClick={formSubmitted}>Welcome</div>;
}
