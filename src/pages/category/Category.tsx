import { useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import Container from "../../components/container/Container";

import { ReactComponent as PencilIcon } from "../../assets/svg/icons/pencil.svg";
import { ReactComponent as TrashIcon } from "../../assets/svg/icons/trash.svg";

import data from "../../constants/SampelMovieData";

import "./Category.css";
import Modal from "../../components/modal/Modal";
import TextInput from "../../components/form/TextInput";
import TextArea from "../../components/form/TextArea";

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
  const [isModalShow, setIsModalShow] = useState(false);

  const [dataModal, setDataModal] = useState({
    name: "",
    description: "",
  });

  const columns = useMemo(
    () => [
      {
        name: "No",
        selector: "id",
        grow: 0,
        sortable: true,
      },
      {
        name: "Nama Kategori",
        selector: "actors",
        sortable: true,
        grow: 2,
        cell: (row: any) => <div>{row.actors}</div>,
      },
      {
        name: "Deskripsi",
        selector: "runtime",
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
              <button className="p-2 px-3 border rounded border-green-500 focus:outline-none hover:bg-green-100">
                <PencilIcon />
              </button>
              <button className="p-2 px-3 border rounded border-red-500 focus:outline-none hover:bg-red-100">
                <TrashIcon />
              </button>
            </div>
          );
        },
      },
    ],
    []
  );

  return (
    <Container menuType="category">
      {isModalShow && (
        <Modal
          type="full-width"
          className="w-full md:w-2/3 lg:w-1/2"
          onBackgroundClick={() => {
            setIsModalShow((prevState) => !prevState);
          }}
          animation="fadeIn"
        >
          <div className="w-full p-5 py-4">
            <h3 className="text-left font-bold border-b text-xl pb-2  ">
              Tambah Kategori
            </h3>

            <div className="py-2">
              <TextInput
                name="categoryName"
                type="text"
                placeholder="Nama"
                value={dataModal.name}
              />
              <TextArea
                name="categoryDescription"
                placeholder="Deskripsi"
                value={dataModal.description}
              />
              <div className="flex justify-end border-t mt-5 pt-2">
                <div />
                <button className="py-2 px-4 focus:outline-none bg-white text-blue-800 border border-blue-800 active:bg-blue-50 active:text-blue-900 rounded uppercase font-bold text-sm">
                  Batal
                </button>
                <button className="py-2 px-4 focus:outline-none bg-blue-800 text-white rounded uppercase font-bold text-sm ml-5 active:bg-blue-900 shadow">
                  Simpan
                </button>
              </div>
            </div>
          </div>
        </Modal>
      )}
      <div className="content-container px-10">
        <div className="w-full flex justify-end mb-2">
          <button
            onClick={() => {
              setIsModalShow((prevState) => !prevState);
            }}
            className="py-2 px-4 bg-blue-800 rounded text-white leading-tight focus:outline-none active:bg-blue-900 shadow"
          >
            Tambah Kategori
          </button>
        </div>
        <DataTable
          striped
          columns={columns}
          data={data}
          customStyles={customStyles}
        />
      </div>
    </Container>
  );
};

export default Category;
