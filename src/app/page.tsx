"use client";
import { ThemeOptions, ThemeProvider, createTheme } from "@mui/material/styles";
import { createContext, useEffect, useMemo, useState } from "react";
import { FormulaBar } from "./components/formula-bar/FormulaBar";
import { Ribbon } from "./components/ribbon/Ribbon";
import { Sheet } from "./components/sheet/Sheet";
import { SheetsBar } from "./components/sheets-bar/SheetsBar";
import { TitleBar } from "./components/title-bar/TitleBar";
import { themes } from "./theme";
import { MetaDataType, SheetContextInterface } from "./type";
import { getData } from "./api";

//table data -> WeakMap()
//zoom in/out
//select multiple
//sheets bar

export const MUIWrapperContext = createContext<SheetContextInterface>({
  toggleColorMode: () => {},
  cellHeight: "25px",
  fontSize: "12px",
  selectedCell: [0, 0],
  setSelectedCell: (args: any) => {},
  metaData: {
    rowLength: 0,
    colLength: 0,
  },
  setMetaData: (args: any) => {},
});

export default function Home() {
  const [mode, setMode] = useState<ThemeOptions>(themes.light);
  const [selectedCell, setSelectedCell] = useState([0, 0]);
  const [metaData, setMetaData] = useState<MetaDataType>({
    rowLength: 0,
    colLength: 0,
  });

  const muiWrapperUtils = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) =>
          prevMode.palette?.mode === "light" ? themes.dark : themes.light
        );
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme(mode), [mode]);

  useEffect(()=>{
    getData();
  })

  return (
    <MUIWrapperContext.Provider
      value={{
        ...muiWrapperUtils,
        cellHeight: "25px",
        fontSize: "10px",
        selectedCell,
        setSelectedCell,
        metaData,
        setMetaData,
      }}
    >
      <ThemeProvider theme={theme}>
        <main>
          <TitleBar />
          <Ribbon />
          <FormulaBar />
          <Sheet />
          <SheetsBar />
        </main>
      </ThemeProvider>
    </MUIWrapperContext.Provider>
  );
}
