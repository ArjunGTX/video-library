import { Button, Logo, TextInput } from "../../components";
import { Path } from "../../util/constant";

export const Login = () => {
  return (
    <div className="full-page bg-secondary fc-fs-fs txt-light">
      <div className="fr-fs-ct full-width p-xl pos-abs">
        <Logo className="m-xl" />
      </div>
      <div className="full-width full-height fr-ct-ct">
        <div className="br-sm shadow-medium bg-secondary-light p-xl auth-form">
          <div className="fr-sb-ct pt-xs px-xl">
            <h2 className="txt-primary font-medium">Login</h2>
          </div>
          <div className="full-width p-xl fc-fs-fs">
            <TextInput type="text" placeholder="Email" className="my-sm" />
            <TextInput
              type="password"
              placeholder="Password"
              className="my-sm"
            />
            <Button variant="plain" className="txt-underline txt-xs my-sm">
              Forgot Password?
            </Button>
            <Button className="full-width mx-auto my-sm">Login</Button>
            <div className="my-sm full-width fr-sb-ct">
              <div className="half-width fr-ct-ct pr-sm">
                <Button
                  to={Path.SIGN_UP}
                  variant="outlined"
                  className="full-width"
                >
                  Create New Account
                </Button>
              </div>
              <div className="half-width fr-ct-ct pl-sm">
                <Button variant="outlined" className="full-width">
                  Guest Login
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
