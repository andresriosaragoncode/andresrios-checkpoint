import { env } from "@/app/env";
import { NextRequest } from "next/server";
import { seedStandups } from "../utils/seed";
const dynamic = "force-dynamic";

const POST = async (request: NextRequest) => {
  if (env.environment === "production") {
    return new Response(JSON.stringify({ error: "Not authorized" }), {
      status: 403,
    });
  }
  await seedStandups();
  return new Response(JSON.stringify({}), {
    status: 200,
  });
};

export { dynamic, POST };
