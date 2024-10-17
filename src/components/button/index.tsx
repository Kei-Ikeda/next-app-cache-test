"use client";

import getBaseUrl from "@/utils/getBaseUrl";
import axios from "axios";
import MuiButton from "@mui/material/Button";

const baseURL = getBaseUrl();

const instance = axios.create({
  baseURL,
});

function Button({ target, text }: { target: "ssg" | "isr"; text: string }) {
  const clearSsgCache = async () => {
    await instance.get("/api/pokeApi/revalidate").catch((error) => {
      throw new Error(error);
    });
  };
  const clearIsrCache = async () => {
    await instance.get("/api/pokeApi/revalidateIsr").catch((error) => {
      throw new Error(error);
    });
  };

  const onClickHandlerKeyHash = {
    ssg: clearSsgCache,
    isr: clearIsrCache,
  };

  return (
    <MuiButton
      onClick={onClickHandlerKeyHash[target]}
      variant="contained"
      color="error"
    >
      {text}
    </MuiButton>
  );
}
export default Button;
