import React from "react";
import withCounter from "../hoc/withCounter";

class CountClick extends React.Component {
  render() {
    const { count, onCountIncrement } = this.props;
    return <button onClick={onCountIncrement}>Clicked {count} times</button>;
  }
}

export default withCounter(CountClick);
