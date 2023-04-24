import { useLocation } from "react-router-dom";

import DomainAddSingle from "../../components/ad/DomainAdSingle";
import A from "./section/A";
import C from "./section/C";

const Home = (props) => {
  const location = useLocation();

  return (
    <>
      <DomainAddSingle path={location.pathname} />

      <A />
      <C />
    </>
  );
};

export default Home;
