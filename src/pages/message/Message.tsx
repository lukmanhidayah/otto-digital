import { useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import Container from "../../components/container/Container";

import { ReactComponent as PencilIcon } from "../../assets/svg/icons/pencil.svg";
import { ReactComponent as TrashIcon } from "../../assets/svg/icons/trash.svg";

import data from "../../constants/SampelMovieData";
import TextInput from "../../components/form/TextInput";
import ModalApp from "../../components/modal/ModalApp";

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

const Message = () => {
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
        name: "Nama Produk",
        selector: "actors",
        sortable: true,
        grow: 2,
        cell: (row: any) => <div>{row.actors}</div>,
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
    <Container menuType="message">
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
        <div className="w-full flex justify-end mb-2">
          <button
            className="py-2 px-4 bg-blue-800 rounded text-white leading-tight focus:outline-none active:bg-blue-900 shadow"
            onClick={onToggleModal}
          >
            Tambah Produk
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

export default Message;
