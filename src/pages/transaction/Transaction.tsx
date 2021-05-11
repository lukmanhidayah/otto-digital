import { useMemo, useState } from "react";
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
  const [hideDirector, setHideDirector] = useState(false);

  const columns = useMemo(
    () => [
      {
        name: "No",
        selector: "id",
        grow: 0,
        sortable: true,
      },
      {
        name: "Tanggal",
        selector: "year",
        sortable: true,
        grow: 1,
        omit: hideDirector,
      },
      {
        name: "Pembeli",
        selector: "actors",
        grow: 2,
        sortable: true,
        cell: (row: any) => {
          return <div className="w-40 md:w-60">
              <span>{row.actors}</span>
          </div>;
        },
      },
      {
        name: "Total Produk",
        selector: "runtime",
        grow: 1,
        hide: BreakPoint.md,
        sortable: true,
      },
      {
        name: "Total Harga",
        selector: "runtime",
        grow: 1,
        hide: BreakPoint.md,
        sortable: true,
      },
      {
        name: "Aksi",
        center: true,
        grow: 1,
        cell: (row: any) => {
          return (
            <div className="grid gap-x-2 grid-flow-col">
              <button className="p-2 border rounded border-blue-500 focus:outline-none hover:bg-blue-100">
                <EyeIcon />
              </button>
            </div>
          );
        },
      },
    ],
    [hideDirector]
  );

  return (
    <Container menuType="transaction">
      <div className="content-container px-10">
        <DataTable
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
