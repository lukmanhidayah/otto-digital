import { useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import Container from "../../components/container/Container";

import {
  PencilIcon,
  TrashIcon,
  ExportIcon,
  ImportIcon,
  ArrowDownIcon,
  PhoneIcon,
} from "../../assets/svg/icons";

import data from "../../constants/SampelMovieData";
import TextInput from "../../components/form/TextInput";
import ModalApp from "../../components/modal/ModalApp";

import "./Reply.css";
import SecondaryButton from "../../components/form/SecondaryButton";

const customStyles = {
  rows: {
    style: {
      border: "1px solid #eee",
      minHeight: "72px", // override the row height
    },
  },
  headCells: {
    style: {
      borderTop: "1px solid #ddd",
      backgroundColor: "#012965",
      color: "white",
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

const Reply = () => {
  const [isModalShow, setIsModalShow] = useState(false);

  const [dataModal, setDataModal] = useState({
    productName: "",
    productStock: "",
    productPrice: "",
    productImage: "",
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
        name: "Pesan Masuk",
        selector: "actors",
        sortable: true,
        grow: 2,
        cell: (row: any) => <div>{row.actors}</div>,
      },
      {
        name: "Pesan Balasan",
        selector: "actors",
        sortable: true,
        grow: 2,
        cell: (row: any) => <div>{row.actors}</div>,
      },
      {
        name: "Tingkat Kecocokan",
        selector: "year",
        sortable: true,
        center: true,
        grow: 2,
        cell: (row: any) => <div>{row.year}</div>,
      },
      {
        name: "Aksi",
        center: true,
        grow: 2,
        cell: (row: any) => {
          return (
            <div className="grid gap-x-2 grid-flow-col">
              <button className="p-1 px-2 border rounded focus:outline-none hover:bg-green-100 border-green-600">
                <PencilIcon className="stroke-current stroke-2" />
              </button>
              <button className="p-1 px-2 border rounded focus:outline-none hover:bg-red-100 border-red-700">
                <TrashIcon className="stroke-current stroke-1" />
              </button>
            </div>
          );
        },
      },
    ],
    []
  );

  const onToggleModal = () => setIsModalShow((prevState) => !prevState);

  const onChange = (e: { target: { name: string; value: any } }) => {
    const { name, value } = e.target;
    console.log(value);
    setDataModal((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Container menuType="reply">
      {isModalShow && (
        <ModalApp onToggleModal={onToggleModal} title="Tambah Produk">
          <>
            <TextInput
              name="productName"
              type="text"
              onChange={onChange}
              placeholder="Nama Produk"
              value={dataModal.productName}
            />
            <TextInput
              name="productStock"
              type="number"
              onChange={onChange}
              placeholder="Stok"
              min={1}
              value={dataModal.productStock}
            />
            <TextInput
              currency
              name="productPrice"
              type="number"
              placeholder="Harga"
              onChange={onChange}
              min={1}
              value={dataModal.productPrice}
            />
            <TextInput
              name="productImage"
              accept="image/*"
              type="file"
              onChange={onChange}
              placeholder="Gambar Produk"
              value={dataModal.productImage}
            />
          </>
        </ModalApp>
      )}

      <div className="content-container px-10">
        <div className="flex">
          {/* left header */}
          <div className="w-full flex flex-row mb-2">
            <div
              className="header-button rounded-r-none px-3"
              onClick={onToggleModal}
            >
              <PhoneIcon />
            </div>
            <div
              className="max-w-1/2 w-1/3 border border-gray-300 px-2 py-0 flex items-center cursor-pointer"
              onClick={onToggleModal}
            >
              <p className="text-sm">Bot 1</p>
            </div>
            <div
              className="border border-l-0 border-gray-300 px-2 flex items-center rounded-r cursor-pointer"
              onClick={onToggleModal}
            >
              <ArrowDownIcon
                width={16}
                height={16}
                className="stroke-current stroke-2 text-gray-500"
              />
            </div>
          </div>
          {/* end of left header */}

          {/* right header */}
          <div className="right-header-container">
            <SecondaryButton
              className="mr-4 grid grid-flow-col gap-3"
              onClick={onToggleModal}
            >
              <ImportIcon /> Import
            </SecondaryButton>
            <SecondaryButton
              className="mr-4 grid grid-flow-col gap-3"
              onClick={onToggleModal}
            >
              <ExportIcon /> Export
            </SecondaryButton>
            <SecondaryButton onClick={onToggleModal}>
              Buat Pesan
            </SecondaryButton>
          </div>
        </div>
        <div className="py-6">
          <DataTable
            noHeader
            striped
            columns={columns}
            data={data}
            customStyles={customStyles}
          />
        </div>
      </div>
    </Container>
  );
};

export default Reply;
