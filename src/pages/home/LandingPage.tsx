import { Button, Logo } from "../../components";
import { Path } from "../../util/constant";

export const LandingPage = () => {
  return (
    <div className="full-page bg-secondary fc-fs-fs txt-light landing-page of-hidden">
      <div className="fr-fe-ct p-xl full-width">
        <Button to={Path.LOGIN} className="m-xl hover-primary" size="sm">
          Login
        </Button>
      </div>
      <div className="full-width full-height pos fc-fs-ct mt-xl p-xl">
        <Logo className="mb-xl" />
        <h3 className="my-xl txt-lg txt-center font-medium">
          A collection of <span className="txt-xl txt-primary">120+</span>{" "}
          minutes of <br /> Motor Cycle{" "}
          <span className="txt-xl txt-primary">Madness!</span>
        </h3>
        <Button to={Path.VIDEOS} className="mt-xl" size="md">
          Start Watching
        </Button>
      </div>
    </div>
  );
};
