import React, { useState } from "react";

const Table = () => {
  const [hover, setHover] = useState({ status: false, value: null });
  const [doubleClick, setDoubleClick] = useState({
    status: false,
    value: null,
  });
  const [data, setData] = useState([
    [
      { editable: false, label: "row 1 column 1" },
      { editable: true, label: "row 1 column 2" },
    ],
    [
      { editable: false, label: "row 2 column 1", hint: "some hint" },
      { editable: false, label: "row 2 column 2" },
    ],
    [
      {
        editable: false,
        label: "row 3 column 1",
        hint: "some hint 2",
        icon: "alert",
      },
      { editable: false, label: "row 3 column 2" },
    ],
  ]);
  const updateDataFunc = (mainIndex, index, e) => {
    let newArr = [...data];
    newArr[mainIndex][index].label = e.target.value;
    setData(newArr);
    console.log("data", data);
  };
  return (
    <>
    <div className="container col-4">
      <h1>Table</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">1</th>
            <th scope="col">2</th>
          </tr>
        </thead>
        <tbody>
          {data.map((field, mainIndex) => {
            return (
              <tr key={mainIndex}>
                {field.map((fieldData, index) => {
                  return (
                    <>
                      {fieldData.editable ? (
                        <>
                          <td
                            onDoubleClick={() =>
                              setDoubleClick({
                                status: true,
                                value: fieldData.label,
                              })
                            }
                            onMouseLeave={() =>
                              setHover({
                                status: false,
                                value: fieldData.label,
                              })
                            }
                            onMouseEnter={() =>
                              setHover({ status: true, value: fieldData.label })
                            }
                            style={
                              hover.status && hover.value === fieldData.label
                                ? { backgroundColor: "blue" }
                                : { backgroundColor: "#ffebcc" }
                            }
                          >
                            {doubleClick.status &&
                            doubleClick.value == fieldData.label ? (
                              <input
                                onClick={(e) =>
                                  updateDataFunc(mainIndex, index, e)
                                }
                                type="text"
                                defaultValue={fieldData.label}
                                name="data"
                              />
                            ) : (
                              fieldData.label
                            )}
                          </td>
                          {fieldData.icon ? (
                            <td colSpan={2}>
                              <i className="fas fa-flag"></i>
                            </td>
                          ) : (
                            ""
                          )}
                          {fieldData.hint ? (
                            <td
                              style={
                                hover.status && hover.value === fieldData.label
                                  ? { backgroundColor: "blue" }
                                  : { backgroundColor: "#ffebcc" }
                              }
                              onMouseLeave={() =>
                                setHover({
                                  status: false,
                                  value: fieldData.label,
                                })
                              }
                              onMouseEnter={() =>
                                setHover({
                                  status: true,
                                  value: fieldData.label,
                                })
                              }
                              onClick={() => alert(fieldData.hint)}
                            >
                              hint
                            </td>
                          ) : (
                            ""
                          )}
                        </>
                      ) : (
                        <>
                          <td>{fieldData.label}</td>
                          {fieldData.icon ? (
                            <td>
                              {" "}
                              <i className="fas fa-flag"></i>
                            </td>
                          ) : (
                            ""
                          )}
                          {fieldData.hint ? (
                            <td
                              style={
                                hover.status && hover.value === fieldData.label
                                  ? { backgroundColor: "blue" }
                                  : { backgroundColor: "#ffebcc" }
                              }
                              onMouseLeave={() =>
                                setHover({
                                  status: false,
                                  value: fieldData.label,
                                })
                              }
                              onMouseEnter={() =>
                                setHover({
                                  status: true,
                                  value: fieldData.label,
                                })
                              }
                              onClick={() => alert(fieldData.hint)}
                            >
                              hint
                            </td>
                          ) : (
                            ""
                          )}
                        </>
                      )}
                    </>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
    </>
  );
};

export default Table;
