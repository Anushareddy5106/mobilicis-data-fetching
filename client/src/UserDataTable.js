import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import './UserDataTable.css';

const API=axios.create({baseURL : 'http://localhost:5000'});
function getData() {
  return API.get('/users'); // replace this with the actual endpoint of your backend server
}

function UserDataTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then(response => {
      setData(response.data);
    });
  }, []);

  const columns = [
    { dataField: 'id', text: 'ID' },
    { dataField: 'first_name', text: 'First Name', filter: textFilter() },
    { dataField: 'last_name', text: 'Last Name', filter: textFilter() },
    { dataField: 'email', text: 'Email', filter: textFilter() },
    { dataField: 'gender', text: 'Gender' },
    { dataField: 'income', text: 'Income' },
    { dataField: 'city', text: 'City', filter: textFilter() },
    { dataField: 'car', text: 'Car' , filter: textFilter()},
    { dataField: 'quote', text: 'Quote' },
    { dataField: 'phone_price', text: 'Phone Price' },
  ];

  return (
    <BootstrapTable
      keyField="id"
      data={data}
      columns={columns}
      pagination={paginationFactory()}
      filter={filterFactory()}
    />
  );
}

export default UserDataTable;
