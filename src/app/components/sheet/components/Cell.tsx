import { MUIWrapperContext } from "@/app/page";
import { SheetCell } from "@/app/type";
import { generateInputId } from "@/app/utils";
import { useContext } from "react";

export const Cell = (props: {
  latitude: number;
  longitude: number;
  cellData: SheetCell;
}) => {
  const { latitude, longitude, cellData } = props;
  const { fontSize, selectedCell, cellHeight } = useContext(MUIWrapperContext);

  return (
    <input
      className="w-[100px] h-[20px] p-1"
      style={{
        fontSize,
        outline: "none",
        height: cellHeight,
      }}
      id={generateInputId(latitude, longitude)}
      onMouseDown={(e) => {
        if (selectedCell[0] === latitude && selectedCell[1] === longitude) {
          return;
        }
        e.preventDefault();
      }}
      defaultValue={cellData.Data}
    />
  );
};
