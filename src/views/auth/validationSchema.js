import * as yup from "yup";

export const AccountSchema = yup.object().shape({
   userName: yup
      .string()
      .required("User name is required")
      .trim()
      .min(5, "User name must be at least 5 characters")
      .max(20, "User name must be at most 20 characters"),
   email: yup.string().required("Email is required ").email("Email is invalid"),
   password: yup
      .string()
      .required("Password is required ")
      .matches(
         /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
         "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
   confirmPassword: yup
      .string()
      .required("Confirm password is required")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
   profileLink: yup.string().required("Profile link is required "),
});

export const PersonalSchema = yup.object({
   firstName: yup.string().required("First name is required "),
   lastName: yup.string().required("Last name is required "),
   country: yup.string().required("Country is required "),
   nationality: yup.string().required("Nationality is required "),
   gender: yup.string().required("Gender is required "),
   birthday: yup
      .string()
      .required("Date of Birth is required")
      .matches(
         /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
         "Date of Birth must be a valid date in the format YYYY-MM-DD"
      ),
});

export const LoginSchema = yup.object().shape({
   email: yup
      .string()
      .email("Email is invalid")
      .trim()
      .required("Email is required"),
   password: yup.string().required("Password is required "),
});
