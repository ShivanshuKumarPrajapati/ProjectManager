import React from "react";

import AddClient from "../component/AddClient";
import Client from "../component/Client";
import Project from '../component/Project';

const Home = () => {
  return (
    <React.Fragment>
      <div className="d-flex gap-3 mb-4">
        <AddClient />
      </div>
      <Client />
      <hr />
      <Project />
    </React.Fragment>
  );
};

export default Home;
