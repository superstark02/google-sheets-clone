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
