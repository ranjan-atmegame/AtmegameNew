import { Component } from "react";
// import axios from "../../config/axios";

// import loadable from "@loadable/component";
import { lazy } from "@loadable/component";

import { AdLarge, AdContainer, AdWrapper, AdText, AdCode } from "./AdStyles";

const GoogleAd = lazy(() => import("./GoogleAd"));
// import GoogleAd from "./GoogleAd";
// import "./ad.style.css";

class DomainAddSingle extends Component {
  state = { hostName: null, publisherId: null };

  fetchPublisherByHostName = async (hostName) => {
    // const response = await axios.get(`/publisher/${hostName}`);

    // return response.data.result;
    return null;
  };

  componentDidMount() {
    const result = localStorage.getItem("host");
    if (result) {
      let { hostName, publisherId } = JSON.parse(result);
      return this.setState({
        hostName: hostName,
        publisherId: publisherId,
      });
    }

    const windowHostName = window.location.hostname;
    this.fetchPublisherByHostName(windowHostName)
      .then((result) => {
        if (!result?.publisherId) {
          return this.setState({ hostName: "default" });
        }

        const addState = {
          hostName: result.hostName,
          publisherId: result.publisherId,
        };

        localStorage.setItem("host", JSON.stringify(addState));

        this.setState(addState);
      })
      .catch((error) => {
        console.log(error);
        this.setState({ hostName: null, publisherId: null });
      });
  }

  shouldComponentUpdate(prevProps, prevState) {
    if (
      this.props.path === prevProps.path &&
      this.state.hostName === prevState.hostName
    ) {
      return false;
    }
    return true;
  }

  render() {
    const { publisherId } = this.state;

    // const addClass = this.props.addClass ? this.props.addClass : "";
    // const grayBox = this.props.grayBox ? "" : "gray-box";

    return (
      <AdLarge>
        <AdContainer>
          <AdWrapper>
            <AdText>Advertisement</AdText>
            <AdCode>
              {publisherId && (
                <GoogleAd
                  googleAddId={publisherId}
                  slot="5329618300"
                  dataAdHost={true}
                  path={this.props.path}
                />
              )}
              {!publisherId && (
                <GoogleAd
                  googleAddId="ca-pub-9733910408335876"
                  slot="5329618300"
                  path={this.props.path}
                />
              )}
            </AdCode>
          </AdWrapper>
        </AdContainer>
      </AdLarge>
    );
  }
}

export default DomainAddSingle;
