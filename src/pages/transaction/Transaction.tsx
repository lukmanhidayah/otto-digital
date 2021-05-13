import { useMemo } from "react";
import DataTable from "react-data-table-component";
import Container from "../../components/container/Container";

import { ReactComponent as EyeIcon } from "../../assets/svg/icons/eye.svg";

import data from "../../constants/SampelMovieData";
import BreakPoint from "../../constants/enums/BreakPoint";

const customStyles = {
  rows: {
    style: {
      minHeight: "72px", // override the row height
    },
  },
  headCells: {
    style: {
      borderTop: "1px solid #ddd",
      paddingLeft: "8px", // override the cell padding for head cells
      paddingRight: "8px",
      width: "12px",
    },
  },
  cells: {
    style: {
      paddingLeft: "8px", // override the cell padding for data cells
      paddingRight: "8px",
    },
  },
};

const Transaction = () => {
  const columns = useMemo(
    () => [
      {
        name: "No",
        selector: "id",
        grow: 0,
        minWidth: "45px",
        sortable: true,
      },
      {
        name: "Tanggal",
        selector: "year",
        sortable: true,
        grow: 0,
        hide: BreakPoint.md,
      },
      {
        name: "Pembeli",
        selector: "actors",
        grow: 2,
        sortable: true,
        cell: (row: any) => {
          return (
            <div className="w-40 md:w-60">
              <span>{row.actors}</span>
            </div>
          );
        },
      },
      {
        name: "Total Produk",
        selector: "runtime",
        grow: 1,
        center: true,
        hide: BreakPoint.lg,
        sortable: true,
      },
      {
        name: "Total Harga",
        selector: "runtime",
        grow: 1,
        right: true,
        hide: BreakPoint.sm,
        sortable: true,
      },
      {
        name: "Aksi",
        center: true,
        grow: 1,
        button: false,
        sortable: false,
        cell: (row: any) => {
          return (
            <div className="grid gap-x-2 grid-flow-col">
              <button className="transition duration-300 ease-in-out p-2 border rounded border-blue-500 focus:outline-none hover:bg-blue-100">
                <EyeIcon />
              </button>
            </div>
          );
        },
      },
    ],
    []
  );

  return (
    <Container menuType="transaction">
      <div className="content-container py-10 md:px-10">
        <DataTable
          noHeader
          responsive
          striped
          columns={columns}
          data={data}
          customStyles={customStyles}
        />
      </div>
    </Container>
  );
};

export default Transaction;
