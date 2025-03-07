import React from 'react'
import { Link } from "gatsby"

import styles from "./styles/TutsBlock.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faWordpress,
  faReact,
  faVuejs,
  faJsSquare,
} from "@fortawesome/free-brands-svg-icons"
import {
  faDesktop,
  faFileCode,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons"

export default function TutsBlock() {
    return (
        <div className={styles.container}>
        <div className={styles.contentRegion1}>
          <section className="row">
            <div className="col-md-12">
              <h2>Programing Tutorials</h2>
              <p>Youtube,Udemy etc..</p>
            </div>
          </section>
        </div>

        <div className={styles.blockWrapper}>
          <section className="row">
            <div className="col-sm-6 col-lg-4">
              <div className={styles.block}>
                <Link to="/tuts/reaGatsby">
                  <FontAwesomeIcon
                    icon={faReact}
                    style={{ color: "#0FAF97", fontSize: "3rem" }}
                  />
                  <h3>
                    React
                    <br />
                    Gatsby
                  </h3>
                </Link>
                <p>React&Gatsby Tutorial Information</p>
              </div>

              <Link to="/tuts/reaGatsby">
                <div className={styles.blockMask}>
                  <div className={styles.blockCaption}>
                    <FontAwesomeIcon icon={faArrowCircleRight} />
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className={styles.block}>
                <Link to="/tuts/vuejs">
                  <FontAwesomeIcon
                    icon={faVuejs}
                    style={{ color: "#0FAF97", fontSize: "3rem" }}
                  />
                  <h3>
                    Vue.js
                    <br />
                    Gridsome
                  </h3>
                </Link>
                <p>VueJs&Gridsome Tutorial Information</p>
              </div>

              <Link to="/tuts/vuejs">
                <div className={styles.blockMask}>
                  <div className={styles.blockCaption}>
                    <FontAwesomeIcon icon={faArrowCircleRight} />
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className={styles.block}>
                <Link to="/tuts/wordpress">
                  <FontAwesomeIcon
                    icon={faWordpress}
                    style={{ color: "#0FAF97", fontSize: "3rem" }}
                  />
                  <h3>Wordpress</h3>
                </Link>
                <p>
                  Opensource ContentsManagementSystem(CMS).Initial Version
                  Released in Jul2003.
                </p>
              </div>

              <Link to="/tuts/wordpress">
                <div className={styles.blockMask}>
                  <div className={styles.blockCaption}>
                    <FontAwesomeIcon icon={faArrowCircleRight} />
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className={styles.block}>
                <Link to="/tuts/javascript">
                  <FontAwesomeIcon
                    icon={faJsSquare}
                    style={{ color: "#0FAF97", fontSize: "3rem" }}
                  />
                  <h3>JavaScript/jQuery</h3>
                </Link>
                <p>JavaScript&jQuery Tutorial Information</p>
              </div>

              <Link to="/tuts/javascript">
                <div className={styles.blockMask}>
                  <div className={styles.blockCaption}>
                    <FontAwesomeIcon icon={faArrowCircleRight} />
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className={styles.block}>
                <Link to="/tuts/htmlCss">
                  <FontAwesomeIcon
                    icon={faFileCode}
                    style={{ color: "#0FAF97", fontSize: "3rem" }}
                  />
                  <h3>HTML/CSS</h3>
                </Link>
                <p>HTML&CSS Tutorial Information</p>
              </div>

              <Link to="/tuts/htmlCss">
                <div className={styles.blockMask}>
                  <div className={styles.blockCaption}>
                    <FontAwesomeIcon icon={faArrowCircleRight} />
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div className={styles.block}>
                <Link to="/tuts/techNews">
                  <FontAwesomeIcon
                    icon={faDesktop}
                    style={{ color: "#0FAF97", fontSize: "3rem" }}
                  />
                  <h3>TechNews</h3>
                </Link>
                <p>TechNews&Tutorials</p>
              </div>

              <Link to="/tuts/techNews">
                <div className={styles.blockMask}>
                  <div className={styles.blockCaption}>
                    <FontAwesomeIcon icon={faArrowCircleRight} />
                  </div>
                </div>
              </Link>
            </div>
          </section>
        </div>
      </div>
    )
}
