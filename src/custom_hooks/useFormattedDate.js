import { format } from "date-fns";

export const useFormattedDate = (str, outputFormat = "yyyy-mm-dd hh:mm:ss") => {
  if (str) {
    return format(new Date(str), outputFormat);
  }
};
