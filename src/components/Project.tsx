import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return (
      <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
          <div className="project">
            <img src={mock07} className="zoom" alt="thumbnail" width="100%" />
            <h2>Atukar: Simplified Cart System</h2>
            <p>
              A fully functional cart system developed using HTML, CSS, and
              JavaScript. It allows users to add, update, and manage items in
              their cart with a clean, responsive interface.
            </p>
          </div>

          <div className="project">
            <img src={mock06} className="zoom" alt="thumbnail" width="100%" />
            <h2>Portfolio Website</h2>
            <p>
              A modern portfolio website designed to showcase my projects and
              skills. Built from scratch using React.js and hosted on a global
              domain.
            </p>
          </div>

          <div className="project">
            <img src={mock03} className="zoom" alt="thumbnail" width="100%" />
            <h2>E-commerce Platform</h2>
            <p>
              Developed a fully functional e-commerce website using the MERN
              stack. Features include product listings, user authentication, and
              secure payment integration.
            </p>
          </div>

          <div className="project">
            <img src={mock02} className="zoom" alt="thumbnail" width="100%" />
            <h2>Qur'an Recitation Tracker</h2>
            <p>
              An interactive platform to help users track their progress in
              Qur'an recitation. Built using React.js and MongoDB to manage user
              data efficiently.
            </p>
          </div>
        </div>
      </div>
    );
}

export default Project;
