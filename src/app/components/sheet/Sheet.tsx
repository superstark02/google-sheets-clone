import { MUIWrapperContext } from "@/app/page";
import { generateId, inRange } from "@/app/utils";
import { Typography, useTheme } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useCallback, useContext, useEffect, useMemo } from "react";
import { Column } from "./components/Column";
import { Row } from "./components/Rows";
import { GET_ALL_DATA, getAllData } from "@/app/api";
import { SheetCell } from "@/app/type";

export const Sheet = () => {
  //context
  const { fontSize, selectedCell, setSelectedCell, metaData, setMetaData } =
    useContext(MUIWrapperContext);

  //theme
  const theme = useTheme();

  const { data, isLoading, isError } = useQuery({
    queryKey: [GET_ALL_DATA],
    queryFn: getAllData,
  });

  const resData: SheetCell[] = data as any;

  //create sheet
  const cache: Array<Array<SheetCell>> = useMemo(() => {
    if (isLoading) {
      return [[]];
    }

    //creating sheet
    const sheet = Array(10).fill(
      Array(10).fill({
        Data: "",
        Bold: false,
        Color: "",
        Id: "",
      })
    );

    //filling data if any
    resData?.forEach((item) => {
      const { X, Y, Data, Bold, Color, Id } = item;
      sheet[X][Y] = {
        Data,
        Bold,
        Color,
        Id,
      };
    });
    return sheet;
  }, [resData, isLoading, isError]);

  const keyBordEvents = useCallback(
    (e: any) => {
      if (!e.code) {
        return;
      }

      setSelectedCell((val: [number, number]) => {
        let newPosition = [val[0], val[1]];
        const x = val[0],
          y = val[1];

        if (e.code === "Enter" || e.code === "ArrowDown") {
          newPosition = [x + 1, y];
        } else if (e.code === "ArrowUp") {
          newPosition = [x - 1, y];
        } else if (e.code === "ArrowRight") {
          newPosition = [x, y + 1];
        } else if (e.code === "ArrowLeft") {
          newPosition = [x, y - 1];
        }

        if (
          inRange(
            newPosition[0],
            newPosition[1],
            metaData.rowLength,
            metaData.colLength
          )
        ) {
          const element = window?.document?.getElementById(
            String(generateId(newPosition[0], newPosition[1]))
          );
          element?.focus();
          return newPosition;
        }

        return val;
      });
    },
    [metaData]
  );

  const select = (e: any) => {
    //console.log(e);
  };

  useEffect(() => {
    setMetaData({
      rowLength: cache.length,
      colLength: cache[0].length,
    });
  }, [cache]);

  if(isLoading){
    return 'Loading...'
  }

  return (
    <section>
      <div
        onKeyDown={keyBordEvents}
        onDrag={select}
        className="max-w-[100vw] max-h-[90vh] overflow-scroll"
      >
        <table className="border-collapse border">
          <tr
            className="sticky top-0 border-b border-b-solid"
            style={{ backgroundColor: theme.palette.primary.light }}
          >
            <td></td>
            <Column columnNames={cache[0]} />
          </tr>
          {cache.map((item, idx) => (
            <tr>
              <td
                className="min-w-10 text-center sticky left-0 border"
                style={{
                  backgroundColor:
                    selectedCell[0] === idx
                      ? "#D3E3FD"
                      : theme.palette.primary.light,
                }}
              >
                <Typography style={{ fontSize }}>{idx + 1}</Typography>
              </td>
              <Row cells={item} latitude={idx} key={idx + 1} />
            </tr>
          ))}
        </table>
      </div>
    </section>
  );
};
