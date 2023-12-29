export type MetaDataType = {
  rowLength: number;
  colLength: number;
};

export type SheetContextInterface = {
  toggleColorMode: () => void;
  cellHeight: string;
  fontSize: string;
  selectedCell: Array<number>;
  setSelectedCell: (args: any) => void;
  metaData: MetaDataType;
  setMetaData: (args: any) => void;
};

export type SheetCell = {
  Data: string;
  Bold: boolean;
  Color: string;
  Id: number;
  X: number;
  Y: number;
}
