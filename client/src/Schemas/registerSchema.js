import * as yup from "yup";

export const registerSchema = yup
  .object({
    email: yup.string().required().email("Email is not valid"),
    name: yup.string().required(),
    birthDate: yup.string(),
    heardAbout: yup.string().required(),
  })
  .required();
