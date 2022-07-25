import React from "react";

import AddClient from "../component/AddClient";
import Client from "../component/Client";
import Project from '../component/Project';
import AddProject from "../component/AddProject";

const Home = () => {
  return (
    <React.Fragment>
      <div className="d-flex gap-3 mb-4">
        <AddClient />
        <AddProject />
      </div>
      <Client />
      <hr />
      <Project />
    </React.Fragment>
  );
};

export default Home;
