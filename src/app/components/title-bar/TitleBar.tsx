import { useTheme } from "@mui/material";
import { Options } from "./components/Options";
import { ToggleTheme } from "./components/ThemeToggle";

export const TitleBar = () => {
  const theme = useTheme();
  return (
    <nav
      className="w-full flex p-2 gap-2 items-center"
      style={{ backgroundColor: theme.palette.background.default }}
    >
      <img
        className="w-[40px] h-fit"
        src="https://lh3.ggpht.com/e3oZddUHSC6EcnxC80rl_6HbY94sM63dn6KrEXJ-C4GIUN-t1XM0uYA_WUwyhbIHmVMH=w300"
      />
      <div className="flex justify-between w-full" >
        <div>
          <input className="px-2 bg-inherit" value="Untitled Spreadsheet" />
          <Options />
        </div>
        <div>
          <ToggleTheme />
        </div>
      </div>
    </nav>
  );
};
