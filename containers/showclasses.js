import React, { useState, useEffect } from "react";
import { fetchClasses } from "../services/curriculum";
import ShowSubjects from "./showsubjects";

const ShowClasses = ({ boardId, token, codename }) => {
  const [classData, setClassData] = useState([]);
  const [classId, setClassId] = useState("");

  useEffect(async () => {
    const data = await fetchClasses(token, codename, boardId);
    console.log(data);
    setClassData(data);
  }, []);

  const handleClick = (e, singleClass) => {
    e.preventDefault();
    // console.log(e.current.value);
    console.log(singleClass);
    setClassId(singleClass.classId);
  };

  if (classId) {
    return <ShowSubjects token={token} codename={codename} classId={classId} />;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Classes List</h1>
      <div
        style={{
          // border: "2px solid red",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
        }}
      >
        {classData.map((singleClass) => {
          return (
            <div
              key={singleClass.classId}
              onClick={(e) => handleClick(e, singleClass)}
              style={{
                border: "2px solid black",
                margin: "2rem",
                padding: "1rem",
                backgroundColor: "whitesmoke",
                width: "80%",
                height: "18rem",
                borderRadius: ".8rem",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  // border: "2px solid green",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <img
                  style={{ height: "70%" }}
                  src={singleClass.classIcon}
                  alt=""
                />
              </div>
              <h3 style={{ textAlign: "center", fontSize: "1.6rem" }}>
                {singleClass.classNameInRoman}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShowClasses;
