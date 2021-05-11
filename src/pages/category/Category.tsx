import { useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import Container from "../../components/container/Container";

import data from "../../constants/SampelMovieData";

import "./Category.css";

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

const Category = () => {
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
        name: "Nama Produk",
        selector: "actors",
        sortable: true,
        grow: 2,
        cell: (row: any) => <div>{row.actors}</div>,
        omit: hideDirector,
      },
      {
        name: "Stok",
        selector: "runtime",
        grow: 1,
        sortable: true,
      },
      {
        name: "Harga",
        selector: "year",
        grow: 1,
        sortable: true,
      },
      {
        name: "Aksi",
        center: true,
        grow: 1,
        cell: (row: any) => {
          return (
            <div className="grid gap-x-2 grid-flow-col">
              <button className="p-2 border rounded">Edit</button>
              <button className="p-2">Remove</button>
            </div>
          );
        },
      },
    ],
    [hideDirector]
  );

  return (
    <Container menuType="category">
      <div className="content-container px-10">
        <div className="w-full flex justify-end mb-2">
          <button className="py-2 px-4 bg-blue-500 rounded text-white leading-tight focus:outline-none active:bg-blue-600 shadow">
            Tambah Kategori
          </button>
        </div>
        <DataTable striped columns={columns} data={data} customStyles={customStyles} />
      </div>
    </Container>
  );
};

export default Category;
