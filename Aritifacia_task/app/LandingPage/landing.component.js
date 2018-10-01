import React from "react";
import { connect } from "react-redux";
import ACTION from "../action_constants";
import { Link } from "react-router-dom";
import Naviagtion from "../common/Navigation/navigation.component";
import GridView from "../common/GridView/gridView.compoent";
import SingleView from "../common/SingleView/singleView.component";
import PopUpImage from "../common/Popup/popUp.component";

import "./landing.style.less";
class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: -1
    };
  }

  onClickSingleimage = (index, e) => {
    this.setState({
      activeIndex: index
    });
  };
  closePopup = () => {
    this.setState({
      activeIndex: -1
    });
  };
  render() {
    return (
      <div className="landing-component">
        {this.state.activeIndex >= 0 &&
          this.props.landing_reducer.profileinfo && (
            <PopUpImage
              closePopup={this.closePopup}
              index={this.state.activeIndex}
              profileinfo={this.props.landing_reducer.profileinfo}
            />
          )}
        <div className="landing-header">
          <Naviagtion />
        </div>
        <div className="landing-header">
          {this.props.common.navindex === 1 &&
            this.props.landing_reducer.profileinfo && (
              <div>
                <GridView
                  profileinfo={this.props.landing_reducer.profileinfo}
                  onClickSingleimage={this.onClickSingleimage}
                />
              </div>
            )}
          {this.props.common.navindex === 0 && (
            <div>
              <SingleView
                profileinfo={this.props.landing_reducer.profileinfo}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({ type: ACTION.CHECK.LOAD });
  }
}
const mapStateToProps = state => {
  return {
    landing_reducer: state.landing_reducer,
    common: state.common
  };
};
export default connect(mapStateToProps)(LandingPage);
