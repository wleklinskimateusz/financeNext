/* eslint-disable react/jsx-key */
import React, { FC } from "react";
import { useTable } from "react-table";
import { IExpense } from "../../../types/IExpense";

import styles from "./Table.module.scss";
import { queryClient } from "../../../pages/_app";

interface ITable {
  rawData: IExpense[];
  onClick: (ex: IExpense) => void;
}

interface IColumn {
  Header: string;
  accessor: string;
}

function getColumn(name: string) {
  const output = {
    Header: name,
    accessor: name.toLowerCase(),
  };
  return output;
}

function getColumns() {
  return ["Name", "Category", "Cost", "Merchant", "Date"];
}

export const Table: FC<ITable> = ({ rawData, onClick }) => {
  const columns = React.useMemo(
    () => getColumns().map((c) => getColumn(c)),
    []
  );

  const data = React.useMemo(() => rawData, [rawData]);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<any>({
      columns,
      data,
    });

  // Render the UI for your table
  return (
    <table className={styles.table} {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr
              onClick={() => {
                onClick(row.original.self);
                queryClient.refetchQueries("expense");
              }}
              {...row.getRowProps()}
            >
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
