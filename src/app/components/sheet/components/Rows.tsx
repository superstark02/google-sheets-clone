import { useContext } from "react";
import { Cell } from "./Cell";
import { MUIWrapperContext } from "@/app/page";
import { generateId, generateInputId } from "@/app/utils";
import { SheetCell } from "@/app/type";

export const Row = (props: { cells: Array<SheetCell>; latitude: number }) => {
  const { cells, latitude } = props;
  const { setSelectedCell, fontSize, selectedCell } =
    useContext(MUIWrapperContext);

  const handleSelected = (longitude: number) => {
    if (selectedCell[0] !== latitude && selectedCell[1] !== longitude) {
      //api call to save data
      //create and edit object
      //add that object in debounce
      //add API call on debounce
      document
        .getElementById(generateInputId(selectedCell[0], selectedCell[1]))
        ?.blur();
    }
    setSelectedCell([latitude, longitude]);
  };

  return cells.map((item, idx) => (
    <td
      className="border"
      style={{
        border:
          latitude === selectedCell[0] && idx === selectedCell[1]
            ? "solid 2px #2196f3"
            : "",
      }}
      onClick={(e) => {
        e.stopPropagation();
        handleSelected(idx);
      }}
      id={generateId(latitude,idx).toString()}
    >
      <Cell cellData={item} latitude={latitude} longitude={idx} />
    </td>
  ));
};
