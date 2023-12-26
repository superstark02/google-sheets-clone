import { MUIWrapperContext } from "@/app/page";
import Switch from "@mui/material/Switch";
import React, { useContext } from "react";
import Tooltip from "@mui/material/Tooltip";

const label = { inputProps: { "aria-label": "Switch demo" } };

export const ToggleTheme = () => {
  const { toggleColorMode } = useContext(MUIWrapperContext);

  return (
    <Tooltip title="Switch theme">
      <Switch {...label} onChange={toggleColorMode} />
    </Tooltip>
  );
};
