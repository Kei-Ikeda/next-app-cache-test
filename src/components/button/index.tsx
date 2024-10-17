"use client";

import { useState } from "react";
import getBaseUrl from "@/utils/getBaseUrl";
import axios from "axios";
import MuiButton from "@mui/material/Button";

const baseURL = getBaseUrl();

const instance = axios.create({
  baseURL,
});

function Button({ target, text }: { target: "ssg" | "isr"; text: string }) {
  const [requested, setRequested] = useState(false);
  const clearSsgCache = async () => {
    setRequested(true);
    await instance
      .get("/api/pokeApi/revalidate")
      .catch((error) => {
        throw new Error(error);
      })
      .finally(() => {
        setRequested(false);
      });
  };
  const clearIsrCache = async () => {
    setRequested(true);
    await instance
      .get("/api/pokeApi/revalidateIsr")
      .catch((error) => {
        throw new Error(error);
      })
      .finally(() => {
        setRequested(false);
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
      color={requested ? "warning" : "error"}
    >
      {requested ? "revalidating..." : text}
    </MuiButton>
  );
}
export default Button;
