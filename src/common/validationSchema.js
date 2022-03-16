import * as yup from "yup";
import { REGEX } from "./utils";

export const LoginSchema = yup.object().shape({
  usernameOrEmail: yup
    .string()
    .trim()
    .required("Please enter your email or username"),
  password: yup.string().required("Please Enter your password"),
});

export const SignupSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required("Username is required")
    .min(3, "Username should be at least 3 characters")
    .max(12, "Username should be at most 12 characters"),
  firstName: yup
    .string()
    .trim()
    .required("First name is required")
    .min(3, "First name should be at least 2 characters")
    .max(12, "First name should be at most 20 characters"),
  lastName: yup
    .string()
    .trim()
    .required("Last name is required")
    .min(3, "Last name should be at least 2 characters")
    .max(12, "Last name should be at most 20 characters"),
  email: yup
    .string()
    .trim()
    .required("Email is required")
    .email("Please enter valid email"),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      REGEX.PASSWORD,
      "Password must contain combination of at least 1 lowercase, 1 uppercase, 1 special characters and numbers"
    ),
  passwordConfirmation: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export const ForgotPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .required("Email is required")
    .email("Please enter valid email"),
});

export const ResetPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .required("Password is required")
    .matches(
      REGEX.PASSWORD,
      "Password must contain combination of at least 1 lowercase, 1 uppercase, 1 special characters and numbers"
    ),
  passwordConfirmation: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
