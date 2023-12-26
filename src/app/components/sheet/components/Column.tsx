import { MUIWrapperContext } from "@/app/page";
import { Typography } from "@mui/material";
import { useContext } from "react";

export const Column = (props: { columnNames: Array<any> }) => {
  const { columnNames } = props;
  const { fontSize, selectedCell } = useContext(MUIWrapperContext);

  return columnNames.map((item, idx) => (
    <td
      className="text-center border p-1"
      style={{ backgroundColor: selectedCell[1] === idx ? "#D3E3FD" : "" }}
    >
      <Typography style={{ fontSize }}>
        {String.fromCharCode(65 + idx)}
      </Typography>
    </td>
  ));
};
