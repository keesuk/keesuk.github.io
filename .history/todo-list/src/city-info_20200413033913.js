import React, { PureComponent } from "react";

export default class CityInfo extends PureComponent {
  render() {
    const { info } = this.props;
    const displayName = `${info.city}, ${info.state}`;

    return (
      <div>
        <div>
          {displayName} |{" "}
          <a
          >
          </a>
        </div>
        <img width={240} src={info.image} />
      </div>
    );
  }
}
