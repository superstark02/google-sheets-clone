import { Typography, useTheme } from "@mui/material";

export const SheetsBar = () => {
  const theme = useTheme();
  return (
    <div
      className="sticky bottom-0 px-4 py-4"
      style={{ backgroundColor: theme.palette.background.default }}
    >
      <Typography variant="body2" >Sheet</Typography>
    </div>
  );
};
