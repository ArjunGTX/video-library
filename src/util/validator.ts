const EMAIL_REGEX = new RegExp(
  "^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])$"
);

const PASSWORD_UPPERCASE_REGEX = new RegExp("^(?=.*?[A-Z])");

const PASSWORD_LOWERCASE_REGEX = new RegExp("^(?=.*?[a-z])");

const PASSWORD_NUMBER_REGEX = new RegExp("^(?=.*?[0-9])");

const PASSWORD_SPECIAL_CHAR_REGEX = new RegExp("^(?=.*?[#?!@$%^&*-])");

export const login = (
  { email, password }: { email: string; password: string },
  initialErrors: { email: string; password: string }
) => {
  if (!email)
    return {
      isValid: false,
      errors: {
        ...initialErrors,
        email: "Email is Required!",
      },
    };
  if (!password)
    return {
      isValid: false,
      errors: {
        ...initialErrors,
        password: "Password is Required!",
      },
    };
  return {
    isValid: true,
    errors: {
      email: "",
      password: "",
    },
  };
};

export const signUp = (
  {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
  }: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
  },
  initialErrors: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
  }
) => {
  if (!firstName)
    return {
      isValid: false,
      errors: {
        ...initialErrors,
        firstName: "First Name is Required!",
      },
    };
  if (!lastName)
    return {
      isValid: false,
      errors: {
        ...initialErrors,
        lastName: "Last Name is required!",
      },
    };
  if (!email)
    return {
      isValid: false,
      errors: {
        ...initialErrors,
        email: "Email is Required!",
      },
    };

  if (!EMAIL_REGEX.test(email))
    return {
      isValid: false,
      errors: {
        ...initialErrors,
        email: "Enter a valid Email Address!",
      },
    };
  if (!password)
    return {
      isValid: false,
      errors: {
        ...initialErrors,
        password: "Password is Required!",
      },
    };
  if (!PASSWORD_UPPERCASE_REGEX.test(password))
    return {
      isValid: false,
      errors: {
        ...initialErrors,
        password: "Enter at least one Uppercase Letter!",
      },
    };
  if (!PASSWORD_LOWERCASE_REGEX.test(password))
    return {
      isValid: false,
      errors: {
        ...initialErrors,
        password: "Enter at least one Uppercase Letter!",
      },
    };
  if (!PASSWORD_NUMBER_REGEX.test(password))
    return {
      isValid: false,
      errors: {
        ...initialErrors,
        password: "Enter at least one Number!",
      },
    };
  if (!PASSWORD_SPECIAL_CHAR_REGEX.test(password))
    return {
      isValid: false,
      errors: {
        ...initialErrors,
        password: "Enter at least one Special Character!",
      },
    };
  if (password.length < 8)
    return {
      isValid: false,
      errors: {
        ...initialErrors,
        password: "Enter at least 8 Characters!",
      },
    };
  if (confirmPassword !== password)
    return {
      isValid: false,
      errors: {
        ...initialErrors,
        confirmPassword: "Passwords do not match!",
      },
    };
  return {
    isValid: true,
    errors: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: "",
    },
  };
};
