export default class DataModel {
  constructor(datamodel) {
    this.profileImage = datamodel.profileImage;
    this.sourceIcon = datamodel.sourceIcon;
    this.uploadDate = datamodel.uploadDate;
    this.countLikes = datamodel.countLikes;
    this.countComment = datamodel.countComment;
    this.description = datamodel.description;
    this.user=datamodel.User;
    this.tag=datamodel.Tag;
    this.userLikedpic=datamodel.userLikedpic;
  }
}
