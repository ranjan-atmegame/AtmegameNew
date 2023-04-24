import {
  GameCard,
  NewGames,
  GameLink,
  GameCategory,
  GameImage,
  MoreSmall,
  Name,
} from "./WidgetStyles";

const Widget = ({ name, slug, children }) => {
  return (
    <NewGames>
      <GameCard>
        <GameLink title="Play Online New Games" href="/online-new-games">
          <GameCategory>
            <GameImage
              src={`/img/color-icons/${slug}.svg`}
              alt="Play Online New Games"
              title="Play Online New Games"
            />
            <Name
              style={{ textTransform: "capitalize" }}
            >{`${name} Games`}</Name>
          </GameCategory>
        </GameLink>
        <MoreSmall
          className="btn-small mr-8"
          title="Play More Online New Games"
          href="/online-new-games"
        >
          More&nbsp;&gt;
        </MoreSmall>
      </GameCard>
      {children}
    </NewGames>
  );
};

export default Widget;
