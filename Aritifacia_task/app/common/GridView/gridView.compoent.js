import React from "react";
import { connect } from "react-redux";
import ACTION from "../../action_constants";
import { Link } from "react-router-dom";
import "./gridView.style.less";

class GridView extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { profileinfo } = this.props;
    return (
      <div className="gridview-component">
        {profileinfo.map((item, index) => {
          return (
            <div className="cardview" key={index}>
              <img className="cardview-image" src={item.profileImage} />
              <div className="cardview-text">+</div>
            </div>
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    common: state.common
  };
};
export default connect(mapStateToProps)(GridView);
