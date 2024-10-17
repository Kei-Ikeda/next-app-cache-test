import axios from "axios";
import type { PokeAPI } from "pokeapi-types";

const instance = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

const typeGuardEnv = (envString: string | undefined): envString is string =>
  !!envString;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: Request) {
  try {
    const result = await instance.get<PokeAPI.Pokemon>(
      `pokemon/${Math.floor(Math.random() * 151) + 1}`
    );
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const appUrl = process.env.APP_URL;
    if (!typeGuardEnv(appUrl)) {
      return new Response("Error: APP_URL is not defined", {
        status: 500,
      });
    }

    const { data } = result;
    return new Response(
      JSON.stringify({ data: { image: data.sprites.front_default } }),
      {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": appUrl,
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
      }
    );
  } catch (error) {
    console.error("Error fetching Pikachu data:", error);
    return new Response("Error fetching Pikachu data", {
      status: 500,
    });
  }
}

export const dynamic = "force-dynamic";
