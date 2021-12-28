import React, { useEffect, useState } from "react";
import { fetchSubjects } from "../services/curriculum";

const ShowSubjects = ({ token, codename, classId }) => {
  const [subjectData, setSubjectData] = useState([]);

  useEffect(async () => {
    const data = await fetchSubjects(token, codename, classId);
    console.log(data);
    setSubjectData(data);
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Subjects List</h1>
      <div
        style={{
          //   border: "2px solid red",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
        }}
      >
        {subjectData.map((singleSubject) => {
          return (
            <div
              key={singleSubject.subjectId}
              style={{
                border: "2px solid black",
                margin: "2rem",
                padding: "1rem",
                backgroundColor: "whitesmoke",
                width: "80%",
                height: "18rem",
                borderRadius: ".8rem",
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
                  src={singleSubject.subjectIcon}
                  alt=""
                />
              </div>
              <h3 style={{ textAlign: "center", fontSize: "1.6rem" }}>
                {singleSubject.subjectName}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShowSubjects;
