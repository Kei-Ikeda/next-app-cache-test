import { Box } from "@mui/material";
import getBaseUrl from "@/utils/getBaseUrl";

async function Ssr() {
  const baseUrl = getBaseUrl();
  const start = Date.now();
  const response = await fetch(`${baseUrl}/api/pokeApi`, {
    cache: "no-store",
  });
  if (!response.ok) return undefined;
  const { data } = await response.json();
  const end = Date.now();
  console.log(`Request took ${end - start} ms`);
  return (
    <Box>
      <img src={data.image} />
    </Box>
  );
}

export default Ssr;
