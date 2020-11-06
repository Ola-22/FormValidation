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
      email: "The Email field is required",
      password: "The Password field is required",
      password2: "Please confirm your password",
    };

    validationObj[fieldName] = validationObj[fieldName].required(
      errMsgs[fieldName]
    );

    return yup.object().shape(validationObj);
  } else {
    return yup.object().shape({
      email: yup.string().email().required("The Email field is required"),
      password: yup
        .string()
        .min(8, "min char is 8")
        .matches()
        .max(20)
        .required("The Password field is required"),
      password2: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match")
        .required("Please confirm your password"),
      isCheck: yup.boolean().typeError("You must agree").oneOf([true]),
    });
  }
};

export default signUpSchema;
