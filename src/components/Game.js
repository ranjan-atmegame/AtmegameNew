import {
  GameCard,
  Arrow,
  GameLink,
  GameThumb,
  GameImage,
  GameDetail,
  GameName,
  GamePlayed,
} from "./GameStyled";

const Games = ({ game }) => {
  return (
    <GameCard>
      <GameLink
        title="Play Online Desert Champion Game"
        to={`/games/${game.slug}`}
      >
        <Arrow>
          <GameThumb>
            <GameImage
              src={`https://thumbs.atmegame.com/thumbs/${game.image}_thumb.jpg`}
              alt="Play Online Desert Champion Game"
              title="Play Online Desert Champion Game"
              rel="preload"
            />
          </GameThumb>
          <GameDetail>
            <GameName>
              <h6>Desert Champion</h6>
              <GamePlayed>154.1K Played</GamePlayed>
            </GameName>
            <div className="arrow-btn">
              <span className="arrow one next"></span>
              <span className="arrow next"></span>
            </div>
          </GameDetail>
        </Arrow>
      </GameLink>
    </GameCard>
  );
};

export default Games;
