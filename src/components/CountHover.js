import React from "react";
import withCounter from "../hoc/withCounter";

class CountHover extends React.Component {
  render() {
    const { count, onCountIncrement } = this.props;
    return <div onMouseOver={onCountIncrement}>Hovered {count} times</div>;
  }
}

export default withCounter(CountHover);
