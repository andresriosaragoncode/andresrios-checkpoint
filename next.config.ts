import type { NextConfig } from "next";

import { envSchema } from "./envSchema";

envSchema.parse(process.env);

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
