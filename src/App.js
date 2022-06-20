import { Table } from "@redgate/honeycomb-components";

const WeirdTable = () => {
  const tableColumns = [
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Age",
      accessor: "age",
    },
  ];

  const tableData = [
    {
      name: "Tom",
      age: "20",
    },
    {
      name: "Dick",
      age: "30",
    },
    {
      name: "Harry",
      age: "40",
    },
  ];

  return <Table columns={tableColumns} data={tableData} />;
};

function App() {
  return <WeirdTable />;
}

export default App;
