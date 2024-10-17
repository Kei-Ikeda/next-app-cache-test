import { revalidateTag } from "next/cache";

const typeGuardEnv = (envString: string | undefined): envString is string =>
  !!envString;

// 特定のurlを再検証
// revalidatePath('/blog/post-1');
// eslint-disable-next-line
export async function GET(request: Request) {
  // console.log('revalidate is work');
  // パスを再検証
  revalidateTag("pokeApiIsr");
  await new Promise((resolve) => setTimeout(resolve, 1500));
  const appUrl = process.env.APP_URL;
  if (!typeGuardEnv(appUrl)) {
    return new Response("Error", {
      status: 500,
    });
  }
  return new Response(JSON.stringify({ data: "success" }), {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": appUrl,
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}

export const dynamic = "force-dynamic";
