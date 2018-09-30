import React from "react";
import { connect } from "react-redux";
import ACTION from "../../action_constants";
import { Link } from "react-router-dom";
import "./singleView.style.less";

class SingleView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentCount: 0 };
  }
  render() {
    const { profileinfo } = this.props;
    return (
      <div className="singleview-component">
      <div className="index-value">{this.state.currentCount+1}.</div>
        <div className="singlecard">
          <img
            className="singlecard-image"
            src={profileinfo[this.state.currentCount].profileImage}
          />
        </div>
      </div>
    );
  }
  timer() {
    if (this.state.currentCount === this.props.profileinfo.length - 1) {
      console.log("1", this.state.currentCount);
      this.setState({
        currentCount: 0
      });
    } else {
      console.log("2", this.state.currentCount);
      this.setState({
        currentCount: this.state.currentCount + 1
      });
    }
  }
  componentDidMount() {
    this.intervalId = setInterval(this.timer.bind(this), 3000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
}
const mapStateToProps = state => {
  return {
    common: state.common
  };
};
export default connect(mapStateToProps)(SingleView);
