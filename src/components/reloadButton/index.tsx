"use client";

import MuiButton from "@mui/material/Button";

function ReloadButton() {
  const onClickHandler = async () => {
    window.location.reload();
  };

  return (
    <MuiButton
      onClick={onClickHandler}
      variant="contained"
      color="primary"
      sx={{ fontWeight: "bold" }}
    >
      リロード
    </MuiButton>
  );
}
export default ReloadButton;
