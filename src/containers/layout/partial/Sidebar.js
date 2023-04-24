import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  MobileMenu,
  ItemContainer,
  ProfileBox,
  BtnClose,
  Logo,
  ProfileContainer,
  ProfileOnline,
  ProfileImage,
  H4,
  MenuItem,
  SocialMenu,
  List,
} from "./SidebarStyles";

// const Sidebar = ({
//   isSidebarOpen,
//   setIsSidebarOpen,
//   toggleSidebar,
//   closeSidebar,
// }) => {

import logoPath from "../../../assets/img/logo-icon.png";
import profileImage from "../../../assets/img/male-user-avatar.svg";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen, toggleSidebar }) => {
  // use location hook
  const location = useLocation();

  // Define an array of paths where you don't want to show the sidebar
  const noSidebarRoutes = ["/sitemap"];

  // Check if the current location is in the array of noSidebarRoutes
  const shouldShowSidebar = !noSidebarRoutes.includes(location.pathname);

  // Effects
  useEffect(() => {
    console.log("Sidebar rerender...");
    console.log(`location changed: ${location.pathname}`);
    setIsSidebarOpen(false);
  }, [location, setIsSidebarOpen]);

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  if (!isSidebarOpen) {
    return <></>;
  }

  // JSX
  const isSignedIn = true;

  const user = {
    nickName: "Ranjan Kumar",
    favourite: [],
    likes: [],
    dislikes: [],
    totalPlayed: 5,
    coins: 100,
  };

  let { nickName, favourite, likes, dislikes, totalPlayed, coins, rank } = user;

  //32px
  const profileJSX = (
    <ProfileBox>
      <BtnClose>
        <Link to="/" className="tiger-icon">
          <Logo src={logoPath} alt="Go to Home" onClick={closeSidebar} />
        </Link>
        <div className="close" onClick={closeSidebar}></div>
      </BtnClose>
      <ProfileContainer>
        <ProfileOnline />
        <ProfileImage src={`${profileImage}`} alt="Profile pic" />
      </ProfileContainer>
      <div className="">
        <h2>{nickName}</h2>
        <button onClick={toggleSidebar}>Toggle</button>
        <p>
          <span>
            <strong>#{rank}</strong>
            <span> Rank</span>
          </span>
          <span>
            <strong>{coins ? coins : 0}</strong>
            <span> Coins</span>
          </span>
        </p>
      </div>
    </ProfileBox>
  );

  const userDashboardJSX = (
    <>
      <li>
        <Link to="/user/profile">
          <img src="/img/profile-mobile-icon.svg" alt="" />
          Profile
        </Link>
      </li>
      <li>
        <Link to="/user/favourites">
          <img src="/img/favourite-mobile-icon.svg" alt="" />
          Favourite<span>{favourite.length}</span>
        </Link>
      </li>
      <li>
        <Link to="/user/friends">
          <img src="/img/friends-mobile-icon.svg" alt="" />
          Friends<span>97</span>
        </Link>
      </li>
    </>
  );

  const connectWithUsJSX = (
    <>
      <H4>Connect with us</H4>
      <SocialMenu>
        <ul>
          <List>
            <MenuItem
              to="https://www.facebook.com/Atmegame"
              target="_blank"
              rel="noopener noreferrer"
              className="fb"
            >
              Facebook{" "}
            </MenuItem>
          </List>
          <List>
            <MenuItem
              to="https://twitter.com/atmegame"
              target="_blank"
              rel="noopener noreferrer"
              className="tw"
            >
              Twitter{" "}
            </MenuItem>
          </List>
          <List>
            <MenuItem
              to="https://www.instagram.com/atmegame"
              target="_blank"
              rel="noopener noreferrer"
              className="insta"
            >
              Instagram{" "}
            </MenuItem>
          </List>
          <List>
            <MenuItem
              to="https://in.pinterest.com/atmegame"
              target="_blank"
              rel="noopener noreferrer"
              className="pin"
            >
              Pinterest{" "}
            </MenuItem>
          </List>
        </ul>
      </SocialMenu>
    </>
  );

  const userProfile = () => {
    return (
      <>
        <ItemContainer>
          {profileJSX}
          <div className="menu-items">
            <H4>Dashboard</H4>
            <ul>
              {isSignedIn && userDashboardJSX}
              <li>
                <Link to="/user/coins-history">
                  <img src="/img/coins-mobile-icon.svg" alt="" />
                  Coins <span className="new-bedge">NEW</span>
                  <span>{coins}</span>
                </Link>
              </li>
            </ul>
            <H4> </H4>
            <ul>
              <li>
                <Link to="">
                  <img src="/img/notifications-mobile-icon.svg" alt="" />{" "}
                  Notifications<span>0</span>
                </Link>
              </li>
              {isSignedIn && (
                <>
                  <li>
                    <Link to="/leaderboard">
                      <img src="/img/leaderboard-mobile-icon.svg" alt="" />{" "}
                      Leaderboard<span className="new-bedge">NEW</span>
                      <span>{rank}</span>
                    </Link>
                  </li>

                  {/* After login options */}
                  <li>
                    <Link to="/user/recommended-games">
                      <img src="/img/recommended-mobile-icon.svg" alt="" />{" "}
                      Recommended Games
                    </Link>
                  </li>
                  <li>
                    <Link to="/user/games-played">
                      <img
                        src="/img/total-games-played-mobile-icon.svg"
                        alt=""
                      />{" "}
                      Total Games Played <span>{totalPlayed.length}</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/user/liked">
                      <img src="/img/liked-mobile-icon.svg" alt="" /> Liked
                      Games <span>{likes.length}</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/user/disliked">
                      <img src="/img/disliked-mobile-icon.svg" alt="" />{" "}
                      Disliked Games <span>{dislikes.length}</span>
                    </Link>
                  </li>
                </>
              )}
              {/* After login options */}
              <li>
                <Link to="">
                  <img src="/img/invite-mobile-icon.svg" alt="" /> Invite
                </Link>
              </li>
            </ul>
            <H4>Games Categories</H4>
            <ul>
              <li>
                <Link to="/online-new-games" title="">
                  <img src="/img/new-games-mobile-icon.svg" alt="" />
                  New Games
                </Link>
              </li>
              <li>
                <Link to="/online-most-played-games" title="">
                  <img src="/img/new-games-mobile-icon.svg" alt="" />
                  Most Played Games
                </Link>
              </li>
              <li>
                <Link to="/online-cricket-games" title="">
                  <img src="/img/new-games-mobile-icon.svg" alt="" />
                  Cricket Games
                </Link>
              </li>
            </ul>
            {connectWithUsJSX}

            {/* SignIn and Signout options */}
            <ul>
              <li>
                {isSignedIn && (
                  <Link to="/signout" title="signout">
                    <img src="/img/logout-mobile-icon.svg" alt="" /> Logout
                  </Link>
                )}
                {!isSignedIn && (
                  <Link to="/signin" title="signout">
                    <img src="/img/logout-mobile-icon.svg" alt="" /> Signin
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </ItemContainer>
        <div className={`menu-overlay`}></div>
      </>
    );
  };

  return shouldShowSidebar && <MobileMenu>{userProfile()}</MobileMenu>;
};

export default Sidebar;
