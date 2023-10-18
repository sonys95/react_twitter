import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faBtc,
  faGithub,
  faInstagram,
  faDiscord,
  faSlack,
  faDocker,
} from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Navigation = ({ userObj }) => (
  <nav>
    <ul
      style={{
        display: "flex",
        flexDirection: "column",
        alignitems: "center",
      }}
    >
      <li>
        <Link to="/" style={{ marginRight: 10 }}>
          <FontAwesomeIcon icon={faTwitter} color={"#04AAFF"} size="2x" />
        </Link>
      </li>
      <li>
        <Link
          to="/profile"
          style={{
            marginRight: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontSize: 12,
          }}
        >
          <FontAwesomeIcon icon={faUser} color={"#04AAFF"} size="2x" />
          <span style={{ marginTop: 10, color: "black" }}>
            {userObj.displayName ? `${userObj.displayName}` : "Profile"}
          </span>
        </Link>
      </li>
      <li>
        <Link to="/" style={{ marginRight: 10 }}>
          <FontAwesomeIcon icon={faBtc} color={"#04AAFF"} size="2x" />
        </Link>
      </li>
      <li>
        <Link to="/" style={{ marginRight: 10 }}>
          <FontAwesomeIcon icon={faGithub} color={"#04AAFF"} size="2x" />
        </Link>
      </li>
      <li>
        <Link to="/" style={{ marginRight: 10 }}>
          <FontAwesomeIcon icon={faInstagram} color={"#04AAFF"} size="2x" />
        </Link>
      </li>
      <li>
        <Link to="/" style={{ marginRight: 10 }}>
          <FontAwesomeIcon icon={faDiscord} color={"#04AAFF"} size="2x" />
        </Link>
      </li>
      <li>
        <Link to="/" style={{ marginRight: 10 }}>
          <FontAwesomeIcon icon={faSlack} color={"#04AAFF"} size="2x" />
        </Link>
      </li>
      <li>
        <Link to="/" style={{ marginRight: 10 }}>
          <FontAwesomeIcon icon={faDocker} color={"#04AAFF"} size="2x" />
        </Link>
      </li>
    </ul>
  </nav>
);
export default Navigation;
