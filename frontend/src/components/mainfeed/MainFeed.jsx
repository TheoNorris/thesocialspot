import { useEffect, useState } from "react";
import { Feed } from "./Feed";

export function MainFeed() {
  return (
    <div className="container feed-container">
      <div className="feed-div">
        <Feed />
      </div>
      <div className="feed-div">
        <Feed />
      </div>
    </div>
  );
}
