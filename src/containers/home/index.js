import { useLocation } from "react-router-dom";

import loadable from "@loadable/component";

// import DomainAddSingle from "../../components/ad/DomainAdSingle";

const DomainAddSingle = loadable(() =>
  import("../../components/ad/DomainAdSingle")
);
const A = loadable(() => import("./section/A" /* webpackChunkName: "home"  */));

const Home = () => {
  const location = useLocation();

  return (
    <>
      <DomainAddSingle path={location.pathname} />
      <A />
    </>
  );
};

export default Home;
