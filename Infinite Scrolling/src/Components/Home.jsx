import React, { useEffect, useId, useState } from "react";

const Home = () => {
  const [data, setData] = useState("");
  const getData = async () => {
    let result = await fetch("https://randomuser.me/api?results=500");
    let data = await result.json();
    console.log(data);
    setData(data.results);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="Data">
        {data &&
          data.map((elem, ind) => {
            return (
              <div key={ind}>
                <h1>
                  {elem.name.first }
                  {elem.name.last}
                </h1>
                <img src={elem.picture.thumbnail} alt="thumb" />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Home;
