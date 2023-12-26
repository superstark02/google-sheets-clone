import { MUIWrapperContext } from "@/app/page";
import { generateId } from "@/app/utils";
import { useContext, useState } from "react";

export const Cell = (props: { latitude: number; longitude: number }) => {
  const { latitude, longitude } = props;
  const { setSelectedCell, fontSize, selectedCell } = useContext(MUIWrapperContext);
  const [border, setBorder] = useState()

  const handleSelected = () => {
    if(latitude !== selectedCell[0] || longitude !== selectedCell[1]){
      //set border
    }
  }

  return (
    <input
      id={generateId(latitude, longitude)}
      onFocus={() => setSelectedCell([latitude, longitude])}
      className="w-[100px] h-[20px] p-1"
      style={{ fontSize }}
      defaultValue=""
      onClick={handleSelected}
    />
  );
};
