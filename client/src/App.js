import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import Table5 from "./components/Table5";
const API = axios.create({ baseURL: "http://localhost:5000/api/users" });

function App() {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);
  const [data5, setData5] = useState([]);

  const [loading1, setLoading1] = useState([true]);
  const [loading2, setLoading2] = useState([true]);
  const [loading3, setLoading3] = useState([true]);
  const [loading4, setLoading4] = useState([true]);
  const [loading5, setLoading5] = useState([true]);

  useEffect(() => {
    const getData = async (ind, setData, setLoading) => {
      try {
        const res = await API.get(`/data${ind}`);
        const dt = await res.data;
        setData(dt);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    getData(1, setData1, setLoading1);
    getData(2, setData2, setLoading2);
    getData(3, setData3, setLoading3);
    getData(4, setData4, setLoading4);
    getData(5, setData5, setLoading5);
  }, []);

  return (
    <>
      <Navbar />
      <Table
        id={`table1`}
        data={data1}
        content={{
          title: "1. Table 1",
          desc: `Users with salary less than $5 who owns Mercedes-Benz or BMW`,
        }}
        loading={loading1}
      ></Table>
      <Table
        id={`table2`}
        data={data2}
        content={{
          title: "2. Table 2",
          desc: `Male users having phone prices over 10,000`,
        }}
        loading={loading2}
      ></Table>
      <Table
        id={`table3`}
        data={data3}
        content={{
          title: "3. Table 3",
          desc: `Users whose last name starts with M and whose last name is present in email and quote length is greater than 15`,
        }}
        loading={loading3}
      ></Table>
      <Table
        id={`table4`}
        data={data4}
        content={{
          title: "4. Table 4",
          desc: `Users who own a BMW, Mercedes or Audi and whose email does not include any digit`,
        }}
        loading={loading4}
      ></Table>
      <Table5
        id={`table5`}
        data={data5}
        content={{
          title: "5. Table 5",
          desc: `Top 10 cities with most users`,
        }}
        loading={loading5}
      ></Table5>
    </>
  );
}

export default App;
