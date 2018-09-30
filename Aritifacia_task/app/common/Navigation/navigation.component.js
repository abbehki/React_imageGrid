import React from "react";
import { connect } from "react-redux";
import ACTION from "../../action_constants";
import { Link } from "react-router-dom";
import "./naviagtion.style.less";
class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }
  onClickHandler = (index, e) => {
    if (this.state.activeIndex === index) {
      if (index === 0) {
        this.setState({
          activeIndex: 1
        });
      } else {
        this.setState({
          activeIndex: 0
        });
      }
      this.props.dispatch({ type: ACTION.COMMON.NAVINDEX, data: index });
    }
  };

  render() {
    return (
      <div className="navigation-component">
        <div
          onClick={this.onClickHandler.bind(this, 1)}
          className={
            this.state.activeIndex === 0
              ? "active-state cursor-state"
              : "cursor-state"
          }
        >
          All
        </div>
        <div
          onClick={this.onClickHandler.bind(this, 0)}
          className={
            this.state.activeIndex === 1
              ? "active-state cursor-state"
              : "cursor-state"
          }
        >
          Indiviual
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    common: state.common_reducer
  };
};
export default connect(mapStateToProps)(Navigation);
