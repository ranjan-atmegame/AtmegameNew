import { useState, useEffect, useCallback } from "react";
import axios from "../../../config/axios";

import loadable from "@loadable/component";

import { Container } from "./HomeStyles";

const Widget = loadable(() =>
  import("../../../components/Widget" /* webpackChunkName: "widget"  */)
);
const Card = loadable(() =>
  import("../../../components/Card" /* webpackChunkName: "card"  */)
);
const Game = loadable(() =>
  import("../../../components/Game" /* webpackChunkName: "game"  */)
);

// const { Container } = loadable(() => import("./HomeStyles"));

// import Cards from "../../../components/Card";
// import Game from "../../../components/Game";
// import Widget from "../../../components/Widget";

const A = () => {
  const [section, setSection] = useState([]);

  const getAGames = useCallback(() => {
    return axios
      .get("/home/a")
      .then(({ data }) => {
        return data?.data ? data.data[0] : [];
      })
      .catch((error) => {
        console.log("Error");
        return [];
      });
  }, []);

  useEffect(() => {
    getAGames().then((games) => {
      setSection(games);
    });
  }, [getAGames]);

  const listGames = () => {
    const { games } = section;
    return games?.map((game) => <Game game={game} key={game._id} />);
  };

  // return (
  //   <section>
  //     <div className="container">
  //       <Widget name={section?.name} slug={section?.slug}>
  //         <Cards>{section && listGames()}</Cards>
  //       </Widget>
  //     </div>
  //   </section>
  // );

  return (
    <section>
      <Container>
        <Widget name={section?.name} slug={section?.slug}>
          <Card>{section && listGames()}</Card>
        </Widget>
      </Container>
    </section>
  );
};

export default A;
