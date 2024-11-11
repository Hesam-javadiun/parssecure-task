import { fetchData } from "@/api";
import { DataProvider } from "@/component/data-provider";
import Table from "@/component/table";

function App() {
  const list = fetchData();
  return (
    <DataProvider listOfData={list}>
      <Table />
    </DataProvider>
  );
}

export default App;
