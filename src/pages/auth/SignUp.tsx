import { useEffect, useState } from "react";
import { Alert, Button, Logo, TextInput } from "../../components";
import { Constant, Path } from "../../util/constant";
import * as api from "../../model/api";
import * as validate from "../../util/validator";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useAuth } from "../../context";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const SignUp = () => {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [inputErrors, setInputErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (auth?.isLoggedIn) {
      navigate(-1);
    }
  }, []);

  const signUpRequest = async () => {
    const { isValid, errors } = validate.signUp(inputs, inputErrors);
    if (!isValid) {
      setInputErrors(errors);
      return;
    }
    setLoading(true);
    try {
      const { data, status } = await api.signUp(
        inputs.firstName,
        inputs.lastName,
        inputs.email,
        inputs.password
      );
      if (status !== 201) return;
      setAuth({
        isLoggedIn: true,
        firstName: data.createdUser.firstName,
        lastName: data.createdUser.lastName,
        userId: data.createdUser._id,
      });
      localStorage.setItem(Constant.ACCESS_TOKEN, data.encodedToken);
      navigate(Path.HOME);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signUpRequest();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((inputs) => ({
      ...inputs,
      [e.target.id]: e.target.value,
    }));
    setInputErrors((errors) => ({
      ...errors,
      [e.target.id]: "",
    }));
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className="full-page bg-secondary fc-fs-fs txt-light">
      <div className="fr-fs-ct full-width p-xl pos-abs">
        <Logo className="m-xl" />
      </div>
      <div className="full-width full-height fr-ct-ct">
        <form
          onSubmit={handleSignUp}
          className="br-sm shadow-medium bg-secondary-light p-xl auth-form"
        >
          <div className="fr-sb-ct pt-xs px-xl">
            <h2 className="txt-primary font-medium">Sign Up</h2>
          </div>
          <div className="full-width p-xl fc-fs-fs">
            <div className="fr-ct-fs my-sm">
              <div className="half-width pr-sm fc-fs-fs">
                <TextInput
                  type="text"
                  placeholder="First Name"
                  value={inputs.firstName}
                  onChange={handleInputChange}
                  id="firstName"
                />
                {inputErrors.firstName && (
                  <Alert message={inputErrors.firstName} className="mt-xs" />
                )}
              </div>
              <div className="half-width pl-sm fc-fs-fs">
                <TextInput
                  type="text"
                  placeholder="Last Name"
                  value={inputs.lastName}
                  onChange={handleInputChange}
                  id="lastName"
                />
                {inputErrors.lastName && (
                  <Alert message={inputErrors.lastName} className="mt-xs" />
                )}
              </div>
            </div>
            <div className="full-width fc-fs-fs">
              <TextInput
                type="text"
                placeholder="Email"
                value={inputs.email}
                onChange={handleInputChange}
                id="email"
                className="my-sm"
                autoComplete="new-password"
              />
              {inputErrors.email && (
                <Alert message={inputErrors.email} className="mt-xs" />
              )}
            </div>
            <div className="full-width fc-fs-fs">
              <TextInput
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={inputs.password}
                onChange={handleInputChange}
                id="password"
                className="my-sm"
              >
                <button
                  type="button"
                  className="txt-light fr-ct-ct"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <AiOutlineEye className="txt-sm" />
                  ) : (
                    <AiOutlineEyeInvisible className=" txt-sm" />
                  )}
                </button>
              </TextInput>
              {inputErrors.password && (
                <Alert message={inputErrors.password} className="mt-xs" />
              )}
            </div>
            <div className="full-width fc-fs-fs">
              <TextInput
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={inputs.confirmPassword}
                onChange={handleInputChange}
                id="confirmPassword"
                autoComplete="new-password"
                className="my-sm"
              >
                <button
                  type="button"
                  className="txt-light fr-ct-ct"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <AiOutlineEye className="txt-sm" />
                  ) : (
                    <AiOutlineEyeInvisible className=" txt-sm" />
                  )}
                </button>
              </TextInput>
              {inputErrors.confirmPassword && (
                <Alert
                  message={inputErrors.confirmPassword}
                  className="mt-xs"
                />
              )}
            </div>
            <Button className="my-sm full-width mx-auto">Sign Up</Button>
            <Link
              to={Path.LOGIN}
              state={{
                from: pathname,
              }}
            >
              <Button
                type="button"
                variant="plain"
                color="primary"
                className="full-width mx-auto mt-sm txt-underline"
              >
                Already Have an Account
              </Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
