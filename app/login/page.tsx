"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { LoginForm } from "@components/LoginForm";

const Login: React.FC = () => {
  return <LoginForm />;
};

export default Login;
