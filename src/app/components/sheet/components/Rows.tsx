import { useContext } from "react";
import { Cell } from "./Cell";
import { MUIWrapperContext } from "@/app/page";
import { generateId } from "@/app/utils";

export const Row = (props: { cells: Array<any>; latitude: number }) => {
  const { cells, latitude } = props;
  const { setSelectedCell, fontSize, selectedCell } =
    useContext(MUIWrapperContext);

  const handleSelected = (longitude: number) => {
    if (selectedCell[0] !== latitude || selectedCell[1] !== longitude) {
      //api call to save data
      document
        .getElementById(generateId(selectedCell[0], selectedCell[1]))
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
      onClickCapture={(e) => {
        e.stopPropagation();
        handleSelected(idx);
      }}
      id={generateId(latitude,idx)}
    >
      <Cell latitude={latitude} longitude={idx} />
    </td>
  ));
};
