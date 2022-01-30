import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.nav} bg-${props.nav}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  {props.about}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  {props.contact}
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {props.source}
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      {props.source1}
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      {props.source2}
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      {props.source3}
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <div>
              <button
                type="button"
                className="btn btn-secondary colorbatan"
                onClick={props.coloredMode1}
              ></button>
              <button
                type="button"
                className="btn btn-success colorbatan"
                onClick={props.coloredMode2}
              ></button>
              <button
                type="button"
                className="btn btn-danger colorbatan"
                onClick={props.coloredMode3}
              ></button>
              <button
                type="button"
                className="btn btn-warning colorbatan"
                onClick={props.coloredMode4}
              ></button>
              <button
                type="button"
                className="btn btn-info colorbatan"
                onClick={props.coloredMode5}
              ></button>
            </div>
            <button
              className={`btn btn-${props.mode} batan`}
              type="text"
              onClick={props.togglemode}
            >
              {props.btntext}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

// Navbar.PropTypes = {
//   title: PropTypes.string.isRequired,
//   about: PropTypes.string,
//   contact: PropTypes.string,
//   source: PropTypes.string,
//   source1: PropTypes.string,
//   source2: PropTypes.string,
//   source3: PropTypes.string
// };

Navbar.defaultProps = {
  title: "Default Title",
  about: "Default About",
  contact: "Default Contact",
};
