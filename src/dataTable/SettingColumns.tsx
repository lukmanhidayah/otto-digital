import { XCircleIcon, CheckCircleIcon } from "../assets/svg/icons/index";
import FormatDate from "../utils/FormatDate";

const SettingColumns = [
  {
    name: "Name",
    selector: "name",
    sortable: false,
    grow: 2,
    cell: (row: any) => <div>{row.name}</div>,
  },
  {
    name: "Address",
    selector: "address",
    sortable: false,
    grow: 2,
    cell: (row: any) => <div>{row.address}</div>,
  },

  {
    name: "Join Date",
    selector: "joinDate",
    sortable: false,
    grow: 1,
    cell: (row: any) => <div>{FormatDate(new Date(row.joinDate))}</div>,
  },
  {
    name: "Status",
    center: true,
    sortable: false,
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
