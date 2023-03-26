import React, { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    setLoading(true);
    try {
      let result = await fetch("https://randomuser.me/api?results=20");
      let responseData = await result.json();
      responseData = responseData.results;
      console.log(responseData.length);
      setTimeout(() => {
        setData((prev) => [...prev, ...responseData]);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.log("Error while getting data", error);
    }
  };
  const handleScroll = () => {
    let innerHeight = window.innerHeight;
    let totalHeight = document.documentElement.scrollHeight;
    let scrollTop = document.documentElement.scrollTop;
    // console.log(
    //   `innerHeight ${innerHeight} scrollTop ${scrollTop} totalHeight ${totalHeight}`
    // );
    if (innerHeight + scrollTop + 1 >= totalHeight) {
      getData();
    }
  };

  useEffect(() => {
    getData();
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="Data">
        {data &&
          data.map((elem, ind) => {
            return (
              <div key={elem.login.uuid}>
                <h1>
                  {elem.name.first}
                  {elem.name.last}
                </h1>
                <img src={elem.picture.thumbnail} alt="thumb" />
              </div>
            );
          })}
        {loading && <h1>Loading...</h1>}
      </div>
    </>
  );
};

export default Home;
