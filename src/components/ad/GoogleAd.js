import React, { Component } from "react";

class GoogleAd extends Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  componentDidUpdate(prevProps) {
    if (this.props.path !== prevProps.path) {
      if (window.adsbygoogle) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    }
  }

  render() {
    const { googleAddId, slot, path } = this.props;

    const style = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    };

    return (
      <div style={{ width: "100%" }}>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
        {this.props.dataAdHost && (
          <ins
            key={path}
            className="adsbygoogle"
            style={style}
            data-ad-host="ca-host-pub-1234"
            data-ad-client={googleAddId}
            data-ad-slot={slot}
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
        )}
        {!this.props.dataAdHost && (
          <ins
            key={path}
            className="adsbygoogle"
            style={style}
            data-ad-client={googleAddId}
            data-ad-slot={slot}
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
        )}
      </div>
    );
  }
}

export default GoogleAd;
