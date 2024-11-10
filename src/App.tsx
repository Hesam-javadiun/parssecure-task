import { fetchData } from "@/api";
import { DataProvider } from "@/component/data-provider";

function App() {
  const list = fetchData();
  return (
    <DataProvider listOfData={list}>
      <h1 className="text-3xl font-bold underline text-red-400">
        Hello world!
      </h1>
    </DataProvider>
  );
}

export default App;
