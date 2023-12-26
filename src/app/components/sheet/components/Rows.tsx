import { Cell } from "./Cell";

export const Row = (props: { cells: Array<any>, latitude: number }) => {
  const { cells, latitude } = props;
  return cells.map((item, idx) => (
    <td className="border" >
      <Cell latitude={latitude} longitude={idx} />
    </td>
  ));
};
