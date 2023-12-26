import { MUIWrapperContext } from "@/app/page";
import { useContext } from "react";

export const FormulaBar = () => {
  const { selectedCell, cellHeight } = useContext(MUIWrapperContext);
  return (
    <div className="w-full mt-2 flex items-center px-3">
      <span style={{ fontSize: "12px", height: cellHeight }}>
        {selectedCell
          ? `${String.fromCharCode(65 + selectedCell[1])}${selectedCell[0] + 1}`
          : null}
      </span>
    </div>
  );
};
