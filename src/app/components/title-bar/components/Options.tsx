import React from "react";
import { options } from "./Options.constants";
import { Typography } from "@mui/material";

const color = '#202124';

export const Options = () => {
  return (
    <section>
      <div className="flex gap-2" >
        {options.map((item, idx) => (
          <span className="hover:bg-slate-300 rounded-md px-2 cursor-pointer" key={idx} >
            <Typography variant="body2" style={{color: color}} >{item.label}</Typography>
          </span>
        ))}
      </div>
    </section>
  );
};
