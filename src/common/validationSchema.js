import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email("Please enter valid email")
    .required("Please enter your email"),

  password: yup.string().required("Please Enter your password"),
});
