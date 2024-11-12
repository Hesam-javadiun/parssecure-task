import { validationUtils } from "@/utils";
import type { FormValues } from "./form";
type Keys = keyof FormValues;

const validate = (values: FormValues) => {
  const errors: Partial<Record<Keys, string>> = {};

  if (validationUtils.isEmpty(values.reportName)) {
    errors.reportName = "report name is empty!";
  }

  if (validationUtils.isEmpty(values.simulationScenario)) {
    errors.simulationScenario = "simulation Scenario is empty!";
  }

  if (!validationUtils.itHasAValidLength(values.reportName)) {
    errors.reportName = "report name be 15 characters or less";
  }

  if (!validationUtils.itHasAValidLength(values.simulationScenario)) {
    errors.simulationScenario = "simulation scenario be 15 characters or less!";
  }

  if (
    validationUtils.endDateIsSmallerThanStartDate(
      values.startDate as Date,
      values.endDate as Date
    )
  ) {
    errors.endDate = "end date can not earlier than start date";
  }

  return errors;
};

export default validate;
