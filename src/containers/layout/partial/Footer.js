import { FooterWrapper, FooterLink, CopyRight, TNCInfo } from "./FooterStyles";
import { Container } from "./FooterStyles";

const Footer = () => {
  //   const isWWW = window.location.hostname.indexOf("www") !== -1;

  const copyRightInfo = () => {
    return (
      <CopyRight>
        <Container>
          <div className="copy-info">
            Copyright © {`${new Date().getFullYear()} `}
            <a target="blank" href="https://www.apaypl.com">
              Apay Marketing Private Limited
            </a>
          </div>
          <TNCInfo>
            <FooterLink to="/terms-condition" title="Term and conditions">
              Terms & Conditions
            </FooterLink>{" "}
            <FooterLink to="/privacy-policy" title="privacy policy">
              Privacy Policy
            </FooterLink>
          </TNCInfo>
        </Container>
      </CopyRight>
    );
  };

  return (
    <FooterWrapper>
      <div className="w-40 aboutAtmegames">
        <p>
          <img
            // src="https://image.atmegame.com/logo.png"
            src="/img/logo.png"
            alt="Atmegame.com"
            width="200"
          />
        </p>
        <p className="mt-24 pr-24">
          Atmegame.com is a completely new platform for the online games lovers.
          The best part is that all games available on our website are free and
          can be enjoyable on multiple devices, including desktop, mobile
          phones, tablets, and iPhones or iPads.
        </p>
      </div>
      <div className="d-flex flex-wrap w-20 companyFooterLinks">
        <h3 className="w-100 mb-24">About</h3>
        <ul>
          <li>
            <FooterLink to="/" title="atmegame">
              Home
            </FooterLink>
          </li>
          <li>
            <FooterLink to="/submit-game" title="Submit a Game">
              Submit a Game
            </FooterLink>
          </li>
          <li>
            <FooterLink to="/about-us" title="About Us">
              About Us
            </FooterLink>
          </li>
          <li>
            <FooterLink to="/blog" title="Blog">
              Blog
            </FooterLink>
          </li>
          <li>
            <FooterLink to="/sitemap.html" title="Sitemap">
              Sitemap
            </FooterLink>
          </li>
          <li>
            <FooterLink to="/contact-us" title="Contact Us">
              Contact Us
            </FooterLink>
          </li>
        </ul>
      </div>
      <div className="d-flex flex-wrap w-20 gamesFooterLinks">
        <h3 className="w-100 mb-24">Games</h3>
        <ul>
          <li>
            <FooterLink to="/online-sports-games" title="Sports Games">
              Sports Games
            </FooterLink>
          </li>
          <li>
            <FooterLink to="/online-action-games" title="Action Games">
              Action Games
            </FooterLink>
          </li>
          <li>
            <FooterLink to="/online-arcade-games" title="Arcade Games">
              Arcade Games
            </FooterLink>
          </li>
          <li>
            <FooterLink to="/online-racing-games" title="Racing Games">
              Racing Games
            </FooterLink>
          </li>
          <li>
            <FooterLink to="/online-adventure-games" title="Adventure Games">
              Adventure Games
            </FooterLink>
          </li>
          <li>
            <FooterLink to="/online-girls-games" title="Girls Games">
              Girls Games
            </FooterLink>
          </li>
        </ul>
      </div>
      <div className="d-flex flex-wrap w-20 socialFooterLinks">
        <h3 className="w-100 mb-24">Connect</h3>
        <ul>
          <li>
            <a
              href="https://www.facebook.com/Atmegame"
              rel="noopener noreferrer"
              target="_blank"
              className="fb"
            >
              Facebook{" "}
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/atmegame"
              target="_blank"
              rel="noopener noreferrer"
              className="tw"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/atmegame"
              target="_blank"
              rel="noopener noreferrer"
              className="insta"
            >
              Instagram{" "}
            </a>
          </li>
          <li>
            <a
              href="https://in.pinterest.com/atmegame"
              target="_blank"
              rel="noopener noreferrer"
              className="pin"
            >
              Pinterest{" "}
            </a>
          </li>
        </ul>
      </div>
      {copyRightInfo()}
    </FooterWrapper>
  );
};

export default Footer;
