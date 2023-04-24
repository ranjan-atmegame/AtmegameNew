import { useState, useEffect, useCallback } from "react";
import axios from "../../../config/axios";

import Cards from "../../../components/Card";
import Game from "../../../components/Game";
import Widget from "../../../components/Widget";

const A = () => {
  const [section, setSection] = useState([]);

  const getAGames = useCallback(() => {
    return axios
      .get("/home/c")
      .then(({ data }) => {
        return data?.data ? data.data : [];
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

  const listGames = (cateogry) => {
    const games = cateogry.games.splice(0, 6);

    return games?.map((game) => <Game game={game} key={game.name} />);
  };

  const buildWidget = (category) => {
    return (
      <Widget name={category?.name} slug={category?.slug} key={category.name}>
        <Cards>{listGames(category)}</Cards>
      </Widget>
    );
  };

  return (
    <section>
      <div className="container">
        {section && section.map((widget) => buildWidget(widget))}
      </div>
    </section>
  );
};

export default A;
