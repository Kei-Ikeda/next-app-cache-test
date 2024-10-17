import { Box } from "@mui/material";
import getBaseUrl from "@/utils/getBaseUrl";

async function Isr() {
  const baseUrl = getBaseUrl();
  const response = await fetch(`${baseUrl}/api/pokeApi`, {
    next: { revalidate: 20, tags: ["pokeApiIsr"] },
  });
  if (!response.ok) return undefined;
  const { data } = await response.json();
  return (
    <Box>
      <img src={data.image} />
    </Box>
  );
}

export default Isr;
