import { MUIWrapperContext } from "@/app/page";
import { useContext } from "react";

export const Cell = (props: { latitude: number; longitude: number }) => {
  const { latitude, longitude } = props;
  const { fontSize, selectedCell, cellHeight } = useContext(MUIWrapperContext);

  return (
    <input
      className="w-[100px] h-[20px] p-1"
      style={{
        fontSize,
        outline: 'none',
        height: cellHeight,
      }}
      onMouseDown={(e) => {
        if (selectedCell[0] === latitude && selectedCell[1] === longitude) {
          return;
        }
        e.preventDefault();
      }}
    />
  );
};
