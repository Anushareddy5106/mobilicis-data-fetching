import React from "react";
import DropDown from "../assets/down.png";
import "./style.css";
import Loader from "./Loader";

const Table5 = ({ id, content, data, loading }) => {
  const handleRowClick = (e) => {
    e.target.parentNode.parentNode.nextElementSibling.classList.toggle(
      "hidden"
    );
    e.target.classList.toggle("rotate");
  };

  const SubTable = ({ users }) => {
    return (
      <>
        <div className="sub-table hidden">
          <div className="t-row subtable-h">
            <span className="t-span col1">S.No</span>
            <span className="t-span col2"> Name </span>
            <span className="t-span col3">Email</span>
            <span className="t-span col4">Gender</span>
            <span className="t-span col5">Income</span>
            <span className="t-span col6">Car</span>
            <span className="t-span col7">Phone Price</span>
            <span className="t-span col8">Quote</span>
          </div>
          {users.map((user, index) => {
            return (
              <div className="t-row hidden">
                <span className="t-span col1">{index + 1}</span>
                <span className="t-span col2">
                  {user.first_name} {user.last_name}
                </span>
                <span className="t-span  col3">{user.email}</span>
                <span className="t-span col4">{user.gender}</span>
                <span className="t-span col5">{user.income}</span>
                <span className="t-span col6">{user.car}</span>
                <span className="t-span col7">{user.phone_price}</span>
                <div
                  className="quote t-span col8"
                  onClick={(e) => {
                    e.target.classList.toggle("white-space");
                  }}
                >
                  "{user.quote}"
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  };

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
  //         <div
  //           class="spinner-border"
  //           role="status"
  //           style={{ padding: "30px" }}
  //         ></div>
  //       </div>
  //     </td>
  //   );
  // };

  return (
    <>
      <div className="table-container" id={id}>
        <h1>{content.title}</h1>
        <p>{content.desc}</p>
        <div className="App">
          <div className="custom-table">
            <div className="t-row head-row">
              <span className="t-span id">S. No.</span>
              <span className="t-span city">City</span>
              <span className="t-span num-users">Number of Users</span>
              <span className="t-span avg">Average Income</span>
              <span className="t-span drop"></span>
            </div>

            {loading ? (
              <Loader />
            ) : (
              <>
                {data.map((city, index) => {
                  return (
                    <>
                      <div className="t-row">
                        <span className="t-span id">{index}</span>
                        <span className="t-span city">{city._id}</span>
                        <span className="t-span num-users">
                          {city.num_users}
                        </span>
                        <span className="t-span avg">${city.avg_inc}</span>
                        <span className="t-span drop">
                          <img
                            className="dropdown"
                            src={DropDown}
                            alt=""
                            onClick={(e) => {
                              handleRowClick(e);
                            }}
                          />
                        </span>
                      </div>
                      <SubTable users={city.users} />
                    </>
                  );
                })}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Table5;
