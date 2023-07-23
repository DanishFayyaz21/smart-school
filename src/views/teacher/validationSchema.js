import * as yup from "yup";

export const roleScehma = yup.object({
  role: yup
    .string()
    .trim()
    .required("Role is required")
    .max(20, '"Role must be at most 20 characters'),
  code: yup
    .string()
    .required("Code is required")
    .max(10, "Code must be at most 10 characters"),
});
