import { XCircleIcon, CheckCircleIcon } from "../assets/svg/icons/index";

const SettingColumns = [
  {
    name: "Name",
    selector: "name",
    sortable: true,
    grow: 2,
    cell: (row: any) => <div>{row.name}</div>,
  },
  {
    name: "Address",
    selector: "address",
    sortable: true,
    grow: 2,
    cell: (row: any) => <div>{row.address}</div>,
  },

  {
    name: "Join Date",
    selector: "joinDate",
    sortable: true,
    grow: 1,
    cell: (row: any) => <div>{row.joinDate}</div>,
  },
  {
    name: "Status",
    center: true,
    grow: 1,
    cell: (row: any) => {
      return (
        <div className="flex flex-col justify-center items-center">
          {row.status ? (
            <CheckCircleIcon className="stroke-current stroke-2 " />
          ) : (
            <XCircleIcon className="stroke-current stroke-2 " />
          )}
          <h4
            className={`mt-2 py-1 px-2 uppercase text-xxs leading-3 font-bold ${
              row.status ? "bg-green-100" : "bg-red-100"
            } rounded-full`}
          >
            {row.status ? "Active" : "Non Active"}
          </h4>
        </div>
      );
    },
  },
];

export default SettingColumns;
