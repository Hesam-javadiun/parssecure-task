import { useDataContext } from "@/hooks";
import Typography from "@/component/UI/typography";
import Button from "@/component/UI/button";
import inputs from "@/component/UI/inputs";
import icons from "@/component/UI/icons";
import { useFormik } from "formik";
import validate from "./validate";
import { ListItem } from "@/api";
import { dateUtils } from "@/utils";

type FormPropsType = {
  id: string;
  closeModalHandler: () => void;
};

export type FormValues = {
  reportName: string;
  simulationScenario: string;
  startDate: Date | string;
  endDate: Date | string;
};

const Form = function ({ id, closeModalHandler }: FormPropsType) {
  const { list, mutateListItem } = useDataContext();
  const item = list.find((item) => item.id === id) as ListItem;

  const { handleSubmit, handleBlur, handleChange, values, errors, touched } =
    useFormik<FormValues>({
      initialValues: {
        reportName: item.name,
        simulationScenario: item.level,
        startDate: item.date,
        endDate: dateUtils.convertDateToInputValue(new Date()),
      },
      validate,
      onSubmit: (values) => {
        const newItem = {
          ...item,
          name: values.reportName,
          level: values.simulationScenario,
          date: values.startDate,
        };

        if (mutateListItem) {
          mutateListItem(id, newItem as ListItem);
        }
        closeModalHandler();
      },
    });

  return (
    <form
      className="max-w-full rounded-none bg-slate-100 w-96 text-[0.8em]"
      onSubmit={handleSubmit}
    >
      <header className="border-b-[1px] border-b-solid border-b-slate-300 flex justify-between p-4">
        <Typography as="h2" className="inline">
          New Report
        </Typography>
        <Button onClick={closeModalHandler}>
          <icons.close />
        </Button>
      </header>
      <main className="flex flex-col gap-4 p-4">
        <inputs.Input
          type="text"
          name="reportName"
          value={values.reportName}
          onChange={handleChange}
          onBlur={handleBlur}
          gotError={!!(touched.reportName && errors.reportName)}
        />
        {touched.reportName && errors.reportName && (
          <Typography className="text-rose-500">{errors.reportName}</Typography>
        )}
        <inputs.Input
          type="text"
          name="simulationScenario"
          value={values.simulationScenario}
          onChange={handleChange}
          onBlur={handleBlur}
          gotError={!!(touched.simulationScenario && errors.simulationScenario)}
        />
        {touched.simulationScenario && errors.simulationScenario && (
          <Typography className="text-rose-500">
            {errors.simulationScenario}
          </Typography>
        )}
        <label>Select date range:</label>
        <inputs.Input
          type="date"
          name="startDate"
          value={values.startDate as string}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <inputs.Input
          type="date"
          name="endDate"
          value={values.endDate as string}
          onChange={handleChange}
          onBlur={handleBlur}
          gotError={!!(touched.endDate && errors.endDate)}
        />
        {touched.endDate && errors.endDate && (
          <Typography className="text-rose-500">{errors.endDate}</Typography>
        )}
        <Button type="submit" className="bg-blue-500">
          <Typography className="text-slate-100">Generate</Typography>
        </Button>
      </main>
    </form>
  );
};

export default Form;
