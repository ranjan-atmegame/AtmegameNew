import { useState, useEffect, useCallback } from "react";
import axios from "../../../config/axios";

import Cards from "../../../components/Card";
import Game from "../../../components/Game";
import Widget from "../../../components/Widget";

import { Container } from "./HomeStyles";

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
          <Cards>{section && listGames()}</Cards>
        </Widget>
      </Container>
    </section>
  );
};

export default A;
