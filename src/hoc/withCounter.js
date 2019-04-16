import React from "react";

const withCounter = WrappedComponent => {
  class EnhancedComponent extends React.Component {
    state = { count: 0 };

    onCountIncrement = () => {
      this.setState(prevState => {
        return { count: prevState.count + 1 };
      });
    };
    render() {
      return (
        <WrappedComponent
          {...this.props}
          count={this.state.count}
          onCountIncrement={this.onCountIncrement}
        />
      );
    }
  }

  return EnhancedComponent;
};

export default withCounter;
