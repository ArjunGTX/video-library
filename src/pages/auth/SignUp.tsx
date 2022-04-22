import { Button, Logo, TextInput } from "../../components";
import { Path } from "../../util/constant";

export const SignUp = () => {
  return (
    <div className="full-page bg-secondary fc-fs-fs txt-light">
      <div className="fr-fs-ct full-width p-xl pos-abs">
        <Logo className="m-xl" />
      </div>
      <div className="full-width full-height fr-ct-ct">
        <div className="br-sm shadow-medium bg-secondary-light p-xl auth-form">
          <div className="fr-sb-ct pt-xs px-xl">
            <h2 className="txt-primary font-medium">Sign Up</h2>
          </div>
          <div className="full-width p-xl fc-fs-fs">
            <div className="fr-ct-ct my-sm">
              <div className="half-width pr-sm">
                <TextInput type="text" placeholder="First Name" />
              </div>
              <div className="half-width pl-sm">
                <TextInput type="text" placeholder="Last Name" />
              </div>
            </div>
            <TextInput
              type="text"
              placeholder="Email"
              className="my-sm"
              autoComplete="new-password"
            />
            <TextInput
              type="password"
              placeholder="Password"
              className="my-sm"
            />
            <TextInput
              type="password"
              placeholder="Confirm Password"
              autoComplete="new-password"
              className="my-sm"
            />
            <div className="py-md full-width fr-ct-ct">
              <label htmlFor="terms" className="fr-ct-ct cursor-pointer">
                <input type="checkbox" id="terms" className="mr-sm" />
                Accept Terms & Conditions
              </label>
            </div>
            <Button className="full-width mx-auto">Sign Up</Button>
            <Button
              to={Path.LOGIN}
              variant="plain"
              color="primary"
              className="full-width mx-auto mt-md txt-underline"
            >
              Already Have an Account
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
