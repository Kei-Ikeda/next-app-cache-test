import { Box } from "@mui/material";
import getBaseUrl from "@/utils/getBaseUrl";

async function Ssg() {
  const baseUrl = getBaseUrl();
  const response = await fetch(`${baseUrl}/api/pokeApi`, {
    cache: "force-cache",
    next: { tags: ["pokeApi"] },
  });
  if (!response.ok) return undefined;
  const { data } = await response.json();
  return (
    <Box>
      <img src={data.image} />
    </Box>
  );
}

export default Ssg;
