import { Tooltip, useTheme } from "@mui/material";
import { ribbonOptions } from "./Ribbon.constants";

export const Ribbon = () => {
  const theme = useTheme();
  return (
    <section
      className="p-2"
      style={{ backgroundColor: theme.palette.background.default }}
    >
      <div
        className="rounded-3xl w-full py-1 px-3 flex items-center"
        style={{ backgroundColor: "#EDF2FA" }}
      >
        {ribbonOptions.map((item, idx) => (
          <span key={idx}>
            <Tooltip title={item.tooltip}>
              <span>{item.icon}</span>
            </Tooltip>
          </span>
        ))}
      </div>
    </section>
  );
};
