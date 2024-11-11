import { useDataContext } from "@/hooks";
import Typography from "@/component/UI/typography";
import Button from "@/component/UI/button";
import inputs from "@/component/UI/inputs";
import icons from "@/component/UI/icons";

type FormPropsType = {
  id: string;
  closeModalHandler: () => void;
};

export type FormValues = {
  reportName: string;
  simulationScenario: string;
  startDate: Date;
  endDate: Date;
};

const Form = function ({ id, closeModalHandler }: FormPropsType) {
  const { list } = useDataContext();
  const item = list.find((item) => item.id === id);
  console.log("item", item);
  return (
    <form className="max-w-full rounded-none bg-slate-100 w-96 text-[0.8em]">
      <header className="border-b-[1px] border-b-solid border-b-slate-300 flex justify-between p-4">
        <Typography as="h2" className="inline">
          New Report
        </Typography>
        <Button onClick={closeModalHandler}>
          <icons.close />
        </Button>
      </header>
      <main className="flex flex-col gap-4 p-4">
        <inputs.Input type="text" name="reportName" />
        <inputs.Input type="text" name="simulationScenario" />
        <label>Select date range:</label>
        <inputs.Input type="date" name="startDate" />
        <inputs.Input type="date" name="endDate" />
        <Button type="submit" className="bg-blue-500">
          <Typography className="text-slate-100">Generate</Typography>
        </Button>
      </main>
    </form>
  );
};

export default Form;
