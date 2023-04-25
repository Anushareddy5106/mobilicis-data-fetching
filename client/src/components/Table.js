import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactPaginate from "react-paginate";
import NextBtn from "../assets/right.png";
import PrevBtn from "../assets/left.png";
import "./style.css";
import Loader from "./Loader";

const Table = ({ id, content, data, loading }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const itemsPerPage = 10;
  const pageCount = Math.ceil(data.length / itemsPerPage);
  const offset = currentPage * itemsPerPage;

  const paginatedItems = data.slice(offset, offset + itemsPerPage);

  // const Loader = () => {
  //   return (
  //     <td colSpan={9}>
  //       <div
  //         style={{
  //           display: "flex",
  //           width: "100%",
  //           justifyContent: "center",
  //           margin: "30px auto",
  //         }}
  //       >
  //         <div class="spinner-border" role="status" style={{ padding: "30px" }}>
  //           {/* <span class="sr-only">Loading...</span> */}
  //         </div>
  //       </div>
  //     </td>
  //   );
  // };

  return (
    <div className="table-container" id={id}>
      <h1>{content.title}</h1>
      <p>{content.desc}</p>
      <div className="App">
        <table className="table table-div">
          <thead>
            <tr>
              <th>S. No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Income</th>
              <th>City</th>
              <th>Car</th>
              <th>Phone Price</th>
              <th>Qoute</th>
            </tr>
          </thead>
          {loading ? (
            <Loader />
          ) : (
            <>
              <tbody>
                {paginatedItems.slice(0, 20).map((item, ind) => (
                  <tr key={item.id}>
                    <th scope="row">{ind + currentPage * itemsPerPage + 1}</th>
                    <td>
                      {item.first_name} {item.last_name}
                    </td>
                    <td>{item.email}</td>
                    <td>{item.gender}</td>
                    <td>{item.income}</td>
                    <td>{item.city}</td>
                    <td>{item.car}</td>
                    <td>{item.phone_price}</td>
                    <td
                      className="quote"
                      onClick={(e) => {
                        e.target.classList.toggle("white-space");
                      }}
                    >
                      "{item.quote}"
                    </td>
                  </tr>
                ))}
              </tbody>
              <caption>
                <ReactPaginate
                  previousLabel={
                    <img src={PrevBtn} alt="" style={{ width: "24px" }} />
                  }
                  nextLabel={
                    <img src={NextBtn} alt="" style={{ width: "24px" }} />
                  }
                  pageCount={pageCount}
                  onPageChange={handlePageChange}
                  pageLinkClassName={"page-lnk"}
                  containerClassName="pagination"
                  activeClassName="active"
                />
              </caption>
            </>
          )}
        </table>
      </div>
    </div>
  );
};

export default Table;
