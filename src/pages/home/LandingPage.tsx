import { Button, Logo } from "../../components";

export const LandingPage = () => {
  return (
    <div className="full-page bg-secondary fc-fs-fs txt-light landing-page">
      <div className="fr-fe-ct p-xl full-width">
        <Button className="m-xl hover-primary" size="sm">
          Login
        </Button>
      </div>
      <div className="full-width full-height fc-fs-ct mt-xl p-xl">
        <Logo />
        <h3 className="my-lg txt-lg txt-center font-medium">
          A collection of <span className="txt-xl txt-primary">120+</span>{" "}
          minutes of <br /> Motor Cycle{" "}
          <span className="txt-xl txt-primary">Madness!</span>
        </h3>
        <Button className="mt-xl" size="md">
          Start Watching
        </Button>
      </div>
    </div>
  );
};
