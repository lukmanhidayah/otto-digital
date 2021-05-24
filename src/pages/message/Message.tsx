import { useMemo, useState, useRef } from "react";
import DataTable from "react-data-table-component";
import Container from "../../components/container/Container";

import {
  PencilIcon,
  TrashIcon,
  ExportIcon,
  ImportIcon,
  ArrowDownIcon,
  SendMessageIcon,
  PhoneIcon,
  FileIcon,
} from "../../assets/svg/icons";

import data from "../../constants/SampelMovieData";
import TextInput from "../../components/form/TextInput";
import ModalApp from "../../components/modal/ModalApp";

import "./Message.css";
import SecondaryButton from "../../components/form/SecondaryButton";
import TextArea from "../../components/form/TextArea";
import SelectOption from "../../components/form/SelectOption";

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

const Message = () => {
  const [isModalShow, setIsModalShow] = useState(false);
  const [isModalImportShow, setIsModalImportShow] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const uploadFileRef = useRef<HTMLInputElement>(null);

  const [dataModal, setDataModal] = useState({
    phoneNumber: "",
    functionalText: "",
    productImage: "",
    contentMessage: "",
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
        name: "Isi Pesan",
        selector: "actors",
        sortable: true,
        grow: 2,
        cell: (row: any) => <div>{row.actors}</div>,
      },
      {
        name: "Nama Penerima",
        selector: "actors",
        sortable: true,
        grow: 2,
        cell: (row: any) => <div>{row.actors}</div>,
      },
      {
        name: "Tanggal",
        selector: "year",
        sortable: true,
        center: true,
        grow: 2,
        cell: (row: any) => <div>{row.year}</div>,
      },
      {
        name: "Aksi",
        center: true,
        grow: 1,
        cell: (row: any) => {
          return (
            <div className="grid gap-x-2 grid-flow-col">
              <button className="p-1 px-2 border rounded focus:outline-none hover:bg-green-100 border-blue-800">
                <SendMessageIcon
                  width={16}
                  height={16}
                  className="stroke-current stroke-1 text-blue-900"
                />
              </button>
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
  const onToggleModalImport = () =>
    setIsModalImportShow((prevState) => !prevState);

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
        <ModalApp
          onScroll={() => {
            setIsScroll(false);
          }}
          onToggleModal={onToggleModal}
          title="Kirim Pesan"
          textSubmit="Kirim"
        >
          <>
            <TextInput
              name="phoneNumber"
              type="text"
              onChange={onChange}
              placeholder="Nomor Telepon"
              value={dataModal.phoneNumber}
            />
            <div className="mb-3">
              <h4 className="block text-gray-900 text-sm font-normal mb-2">
                Pesan Masuk
              </h4>
              <div className="flex justify-between">
                <button className="type-message-reply active rounded-l">
                  Perorangan
                </button>
                <button className="type-message-reply border-l-0 border-r-0">
                  Grup
                </button>
                <button className="type-message-reply rounded-r">Random</button>
              </div>
            </div>

            <TextInput
              name="functionalMessage"
              type="text"
              placeholder="Tujuan"
              onChange={onChange}
              value={dataModal.functionalText}
            />
            <TextArea
              name="contentMessage"
              placeholder="Isi Pesan"
              onChange={onChange}
              value={dataModal.contentMessage}
            />
            <TextInput
              name="attachmentMessage"
              accept="image/*"
              type="file"
              onChange={onChange}
              placeholder="Lampiran (Opsional)"
              value={dataModal.productImage}
            />
            <SelectOption
              onClick={() => {
                setIsScroll(true);
              }}
              isShow={isScroll}
              placeholder="Pilih Grup"
            />
          </>
        </ModalApp>
      )}

      {isModalImportShow && (
        <ModalApp
          onToggleModal={onToggleModalImport}
          title="Import Pesan"
          textSubmit="Import"
        >
          <div className="py-4">
            <label htmlFor="" className="text-base mb-2">
              Pilih File
            </label>
            <div className="flex justify-center flex-col items-center">
              <button
                onClick={() => {
                  if (uploadFileRef) {
                    uploadFileRef?.current?.click();
                  }
                }}
                className="rounded border border-gray-400 py-3 px-8 flex flex-col items-center justify-center focus:outline-none"
              >
                <FileIcon />
                <span className="text-sm text-gray-600 mt-3">Berkas</span>
              </button>
              <p className="text-gray-600 mt-5">Belum ada file yang dipilih</p>
            </div>
            <input
              ref={uploadFileRef}
              type="file"
              accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
              className="hidden"
            />
          </div>
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
              onClick={onToggleModalImport}
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
            pagination
            columns={columns}
            data={data}
            customStyles={customStyles}
          />
        </div>
      </div>
    </Container>
  );
};

export default Message;
