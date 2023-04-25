import * as Yup from "yup";

export const signUpSchema = Yup.object({
    name: Yup.string().min(2).max(25).required("Please enter your name"),
    email: Yup.string().email().required("Please enter your email"),
    password:Yup.string().min(6).required("enter your password"),
    message: Yup.string().min(10).max(200).required("Enter your message")
});