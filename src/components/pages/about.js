import React from "react";
import profilePicture from "../../../static/assets/images/bio/rockprofilepic.jpg";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />

      <div className="right-column">
        <div>
          <h1>My story</h1>
        </div>

        <div>
          Rock Hudgens enjoys working on a team that allows for his creativity
          to flourish and strives for nothing less than excellence. From his
          first job working for the Houston Astros, to the smallest of
          start-ups, he takes pride in the work he puts in. Rock's passion is to
          help others find their true potential in what they love doing. He's
          skilled in graphical design and software engineering and is currently
          working on a double major in computer science and business management
          with a minor in biblical studies at Arizona Christian University.
        </div>
      </div>
    </div>
  );
}
