import { useEffect, useState } from "react";
import logo from "../../images/blacklogo.png";

export function Feed() {
  return (
    <>
      <div className="card feed-card">
        <div className="card-body">
          <div className="profile-name-holder">
            <img src={logo} className="profile-image" alt="" />
            <div className="subject-user-div">
              <h5 className="feed-subject card-title">SUBJECT</h5>
              <h6 className="user-time card-subtitle mb-2 text-body-secondary">
                USERNAME · TIME
              </h6>
            </div>
          </div>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button>LIKES</button>
          <button>COMMENTS</button>
        </div>
        <p className="more-comments">VIEW MORE COMMENTS..</p>
        <div className="card-body comment-card">
          <div className="comment-inner-div">
            <div className="profile-name-holder">
              <img src={logo} className="profile-image" alt="" />
              <h6 className="user-time card-subtitle mb-2 text-body-secondary">
                USERNAME · TIME
              </h6>
            </div>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button>LIKES</button>
          </div>
        </div>
      </div>
    </>
  );
}
