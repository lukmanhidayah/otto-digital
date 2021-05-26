import { useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import Container from "../../components/container/Container";

import {} from "../../assets/svg/icons";

import data from "../../constants/SampelMovieData";
import TextInput from "../../components/form/TextInput";
import ModalApp from "../../components/modal/ModalApp";

import "./Home.css";
import SecondaryButton from "../../components/form/SecondaryButton";

const Home = () => {
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
        name: "Nomor Telepon",
        selector: "actors",
        sortable: true,
        grow: 2,
        cell: (row: any) => <div>{row.actors}</div>,
      },
      {
        name: "Perusahaan",
        selector: "actors",
        sortable: true,
        grow: 2,
        cell: (row: any) => <div>{row.actors}</div>,
      },
      {
        name: "Aksi",
        center: true,
        grow: 2,
        cell: (row: any) => {
          return (
            <div className="grid gap-x-2 grid-flow-col">
              <button className="p-1 px-2 border rounded focus:outline-none hover:bg-green-100 border-blue-800">
                {/* <SettingsIcon
                  width={16}
                  height={16}
                  className="stroke-current stroke-2 text-blue-900"
                /> */}
              </button>
              <button className="p-1 px-2 border rounded focus:outline-none hover:bg-green-100 border-green-600">
                {/* <PencilIcon className="stroke-current stroke-2" /> */}
              </button>
              <button className="p-1 px-2 border rounded focus:outline-none hover:bg-red-100 border-red-700">
                {/* <TrashIcon className="stroke-current stroke-1" /> */}
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
    <Container menuType="home">
      {isModalShow && (
        <ModalApp onToggleModal={onToggleModal} title="Tambah Akun">
          <>
            <TextInput
              name="phoneNumber"
              type="text"
              onChange={onChange}
              placeholder="Nomor Telepon"
              value={dataModal.productName}
            />
            <TextInput
              name="productStock"
              type="text"
              onChange={onChange}
              placeholder="Nama Akun"
              value={dataModal.productStock}
            />
            <TextInput
              name="productStock"
              type="text"
              onChange={onChange}
              placeholder="Pilih Perusahaan"
              value={dataModal.productStock}
            />
          </>
        </ModalApp>
      )}

      <div className="content-container px-10">
        <div className="py-6">
          <DataTable
            noHeader
            pagination
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

export default Home;

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
