import React from "react";

const Loader = () => {
  return (
    <td colSpan={9}>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          margin: "30px auto",
        }}
      >
        <div
          class="spinner-border"
          role="status"
          style={{ padding: "30px" }}
        ></div>
      </div>
    </td>
  );
};

export default Loader;
