import { NextRequest } from "next/server";
import { seedStandups } from "../utils/seed";
const dynamic = "force-dynamic";

const POST = async (request: NextRequest) => {
  await seedStandups();
  return new Response(JSON.stringify({}), {
    status: 200,
  });
};

export { POST, dynamic };
