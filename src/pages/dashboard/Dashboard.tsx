import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Container from "../../components/container/Container";

import "./Dashboard.css";
import URL from "../../constants/URL";
import { useLocation } from "react-router";
import SettingColumns from "../../dataTable/SettingColumns";
import FirstLetterUp from "../../utils/FirstLetterUp";

const Home = () => {
  const location = useLocation();
  const [dataDashboard, setDataDashboard] = useState({
    total: 0,
    user: [],
  });
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getDate(page);

    // eslint-disable-next-line
  }, [page, location.pathname]);

  const getDate = (page: number) => {
    fetch(
      `${URL.BASE_URL}dashboard?page=${page}&type=${FirstLetterUp(
        location.pathname
      )}`,
      {
        method: "GET",
        redirect: "follow",
      }
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result.data);
        if (result.code === 200) {
          setDataDashboard({
            total: result.data.total,
            user: result.data.user,
          });
        }
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log("error", error);
      });
  };

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  return (
    <Container menuType={`Dashboard ${FirstLetterUp(location.pathname)}`}>
      <div className="content-container px-10">
        <div className="py-6">
          <DataTable
            noHeader
            striped
            pagination
            paginationServer
            progressPending={isLoading}
            columns={SettingColumns}
            paginationTotalRows={dataDashboard.total}
            data={dataDashboard.user}
            paginationRowsPerPageOptions={[5]}
            paginationPerPage={5}
            customStyles={customStyles}
            paginationDefaultPage={1}
            onChangePage={handlePageChange}
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
