import React from "react";
import { connect } from "react-redux";
import ACTION from "../../action_constants";
import { Link } from "react-router-dom";

import "./popUp.style.less";
class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }
  indexChange = (value, e) => {
    if (value === "next") {
      if (this.state.activeIndex !== this.props.profileinfo.length - 1) {
        console.log(this.state.activeIndex, this.props.profileinfo.length);
        this.setState({
          activeIndex: ++this.state.activeIndex
        });
      } else {
        console.log("hi2");
        this.setState({
          activeIndex: 0
        });
      }
    } else {
      if (this.state.activeIndex !== 0) {
        this.setState({
          activeIndex: --this.state.activeIndex
        });
      } else {
        this.setState({
          activeIndex: this.props.profileinfo.length - 1
        });
      }
    }
  };
  render() {
    const { profileinfo } = this.props;
    const index = this.state.activeIndex;
    return (
      <div className="popup-component">
        <div className="popUp-close" onClick={this.props.closePopup.bind(this)}>
          X
        </div>
        <div className="popup-container">
          <div className="arrow-image">
            <div
              className="arrow"
              onClick={this.indexChange.bind(this, "previous")}
            >
              {" "}
              &lt;{" "}
            </div>
            <img
            title={profileinfo[index].tag}
              className="profile-image"
              src={profileinfo[index].profileImage}
              alt="No pic avaliable"
            />
            <div
              className="arrow"
              onClick={this.indexChange.bind(this, "next")}
            >
              {" "}
              &gt;
            </div>
          </div>
          <div className="detail-content">
            <div className="user">
              {profileinfo[index].user}
              {"  "}
              <span>{profileinfo[index].uploadDate}</span>
            </div>
            <p className="description">{profileinfo[index].description}</p>
            <div className="like-comment">
              <div className="likes">
                <span>Likes : </span>
                {profileinfo[index].countLikes}
              </div>
              <div className="comment">
                <span>Comments : </span>
                {profileinfo[index].countComment}
              </div>
            </div>
            <div className="source">
              <span>Source - </span>
              {profileinfo[index].sourceIcon}
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.setState({
      activeIndex: this.props.index
    });
  }
}
const mapStateToProps = state => {
  return {
    common: state.common
  };
};
export default connect(mapStateToProps)(Popup);
