import { delay } from "redux-saga";
import { call, put, takeEvery, select } from "redux-saga/effects";
import { getDataWithoutToken } from "../util/ajax";
import API from "../api_config";
import { browserHistory } from "react-router";
import ACTION from "../action_constants";
import CONSTANTS from "../common_constants";
import history from "../history";

import DataModel from "../model/DataModel";

const responseStruture = {
  data: [
    {
      profileImage:
        "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTc0FCED4ph6ouevcPKpUexEae42sK1L4abdr36cYbFg4G4ofQlf6Ap41qwSQE4bCej.ENDwdWBb6xDzigKhhH0qYvtoqHqiprHkhGpbyYtNJE3oju9YrHyPXal_7gB.XZvNrsFG5dcIRXfUV33KDFrPeFl379b5KBjp2MNGhf.7LU-&h=1080&w=1920&format=jpg",
      sourceIcon: "Facebook",
      uploadDate: "21-10-1994",
      countLikes: "21",
      countComment: "2",
      description: "MA LIFE MA RULE!!"
    },
    {
      profileImage:
        "https://image.redbull.com/rbcom/010/2016-11-11/1331828802784_2/0001/1/3000/1/ezio-auditore-is-coming-to-current-gen-consoles.jpg",
      sourceIcon: "Facebook",
      uploadDate: "21-10-1994",
      countLikes: "21",
      countComment: "2",
      description: "MA LIFE MA RULE!!"
    },
    {
      profileImage:
        "http://hd.wallpaperswide.com/thumbs/assassins_creed_revelations-t2.jpg",
      sourceIcon: "Facebook",
      uploadDate: "21-10-1994",
      countLikes: "21",
      countComment: "2",
      description: "MA LIFE MA RULE!!"
    },
    {
      profileImage:
        "https://images-eds-ssl.xboxlive.com/image?url=8Oaj9Ryq1G1_p3lLnXlsaZgGzAie6Mnu24_PawYuDYIoH77pJ.X5Z.MqQPibUVTc0FCED4ph6ouevcPKpUexEae42sK1L4abdr36cYbFg4G4ofQlf6Ap41qwSQE4bCej.ENDwdWBb6xDzigKhhH0qYvtoqHqiprHkhGpbyYtNJE3oju9YrHyPXal_7gB.XZvNrsFG5dcIRXfUV33KDFrPeFl379b5KBjp2MNGhf.7LU-&h=1080&w=1920&format=jpg",
      sourceIcon: "Instagram",
      uploadDate: "22-10-1994",
      countLikes: "11",
      countComment: "8",
      description: "MA LIFE MA RULE!!"
    },
    {
      profileImage:
        "https://venturebeat.com/wp-content/uploads/2018/09/Assassins-Creed-3.jpg?fit=578%2C325&strip=all",
      sourceIcon: "Myspace",
      uploadDate: "21-09-1999",
      countLikes: "29",
      countComment: "66",
      description: "YOLO!!"
    }
  ]
};

function* image_detail(action) {
  try {
    const result = responseStruture.data.map((item, index) => {
      return new DataModel(item);
    });
    yield put({ type: ACTION.LANDING.PROFILEINFO, data: result });
  } catch (e) {
    console.error("error", e.message);
  }
}
export { image_detail };
