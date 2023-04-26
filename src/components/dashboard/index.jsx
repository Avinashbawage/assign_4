import React, { useEffect, useState } from "react";
import Navbar from "../navbar";
import "./index.scss";
// Chart 3
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import Box4 from "../containers/box4";
import Box5 from "../containers/box5";

ChartJS.register(ArcElement, Tooltip, Legend);

const initialChartValue = {
  labels: [],
  datasets: [],
};

const Dashboardview = () => {
  const [alldata, setallData] = useState([]);
  const [keys, setKeys] = useState([]);
  const [values, setValues] = useState([]);
  const [data, setData] = useState(initialChartValue);
  const [notification, setNotification] = useState([]);
  const [orderslists, setOrderslists] = useState([]);

  useEffect(() => {
    fetch("https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json ")
      .then((response) => response.json())
      .then((alldata) => setallData(alldata));
  }, []);

  useEffect(() => {
    if (alldata && alldata?.dasbhoardPage?.storage) {
      const keys = Object.keys(alldata.dasbhoardPage.storage);

      setKeys(keys);
    }
  }, [alldata]);

  useEffect(() => {
    if (alldata && alldata?.dasbhoardPage?.notifications) {
      const notification = alldata.dasbhoardPage.notifications;
      setNotification(notification);
    }
  }, [alldata]);

  useEffect(() => {
    if (alldata && alldata?.dasbhoardPage?.orders) {
      const orderslists = alldata.dasbhoardPage.orders;
      setOrderslists(orderslists);
    }
  }, [alldata]);

  useEffect(() => {
    if (keys && keys?.length && alldata && alldata?.dasbhoardPage?.storage) {
      const copy = [];
      keys.map((k) => {
        copy.push(alldata.dasbhoardPage.storage[k]);
      });
      setValues(copy);
    }
  }, [keys]);

  useEffect(() => {
    if (keys?.length && values?.length) {
      let copy = {
        labels: [...keys],
        datasets: [
          {
            label: "Storage",
            data: [...values],
            backgroundColor: ["#FF4229", "#0EF6C4", "#A8D582"],
            borderColor: ["#FF4229", "#0EF6C4", "#A8D582"],
            borderWidth: 1,
          },
        ],
      };
      setData(copy);
    }
  }, [keys, values]);

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="dashboard">
              <div className="text-left">Welcome back, Admin</div>
              <div className="mainbox">
                <div className="box3">
                  <label htmlFor="">Storage Informnation</label>
                  <Pie data={data} />
                </div>
                <Box4 notification={notification} />
              </div>
              <Box5 orderslists={orderslists} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboardview;
