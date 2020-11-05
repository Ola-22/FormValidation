import * as yup from "yup";

const signUpSchema = (fieldName) => {
  if (fieldName) {
    const validationObj = {
      email: yup.string().email(),
      password: yup.string().min(8, "min char is 8").max(20),
      password2: yup
        .string()
        .oneOf([yup.ref("password")], "Passwords must match"),
      isCheck: yup.boolean().typeError("You must agree").oneOf([true]),
    };

    const errMsgs = {
      email: "Enter e-mail 😡",
      password: "Where is your password ? 🙄",
      password2: "Hello ??",
    };

    validationObj[fieldName] = validationObj[fieldName].required(
      errMsgs[fieldName]
    );

    return yup.object().shape(validationObj);
  } else {
    return yup.object().shape({
      email: yup.string().email().required("Enter e-mail 😡"),
      password: yup
        .string()
        .min(8, "min char is 8")
        .matches()
        .max(20)
        .required("Where is your password ? 🤨"),
      password2: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match")
        .required("Did you really forget me ??? 😥"),
      isCheck: yup.boolean().typeError("You must agree").oneOf([true]),
    });
  }
};

export default signUpSchema;
