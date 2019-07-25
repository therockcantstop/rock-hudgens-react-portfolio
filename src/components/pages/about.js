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
          <p>
            I have always enjoyed working on a team that allows for creativity
            in the workplace and strive for nothing less than excellence.
          </p>

          <p>
            {" "}
            From my first job as working for a major corporation, to the
            smallest of start-ups, I take pride in the work I put in, and it’s
            my passion to help others find their true potential in what they
            love as well. Being organized and punctual are foundationally my
            strengths.
          </p>

          <p>
            I am also skilled in graphical design, software engineering, being
            in charge of people, and enjoy working on anything concerning UI/UX.
            Learning new things and curating newly facilitated ideas is what I
            do best, and am passionate about new ideas.
          </p>

          <p>
            I thrive in conflict and enjoy being in leadership roles. I’m almost
            finished with my triple major in computer science, business
            management, and biblical studies at Arizona Christian University
            (Two years early)
          </p>
        </div>
      </div>
    </div>
  );
}
