import React, { useState } from "react";

function Tb() {
  const [showSubtable, setShowSubtable] = useState(false);

  const handleButtonClick = () => {
    setShowSubtable(!showSubtable);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John Doe</td>
          <td>john.doe@example.com</td>
          <td>
            <button onClick={handleButtonClick}>
              {showSubtable ? "Hide" : "Show"} subtable
            </button>
          </td>
        </tr>
        {showSubtable && (
          <tr>
            <td colSpan="3">
              <table>
                <thead>
                  <tr>
                    <th>Subtable Column 1</th>
                    <th>Subtable Column 2</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Value 1</td>
                    <td>Value 2</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
export default Tb;
