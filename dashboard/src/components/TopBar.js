import React, { useEffect, useState } from "react";
import axios from "axios";
import Menu from "./Menu";

const TopBar = () => {
  const [aapl, setAapl] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3002/stock/AAPL")
      .then((res) => {
        setAapl(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <p className="index">AAPL</p>
          <p className="index-points">
            {aapl ? aapl.c : "Loading..."}
          </p>
          <p
        className="percent"
        style={{
                color: aapl?.dp >= 0 ? "green" : "red",
            }}
>
  {aapl?.dp >= 0 ? "▲" : "▼"} {aapl?.dp}%
</p>
        </div>

        <div className="sensex">
          <p className="index">MSFT</p>
          <p className="index-points">Coming Soon</p>
        </div>
      </div>

      <Menu />
    </div>
  );
};

export default TopBar;